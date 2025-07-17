"use client";
import React, { useState } from "react";
import TickerBar from "./TickerBar";


export default function Wallet() {
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [amount, setAmount] = useState("");
  const [wallet, setWallet] = useState("");
  const [email, setEmail] = useState("");
  const availableBalance = 14;

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
      {/* Withdraw Modal */}
      {showWithdraw && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl"
              onClick={() => setShowWithdraw(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-[#1e3c72] mb-6">Withdraw</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Amount ($)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    step="any"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                  <button
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg px-4 py-2 ml-2"
                    onClick={() => setAmount(availableBalance)}
                  >
                    Max
                  </button>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Available Balance: {availableBalance} USDT
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Wallet Address (TRC20)
                </label>
                <input
                  type="text"
                  value={wallet}
                  onChange={(e) => setWallet(e.target.value)}
                  placeholder="Enter Wallet Address"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  className="flex-1 bg-gray-100 text-gray-700 font-medium rounded-lg px-6 py-2 text-base hover:bg-gray-200 transition shadow-sm border border-gray-200"
                  onClick={() => setShowWithdraw(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg px-6 py-2 text-base transition shadow-sm border border-green-500"
                >
                  CONFIRM WITHDRAWAL
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Main section: User and Balance */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mt-12 mb-8">
        {/* User Card */}
        <div className="flex-1 bg-gradient-to-br from-[#1e3c72] to-[#2a5298] rounded-2xl shadow-lg flex flex-col items-center justify-center p-10 min-w-[280px]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow mb-4"
          />
          <span className="text-white text-xl font-semibold mb-1">
            User_irfqwtyv
          </span>
          <span className="text-blue-200 text-base">Premium Member</span>
        </div>
        {/* Balance Card */}
        <div className="flex-1 bg-gradient-to-br from-[#3a8dde] to-[#1e3c72] rounded-2xl shadow-lg flex flex-col justify-between p-10 min-w-[280px]">
          <div>
            <span className="text-white text-lg tracking-widest">
              AVAILABLE BALANCE
            </span>
            <div className="flex items-end gap-2 mt-4 mb-2">
              <span className="text-white text-5xl font-extrabold">$14</span>
            </div>
            <div className="flex items-center gap-2 text-blue-100 text-sm mt-2">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M1 12a11 11 0 1 0 22 0A11 11 0 0 0 1 12Zm10-5v6l4 2" />
              </svg>
              Last updated: 1 minute ago
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <button className="bg-white text-[#1e3c72] font-bold rounded-full px-8 py-3 text-lg shadow hover:bg-gray-100 transition">
              + Deposit
            </button>
            <button
              className="border-2 border-white text-white font-bold rounded-full px-8 py-3 text-lg hover:bg-white hover:text-[#1e3c72] transition"
              onClick={() => setShowWithdraw(true)}
            >
              – Withdraw
            </button>
          </div>
        </div>
      </div>
      {/* Transaction History */}
      <section className="w-full max-w-6xl rounded-2xl bg-white p-8 shadow-lg mx-auto mb-8">
        <h2 className="text-xl font-bold text-[#1e3c72] mb-6">
          Transaction History
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="text-[#1e3c72] text-sm uppercase bg-gray-50">
                <th className="py-3 px-6 font-bold">Date</th>
                <th className="py-3 px-6 font-bold">Type</th>
                <th className="py-3 px-6 font-bold">Amount</th>
                <th className="py-3 px-6 font-bold">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="py-4 px-6 font-semibold text-[#1e3c72]">
                  2025-07-12 15:47
                </td>
                <td className="py-4 px-6">
                  <span className="inline-block bg-green-100 text-green-700 font-bold rounded-full px-6 py-2 text-base">
                    Deposit
                  </span>
                </td>
                <td className="py-4 px-6 text-green-600 font-bold">+14.83$</td>
                <td className="py-4 px-6">
                  <span className="inline-block bg-green-100 text-green-700 font-bold rounded-full px-6 py-2 text-base">
                    Completed
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Footer */}
      <footer className="w-full text-center text-gray-400 text-sm mt-8 mb-2">
        © 2025. All Rights Reserved.
      </footer>
    </div>
  );
}
