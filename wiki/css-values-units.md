# CSS Values and Units

Source: `raw/md/mdn-css-values-and-units.md`

## Length Units

### Absolute Length Units

All absolute units are ultimately defined relative to the pixel. On screens,
`px` is the only one that matters. The physical units (`cm`, `mm`, `in`, `pt`,
`pc`, `Q`) exist for print stylesheets. [mdn-css-values-and-units.md]

| Unit | Name | Equivalence |
|------|------|-------------|
| `px` | Pixels | 1px = 1/96th of 1in |
| `cm` | Centimeters | 1cm = 96px/2.54 |
| `mm` | Millimeters | 1mm = 1/10th of 1cm |
| `Q` | Quarter-millimeters | 1Q = 1/40th of 1cm |
| `in` | Inches | 1in = 2.54cm = 96px |
| `pt` | Points | 1pt = 1/72nd of 1in |
| `pc` | Picas | 1pc = 1/6th of 1in |

### Font-relative Length Units

Font-relative units resolve against font metrics. `em` and `rem` are the most
common. `em` compounds when nested (an `em` inside an `em` multiplies); `rem`
always resolves against the root element, avoiding compounding. The `r`-prefixed
variants (`rex`, `rcap`, `rch`, `ric`, `rlh`) resolve against the root element's
font rather than the current element's font. [mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `em` | Font size of the element |
| `rem` | Font size of the root element |
| `ex` | x-height of the element's font |
| `rex` | x-height of the root element's font |
| `cap` | Cap height of the element's font |
| `rcap` | Cap height of the root element's font |
| `ch` | Advance measure of "0" glyph |
| `rch` | Advance measure of "0" in root font |
| `ic` | Advance measure of "水" (CJK water ideograph) |
| `ric` | Advance measure of "水" in root font |
| `lh` | Line height of the element |
| `rlh` | Line height of the root element |

When to use each:

- `rem` — base unit for most sizing (font sizes, spacing, padding). Scales with
  user font preferences without compounding.
- `em` — when a measurement should scale with the current element's font size
  (e.g., padding on a button that should grow with its text).
- `ch` — sizing containers to a character count (e.g., `max-width: 65ch` for
  readable line lengths).
- `ex`, `cap` — vertical alignment relative to font metrics.
- `lh`, `rlh` — spacing tied to line height.
- `ic` — CJK-specific layout.

### Viewport Length Units

Each unit equals 1% of the corresponding viewport dimension.
[mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `vw` | 1% of viewport width |
| `vh` | 1% of viewport height |
| `vi` | 1% of viewport inline axis |
| `vb` | 1% of viewport block axis |
| `vmin` | 1% of smaller viewport dimension |
| `vmax` | 1% of larger viewport dimension |

`vi` and `vb` are logical equivalents of `vw`/`vh` — they adapt to writing
direction. In horizontal writing modes, `vi` = `vw` and `vb` = `vh`.

### Dynamic Viewport Units

Account for dynamic browser UI such as a mobile address bar that appears and
disappears during scrolling. The dynamic viewport changes size as the UI
retracts or expands. [mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `dvw` | 1% of dynamic viewport width |
| `dvh` | 1% of dynamic viewport height |
| `dvi` | 1% of dynamic viewport inline |
| `dvb` | 1% of dynamic viewport block |
| `dvmin` | 1% of smaller dynamic viewport dimension |
| `dvmax` | 1% of larger dynamic viewport dimension |

### Large Viewport Units

Assume browser UI is retracted (largest possible viewport). Use for backgrounds
or elements that should fill the maximum available space.
[mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `lvw` | 1% of large viewport width |
| `lvh` | 1% of large viewport height |
| `lvi` | 1% of large viewport inline |
| `lvb` | 1% of large viewport block |
| `lvmin` | 1% of smaller large viewport dimension |
| `lvmax` | 1% of larger large viewport dimension |

### Small Viewport Units

Assume browser UI is expanded (smallest possible viewport). Use for content that
must never overflow, even when the browser chrome is fully visible.
[mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `svw` | 1% of small viewport width |
| `svh` | 1% of small viewport height |
| `svi` | 1% of small viewport inline |
| `svb` | 1% of small viewport block |
| `svmin` | 1% of smaller small viewport dimension |
| `svmax` | 1% of larger small viewport dimension |

When to use each viewport variant:

- `vw`/`vh` — general viewport-relative sizing; behavior with dynamic browser
  UI is UA-defined.
- `dvw`/`dvh` — elements that should resize live as mobile browser chrome
  appears/disappears.
- `lvw`/`lvh` — background images, hero sections that fill the maximum viewport.
- `svw`/`svh` — content that must fit without scrollbar jumps when browser
  chrome expands.

## Other Units

### Angle Units

Used in gradients, transforms, and color functions. [mdn-css-values-and-units.md]

| Unit | Description | Full circle |
|------|-------------|-------------|
| `deg` | Degrees | 360deg |
| `grad` | Gradians | 400grad |
| `rad` | Radians | ~6.2832rad (2pi) |
| `turn` | Turns | 1turn |

### Time Units

Used in `transition-duration`, `animation-duration`, and related properties.
[mdn-css-values-and-units.md]

| Unit | Description |
|------|-------------|
| `s` | Seconds |
| `ms` | Milliseconds (1s = 1000ms) |

### Frequency Units

Used with `@media` speech features. [mdn-css-values-and-units.md]

| Unit | Description |
|------|-------------|
| `Hz` | Hertz (cycles per second) |
| `kHz` | Kilohertz (1kHz = 1000Hz) |

### Resolution Units

Used in media queries (`min-resolution`, `max-resolution`).
[mdn-css-values-and-units.md]

| Unit | Description |
|------|-------------|
| `dpi` | Dots per inch |
| `dpcm` | Dots per centimeter |
| `dppx` | Dots per px unit |
| `x` | Alias for `dppx` |

### Flex (fr)

The `fr` unit represents a fraction of the available space in a grid container.
`grid-template-columns: 1fr 2fr 1fr` distributes space as 25% / 50% / 25%.
[mdn-css-values-and-units.md]

### Container Query Length Units

Relative to the dimensions of a query container. [mdn-css-values-and-units.md]

| Unit | Relative to |
|------|-------------|
| `cqw` | 1% of query container width |
| `cqh` | 1% of query container height |
| `cqi` | 1% of query container inline size |
| `cqb` | 1% of query container block size |
| `cqmin` | Smaller of `cqi` or `cqb` |
| `cqmax` | Larger of `cqi` or `cqb` |

## Math Functions

### Supported

**Basic arithmetic:** `calc()` performs `+`, `-`, `*`, `/` on mixed units.
`calc-size()` performs calculations on intrinsic size values.
[mdn-css-values-and-units.md]

**Comparison:** `min()` returns the smallest value from a list. `max()` returns
the largest. `clamp(min, val, max)` clamps a value between a minimum and
maximum. [mdn-css-values-and-units.md]

**Stepped value:** `round()` rounds according to a rounding strategy. `mod()`
returns the modulus (same sign as divisor). `rem()` returns the remainder (same
sign as dividend). [mdn-css-values-and-units.md]

**Sign-related:** `abs()` returns the absolute value. `sign()` returns -1, 0,
or 1 based on sign. [mdn-css-values-and-units.md]

**Trigonometric:** `sin()`, `cos()`, `tan()`, `asin()`, `acos()`, `atan()`,
`atan2()`. The inverse functions return angles. [mdn-css-values-and-units.md]

**Exponential:** `pow()` (base raised to power), `sqrt()` (square root),
`hypot()` (square root of sum of squares), `log()` (logarithm), `exp()` (e
raised to power). [mdn-css-values-and-units.md]

### Not Yet Supported

The source lists these functions without marking them as widely supported:

- `if()` — conditional value function
- `random()` — returns a random value
- `random-item()` — returns a random item from a list
- `sibling-count()` — returns the number of siblings
- `sibling-index()` — returns the index among siblings
- `progress()` — calculates progress between two values
- `ident()` — produces a CSS identifier from arguments
- `inherit()` — explicit inherited value function

[mdn-css-values-and-units.md]

## Data Types

CSS properties accept values of specific types. Key types defined in the module:
[mdn-css-values-and-units.md]

| Type | Description |
|------|-------------|
| `<integer>` | Whole number (e.g., `5`, `-3`) |
| `<number>` | Decimal number (e.g., `1.5`, `-0.3`) |
| `<dimension>` | Number with a unit (e.g., `10px`, `2em`) |
| `<percentage>` | Fraction of some other value (e.g., `50%`); what it's relative to depends on context |
| `<length>` | Distance measurement |
| `<length-percentage>` | Either a length or percentage |
| `<angle>` | Angle measurement |
| `<time>` | Time measurement |
| `<frequency>` | Frequency measurement |
| `<resolution>` | Pixel density measurement |
| `<ratio>` | Aspect ratio (e.g., `16/9`) |
| `<flex>` | Flexible length in `fr` units |

Additional types referenced in CSS but defined in other modules: `<color>`,
`<position>`, `<easing-function>`, `<custom-ident>`, `<dashed-ident>`, `<url>`.

## Other Functions

- `attr()` — returns the value of an attribute on the element.
  [mdn-css-values-and-units.md]
- `url()` — represents a URL reference. [mdn-css-values-and-units.md]
- `var()` — inserts a custom property value. See [[css-custom-properties]].
  [mdn-css-values-and-units.md, listed under "Related Modules: CSS custom
  properties and var()"]
