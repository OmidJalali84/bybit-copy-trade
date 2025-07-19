"use client";

import React, { useState } from "react";
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
  Clock,
  Plus,
  Minus,
  X,
} from "lucide-react";

// Enhanced TickerBar with animations
function TickerBar() {
  const [cryptos] = useState([
    { symbol: "BTC", price: "97,432.50", change: "+2.34%" },
    { symbol: "ETH", price: "3,847.21", change: "-1.12%" },
    { symbol: "SOL", price: "245.67", change: "+5.78%" },
    { symbol: "ADA", price: "0.8921", change: "+3.45%" },
    { symbol: "XRP", price: "2.4567", change: "-0.89%" },
    { symbol: "DOT", price: "12.34", change: "+2.11%" },
  ]);

  return (
    <div className="bg-gradient-to-r from-[#0f172a] via-blue-900 to-green-900 py-3 px-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
      <div className="flex animate-scroll space-x-8 text-sm font-medium">
        {[...cryptos, ...cryptos].map((crypto, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2 whitespace-nowrap"
          >
            <span className="text-white font-bold">{crypto.symbol}/USDT</span>
            <span className="text-gray-300">${crypto.price}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold ${
                crypto.change.startsWith("+")
                  ? "text-emerald-400 bg-emerald-400/20"
                  : "text-red-400 bg-red-400/20"
              }`}
            >
              {crypto.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="w-full backdrop-blur-lg bg-gray-900/90 border-b border-blue-900/40 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            TradeFlex
          </span>
        </div>
        <nav className="flex gap-8 text-lg font-medium">
          {["Dashboard", "Panel", "Wallet"].map((item, idx) => (
            <a
              key={idx}
              href={`/${item.toLowerCase()}`}
              className="relative group py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-green-900/40"
            >
              <span className="text-white/80 group-hover:text-blue-400 transition-colors">
                {item}
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
            </a>
          ))}
          <button className="text-white/60 hover:text-red-400 transition-colors font-medium">
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}

export default function WalletPage() {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const availableBalance = 14;

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-inter w-full">
      {" "}
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
                <button className="flex-1 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600 text-white font-bold rounded-xl px-6 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  Deposit
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
