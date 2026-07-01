# Linter Tools (2026)

Three tools dominate JavaScript/TypeScript linting in 2026: ESLint (mature ecosystem),
Biome (fast unified toolchain), and Oxlint (fastest, growing ecosystem). The trend is
toward Rust-based tools that deliver 15-100x speed improvements.

## Comparison

| Feature | ESLint | Biome | Oxlint |
|---------|--------|-------|--------|
| Language | JavaScript | Rust | Rust |
| First released | 2013 | 2023 | 2024 |
| Speed (500 files) | 15-30s | 2-3s | <1s |
| Speed vs ESLint | baseline | 15-50x faster | 50-100x faster |
| Default rules | minimal | ~200 | 107 enabled, 650+ available |
| Plugin ecosystem | 1000+ | GritQL (v2.0+) | growing, ESLint plugin shim |
| Formatter | no (needs Prettier) | yes, built-in | Oxfmt (separate) |
| TypeScript | @typescript-eslint | native, ~85% type-aware | native, oxlint-tsgolint |
| React hooks | full via plugins | basic | yes |
| Accessibility | jsx-a11y plugin | no | yes (built-in) |
| Security rules | via plugins | no | partial |
| Config format | JS or JSON (flat) | JSON | TypeScript or JSON |

(source: betterstack-biome-vs-eslint.md, logrocket-retire-eslint-oxlint.md)

## ESLint

The standard since 2013. Unmatched plugin ecosystem covering React hooks, accessibility,
security, import boundaries, and custom domain rules. Full type-aware coverage via
@typescript-eslint pointing at tsconfig.json.
(source: betterstack-biome-vs-eslint.md)

Downsides: slow in large projects (linting can exceed two minutes), steep configuration
learning curve, no useful defaults out of the box, requires coordinating multiple
packages (ESLint + Prettier + typescript-eslint + framework plugins).
(source: logrocket-retire-eslint-oxlint.md)

Setting up ESLint for a TypeScript React project requires six separate packages.
(source: betterstack-biome-vs-eslint.md)

**When ESLint still makes sense:**
- Accessibility scanning or security linting required
- Heavy dependence on niche plugins or custom rules
- Full TypeScript type-aware coverage mandatory
- Vue, Svelte, or other framework-specific plugins needed
- Small repos where linting speed doesn't matter
(source: betterstack-biome-vs-eslint.md, logrocket-retire-eslint-oxlint.md)

## Biome

Rust-based unified toolchain combining linting and formatting. Single dependency, single
config file (biome.json), sensible defaults. Formatter follows Prettier's output closely.
(source: betterstack-biome-vs-eslint.md)

Biome 2.0 (June 2025) added type inference: catches floating promises, misused async
functions without running tsc. Coverage is approximately 85% of what typescript-eslint
provides. (source: betterstack-biome-vs-eslint.md)

**Key gaps:**
- No accessibility checks (missing alt attributes, ARIA patterns)
- No security-focused rules (injection detection, unsafe regex)
- No import boundary enforcement for monorepos
- No exhaustive dependency warnings for useEffect
- No conditional hook detection
- No Vue or Svelte support
(source: betterstack-biome-vs-eslint.md)

**Performance:** Pre-commit hooks under 1 second for 5 files. Editor feedback in
100-200ms. Type-aware linting on 200-file backend in 6 seconds vs ESLint's 15 seconds.
(source: betterstack-biome-vs-eslint.md)

## Oxlint

Part of the Oxc toolchain (maintained by VoidZero). Rust-based, claims 50-100x faster
than ESLint and 2x faster than Biome. Includes 650+ built-in rules spanning ESLint core,
TypeScript, React, Jest, and jsx-a11y. Enables 107 rules by default.
(source: logrocket-retire-eslint-oxlint.md)

Supports ESLint plugins via NAPI-RS and a JavaScript plugin shim, so existing ESLint
plugins can run within Oxlint. Accepts TypeScript configuration files.
(source: nakazawa-fastest-frontend-tooling-2026.md)

Type-aware linting via `oxlint-tsgolint` (Go-based), achieving 20-40x faster than
ESLint + typescript-eslint when paired with tsgo in TypeScript v7.
(source: logrocket-retire-eslint-oxlint.md)

Error messages are structured for both humans and LLM-based tools. Cleaner CLI output
than ESLint. (source: logrocket-retire-eslint-oxlint.md)

**Limitations:**
- Not every ESLint rule/plugin has an equivalent yet
- Smaller ecosystem, fewer tutorials
- Less familiarity from LLM-based assistants (training data lag)
- Experimental JS plugin support
(source: logrocket-retire-eslint-oxlint.md)

**Benchmarks:**

Vue Core Repository:
- Oxlint: 1.343s, ESLint: 133.864s — 99.65x faster

React Router Repository:
- Oxlint: 434.9ms, ESLint: 29.459s — 67.74x faster

(source: logrocket-retire-eslint-oxlint.md)

## Companion tools

### Formatters

**Prettier:** The incumbent. Works everywhere, huge plugin ecosystem.

**Oxfmt:** Prettier-compatible formatter from Oxc. Includes built-in import and Tailwind
CSS class sorting. Falls back to Prettier for non-JS languages.
(source: nakazawa-fastest-frontend-tooling-2026.md)

Keep formatting out of the lint pipeline entirely — separate concerns.
(source: charpentier-migration-oxlint-oxfmt.md)

### TypeScript Go (tsgo)

TypeScript rewritten in Go, achieving approximately 10x faster type checking. Identified
type errors the JavaScript implementation missed. Available as
`@typescript/native-preview`. (source: nakazawa-fastest-frontend-tooling-2026.md)

## Choosing a tool

**Start with Biome** unless you already know you need ESLint plugins. For many new
TypeScript apps, that gives the best DX: fast editor feedback, one config file, one CI
command, no Prettier coordination. (source: betterstack-biome-vs-eslint.md)

**Oxlint** for teams prioritizing speed above all, willing to accept a growing but
smaller ecosystem. Best choice if standard ESLint core rules or widely-supported plugin
rules suffice. (source: logrocket-retire-eslint-oxlint.md)

**ESLint** when you need the full plugin ecosystem, especially accessibility, security,
or framework-specific rules. (source: betterstack-biome-vs-eslint.md)

**Hybrid approach:** Biome or Oxfmt for formatting, ESLint for specialized rules. Or
Oxlint with JS plugin shim to run ESLint plugins at near-native speed.
(source: betterstack-biome-vs-eslint.md, nakazawa-fastest-frontend-tooling-2026.md)

## Related pages

- [[linting-with-llms]] — why linting matters more with AI coding
- [[linter-rules-for-ai-code]] — specific rules and configs
- [[linter-migration-oxlint]] — practical migration guide
