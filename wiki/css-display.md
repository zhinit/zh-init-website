# CSS Display

The `display` property sets an element's outer and inner display types.
The outer type determines how the element participates in flow layout.
The inner type determines the layout of its children.
(source: mdn-css-display.md)

## Outer vs Inner Display Types

Every `display` value resolves to two components (source: mdn-css-display.md):

- **Outer display type** — the element's role in flow layout: `block`
  (generates a block-level box) or `inline` (generates inline-level boxes).
- **Inner display type** — the layout model for the element's children:
  `flow`, `flow-root`, `flex`, `grid`, `table`, or `ruby`.

The formal grammar makes this explicit (source: mdn-css-display.md):

```
display = [ <display-outside> || <display-inside> ] | ...
<display-outside> = block | inline
<display-inside>  = flow | flow-root | table | flex | grid | ruby
```

## Display Values

### Box values

- `none` — element generates no boxes, removed from layout entirely
  (source: mdn-css-display.md)
- `contents` — element itself generates no box; children are promoted to the
  parent (source: mdn-css-display.md)

### Outer display type (single keyword)

- `block` — generates a block-level box (source: mdn-css-display.md)
- `inline` — generates inline-level boxes (source: mdn-css-display.md)

### Inner display type (single keyword)

- `flow-root` — block container, establishes a new block formatting context
  (source: mdn-css-display.md)
- `flex` — block-level flex container; see [[css-flexbox]]
  (source: mdn-css-display.md)
- `grid` — block-level grid container; see [[css-grid]]
  (source: mdn-css-display.md)
- `table` — block-level table (source: mdn-css-display.md)

### Combined (legacy single-keyword) values

- `inline-block` — inline outer, flow-root inner
  (source: mdn-css-display.md)
- `inline-flex` — inline outer, flex inner (source: mdn-css-display.md)
- `inline-grid` — inline outer, grid inner (source: mdn-css-display.md)
- `inline-table` — inline outer, table inner (source: mdn-css-display.md)
- `list-item` — block outer with list-item marker
  (source: mdn-css-display.md)

### Internal display values

For elements inside table or ruby layouts (source: mdn-css-display.md):

`table-row-group`, `table-header-group`, `table-footer-group`, `table-row`,
`table-cell`, `table-column-group`, `table-column`, `table-caption`,
`ruby-base`, `ruby-text`.

## Multi-keyword Syntax

Modern CSS allows specifying outer and inner display types as two separate
keywords. The legacy single-keyword forms remain valid as aliases
(source: mdn-css-display.md):

| Multi-keyword         | Legacy equivalent |
|-----------------------|-------------------|
| `block flow`          | `block`           |
| `inline flow`         | `inline`          |
| `block flow-root`     | `flow-root`       |
| `inline flow-root`    | `inline-block`    |
| `block flex`          | `flex`            |
| `inline flex`         | `inline-flex`     |
| `block grid`          | `grid`            |
| `inline grid`         | `inline-grid`     |
| `block table`         | `table`           |
| `inline table`        | `inline-table`    |
| `block list-item`     | `list-item`       |

Defaults when only one keyword is given (source: mdn-css-display.md):

- If only the inner type is specified, outer defaults to `block` (e.g., `flex`
  means `block flex`).
- If only the outer type is specified, inner defaults to `flow` (e.g., `block`
  means `block flow`).

## display: none vs visibility: hidden vs display: contents

| Property              | Visual | Layout space | Accessibility tree |
|-----------------------|--------|--------------|--------------------|
| `display: none`       | Hidden | Removed      | Removed            |
| `visibility: hidden`  | Hidden | Preserved    | Preserved          |
| `display: contents`   | N/A    | Element removed, children remain | Bug: removed in some browsers |

Key differences (source: mdn-css-display.md):

- **`display: none`** removes the element from the accessibility tree. The
  element and its descendants are not announced by screen readers.
- **`display: contents`** has a known bug in some browsers: it removes the
  element from the accessibility tree. Children remain accessible, but the
  element itself and its semantics are lost. This is particularly problematic
  for tables and lists where the structural element provides semantic meaning.
- **Table display changes**: changing the `display` value of a `<table>`,
  `<tr>`, or `<td>` removes them from the accessibility tree. The table is no
  longer announced as a table by assistive technology.

For hiding elements visually while keeping them accessible, use a visually-hidden
CSS pattern instead of `display: none`. See [[css-box-model]].

## Animating Display

The `display` property supports discrete animation — it switches at 50% of
the animation/transition by default (source: mdn-css-display.md).

Special handling for `none` (source: mdn-css-display.md):

- Transitioning **from** `display: none`: the element becomes visible at the
  **start** of the transition.
- Transitioning **to** `display: none`: the element becomes hidden at the
  **end** of the transition.

Requirements for animating display (source: mdn-css-display.md):

1. Set `transition-behavior: allow-discrete` — required for any discrete
   property like `display`.
2. Use `@starting-style` to define the entry state for elements appearing in
   the DOM (e.g., transitioning from `display: none`).

```css
@starting-style {
  .element {
    opacity: 0;
  }
}

.element {
  opacity: 1;
  transition: opacity 0.5s, display 0.5s;
  transition-behavior: allow-discrete;
}

.element.hidden {
  display: none;
  opacity: 0;
}
```

## Formal Definition

- **Initial value**: `inline` (source: mdn-css-display.md)
- **Applies to**: all elements (source: mdn-css-display.md)
- **Inherited**: no (source: mdn-css-display.md)
- **Computed value**: as specified, except for positioned and floating elements
  (source: mdn-css-display.md)

## Related

- [[css-flexbox]] — flex container layout model
- [[css-grid]] — grid container layout model
- [[css-box-model]] — block formatting context, box generation
