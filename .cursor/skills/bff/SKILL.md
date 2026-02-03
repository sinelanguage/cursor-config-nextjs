---
name: next-bff
description: Create a Next.js BFF layer with Route Handlers and server data access.
disable-model-invocation: true
---
# Next.js BFF (Backend for Frontend)

Implement a BFF using Route Handlers with explicit validation and caching.

## When to Use

- Aggregating multiple backend APIs
- Hiding credentials and tokens
- Normalizing responses for the UI
- Enforcing per-tenant isolation (if multi-tenant)

## Inputs

- External services to aggregate
- Auth requirements
- Cache strategy (no-store vs revalidate)
- Tenant identification (subdomain, path, header)

## Instructions

1. Create Route Handlers under `app/api/`.
2. Fetch from upstream services on the server with timeouts.
3. Normalize and validate responses.
4. Apply caching and revalidation explicitly.
5. Map upstream errors to stable API responses.
6. Enforce tenant isolation in queries and caches.

## Output

- BFF endpoints with typed, normalized responses and cache strategy.
