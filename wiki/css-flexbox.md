# CSS Flexbox

## Core Concept

Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces. (mdn-css-flexbox-basic-concepts.md)

Two axes govern layout:

- **Main axis** -- defined by `flex-direction`. Items are laid out along this axis. `row` runs in the inline direction (left-to-right in LTR); `column` runs in the block direction (top-to-bottom). `row-reverse` and `column-reverse` flip the respective directions. (mdn-css-flexbox-basic-concepts.md)
- **Cross axis** -- perpendicular to the main axis. If main axis is `row`, cross axis is vertical; if main axis is `column`, cross axis is horizontal. (mdn-css-flexbox-basic-concepts.md)

Flexbox respects the writing mode of the document. In LTR languages with `flex-direction: row`, main-start is on the left and main-end is on the right. In RTL, main-start is on the right. This makes flexbox inherently internationalization-friendly. (mdn-css-flexbox-basic-concepts.md)

## Container Properties

Apply `display: flex` (block-level) or `display: inline-flex` (inline-level) to create a flex container. Direct children become flex items. (mdn-css-flexbox-basic-concepts.md)

See [[css-display]] for the full display property.

### Initial Values

| Property | Initial Value | Effect |
|---|---|---|
| `flex-direction` | `row` | Items laid out in a row |
| `flex-wrap` | `nowrap` | Items do not wrap |
| `flex-grow` | `0` | Items do not grow to fill space |
| `flex-shrink` | `1` | Items can shrink if needed |
| `flex-basis` | `auto` | Item size based on its content/width/height |
| `align-items` | `stretch` | Items stretch to fill cross axis |

(mdn-css-flexbox-basic-concepts.md)

### flex-wrap

Controls whether items can wrap onto multiple lines. Values: `nowrap` (default, single line, items may overflow), `wrap` (items wrap onto new lines), `wrap-reverse` (items wrap in reverse). (mdn-css-flexbox-basic-concepts.md)

### flex-flow

Shorthand for `flex-direction` and `flex-wrap`. Example: `flex-flow: row wrap`. (mdn-css-flexbox-basic-concepts.md)

### gap

Sets spacing between flex items. Can be used in combination with wrapping.

## Item Properties

### flex-basis

Defines the initial main size of a flex item before free space is distributed. Values: `auto` (use the item's width/height or content size), `0` (ignore content size), a length (`200px`), or a percentage (`30%`). (mdn-css-flexbox-basic-concepts.md)

### flex-grow

How much a flex item grows relative to others when free space is available. `0` (default) means the item does not grow. `1` absorbs free space. `2` grows twice as much as `1` items. (mdn-css-flexbox-basic-concepts.md)

### flex-shrink

How much a flex item shrinks relative to others when space is insufficient. `1` (default) means the item can shrink. `0` prevents shrinking. `3` shrinks 3x as fast as `1` items. (mdn-css-flexbox-basic-concepts.md)

### flex Shorthand

Sets `flex-grow`, `flex-shrink`, and `flex-basis` together. Predefined values:

| Shorthand | Expands to | Meaning |
|---|---|---|
| `flex: initial` | `0 1 auto` | Don't grow, can shrink, auto basis |
| `flex: auto` | `1 1 auto` | Grow and shrink, auto basis |
| `flex: none` | `0 0 auto` | Don't grow or shrink |
| `flex: 1` | `1 1 0` | Grow and shrink, zero basis |
| `flex: 2` | `2 1 0` | Grow 2x, can shrink, zero basis |

(mdn-css-flexbox-basic-concepts.md)

When a single number is given (`flex: 1`), `flex-basis` is set to `0`, not `auto`. This differs from setting `flex-grow: 1` alone, which leaves `flex-basis` at its initial value of `auto`. (mdn-css-flexbox-basic-concepts.md)

## Alignment

### align-items (cross axis, all items)

Values: `stretch` (default, fill cross axis), `flex-start`, `flex-end`, `center`, `baseline`. (mdn-css-flexbox-basic-concepts.md)

### align-self (cross axis, per item)

Overrides `align-items` for an individual flex item. Values: `auto` (use container's `align-items`), `flex-start`, `flex-end`, `center`, `stretch`, `baseline`. (mdn-css-flexbox-basic-concepts.md)

### justify-content (main axis)

Distributes free space on the main axis. Six values:

```
flex-start:      [A][B][C]...............    (default, pack toward main-start)
flex-end:        ...............[A][B][C]    (pack toward main-end)
center:          .......[A][B][C].......     (center items)
space-between:   [A]......[B]......[C]       (equal space between, none at edges)
space-around:    ..[A]....[B]....[C]..       (equal space around each item)
space-evenly:    ...[A]...[B]...[C]...       (equal space between and at edges)
```

(mdn-css-flexbox-basic-concepts.md)

### justify-items

Not applicable in flexbox. The `justify-items` property is ignored on flex containers.

## Common Patterns

### Navigation

Flexbox is the standard method for horizontal navigation. Apply `display: flex` to the list container. Use `justify-content` (`space-between`, `space-around`, `space-evenly`) to distribute items. (mdn-css-flexbox-use-cases.md)

### Split Navigation

Logo on the left, nav links on the right. Apply `margin-left: auto` to the item that should push to the right. Auto margins absorb all available free space in the specified direction, creating a gap between items. (mdn-css-flexbox-use-cases.md)

### Centering

Combine `align-items: center` (vertical) and `justify-content: center` (horizontal) on the container. Works regardless of content size. (mdn-css-flexbox-use-cases.md)

```css
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
```

### Card Layout with Footer Pushed Down

Cards with varying content height but footers always at the bottom. Make each card a column flex container (`flex-direction: column`). Set `flex: 1` on the content area to push the footer down. Alternative: `margin-top: auto` on the footer. (mdn-css-flexbox-use-cases.md)

### Media Objects

Image on one side, text on the other. Container is `display: flex` with `align-items: flex-start` and `gap`. The text body gets `flex: 1` to fill remaining space. Flip with `flex-direction: row-reverse`. (mdn-css-flexbox-use-cases.md)

### Form Controls

Input and button in a row. The input gets `flex: 1` to stretch; the button stays its natural width. Both match height via the default `align-items: stretch`. (mdn-css-flexbox-use-cases.md)

## See Also

- [[css-grid]] -- two-dimensional layout (rows and columns simultaneously)
- [[css-display]] -- the display property that activates flex formatting context
