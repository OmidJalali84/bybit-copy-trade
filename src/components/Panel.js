"use client";

import React, { useState } from "react";
import TickerBar from "./TickerBar";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Modal component for position details using MUI Modal
function PositionDetailsModal({ open, onClose, position }) {
  if (!open || !position) return null;
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="position-details-title"
      aria-describedby="position-details-description"
      sx={{ zIndex: 1500 }}
      BackdropProps={{ style: { backgroundColor: "rgba(0,0,0,0.15)" } }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          borderRadius: 4,
          boxShadow: "0 8px 40px rgba(30,60,114,0.35)",
          overflow: "hidden",
          p: 0,
        }}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1e3c72] to-[#2a5298] px-6 py-4 flex items-center justify-between">
          <span className="text-white text-xl font-bold">Position Details</span>
          <button
            className="text-white text-2xl font-bold hover:text-gray-200 focus:outline-none"
            onClick={onClose}
            aria-label="Close"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            ×
          </button>
        </div>
        {/* Content */}
        <div className="p-6 space-y-4 bg-[#f5f6fa]">
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">Opened:</span>
            <span className="text-gray-700">{position.opened}</span>
          </div>
          <div className="flex items-center bg-white rounded-lg px-4 py-3 gap-4">
            <span className="font-semibold text-gray-700">Symbol:</span>
            <img
              src={position.icon}
              alt={position.symbol}
              className="w-10 h-10 rounded-full shadow"
            />
            <span className="text-gray-700 font-bold">{position.symbol}</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">Entry Price:</span>
            <span className="text-gray-700">{position.entryPrice}</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">Close Price:</span>
            <span className="text-gray-700">{position.closePrice}</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">P/L:</span>
            <span
              className={`px-4 py-1 rounded-full font-bold text-white ${
                position.pnl > 0 ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {position.pnl > 0 ? "+" : ""}
              {position.pnl.toFixed(2)} USDT
            </span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">Side:</span>
            <span
              className={`px-4 py-1 rounded-full font-bold text-white ${
                position.side === "Short" ? "bg-red-600" : "bg-green-600"
              }`}
            >
              {position.side}
            </span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-lg px-4 py-3">
            <span className="font-semibold text-gray-700">Leverage:</span>
            <span className="px-4 py-1 rounded-full font-bold text-white bg-blue-600">
              {position.leverage}x
            </span>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white px-6 py-4 flex justify-start border-t">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg text-base transition">
            Share
          </button>
        </div>
      </Box>
    </Modal>
  );
}

export default function Panel() {
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

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);

  // Mock position details (replace with real data as needed)
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
          {/* Only History Table */}
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
                      <button
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition"
                        onClick={() => {
                          // For now, always show mockDetails. Later, use row data.
                          setSelectedPosition({ ...mockDetails, ...row });
                          setModalOpen(true);
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Modal for position details (conditionally rendered) */}
        {modalOpen && (
          <PositionDetailsModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            position={selectedPosition}
          />
        )}
        {/* Footer */}
        <footer className="w-full text-center text-gray-400 text-sm mt-8 mb-2">
          © 2025. All Rights Reserved.
        </footer>
      </main>
    </div>
  );
}
