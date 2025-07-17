"use client";
import React from "react";

export default function TickerBar() {
  const tickers = [
    { symbol: "USDT", price: "$1", change: "-0.02%", color: "text-red-500" },
    {
      symbol: "SOL",
      price: "$166.71",
      change: "+2.82%",
      color: "text-green-500",
    },
    {
      symbol: "ADA",
      price: "$0.747",
      change: "+2.44%",
      color: "text-green-500",
    },
    {
      symbol: "DOGE",
      price: "$0.206",
      change: "+3.86%",
      color: "text-green-500",
    },
    {
      symbol: "AVAX",
      price: "$21.71",
      change: "+2.14%",
      color: "text-green-500",
    },
    {
      symbol: "DOT",
      price: "$4.09",
      change: "+3.24%",
      color: "text-green-500",
    },
    {
      symbol: "TRX",
      price: "$0.303",
      change: "+0.05%",
      color: "text-green-500",
    },
    {
      symbol: "LINK",
      price: "$16.26",
      change: "+5.62%",
      color: "text-green-500",
    },
    {
      symbol: "LTC",
      price: "$97.13",
      change: "+2.37%",
      color: "text-green-500",
    },
    {
      symbol: "MATIC",
      price: "$0.238",
      change: "+2.54%",
      color: "text-green-500",
    },
  ];
  return (
    <div className="w-full bg-white shadow-sm border-b sticky top-0 z-30 overflow-hidden">
      <div
        className="flex items-center whitespace-nowrap animate-ticker gap-8 py-2 px-4"
        style={{ animation: "ticker 30s linear infinite" }}
      >
        {tickers.map((t, i) => (
          <span key={i} className="font-mono text-sm flex items-center gap-1">
            <span className="font-bold text-[#1e3c72]">{t.symbol}</span>
            <span>{t.price}</span>
            <span className={t.color}>{t.change}</span>
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-ticker {
          display: flex;
          min-width: 200%;
        }
      `}</style>
    </div>
  );
}
