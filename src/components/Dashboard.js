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
            <span className="text-blue-200">${crypto.price}</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-bold ${
                crypto.change.startsWith("+")
                  ? "text-green-400 bg-green-400/20"
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

// Enhanced Navigation with glass effect
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

// Enhanced ProTraderCard with glassmorphism
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
}) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 shadow-lg flex flex-col items-start w-full">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full border-2 border-white/20 object-cover shadow"
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

      {/* Performance Chart (optional, can keep or remove for simplicity) */}
      <div className="w-full h-16 mb-4">
        <svg width="100%" height="100%" viewBox="0 0 350 64">
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
          />
        </svg>
      </div>

      {/* Stats Grid */}
      <div className="w-full grid grid-cols-2 gap-4 mb-4">
        <div className="text-left">
          <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-5 h-5" />+{earn}
          </div>
          <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">
            EARN (USDT)
          </div>
        </div>
        <div className="text-left">
          <div className="text-lg font-bold text-emerald-400 flex items-center gap-1">
            <Target className="w-5 h-5" />+{roi}%
          </div>
          <div className="text-xs text-white/60 font-semibold uppercase tracking-wide">
            ROI (30D)
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-3 mb-4">
        <div className="text-left">
          <div className="text-base font-bold text-emerald-400">{winRate}%</div>
          <div className="text-xs text-white/60 font-semibold">WIN RATE</div>
        </div>
        <div className="text-left">
          <div className="text-base font-bold text-blue-400">
            {aum.toLocaleString()}
          </div>
          <div className="text-xs text-white/60 font-semibold">AUM</div>
        </div>
        <div className="text-left">
          <div className="text-base font-bold text-purple-400">{sharpe}</div>
          <div className="text-xs text-white/60 font-semibold">SHARPE</div>
        </div>
      </div>
      <div className="w-full pt-2">
        {isCopying ? (
          <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Eye className="w-5 h-5" /> STOP COPY TRADE
          </button>
        ) : (
          <button className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
            <Copy className="w-5 h-5" /> COPY TRADE
          </button>
        )}
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [stats, setStats] = useState({
    balance: 463,
    totalLoss: 106.9,
    totalProfit: 157.3,
  });

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-inter w-full">
      <Navigation />
      <TickerBar />

      {/* Hero Section */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to Your Trading
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Command Center
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Monitor your portfolio, track performance, and discover top
              traders all in one place.
            </p>
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
              <button className="w-full md:w-auto bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-bold rounded-xl px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                <Activity className="w-5 h-5" />
                MY COPY TRADE PANEL
              </button>
            </div>
          </div>
        </section>

        {/* Top Traders Section */}
        <section>
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
              isCopying={false}
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
              isCopying={true}
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
              isCopying={false}
            />
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
