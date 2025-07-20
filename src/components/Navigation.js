// Enhanced Navigation with hamburger menu
import { TrendingUp, Menu, X } from "lucide-react";
import { Wallet, LogOut } from "lucide-react";
import { useState } from "react";
import { useWallet } from "../contexts/WalletContext";

function formatAddress(address) {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
}

export default function Navigation() {
  const { address, isConnecting, connect, disconnect } = useWallet();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleConnect = async () => {
    try {
      await connect();
      setIsMenuOpen(false); // Close menu after action
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
      setIsMenuOpen(false); // Close menu after action
    } catch (err) {
      console.error("Disconnection failed:", err);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative w-full backdrop-blur-lg bg-gray-900/90 border-b border-blue-900/40 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-600 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              TradeFlex
            </span>
          </div>

          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="flex gap-8 text-lg font-medium">
              {["Dashboard", "Panel", "Wallet"].map((item, idx) => (
                <a
                  key={idx}
                  href={`/${item.toLowerCase()}`}
                  className="relative group py-2 px-4 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-green-900/40"
                >
                  <span className="text-white/80 group-hover:text-blue-400 transition-colors whitespace-nowrap">
                    {item}
                  </span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </nav>
          </div>

          {/* Desktop Wallet Button - hidden on mobile */}
          <div className="hidden lg:flex flex-shrink-0 ml-2">
            {address ? (
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-900/60 to-green-900/60 text-white font-semibold rounded-lg px-5 py-2 transition shadow-lg border border-blue-700 hover:border-blue-400"
                onClick={handleDisconnect}
                title="Logout"
              >
                <Wallet className="w-5 h-5" />
                <span className="font-mono text-base">
                  {formatAddress(address)}
                </span>
                <LogOut className="w-4 h-4 ml-1 text-red-400" />
              </button>
            ) : (
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold rounded-lg px-5 py-2 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleConnect}
                disabled={isConnecting}
              >
                <Wallet className="w-5 h-5" />
                {isConnecting ? "Logging in..." : "Login"}
              </button>
            )}
          </div>

          {/* Hamburger Menu Button - visible on mobile/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-blue-900/60 to-green-900/60 text-white transition-all duration-300 hover:from-blue-800/60 hover:to-green-800/60"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full border-t border-blue-900/40 bg-gray-900/95 backdrop-blur-lg z-50 shadow-2xl">
            <div className="py-4 space-y-4">
              {/* Navigation Links */}
              <nav className="space-y-2">
                {["Dashboard", "Panel", "Wallet"].map((item, idx) => (
                  <a
                    key={idx}
                    href={`/${item.toLowerCase()}`}
                    onClick={closeMenu}
                    className="block px-4 py-3 rounded-lg text-white/80 hover:text-blue-400 hover:bg-gradient-to-r hover:from-blue-900/40 hover:to-green-900/40 transition-all duration-300 text-lg font-medium"
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-blue-900/30 my-4"></div>

              {/* Wallet Section */}
              <div className="px-4">
                {address ? (
                  <div className="space-y-3">
                    <div className="text-white/60 text-sm font-medium">
                      Connected Wallet
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-900/30 to-green-900/30 rounded-lg border border-blue-800/40">
                      <Wallet className="w-5 h-5 text-blue-400" />
                      <span className="font-mono text-white flex-1">
                        {formatAddress(address)}
                      </span>
                    </div>
                    <button
                      onClick={handleDisconnect}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600/80 to-red-500/80 hover:from-red-600 hover:to-red-500 text-white font-semibold rounded-lg px-4 py-3 transition-all duration-300"
                    >
                      <LogOut className="w-5 h-5" />
                      Logout
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="text-white/60 text-sm font-medium">
                      Wallet Connection
                    </div>
                    <button
                      onClick={handleConnect}
                      disabled={isConnecting}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-600 hover:to-green-500 text-white font-semibold rounded-lg px-4 py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Wallet className="w-5 h-5" />
                      {isConnecting ? "Logging in..." : "Login"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={closeMenu}
        />
      )}
    </div>
  );
}
