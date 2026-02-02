---
name: next-route-handler-api
description: Create a typed Route Handler API in app/api.
disable-model-invocation: true
---
# Next.js Route Handler API

Create a typed API endpoint using `app/api/*/route.ts`.

## When to Use

- Build API routes or BFF endpoints
- Server-only logic and secrets

## Inputs

- Route path (e.g. `app/api/users/route.ts`)
- HTTP methods
- Request/response shapes

## Instructions

1. Create `route.ts` with the required HTTP methods.
2. Validate input and return typed responses.
3. Use `NextResponse` with explicit status codes.
4. Keep secrets server-only.

## Output

- Route Handler with validated, typed request/response.
