# Contributing

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Development Setup

### Prerequisites

- Node.js 20.x or higher
- npm 9.x or higher
- Git

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <project-name>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.development
   # Edit .env.development with your local configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Run tests** (in another terminal)
   ```bash
   npm run test
   ```

## Development Workflow

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write code
   - Write tests
   - Update documentation

3. **Run quality checks locally**
   ```bash
   npm run lint        # Check for linting errors
   npm run type-check  # Check TypeScript types
   npm run test        # Run tests
   npm run build       # Ensure build succeeds
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

5. **Push and create pull request**
   ```bash
   git push -u origin feature/your-feature-name
   ```
   Then create a Pull Request on GitHub/GitLab.

### Before Submitting

Ensure all of the following pass:

- [ ] Code follows style guidelines
- [ ] All tests pass (`npm run test`)
- [ ] No linting errors (`npm run lint`)
- [ ] No TypeScript errors (`npm run type-check`)
- [ ] Build succeeds (`npm run build`)
- [ ] Accessibility checks pass (`npm run test:a11y`)
- [ ] Security scan passes (`npm run security`)
- [ ] Tests added for new features
- [ ] Documentation updated if needed
- [ ] Storybook stories added/updated for components

## Code Standards

### TypeScript

- **No `any` types** - Use proper types or `unknown`
- **Strict mode enabled** - All TypeScript strict checks enabled
- **Type everything** - Functions, props, state, etc.
- **Use type utilities** - Partial, Pick, Omit, etc.

### React

- **Functional components** - Use function components, not class components
- **Custom hooks** - Extract reusable logic into hooks
- **Proper memoization** - Use React.memo, useMemo, useCallback appropriately
- **Accessibility** - Include ARIA attributes, keyboard navigation, screen reader support

### Code Organization

- **File naming**: PascalCase for components, camelCase for utilities
- **Import order**: External → Internal absolute → Relative → Types
- **Exports**: Barrel exports via index.ts files

See `.context/conventions.md` for detailed conventions.

### Testing

- **Unit tests**: Test utility functions and hooks
- **Component tests**: Test user interactions, not implementation
- **E2E tests**: Test critical user journeys
- **Coverage**: Aim for >80% coverage

### Accessibility

All components must:
- Use semantic HTML
- Support keyboard navigation
- Provide ARIA attributes when needed
- Meet WCAG 2.2 Level AA
- Pass axe-core tests

## Commit Message Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types**:
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style changes
- `refactor` - Code refactoring
- `test` - Adding/updating tests
- `chore` - Maintenance tasks
- `perf` - Performance improvements
- `a11y` - Accessibility improvements

**Example**:
```
feat(button): add loading state to primary button

Add spinner animation when button is in loading state.
Uses Heroicons Spinner component for consistency.

Closes #123
```

## Pull Request Process

1. **Update documentation** if you're adding/changing features
2. **Add tests** for new functionality
3. **Update CHANGELOG.md** if applicable
4. **Ensure CI passes** (all checks must be green)
5. **Request review** from at least one team member
6. **Address review feedback**
7. **Merge** after approval

### PR Description Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests added/updated
- [ ] Integration tests added/updated
- [ ] E2E tests added/updated
- [ ] Manual testing completed
- [ ] Accessibility tested

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Tests added/updated
- [ ] No TypeScript errors
- [ ] No linting errors
- [ ] Documentation updated
- [ ] Accessibility validated
- [ ] Security scan passed
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
├── types/         # TypeScript type definitions
├── services/      # API services
├── constants/     # Application constants
└── styles/        # Global styles

tests/
├── unit/          # Unit tests
├── integration/   # Integration tests
└── e2e/           # E2E tests
```

## Development Tools

### VS Code

Recommended extensions:
- ESLint
- Prettier
- TypeScript
- Error Lens
- Thunder Client

### Browser DevTools

- React Developer Tools
- Redux DevTools (if using Redux)
- Axe DevTools (for a11y testing)

### Testing

- Run tests: `npm run test`
- Watch mode: `npm run test:watch`
- Coverage: `npm run test:coverage`
- E2E: `npm run test:e2e`

### Debugging

- React DevTools for component inspection
- Browser DevTools for performance profiling
- Vite DevTools for build debugging

## Release Process

1. Update version in `package.json`
2. Update CHANGELOG.md
3. Create release branch
4. Tag release: `git tag v1.2.0`
5. Push tags: `git push --tags`
6. Create GitHub/GitLab release

## Getting Help

- **Documentation**: Check `.context/` directory for detailed docs
- **Issues**: Create an issue for bugs or questions
- **Discussions**: Use GitHub Discussions for questions
- **Team Chat**: Reach out on Slack/Discord

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the project
- Help others learn and grow

## Additional Resources

- [Architecture Documentation](.context/architecture.md)
- [Design System Guidelines](.context/design-system.md)
- [Development Workflows](.context/workflows.md)
- [Code Conventions](.context/conventions.md)
- [Technology Stack](.context/stack.md)

Thank you for contributing!

