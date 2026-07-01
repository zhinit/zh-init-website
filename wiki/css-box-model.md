# CSS Box Model

Every element in CSS generates a rectangular box. The box model describes how
content, padding, border, and margin relate to each other and how they are
sized. (mdn-css-box-model.md)

## Four Box Areas

Each box has four areas, inside to outside: (mdn-css-box-model.md)

1. **Content area** — where text, images, and child elements display. Sized by
   `width`/`height` (or `inline-size`/`block-size`) when
   `box-sizing: content-box`.
2. **Padding area** — space between content and border. Set with `padding` and
   its per-side variants. Cannot be negative.
3. **Border area** — wraps padding. Set with `border`, `border-width`,
   `border-style`, `border-color` and per-side variants.
4. **Margin area** — space outside the border separating the element from
   neighbors. Set with `margin` and per-side variants. Can be negative.

```
┌─────────────────────────────────────────┐
│                 Margin                  │
│  ┌───────────────────────────────────┐  │
│  │             Border                │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │          Padding            │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │       Content         │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

(mdn-css-box-model.md)

## box-sizing

### content-box (default)

`width` and `height` set the size of the content area only. Padding and border
are added on top. (mdn-css-box-model.md)

```css
.box {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
/* Total rendered width = 200 + 20 + 20 + 5 + 5 = 250px */
```

### border-box

`width` and `height` set the size of the border area. Padding and border are
subtracted from the specified dimensions to determine the content area.
(mdn-css-box-model.md)

```css
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 5px solid;
}
/* Total rendered width = 200px */
/* Content area width = 200 - 20 - 20 - 5 - 5 = 150px */
```

### Global reset

Common practice is to apply `border-box` globally: (mdn-css-box-model.md)

```css
*, *::before, *::after {
  box-sizing: border-box;
}
```

## Margin Collapsing

Vertical margins of adjacent block-level elements collapse: when two positive
margins meet, the larger one wins. When one or both are negative, the negative
value is subtracted from the positive one. (mdn-css-box-model.md)

### Three cases where collapsing occurs

1. **Adjacent siblings** — the bottom margin of one element collapses with the
   top margin of the next sibling.
2. **Parent and first/last child** — if no border, padding, inline content, or
   clearance separates a parent's margin from its child's margin, they collapse.
3. **Empty blocks** — if a block has no border, padding, inline content, height,
   or min-height, its top and bottom margins collapse with each other.

(mdn-css-box-model.md)

```css
/* Adjacent sibling collapsing */
.box-a { margin-bottom: 30px; }
.box-b { margin-top: 20px; }
/* Gap between them = 30px (not 50px) — larger margin wins */

/* Negative + positive */
.box-a { margin-bottom: 30px; }
.box-b { margin-top: -10px; }
/* Gap between them = 20px (30 - 10) */
```

### When collapsing does NOT occur

- Floated elements
- Absolutely positioned elements (see [[css-position]])
- Flex items (see [[css-display]])
- Grid items (see [[css-display]])
- Elements with `overflow` other than `visible`
- Elements with `display: flow-root`

(mdn-css-box-model.md)

## Background Behavior

The background extends to the outer edge of the border area by default
(underneath the border itself). Controlled by `background-clip`:
(mdn-css-box-model.md)

```css
background-clip: border-box;   /* default — extends under border */
background-clip: padding-box;  /* extends to padding edge only */
background-clip: content-box;  /* extends to content edge only */
```

## Inline Elements

For non-replaced inline elements (`<span>`, `<a>`, `<em>`), `line-height`
determines the box height, not `height`, `padding`, or `border`. Vertical
padding and border are applied but do not affect the line box height — they may
overlap adjacent lines. (mdn-css-box-model.md)

```css
span {
  padding: 10px;       /* applied, but doesn't push lines apart */
  border: 2px solid;   /* applied, but doesn't push lines apart */
  line-height: 2;      /* this controls vertical space */
}
```

See also: [[css-display]], [[css-position]].
