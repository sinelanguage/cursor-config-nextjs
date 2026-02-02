---
name: next-migration-app-router
description: Migrate routes from Pages Router to App Router safely.
disable-model-invocation: true
---
# Next.js Pages to App Router Migration

Plan and migrate existing `pages/` routes to `app/`.

## When to Use

- Incremental migration to App Router
- Reducing legacy Pages Router surface

## Inputs

- Routes to migrate
- Data fetching method in `pages/`

## Instructions

1. Identify route parity and dependencies.
2. Create App Router equivalents under `app/`.
3. Replace `getServerSideProps`/`getStaticProps` with server fetches.
4. Remove legacy routes after validation.

## Output

- Migration plan and App Router replacement routes.
