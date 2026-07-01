# Whitespace

The empty areas between and within design elements. Despite the name, whitespace
can be any color, texture, or background — it's defined by absence of content,
not by being literally white (source: ixdf-power-of-white-space.md).

"84.6% of small business websites" suffer from crowded layouts (source:
clay-web-design-guide-2026.md). Start with too much whitespace and reduce
until satisfied — not the other way around (source:
nisbet-refactoring-ui-takeaways.md).

## Two categories

**Micro whitespace**: small gaps between lines, paragraphs, menu items, icons,
and input fields. Directly impacts legibility and reading comfort (source:
ixdf-power-of-white-space.md).

**Macro whitespace**: large areas surrounding major content blocks, margins, and
sections. Creates the overall visual structure. Google's homepage is the
canonical example (source: ixdf-power-of-white-space.md).

## Active vs. passive

- **Active whitespace**: intentionally designed to guide user attention and
  content flow. A design decision.
- **Passive whitespace**: improves aesthetics and readability without directing
  specific navigation. Natural byproduct of good structure.

(source: ixdf-power-of-white-space.md)

## Spacing systems

Don't pick arbitrary values. Use a scale with pre-defined levels — e.g.,
4/8/12/16/24/32/48/64px. These scales should be "evenly distributed
perceptually rather than mathematically." Avoid multipliers like `0.5 * base`
or `7 * base`. Use even pixel values to prevent sub-pixel rendering issues
(source: nisbet-refactoring-ui-takeaways.md).

No two values in the scale should be closer than about 25% apart. This
ensures each step represents a visible, meaningful difference (source:
nisbet-refactoring-ui-takeaways.md).

## Don't fill the screen

Don't spread elements everywhere just to fill the screen — it makes designs
harder to interpret. Elements may need fixed widths instead of fluid
percentage-based widths. Prioritize component needs over strict grid adherence
(source: nisbet-refactoring-ui-takeaways.md).

## Impact on hierarchy

Varying whitespace around an element groups or separates it, creating emphasis
without decoration. Generous spacing around key elements creates prominence
through absence (source: clay-visual-hierarchy-web-design.md). See
[[visual-hierarchy]].

## Measurable benefits

On a pricing page, widening negative space around the primary plan increased
selection rate from 18% to 41% (cited in Refactoring UI context, source:
nisbet-refactoring-ui-takeaways.md).

## Branding signal

Spacing conveys brand positioning. Generous whitespace signals luxury and
premium quality (Apple, Mercedes). Dense layouts signal information richness
(news sites, dashboards) (source: ixdf-power-of-white-space.md).

## Four determining factors

1. **Content volume** — more information requires less macro space but
   increased micro spacing
2. **Design style** — designer choices influence the ratio between space types
3. **User research** — no universal rule; test with target audiences
4. **Branding message** — what does the spacing communicate?

(source: ixdf-power-of-white-space.md)

## Related pages

- [[visual-hierarchy]] — whitespace as a hierarchy mechanism
- [[typography]] — line-height and paragraph spacing
- [[responsive-design]] — spacing adaptation across breakpoints
