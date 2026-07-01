# Migrating to Oxlint

Practical guide to migrating from ESLint (and optionally Biome/Prettier) to Oxlint and
Oxfmt, based on real-world migration reports and official tooling.

## Why migrate

The primary motivation is speed. ESLint's JavaScript runtime and single-threaded
execution create performance bottlenecks that compound in larger codebases and tighter
feedback loops (especially with AI-assisted coding).
(source: logrocket-retire-eslint-oxlint.md)

Nicolas Charpentier's monorepo migration: full lint pipeline dropped from ~81 seconds to
~2.5 seconds (97% reduction). Lint-only operations: 3s → 0.7s. Format-only: 2.9s → 1.9s.
The largest win came from "eliminating ESLint entirely," particularly expensive import
resolution rules like `import/no-restricted-paths`.
(source: charpentier-migration-oxlint-oxfmt.md)

## Benchmarks

Vue Core Repository:
- Oxlint: 1.343s, ESLint: 133.864s — **99.65x faster**

React Router Repository:
- Oxlint: 434.9ms, ESLint: 29.459s — **67.74x faster**

Type-aware linting via `oxlint-tsgolint` + `tsgo`: 20-40x faster than ESLint +
typescript-eslint. (source: logrocket-retire-eslint-oxlint.md)

## Migration commands

Oxlint provides `@oxlint/migrate` for automated config conversion.

### ESLint v9+ flat config

```bash
npx @oxlint/migrate [optional-eslint-config-path]
```

Converts supported ESLint rules to Oxlint equivalents, reports unconverted items, and
offers experimental replacements where stable equivalents don't exist.
(source: logrocket-retire-eslint-oxlint.md)

### With JavaScript-based ESLint plugins

```bash
npx @oxlint/migrate --js-plugins
```

Enables Oxlint to work with JS plugins alongside native rules. Most ESLint v9 API
plugins work without modification. (source: logrocket-retire-eslint-oxlint.md)

### With type-aware rules

```bash
npx @oxlint/migrate --type-aware
```

Requires installing `oxlint-tsgolint` for type-aware functionality.
(source: logrocket-retire-eslint-oxlint.md)

### Legacy ESLint v8 configs

```bash
npx @eslint/migrate-config [legacy-config-file]
```

Convert to flat config first, then run `@oxlint/migrate`.
(source: logrocket-retire-eslint-oxlint.md)

### Identifying gaps

```bash
npx @oxlint/migrate --details
```

Reports which rules lack native Oxlint equivalents.
(source: charpentier-migration-oxlint-oxfmt.md)

## Adopting @nkzw/oxlint-config

For a strict starting config after migration:

```bash
npm install -D @nkzw/oxlint-config @nkzw/eslint-plugin eslint-plugin-no-only-tests \
  eslint-plugin-perfectionist eslint-plugin-react-hooks eslint-plugin-unused-imports
```

```typescript
import nkzw from '@nkzw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [nkzw],
});
```

(source: nkzw-oxlint-config-readme.md)

## Gotchas

### Missing native rules

Some rules lack Oxlint equivalents. Known gaps include:
- `noLeakedRender` (catches problematic conditional rendering)
- `noUndeclaredEnvVars` (catches environment variable typos)
- `noSwitchDeclarations` (scope issues in switch cases)

(source: charpentier-migration-oxlint-oxfmt.md)

### JS plugin performance

Native rules are substantially faster than rules running through the JS plugin shim
(V8 boundary overhead). The remaining ~2.5s in Charpentier's pipeline was primarily JS
plugins. `eslint-plugin-react-compiler` specifically caused a performance cliff.
(source: charpentier-migration-oxlint-oxfmt.md)

### Formatter separation

Keep formatting out of the lint pipeline entirely. Oxfmt replaces Prettier; don't run
Prettier through a lint plugin. (source: charpentier-migration-oxlint-oxfmt.md)

### Default printWidth

Prettier and Biome default `printWidth` to 80; Oxfmt defaults to 100. The migration tool
preserves existing values if explicitly set.
(source: charpentier-migration-oxlint-oxfmt.md)

### Template literal formatting

Oxfmt's embedded language formatting in template literals may produce slightly different
output than Prettier for CSS-in-JS and similar constructs.
(source: charpentier-migration-oxlint-oxfmt.md)

### Editor configuration

Developers must install and configure Oxlint editor extensions instead of ESLint
extensions for consistent local DX. (source: charpentier-migration-oxlint-oxfmt.md)

### Ecosystem maturity

Fewer tutorials, fewer community examples, less familiarity from LLM-based assistants
(training data lag). Downloads have tripled over six months but the community is still
smaller. (source: logrocket-retire-eslint-oxlint.md)

## AI-assisted migration

Charpentier delegated the migration itself to an AI agent. Success factors:
1. Existing migration tooling (`@oxlint/migrate`, built-in Prettier/Biome migration flags)
2. Comprehensive documentation covering plugin mapping and unsupported features
3. Mechanical, well-defined steps

The agent ran migration tools, reviewed outputs, updated CI scripts, and pruned unused
dependencies. (source: charpentier-migration-oxlint-oxfmt.md)

## When to wait

- Project depends heavily on niche plugins or custom rules Oxlint doesn't support
- Deep investment in complex ESLint-based workflows
- Small enough repos where linting speed isn't a bottleneck

(source: logrocket-retire-eslint-oxlint.md)

## Related pages

- [[linter-tools-2026]] — full tool comparison
- [[linting-with-llms]] — why speed matters for AI workflows
- [[linter-rules-for-ai-code]] — @nkzw/oxlint-config and other configs
