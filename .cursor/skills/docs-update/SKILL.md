---
name: next-deployment
description: Prepare deployment targets for Next.js apps.
disable-model-invocation: true
---
# Next.js Deployment

Configure deployment for Vercel, Node, or container targets.

## When to Use

- Setting up deployment strategy
- Aligning build outputs with infrastructure

## Inputs

- Target environment (Vercel, Node, container, static export)
- Runtime requirements (edge vs node)

## Instructions

1. Confirm deployment target and runtime constraints.
2. Ensure `next.config.ts` aligns with target output.
3. Add environment variables via `.env.*` and platform secrets.
4. Verify `next build` output and start command.

## Output

- Deployment-ready configuration guidance.
