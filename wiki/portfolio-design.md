# Portfolio Design

Visual and structural decisions for a developer portfolio website. The
consistent finding across sources: design should be clean and functional, not
elaborate. The site is a frame, not the art.

## Design principles

### Simplicity wins

bschmidt1 (hiring manager, HN) built multiple flashy Three.js experiments but
noted that a simple white grid layout "received consistent compliments"
(source: hn-personal-website-helped-get-hired.md). Overcomplicated design
"distracts from code quality" (source:
hakia-developer-portfolio-guide-2026.md).

Bruno Simon's Three.js 3D portfolio (driving a jeep through a virtual world)
is cited as a notable example across multiple sources (source:
figma-portfolio-website-examples.md, hakia-developer-portfolio-guide-2026.md),
but this is an outlier — a technical showcase in itself, not a template to
follow.

### Visual hierarchy

Use layout and typography to guide attention in priority order: identity →
projects → contact (source: figma-portfolio-website-examples.md). Subtle
animations for engagement without distraction. Balance white space with
project visuals.

### Mobile responsiveness

Over 60% of recruiters browse portfolios on their phones (source:
hakia-developer-portfolio-guide-2026.md). Test across devices for formatting
issues.

## Essential sections

Based on convergence across sources (source:
hakia-developer-portfolio-guide-2026.md,
arc-dev-software-engineer-portfolio.md,
muse-6-hiring-managers-personal-websites.md):

1. **Hero / identity** — Name, one-line description of what you do. Not a
   tagline. Not "passionate developer." What you build and where you're
   headed. This is what hiring managers look at first (source:
   muse-6-hiring-managers-personal-websites.md).

2. **Projects** — 3-5 with live demo links, GitHub links, brief descriptions.
   See [[portfolio-projects]] for content guidance.

3. **About** — Professional background, what drives you. 2-5 lines, not a
   biography. Include personal context for connection but keep it relevant
   (source: muse-6-hiring-managers-personal-websites.md, Ty Magnin warning
   about irrelevant content).

4. **Contact** — Multiple methods, no friction. Hiding contact info defeats
   the purpose (source: arc-dev-software-engineer-portfolio.md). Consider
   using a custom domain email to control name search results (source:
   hn-personal-website-helped-get-hired.md, psyklic).

5. **Blog** (optional but high-value) — Technical writing demonstrating how
   you think. See [[portfolio-website]] for the blog advantage.

## What to omit

- **Skill bar charts** — "85% JavaScript" is meaningless. Avoid vague
  percentages (source: arc-dev-software-engineer-portfolio.md).
- **Testimonials** (unless genuine) — Client or colleague quotes add
  credibility only if real (source: figma-portfolio-website-examples.md).
- **Exhaustive technology lists** — Listing 20 technologies suggests
  scattered knowledge. Show depth in 2-3 stacks (source:
  hakia-developer-portfolio-guide-2026.md).
- **Generic hero images / stock photos** — Personality and authenticity
  matter (source: muse-6-hiring-managers-personal-websites.md).

## Platform choices

| Approach | Best for | Trade-off |
|----------|----------|-----------|
| Custom built (React/Vue/etc.) | Frontend/full-stack roles | Demonstrates skill but high time cost |
| Static site generator (Astro, Hugo, 11ty) | Modern stacks, blogs | Fast, SEO-friendly, low maintenance |
| GitHub Pages + Jekyll | Backend developers | Free, minimal, gets out of the way |
| Website builders (Squarespace, etc.) | Non-frontend roles | Quick but less customization |

(source: hakia-developer-portfolio-guide-2026.md,
arc-dev-software-engineer-portfolio.md)

The Kettmann argument: if you're not applying for frontend roles, use a
template. Time spent on custom CSS is time not spent building projects
(source: kettmann-dont-waste-time-portfolio-website.md). If you are applying
for frontend roles, a custom-built site is itself a portfolio piece.

## The custom domain question

psyklic (HN) recommends using a personal domain for email to control what
appears when someone googles your name (source:
hn-personal-website-helped-get-hired.md). A custom domain also signals
permanence and professionalism (source:
vanderbilt-cs-portfolio-guide.md: "Use professional domain names").

## Maintenance

Broken demo links are the most commonly cited anti-pattern (source:
hakia-developer-portfolio-guide-2026.md). Check monthly. Update content every
3-4 months or after significant projects. Outdated content on an active site
counts against you (source: hn-personal-website-helped-get-hired.md, flpm).

## Design examples worth studying

From Figma's collection (source: figma-portfolio-website-examples.md):
- **Mike Matas** (Apple, Microsoft, Facebook) — case-study format
- **Spencer Gabor** (Amazon, Adobe) — clean project presentation
- **Simon Pan** (Google, Uber, Amazon) — process-oriented case studies
- **Jessica Hische** — category-organized gallery

From HN (source: hn-personal-website-helped-get-hired.md):
- **Sparkenstein** — terminal-style portfolio using xterm.js; filters for
  technically-minded recruiters
- **purple-leafy** — intentionally kitsch with marquee/blink tags (humor as
  personality)

## Related pages

- [[portfolio-website]] — whether to build one
- [[portfolio-projects]] — what goes in it
- [[portfolio-hiring-manager-perspectives]] — what HMs look at
