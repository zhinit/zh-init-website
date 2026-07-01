# Accessibility

Web accessibility (WCAG compliance) ensures usability for people with
disabilities. Accessibility improvements also benefit SEO performance
(source: clay-web-design-guide-2026.md).

## Contrast ratios (WCAG 2.1)

| Text type | Minimum ratio |
|-----------|--------------|
| Normal text | 4.5:1 |
| Large text (18px+ or 14px+ bold) | 3:1 |

Never rely solely on color to convey meaning — use additional indicators
(icons, text labels, patterns) (source:
onething-typography-web-design-guide-2026.md).

Reducing contrast dangerously diminishes readability. Maintain sufficient
text-background contrast even when pursuing aesthetic goals (source:
nngroup-five-principles-visual-design.md).

## Keyboard navigation

All interactive elements must be reachable and operable via keyboard. Focus
states must be visible. Tab order should follow logical reading sequence.

## Images and media

All images require descriptive alt text. Decorative images use empty alt
attributes (`alt=""`). Forms require properly labeled fields (source:
clay-web-design-guide-2026.md).

## Typography

Scalable sizing using relative units (rem, em) ensures users can adjust text
size via browser settings. Fixed pixel sizes prevent this. See [[typography]]
for sizing recommendations (source:
onething-typography-web-design-guide-2026.md).

## Heading hierarchy

Logical heading structure (h1 → h2 → h3, no skipped levels) provides
navigation landmarks for screen readers and supports visual hierarchy
simultaneously.

## Auditing tools

Lighthouse and Axe are essential pre-launch accessibility auditing tools
(source: clay-web-design-guide-2026.md).

## WCAG version

Current standard is WCAG 2.2. Compliance includes sufficient contrast,
keyboard navigation, alt text, and logical heading hierarchy (source:
clay-web-design-guide-2026.md).

## Related pages

- [[typography]] — contrast ratios and scalable sizing
- [[color-theory]] — color contrast and accessibility
- [[visual-hierarchy]] — hierarchy supports screen reader navigation
- [[usability-heuristics]] — heuristics #9 and #10 overlap
- [[web-design-process]] — accessibility testing step
