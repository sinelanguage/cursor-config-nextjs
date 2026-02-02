# Cursor Config Next.js

> **Version**: See [CHANGELOG.md](CHANGELOG.md) | Standards evolve over time - check git tags for version tracking

A **Cursor AI configuration** focused exclusively on **Next.js (latest)** development and deployment in TypeScript.

## What This Is

This repo contains:

- **Agent Rules** (`.cursorrules`) - Next.js coding standards and architecture
- **Context Docs** (`.context/`) - Next.js patterns and workflows
- **Agent Skills** (`.cursor/skills/`) - Use-case specific Next.js workflows
- **Templates** (`templates/`) - Next.js config files and package template

## Quick Start

### 1. Copy Cursor Files

```bash
cp .cursorrules .cursorignore <your-project-root>/
cp -r .context .cursor <your-project-root>/
```

### 2. Copy Templates (Optional)

```bash
cp -r templates <your-project-root>/
```

### 3. Install Dependencies

```bash
cd <your-project-root>
cp templates/package.json package.json
npm install
```

### 4. Apply Configs

```bash
cp templates/next.config.ts next.config.ts
cp templates/tsconfig.json tsconfig.json
cp templates/.eslintrc.json .eslintrc.json
```

## How to Use Skills

Skills are invoked from Agent chat via `/` (for example: `/next-bff`).

## What You Get

- **Next.js App Router-first guidance**
- **API/BFF and Route Handler patterns**
- **Hybrid rendering and partial hydration**
- **Edge and Middleware best practices**
- **Deployment-focused templates**

## Project Templates

Ready-to-use Next.js configs:

- `next.config.ts`
- `tsconfig.json`
- `.eslintrc.json`
- `package.json`

## Structure

```text
.cursor/
├── agents/
├── rules/
└── skills/
.context/
templates/
```

## Support

For issues with this Cursor setup:

1. Check `.context/`
2. Review `ARCHITECTURE.md`
3. Open an issue in the repo
