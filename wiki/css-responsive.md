# CSS Responsive Design

Responsive web design (RWD) is an approach to make web pages render well on all
screen sizes and resolutions while ensuring good usability. The term was coined
by Ethan Marcotte in 2010, describing fluid grids, fluid images, and media
queries. RWD is not a separate technology but an approach using CSS and HTML
features (source: mdn-css-responsive-design.md).

## Principles

HTML is fundamentally responsive -- without CSS, text reflows to fit the
viewport. Modern layout methods (flexbox, grid) are inherently responsive.
Mobile-first means starting with single-column for narrow screens, then adding
complexity with `width >=` queries. Use relative units over fixed pixels
(source: mdn-css-responsive-design.md).

## Media Queries

A media query consists of an optional media type, media feature expressions in
parentheses, and logical operators (source: mdn-css-media-queries.md).

```css
@media screen and (max-width: 1250px) { /* ... */ }
```

### Media types

- `all` -- all devices (default)
- `screen` -- colored computer screens
- `print` -- printed documents

(source: mdn-css-media-queries.md)

### Media features

- **Viewport**: `width`, `height`, `aspect-ratio`
- **Device**: `orientation`, `color`, `resolution`, `grid`
- **User preferences**: `prefers-color-scheme`, `prefers-reduced-motion`,
  `prefers-contrast`
- **Input**: `hover`, `pointer`, `any-hover`, `any-pointer`
- **Display**: `display-mode`, `overflow-block`, `update`

(source: mdn-css-media-queries.md)

### Range syntax

```css
/* Traditional */
@media (min-width: 30em) and (max-width: 50em) { /* ... */ }

/* Range syntax (equivalent) */
@media (30em <= width <= 50em) { /* ... */ }

/* Exclusive ranges */
@media (30em < width < 50em) { /* ... */ }
```

(source: mdn-css-media-queries.md)

### Logical operators

- `and` -- combine multiple conditions:
  `@media screen and (width >= 30em) and (orientation: landscape)`
- Comma (`,`) -- acts as `or`:
  `@media (height >= 680px), screen and (orientation: portrait)`
- `not` -- invert a query: `@media not print`
- `only` -- older browser compatibility: `@media only screen and (color)`
- `or` -- test multiple features:
  `@media (not (color)) or (hover)`

Media queries are case-insensitive. Stylesheets with non-matching media queries
still download but with lower priority. Unknown media types always return false
(source: mdn-css-media-queries.md).

### Boolean features

Features without a value test for existence: `@media (color)` matches any color
screen (source: mdn-css-media-queries.md).

## Container Queries

Container queries apply styles based on attributes of a containing element
rather than the viewport. They are an alternative to media queries (source:
mdn-css-container-queries.md).

### container-type

- `inline-size` -- query based on inline dimension only
- `size` -- query based on inline and block dimensions
- `normal` -- default; not a query container

(source: mdn-css-container-queries.md)

### Basic usage

```css
.post {
  container-type: inline-size;
}

@container (width > 700px) {
  .card h2 {
    font-size: 2em;
  }
}
```

(source: mdn-css-container-queries.md)

### container-name

Name a containment context to target it specifically:

```css
.post {
  container-type: inline-size;
  container-name: sidebar;
}

@container sidebar (width > 700px) {
  .card { font-size: 2em; }
}
```

(source: mdn-css-container-queries.md)

### container shorthand

```css
.post {
  container: sidebar / inline-size;
}
```

(source: mdn-css-container-queries.md)

### Container query length units

| Unit | Relative to |
|------|-------------|
| `cqw` | 1% of container width |
| `cqh` | 1% of container height |
| `cqi` | 1% of container inline size |
| `cqb` | 1% of container block size |
| `cqmin` | smaller of `cqi` or `cqb` |
| `cqmax` | larger of `cqi` or `cqb` |

If no container is available, these default to small viewport units (`sv*`)
(source: mdn-css-container-queries.md).

## Responsive Patterns

### Responsive images

```css
img, picture, video {
  max-width: 100%;
}
```

Use `<picture>` and `srcset`/`sizes` for art direction and resolution switching
(source: mdn-css-responsive-design.md).

### Responsive typography

Media queries for stepped sizes:

```css
h1 { font-size: 2rem; }

@media (width >= 1200px) {
  h1 { font-size: 4rem; }
}
```

Viewport units for fluid scaling -- combines fixed and viewport units, allowing
zooming while scaling with viewport:

```css
h1 {
  font-size: calc(1.5rem + 4vw);
}
```

(source: mdn-css-responsive-design.md)

### Viewport meta tag

```html
<meta name="viewport" content="width=device-width,initial-scale=1" />
```

Mandatory for mobile. Mobile browsers historically set default viewport widths
(e.g., iPhone's 980px). Without this tag, media queries do not work as intended
on mobile (source: mdn-css-responsive-design.md).

## Media Queries vs Container Queries

Media queries test the viewport. Container queries test the nearest ancestor
with a containment context. Container queries enable truly reusable components
that adapt to where they are placed, not just the screen size (source:
mdn-css-container-queries.md).

## Related pages

- [[css-flexbox]] -- inherently responsive layout
- [[css-grid]] -- inherently responsive layout
- [[responsive-design]] -- design-level responsive principles
- [[css-values-units]] -- relative units, viewport units, container units
