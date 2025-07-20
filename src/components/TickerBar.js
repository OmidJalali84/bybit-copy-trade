// Enhanced TickerBar with smooth scrolling animation
import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function TickerBar() {
  const tickerData = [
    {
      symbol: "BTC/USDT",
      price: "43,256.78",
      change: "+2.34%",
      isPositive: true,
    },
    {
      symbol: "ETH/USDT",
      price: "2,567.45",
      change: "+1.87%",
      isPositive: true,
    },
    {
      symbol: "BNB/USDT",
      price: "312.67",
      change: "-0.45%",
      isPositive: false,
    },
    { symbol: "ADA/USDT", price: "0.4567", change: "+3.21%", isPositive: true },
    { symbol: "SOL/USDT", price: "98.34", change: "+5.67%", isPositive: true },
    { symbol: "DOT/USDT", price: "7.89", change: "-1.23%", isPositive: false },
    {
      symbol: "MATIC/USDT",
      price: "0.8765",
      change: "+2.89%",
      isPositive: true,
    },
    { symbol: "LINK/USDT", price: "15.67", change: "+4.12%", isPositive: true },
    { symbol: "UNI/USDT", price: "6.78", change: "-0.78%", isPositive: false },
    { symbol: "AVAX/USDT", price: "23.45", change: "+1.56%", isPositive: true },
  ];

  return (
    <div className="w-full bg-gray-900/90 border-b border-blue-900/40 py-3 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-track">
          {/* First set of items */}
          {tickerData.map((item, index) => (
            <div
              key={`first-${index}`}
              className="ticker-item inline-flex items-center gap-3 px-6 text-white/80 whitespace-nowrap"
            >
              <span className="font-semibold text-sm">{item.symbol}</span>
              <span className="text-sm">${item.price}</span>
              <div
                className={`flex items-center gap-1 text-sm ${
                  item.isPositive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{item.change}</span>
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {tickerData.map((item, index) => (
            <div
              key={`second-${index}`}
              className="ticker-item inline-flex items-center gap-3 px-6 text-white/80 whitespace-nowrap"
            >
              <span className="font-semibold text-sm">{item.symbol}</span>
              <span className="text-sm">${item.price}</span>
              <div
                className={`flex items-center gap-1 text-sm ${
                  item.isPositive ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{item.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .ticker-track {
          display: flex;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .ticker-item {
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause animation on hover */
        .ticker-container:hover .ticker-track {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
