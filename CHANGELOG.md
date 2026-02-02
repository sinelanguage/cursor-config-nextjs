# Changelog

All notable changes to this Cursor AI configuration will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

### Changed

### Deprecated

### Removed

### Fixed

### Security

## [2.0.0] - 2026-02-01

### Added

- Next.js App Router-first rules and architecture guidance
- Route Handler and BFF patterns for `app/api`
- Hybrid rendering and partial hydration guidance
- Next.js-focused templates (`next.config.ts`, `tsconfig.json`, `.eslintrc.json`, `package.json`)
- Use-case specific Next.js skills (App Router, Pages Router, ISR, Edge, Deployment, Migration)

### Changed

- Update standards and docs to focus on Next.js-only patterns
- Update CI artifacts to `.next/` output

### Removed

- Legacy frontend references and templates

---

## Changelog Format Guidelines

### Categories

Changes are organized into these categories:

- **Added**: New features, capabilities, or documentation
- **Changed**: Changes in existing functionality or standards
- **Deprecated**: Features that will be removed in future versions
- **Removed**: Removed features or breaking changes
- **Fixed**: Bug fixes and corrections
- **Security**: Security improvements and vulnerability fixes

### Version Format

- **Unreleased**: Changes in development that haven't been released yet
- **[MAJOR.MINOR.PATCH]**: Released versions following SemVer
- **Date**: YYYY-MM-DD format (ISO 8601)

### Entry Format

Each entry should:

- Start with a dash (-)
- Be written in present tense ("Add feature" not "Added feature")
- Reference issue numbers when applicable (#123)
- Group related changes together

### Examples

```markdown
### Added
- App Router guidance for Server Components
- Route Handler patterns for API and BFF

### Changed
- Update metadata guidance for App Router

### Fixed
- Corrected caching strategy examples

### Security
- Strengthened input validation guidance
```

### Maintenance Workflow

1. **During Development**:
   - Add entries to `[Unreleased]` section as you work
   - Update changelog in the same PR as your changes

2. **Before Release**:
   - Review all entries in `[Unreleased]`
   - Move entries to new version section
   - Add release date (YYYY-MM-DD)
   - Update version number following SemVer

3. **After Release**:
   - Create git tag matching version (e.g., `v2.0.0`)
   - Push tag to repository
   - Create GitHub/GitLab release with changelog content

### When to Update

Update the changelog for:

- **All releases** (MAJOR, MINOR, PATCH)
- **Breaking changes** (must document)
- **New features** or capabilities
- **Significant merges** that affect standards
- **Security updates** (always document)
- **Documentation updates** that change conventions

### Best Practices

- **Be descriptive**: Clearly explain what changed and why
- **Link to issues**: Reference related issues or PRs
- **Group logically**: Group related changes together
- **Use consistent format**: Follow the established format
- **Update regularly**: Don't wait until release to update
- **Review before release**: Ensure all changes are documented

---

For more information about changelog maintenance, see [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
