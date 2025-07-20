"use client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 from-[#0f172a] to-[#1e293b] flex flex-col font-sans w-full">
      <ToastContainer position="top-right" autoClose={4000} />
      {/* Header */}
      <header className="w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-6 gap-4 sm:gap-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">C</span>
          </div>
          <span className="text-2xl font-bold text-white">CopyTrade</span>
        </div>
        <nav className="flex gap-6 sm:gap-8 text-lg font-medium text-white/80 flex-wrap justify-center">
          <a href="#features" className="hover:text-white transition">
            Features
          </a>
          <a href="#how" className="hover:text-white transition">
            How It Works
          </a>
          <a href="#traders" className="hover:text-white transition">
            Traders
          </a>
          <a href="#security" className="hover:text-white transition">
            Security
          </a>
        </nav>
      </header>
      {/* Banner */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 w-full">
        <div className="mb-4 w-full flex justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-900/60 text-blue-300 font-medium text-sm">
            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 align-middle"></span>
            Platform 2.0 is now live
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 w-full">
          Copy Trades from{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Pro Traders
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 w-full">
          Automatically replicate trades from verified professional traders.
          Start building wealth with proven strategies and advanced risk
          management.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full">
          <a href="/dashboard">
            <button className="px-8 py-4 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition w-full sm:w-auto">
              Start Copying Trades &rarr;
            </button>
          </a>
          <a href="/dashboard">
            <button className="px-8 py-4 rounded-lg border border-white/20 text-white/90 font-bold text-lg shadow-lg hover:bg-white/10 transition w-full sm:w-auto">
              View Top Traders
            </button>
          </a>
        </div>
        <div className="flex flex-wrap gap-8 justify-center mt-8 w-full">
          <div className="flex flex-col items-center w-1/2 sm:w-auto">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              25,000+
            </span>
            <span className="text-white/60 mt-1 text-sm sm:text-base">
              Active Traders
            </span>
          </div>
          <div className="flex flex-col items-center w-1/2 sm:w-auto">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              $125M+
            </span>
            <span className="text-white/60 mt-1 text-sm sm:text-base">
              Total Returns
            </span>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              2.3M+
            </span>
            <span className="text-white/60 mt-1 text-sm sm:text-base">
              Trades Executed
            </span>
          </div>
        </div>
      </div>
      {/* Features Section */}
      <section id="features" className="py-20 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
            Powerful Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Smart Trading
            </span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            Our platform combines cutting-edge technology with intuitive design
            to give you the tools you need for successful copy trading.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 1 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-copy w-6 h-6 text-blue-400"
                >
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Auto Copy Trades
              </h3>
              <p className="text-white/80">
                Automatically replicate trades from professional traders in
                real-time with customizable position sizing.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 2 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-trending-up w-6 h-6 text-blue-400"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Real-time PnL Tracking
              </h3>
              <p className="text-white/80">
                Monitor your portfolio performance with detailed analytics and
                profit/loss tracking across all positions.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 3 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield w-6 h-6 text-blue-400"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Secure Wallet Integration
              </h3>
              <p className="text-white/80">
                Connect your existing wallets with bank-grade security and never
                share your private keys.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 4 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-target w-6 h-6 text-blue-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Risk Scoring System
              </h3>
              <p className="text-white/80">
                Advanced risk assessment for every trader with detailed
                volatility and drawdown analysis.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 5 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-bar-chart3 w-6 h-6 text-blue-400"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="M18 17V9"></path>
                  <path d="M13 17V5"></path>
                  <path d="M8 17v-3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Trader Stats & History
              </h3>
              <p className="text-white/80">
                Comprehensive performance history with win rates, returns, and
                detailed trading patterns.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Feature 6 Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users w-6 h-6 text-blue-400"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Community Insights
              </h3>
              <p className="text-white/80">
                Learn from a community of successful traders and share
                strategies with verified members.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <a href="/dashboard">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
                Start Your Free Trial
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section id="how" className="py-20 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Works
            </span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            Get started in minutes with our simple 4-step process
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white text-2xl font-bold mb-4">
                1
              </div>
              <div className="mb-2">
                {/* Wallet Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <rect
                    x="4"
                    y="7"
                    width="16"
                    height="10"
                    rx="3"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <circle cx="8" cy="12" r="1.5" fill="#4fd1c5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 text-center">
                Connect Your Wallet
              </h3>
              <p className="text-white/80 text-center text-sm">
                Securely link your existing crypto wallet or exchange account in
                under 2 minutes.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white text-2xl font-bold mb-4">
                2
              </div>
              <div className="mb-2">
                {/* Search Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <circle
                    cx="11"
                    cy="11"
                    r="6"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <path
                    d="M20 20l-3.5-3.5"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 text-center">
                Choose Top Traders
              </h3>
              <p className="text-white/80 text-center text-sm">
                Browse verified traders, analyze their performance, and select
                the ones that match your goals.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white text-2xl font-bold mb-4">
                3
              </div>
              <div className="mb-2">
                {/* Settings Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <path
                    d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09c.7 0 1.31-.4 1.51-1a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09c.7 0 1.31-.4 1.51-1V3a2 2 0 1 1 4 0v.09c0 .7.4 1.31 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09c0 .7.4 1.31 1 1.51h.09a2 2 0 1 1 0 4h-.09c-.7 0-1.31.4-1.51 1z"
                    stroke="#4fd1c5"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 text-center">
                Set Your Preferences
              </h3>
              <p className="text-white/80 text-center text-sm">
                Configure position sizing, risk limits, and which assets you
                want to trade automatically.
              </p>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-400 text-white text-2xl font-bold mb-4">
                4
              </div>
              <div className="mb-2">
                {/* Play Icon */}
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <polygon points="10,8 18,12 10,16" fill="#4fd1c5" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 text-center">
                Start Copying
              </h3>
              <p className="text-white/80 text-center text-sm">
                Sit back and watch as trades are automatically executed in your
                account in real-time.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <a href="/dashboard">
              <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
                Get Started Now
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* Top Performing Traders Section */}
      <section id="traders" className="py-20 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
            Top{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Performing Traders
            </span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            Follow verified traders with proven track records and consistent
            returns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Trader 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full shadow-lg flex flex-col items-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Alex Chen"
                  className="w-12 h-12 rounded-full border-2 border-blue-400"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg flex items-center gap-1">
                    Alex Chen{" "}
                    <span className="text-blue-400 text-base">&#10003;</span>
                  </span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-yellow-400 bg-yellow-400/10">
                  Medium Risk
                </span>
              </div>
              <div className="flex gap-6 my-4 w-full justify-between">
                <div className="flex flex-col items-center">
                  <span className="text-green-400 text-2xl font-bold">
                    +234.6%
                  </span>
                  <span className="text-white/70 text-xs">Total Return</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 text-2xl font-bold">
                    87.5%
                  </span>
                  <span className="text-white/70 text-xs">Win Rate</span>
                </div>
              </div>
              <div className="flex gap-6 mb-4 w-full justify-between text-white/60 text-xs">
                <span>&#128101; 12,500 followers</span>
                <span>&#128200; 1247 trades</span>
              </div>
              <a href="/dashboard">
                <button className="w-full mt-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
                  Copy Trader
                </button>
              </a>
            </div>
            {/* Trader 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full shadow-lg flex flex-col items-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full border-2 border-green-400"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg flex items-center gap-1">
                    Sarah Johnson{" "}
                    <span className="text-blue-400 text-base">&#10003;</span>
                  </span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-green-400 bg-green-400/10">
                  Low Risk
                </span>
              </div>
              <div className="flex gap-6 my-4 w-full justify-between">
                <div className="flex flex-col items-center">
                  <span className="text-green-400 text-2xl font-bold">
                    +189.2%
                  </span>
                  <span className="text-white/70 text-xs">Total Return</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 text-2xl font-bold">
                    92.3%
                  </span>
                  <span className="text-white/70 text-xs">Win Rate</span>
                </div>
              </div>
              <div className="flex gap-6 mb-4 w-full justify-between text-white/60 text-xs">
                <span>&#128101; 8,900 followers</span>
                <span>&#128200; 892 trades</span>
              </div>
              <a href="/dashboard">
                <button className="w-full mt-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
                  Copy Trader
                </button>
              </a>
            </div>
            {/* Trader 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full shadow-lg flex flex-col items-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Marcus Rodriguez"
                  className="w-12 h-12 rounded-full border-2 border-red-400"
                />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg flex items-center gap-1">
                    Marcus Rodriguez{" "}
                    <span className="text-blue-400 text-base">&#10003;</span>
                  </span>
                  <span className="text-yellow-400 text-sm">★★★★★</span>
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium text-red-400 bg-red-400/10">
                  High Risk
                </span>
              </div>
              <div className="flex gap-6 my-4 w-full justify-between">
                <div className="flex flex-col items-center">
                  <span className="text-green-400 text-2xl font-bold">
                    +345.8%
                  </span>
                  <span className="text-white/70 text-xs">Total Return</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-blue-400 text-2xl font-bold">
                    78.9%
                  </span>
                  <span className="text-white/70 text-xs">Win Rate</span>
                </div>
              </div>
              <div className="flex gap-6 mb-4 w-full justify-between text-white/60 text-xs">
                <span>&#128101; 15,200 followers</span>
                <span>&#128200; 2341 trades</span>
              </div>
              <a href="/dashboard">
                <button className="w-full mt-auto px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
                  Copy Trader
                </button>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <span className="text-white/70 mb-4">
              Want to see more traders?
            </span>
            <a href="/dashboard">
              <button className="bg-gray-800 border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200">
                Browse All Traders
              </button>
            </a>
          </div>
        </div>
      </section>
      {/* What Our Users Say Section */}
      <section id="testimonials" className="py-20 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Users Say
            </span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            Join thousands of satisfied traders who trust our platform
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-2">
                {/* Quote Icon */}
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-blue-400 mr-2"
                >
                  <path
                    d="M7 17c0-2.21 1.79-4 4-4V7c-3.31 0-6 2.69-6 6v4h6v-2H7z"
                    fill="#4fd1c5"
                  />
                </svg>
                <span className="text-yellow-400 text-lg ml-auto">★★★★★</span>
              </div>
              <p className="text-white/90 mb-6 flex-1">
                "CopyTrade has transformed my investment strategy. I've seen
                consistent returns by following top performers."
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/43.jpg"
                  alt="David Park"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="text-white font-bold block">David Park</span>
                  <span className="text-white/60 text-sm">Crypto Investor</span>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-2">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-blue-400 mr-2"
                >
                  <path
                    d="M7 17c0-2.21 1.79-4 4-4V7c-3.31 0-6 2.69-6 6v4h6v-2H7z"
                    fill="#4fd1c5"
                  />
                </svg>
                <span className="text-yellow-400 text-lg ml-auto">★★★★★</span>
              </div>
              <p className="text-white/90 mb-6 flex-1">
                "The risk management tools are exceptional. I can copy trades
                while maintaining my risk tolerance."
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Emily Watson"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="text-white font-bold block">
                    Emily Watson
                  </span>
                  <span className="text-white/60 text-sm">
                    Portfolio Manager
                  </span>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-2">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-blue-400 mr-2"
                >
                  <path
                    d="M7 17c0-2.21 1.79-4 4-4V7c-3.31 0-6 2.69-6 6v4h6v-2H7z"
                    fill="#4fd1c5"
                  />
                </svg>
                <span className="text-yellow-400 text-lg ml-auto">★★★★★</span>
              </div>
              <p className="text-white/90 mb-6 flex-1">
                "As a professional trader, sharing my strategies through
                CopyTrade has created an additional revenue stream."
              </p>
              <div className="flex items-center mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/men/77.jpg"
                  alt="James Liu"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <span className="text-white font-bold block">James Liu</span>
                  <span className="text-white/60 text-sm">Day Trader</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trusted by Leading Institutions Section */}
      <section id="trusted" className="py-12 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-white mb-8">
            Trusted by Leading Institutions
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/dashboard">
              <div className="bg-[#22335a] rounded-lg px-8 py-4 text-white text-lg font-semibold shadow-md min-w-[140px] text-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
                CoinBase
              </div>
            </a>
            <a href="/dashboard">
              <div className="bg-[#22335a] rounded-lg px-8 py-4 text-white text-lg font-semibold shadow-md min-w-[140px] text-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
                Binance
              </div>
            </a>
            <a href="/dashboard">
              <div className="bg-[#22335a] rounded-lg px-8 py-4 text-white text-lg font-semibold shadow-md min-w-[140px] text-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
                Kraken
              </div>
            </a>
            <a href="/dashboard">
              <div className="bg-[#22335a] rounded-lg px-8 py-4 text-white text-lg font-semibold shadow-md min-w-[140px] text-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
                FTX
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* Security & Trust Section */}
      <section id="security" className="py-20 bg-transparent w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-4">
            Security &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Trust
            </span>
          </h2>
          <p className="text-center text-lg text-white/80 mb-12">
            Your security is our top priority. We use industry-leading
            technology to keep your assets safe and secure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Security Feature 1 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Shield Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Bank-Grade Security
              </h3>
              <p className="text-white/80">
                Multi-layer encryption and security protocols protect your
                assets 24/7.
              </p>
            </div>
            {/* Security Feature 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Lock Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <rect
                    x="7"
                    y="11"
                    width="10"
                    height="6"
                    rx="2"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 11V9a3 3 0 1 1 6 0v2"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Private Key Protection
              </h3>
              <p className="text-white/80">
                Your private keys never leave your wallet. We never have access
                to your funds.
              </p>
            </div>
            {/* Security Feature 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Eye Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <ellipse
                    cx="12"
                    cy="12"
                    rx="8"
                    ry="5"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="2" fill="#4fd1c5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Full Transparency
              </h3>
              <p className="text-white/80">
                All trades are visible and verifiable. Complete audit trails for
                every transaction.
              </p>
            </div>
            {/* Security Feature 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* File Text Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <rect
                    x="7"
                    y="7"
                    width="10"
                    height="14"
                    rx="2"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <path d="M9 11h6M9 15h4" stroke="#4fd1c5" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-white/80">
                Fully compliant with global financial regulations and KYC/AML
                requirements.
              </p>
            </div>
            {/* Security Feature 5 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Server Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <rect
                    x="5"
                    y="7"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                  <circle cx="8" cy="12" r="1" fill="#4fd1c5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Infrastructure Security
              </h3>
              <p className="text-white/80">
                Enterprise-grade infrastructure with 99.9% uptime and DDoS
                protection.
              </p>
            </div>
            {/* Security Feature 6 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col items-start shadow-lg hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <div className="mb-4 p-3 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-lg">
                {/* Zap Icon */}
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="none" />
                  <path
                    d="M13 10V6l-4 8h4v4l4-8h-4z"
                    stroke="#4fd1c5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Real-time Monitoring
              </h3>
              <p className="text-white/80">
                Advanced threat detection and 24/7 security monitoring systems.
              </p>
            </div>
          </div>
          {/* Security by Numbers & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {/* Security by Numbers */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col justify-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">
                Security by Numbers
              </h4>
              <div className="flex flex-col gap-3 text-lg">
                <div className="flex justify-between">
                  <span className="text-white/80">Uptime</span>
                  <span className="text-green-400 font-bold">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Funds Protected</span>
                  <span className="text-blue-400 font-bold">$125M+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Security Incidents</span>
                  <span className="text-green-400 font-bold">0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/80">Users Protected</span>
                  <span className="text-blue-400 font-bold">25,000+</span>
                </div>
              </div>
            </div>
            {/* Certifications & Compliance */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm hover:border-gray-600 transition-all duration-300 p-8 h-full flex flex-col justify-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-6">
                Certifications & Compliance
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <a href="/dashboard">
                  <div className="bg-[#22335a] rounded-lg px-4 py-3 text-white text-center font-semibold">
                    SOC 2 Type II
                  </div>
                </a>
                <a href="/dashboard">
                  <div className="bg-[#22335a] rounded-lg px-4 py-3 text-white text-center font-semibold">
                    ISO 27001
                  </div>
                </a>
                <a href="/dashboard">
                  <div className="bg-[#22335a] rounded-lg px-4 py-3 text-white text-center font-semibold">
                    PCI DSS
                  </div>
                </a>
                <a href="/dashboard">
                  <div className="bg-[#22335a] rounded-lg px-4 py-3 text-white text-center font-semibold">
                    GDPR Compliant
                  </div>
                </a>
              </div>
              <span className="text-white/60 text-sm">
                Audited by leading security firms and compliant with
                international standards.
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Security Highlight Section (moved here) */}
      <section
        id="security-highlight"
        className="flex justify-center py-12 w-full"
      >
        <div className="bg-gradient-to-br from-[#15304b] to-[#18344f] rounded-2xl shadow-xl max-w-4xl w-full px-8 py-12 flex flex-col items-center hover:-translate-y-1 hover:scale-[1.03] transition-transform duration-300 hover:shadow-2xl">
          <div className="mb-4">
            {/* Shield Icon */}
            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z"
                stroke="#4fd1c5"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2">
            Your Security is Guaranteed
          </h3>
          <p className="text-center text-white/80 mb-8 max-w-2xl">
            We're so confident in our security that we offer insurance coverage
            for all user funds. Trade with complete peace of mind.
          </p>
          <a href="/dashboard">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 text-white font-bold text-lg shadow-lg transition hover:opacity-90">
              Learn More About Security
            </button>
          </a>
        </div>
      </section>
      {/* Start Copy Trading Today Section */}
      <section id="start-copy" className="py-20 bg-transparent w-full">
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Start Copy Trading{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
              Today
            </span>
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-xl">
            Join thousands of traders who are already earning consistent
            returns. Get started with our free trial and see the difference
            professional strategies can make.
          </p>
          <ul className="mb-6 space-y-3">
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Start with $1000 in virtual funds
            </li>
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Access to top 100 traders
            </li>
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Real-time portfolio analytics
            </li>
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              Risk management tools
            </li>
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              24/7 customer support
            </li>
            <li className="flex items-center justify-center text-white/90 text-lg">
              <span className="mr-3 text-green-400">
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="12" fill="#22c55e" />
                  <path
                    d="M8 12.5l3 3 5-5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              No hidden fees for 30 days
            </li>
          </ul>
          <div className="flex flex-wrap justify-center gap-8 text-white/70 text-base mb-2">
            <span>&#10003; 25,000+ Active Users</span>
            <span>&#10003; $125M+ Protected</span>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="bg-[#111827] border-t border-blue-900/40 pt-12 pb-4 mt-12 w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-start gap-12 md:gap-8">
          {/* Left: Logo and Description */}
          <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <span className="text-2xl font-bold text-white">CopyTrade</span>
            </div>
            <p className="text-white/70 mb-4 text-sm max-w-xs">
              The most advanced copy trading platform for cryptocurrency. Follow
              top traders and automate your investment strategy.
            </p>
            <div className="flex gap-4 text-white/60 text-xl">
              <a
                href="https://twitter.com/Bybit_Official"
                aria-label="Twitter"
                className="hover:text-blue-400 transition"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6.99A4.11 4.11 0 0 0 11.5 8.1c0 .32.04.64.1.94A11.65 11.65 0 0 1 3.1 4.87a4.11 4.11 0 0 0 1.27 5.48A4.07 4.07 0 0 1 2.8 9.3v.05a4.11 4.11 0 0 0 3.3 4.03c-.2.05-.41.08-.62.08-.15 0-.3-.01-.44-.04a4.12 4.12 0 0 0 3.84 2.85A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 5.92z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/bybitexchange/"
                aria-label="LinkedIn"
                className="hover:text-blue-400 transition"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M16 8a6 6 0 0 1 6 6v5h-4v-5a2 2 0 0 0-4 0v5h-4v-5a6 6 0 0 1 6-6zM2 9h4v12H2z"
                    fill="currentColor"
                  />
                  <circle cx="4" cy="4" r="2" fill="currentColor" />
                </svg>
              </a>
              {/* <a
                href="#"
                aria-label="GitHub"
                className="hover:text-blue-400 transition"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}
              {/* <a
                href="#"
                aria-label="Email"
                className="hover:text-blue-400 transition"
              >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M4 4h16v16H4V4zm8 8l8-5H4l8 5zm0 2l-8-5v10h16V9l-8 5z"
                    fill="currentColor"
                  />
                </svg>
              </a> */}
            </div>
          </div>
          {/* Right: Links */}
          <div className="flex-[2] grid grid-cols-2 sm:grid-cols-4 gap-8 w-full">
            <div>
              <h4 className="text-white font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a
                    href="https://www.bybit.com/en/trade/spot/BTC/USDT"
                    className="hover:text-blue-400 transition"
                  >
                    Trade
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/en/earn/home"
                    className="hover:text-blue-400 transition"
                  >
                    Earn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/future-activity/en/developer"
                    className="hover:text-blue-400 transition"
                  >
                    API
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Documentation
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a
                    href="https://www.bybit.com/en/promo/global/aboutus/"
                    className="hover:text-blue-400 transition"
                  >
                    About
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Blog
                  </a>
                </li> */}
                <li>
                  <a
                    href="https://www.bybit.com/en/promo/global/careers/"
                    className="hover:text-blue-400 transition"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/en/help-center/case-list"
                    className="hover:text-blue-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Resources</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a
                    href="https://www.bybit.com/en/help-center/"
                    className="hover:text-blue-400 transition"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="https://learn.bybit.com/"
                    className="hover:text-blue-400 transition"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/en/promo/global/communities/"
                    className="hover:text-blue-400 transition"
                  >
                    Community
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Status
                  </a>
                </li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li>
                  <a
                    href="https://www.bybit.com/app/terms-service/privacyPolicy"
                    className="hover:text-blue-400 transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/app/terms-service/information"
                    className="hover:text-blue-400 transition"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bybit.com/app/user/proof-of-reserve"
                    className="hover:text-blue-400 transition"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-blue-900/40 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-white/40 text-xs px-4">
          <span className="mb-2 md:mb-0">
            © 2025 CopyTrade. All rights reserved.
          </span>
          <div className="flex gap-4">
            <a
              href="https://www.bybit.com/app/terms-service/privacyPolicy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.bybit.com/app/terms-service/information"
              className="hover:text-blue-400 transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
