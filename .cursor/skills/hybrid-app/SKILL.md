---
name: next-hybrid-app
description: Combine App Router, Pages Router, and API in one Next.js app.
disable-model-invocation: true
---
# Next.js Hybrid App

Create a hybrid app that mixes App Router, Pages Router, and API routes with
explicit routing boundaries.

## When to Use

- Migrating from Pages Router to App Router
- Keeping legacy routes while adding new App Router features
- Incremental migration with minimal risk

## Inputs

- Existing routes and new routes
- API surface to keep or move
- Route collision risks

## Instructions

1. Keep legacy routes in `pages/`.
2. Add new routes in `app/`.
3. Avoid route collisions and duplicate paths.
4. Prefer `app/api` Route Handlers for new APIs.
5. Document migration order and deprecations.

## Output

- Hybrid routing plan and updated route structure.
