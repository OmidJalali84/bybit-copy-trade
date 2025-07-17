"use client";

import React from "react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { useRouter } from "next/navigation";
import TickerBar from "./TickerBar";

export default function Home() {
  const router = useRouter();
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
      {/* BYBIT Logo Bar */}
      <div className="w-full h-[70px] flex items-center justify-center relative bg-black border-b border-[#2d2d2d]">
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
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center gap-8 py-8 px-2">
        {/* Overview Card */}
        <section className="w-full max-w-6xl rounded-2xl bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-8 shadow-lg mt-8 mx-auto">
          <h2 className="text-white text-2xl font-semibold mb-2">Overview</h2>
          <div className="flex items-end justify-between">
            <span className="text-5xl font-extrabold text-white drop-shadow">
              $463
            </span>
          </div>
          {/* Performance Overview */}
          <div className="bg-[#2d3a4a]/80 rounded-2xl p-6 flex flex-col gap-4 mt-4">
            <span className="text-lg font-bold text-white tracking-wide mb-2">
              PERFORMANCE OVERVIEW
            </span>
            <div className="flex gap-8 justify-center">
              <div className="bg-[#232f3e]/80 rounded-xl px-8 py-6 flex flex-col items-center min-w-[180px]">
                <span className="text-2xl font-bold text-red-500">
                  106.90 USDT
                </span>
                <span className="text-white text-sm mt-1">TOTAL LOSS</span>
              </div>
              <div className="bg-[#232f3e]/80 rounded-xl px-8 py-6 flex flex-col items-center min-w-[180px]">
                <span className="text-2xl font-bold text-green-400">
                  157.30 USDT
                </span>
                <span className="text-white text-sm mt-1">TOTAL PROFIT</span>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="flex items-center gap-2 bg-white text-[#1e3c72] font-semibold rounded-xl px-8 py-3 shadow hover:bg-[#e3e8f0] hover:text-[#1746a2] hover:shadow-lg transition">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 12H8m0 0l4-4m-4 4l4 4" />
                </svg>
                MY COPY TRADE PANEL
              </button>
            </div>
          </div>
        </section>
        {/* Placeholder for more sections */}
        <section className="w-full max-w-6xl rounded-2xl bg-white p-8 shadow-lg mt-4 mx-auto">
          <span className="text-xl font-bold text-[#1e3c72] flex items-center gap-2">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="#1e3c72"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 12h8m-4-4v8" />
            </svg>
            ALL PRO TRADERS
          </span>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4">
            <ProTraderCard
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
              name="Anjuta"
              followers="123/1000"
              isVip={true}
              chartColor="#00ff99"
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
              chartColor="#00ff99"
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
              chartColor="#00ff99"
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
    </div>
  );
}

function ProTraderCard({
  avatar,
  name,
  followers,
  isVip,
  chartColor,
  earn,
  roi,
  winRate,
  aum,
  sharpe,
  isCopying,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg flex flex-col min-w-[280px] w-full mx-auto mb-6 overflow-hidden border border-gray-200 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:shadow-xl">
      
      <div className="bg-gradient-to-br from-[#1e3c72] to-[#2a5298] p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full border-4 border-white object-cover"
          />
          <div>
            <div className="text-white font-bold text-xl leading-tight">
              {name}
            </div>
            <div className="text-white/80 text-sm flex items-center gap-1">
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>{" "}
              {followers} Followers
            </div>
          </div>
        </div>
        {isVip && (
          <span className="bg-yellow-400 text-white font-bold px-3 py-1 rounded-lg shadow text-xs">
            VIP
          </span>
        )}
      </div>
      {/* Chart placeholder */}
      <div className="bg-gradient-to-b from-green-200/60 to-white h-24 flex items-end">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 350 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="0,80 40,70 80,60 120,50 160,40 200,30 240,20 280,30 320,40 350,20"
            stroke={chartColor}
            strokeWidth="4"
            fill="none"
          />
        </svg>
      </div>
      <div className="flex flex-wrap justify-between items-center px-6 py-4 text-center text-[#1e3c72] font-bold text-lg">
        <div className="flex-1">
          <div className="text-green-500 text-2xl font-bold">+{earn}</div>
          <div className="text-xs text-gray-500 font-semibold">EARN (USDT)</div>
        </div>
        <div className="flex-1">
          <div className="text-green-500 text-2xl font-bold">+{roi}%</div>
          <div className="text-xs text-gray-500 font-semibold">ROI (30D)</div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center px-6 pb-4 text-center text-[#1e3c72] text-base">
        <div className="flex-1">
          <div className="text-green-500 font-bold">{winRate}%</div>
          <div className="text-xs text-gray-500 font-semibold">WIN RATE</div>
        </div>
        <div className="flex-1">
          <div className="text-green-500 font-bold">{aum.toLocaleString()}</div>
          <div className="text-xs text-gray-500 font-semibold">AUM (USDT)</div>
        </div>
        <div className="flex-1">
          <div className="text-green-500 font-bold">{sharpe}</div>
          <div className="text-xs text-gray-500 font-semibold">SHARPE</div>
        </div>
      </div>
      <div className="px-6 pb-6">
        {isCopying ? (
          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl text-lg transition flex items-center justify-center gap-2">
            <span className="text-xl">&#10006;</span> STOP COPY TRADE
          </button>
        ) : (
          <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#1e3c72] font-bold py-3 rounded-xl text-lg transition flex items-center justify-center gap-2">
            <span className="text-xl">&#43;</span> COPY TRADE
          </button>
        )}
      </div>
    </div>
  );
}
