"use client";

import React, { useState } from "react";
import TickerBar from "./TickerBar";


export default function Panel() {
  const [activeTab, setActiveTab] = useState("myTrader");

  // Sample data for Current Copy
  const currentCopyRows = [
    {
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
      symbol: "ETHUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "+15.01 USDT",
      plColor: "text-green-600",
      loading: false,
    },
    {
      icon: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=029",
      symbol: "MATICUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "Loading...",
      plColor: "text-gray-400",
      loading: true,
    },
    {
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=029",
      symbol: "SOLUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "+0.56 USDT",
      plColor: "text-green-600",
      loading: false,
    },
    {
      icon: "https://cryptologos.cc/logos/tron-trx-logo.png?v=029",
      symbol: "TRXUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "-10.25 USDT",
      plColor: "text-red-500",
      loading: false,
    },
    {
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029",
      symbol: "BTCUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "+2.61 USDT",
      plColor: "text-green-600",
      loading: false,
    },
    {
      icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=029",
      symbol: "DOTUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "-1.92 USDT",
      plColor: "text-red-500",
      loading: false,
    },
    {
      icon: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=029",
      symbol: "SHIBUSDT",
      trader: "Novin Trader",
      traderAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      pl: "-5.05 USDT",
      plColor: "text-red-500",
      loading: false,
    },
  ];

  // Sample data for History
  const historyRows = [
    {
      icon: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=029",
      symbol: "ADAUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=029",
      symbol: "BNBUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=029",
      symbol: "XRPUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=029",
      symbol: "LTCUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029",
      symbol: "BTCUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/tron-trx-logo.png?v=029",
      symbol: "TRXUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=029",
      symbol: "ETHUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=029",
      symbol: "BTCUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/solana-sol-logo.png?v=029",
      symbol: "SOLUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png?v=029",
      symbol: "DOTUSDT",
    },
    {
      icon: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png?v=029",
      symbol: "SHIBUSDT",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col font-inter">
      <div className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-sm z-10">
        <span className="text-2xl font-bold text-black">MySite</span>
        <nav className="flex gap-8 text-lg font-medium">
          <a href="/" className="hover:underline text-black">
            Home
          </a>
          <a href="/panel" className="hover:underline text-black">
            Panel
          </a>
          <a href="/wallet" className="hover:underline text-black">
            Wallet
          </a>
          <a href="#" className="hover:underline text-black">
            Logout
          </a>
        </nav>
      </div>
      <TickerBar />
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center gap-8 py-8 px-2">
        {/* Blue Card */}
        <section className="w-full max-w-6xl rounded-2xl bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-12 shadow-lg mt-8 mx-auto flex flex-col md:flex-row items-center justify-between relative">
          {/* Left: Asset */}
          <div className="flex-1 flex flex-col items-start justify-center">
            <span className="text-gray-200 text-lg mb-2">
              Copy Trading Asset
            </span>
            <span className="text-white text-3xl font-bold">$449</span>
          </div>
          {/* Center: Divider (hidden on mobile) */}
          <div className="hidden md:block h-32 w-px bg-white/30 mx-8"></div>
          {/* Right: User Info */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="User avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow mb-2"
            />
            <span className="text-white text-lg font-semibold drop-shadow">
              User_irfqwtyv
            </span>
          </div>
          {/* Center: Divider (hidden on mobile) */}
          <div className="hidden md:block h-32 w-px bg-white/30 mx-8"></div>
          {/* Right: P/L */}
          <div className="flex-1 flex flex-col items-end justify-center">
            <span className="text-gray-200 text-lg mb-2">P/L</span>
            <span className="inline-block bg-white/90 text-green-700 font-bold rounded-full px-6 py-2 text-xl shadow">
              50.40 USDT
            </span>
          </div>
        </section>
        {/* Orange Stats Bar */}
        <section className="w-full max-w-6xl rounded-2xl bg-gradient-to-r from-[#ff9800] to-[#ffb800] p-8 shadow-lg mt-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white">20</span>
            <span className="w-8 h-1 bg-white/60 rounded-full my-2"></span>
            <span className="uppercase text-white/90 tracking-wider font-semibold">
              All Trades
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white">1</span>
            <span className="w-8 h-1 bg-white/60 rounded-full my-2"></span>
            <span className="uppercase text-white/90 tracking-wider font-semibold">
              Your Traders
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center">
            <span className="text-4xl font-extrabold text-white">2 days</span>
            <span className="w-8 h-1 bg-white/60 rounded-full my-2"></span>
            <span className="uppercase text-white/90 tracking-wider font-semibold">
              Your Activity Time
            </span>
          </div>
        </section>
        {/* Copy Trade Info Section */}
        <section className="w-full max-w-6xl rounded-2xl bg-white p-8 shadow-lg mt-8 mx-auto">
          <h2 className="text-2xl font-bold text-[#1e3c72] mb-6">
            Copy Trade Info
          </h2>
          <div className="border-b mb-4"></div>
          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <button
              className={`font-semibold rounded-xl px-10 py-4 shadow text-lg focus:outline-none ${
                activeTab === "myTrader"
                  ? "bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white"
                  : "bg-gray-100 text-[#1e3c72]"
              }`}
              onClick={() => setActiveTab("myTrader")}
            >
              My Trader
            </button>
            <button
              className={`font-semibold rounded-xl px-10 py-4 shadow text-lg focus:outline-none ${
                activeTab === "currentCopy"
                  ? "bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white"
                  : "bg-gray-100 text-[#1e3c72]"
              }`}
              onClick={() => setActiveTab("currentCopy")}
            >
              Current Copy
            </button>
            <button
              className={`font-semibold rounded-xl px-10 py-4 shadow text-lg focus:outline-none ${
                activeTab === "history"
                  ? "bg-gradient-to-r from-[#1e3c72] to-[#2a5298] text-white"
                  : "bg-gray-100 text-[#1e3c72]"
              }`}
              onClick={() => setActiveTab("history")}
            >
              History
            </button>
          </div>
          {/* Tab Content */}
          {activeTab === "myTrader" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-[#1e3c72] text-sm uppercase bg-gray-50">
                    <th className="py-3 px-6 font-bold">#</th>
                    <th className="py-3 px-6 font-bold">Trader</th>
                    <th className="py-3 px-6 font-bold">Assets Copy Trading</th>
                    <th className="py-3 px-6 font-bold">Copy Trading P/L</th>
                    <th className="py-3 px-6 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="py-4 px-6">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Novin Trader"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#1e3c72]">
                      Novin Trader
                    </td>
                    <td className="py-4 px-6 font-semibold text-[#1e3c72]">
                      449 USDT
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-block bg-green-100 text-green-700 font-bold rounded-full px-6 py-2 text-lg">
                        50.40 USDT
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full text-lg transition">
                        Stop Copy
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "currentCopy" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-[#1e3c72] text-sm uppercase bg-gray-50">
                    <th className="py-3 px-6 font-bold">Position</th>
                    <th className="py-3 px-6 font-bold">Live P/L</th>
                    <th className="py-3 px-6 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCopyRows.map((row, idx) => (
                    <tr key={idx} className="bg-white border-b">
                      <td className="py-4 px-6 font-semibold text-[#1e3c72] flex items-center gap-3">
                        <img
                          src={row.icon}
                          alt={row.symbol}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-bold">{row.symbol}</span>
                        <span className="text-xs text-gray-500">
                          Position Created by
                        </span>
                        <span className="font-bold">{row.trader}</span>
                        <img
                          src={row.traderAvatar}
                          alt={row.trader}
                          className="w-6 h-6 rounded-full object-cover ml-1"
                        />
                      </td>
                      <td className={`py-4 px-6 font-semibold ${row.plColor}`}>
                        {row.loading ? <span>Loading...</span> : row.pl}
                      </td>
                      <td className="py-4 px-6 flex gap-2">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg text-base transition">
                          Close
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {activeTab === "history" && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead>
                  <tr className="text-[#1e3c72] text-sm uppercase bg-gray-50">
                    <th className="py-3 px-6 font-bold">Position</th>
                    <th className="py-3 px-6 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {historyRows.map((row, idx) => (
                    <tr key={idx} className="bg-white border-b">
                      <td className="py-4 px-6 font-semibold text-[#1e3c72] flex items-center gap-3">
                        <img
                          src={row.icon}
                          alt={row.symbol}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="font-bold">{row.symbol}</span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition">
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
        {/* Footer */}
        <footer className="w-full text-center text-gray-400 text-sm mt-8 mb-2">
          © 2025. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
