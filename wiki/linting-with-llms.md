# Linting with LLMs

Linters have shifted from style enforcement tools to executable specifications that
guide AI-generated code. Strict, fast linting with immediate feedback produces
measurably better output from LLMs. (source: nakazawa-fastest-frontend-tooling-2026.md)

## Why linting matters more with AI coding

AI-generated code produces 1.7x more issues and 1.4x more critical bugs than
human-written code. (source: simpson-ai-coding-mistakes-eslint-plugin.md) The most
common failure patterns — missing corner cases (15.3%), misinterpretations (20.8%),
hallucinated APIs (9.6%) — are exactly the kind of issues linters catch.
(source: simpson-ai-coding-mistakes-eslint-plugin.md)

"Humans and LLMs both perform much better in codebases that have a fast feedback loop,
strict guardrails, and strong local reasoning."
(source: nakazawa-fastest-frontend-tooling-2026.md)

Testing with LLMs demonstrated measurable improvement: when given strict guardrails
through comprehensive linting, an AI system "did a significantly better job with fewer
bugs" during codebase refactoring tasks.
(source: nakazawa-fastest-frontend-tooling-2026.md)

## The feedback loop pattern

The workflow that produces the best results from AI coding assistants:

1. AI writes code
2. Linter checks it (on save, pre-commit, or CI)
3. Lint errors are fed back to the AI
4. AI corrects and resubmits

Addy Osmani describes this as "collaborative guidance": copy linter errors into the
chat and say "please address these issues." The model then knows exactly what to do.
"It's like having a strict teacher looking over the AI's shoulder." The AI "wants" to
produce the right answer, and linter feedback helps it learn what "correct" means within
the project's context. (source: osmani-llm-coding-workflow-2026.md)

Automated code quality checks (linters, type checkers) guide the AI. CI runs on every
commit, failures feed back to the model for correction, creating a tight loop: write
code → run tests → fix. (source: osmani-llm-coding-workflow-2026.md)

## Error, never warn

Multiple sources converge on the same principle: treat all lint issues as errors, not
warnings.

"Warnings are noise and get ignored. Either it's an issue, or it isn't. This config
forces developers to fix problems or explicitly disable the rule with a comment."
(source: nkzw-oxlint-config-readme.md)

Run CI with `--max-warnings 0` so new warnings introduced by AI suggestions block merge
rather than accumulating. (source: osmani-llm-coding-workflow-2026.md)

eslint-config-agent enforces the same philosophy: stale `eslint-disable` comments that
no longer suppress violations surface as errors via
`linterOptions.reportUnusedDisableDirectives`. (source: eslint-config-agent-readme.md)

## Lint-green as definition of done

Factory.ai's framework positions "lint green" as the completion criterion for AI tasks.
Rules run on save, pre-commit, CI, PR bots, and inside agent toolchains. Achieving lint
green becomes the definition of "Done." (source: factory-ai-linters-to-direct-agents.md)

Some AI coding agents will refuse to say a code task is "done" until all tests pass.
(source: osmani-llm-coding-workflow-2026.md)

## Configuring the AI with project rules

Maintain a CLAUDE.md (or equivalent) file with process rules and preferences. Include
linting expectations: "code should pass ESLint," "prefer descriptive variable names,"
etc. Custom instructions dramatically improve alignment with team idioms.
(source: osmani-llm-coding-workflow-2026.md)

The recommended approach pairs natural-language guidance with machine enforcement:
- `AGENTS.md` / `CLAUDE.md` = the "why" and examples
- Linting = the "how" and guarantee
(source: factory-ai-linters-to-direct-agents.md)

## Speed matters

Linter speed directly affects the feedback loop quality. Pre-commit hooks that take
8-12 seconds get skipped; hooks under 1 second feel invisible.
(source: betterstack-biome-vs-eslint.md)

Editor feedback at 100-200ms keeps the AI (and developer) in flow. Type-aware ESLint
rules at 1-2 seconds create noticeable lag. (source: betterstack-biome-vs-eslint.md)

See [[linter-tools-2026]] for tool comparison and [[linter-migration-oxlint]] for
achieving faster linting.

## Related pages

- [[linter-tools-2026]] — ESLint vs Biome vs Oxlint comparison
- [[linter-rules-for-ai-code]] — specific rules and configs for AI-assisted codebases
- [[linters-as-agent-specs]] — treating lint rules as executable specifications
- [[linter-migration-oxlint]] — migrating to faster tooling
