# 100 Days of SwiftUI Tracker

A progress tracker for Paul Hudson's [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) course — built with Next.js 14, Supabase, and Tailwind CSS.

**Live app:** https://swiftui-100-days-tracker.vercel.app

## Features

- All 100 days with links to reading content, videos, and challenges
- Progress auto-saves as you click through content and watch videos
- Uncheck individual items at any time
- Overall completion percentage with animated progress bar
- Reset all progress with a single click
- Magic link sign-in (email OTP) — no password required
- Progress syncs across devices when signed in

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | Supabase (Postgres + Row Level Security) |
| Auth | Supabase Magic Link (email OTP, PKCE flow) |
| Styling | Tailwind CSS |
| Fonts | Inter (Google Fonts) |
| Hosting | Vercel |

## Getting Started

### 1. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the migration:
   ```
   supabase/migrations/0001_create_progress.sql
   ```
3. Go to **Database → Replication** and enable Realtime for the `progress` table
4. In **Authentication → URL Configuration**, add your app's URL to **Redirect URLs** (e.g. `http://localhost:3000/auth/callback` for local dev)

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Fill in your Supabase project URL and anon key from **Project Settings → API**.

### 3. Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in **Project Settings → Environment Variables**:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_KEY`
4. Add your Vercel deployment URL to **Supabase → Authentication → URL Configuration → Redirect URLs** (e.g. `https://your-app.vercel.app/auth/callback`)
5. Deploy

## How Authentication Works

The app uses Supabase magic links (email OTP with PKCE flow). When a user enters their email, Supabase sends a sign-in link. Clicking it redirects to `/auth/callback`, which exchanges the code for a session. The session is stored in cookies and persists across page loads.

## How Progress Works

Progress is stored per-item in Supabase's `progress` table, keyed by `user_id` and `item_key` (e.g. `day-1-video-1`). The app subscribes to Supabase Realtime on the `progress` table, so changes made on one device appear instantly on all other open tabs or devices signed in with the same account. Updates are also optimistic — the UI responds immediately and rolls back if the DB write fails.
