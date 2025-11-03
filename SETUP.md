# Elite Frontend Cursor AI Setup - Installation Guide

## Quick Install

### Option 1: Copy All Files to New Project

```bash
# Navigate to your new project
cd /path/to/your/new-project

# Copy all configuration files
cp -r .cursor .cursorrules .context .github templates .gitlab-ci.yml .
cp ARCHITECTURE.md CONTRIBUTING.md README.md .
```

### Option 2: Use as Template

1. Clone this repository
2. Copy the entire directory to your new project
3. Remove this `SETUP.md` file
4. Follow the setup steps below

## Detailed Setup Steps

### 1. Project Initialization

```bash
# Initialize npm (if not already done)
npm init -y

# Update package.json with scripts from templates/package.json
```

### 2. Install Dependencies

```bash
# Core dependencies
npm install react@^18.3.0 react-dom@^18.3.0

# Dev dependencies (one-liner)
npm install -D typescript@^5.5.0 \
  vite@^5.4.0 \
  @vitejs/plugin-react@^4.3.0 \
  @originjs/vite-plugin-federation@^2.8.4 \
  @types/react@^18.3.0 \
  @types/react-dom@^18.3.0 \
  @types/node@^22.0.0 \
  vitest@^2.0.0 \
  @testing-library/react@^16.0.0 \
  @testing-library/jest-dom@^6.4.0 \
  @testing-library/user-event@^15.0.0 \
  @playwright/test@^1.40.0 \
  @vitest/coverage-v8@^2.0.0 \
  @vitest/ui@^2.0.0 \
  @storybook/react-vite@^8.0.0 \
  @storybook/addon-essentials@^8.0.0 \
  @storybook/addon-a11y@^8.0.0 \
  @storybook/addon-interactions@^8.0.0 \
  eslint@^9.0.0 \
  @typescript-eslint/eslint-plugin@^7.18.0 \
  @typescript-eslint/parser@^7.18.0 \
  eslint-plugin-react@^7.37.0 \
  eslint-plugin-react-hooks@^5.0.0 \
  eslint-plugin-jsx-a11y@^6.9.0 \
  eslint-plugin-import@^2.30.0 \
  prettier@^3.3.0 \
  husky@^9.0.0 \
  lint-staged@^15.0.0

# Or use the package.json template
cp templates/package.json package.json
npm install
```

### 3. Copy Configuration Files

```bash
# Vite config
cp templates/vite.config.ts vite.config.ts

# TypeScript config
cp templates/tsconfig.json tsconfig.json

# ESLint config
cp templates/eslint.config.js eslint.config.js

# Storybook config
mkdir -p .storybook
cp templates/.storybook/main.ts .storybook/main.ts
cp templates/.storybook/preview.ts .storybook/preview.ts
```

### 4. Set Up Environment Variables

```bash
# Create .env.development
cat > .env.development << EOF
VITE_API_URL=http://localhost:3000/api
VITE_ENABLE_DEV_TOOLS=true
EOF

# Create .env.production
cat > .env.production << EOF
VITE_API_URL=https://api.production.com
VITE_ENABLE_DEV_TOOLS=false
EOF
```

### 5. Initialize Git Hooks

```bash
# Initialize Husky
npx husky install

# Create pre-commit hook
npx husky add .husky/pre-commit "npm run lint-staged && npm run type-check"

# Create commit-msg hook for conventional commits
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### 6. Create Basic Project Structure

```bash
# Create src directory structure
mkdir -p src/{components,hooks,utils,types,services,constants,styles}

# Create test directories
mkdir -p src/components/Button
mkdir -p tests/{unit,integration,e2e}

# Create example component
cat > src/components/Button/Button.tsx << 'EOF'
import { forwardRef } from 'react'
import type { ComponentProps } from 'react'
import { cn } from '@/utils/cn'

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md font-medium',
          variant === 'primary' && 'bg-blue-600 text-white hover:bg-blue-700',
          variant === 'secondary' && 'bg-gray-200 text-gray-900 hover:bg-gray-300',
          size === 'sm' && 'px-3 py-1.5 text-sm',
          size === 'md' && 'px-4 py-2 text-base',
          size === 'lg' && 'px-6 py-3 text-lg',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
EOF

# Create utils helper
cat > src/utils/cn.ts << 'EOF'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
EOF

# Install additional utilities
npm install -D clsx tailwind-merge
npm install -D tailwindcss autoprefixer postcss
```

### 7. Set Up Tailwind CSS

```bash
# Initialize Tailwind
npx tailwindcss init -p

# Update tailwind.config.js
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOF
```

### 8. Configure CI/CD

```bash
# GitHub: Already configured in .github/workflows/
# Add secrets in GitHub repo settings:
# - SNYK_TOKEN
# - CHROMATIC_PROJECT_TOKEN (optional)
# - CODECOV_TOKEN (optional)

# GitLab: Already configured in .gitlab-ci.yml
# Add variables in GitLab CI/CD settings:
# - SNYK_TOKEN
```

### 9. Install Additional Tools

```bash
# Optional: Storybook
npm install -D @storybook/addon-docs @storybook/addon-controls

# Optional: Testing utilities
npm install -D jest-dom @testing-library/jest-dom

# Optional: Commit linting
npm install -D @commitlint/cli @commitlint/config-conventional
```

### 10. Create Basic Project Files

```bash
# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Elite Frontend App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
EOF

# Create main.tsx
cat > src/main.tsx << 'EOF'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
EOF

# Create App.tsx
cat > src/App.tsx << 'EOF'
import { Button } from '@/components/Button'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Elite Frontend</h1>
        <div className="space-x-4">
          <Button variant="primary" size="md">
            Primary Button
          </Button>
          <Button variant="secondary" size="md">
            Secondary Button
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
EOF

# Create global CSS
mkdir -p src/styles
cat > src/styles/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  @apply antialiased;
}
EOF
```

## Verification

### Run Quality Checks

```bash
# Type check
npm run type-check

# Lint
npm run lint

# Format
npm run format

# Run tests
npm run test

# Build
npm run build
```

All commands should pass without errors.

### Start Development

```bash
# Start dev server
npm run dev

# Visit http://localhost:3000
```

## Next Steps

1. **Customize for Your Project**
   - Edit `.cursorrules` for project-specific rules
   - Update `vite.config.ts` with your Module Federation setup
   - Modify templates as needed

2. **Set Up Snyk Security Scanning**
   ```bash
   npm install -g snyk
   snyk auth
   snyk test
   ```

3. **Configure Storybook**
   ```bash
   npm run storybook
   # Add your first story in src/components/Button/Button.stories.tsx
   ```

4. **Write Your First Tests**
   ```bash
   # Add test in src/components/Button/Button.test.tsx
   npm run test
   ```

5. **Set Up Git**
   ```bash
   git init
   git add .
   git commit -m "feat: initial setup with elite frontend configuration"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

## Troubleshooting

### Module Resolution Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Type Errors

```bash
# Check TypeScript version
npx tsc --version  # Should be 5.5+

# Delete type cache
rm -rf node_modules/.cache
npm run type-check
```

### Build Errors

```bash
# Clear Vite cache
rm -rf .vite dist
npm run build
```

## Verification Checklist

- [ ] All dependencies installed
- [ ] `npm run dev` starts successfully
- [ ] `npm run type-check` passes
- [ ] `npm run lint` passes
- [ ] `npm run test` runs tests
- [ ] `npm run build` creates dist/ folder
- [ ] Git hooks are installed
- [ ] CI/CD workflows are configured
- [ ] Environment variables are set

## Getting Help

- Check `.context/` documentation
- Review `ARCHITECTURE.md`
- See `CONTRIBUTING.md` for development workflow
- Read `README.md` for usage instructions

---

**Your elite frontend setup is ready to use!**

