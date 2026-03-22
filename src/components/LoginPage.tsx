"use client";

import { useState } from "react";
import { getSupabase } from "@/lib/supabase";

type State = "idle" | "loading" | "sent" | "error";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<State>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    const supabase = getSupabase();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin + "/auth/callback",
      },
    });
    if (error) {
      const msg =
        error.message.toLowerCase().includes("rate") ||
        error.status === 429
          ? "A link was already sent — check your inbox or wait a minute."
          : "Something went wrong. Please try again.";
      setErrorMsg(msg);
      setState("error");
    } else {
      setState("sent");
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          100 Days of SwiftUI
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          Sign in to sync your progress across devices.
        </p>

        {state === "sent" ? (
          <div className="space-y-4">
            <p className="text-gray-700">
              Check your email — we sent a sign-in link to{" "}
              <span className="text-blue-500">{email}</span>.
            </p>
            <button
              onClick={() => { setEmail(""); setState("idle"); }}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
            >
              Use a different email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            {state === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg px-4 py-2.5 transition-colors"
            >
              {state === "loading" ? "Sending…" : "Send sign-in link"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
