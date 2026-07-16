# CSS Colors

The CSS Colors module defines color-related properties, data types, and
functions for specifying and manipulating colors in CSS.
(mdn-css-colors.md)

See also: [[color-theory]], [[color-spaces-and-gamut]],
[[browser-color-management]].

## Core Properties

- `color` — sets the foreground color of text and text decorations.
  (mdn-css-colors.md)
- `opacity` — sets the transparency level of an element. 0 is fully
  transparent, 1 is fully opaque. (mdn-css-colors.md)

## Color Spaces and Functions

### Legacy color functions

- `rgb()` — red, green, blue channels (0–255 or 0%–100%).
  (mdn-css-colors.md)
- `hsl()` — hue (0–360), saturation (0%–100%), lightness (0%–100%).
  (mdn-css-colors.md)

### Modern color functions

- `hwb()` — hue, whiteness, blackness. (mdn-css-colors.md)
- `lab()` — CIE LAB color space with perceptually uniform lightness.
  (mdn-css-colors.md)
- `lch()` — CIE LCH: lightness, chroma, hue. Cylindrical form of LAB.
  (mdn-css-colors.md)
- `oklab()` — improved perceptually uniform color space.
  (mdn-css-colors.md)
- `oklch()` — cylindrical form of OKLab: lightness, chroma, hue.
  (mdn-css-colors.md)
- `color()` — specifies colors in any defined color space. Supports sRGB,
  display-p3, a98-rgb, prophoto-rgb, rec2020, xyz, xyz-d50, xyz-d65.
  (mdn-css-colors.md)

### Alpha channel

All color functions support an alpha channel. Modern syntax uses a `/`
separator: (mdn-css-colors.md)

```css
rgb(255 0 0 / 0.5)
hsl(120 100% 50% / 0.5)
oklch(0.7 0.15 180 / 0.5)
color(display-p3 1 0 0 / 0.5)
```

### Wide-gamut fallbacks

Browsers ignore CSS properties with invalid values, so an sRGB declaration
before a `color()` declaration acts as a fallback in browsers without
support (source: webkit-wide-gamut-color-css-display-p3.md):

```css
header {
    color: rgb(0, 255, 0);
    color: color(display-p3 0 1 0);
}
```

For variables, `@supports (color: color(display-p3 1 1 1))` gates the
wide-gamut definition (source: webkit-wide-gamut-color-css-display-p3.md).
Display hardware capability is detected separately with the `color-gamut`
media query (`p3` or `rec2020`), usable in `<picture>` sources,
stylesheets, and `window.matchMedia`
(source: webkit-improving-color-on-the-web.md). See
[[color-spaces-and-gamut]] for what Display P3 covers.

## Color Manipulation

- `color-mix()` — mixes two colors in a given color space by a specified
  percentage. (mdn-css-colors.md)
- `contrast-color()` — returns a color (white or black) with sufficient
  contrast against a given background. (mdn-css-colors.md)
- `light-dark()` — returns one of two colors depending on the current
  `color-scheme` (light or dark). (mdn-css-colors.md)

```css
background: color-mix(in oklch, red 70%, blue);
color: contrast-color(var(--bg));
color: light-dark(#333, #eee);
```

## Data Types and Keywords

### Data types

- `<color>` — any valid color value. (mdn-css-colors.md)
- `<hex-color>` — hexadecimal notation: `#rgb`, `#rgba`, `#rrggbb`,
  `#rrggbbaa`. (mdn-css-colors.md)
- `<named-color>` — one of 148 named CSS colors (e.g. `rebeccapurple`,
  `tomato`, `steelblue`). (mdn-css-colors.md)
- `<alpha-value>` — `<number>` (0 to 1) or `<percentage>` (0% to 100%).
  (mdn-css-colors.md)
- `<hue>` — `<angle>` or `<number>` representing a hue angle.
  (mdn-css-colors.md)
- `<system-color>` — colors from the user's OS theme (e.g. `Canvas`,
  `CanvasText`, `LinkText`, `ButtonFace`). (mdn-css-colors.md)

### Keywords

- `currentColor` — computed value of the element's `color` property. Useful
  for borders, shadows, and SVG fills that should match text color.
  (mdn-css-colors.md)
- `transparent` — fully transparent black (`rgba(0, 0, 0, 0)`).
  (mdn-css-colors.md)

## Properties Accepting Colors

Over 20 properties accept `<color>` values: (mdn-css-colors.md)

- `color`, `background-color`
- `border-color`, `border-top-color`, `border-right-color`,
  `border-bottom-color`, `border-left-color`
- `outline-color`
- `text-decoration-color`, `text-emphasis-color`
- `box-shadow`, `text-shadow`
- `caret-color`
- `column-rule-color`
- `accent-color`
- `scrollbar-color`
- `flood-color`, `lighting-color`, `stop-color` (SVG)
- `fill`, `stroke` (SVG)
- `color-scheme`

## Accessibility

WCAG 1.4.3 requires minimum 4.5:1 contrast ratio for text, 3:1 for large
text. WCAG 1.4.1 requires that color is not the sole means of conveying
information. (mdn-css-colors.md)

See [[accessibility]] for full WCAG coverage.
