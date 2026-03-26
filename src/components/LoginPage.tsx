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
        <h1 className="text-4xl font-bold text-fg mb-2">
          100 Days of SwiftUI
        </h1>
        <p className="text-fg-mid text-sm mb-8">
          Sign in to sync your progress across devices.
        </p>

        {state === "sent" ? (
          <div className="space-y-4">
            <p className="text-fg">
              Check your email — we sent a sign-in link to{" "}
              <span className="text-accent">{email}</span>. After tapping the
              link, return to this app and you&apos;ll be signed in
              automatically.
            </p>
            <button
              onClick={() => { setEmail(""); setState("idle"); }}
              className="text-sm text-fg-dim hover:text-fg-mid transition-colors"
            >
              Use a different email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm text-fg-mid mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-surface border border-line rounded-lg px-4 py-2.5 text-fg placeholder-fg-dim focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {state === "error" && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={state === "loading"}
              className="w-full bg-accent hover:bg-accent-strong disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-lg px-4 py-2.5 transition-colors"
            >
              {state === "loading" ? "Sending…" : "Send sign-in link"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
