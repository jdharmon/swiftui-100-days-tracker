# SwiftUI Tracker — Claude Code Context

This is a **Next.js 14 + Supabase** progress tracker for Paul Hudson's
[100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) course.
It is deployed on Vercel and syncs progress across devices via anonymous Supabase auth.

---

## Stack & Key Decisions

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | `"use client"` on page.tsx — no server components needed |
| Database | Supabase (Postgres) | `progress` table with `user_id`, `item_key`, `day`, `completed` |
| Auth | Supabase Anonymous Sign-in | No email/password — session stored in localStorage by Supabase SDK |
| Hosting | Vercel | Push to GitHub, import to Vercel, add env vars |
| Fonts | Google Fonts | DM Serif Display (headings) + DM Sans (body), loaded via `<link>` in layout |
| Styling | Tailwind CSS | |