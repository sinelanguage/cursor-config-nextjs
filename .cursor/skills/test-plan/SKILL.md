---
name: next-data-fetching-cache
description: Define data fetching and caching strategy for Next.js routes.
disable-model-invocation: true
---
# Next.js Data Fetching & Cache Strategy

Plan data fetching and caching for App Router routes.

## When to Use

- Designing new data-heavy pages
- Choosing between SSR, SSG, and ISR

## Inputs

- Data freshness needs
- User personalization requirements

## Instructions

1. Decide per-route caching (`no-store` vs `revalidate`).
2. Use server-side fetching to avoid client waterfalls.
3. Use tags and on-demand revalidation where needed.
4. Document cache decisions in code comments.

## Output

- Clear cache and fetch strategy for the route.
