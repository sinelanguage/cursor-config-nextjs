# Next.js Cursor Config - Installation Guide

## What Cursor Detects Automatically

- `.cursorrules`
- `.context/`
- `.cursor/` (skills, rules, settings)
- `.cursorignore`

## Manual Setup (Optional)

### 1. Copy Templates

```bash
cp -r templates <your-project-root>/
```

### 2. Apply Next.js Configs

```bash
cp templates/next.config.ts next.config.ts
cp templates/tsconfig.json tsconfig.json
cp templates/.eslintrc.json .eslintrc.json
cp templates/package.json package.json
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Quality Checks

```bash
npm run lint
npm run type-check
npm run test
npm run build
```

## Environment Variables

Use `.env.local`, `.env.development`, and `.env.production` as needed for Next.js.

## Verification

Ask Cursor:

- "What Next.js architecture rules do you follow?"
- "How should I structure App Router routes?"

If Cursor references `.cursorrules` and `.context/`, the setup is correct.
