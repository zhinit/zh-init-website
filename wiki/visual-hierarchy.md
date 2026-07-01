# Visual Hierarchy

The principle that organizes design elements by importance so users scan a
page, find what they need, and act without friction. Visual hierarchy is the
single most impactful design skill — without it, typography, color, and
spacing decisions have no coherent effect.

## Core mechanisms

Five tools control where attention goes, in rough order of impact:

### Size and scale

Large elements attract attention first. The relationship between element sizes
matters more than specific pixel values — use no more than 3 different sizes
to establish clear priority (source: nngroup-five-principles-visual-design.md).
"Scale is often the backbone of hierarchy" (source:
clay-visual-hierarchy-web-design.md).

### Contrast

The juxtaposition of visually dissimilar elements to convey that they are
different (source: nngroup-five-principles-visual-design.md). Color is the
most obvious form, but size, weight, shape, borders, and texture also create
separation. Critical rule: "if everything is high contrast, nothing is"
(source: clay-visual-hierarchy-web-design.md).

### Spacing and proximity

Items placed close together are perceived as grouped (Gestalt principle of
proximity). Varying whitespace around elements creates emphasis through
absence. Generous spacing around key elements creates prominence without
decoration (source: clay-visual-hierarchy-web-design.md). See
[[whitespace]].

### Alignment and grids

Grid systems and consistent alignment help users process layouts faster.
Misalignment creates subtle friction that reduces perceived trustworthiness
(source: clay-visual-hierarchy-web-design.md). CSS Grid and Flexbox maintain
structure across responsive designs.

### Typography

A three-level approach — headline, subheadline, body copy — establishes
reading order through typeface weight and size variations (source:
webflow-visual-hierarchy-principles.md). See [[typography]].

## Reading patterns

Two primary patterns describe how users scan pages:

- **F-pattern**: for text-heavy pages. Users scan horizontally across the top,
  then down the left side with shorter horizontal scans. Place key content in
  the first two lines and at the start of each paragraph.
- **Z-pattern**: for pages with less text. Attention moves top-left → top-right
  → bottom-left → bottom-right. Position logos top-left, CTAs bottom-right.

(source: webflow-visual-hierarchy-principles.md)

## Rule of thirds

A grid breaking the viewport into nine sections creates four intersection
points. Placing key elements at these intersections "creates visual interest
without disrupting balance" (source: webflow-visual-hierarchy-principles.md).

## Balance

Three types (source: nngroup-five-principles-visual-design.md):
- **Symmetrical**: static, stable, formal
- **Asymmetrical**: dynamic, energetic — more common in modern web design
- **Radial**: draws eyes toward center

## Gestalt principles

Humans subconsciously organize visual elements into patterns (source:
nngroup-five-principles-visual-design.md). The key principles for web design:

- **Proximity**: items near each other feel related
- **Similarity**: elements sharing visual traits (color, shape, size) are grouped
- **Continuation**: eyes follow lines and curves
- **Closure**: the brain completes incomplete shapes
- **Common region**: elements within a shared boundary feel grouped
- **Figure/ground**: perception separates foreground from background

## Responsive considerations

Mobile screens require stronger prioritization, fewer competing elements, and
clearer typography levels. Performance optimization matters — slow pages lose
attention before hierarchy can function (source:
clay-visual-hierarchy-web-design.md).

## Validation

Test hierarchy decisions with squint tests (blur your eyes — what stands out?),
heatmaps, eye-tracking, and A/B testing (source:
clay-visual-hierarchy-web-design.md).

## Business impact

Clear hierarchy directly affects conversions by controlling the path to primary
actions. Consistency builds trust and reduces decision fatigue (source:
clay-visual-hierarchy-web-design.md).

## Related pages

- [[typography]] — typographic hierarchy
- [[color-theory]] — contrast and color as hierarchy tools
- [[whitespace]] — spacing as hierarchy tool
- [[usability-heuristics]] — heuristic #8: aesthetic and minimalist design
- [[responsive-design]] — hierarchy on mobile
