---
name: next-edge-middleware
description: Add Middleware and Edge Runtime patterns for Next.js.
disable-model-invocation: true
---
# Next.js Middleware and Edge Runtime

Implement middleware and edge-safe logic for request-time controls.

## When to Use

- Auth gating and redirects
- Geo-based routing
- Lightweight request processing

## Inputs

- Matchers and paths
- Redirect/rewrites rules
- Tenant routing or auth gates

## Instructions

1. Add `middleware.ts` at the project root.
2. Keep logic stateless and edge-safe.
3. Use `matcher` config to scope routes.
4. Avoid Node-only APIs in edge runtime.
5. Resolve tenant or auth context early when required.

## Output

- Middleware with scoped edge-safe behavior.
