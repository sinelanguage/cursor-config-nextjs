# Next.js Architecture Documentation

> **Note**: This document provides implementation patterns and architecture guidance for Next.js applications. For a high-level overview, see [ARCHITECTURE.md](../ARCHITECTURE.md).

## System Overview

This configuration targets **Next.js (latest)** with the App Router as the default. It supports:

- **App Router** (`app/`) with React Server Components
- **Pages Router** (`pages/`) for legacy or compatibility needs
- **Route Handlers** (`app/api`) for APIs and BFF use cases
- **Middleware** and **Edge Runtime** for request-time logic
- **Hybrid rendering** (SSR/SSG/ISR with partial hydration)

## Rendering Architecture

### Server Components First

- Default to Server Components for data access and rendering
- Use Client Components only for interactivity
- Keep Client Components small and leaf-level

```text
Request
  └── Server Components (data + HTML)
        └── Client Components (interactive islands)
```

### Streaming & Boundaries

- Use `Suspense` to stream UI
- Use route-level `loading.tsx`, `error.tsx`, and `not-found.tsx`

## Routing Architecture

### App Router (Default)

```text
app/
├── layout.tsx
├── page.tsx
├── dashboard/
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
└── api/
    └── health/route.ts
```

### Pages Router (Legacy)

Use only when required for existing routes or compatibility:

```text
pages/
├── index.tsx
├── _app.tsx
└── api/
    └── health.ts
```

### Hybrid App + Pages

Next.js allows **App Router + Pages Router** in one codebase:

- Prefer `app/` for new work
- Keep `pages/` only where needed
- Avoid duplicate routes

## API & BFF Architecture

### Route Handlers (Recommended)

Use `app/api/*/route.ts` for APIs, BFF, and server-only logic:

- Validate input
- Use server-only secrets
- Return typed responses

### Server Actions

Use Server Actions for form submissions and mutations:

- Co-locate mutations with UI
- Validate inputs on the server
- Handle optimistic UI on client if needed

## Caching & Revalidation

### Cache Strategy

- `cache: "no-store"` for per-request data
- `revalidate` for ISR and on-demand revalidation
- Use tags to invalidate related data sets

### Common Patterns

```typescript
fetch(url, { cache: 'no-store' })
fetch(url, { next: { revalidate: 60 } })
```

## Edge & Middleware

Use **Middleware** for:

- Authentication gating
- Redirects and rewrites
- A/B testing and geolocation

Use **Edge Runtime** when:

- You need low-latency responses
- The logic is lightweight and stateless

## Deployment Targets

Next.js supports multiple outputs:

- **Node.js server** (default)
- **Edge runtime** (for edge routes)
- **Static export** (SSG)

Choose based on product and infrastructure constraints.

## Security Architecture

- Keep secrets server-only
- Validate every request body/query
- Use CSP headers where appropriate
- Avoid client-side access to sensitive data

## Performance Architecture

- Server-first data fetching to avoid waterfalls
- Partial hydration via Client Components
- Optimized images and fonts via Next.js
- Cache aggressively with revalidation
