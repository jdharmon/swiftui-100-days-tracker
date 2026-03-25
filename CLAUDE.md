# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A Next.js 14 web app for tracking progress through Paul Hudson's "100 Days of SwiftUI" course. Uses Supabase for auth (magic link/OTP) and data storage. Deployed on Vercel.

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Run production server
```

No test runner is configured.

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_KEY`

## Architecture

### Data Flow

Static course data (`src/data/course.ts`) defines all 100 days and their items. The `useProgress` hook (`src/hooks/useProgress.ts`) is the central state manager — it loads a user's progress from Supabase on mount and provides `markComplete`, `markIncomplete`, and `resetAll` callbacks. All DB operations are in `src/lib/progress.ts`. The main page (`src/app/page.tsx`) is a client component that handles auth state and renders the day grid.

```
useProgress hook → lib/progress.ts → Supabase (PostgreSQL + RLS)
     ↓
page.tsx → DayCard → ContentItem (videos, challenges)
```

### Key Patterns

**Optimistic updates**: `useProgress` updates state immediately, then persists to DB and reverts on error.

**Singleton Supabase client**: `src/lib/supabase.ts` lazily initializes and caches the browser client.

**Auth flow**: Email OTP → `/auth/callback` exchanges code for session (PKCE) → session in HTTP-only cookies.

**Row-Level Security**: The DB enforces `user_id = auth.uid()` on all progress rows — no server-side filtering needed.

### Database Schema

Single `progress` table with `(user_id, item_key)` unique constraint. `item_key` format: `"day-{N}-{type}-{index}"` (e.g., `"day-1-video-1"`). Migrations in `supabase/migrations/`.

### Styling

Tailwind CSS with a semantic CSS custom property system defined in `globals.css`. Colors use RGB triplets (e.g., `--c-accent: 59 130 246`) to support Tailwind's opacity modifier syntax (`bg-accent/20`). Theme tokens are configured in `tailwind.config.ts`.

### Component Structure

- `DayCard` — expandable container for a single day's content
- `MilestoneCard` — variant for every 5th day with special styling
- `ContentItem` — individual checkbox item (video, challenge, or content type)
- `VideoModal` — floating YouTube embed, triggered from ContentItem
- `ProgressBar` — sticky animated bar showing overall completion
- `LoginPage` — email OTP form
- `ResetButton` — destructive action with inline confirmation

### Color token system
All themed colors are CSS custom properties in `globals.css` `:root`, mapped to Tailwind color names in `tailwind.config.ts`. Components use only semantic names — never raw Tailwind palette colors like `blue-500` or `gray-900`.

## course.ts Item Types

`ItemType` controls both rendering and whether an item is tracked:

| Type | Checkbox | Icon | Notes |
|---|---|---|---|
| `"video"` | Yes | ▶️ | Tracked in `progress` table; may include `videoId` for modal |
| `"challenge"` | Yes | 🏆 | Tracked in `progress` table |
| `"content"` | **No** | 📖 | Link-only; **excluded from `TOTAL_ITEMS`** and never written to DB |

`subitems` (optional readings, tests) are always display-only — no checkboxes, never tracked.

`TOTAL_ITEMS` = count of all items where `type !== "content"`. This is what `useProgress` uses for the completion percentage denominator.

## Key Patterns & Gotchas
- **No server components** — all components use `"use client"`. This is intentional; do not introduce server components.
- **`course.ts` is hand-authored** — do not attempt to scrape or auto-generate it. Add/edit days directly in the array.
- **`TOTAL_ITEMS` excludes `"content"` items** — only `"video"` and `"challenge"` items count toward completion.
- **Progress keys** — format is `day-N-type-N`, e.g. `day-3-video-2`. Must be unique across all items in `course.ts`.
- **Supabase browser client is a singleton** — `src/lib/supabase.ts` lazily initializes one instance; do not call `createBrowserClient` elsewhere.
- **`@/*` path alias** — resolves to `./src/*`; use it for all internal imports.

