---
name: next-app-router-page
description: Scaffold a Next.js App Router page with server-first rendering.
disable-model-invocation: true
---
# Next.js App Router Page

Create a new App Router route with Server Components by default.

## When to Use

- New pages under `app/`
- Server-first rendering with partial hydration

## Inputs

- Route segment path (e.g. `app/dashboard`)
- Data needs (static/ISR/dynamic)
- Client interactivity requirements

## Instructions

1. Create `page.tsx` in the route segment.
2. Default to a Server Component (no `"use client"`).
3. Add `loading.tsx`, `error.tsx`, and `not-found.tsx` if needed.
4. Use `fetch` with explicit caching (`no-store` or `revalidate`).
5. Add `generateMetadata` or `metadata` when SEO is required.

## Output

- App Router files in the target segment with server-first patterns.
