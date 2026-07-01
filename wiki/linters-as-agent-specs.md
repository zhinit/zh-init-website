# Linters as Agent Specifications

Factory.ai's framework for treating lint rules as executable specifications for AI
coding agents. "Agents write the code; linters write the law."
(source: factory-ai-linters-to-direct-agents.md)

## Core argument

As development shifts from "developers writing code with AI" to "developers
orchestrating agents," traditional guardrails (code review, tribal knowledge) become
insufficient. Agents need machine-verifiable rules embedded directly in the code
generation loop. (source: factory-ai-linters-to-direct-agents.md)

LLMs scaffold features rapidly, shifting the bottleneck from typing speed to "how
quickly we can turn human conventions into machine-checkable rules."
(source: factory-ai-linters-to-direct-agents.md)

## Seven categories of agent-focused lint rules

### 1. Grep-ability (consistent formatting)

Named exports over defaults. Consistent error types. Explicit DTOs. Grep-friendly code
turns repos into "reliable databases for both humans and agents."

Benefits:
- Agents predict file locations from names
- Named exports and absolute imports enable unambiguous definition/usage location
- Consistent filenames enable codemods with low blast radius
- Vector and keyword search improve with predictable code shapes

### 2. Glob-ability (code organization)

Predictable file structure for reliable placement and refactoring. Agents need to know
where to put new code and where to find existing code.

Conventions: enums in `enums.ts`, types in `types.ts`, index.ts re-exports module
surface, unit tests colocated as `.test.ts`.

### 3. Architectural boundaries

Prevent cross-layer imports via allowlists/denylists. Enforce module boundaries so
agents cannot introduce coupling that humans would catch in review.

### 4. Security and privacy

Block plaintext secrets. Require input validation. Ban `eval()` and `new Function()`.
Prevent accidentally committed API keys.

### 5. Testability and coverage

Colocate tests with source files. Disallow network calls in unit tests. Enforce
consistent async patterns. One-to-one mapping between logic files and unit tests.

### 6. Observability

Structured logging. Error metadata enrichment. Consistent telemetry naming conventions.

### 7. Documentation signals

Module-level docstrings. TSDoc comments for public APIs. Links to architectural decision
records (ADRs).

(source: factory-ai-linters-to-direct-agents.md)

## AGENTS.md + linting: complementary layers

Natural language guidance (in AGENTS.md or CLAUDE.md) fails in predictable ways:
- **Ambiguity:** edge cases lead to false compliance
- **No guarantees:** advice doesn't cause build failures
- **Limited reach:** can't verify cross-file imports or architectural boundaries

Linters provide compiler-like contracts:
- **Validation:** AST/type-aware checks catch structural violations
- **On-path enforcement:** runs in dev, pre-commit, CI, PR bots, agent toolchains
- **Automatic feedback:** precise error messages and autofixes enable agent self-correction

The recommended pairing:
- `AGENTS.md` = the "why" and examples (maps guidelines to RuleIDs, links to docs/ADRs)
- Linting = the "how" and guarantee (encodes rules, blocks violations, provides feedback)

(source: factory-ai-linters-to-direct-agents.md)

## Code searchability practices

Specific TypeScript conventions that make code agent-friendly:

**Named exports and imports:**
Ban default exports, enforce named imports. ripgrep precisely locates
`export const Foo` and all `import { Foo } from`.

**Absolute import paths:**
Ban relative imports across package boundaries. Enforce `@app/feature/...` aliases.
Tooling and agents understand provenance; fewer brittle relative hops.

**File organization:**
```typescript
// src/users/enums.ts
export enum UserRole {
  Admin = 'admin',
  Manager = 'manager',
  Member = 'member',
}

// src/users/types.ts
export type User = {
  id: string;
  role: UserRole;
  email: string;
};

// src/users/helper.ts
import { UserRole } from '@/users/enums';
import { User } from '@/users/types';

export function canManage(user: User): boolean {
  return user.role === UserRole.Admin || user.role === UserRole.Manager;
}
```

(source: factory-ai-linters-to-direct-agents.md)

## Linters as migration engines

Encode the "new way" as failing rules and the "old way" as detectable patterns with
autofixes. This turns one-off rewrites into continuous, agent-native processes.

Examples:
- Upgrading React to hooks: forbid class components, enforce functional components
- Migrating from Moment.js to date-fns
- Preparing for Node 22 by banning deprecated Node 18 syntax

Process:
1. Define rules forbidding legacy patterns; start as warnings, promote to errors
2. Run rules to surface violations
3. Deploy agents with autofixes/codemods to batch changes and open verified PRs
4. Keep rules on hot path (pre-commit, CI, PR, agent toolchains)

(source: factory-ai-linters-to-direct-agents.md)

## The lint development cycle

A repeatable cycle for translating human insight into machine-enforced policy:

1. **Observe drift:** spot recurring anti-patterns in review, logs, metrics
2. **Codify the rule:** draft ESLint/Oxlint rule (severity, autofix, tests, docs)
3. **Surface violations:** run rule across repo; triage by risk
4. **Remediate at scale:** spawn agents to apply autofixes, batch PRs, verify with tests
5. **Prevent regressions:** put rule on hot path; time-box waivers, track compliance

Each observed issue becomes an executable constraint; agents clean up debt; codebases
self-heal. (source: factory-ai-linters-to-direct-agents.md)

## Payoff timeline

- **Short-term (weeks):** smoother pull requests, less review overhead
- **Medium-term (quarters):** faster lead times, safer large-scale changes, fewer outages
- **Long-term (years):** locked-in architectural integrity; teams focus on design and product

Each standard encoded "continues to pay dividends indefinitely."
(source: factory-ai-linters-to-direct-agents.md)

## Related pages

- [[linting-with-llms]] — why linting matters more with AI coding
- [[linter-rules-for-ai-code]] — specific rules and configs
- [[linter-tools-2026]] — tool comparison
- [[linter-migration-oxlint]] — practical migration to faster tooling
