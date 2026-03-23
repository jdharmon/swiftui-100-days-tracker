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
| Styling | Tailwind CSS | Semantic color tokens — **edit only `src/app/globals.css` `:root` to retheme** |

### Color token system
All themed colors are CSS custom properties in `globals.css` `:root`, mapped to Tailwind color names in `tailwind.config.ts`. Components use only semantic names — never raw Tailwind palette colors like `blue-500` or `gray-900`.

| Token | Tailwind class | Default |
|---|---|---|
| `--c-accent` | `accent` | blue-500 — checkboxes, progress bar, links |
| `--c-accent-strong` | `accent-strong` | blue-600 — hover states |
| `--c-accent-mid` | `accent-mid` | blue-100 — subtle tint |
| `--c-accent-dim` | `accent-dim` | blue-50 — lightest tint |
| `--c-surface` | `surface` | white — card backgrounds |
| `--c-surface-muted` | `surface-muted` | gray-50 — page bg, done cards |
| `--c-chip` | `chip` | gray-100 — badges, icon backgrounds |
| `--c-track` | `track` | gray-200 — progress track, skeletons |
| `--c-line` | `line` | gray-200 — borders |
| `--c-fg` | `fg` | gray-900 — primary text |
| `--c-fg-mid` | `fg-mid` | gray-500 — secondary text |
| `--c-fg-dim` | `fg-dim` | gray-400 — muted / completed text |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout; loads Google Fonts (Inter), sets metadata
│   ├── page.tsx            # Home page ("use client"); auth check, progress loading, renders cards
│   ├── globals.css         # CSS custom properties (:root) for all theme tokens
│   └── auth/callback/
│       └── route.ts        # GET /auth/callback; PKCE code exchange for Supabase session
│
├── components/
│   ├── DayCard.tsx         # Collapsible day card; completion state, auto-scroll to first incomplete
│   ├── ContentItem.tsx     # Reading/challenge item with external link and checkbox
│   ├── VideoItem.tsx       # Video item with optional subitems; opens VideoModal
│   ├── VideoModal.tsx      # Full-screen modal with embedded YouTube iframe
│   ├── MilestoneCard.tsx   # Special card for milestone days
│   ├── ProgressBar.tsx     # Sticky header showing completed/total and percentage
│   ├── LoginPage.tsx       # Magic link email form for Supabase auth
│   └── ResetButton.tsx     # Reset all progress with confirmation
│
├── hooks/
│   └── useProgress.ts      # Main hook; progress state, completion counts, video modal state
│
├── lib/
│   ├── supabase.ts         # Singleton Supabase browser client
│   ├── auth.ts             # getSessionUserId(); fetches current user from session
│   └── progress.ts         # DB operations: loadProgress, markComplete, markIncomplete, resetAll
│
├── types/
│   └── index.ts            # CourseDay, CourseItem, CourseSubItem, ItemType, ProgressMap
│
└── data/
    └── course.ts           # COURSE_DATA: all 100 days with items (video/challenge) and subitems
```