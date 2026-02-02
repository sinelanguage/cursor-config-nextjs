# Next.js Technology Stack

## Core Framework

- **Next.js**: latest
- **React**: latest stable (18+)
- **TypeScript**: latest 5.5+

## Runtime

- **Node.js**: 20.x or 22.x (LTS preferred)
- **Edge Runtime**: for middleware and edge routes

## Build & Tooling

- **Next.js build pipeline** (`next build`)
- **ESLint** with `next/core-web-vitals`
- **TypeScript** strict mode

## Testing

- **Unit/Integration**: Testing Library
- **E2E**: Playwright
- **A11y**: axe-core tooling

## Deployment Targets

- **Vercel** (recommended)
- **Node.js server** (self-hosted)
- **Containerized** (Docker/Kubernetes)
- **Static export** (SSG only)

## Observability

- **Web Vitals** tracking
- **Error monitoring** (Sentry or equivalent)

## Security

- **npm audit** for dependency vulnerabilities
- **CSP headers** and secure cookies
