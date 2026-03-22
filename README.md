# 100 Days of SwiftUI Tracker

A progress tracker for Paul Hudson's [100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) course — built with Next.js 14, Supabase, and Tailwind CSS.

## Features

- All 100 days with links to reading content, videos, and challenges
- Videos play directly in-app (embedded YouTube player, works on desktop and mobile)
- Progress auto-saves as you click through content and watch videos
- Uncheck individual items at any time
- Overall completion percentage with animated progress bar
- Reset all progress with a single click
- Anonymous authentication — no sign-up required, progress persists across browser sessions

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | Supabase (Postgres + Row Level Security) |
| Auth | Supabase Anonymous Sign-in |
| Styling | Tailwind CSS |
| Fonts | DM Serif Display + DM Sans (Google Fonts) |
| Hosting | Vercel |

## Getting Started

### 1. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to **SQL Editor** and run the migration:
   ```
   supabase/migrations/0001_create_progress.sql
   ```
3. In **Authentication → Providers**, ensure **Anonymous Sign-ins** are enabled

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
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

## Adding Video IDs

Videos without a known YouTube ID open in a new tab. To embed a video directly:

1. Open `src/data/course.ts`
2. Find the day's video item and set `videoId` to the YouTube video ID
3. Example: `videoId: "dQw4w9WgXcQ"`

No other code changes are needed.

## How Progress Works

Progress is stored per-item in Supabase's `progress` table, keyed by `user_id` (anonymous) and `item_key` (e.g. `day-1-content`, `day-1-video-1`). Each browser session gets a stable anonymous user ID stored in localStorage by the Supabase SDK.

Note: progress is tied to the browser/device. Opening the app in a different browser will start fresh.
