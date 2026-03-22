"use client";

import { useState } from "react";

interface Props {
  onReset: () => Promise<void>;
}

export default function ResetButton({ onReset }: Props) {
  const [confirming, setConfirming] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleConfirm() {
    setLoading(true);
    try {
      await onReset();
    } finally {
      setLoading(false);
      setConfirming(false);
    }
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <span className="text-zinc-400">Reset all progress?</span>
        <button
          onClick={handleConfirm}
          disabled={loading}
          className="px-3 py-1 rounded bg-red-600 hover:bg-red-500 text-white text-xs font-medium transition-colors disabled:opacity-50"
        >
          {loading ? (
            <svg className="w-3 h-3 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            "Yes, reset"
          )}
        </button>
        <button
          onClick={() => setConfirming(false)}
          className="px-3 py-1 rounded bg-zinc-700 hover:bg-zinc-600 text-zinc-200 text-xs font-medium transition-colors"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
    >
      Reset all progress
    </button>
  );
}
