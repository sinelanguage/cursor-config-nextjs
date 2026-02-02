---
name: next-hybrid-app
description: Combine App Router, Pages Router, and API in one Next.js app.
disable-model-invocation: true
---
# Next.js Hybrid App

Create a hybrid app that mixes App Router, Pages Router, and API routes safely.

## When to Use

- Migrating from Pages Router to App Router
- Keeping legacy routes while adding new App Router features

## Inputs

- Existing routes and new routes
- API surface to keep or move

## Instructions

1. Keep legacy routes in `pages/`.
2. Add new routes in `app/`.
3. Avoid route collisions.
4. Prefer `app/api` Route Handlers for new APIs.

## Output

- Hybrid routing plan and updated route structure.
