# CSS Position

The `position` property sets how an element is positioned in a document. Its
initial value is `static`. It applies to all elements and is not inherited.
([mdn-css-position.md][src])

## Five Positioning Modes

### static

The element follows normal flow. `top`, `right`, `bottom`, `left`, and
`z-index` have no effect. ([src])

### relative

The element follows normal flow, then is offset relative to itself via inset
properties. The space it originally occupied is preserved — other elements are
not affected by the offset. Creates a containing block for absolutely
positioned descendants. ([src])

### absolute

The element is removed from normal flow. It is positioned relative to its
nearest positioned ancestor (any ancestor with `position` other than `static`).
If none exists, it uses the initial containing block (usually the viewport).
([src])

When `width` and `height` are `auto` and both `left`/`right` (or
`top`/`bottom`) are set, the element stretches to fill its containing block.
`inset: 0` is the shorthand for this pattern. ([src])

### fixed

The element is removed from normal flow and positioned relative to the
viewport. It does not scroll with the page. The containing block shifts to the
nearest ancestor with `transform`, `perspective`, `filter`, `backdrop-filter`,
`contain: paint`, or `will-change` set to one of those properties. ([src])

### sticky

The element follows normal flow, then offsets relative to its nearest scrolling
ancestor and containing block. It behaves like `relative` until crossing a
threshold set by an inset property, then behaves like `fixed` within its
containing block. A sticky element sticks to the nearest ancestor with a
scrolling mechanism (`overflow: hidden | scroll | auto | overlay`), even if
that ancestor is not actually scrolling. ([src])

Requires at least one inset property (`top`, `right`, `bottom`, or `left`) set
to a non-`auto` value to define the sticking threshold. ([src])

## Positioned Elements

An element is **positioned** when its `position` value is anything other than
`static` — that is, `relative`, `absolute`, `fixed`, or `sticky`. An element
is **absolutely positioned** when `position` is `absolute` or `fixed`. ([src])

## Inset Properties

### Physical properties

`top`, `right`, `bottom`, `left` set offsets from each edge. The `inset`
shorthand sets all four: `inset: top right bottom left`. ([src])

### Logical properties

| Logical property      | Physical equivalent (horizontal-tb, LTR) |
|-----------------------|------------------------------------------|
| `inset-block-start`   | `top`                                    |
| `inset-block-end`     | `bottom`                                 |
| `inset-inline-start`  | `left`                                   |
| `inset-inline-end`    | `right`                                  |

`inset-block` and `inset-inline` are shorthands for their respective
start/end pairs. ([src])

See [[css-logical-properties]] for the full logical properties system.

### Precedence rules

When conflicting inset properties are set and the element has an explicit size:

- `top` wins over `bottom` (in horizontal writing mode). ([src])
- `left` wins over `right` in LTR; `right` wins over `left` in RTL. ([src])
- `inset-block-start` wins over `inset-block-end`; `inset-inline-start` wins
  over `inset-inline-end`. ([src])

## Stacking Contexts

`position: relative`, `position: absolute`, `position: fixed`, and
`position: sticky` elements can use `z-index` to control stacking order.
`position: static` elements ignore `z-index`. ([src])

`position: fixed` and `position: sticky` always create a new stacking context
(the browser promotes them to their own compositor layer). ([src])

## Performance

For `fixed` and `sticky` elements, the browser may promote the element to its
own compositor layer. `will-change: transform` hints the browser to create a
new layer, which can improve scroll performance at the cost of additional
memory. ([src])

```css
.sticky-header {
  position: sticky;
  top: 0;
  will-change: transform;
}
```

## Accessibility

`position: absolute` and `position: fixed` elements can overlap other content
when the page is zoomed for larger text. Ensure positioned elements do not
obscure content at increased text sizes. ([src])

## See Also

- [[css-display]] — how elements generate boxes and participate in layout
- [[css-anchor-positioning]] — positioning relative to anchor elements
- [[css-logical-properties]] — writing-mode-aware property equivalents

[src]: ../raw/md/mdn-css-position.md
