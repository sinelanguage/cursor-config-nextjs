---
name: next-auth-session
description: Add auth/session patterns using Middleware and server-only logic.
disable-model-invocation: true
---
# Next.js Auth and Session Patterns

Implement authentication and session handling without leaking secrets.

## When to Use

- Protecting routes
- Managing sessions server-side

## Inputs

- Auth provider integration
- Session storage approach

## Instructions

1. Keep auth logic server-only.
2. Use Middleware for gatekeeping and redirects.
3. Validate session tokens in Route Handlers or Server Actions.
4. Never expose secrets in Client Components.

## Output

- Auth/session flow aligned with Next.js server-first patterns.
