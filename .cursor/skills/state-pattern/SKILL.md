---
name: next-bff
description: Create a Next.js BFF layer with Route Handlers and server data access.
disable-model-invocation: true
---
# Next.js BFF (Backend for Frontend)

Implement a BFF using Route Handlers and server-only logic.

## When to Use

- Aggregating multiple backend APIs
- Hiding credentials and tokens
- Normalizing responses for the UI

## Inputs

- External services to aggregate
- Auth requirements
- Cache strategy (no-store vs revalidate)

## Instructions

1. Create Route Handlers under `app/api/`.
2. Fetch from upstream services on the server.
3. Normalize and validate responses.
4. Apply caching and revalidation explicitly.

## Output

- BFF endpoints with typed, normalized responses.
