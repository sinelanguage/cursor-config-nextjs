---
name: next-pages-router-page
description: Scaffold a Pages Router route with data fetching and tests.
disable-model-invocation: true
---
# Next.js Pages Router Page

Create a new `pages/` route for legacy or compatibility use cases with explicit
data fetching and caching.

## When to Use

- Existing `pages/` routes
- Legacy integrations that require Pages Router

## Inputs

- Route path (e.g. `pages/account.tsx`)
- Data fetching method (SSR/SSG/ISR)
- Revalidation needs (if SSG/ISR)

## Instructions

1. Create the page file under `pages/`.
2. Use `getServerSideProps`, `getStaticProps`, or `getStaticPaths` as needed.
3. Keep data fetching typed and validated.
4. Add `revalidate` for ISR when applicable.
5. Add a basic test if testing is configured.

## Output

- Page file with typed data fetching and caching for Pages Router.
