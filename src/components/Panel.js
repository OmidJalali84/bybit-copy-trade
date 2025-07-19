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
  User,
  Clock,
  Calendar,
  ExternalLink,
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

// Enhanced Modal for position details
function PositionDetailsModal({ open, onClose, position }) {
  if (!open || !position) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 max-w-md w-full mx-4 overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative px-6 py-4 flex items-center justify-between">
            <h2 className="text-white text-xl font-bold flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Position Details
            </h2>
            <button
              className="text-white/70 hover:text-white text-2xl font-bold transition-colors"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {[
            { label: "Opened", value: position.opened, icon: Calendar },
            {
              label: "Symbol",
              value: position.symbol,
              icon: Target,
              hasImage: true,
            },
            {
              label: "Entry Price",
              value: position.entryPrice,
              icon: DollarSign,
            },
            {
              label: "Close Price",
              value: position.closePrice,
              icon: DollarSign,
            },
            {
              label: "P/L",
              value: `${position.pnl > 0 ? "+" : ""}${position.pnl.toFixed(
                2
              )} USDT`,
              icon: TrendingUp,
              isProfit: true,
            },
            {
              label: "Side",
              value: position.side,
              icon: Activity,
              isSide: true,
            },
            {
              label: "Leverage",
              value: `${position.leverage}x`,
              icon: Zap,
              isLeverage: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/20 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-700">
                  {item.label}:
                </span>
              </div>
              <div className="flex items-center gap-2">
                {item.hasImage && (
                  <img
                    src={position.icon}
                    alt={position.symbol}
                    className="w-8 h-8 rounded-full shadow"
                  />
                )}
                <span
                  className={`font-bold ${
                    item.isProfit
                      ? position.pnl > 0
                        ? "text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full"
                        : "text-red-600 bg-red-100 px-3 py-1 rounded-full"
                      : item.isSide
                      ? position.side === "Short"
                        ? "text-red-600 bg-red-100 px-3 py-1 rounded-full"
                        : "text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full"
                      : item.isLeverage
                      ? "text-blue-600 bg-blue-100 px-3 py-1 rounded-full"
                      : "text-gray-700"
                  }`}
                >
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-t border-white/20">
          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
            <ExternalLink className="w-5 h-5" />
            Share Position
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Panel() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

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

  // Mock position details
  const mockDetails = {
    opened: "2025/07/13 09:30:03",
    icon: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=029",
    symbol: "ADAUSDT",
    entryPrice: "0.72260900",
    closePrice: "0.72747900",
    pnl: 8.0,
    side: "Short",
    leverage: 20,
  };

  return (
    <div className="min-h-screen bg-gray-900 bg-gradient-to-br from-[#0f172a] to-[#1e293b] font-inter w-full">
      {" "}
      <Navigation />
      <TickerBar />
      {/* Hero Section */}
      <div className="relative overflow-hidden mt-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Trading Control
              <span className="block bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Panel
              </span>
            </h1>
            <p className="text-xl text-white/80">
              Monitor your copy trading performance and manage positions
            </p>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 pb-12 space-y-12 w-full">
        {/* Portfolio Summary */}
        <section className="relative w-full pt-12">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center w-full">
              {/* Asset Value */}
              <div className="text-center lg:text-left">
                <div className="flex items-center gap-3 justify-center lg:justify-start mb-2">
                  <Wallet className="w-6 h-6 text-blue-400" />
                  <span className="text-white/80 text-lg">
                    Copy Trading Asset
                  </span>
                </div>
                <span className="text-white text-4xl font-bold">$449</span>
              </div>
              {/* User Profile */}
              <div className="text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="User avatar"
                    className="w-20 h-20 rounded-full border-4 border-white/30 shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <span className="text-white text-xl font-semibold block">
                  User_irfqwtyv
                </span>
                <span className="text-white/60 text-sm">Premium Trader</span>
              </div>
              {/* P/L */}
              <div className="text-center lg:text-right">
                <div className="flex items-center gap-3 justify-center lg:justify-end mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  <span className="text-white/80 text-lg">P/L</span>
                </div>
                <div className="inline-block bg-gray-800/80 text-emerald-400 font-bold rounded-2xl px-6 py-3 text-2xl shadow-lg">
                  +50.40 USDT
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Bar */}
        <section className="relative w-full">
          <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">20</div>
                <div className="w-12 h-1 bg-white/60 rounded-full mx-auto mb-2"></div>
                <div className="uppercase text-white/80 tracking-wider font-semibold">
                  All Trades
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">1</div>
                <div className="w-12 h-1 bg-white/60 rounded-full mx-auto mb-2"></div>
                <div className="uppercase text-white/80 tracking-wider font-semibold">
                  Your Traders
                </div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800/70 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2">2</div>
                <div className="w-12 h-1 bg-white/60 rounded-full mx-auto mb-2"></div>
                <div className="uppercase text-white/80 tracking-wider font-semibold">
                  Days Active
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trading Positions */}
        <section className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm p-8 h-full flex flex-col items-start shadow-lg w-full">
          <div className="w-full">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-400 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  Copy Trade Positions
                </h2>
                <p className="text-white/80">
                  View and manage your active positions
                </p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-700">
                    <th className="text-left py-6 px-6 text-white/80 font-bold text-lg">
                      Position
                    </th>
                    <th className="text-center py-6 px-6 text-white/80 font-bold text-lg">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {historyRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-800 hover:bg-gray-800/40 transition-all duration-300"
                    >
                      <td className="py-6 px-6">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <img
                              src={row.icon}
                              alt={row.symbol}
                              className="w-12 h-12 rounded-full object-cover shadow-lg"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                          </div>
                          <div>
                            <div className="font-bold text-xl text-white">
                              {row.symbol}
                            </div>
                            <div className="text-white/60 text-sm">
                              Active Position
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-6 text-center">
                        <button
                          className="bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 mx-auto"
                          onClick={() => {
                            setSelectedPosition({ ...mockDetails, ...row });
                            setModalOpen(true);
                          }}
                        >
                          <Eye className="w-5 h-5" />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Modal */}
        <PositionDetailsModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          position={selectedPosition}
        />
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
