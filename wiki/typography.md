# Typography

"95% of web design is typography" (Oliver Reichenstein, cited in source:
clay-web-design-guide-2026.md). Typography encompasses typeface selection,
sizing, spacing, and hierarchy — the highest-leverage design decisions for
readability, brand perception, and user behavior.

## Sizing fundamentals

| Property | Recommendation | Source |
|----------|---------------|--------|
| Body text minimum | 16px (browser default; below this forces pinch-zoom on mobile) | onething-typography-web-design-guide-2026.md |
| Optimal line length | 45–75 characters (~66 ideal) | onething-typography-web-design-guide-2026.md |
| Body line-height | 1.4–1.6× font size (24–26px at 16px base) | onething-typography-web-design-guide-2026.md |
| Heading line-height | 1.1–1.3× | onething-typography-web-design-guide-2026.md |
| Small text tracking | +0.05em to +0.1em | onething-typography-web-design-guide-2026.md |
| All-caps tracking | +0.05em to +0.1em (essential) | onething-typography-web-design-guide-2026.md |

## Typographic hierarchy

Established through simultaneous variations in size, weight, color, spacing,
and typeface. The basic three-level approach: headline → subheadline → body
copy (source: webflow-visual-hierarchy-principles.md).

Bold or larger text signals what users should encounter first. The hierarchy
flows from large headlines to mid-sized subheadings to smaller body copy,
establishing reading order through typeface weight and size variations (source:
webflow-visual-hierarchy-principles.md).

## Typeface categories

Seven major categories (source: onething-typography-web-design-guide-2026.md):

1. **Serif** — traditional, authoritative (Times New Roman, Georgia)
2. **Sans-serif** — clean, legible on-screen (Helvetica, Roboto, Inter)
3. **Slab serif** — bold, block-like serifs for headlines (Rockwell, Clarendon)
4. **Script** — handwriting-based; decorative only, never for body text
5. **Display/Decorative** — visual impact for large sizes and hero sections
6. **Monospace** — fixed-width for code and technical content
7. **Variable fonts** — single file with continuous style axes; better performance

## Typeface selection

Framework (source: onething-typography-web-design-guide-2026.md):

1. Define functional requirements (size range, language support, resolution)
2. Align personality with brand positioning
3. Prioritize legibility over aesthetics
4. Check weight ranges and OpenType features
5. Test rendering at actual display sizes (14px, 16px on Retina and standard)
6. Evaluate licensing and performance
7. Maximum two typefaces; contrast classification while maintaining harmony

## Alignment

Left alignment provides a constant starting point for each line, making body
copy easiest to read. Center alignment suits short text only. Justified
alignment requires careful hyphenation to avoid rivers of whitespace (source:
onething-typography-web-design-guide-2026.md).

## Kerning, leading, tracking

- **Kerning**: horizontal spacing between character pairs. Particularly
  important at large display sizes.
- **Leading** (line-height): vertical spacing between lines.
- **Tracking** (letter-spacing): uniform spacing across all characters. Useful
  for uppercase text, small sizes, and brand labels.

(source: onething-typography-web-design-guide-2026.md)

## Responsive scaling

Responsiveness requires more than uniform rescaling. "The relative difference
between sizes needs to change too" — heading-to-body ratio should compress
from ~2:1 on desktop to ~1.7:1 on mobile (source:
nisbet-refactoring-ui-takeaways.md, citing the New York Times).

Use relative units (rem, em, vw) instead of fixed pixels. The CSS `clamp()`
function enables fluid scaling between breakpoints. Combine with media queries
to maintain hierarchy across all viewport sizes (source:
onething-typography-web-design-guide-2026.md).

## Performance

- Load only necessary weights and styles
- Use WOFF2 format
- Implement `font-display: swap` to prevent invisible text
- Preload critical fonts
- Host locally or via fast CDNs
- Subset character sets for languages you actually use
- Variable fonts consolidate multiple styles into single files

(source: onething-typography-web-design-guide-2026.md)

## Common mistakes

- More than two typefaces
- Body text below 16px
- Line lengths exceeding 75 or below 45 characters
- Inconsistent hierarchy across pages
- Overusing bold and italic
- Fixed pixel sizing instead of relative units
- No cross-platform/cross-browser testing

(source: onething-typography-web-design-guide-2026.md)

## Accessibility

WCAG 2.1 requires minimum contrast ratios: 4.5:1 for normal text, 3:1 for
large text. Scalable sizing (relative units) ensures users can adjust text
size. Never rely solely on color to convey meaning (source:
onething-typography-web-design-guide-2026.md). See [[accessibility]].

## Related pages

- [[font-psychology]] — how typefaces influence perception, emotion, and behavior
- [[font-personality]] — trait mappings by category and specific typeface
- [[fonts-for-elegance]] — fonts that convey classiness and sophistication
- [[fonts-for-intelligence]] — fonts that convey trustworthiness and authority
- [[fonts-for-calm]] — fonts that feel relaxing and calming
- [[humanist-fonts]] — warm, readable sans-serifs bridging intelligence and calm
- [[visual-hierarchy]] — typography as a hierarchy tool
- [[whitespace]] — line-height and spacing as active elements
- [[responsive-design]] — proportional scaling across breakpoints
- [[accessibility]] — contrast ratios and WCAG compliance
