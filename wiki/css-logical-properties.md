# CSS Logical Properties

## Why Logical Properties

CSS 2.1 sized things according to physical screen dimensions using `width`/`height` and positioning from `top`/`left`. Logical properties provide flow-relative alternatives that use terms like `start` and `end` instead of `left`/`right` or `top`/`bottom`. They adapt to different writing modes and text directions (LTR, RTL, vertical) without requiring layout changes, making them essential for internationalization. (source: mdn-css-logical-properties.md)

## Block and Inline Dimensions

The **inline dimension** is the direction along which a line of text runs. The **block dimension** is the direction in which blocks (paragraphs) stack. (source: mdn-css-logical-properties.md)

In horizontal writing modes (English, Arabic): inline = horizontal, block = vertical. In vertical writing modes (Japanese): inline = vertical, block = horizontal. (source: mdn-css-logical-properties.md)

**Horizontal Writing Mode:**
```
┌─────────────────────────────┐
│ inline axis (→)             │
│                             │ block axis (↓)
│                             │
└─────────────────────────────┘
```

**Vertical Writing Mode:**
```
┌─────────────────────────────┐
│ block axis (→)              │
│  inline axis (↓)            │
│                             │
└─────────────────────────────┘
```
(source: mdn-css-logical-properties.md)

## Property Mapping Table

| Physical | Logical |
|----------|---------|
| `width` | `inline-size` |
| `height` | `block-size` |
| `min-width` | `min-inline-size` |
| `max-height` | `max-block-size` |
| `margin-top` | `margin-block-start` |
| `margin-right` | `margin-inline-end` |
| `margin-bottom` | `margin-block-end` |
| `margin-left` | `margin-inline-start` |
| `padding-top` | `padding-block-start` |
| `border-right` | `border-inline-end` |
| `top` | `inset-block-start` |
| `right` | `inset-inline-end` |
| `bottom` | `inset-block-end` |
| `left` | `inset-inline-start` |

(source: mdn-css-logical-properties.md)

### Shorthand Properties

- `margin-block` — sets `margin-block-start` and `margin-block-end`
- `margin-inline` — sets `margin-inline-start` and `margin-inline-end`
- `padding-block`, `padding-inline`
- `border-block`, `border-inline`
- `inset-block`, `inset-inline`

(source: mdn-css-logical-properties.md)

## Layout Methods

[[css-flexbox|Flexbox]] and [[css-grid|grid]] already use block/inline concepts natively. `align-items` and `justify-content` work on the cross/main axes, which map to block/inline dimensions based on writing mode. `inline-size` adapts to whichever axis is inline for the current writing mode. (source: mdn-css-logical-properties.md)

See also: [[css-flexbox]], [[css-grid]], [[css-position]].
