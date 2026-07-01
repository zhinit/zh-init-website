# CSS Anchor Positioning

Declarative element tethering -- tooltips, popovers, dropdowns, error messages -- without JavaScript. Anchor elements are defined, and anchor-positioned elements have their size and position set relative to those anchors. (source: mdn-css-anchor-positioning.md)

## Creating Anchors

The `anchor-name` property assigns a dashed-ident name to an element, making it an anchor:

```css
.anchor {
  anchor-name: --my-anchor;
}
```

(source: mdn-css-anchor-positioning.md)

## Positioning Elements

The `position-anchor` property associates a positioned element with an anchor. The positioned element must use `position: fixed` or `position: absolute`. (source: mdn-css-anchor-positioning.md)

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
}
```

(source: mdn-css-anchor-positioning.md)

## anchor() Function

Places an element relative to its anchor using inset properties. Syntax: `anchor(<anchor-name>, <anchor-side>, <fallback>)`. (source: mdn-css-anchor-positioning.md)

`<anchor-side>` values:
- **Physical**: `top`, `right`, `bottom`, `left`
- **Logical**: `start`, `end`, `self-start`, `self-end`
- **Center**: `center`
- **Percentage**: any `<percentage>` value

`<fallback>` is an optional `<length-percentage>`. (source: mdn-css-anchor-positioning.md)

```css
.infobox {
  position-anchor: --my-anchor;
  position: fixed;
  inset-block-start: anchor(end);
  inset-inline-start: anchor(self-end);
  margin: 5px 0 0 5px;
}
```

(source: mdn-css-anchor-positioning.md)

## position-area Property

Uses a 3x3 grid centered on the anchor. Values combine a row keyword (`top`, `center`, `bottom`) with a column keyword (`left`, `center`, `right`). `span` variants extend across multiple cells. A single keyword implies `span-all` for the other axis. (source: mdn-css-anchor-positioning.md)

```css
position-area: top left;       /* top-left cell */
position-area: bottom center;  /* bottom center cell */
position-area: top span-left;  /* top row, spanning center and left */
position-area: top;            /* same as: top span-all */
```

(source: mdn-css-anchor-positioning.md)

## anchor-center Alignment

`justify-self: anchor-center` and `align-self: anchor-center` center a positioned element on its anchor along the respective axis. Also works with `justify-items`, `align-items`, `place-items`, and `place-self`. (source: mdn-css-anchor-positioning.md)

```css
.infobox {
  position: fixed;
  position-anchor: --my-anchor;
  top: calc(anchor(bottom) + 5px);
  justify-self: anchor-center;
}
```

(source: mdn-css-anchor-positioning.md)

## anchor-size() Function

Sizes elements relative to their anchor. Parameters: optional `<anchor-name>`, an `<anchor-size>` keyword, and an optional `<length-percentage>` fallback. (source: mdn-css-anchor-positioning.md)

`<anchor-size>` values: `width`, `height`, `inline`, `block`, `self-inline`, `self-block`. (source: mdn-css-anchor-positioning.md)

Works with: `width`, `height`, `min-width`, `min-height`, `max-width`, `max-height`, `block-size`, `inline-size`, and their min/max variants. (source: mdn-css-anchor-positioning.md)

```css
.infobox {
  width: anchor-size(width);
  width: calc(anchor-size(width) * 5);
}
```

The positioned element reacts dynamically when the anchor resizes (e.g. via transitions). (source: mdn-css-anchor-positioning.md)

## Anchor Scoping

When multiple elements share the same `anchor-name`, positioned elements anchor to the last one in source order. The `anchor-scope` property limits anchor name visibility to a subtree: (source: mdn-css-anchor-positioning.md)

```css
.scoped {
  anchor-scope: --my-anchor;
}
```

(source: mdn-css-anchor-positioning.md)

## Implicit Anchors

The Popover API creates implicit anchor associations via `popovertarget`/`id` attributes. Customizable `<select>` elements with `appearance: base-select` also create implicit anchor relationships. Neither requires explicit `anchor-name` or `position-anchor`. (source: mdn-css-anchor-positioning.md)

---

See also: [[css-position]], [[css]].
