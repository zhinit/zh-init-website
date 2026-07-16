# Wiki Log

## 2026-07-08 — Hacker News rules, moderation, and shadow banning

**Sources archived (5):**
- `hn-official-guidelines.md` — official HN submission and comment guidelines (news.ycombinator.com)
- `hn-official-faq.md` — official HN FAQ: ranking, voting, flagging, account features (news.ycombinator.com)
- `hn-undocumented-features.md` — undocumented HN behaviors: shadow banning, karma thresholds, voting rings, flame-war detector, second-chance pool, implicit downranking (minimaxir/hacker-news-undocumented, GitHub)
- `hamy-hn-shadow-ban-detection.md` — shadow ban detection guide: three ban types (user/domain/IP), incognito comparison method, showdead (HAMY)
- `syften-hn-posting-guide.md` — complete HN posting guide: rules, self-promotion, Show HN, timing, what kills posts, what reaches front page (Syften)

**Wiki pages created (3):**
- `hacker-news.md` — content standard, self-promotion rules (occasional OK, primary use must be curiosity), title rules, post types (link/Show HN/Ask HN), what reaches front page (blog posts largest category, technical lessons and surprising failures strongest), timing (US business hours, be available to respond)
- `hn-moderation.md` — ranking algorithm (points/time + flags + moderator), flagging at 31 karma, vouching at 31 karma, downvoting at 501 karma, flame-war detector, second-chance pool (/pool), implicit downranking (no-URL posts, tutorials, politics), edit/delete limits (2 hours), anti-voting manipulation, moderators (dang, Scott Bell)
- `hn-shadow-bans.md` — three ban types (user/domain/IP), detection via incognito comparison of submitted/threads pages, domain check via /from?site=, common causes (primarily self-promotion, voting rings, new account spam), appeal via hn@ycombinator.com, vouching to resurrect [dead] content

**Wiki index updated:** added Hacker News section with 3 new entries.

---

## 2026-07-08 — LinkedIn content publishing (posts, articles, newsletters, API)

**Sources archived (5):**
- `linkedin-help-content-types.md` — official LinkedIn definitions of posts, articles, reposts, and newsletters (LinkedIn Help)
- `evergreenfeed-linkedin-articles-guide.md` — step-by-step article publishing guide, formatting options, SEO, distribution tips (EvergreenFeed)
- `brandghost-linkedin-articles-vs-newsletters.md` — articles vs newsletters comparison: distribution, subscribers, availability, SEO (BrandGhost)
- `linkedin-posts-api-docs.md` — Posts API documentation: endpoints, schemas, article/link sharing, mentions, hashtags, content types (Microsoft Learn / LinkedIn)
- `linkedin-share-on-linkedin-docs.md` — Share on LinkedIn consumer integration: OAuth, w_member_social, text/article/image shares, rate limits (Microsoft Learn / LinkedIn)

**Wiki pages created (3):**
- `linkedin-content-types.md` — three publishing formats (posts, articles, newsletters), character limits, distribution mechanics, outbound link reach penalty, reposts, when to use each
- `linkedin-articles.md` — publishing workflow (7 steps), editor formatting options, content specs (125K chars, 1–2K words recommended), SEO via linkedin.com/pulse/, distribution tips (hashtags, timing, link-in-comment), republishing blog posts (canonical URL limitation), articles vs newsletters comparison
- `linkedin-api.md` — Posts API (/rest/posts) as current endpoint, OAuth scopes (w_member_social, w_organization_social), article/link sharing with explicit metadata, image upload flow, mentions/hashtags syntax, rate limits (150/day member, 100K/day app), key endpoints table, limitations (no scheduling, no article publishing via API, no URL scraping)

**Wiki index updated:** added LinkedIn section with 3 new entries.

---

## 2026-07-07 — Vercel rewrites and SPA routing

**Sources archived (4):**
- `vercel-rewrites.md` — rewrites documentation: same-application, external origin, wildcards, regex, caching, service rewrites (Vercel Docs)
- `vercel-vite-framework.md` — Vite on Vercel: env vars, functions, SSR, SPA deep linking fix (Vercel Docs)
- `vercel-json-configuration.md` — vercel.json reference: rewrites property, schema, supported properties (Vercel Docs)
- `vercel-404-troubleshooting.md` — 404 causes: SPA misconfiguration, output directory, build settings, deployment access (Vercel KB)

**Wiki pages created (1):**
- `vercel-rewrites.md` — SPA catch-all rewrite pattern, rewrite syntax (source/destination/has/missing), path parameters, wildcards, regex, external origin rewrites with caching (April 2026 default), service rewrites, framework considerations

**Wiki pages updated (1):**
- `vite-production-builds.md` — added SPA deep linking note under Vercel deployment, cross-reference to [[vercel-rewrites]]

**Wiki index updated:** added [[vercel-rewrites]] entry under Domains & DNS.

---

## 2026-07-05 — Vercel domain configuration (full documentation)

**Sources archived (8):**
- `vercel-add-domain.md` — adding custom domains via dashboard, apex/subdomain/wildcard configuration, TXT verification (Vercel Docs)
- `vercel-working-with-domains.md` — domain ownership, buying through Vercel vs third-party, apex/subdomain/wildcard concepts, email setup (Vercel Docs)
- `vercel-deploying-redirecting-domains.md` — deployment behavior, www redirects, CNAME vs A record trade-offs, Anycast (Vercel Docs)
- `vercel-managing-dns-records.md` — adding/verifying/removing records, DNS presets, zone file import, migration workflow (Vercel Docs)
- `vercel-working-with-nameservers.md` — Vercel nameservers (ns1/ns2.vercel-dns.com), auto DNS records, wildcard support (Vercel Docs)
- `vercel-working-with-dns.md` — DNS record types table (A/AAAA/ALIAS/CAA/CNAME/HTTPS/MX/NS/SRV/TXT), TTL, propagation, best practices (Vercel Docs)
- `vercel-troubleshooting-domains.md` — misconfigured domains, DNS issues, SSL certificate issues, CAA records, IPv6, Anycast, domain ownership errors (Vercel Docs)
- `temperstack-vercel-custom-domain.md` — third-party walkthrough of Vercel domain setup (TemperStack, April 2026)

**Wiki pages updated (2):**
- `vercel-custom-domains.md` — expanded from basic CLI guide to comprehensive reference: three setup paths (external DNS / Vercel NS / buy via Vercel), www vs apex recommendation with CNAME rationale, redirects, deployment behavior, SSL (Let's Encrypt HTTP-01/DNS-01), email (MX records, no Vercel mail service), wildcard domains, IPv6 (unsupported), Anycast routing, DNS migration workflow, troubleshooting table, diagnostic tools, supported record types
- `dns-records.md` — added DNS resolution overview, ALIAS/HTTPS/CAA/SRV record types, TTL section with migration best practices, expanded propagation details, verification commands, updated CNAME section with RFC 1034 citation and CNAME-vs-A rationale

**Wiki index updated:** expanded descriptions for [[dns-records]] and [[vercel-custom-domains]].

---

## 2026-07-05 — Domain registration, registrars, DNS, WHOIS/RDAP

**Sources archived (6):**
- `name-com-how-to-register-domain.md` — complete domain registration guide: TLDs, naming tips, pricing, post-registration steps, common mistakes (name.com)
- `instant-domain-search-best-registrars-2026.md` — 9-registrar comparison with pricing tables, renewal trap analysis, search privacy (Instant Domain Search)
- `cloudflare-registrar-docs.md` — at-cost pricing model, DNSSEC, WHOIS redaction, auto-renewal (Cloudflare Developer Docs)
- `vercel-custom-domain-setup.md` — CLI walkthrough for adding custom domains, DNS records, SSL provisioning, external DNS setup (Vercel Docs)
- `dynadot-registering-first-domain.md` — domain fundamentals, registry vs registrar distinction, registration steps, security (Dynadot)
- `dynadot-whois-vs-rdap.md` — WHOIS sunset (Jan 28, 2025), RDAP protocol, technical differences, privacy implications, ccTLD exception (Dynadot)

**Failed sources (3):**
- ICANN domain registration process page — HTTP 403
- ICANN registering domain names page — HTTP 403
- ICANN registrants information page — HTTP 403

**Wiki pages created (5):**
- `domain-registration.md` — what domains are, structure, TLDs, ICANN/registry/registrar chain, registration process, pricing (incl. renewal trap), naming tips
- `domain-registrars.md` — 9-registrar comparison table (Cloudflare, Porkbun, Spaceship, NameSilo, Dynadot, Namecheap, Hostinger, Squarespace, GoDaddy), individual profiles, recommendations by use case
- `dns-records.md` — A, AAAA, CNAME records, apex domain restriction, DNS propagation, nameserver options, Vercel-specific values
- `whois-rdap.md` — WHOIS history and limitations, RDAP as replacement (Jan 2025), tiered access, privacy/GDPR, ccTLD exception
- `vercel-custom-domains.md` — step-by-step Vercel domain setup (CLI), DNS record configuration, SSL provisioning, external DNS provider workflow

**Wiki index updated:** added Domains & DNS section with 5 new entries.

---

## 2026-06-30 — CSS Theming

**Sources archived (7 new, 1 existing):**
- `mdn-prefers-color-scheme.md` — prefers-color-scheme media query, syntax, values, embedded elements (MDN)
- `mdn-color-scheme.md` — color-scheme property, values, formal definition, meta tag (MDN)
- `mdn-light-dark-function.md` — light-dark() CSS function, syntax, parameters, color/image forms (MDN)
- `mdn-css-custom-properties.md` — (already archived) custom properties, var(), @property (MDN)
- `una-kravets-modern-css-theming.md` — light-dark(), contrast-color(), style queries, elevation swapping (Una Kravets, Google Chrome DevRel, June 2026)
- `css-tricks-dark-mode-guide.md` — four toggle approaches, OS detection, persistence, design considerations (CSS-Tricks)
- `penpot-design-tokens-css-variables.md` — three-layer token architecture, naming conventions, W3C DTCG (Penpot)
- `pbrumby-light-dark-production.md` — production light-dark() usage, SVG handling (Peter Brumby, February 2026)

**Wiki pages created (1):**
- `css-theming.md` — color-scheme property, prefers-color-scheme, light-dark(), design token layers (primitive/semantic/component), dark mode implementation (toggle approaches, OS detection, persistence), dark mode design (colors, elevation, images, SVGs, typography), contrast-color(), container style queries

**Wiki pages updated (1):**
- `index.md` — added [[css-theming]] under CSS

---

## 2026-06-30 — CSS MDN documentation (full module research)

**Sources archived (26):**
- `mdn-css-guides-index.md` — CSS modules overview (MDN)
- `mdn-css-cascade-introduction.md` — cascade algorithm, origins, layers, precedence (MDN)
- `mdn-css-specificity.md` — 3-column specificity system, :where()/:is()/:has() rules (MDN)
- `mdn-css-layer.md` — @layer syntax, priority, nesting, @import with layer (MDN)
- `mdn-css-selectors.md` — 60+ selectors, combinators, pseudo-classes/elements (MDN)
- `mdn-css-values-and-units.md` — all CSS units, math functions, data types (MDN)
- `mdn-css-box-model.md` — four areas, box-sizing, margin collapsing (MDN)
- `mdn-css-display.md` — display values, multi-keyword syntax, animation, accessibility (MDN)
- `mdn-css-position.md` — 5 positioning modes, stacking contexts, performance (MDN)
- `mdn-css-flexbox-basic-concepts.md` — axes, container, items, flex shorthand, alignment (MDN)
- `mdn-css-flexbox-use-cases.md` — navigation, centering, cards, media objects, forms (MDN)
- `mdn-css-grid-layout.md` — grid properties, functions, alignment, subgrid, masonry (MDN)
- `mdn-css-grid-common-layouts.md` — 5 layout patterns with code (MDN)
- `mdn-css-colors.md` — color functions, spaces, manipulation, accessibility (MDN)
- `mdn-css-fonts.md` — font properties, @font-face, variable fonts, OpenType (MDN)
- `mdn-css-text-font-styling.md` — font families, sizing, decoration, shadows, alignment (MDN)
- `mdn-css-custom-properties.md` — var(), inheritance, fallbacks, JS integration (MDN)
- `mdn-css-at-property.md` — @property syntax/inherits/initial-value, animated properties (MDN)
- `mdn-css-media-queries.md` — types, features, range syntax, logical operators (MDN)
- `mdn-css-container-queries.md` — container-type, @container, naming, CQ length units (MDN)
- `mdn-css-responsive-design.md` — mobile-first, viewport meta, responsive typography (MDN)
- `mdn-css-transitions.md` — properties, events, display transitions, @starting-style (MDN)
- `mdn-css-scroll-driven-animations.md` — scroll()/view() timelines, animation-range (MDN)
- `mdn-css-view-transitions.md` — pseudo-element tree, APIs, cross-document transitions (MDN)
- `mdn-css-anchor-positioning.md` — anchor-name, position-area, anchor(), anchor-size() (MDN)
- `mdn-css-logical-properties.md` — block/inline dimensions, property mapping table (MDN)

**Wiki pages created (16):**
- `css.md` — overview, module map
- `css-cascade.md` — cascade algorithm, specificity, cascade layers, inheritance
- `css-selectors.md` — simple selectors, combinators, pseudo-classes, pseudo-elements, nesting
- `css-values-units.md` — length/angle/time/frequency/resolution units, math functions, data types
- `css-box-model.md` — four box areas, box-sizing, margin collapsing, background-clip
- `css-display.md` — outer/inner types, multi-keyword syntax, animating display
- `css-position.md` — five positioning modes, inset properties, stacking contexts
- `css-flexbox.md` — axes, container/item properties, alignment, common patterns
- `css-grid.md` — tracks, areas, auto-placement, common layouts, subgrid
- `css-colors.md` — color spaces, functions, manipulation, accessibility
- `css-fonts-text.md` — font properties, @font-face, variable fonts, text styling
- `css-custom-properties.md` — var(), @property, inheritance, typed animation, IACVT
- `css-responsive.md` — media queries, container queries, responsive patterns
- `css-transitions-animations.md` — transitions, scroll-driven animations, view transitions
- `css-anchor-positioning.md` — anchor-name, position-area, anchor(), anchor-size(), scoping
- `css-logical-properties.md` — flow-relative properties, block/inline dimensions, i18n

---

## 2026-06-30 — Font psychology, personality traits, and typeface perception

**Sources archived (9):**
- `cognitiontoday-font-psychology-research.md` — font psychology research: cognitive fluency, disfluency effect, 15+ academic citations (Cognition Today)
- `monotype-font-emotion-study-2022.md` — N=400 study: Cotford trust +9%, FS Jack sincerity +10%, Gilroy prominence +12% (It's Nice That / Monotype)
- `ibm-design-fonts-influence-perception-2016.md` — N=73 study: Baskerville vs Fira Sans vs Helvetica vs Roboto Slab across 4 site types (IBM Design / Medium)
- `designmodo-font-psychology.md` — font categories, personality traits, Shaikh & Chaparro three-factor model, brand examples (Designmodo)
- `brandvision-typography-influence-perception.md` — serif/sans-serif/script/decorative trait mappings, brand identity applications (Brand Vision)
- `todaymade-font-psychology-guide.md` — comprehensive guide: disfluency effect (Diemand-Yauman 2012), cultural context, accessibility (Todaymade)
- `figma-best-fonts-websites-2026.md` — 24 best web fonts with categories, personality descriptions, selection tips (Figma)
- `pttrns-calm-fonts-web-design.md` — 15 calming fonts: serif and sans-serif, design principles for stress-free typography (Pttrns)
- `fontfabric-humanist-fonts-guide.md` — humanist font characteristics, history, comparison with geometric/grotesque, applications (Fontfabric)

**Wiki pages created (6):**
- `font-psychology.md` — master page: cognitive fluency, disfluency effect, Monotype/IBM/Shaikh/Morris studies
- `font-personality.md` — three-factor model, trait mappings by category (serif, sans-serif, humanist, script, display, rounded)
- `fonts-for-elegance.md` — high-contrast serifs (Playfair, Bodoni, Didot), thin strokes, calligraphic influence, spacing
- `fonts-for-intelligence.md` — Baskerville trustworthiness, cognitive fluency, humanist sincerity, context dependence
- `fonts-for-calm.md` — open letterforms, rounded terminals, generous spacing, humanist advantage, design principles
- `humanist-fonts.md` — defining characteristics, comparison with geometric/grotesque, experimental evidence, notable fonts

**Wiki pages updated (2):**
- `typography.md` — added links to 6 new font psychology pages
- `index.md` — added 6 new entries under Web Design section

---

## 2026-06-30 — CSS Transitions and Animations

**Sources used (3):**
- `mdn-css-transitions.md` — CSS transitions: properties, shorthand, events, transitioning display (MDN)
- `mdn-css-scroll-driven-animations.md` — scroll-driven animations: scroll()/view() timelines, animation-range (MDN)
- `mdn-css-view-transitions.md` — view transitions: pseudo-element tree, @view-transition, startViewTransition API (MDN)

**Wiki pages created (1):**
- `css-transitions-animations.md` — CSS transitions (four properties, events, display transitions), scroll-driven animations (scroll/view timelines), view transitions (pseudo-element tree, cross-document, JS API)

**Wiki index updated:** added [[css-transitions-animations]] under CSS.

---

## 2026-06-30 — CSS Responsive Design

**Sources used (3):**
- `mdn-css-media-queries.md` — media queries syntax, types, features, logical operators, range syntax (MDN)
- `mdn-css-container-queries.md` — container queries, container-type, container-name, container query length units (MDN)
- `mdn-css-responsive-design.md` — RWD principles, responsive images, responsive typography, viewport meta tag (MDN)

**Wiki pages created (1):**
- `css-responsive.md` — media queries, container queries, responsive patterns, viewport meta tag, media vs container queries

**Wiki index updated:** added [[css-responsive]] under CSS.

---

## 2026-06-30 — CSS Fonts and Text

**Sources used (2):**
- `mdn-css-fonts.md` — CSS Fonts module, font selection properties, @font-face, variable fonts, font features, font synthesis (MDN)
- `mdn-css-text-font-styling.md` — fundamental text and font styling, font-family, font-size, text-decoration, text-shadow, line-height, font shorthand (MDN)

**Wiki pages created (1):**
- `css-fonts-text.md` — font-family (web safe fonts, generic names, font stacks), font-size (px/em/rem), font-weight (100-900), font-style, font shorthand, @font-face descriptors, variable fonts, text-decoration, text-transform, text-shadow, text-align, line-height, letter-spacing, word-spacing, font features (font-variant-*, font-kerning), font-display performance

## 2026-06-30 — CSS Custom Properties

**Sources used (2):**
- `mdn-css-custom-properties.md` — custom properties (variables), var(), fallbacks, inheritance, IACVT, JS integration (MDN)
- `mdn-css-at-property.md` — @property at-rule, descriptors, typed properties, animation, resolution order (MDN)

**Wiki pages created (1):**
- `css-custom-properties.md` — declaration (-- prefix, @property), var() with fallbacks, inheritance control, @property descriptors, typed animation, invalid value handling (IACVT), JS integration, resolution order

**Wiki index updated:** added [[css-custom-properties]] under CSS.

## 2026-06-30 — CSS Selectors

**Sources used (1):**
- `mdn-css-selectors.md` — selectors, combinators, pseudo-classes, pseudo-elements, nesting (MDN)

**Wiki pages created (1):**
- `css-selectors.md` — simple selectors, combinators, pseudo-classes (by category), pseudo-elements, nesting, specificity interaction

## 2026-06-30 — CSS Values and Units

**Sources used (1):**
- `mdn-css-values-and-units.md` — CSS values and units: length units, math functions, data types, angle/time/frequency/resolution units (MDN)

**Wiki pages created (1):**
- `css-values-units.md` — absolute/font-relative/viewport/container-query length units, angle/time/frequency/resolution units, math functions (supported and unsupported), CSS data types, attr/url/var functions

**Wiki index updated:** added [[css-values-units]] under CSS.

---

## 2026-06-30 — CSS Position

**Sources used (1):**
- `mdn-css-position.md` — CSS position property: five modes, inset properties, stacking, performance (MDN)

**Wiki pages created (1):**
- `css-position.md` — five positioning modes, inset properties, precedence rules, stacking contexts, sticky behavior, performance

---

## 2026-06-30 — CSS Flexbox

**Sources used (2):**
- `mdn-css-flexbox-basic-concepts.md` — flexbox axes, container/item properties, alignment (MDN)
- `mdn-css-flexbox-use-cases.md` — navigation, centering, cards, media objects, forms (MDN)

**Wiki pages created (1):**
- `css-flexbox.md` — core concept, container/item properties, alignment, common patterns

**Wiki pages updated (1):**
- `index.md` — added css-flexbox entry under CSS section

---

## 2026-06-30 — CSS Grid

**Sources used (2):**
- `mdn-css-grid-layout.md` — CSS Grid Layout: container/item properties, fr unit, functions, alignment, subgrid, masonry (MDN)
- `mdn-css-grid-common-layouts.md` — common grid layout patterns: responsive areas, 12-column, auto-fill, dense packing (MDN)

**Wiki pages created (1):**
- `css-grid.md` — two-dimensional layout, container properties, item placement, repeat/minmax/fit-content, auto-fill vs auto-fit, alignment, four common layout patterns, subgrid, masonry

## 2026-06-30 — CSS Display

**Sources used (1):**
- `mdn-css-display.md` — CSS display property: outer/inner types, multi-keyword syntax, animation, accessibility (MDN)

**Wiki pages created (1):**
- `css-display.md` — outer vs inner display types, all display values, multi-keyword syntax, none vs contents vs hidden, animating display

**Wiki index updated:** added [[css-display]] under CSS.

---

## 2026-06-30 — CSS Colors

**Sources used (1):**
- `mdn-css-colors.md` — CSS Colors module: properties, color spaces, manipulation functions, data types, accessibility (MDN)

**Wiki pages created (1):**
- `css-colors.md` — core properties, legacy vs modern color functions, color manipulation, data types, keywords, properties accepting colors, accessibility

**Wiki index updated:** added [[css-colors]] under CSS.

---

## 2026-06-30 — Linting with LLMs and AI coding workflows

**Sources archived (9):**
- `nakazawa-fastest-frontend-tooling-2026.md` — tsgo, Oxlint, Oxfmt, strict linting for AI (Christoph Nakazawa, cpojer.net)
- `factory-ai-linters-to-direct-agents.md` — linters as executable specs for AI agents, 7 rule categories (Factory.ai)
- `eslint-config-agent-readme.md` — strict ESLint 9 config for AI-assisted TypeScript/React (GitHub)
- `simpson-ai-coding-mistakes-eslint-plugin.md` — 500+ AI bug analysis, eslint-plugin-llm-core with 20 rules (Rob Simpson, DEV)
- `osmani-llm-coding-workflow-2026.md` — AI-assisted engineering workflow, linting as feedback loop (Addy Osmani)
- `betterstack-biome-vs-eslint.md` — Biome vs ESLint comparison with benchmarks (Better Stack)
- `logrocket-retire-eslint-oxlint.md` — Oxlint benchmarks (50-100x faster), migration guide (LogRocket)
- `charpentier-migration-oxlint-oxfmt.md` — real-world migration: 81s → 2.5s, AI-assisted (Nicolas Charpentier)
- `nkzw-oxlint-config-readme.md` — opinionated Oxlint config: error-never-warn, strict defaults (GitHub)

**Wiki pages created (5):**
- `linting-with-llms.md` — why linting matters more with AI, feedback loop, error-never-warn, lint-green as done
- `linter-tools-2026.md` — ESLint vs Biome vs Oxlint comparison, benchmarks, TypeScript, formatters
- `linter-rules-for-ai-code.md` — AI failure patterns, eslint-config-agent, eslint-plugin-llm-core, @nkzw/oxlint-config
- `linters-as-agent-specs.md` — Factory.ai framework: 7 categories, AGENTS.md + linting, lint development cycle
- `linter-migration-oxlint.md` — migration guide: commands, benchmarks, gotchas, AI-assisted migration

---

## 2026-06-30 — Color psychology, cognition, relaxation, and green shades

**Sources archived (10):**
- `elliot-2015-color-psychological-functioning-review.md` — comprehensive review of color-in-context theory, empirical findings, methodological caveats (Frontiers in Psychology)
- `dzulkifli-mustafar-2013-colour-memory-performance.md` — color enhances memory 5–10% via attention capture and emotional arousal (Malaysian J Med Sci)
- `berto-2022-green-school-environment-cognition.md` — green garden lessons improve attention and math performance in children, N=65 (Int J Environ Res Public Health)
- `minguillon-2017-blue-lighting-relaxation.md` — blue lighting 3x faster post-stress relaxation via EEG/ECG, N=12 (PLOS ONE)
- `lichtenfeld-2012-fertile-green-creativity.md` — green enhances creative performance across 4 experiments, ~200 adults (Personality & Social Psychology Bulletin)
- `neurolaunch-green-color-psychology.md` — green wavelength sensitivity, healthcare applications, biophilic design (NeuroLaunch)
- `cognifit-colors-that-calm-the-mind.md` — parasympathetic activation from blue/green, cortisol reduction, limbic pathways (CogniFit)
- `imotions-color-human-behavior.md` — 90% first impression is color, learning environment effects, per-color cognitive impacts (iMotions)
- `bigox-psychology-of-green-shades.md` — shade-by-shade green breakdown: sage, mint, emerald, forest, olive, lime, teal (Big Ox Printing)
- `scienceinsights-colors-relieve-stress.md` — saturation matters more than hue, cortisol patterns, green space research (ScienceInsights)

**Failed sources (1):**
- ScienceDirect color education article — HTTP 403

**Wiki pages created (4):**
- `color-psychology.md` — master page: color-in-context theory, saturation principle, ART/SRT frameworks, caveats
- `color-and-cognition.md` — red impairs analysis, blue enhances alertness, green boosts creativity, memory effects, green learning environments
- `color-and-relaxation.md` — blue 3x relaxation, green parasympathetic activation, cortisol, timing caveats
- `green-shades.md` — sage, mint, emerald, forest, olive, lime, teal with psychological profiles and design contexts

**Wiki pages updated (1):**
- `color-theory.md` — added links to new color psychology pages

---

## 2026-06-30 — Web design principles

**Sources archived (11):**
- `nngroup-ten-usability-heuristics.md` — Jakob Nielsen's 10 usability heuristics (NN/g)
- `nngroup-five-principles-visual-design.md` — scale, hierarchy, balance, contrast, Gestalt (NN/g)
- `clay-visual-hierarchy-web-design.md` — visual hierarchy techniques and validation (Clay)
- `webflow-visual-hierarchy-principles.md` — 7 hierarchy principles with examples (Webflow)
- `onething-typography-web-design-guide-2026.md` — complete typography guide: sizing, categories, selection, performance (Onething)
- `learnui-color-ui-design-practical-framework.md` — HSB color variation framework (Learn UI Design)
- `uxpin-color-theory-web-ui-design.md` — color theory, schemes, emotional impact (UXPin)
- `ixdf-power-of-white-space.md` — micro/macro whitespace, active/passive use (IxDF)
- `nisbet-refactoring-ui-takeaways.md` — discrete spacing levels, proportional scaling (Refactoring UI summary)
- `figma-web-design-trends-2026.md` — 2026 design trends: dopamine design, bold type, 3D, motion (Figma)
- `clay-web-design-guide-2026.md` — end-to-end web design guide: process, performance, conversion (Clay)

**Failed sources (1):**
- Toptal web typography infographic — HTTP 403

**Wiki pages created (9):**
- `visual-hierarchy.md` — master visual hierarchy page
- `typography.md` — typeface selection, sizing, spacing, hierarchy, performance
- `color-theory.md` — HSB framework, 60-30-10, schemes, accessibility
- `whitespace.md` — micro/macro, spacing systems, branding signal
- `usability-heuristics.md` — Nielsen's 10 heuristics
- `web-design-process.md` — 8-step design workflow
- `responsive-design.md` — mobile-first, proportional scaling
- `web-design-trends-2026.md` — current trends snapshot
- `accessibility.md` — WCAG compliance, contrast, keyboard nav

---

## 2026-06-30 — React official documentation

**Sources archived (38):**

Learn guides (19):
- `react-learn-thinking-in-react.md` — five-step UI building process
- `react-learn-your-first-component.md` — defining and exporting components
- `react-learn-passing-props-to-a-component.md` — props, defaults, spread, children
- `react-learn-conditional-rendering.md` — if/else, ternary, &&
- `react-learn-rendering-lists.md` — map, filter, keys
- `react-learn-responding-to-events.md` — handlers, propagation, preventDefault
- `react-learn-state-a-components-memory.md` — useState, hook rules, isolation
- `react-learn-render-and-commit.md` — trigger, render, commit phases
- `react-learn-keeping-components-pure.md` — purity rules, local mutation, Strict Mode
- `react-learn-creating-a-react-app.md` — Next.js, React Router, Expo, Vite
- `react-learn-synchronizing-with-effects.md` — useEffect, cleanup, data fetching
- `react-learn-you-might-not-need-an-effect.md` — anti-patterns, derived state, useMemo
- `react-learn-referencing-values-with-refs.md` — useRef, refs vs state
- `react-learn-manipulating-the-dom-with-refs.md` — DOM refs, ref callbacks, flushSync
- `react-learn-reusing-logic-with-custom-hooks.md` — custom hooks, naming, anti-patterns
- `react-learn-passing-data-deeply-with-context.md` — context, providers, use cases
- `react-learn-extracting-state-logic-into-a-reducer.md` — useReducer, actions, Immer
- `react-learn-typescript.md` — typing props, hooks, events, children
- `react-learn-lifecycle-of-reactive-effects.md` — reactive values, dependency rules

API reference — hooks (12):
- `react-ref-useState.md` — full API: initializer, set function, batching, caveats
- `react-ref-useEffect.md` — full API: setup, cleanup, dependencies, client-only
- `react-ref-useRef.md` — full API: current, mutability, lazy init
- `react-ref-useContext.md` — full API: provider lookup, re-rendering, Object.is
- `react-ref-useMemo.md` — full API: caching calculations, dependency comparison
- `react-ref-useCallback.md` — full API: caching functions, equivalence to useMemo
- `react-ref-useReducer.md` — full API: reducer, dispatch, init
- `react-ref-useTransition.md` — full API: isPending, startTransition, interruptibility
- `react-ref-useDeferredValue.md` — full API: background re-render, Suspense integration
- `react-ref-use.md` — full API: use(context) and use(promise) overloads
- `react-ref-useId.md` — full API: unique IDs, server rendering, multiple roots
- `react-ref-useActionState.md` — full API: action, dispatch, isPending, permalink

API reference — components and utilities (7):
- `react-ref-memo.md` — memo wrapper, arePropsEqual, React Compiler
- `react-ref-Suspense.md` — Suspense boundary, fallback, transitions, SSR
- `react-ref-lazy.md` — code splitting, load function, caching
- `react-ref-startTransition.md` — standalone transition API
- `react-ref-cache.md` — Server Component caching, scope, invalidation
- `react-ref-dom-createPortal.md` — portals, event bubbling, accessibility
- `react-ref-dom-flushSync.md` — synchronous DOM updates, caveats

**Wiki pages created (12):**
- `react.md` — overview, mental model, rendering phases, purity, project setup
- `react-components.md` — components, JSX, props, children, conditionals, lists, keys
- `react-state.md` — useState, snapshots, immutability, deriving values
- `react-events.md` — event handlers, propagation, accessibility
- `react-effects.md` — useEffect, synchronization, cleanup, anti-patterns
- `react-refs.md` — useRef, DOM refs, ref callbacks, useImperativeHandle
- `react-context.md` — createContext, useContext, providers, performance
- `react-reducers.md` — useReducer, actions, dispatch, comparison with useState
- `react-hooks.md` — complete hooks API reference with custom hooks
- `react-performance.md` — memo, useMemo, useCallback, Suspense, lazy, transitions, cache
- `react-typescript.md` — typing props, hooks, events, children, styles
- `react-portals.md` — createPortal, flushSync

## 2026-06-30 — Vite for React projects

**Sources archived (10):**
- `vite-getting-started.md` — scaffolding, manual install, CLI, index.html as entry point
- `vite-features.md` — TypeScript, JSX, CSS, static assets, glob import, HMR, WebAssembly, web workers
- `vite-configuration.md` — vite.config.ts, defineConfig, conditional/async config, env loading
- `vite-env-and-mode.md` — .env files, VITE_ prefix, import.meta.env, modes, NODE_ENV distinction
- `vite-building-for-production.md` — browser targets, base path, code splitting, multi-page, library mode
- `vite-deploying.md` — Vercel, Netlify, GitHub Pages, Cloudflare, Firebase, Render, etc.
- `vite-dep-pre-bundling.md` — CommonJS conversion, caching, monorepo support
- `vite-server-options.md` — host, port, proxy, HMR, CORS, HTTPS, file system security
- `vite-plugin-react.md` — @vitejs/plugin-react (Babel), Fast Refresh, React Compiler integration
- `vite-plugin-react-swc.md` — @vitejs/plugin-react-swc (SWC), ~20x faster, options

**Wiki pages created (6):**
- `vite.md` — overview, architecture, scaffolding, browser support
- `vite-react-setup.md` — plugin choice, TypeScript configuration, Fast Refresh, JSX
- `vite-configuration.md` — config file, loaders, conditional/async config, server options
- `vite-features.md` — CSS, static assets, glob imports, web workers, build optimizations
- `vite-environment-variables.md` — .env files, modes, VITE_ prefix, TypeScript types
- `vite-production-builds.md` — build targets, deployment, code splitting

## 2026-06-30 — Portfolio websites and CS job search

**Sources archived (9):**
- `hakia-developer-portfolio-guide-2026.md` — comprehensive guide with statistics from Stack Overflow/GitHub/Hired surveys
- `hn-personal-website-helped-get-hired.md` — ~50 first-person accounts from HN (Ask HN: Did your personal website help you get hired?)
- `kettmann-dont-waste-time-portfolio-website.md` — contrarian take with 60+ hiring manager survey data
- `muse-6-hiring-managers-personal-websites.md` — interviews with 6 named hiring managers (Eventbrite, Hired, Appcues, etc.)
- `vanderbilt-cs-portfolio-guide.md` — academic guide from Vanderbilt Engineering
- `sjonany-cs-job-hunt-2026.md` — 2026 entry-level job market playbook
- `nucamp-portfolio-projects-recruiters.md` — recruiter priorities for project selection
- `arc-dev-software-engineer-portfolio.md` — six essential portfolio elements
- `figma-portfolio-website-examples.md` — 23 portfolio examples with design principles

**Wiki pages created (5):**
- `portfolio-website.md` — main concept page
- `portfolio-projects.md` — project selection and presentation
- `portfolio-hiring-manager-perspectives.md` — synthesized HM views
- `portfolio-design.md` — design principles and platform choices
- `cs-job-search-2026.md` — broader job market context

## 2026-07-16 — Browser color management, wide gamut, and HDR images

**Sources archived (7):**
- `webkit-improving-color-on-the-web.md` — WebKit blog (2016): color spaces, gamut, color-matching, sRGB assumption, color-gamut media query
- `webkit-wide-gamut-color-css-display-p3.md` — WebKit blog (2020): color(display-p3) syntax, fallbacks, hardware support
- `gregbenz-iso-21496-1-gain-maps.md` — ISO 21496-1 gain map standard, legacy encodings, support status (Jan 2025)
- `gregbenz-apple-hdr-iso-gain-map.md` — Apple macOS 15 / iOS 18 HDR updates, Adaptive HDR, tone mapping quality (Sep 2024)
- `gregbenz-hdr-display-photo-software.md` — continuously updated HDR software support matrix (browsers, OSes, websites)
- `apple-developer-applying-apple-hdr-effect.md` — Apple's gain map format and decoding math (primary source)
- `scottstuff-end-of-srgb-hdr-images-2026.md` — state of sRGB/HDR on the web, March 2026

**Wiki pages created (5):**
- `color-spaces-and-gamut.md` — sRGB, Display P3, Rec. standards, depth vs gamut
- `browser-color-management.md` — tagged/untagged handling, history, serving strategy, tooling gaps
- `hdr-images.md` — HDR fundamentals, headroom, PQ/HLG, formats, tone mapping
- `hdr-gain-maps.md` — gain map concept, ISO 21496-1, Apple format, transcoding libraries
- `hdr-browser-support.md` — support matrix as of early 2026

**Wiki pages updated (2):**
- `css-colors.md` — added wide-gamut fallback patterns and links to new pages
- `index.md` — new "Color & Images on the Web" section
