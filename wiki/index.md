# Wiki Index

This wiki holds research on web development topics, design patterns,
accessibility, SEO, and related subjects. Built from primary sources archived
in `raw/`. Use `/research <topic>` to add new knowledge.

## React

- [[react]] — overview, mental model, five-step process, rendering model, purity, project setup
- [[react-components]] — components, JSX, props, children, conditional rendering, lists, keys
- [[react-state]] — useState, state as snapshot, immutability, deriving values, rules of hooks
- [[react-events]] — event handlers, propagation, preventing defaults, accessibility
- [[react-effects]] — useEffect, synchronization, cleanup, lifecycle, anti-patterns
- [[react-refs]] — useRef, DOM refs, ref callbacks, useImperativeHandle
- [[react-context]] — createContext, useContext, provider pattern, performance
- [[react-reducers]] — useReducer, actions, dispatch, useState vs useReducer
- [[react-hooks]] — complete hooks API reference (useState through useActionState, custom hooks)
- [[react-performance]] — memo, useMemo, useCallback, Suspense, lazy, transitions, cache
- [[react-typescript]] — typing props, hooks, events, children, styles
- [[react-portals]] — createPortal, flushSync

## Vite

- [[vite]] — overview, architecture, scaffolding, browser support
- [[vite-react-setup]] — React plugin choice (@vitejs/plugin-react vs plugin-react-swc), TypeScript config
- [[vite-configuration]] — vite.config.ts, defineConfig, conditional/async config, server options
- [[vite-features]] — CSS (modules, pre-processors, Lightning CSS), static assets, glob imports, web workers, WebAssembly
- [[vite-environment-variables]] — .env files, VITE_ prefix, modes, NODE_ENV vs mode, TypeScript types
- [[vite-production-builds]] — build targets, base path, code splitting, multi-page apps, deployment (Vercel, Netlify, etc.)

## Web Design

- [[visual-hierarchy]] — size, contrast, spacing, alignment, and typography as tools to direct attention
- [[typography]] — typeface selection, sizing (16px min body), line length, hierarchy, performance
- [[color-theory]] — HSB framework for color variations, 60-30-10 rule, schemes, emotional associations
- [[color-psychology]] — color-in-context theory, saturation principle, methodological caveats
- [[color-and-cognition]] — red impairs analysis, blue enhances alertness, green boosts creativity, color and memory
- [[color-and-relaxation]] — blue 3x faster stress recovery, green parasympathetic activation, cortisol reduction
- [[green-shades]] — sage, mint, emerald, forest, olive, lime, teal — shade-specific psychological effects
- [[whitespace]] — micro/macro whitespace, spacing systems, active vs. passive use
- [[usability-heuristics]] — Nielsen's 10 heuristics for interface design (unchanged since 1994)
- [[web-design-process]] — 8-step end-to-end workflow from purpose to launch
- [[responsive-design]] — mobile-first, proportional scaling, clamp(), grid adaptation
- [[accessibility]] — WCAG 2.1/2.2 contrast ratios, keyboard nav, alt text, heading hierarchy
- [[web-design-trends-2026]] — dopamine design, bold typography, dark mode, motion, 3D, neo-brutalism
- [[font-psychology]] — how typefaces influence perception, key studies (Monotype N=400, IBM N=73, Shaikh N=379)
- [[font-personality]] — three-factor model (Potency/Evaluative/Activity), trait mappings by category
- [[fonts-for-elegance]] — high-contrast serifs, thin strokes, calligraphic influence, luxury associations
- [[fonts-for-intelligence]] — cognitive fluency, Baskerville trustworthiness, humanist sincerity
- [[fonts-for-calm]] — open letterforms, rounded terminals, generous spacing, humanist advantage
- [[humanist-fonts]] — calligraphic sans-serifs: warm, readable, sincere (Lato, Fira Sans, Cabin, Open Sans)

## Linting & AI Coding

- [[linting-with-llms]] — why linting matters more with AI coding, feedback loop pattern, error-never-warn, lint-green as done
- [[linter-tools-2026]] — ESLint vs Biome vs Oxlint comparison, performance benchmarks, TypeScript support, formatters
- [[linter-rules-for-ai-code]] — eslint-config-agent, eslint-plugin-llm-core, @nkzw/oxlint-config, common AI failure patterns
- [[linters-as-agent-specs]] — Factory.ai framework: seven rule categories, AGENTS.md + linting, lint development cycle, migration engines
- [[linter-migration-oxlint]] — migrating from ESLint to Oxlint, benchmarks, commands, gotchas, AI-assisted migration

## CSS

- [[css]] — overview, module map, related modules not yet covered
- [[css-cascade]] — cascade algorithm, specificity (3-column system), cascade layers (@layer), inheritance
- [[css-selectors]] — simple selectors, combinators, pseudo-classes, pseudo-elements, nesting, specificity interaction
- [[css-values-units]] — length units (absolute, font-relative, viewport, container query), math functions, data types
- [[css-box-model]] — four box areas, box-sizing, margin collapsing, background-clip, inline elements
- [[css-display]] — outer vs inner display types, multi-keyword syntax, display:none vs contents, animating display
- [[css-position]] — five positioning modes, inset properties, stacking contexts, sticky behavior, performance
- [[css-flexbox]] — one-dimensional layout (row or column), two axes, alignment, common patterns
- [[css-grid]] — two-dimensional layout, container/item properties, fr unit, auto-fill vs auto-fit, common layout patterns
- [[css-colors]] — color properties, color spaces (legacy vs modern), manipulation functions, data types, accessibility
- [[css-fonts-text]] — font-family, font-size, font-weight, @font-face, variable fonts, text-decoration, text-shadow, line-height
- [[css-custom-properties]] — declaration (-- prefix, @property), var(), inheritance, typed properties, animation, IACVT
- [[css-responsive]] — media queries, container queries, responsive images/typography, viewport meta tag
- [[css-transitions-animations]] — CSS transitions, scroll-driven animations, view transitions
- [[css-anchor-positioning]] — declarative element tethering, anchor()/anchor-size(), position-area grid, scoping
- [[css-logical-properties]] — flow-relative alternatives to physical properties, block/inline dimensions, i18n
- [[css-theming]] — color-scheme, prefers-color-scheme, light-dark(), design token layers, dark mode patterns, contrast-color()

## Domains & DNS

- [[domain-registration]] — what domains are, ICANN/registry/registrar chain, registration process, pricing, TLDs, naming tips
- [[domain-registrars]] — 2026 registrar comparison (Cloudflare, Porkbun, Namecheap, GoDaddy, etc.), pricing tables, recommendations
- [[dns-records]] — A, AAAA, CNAME, ALIAS, HTTPS, CAA, MX, TXT, SRV records, TTL, propagation, nameserver options
- [[whois-rdap]] — WHOIS sunset (Jan 2025), RDAP replacement, privacy, tiered access
- [[vercel-custom-domains]] — full Vercel domain setup (3 paths), www vs apex, redirects, SSL, email, wildcards, DNS migration, troubleshooting
- [[vercel-rewrites]] — SPA catch-all rewrite, path parameters, wildcards, regex, external origin proxying, caching

## Portfolio & Job Search

- [[portfolio-website]] — whether to build a portfolio site, what it should contain, the contrarian case
- [[portfolio-projects]] — selecting, building, and presenting 3-5 projects with working demos
- [[portfolio-hiring-manager-perspectives]] — synthesized views from 60+ HM survey, 6 named HMs, ~50 practitioner accounts
- [[portfolio-design]] — visual design principles, essential sections, platform choices, anti-patterns
- [[cs-job-search-2026]] — entry-level SWE market context, job search tactics, GitHub optimization
