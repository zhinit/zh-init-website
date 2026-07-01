# CSS Grid

## Core concept

CSS Grid Layout is a two-dimensional layout system handling both columns and
rows, unlike flexbox which is one-dimensional. Grid is suited to page-level
layouts and complex component layouts (source: mdn-css-grid-layout.md).

Grid layout does not affect document semantics (source: mdn-css-grid-layout.md).

Key terms:

- **Grid container** — element with `display: grid`
- **Grid item** — direct child of a grid container
- **Grid line** — horizontal or vertical dividing lines, numbered from 1
- **Grid track** — space between two adjacent lines (a row or column)
- **Grid cell** — intersection of a row track and column track
- **Grid area** — rectangular area spanning one or more cells
- **Explicit grid** — tracks defined by `grid-template-*` properties
- **Implicit grid** — tracks auto-created for items placed outside the explicit grid

(source: mdn-css-grid-layout.md)

The `fr` unit represents a fraction of the available space in the grid
container:

```css
grid-template-columns: 1fr 2fr 1fr;
/* Column 1: 25%, Column 2: 50%, Column 3: 25% */

grid-template-columns: 200px 1fr 1fr;
/* Column 1: fixed 200px, Columns 2-3: split remaining space equally */
```

(source: mdn-css-grid-layout.md)

## Container properties

| Property | Description |
|---|---|
| `display: grid` | Block-level grid container |
| `display: inline-grid` | Inline-level grid container |
| `grid-template-columns` | Defines column track sizes |
| `grid-template-rows` | Defines row track sizes |
| `grid-template-areas` | Defines named grid areas |
| `grid-template` | Shorthand for rows, columns, and areas |
| `grid-auto-columns` | Size of implicitly created column tracks |
| `grid-auto-rows` | Size of implicitly created row tracks |
| `grid-auto-flow` | How auto-placed items are inserted (`row`, `column`, `dense`) |
| `grid` | Shorthand for all grid template and auto properties |
| `gap` | Shorthand for `row-gap` and `column-gap` |

(source: mdn-css-grid-layout.md)

## Item placement

| Property | Description |
|---|---|
| `grid-column` | Shorthand for column start/end |
| `grid-row` | Shorthand for row start/end |
| `grid-area` | Shorthand for row/column start/end, or named area reference |

Line-based placement uses line numbers (starting at 1). Named areas are
assigned with `grid-template-areas` on the container and referenced with
`grid-area` on items. Named lines created in `repeat()` can be referenced by
name and occurrence number (e.g., `col-start 5` is the 5th `col-start` line)
(source: mdn-css-grid-layout.md, mdn-css-grid-common-layouts.md).

## Functions

| Function | Description |
|---|---|
| `repeat()` | Repeats a track pattern: `repeat(3, 1fr)`, `repeat(auto-fill, 200px)` |
| `minmax()` | Defines a size range: `minmax(100px, 1fr)` |
| `fit-content()` | Clamps size to content with a maximum: `fit-content(300px)` |

`auto-fill` creates as many columns as will fit in the container. `auto-fit`
behaves identically when items fill all tracks; when there are fewer items than
tracks, `auto-fit` collapses empty tracks to zero while `auto-fill` keeps them
(source: mdn-css-grid-layout.md, mdn-css-grid-common-layouts.md).

## Alignment

Grid uses the same box alignment properties as flexbox, but `justify-items`
(which has no effect in flexbox) works in grid to align items within their cell
along the inline axis (source: mdn-css-grid-layout.md).

| Property | Axis | Applies to |
|---|---|---|
| `align-items` | Block | All items within their cells |
| `justify-items` | Inline | All items within their cells |
| `place-items` | Both | Shorthand for align-items + justify-items |
| `align-content` | Block | Grid tracks within the container |
| `justify-content` | Inline | Grid tracks within the container |
| `place-content` | Both | Shorthand for align-content + justify-content |
| `align-self` | Block | Single item override |
| `justify-self` | Inline | Single item override |
| `place-self` | Both | Shorthand for align-self + justify-self |

(source: mdn-css-grid-layout.md)

## Common layout patterns

### 1. Responsive 1-3 column with grid-template-areas

Single column on mobile, two columns at 500px, three columns at 700px. Layout
structure is readable directly from the CSS:

```css
.container {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header"
    "nav"
    "content"
    "sidebar"
    "footer";
}

@media (min-width: 500px) {
  .container {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header  header"
      "nav     nav"
      "sidebar content"
      "footer  footer";
  }
}

@media (min-width: 700px) {
  .container {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
      "header  header  header"
      "nav     content sidebar"
      "footer  footer  footer";
  }
}

.header  { grid-area: header; }
.nav     { grid-area: nav; }
.content { grid-area: content; }
.sidebar { grid-area: sidebar; }
.footer  { grid-area: footer; }
```

Best for page-level layouts with named regions (source:
mdn-css-grid-common-layouts.md).

### 2. 12-column system with named lines

```css
.container {
  display: grid;
  grid-template-columns: repeat(12, [col-start] 1fr);
  gap: 1rem;
}

.item-full  { grid-column: col-start 1 / col-start 13; }  /* all 12 */
.item-half  { grid-column: col-start 1 / col-start 7; }   /* first 6 */
.item-third { grid-column: col-start 1 / col-start 5; }   /* first 4 */
.item-span  { grid-column: col-start 5 / span 8; }        /* columns 5-12 */
```

Named lines with `repeat()` create 12 identically named `col-start` lines.
The number after the name selects which occurrence. Best for complex layouts
needing precise column placement (source: mdn-css-grid-common-layouts.md).

### 3. Product listing with auto-fill + minmax

```css
.listing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}
```

No media queries needed. `auto-fill` creates as many columns as fit;
`minmax(200px, 1fr)` ensures each is at least 200px and expands equally. Best
for card grids, product listings, and image galleries (source:
mdn-css-grid-common-layouts.md).

### 4. Dense packing with grid-auto-flow: dense

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-auto-flow: dense;
  gap: 1rem;
}

.wide { grid-column: span 2; }
```

Without `dense`, wide items that don't fit on the current row leave gaps. With
`dense`, subsequent smaller items backfill those gaps. `dense` reorders items
visually, which can cause accessibility issues if visual order diverges from
DOM order. Use only when items have no meaningful sequence (e.g., photo
galleries) (source: mdn-css-grid-common-layouts.md).

## Advanced

**Subgrid** allows a grid item that is itself a grid container to inherit track
sizing from its parent grid, keeping nested items aligned to the outer grid
(source: mdn-css-grid-layout.md).

**Masonry layout** is an experimental layout mode for grid that allows items to
pack tightly in one axis while following grid tracks in the other (source:
mdn-css-grid-layout.md).

## Related

- [[css-flexbox]] — one-dimensional layout (single axis)
- [[css-responsive]] — responsive design patterns using grid and other tools
