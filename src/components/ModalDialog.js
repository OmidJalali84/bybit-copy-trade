import React from "react";

export default function ModalDialog({
  open,
  onClose,
  mode = "info",
  title,
  message,
}) {
  if (!open) return null;
  const colorMap = {
    info: {
      icon: (
        <svg
          className="w-16 h-16 text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="#1e293b"
          />
          <path
            d="M12 8v4m0 4h.01"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      ring: "ring-blue-400",
      btn: "bg-blue-600 hover:bg-blue-700",
    },
    fail: {
      icon: (
        <svg className="w-16 h-16 text-red-400" fill="none" viewBox="0 0 24 24">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="#1e293b"
          />
          <path
            d="M15 9l-6 6m0-6l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      ring: "ring-red-400",
      btn: "bg-red-600 hover:bg-red-700",
    },
    success: {
      icon: (
        <svg
          className="w-16 h-16 text-green-400"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="#1e293b"
          />
          <path
            d="M9 12l2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      ring: "ring-green-400",
      btn: "bg-green-600 hover:bg-green-700",
    },
  };
  const { icon, ring, btn } = colorMap[mode] || colorMap.info;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={`bg-white/95 rounded-2xl shadow-2xl border border-white/20 max-w-sm w-full mx-4 p-8 flex flex-col items-center animate-fadeIn ${ring} ring-2`}
      >
        {icon}
        <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2 text-center">
          {title}
        </h2>
        <p className="text-gray-700 text-center mb-6">{message}</p>
        <button
          className={`px-6 py-2 rounded-lg text-white font-semibold text-lg transition ${btn}`}
          onClick={onClose}
          autoFocus
        >
          OK
        </button>
      </div>
    </div>
  );
}
