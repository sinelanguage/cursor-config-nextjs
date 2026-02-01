# Cursor Workspace Configuration

This directory contains workspace-specific settings and configurations for Cursor IDE.

## Directory Structure

```text
.cursor/
├── README.md           # This file
├── agents/             # Custom subagents (optional)
│   └── verifier.md
├── settings.json       # Workspace settings (VS Code compatible)
├── skills/             # Agent skills (optional)
│   └── component-scaffold/
│       └── SKILL.md
└── rules/              # Additional rule files
    ├── README.md       # Rules directory documentation
    └── project-specific.md
```

## Files

### `.cursorignore`

**Location**: Project root (sibling to `.cursor/`)  
**Purpose**: Controls which files Cursor indexes for AI context  
**Format**: `.gitignore` syntax  
**When to use**: Exclude large or irrelevant files from AI indexing

### `settings.json`

**Location**: `.cursor/settings.json`  
**Purpose**: Workspace-specific IDE settings  
**Format**: VS Code-compatible JSON  
**Contains**: Editor, TypeScript, ESLint, Prettier, and testing settings

### `rules/` Directory

**Location**: `.cursor/rules/`  
**Purpose**: Additional rule files that complement `.cursorrules`  
**Format**: Markdown files (`.md` or `.mdc`)  
**Usage**: Project-specific or domain-specific rules

### `skills/` Directory

**Location**: `.cursor/skills/`  
**Purpose**: Agent Skills (reusable workflows and task playbooks)  
**Format**: `.cursor/skills/<skill-name>/SKILL.md`  
**Usage**: Scaffolding, release checklists, documentation workflows

### `agents/` Directory

**Location**: `.cursor/agents/`  
**Purpose**: Custom subagents for verification or parallel work  
**Format**: `.cursor/agents/<name>.md`  
**Usage**: Validation, code review, focused research

## How Cursor Uses These Files

### Automatic Detection

Cursor automatically detects and uses:

1. **`.cursorignore`** (project root)
   - Excludes files from AI indexing
   - Reduces context size and improves performance
   - Applied automatically when file exists

2. **`.cursor/settings.json`**
   - Workspace-specific IDE settings
   - Applied when opening the workspace
   - Overrides user settings for this project

3. **`.cursor/rules/*.md`**
   - Additional rule files
   - Combined with `.cursorrules` for AI guidance
   - Automatically indexed

4. **`.cursor/skills/**/SKILL.md`**
   - Reusable workflows and task playbooks
   - Discovered at startup and available via `/`
   - Skills can include optional scripts and references

5. **`.cursor/agents/*.md`**
   - Custom subagents for verification or parallel work
   - Available to Agent for delegation

### Loading Notes

- `.cursorrules` and `.cursor/rules/*.md` are merged for rule guidance.
- `.cursor/settings.json` applies workspace settings when the project opens.
- `.cursorignore` controls indexing exclusions.
- Skills and subagents are discovered independently when present.

## Customization

### Adding Custom Rules

Create a new `.md` file in `.cursor/rules/`:

```markdown
# My Custom Rules

## Domain-Specific Patterns

- Use specific pattern for this domain
- Follow this convention
```

### Adding Agent Skills

Create a new skill folder with a `SKILL.md` file:

```text
.cursor/
└── skills/
    └── my-skill/
        └── SKILL.md
```

### Adding Custom Subagents

Create a new subagent file:

```text
.cursor/
└── agents/
    └── verifier.md
```

### Modifying Settings

Edit `.cursor/settings.json` to customize:

- Editor behavior
- TypeScript settings
- Linter configuration
- Test runner settings
- Extension recommendations

### Updating Ignore Patterns

Edit `.cursorignore` to exclude:

- Large generated files
- Build outputs
- Test artifacts
- Files that shouldn't be indexed

## Best Practices

1. **Keep settings minimal**: Only include project-specific overrides
2. **Document custom rules**: Add comments explaining why rules exist
3. **Review ignore patterns**: Regularly update `.cursorignore` to exclude unnecessary files
4. **Version control**: Commit all `.cursor/` files (except sensitive settings)
5. **Team consistency**: Share settings across team members

## Troubleshooting

### Settings Not Applied

- Verify `.cursor/settings.json` is valid JSON
- Restart Cursor IDE
- Check for JSON syntax errors

### Rules Not Working

- Verify rule files are in `.cursor/rules/`
- Check file extensions (`.md` or `.mdc`)
- Ensure files are readable and not corrupted

### Files Still Being Indexed

- Check `.cursorignore` syntax (uses `.gitignore` format)
- Verify patterns are correct
- Restart Cursor to reload ignore patterns

## Related Files

Related configuration files:

- `.cursorrules` - Main AI agent rules (project root)
- `.context/` - Documentation for AI context (project root)
- `.vscode/settings.json` - VS Code settings (if needed)

## See Also

Additional resources:

- [Cursor Documentation](https://docs.cursor.com/)
- [SETUP.md](../SETUP.md) - Setup instructions
- [README.md](../README.md) - Project overview
