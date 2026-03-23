# 100 Days of SwiftUI Tracker — Claude Code Context

This is a **Next.js 14 + Supabase** progress tracker for Paul Hudson's
[100 Days of SwiftUI](https://www.hackingwithswift.com/100/swiftui) course.
The **primary goal** is cross-device progress sync — a user should be able to check off days on their phone and see the same state on their laptop.
It is deployed on Vercel and uses Supabase auth to achieve this.

---

## Commands
- Dev server: `npm run dev` (runs on port 3000)
- Build: `npm run build`

## Environment Variables
Required in `.env.local`:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_KEY`

See `.env.local.example` for the template.

---

## Stack & Key Decisions

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 14 (App Router) | `"use client"` on page.tsx — no server components needed |
| Database | Supabase (Postgres) | `progress` table with `user_id`, `item_key`, `day`, `completed` |
| Auth | Supabase Magic Link (OTP) | Email-based; PKCE flow; `/auth/callback` route exchanges code for session |
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

## Key Patterns & Gotchas
- **No server components** — all components use `"use client"`. This is intentional; do not introduce server components.
- **`course.ts` is hand-authored** — do not attempt to scrape or auto-generate it. Add/edit days directly in the array.
- **Milestone days** — `isMilestone: true` on a `CourseDay` renders a `MilestoneCard` instead of `DayCard`.
- **Optimistic updates** — `useProgress` applies state changes immediately and rolls back on Supabase error.
- **Progress keys** — each item has a unique `key` (format: `day-N-type-N`, e.g. `day-3-video-2`). The `progress` table is keyed on `(user_id, item_key)`.
