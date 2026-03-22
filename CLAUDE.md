# 100 Days of SwiftUI Tracker — Claude Code Context

This is a **Next.js 14 + Supabase** progress tracker for Paul Hudson's
[100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) course.
The **primary goal** is cross-device progress sync — a user should be able to check off days on their phone and see the same state on their laptop.
It is deployed on Vercel and uses Supabase auth to achieve this.

---

## Stack & Key Decisions

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | `"use client"` on page.tsx — no server components needed |
| Database | Supabase (Postgres) | `progress` table with `user_id`, `item_key`, `day`, `completed` |
| Auth | Supabase Magic Link (OTP) | Email-based; PKCE flow; `/auth/callback` route exchanges code for session |
| Hosting | Vercel | Push to GitHub, import to Vercel, add env vars |
| Fonts | Google Fonts | Inter, loaded via `<link>` in layout; also falls back to `-apple-system` (SF Pro on Apple devices) |
| Styling | Tailwind CSS | Light color scheme: `bg-gray-50` body, `bg-white` cards, `blue-500` accent (iOS system blue) |