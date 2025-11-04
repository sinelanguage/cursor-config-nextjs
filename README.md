# Principal Frontend Cursor AI Setup

> **Version**: See [latest release](https://github.com/your-org/cursor-config/releases/latest) | [CHANGELOG.md](CHANGELOG.md) | Standards evolve over time - check git tags for version tracking

A comprehensive Cursor AI configuration for principal frontend development, featuring modern TypeScript, React 18+, Module Federation, enterprise-grade testing, security, and accessibility standards.

**Note**: This configuration follows semantic versioning (SemVer). See [CHANGELOG.md](CHANGELOG.md) for detailed change history and use git tags to track specific versions of these standards.

## What This Is

This is a **portable Cursor AI configuration** that can be used in any new frontend project. It contains:

- **Agent Rules** (`.cursorrules`) - Comprehensive coding standards and architectural principles
  - ✅ **Auto-detected by Cursor** - Works immediately after copying
- **Context Documentation** (`.context/`) - Reference docs for AI context retention
  - ✅ **Auto-detected by Cursor** - Automatically indexed for AI context
- **Automation Templates** - GitHub Actions and GitLab CI configurations
  - ⚙️ Manual setup required - Copy to `.github/` or project root
- **Project Templates** - Reusable config files for Vite, TypeScript, ESLint, Storybook
  - ⚙️ Manual setup required - Copy from `templates/` and customize

**Key Point**: Cursor automatically detects and uses `.cursorrules` and `.context/` files when you open a project. No configuration needed!

## Quick Start

### Cursor Auto-Detection

**Cursor automatically detects**:

- ✅ `.cursorrules` - AI agent configuration (works immediately)
- ✅ `.context/` - Documentation for AI context (auto-indexed)
- ✅ `.cursor/` - Workspace settings and additional rules (auto-detected)
- ✅ `.cursorignore` - Files to exclude from AI indexing (auto-applied)

**No configuration needed** - Just copy these files and Cursor will use them!

For detailed information about what Cursor automatically detects vs. what requires manual setup, see [SETUP.md](SETUP.md#cursor-auto-detection-vs-manual-setup).

### 1. Copy to Your Project

**Minimal (Cursor AI only)**:

```bash
# Copy only Cursor-specific files
cp .cursorrules <your-project-root>/
cp .cursorignore <your-project-root>/
cp -r .context <your-project-root>/
cp -r .cursor <your-project-root>/
```

**Complete setup**:

```bash
# Copy all configuration files
cp .cursorrules .cursorignore <your-project-root>/
cp -r .cursor .context templates <your-project-root>/

# Copy CI/CD configurations
cp -r .github <your-project-root>/
cp .gitlab-ci.yml <your-project-root>/
```

### 2. Install Dependencies

```bash
cd <your-project-root>
cp templates/package.json package.json
npm install
```

### 3. Start Developing

```bash
npm run dev
```

**Note**: See [SETUP.md](SETUP.md) for complete installation instructions and verification steps.

## What You Get

### 🤖 AI Agent Rules

The `.cursorrules` file configures Cursor AI to act as a principal frontend architect with expertise in:

- **TypeScript Excellence**: No `any` types, strict mode, advanced patterns
- **React 18+ Modern Practices**: Concurrent features, Suspense, performance optimization
- **Module Federation**: v1 and v2 support with Vite
- **Design Systems**: Token-based design, component composition patterns
- **Performance**: Web Vitals targets, code splitting, optimization strategies
- **Security**: npm audit integration for dependency vulnerability scanning
- **Accessibility**: WCAG 2.2 Level AA compliance

### 📚 Context Documentation

The `.context/` directory provides AI context for your project:

- **architecture.md** - System design, Module Federation setup, state management
- **design-system.md** - Design tokens, component patterns, theming
- **workflows.md** - Git branching, commit conventions, CI/CD
- **conventions.md** - File naming, import organization, code structure
- **stack.md** - Complete technology stack with versions

### 🚀 Automation

**GitHub Actions**:

- `ci.yml` - Lint, type-check, test, build
- `security.yml` - npm audit for dependency vulnerability scanning
- `a11y.yml` - Accessibility testing
- `visual-regression.yml` - Chromatic visual testing
- `coverage.yml` - Test coverage reporting

**GitLab CI**:

- Parallel test jobs
- Security scanning
- Merge request automation

### 📋 Project Templates

Ready-to-use configurations:

- `vite.config.ts` - Module Federation setup
- `tsconfig.json` - Strict TypeScript configuration
- `eslint.config.js` - Flat config with all rules
- `.storybook/` - Storybook 8+ with testing addons
- `package.json` - Complete scripts and dependencies

## Key Features

### Type Safety First

Zero tolerance for `any` types. Every piece of code is fully typed with TypeScript 5.5+.

```typescript
// ✅ Good
function getUser(id: UserId): Promise<User> { ... }

// ❌ Bad
function getUser(id: any): any { ... }
```

### Modern React

Leverage React 18+ concurrent features:

```typescript
function SearchResults() {
  const [isPending, startTransition] = useTransition()
  
  const handleSearch = (query: string) => {
    startTransition(() => {
      setSearchQuery(query) // Non-urgent update
    })
  }
  
  return <>{isPending && <Spinner />}</>
}
```

### Module Federation

Support for both v1 and v2:

```typescript
// Remote application exposes modules
federation({
  name: 'remote_app',
  exposes: {
    './Button': './src/components/Button',
  },
})

// Host consumes remotes
federation({
  name: 'host_app',
  remotes: {
    remote_app: 'http://localhost:3001/remoteEntry.js',
  },
})
```

### Performance Targets

Enforced Web Vitals targets:

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **FCP**: < 1.8s
- **TBT**: < 200ms

### Testing Standards

- **Unit tests**: Vitest + Testing Library (>80% coverage)
- **Component tests**: User interaction testing
- **E2E tests**: Playwright for user journeys
- **Visual regression**: Chromatic for visual testing
- **Accessibility**: axe-core testing

### Security by Default

- npm audit scanning in CI/CD for vulnerability detection
- CSP headers configured

### Accessibility

WCAG 2.2 Level AA compliance:

- Semantic HTML required
- ARIA attributes when needed
- Keyboard navigation support
- Screen reader testing
- Color contrast validation

## Project Structure

```bash
# Directory structure
.cursor/
├── .cursorrules                 # Main AI agent rules
├── .cursorignore                # Files to exclude from AI indexing
├── .cursor/                     # Workspace settings
│   ├── README.md                # Cursor workspace documentation
│   ├── settings.json            # Workspace IDE settings
│   └── rules/                   # Additional rule files
│       ├── README.md
│       └── project-specific.md
├── .context/                    # Documentation for AI context
│   ├── architecture.md
│   ├── design-system.md
│   ├── workflows.md
│   ├── conventions.md
│   └── stack.md
├── templates/                   # Project templates
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── eslint.config.js
│   ├── .storybook/
│   ├── .github/
│   │   └── workflows/
│   ├── gitlab-ci.yml
│   └── package.json
├── .github/workflows/           # GitHub Actions
│   ├── ci.yml
│   ├── security.yml
│   ├── a11y.yml
│   ├── visual-regression.yml
│   └── coverage.yml
├── .gitlab-ci.yml               # GitLab CI
├── CONTRIBUTING.md              # Contribution guidelines
├── ARCHITECTURE.md              # System architecture
└── README.md                    # This file
```

## Usage in Cursor

Once copied to your project, Cursor AI will:

1. **Automatically read** `.cursorrules` for coding standards
2. **Automatically reference** `.context/` documentation for architectural decisions
3. **Suggest** using templates when creating new files
4. **Enforce** quality gates (types, tests, security, a11y)

### Verifying Cursor Configuration

To verify Cursor is using your configuration:

1. **Test `.cursorrules`**:
   - Ask: "What TypeScript standards do you follow?"
   - Should reference strict mode, no `any` types, etc.

2. **Test `.context/`**:
   - Ask: "How does Module Federation work in our architecture?"
   - Should reference `architecture.md` content

3. **Test component patterns**:
   - Ask: "How should I create a Button component?"
   - Should reference design system patterns from `design-system.md`

If Cursor doesn't reference these files, verify:

- `.cursorrules` exists in project root
- `.context/` directory exists in project root
- Files are not gitignored (they should be committed)
- Restart Cursor IDE if needed

### Example Workflow

1. You: "Create a Button component"
2. Cursor AI:
   - Uses strict TypeScript with proper types
   - Creates tests with Testing Library
   - Adds Storybook stories
   - Implements accessibility requirements
   - Suggests performance optimizations

## Configuration

### Environment Variables

Create `.env.development`:

```bash
VITE_API_URL=http://localhost:3000/api
VITE_ENABLE_DEV_TOOLS=true
```

### GitHub Secrets (for CI/CD)

Required secrets:

- `CHROMATIC_PROJECT_TOKEN` - For visual regression testing
- `CODECOV_TOKEN` - For coverage reporting (optional)

### GitLab Variables

Required variables:

## Development Workflow

### Daily Development

```bash
# Start dev server
npm run dev

# Run tests in watch mode
npm run test

# Run accessibility tests
npm run test:a11y

# Type check
npm run type-check

# Lint and fix
npm run lint:fix
```

### Quality Checks

```bash
# All checks
npm run type-check && npm run lint && npm run test && npm run build

# Coverage report
npm run test:coverage

# Security scan
npm run security
```

### Storybook

```bash
# Start Storybook
npm run storybook

# Build static Storybook
npm run build-storybook
```

## Tech Stack

- **React** 18.3+
- **TypeScript** 5.5+
- **Vite** 5+
- **Module Federation** (v1 & v2)
- **Vitest** for testing
- **Playwright** for E2E
- **Storybook** 8+
- **ESLint** 9+ (flat config)
- **Prettier** 3+
- **Husky** for git hooks

See `.context/stack.md` for complete stack details.

## Best Practices

The AI agent enforces these practices:

1. **Type Safety**: No `any` types, strict TypeScript
2. **Modern React**: Functional components, hooks, concurrent features
3. **Performance**: Code splitting, memoization, optimization
4. **Accessibility**: WCAG 2.2 Level AA compliance
5. **Security**: Secure coding, dependency scanning
6. **Testing**: >80% coverage, multiple test types
7. **Code Quality**: ESLint, Prettier, pre-commit hooks

## Customization

### Adding Project-Specific Rules

Edit `.cursorrules` to add project-specific rules:

```markdown
## Project-Specific Rules

- Use Tailwind CSS for styling
- Follow Material Design principles
- Use Zustand for global state
```

### Modifying Templates

Edit files in `templates/` directory to customize:

- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript settings
- `eslint.config.js` - Linting rules

## Troubleshooting

### Cursor AI Not Following Rules

1. Restart Cursor IDE
2. Check `.cursorrules` file is in project root
3. Verify context files in `.context/` are up to date

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

### Type Errors

```bash
# Check TypeScript version
npx tsc --version

# Run type check
npm run type-check
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This configuration is provided as-is for use in your projects.

## Additional Documentation

- [Contributing Guide](CONTRIBUTING.md)
- [Architecture](ARCHITECTURE.md)
- [Context Documentation](.context/)
- [Changelog](CHANGELOG.md) - Version history and changes

## Support

For issues with this Cursor setup:

1. Check documentation in `.context/`
2. Review GitHub/GitLab CI logs
3. Open an issue on the repository

---

**Built for developers who refuse to compromise on quality.**
