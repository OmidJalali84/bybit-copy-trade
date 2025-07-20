"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { BybitWalletAdapter } from "@tronweb3/tronwallet-adapter-bybit";

const WalletContext = createContext();

export function useWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider");
  }
  return context;
}

export function WalletProvider({ children }) {
  const [address, setAddress] = useState(null);
  const [adapter, setAdapter] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  useEffect(() => {
    const _adapter = new BybitWalletAdapter();
    setAdapter(_adapter);

    // Check if already connected
    if (_adapter.connected) {
      setAddress(_adapter.address);
    }

    // Listen for connection changes if supported
    if (_adapter.on) {
      _adapter.on("connect", () => {
        console.log(
          "WalletContext: connect event fired, address:",
          _adapter.address
        );
        setAddress(_adapter.address);
      });
      _adapter.on("disconnect", () => {
        console.log("WalletContext: disconnect event fired");
        setAddress(null);
      });
    }

    // Cleanup listeners on unmount
    return () => {
      if (_adapter.off) {
        _adapter.off("connect", () => setAddress(_adapter.address));
        _adapter.off("disconnect", () => setAddress(null));
      }
    };
  }, []);

  const connect = async () => {
    console.log("=== WalletContext connect started ===");
    console.log("Adapter:", adapter);

    if (!adapter) return { success: false, error: "Adapter not initialized" };

    setIsConnecting(true);
    try {
      console.log("Calling adapter.connect()...");
      await adapter.connect();
      console.log("Adapter connected successfully");
      console.log("Adapter address:", adapter.address);

      // Force state update with a new object to ensure re-render
      const connectedAddress = adapter.address;
      console.log("Setting address to:", connectedAddress);

      // Use setTimeout to ensure state update happens in next tick
      setTimeout(() => {
        setAddress(connectedAddress);
        console.log("Address state updated to:", connectedAddress);
      }, 0);

      setIsConnecting(false);

      console.log("Connect function completed successfully");
      return { success: true, address: connectedAddress };
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setIsConnecting(false);
      return { success: false, error: error.message };
    }
  };

  const disconnect = async () => {
    if (!adapter) return { success: false, error: "Adapter not initialized" };

    try {
      await adapter.disconnect();
      setAddress(null);
      return { success: true };
    } catch (error) {
      console.error("Failed to disconnect wallet:", error);
      return { success: false, error: error.message };
    }
  };

  const signTransaction = async (transaction) => {
    if (!adapter) {
      throw new Error("Wallet not connected");
    }
    return await adapter.signTransaction(transaction);
  };

  const value = {
    address,
    adapter,
    isConnecting,
    isConnected: !!address,
    connect,
    disconnect,
    signTransaction,
  };

  console.log("WalletContext value:", value);

  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
}
