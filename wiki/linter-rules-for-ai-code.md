# Linter Rules for AI-Generated Code

Specific lint rules and configurations designed for codebases where AI assistants
generate significant portions of the code. Three notable projects address this:
eslint-config-agent, eslint-plugin-llm-core, and @nkzw/oxlint-config.

## Common AI failure patterns

Empirical analysis of LLM-generated bugs (333 bugs + 558 incorrect snippets across
studies) identified recurring patterns:

| Bug type | Frequency |
|----------|-----------|
| Missing code blocks | 40%+ |
| Misinterpretations | 20.8% |
| Missing corner cases | 15.3% |
| Hallucinated objects/APIs | 9.6% |

(source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Async/await misuse

The most common pattern: AI writes async callbacks in array methods that return Promise
arrays instead of resolved values.

```javascript
// AI generates this — returns Promise[], not values
const results = items.map(async (item) => {
  return await fetchItem(item);
});

// Correct: use Promise.all or for...of
const results = await Promise.all(items.map(item => fetchItem(item)));
```

(source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Empty catch blocks

AI frequently generates error handling that silently swallows exceptions with TODO
comments, hiding critical failures. (source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Deep nesting

Instead of early returns, AI tends to nest conditionals deeply, reducing readability.
(source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Convenient shortcuts

AI coding assistants often generate code using shortcuts like `?.` (optional chaining)
and `??` (nullish coalescing) that hide potential runtime issues. These make null/undefined
handling implicit rather than explicit.
(source: eslint-config-agent-readme.md)

## eslint-config-agent

Strict ESLint 9 flat config for TypeScript/React. Philosophy: "explicit over clever."
(source: eslint-config-agent-readme.md)

### Key rules

**Control flow:**
- `no-else-return` — flattens code into guard-clause style
- `no-nested-ternary` — bans nested ternaries
- `no-await-in-loop` — prevents serializing independent async work
- `no-throw-literal` — requires throwing Error objects, not primitives
- `prefer-template` — template literals over concatenation

**Import hygiene:**
- `import/no-cycle` — forbids circular dependencies
- `unused-imports/no-unused-imports` — auto-removes unused imports (common AI artifact)
- `@typescript-eslint/consistent-type-imports` — forces `import type` syntax

**Type safety:**
- Bans `as` type assertions (except `as const`)
- Requires named type aliases over inline unions
- Disallows `Record<...>` with literal keys

**Size limits:**
- `max-lines`: warns at 70, errors at 100 (excluding comments/blanks)
- `max-lines-per-function`: warns at 50, errors at 70

**Spec enforcement:**
- Every source file requires a corresponding `.spec.ts` sibling
- Stale `eslint-disable` comments surface as errors

(source: eslint-config-agent-readme.md)

### Presets for adoption

| Preset | Strictness | Use case |
|--------|-----------|----------|
| default | strict | greenfield projects |
| `/recommended` | relaxed | disables divisive rules |
| `/incremental` | warn-level | full ruleset as warnings |
| `/recommended-incremental` | relaxed + warn | gentlest on-ramp |

(source: eslint-config-agent-readme.md)

## eslint-plugin-llm-core

20-rule ESLint plugin targeting observed LLM behavioral patterns. Complementary to
typescript-eslint (which enforces language specs); this targets patterns that are
technically valid but represent poor practices in AI-generated code.
(source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Rules

- `no-async-array-callbacks` — detects async callbacks in array methods
- `no-empty-catch` — flags empty catch blocks
- `prefer-early-return` — encourages flat control flow
- `no-magic-numbers` — requires named constants
- `prefer-unknown-in-catch` — enforces proper catch parameter typing
- `throw-error-objects` — prevents throwing strings
- `structured-logging` — enforces consistent logging
- `consistent-exports` — prevents mixing export styles
- `explicit-export-types` — requires return type annotations

(source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Error message philosophy

Messages explain context and solutions rather than just flagging issues: "This pattern
returns an array of Promises, not the resolved values. Consider using Promise.all() or
a for...of loop instead." Educational messaging helps both the developer and the AI
learn. (source: simpson-ai-coding-mistakes-eslint-plugin.md)

### Configuration

```javascript
import llmCore from 'eslint-plugin-llm-core';
export default [{
  plugins: { 'llm-core': llmCore },
  rules: { ...llmCore.configs.recommended.rules }
}];
```

(source: simpson-ai-coding-mistakes-eslint-plugin.md)

## @nkzw/oxlint-config

Opinionated Oxlint config by Christoph Nakazawa (Product @ VoidZero). Requires Oxlint
v1.46+. (source: nkzw-oxlint-config-readme.md)

### Principles

1. **Error over warning** — warnings are noise
2. **Strict consistency** — modern language features, one way to do things
3. **Bug prevention** — bans `instanceof`, debug-only code (`console.log`, `test.only`)
4. **Performance-first** — fast rules preferred (e.g., TypeScript's `noUnusedLocals`
   over ESLint's `no-unused-vars`)
5. **No subjective rules** — avoids non-autofixable, opinion-heavy checks

(source: nkzw-oxlint-config-readme.md)

### Included plugins

- eslint-plugin-unicorn
- eslint-plugin-import-x
- eslint-plugin-react
- eslint-plugin-react-hooks
- eslint-plugin-perfectionist
- eslint-plugin-no-instanceof
- eslint-plugin-no-only-tests

(source: nkzw-oxlint-config-readme.md)

### Configuration

```typescript
import nkzw from '@nkzw/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [nkzw],
});
```

(source: nkzw-oxlint-config-readme.md)

## TypeScript rules that matter for AI code

Two rules specifically recommended for AI-assisted TypeScript:

- `@typescript-eslint/no-explicit-any` — prevents AI from using `any` as an escape hatch
- `@typescript-eslint/strict-null-checks` — enforces handling nullable values

(source: simpson-ai-coding-mistakes-eslint-plugin.md)

## Related pages

- [[linting-with-llms]] — why linting matters more with AI coding
- [[linter-tools-2026]] — tool comparison
- [[linters-as-agent-specs]] — treating lint rules as executable specifications
