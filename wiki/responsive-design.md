# Responsive Design

62.66% of all global web traffic comes from mobile devices. Mobile-first
design — designing for the smallest screen first and scaling up — is now
standard practice (source: clay-web-design-guide-2026.md).

## Mobile-first principles

- Design for smallest screens first, then add complexity for larger viewports
- Minimum 44px tap targets for touch interaction
- Thumb-friendly navigation patterns
- Stronger visual prioritization than desktop — fewer competing elements

(source: clay-web-design-guide-2026.md)

## Proportional scaling

Responsiveness requires more than uniform rescaling. "The relative difference
between sizes needs to change too" (source:
nisbet-refactoring-ui-takeaways.md).

The New York Times adjusts heading-to-body text ratio from 2:1 on desktop to
1.7:1 on mobile, while simultaneously reducing body text by 20%. This
maintains hierarchy without making headings comically large on small screens
(source: nisbet-refactoring-ui-takeaways.md).

## Typography scaling

Use relative units (rem, em, vw) instead of fixed pixels. CSS `clamp()`
enables fluid scaling between minimum and maximum sizes:

```css
font-size: clamp(1rem, 0.5rem + 1.5vw, 2rem);
```

Combine with media queries. Maintain typographic hierarchy across all viewport
sizes. See [[typography]] for sizing fundamentals (source:
onething-typography-web-design-guide-2026.md).

## Grid adaptation

Grid systems (CSS Grid, Flexbox) maintain structure across breakpoints. But
don't over-rely on grids — elements may need fixed widths rather than fluid
percentages. Prioritize component needs over strict grid adherence (source:
nisbet-refactoring-ui-takeaways.md).

## Visual hierarchy on mobile

Mobile screens require (source: clay-visual-hierarchy-web-design.md):
- Stronger prioritization of key content
- Fewer competing elements per viewport
- Clearer typography levels (larger contrast between heading and body)
- Performance optimization — slow pages lose attention before hierarchy
  functions

## Related pages

- [[visual-hierarchy]] — hierarchy adaptation for mobile
- [[typography]] — responsive type scaling
- [[whitespace]] — spacing adaptation across breakpoints
- [[web-design-process]] — testing across devices
