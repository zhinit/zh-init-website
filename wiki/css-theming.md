# CSS Theming

Theming means defining a site's visual identity (colors, spacing, shadows,
typography) through a layer of indirection so the entire look can switch —
light to dark, brand A to brand B — by changing values in one place.

See [[css-custom-properties]] for the underlying custom property mechanics.

## The Modern Stack

Three CSS features compose into a complete theming system:

### 1. color-scheme

The `color-scheme` property declares which color schemes an element supports.
Setting it changes browser-controlled UI (scrollbars, form controls, canvas
background) to match the user's preference.
(source: mdn-color-scheme.md, "Overview")

```css
:root {
  color-scheme: light dark;
}
```

Values: `normal`, `light`, `dark`, `light dark`, `only light`, `only dark`.
`only` prevents the browser from overriding (turns off Chrome's Auto Dark
Theme). (source: mdn-color-scheme.md, "Values")

The property inherits and can be overridden per-element:

```css
header { color-scheme: only light; }
footer { color-scheme: only dark; }
```

(source: mdn-color-scheme.md, "Declaring Color Scheme Preferences")

**Flash prevention.** Add the meta tag to `<head>` so the browser applies the
scheme before any CSS loads:

```html
<meta name="color-scheme" content="light dark" />
```

(source: mdn-color-scheme.md, "HTML Meta Tag"; css-tricks-dark-mode-guide.md,
"Handling Browser Defaults")

Formal definition: initial value `normal`, applies to all elements and text,
inherited, discrete animation. Baseline widely available since January 2022.
(source: mdn-color-scheme.md, "Formal Definition")

### 2. prefers-color-scheme

The `prefers-color-scheme` media query detects the user's OS-level light/dark
preference. (source: mdn-prefers-color-scheme.md, "Overview")

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #121212;
    --text: #eee;
  }
}
```

Values: `light` (default when no preference expressed), `dark`.
Baseline widely available since January 2020.
(source: mdn-prefers-color-scheme.md, "Values")

JavaScript detection:

```javascript
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDark.matches) { /* ... */ }
```

(source: css-tricks-dark-mode-guide.md, "JavaScript Detection")

Embedded elements (SVGs, iframes) inherit the scheme from their parent's
`color-scheme` property, not directly from the media query.
(source: mdn-prefers-color-scheme.md, "Embedded Elements")

### 3. light-dark()

The `light-dark()` function returns its first argument in a light scheme and
its second in a dark scheme. It reads from the element's computed
`color-scheme`, so it responds to both `prefers-color-scheme` and explicit
`color-scheme` overrides.
(source: mdn-light-dark-function.md, "Description")

```css
:root {
  color-scheme: light dark;
}

body {
  background: light-dark(#fff, #121212);
  color: light-dark(#222, #eee);
}
```

Requires `color-scheme` to have a value of `light dark` on the element or an
ancestor. (source: mdn-light-dark-function.md, "Description")

Accepts colors, images, and gradients:

```css
light-dark(black, white);
light-dark(url("light.png"), url("dark.png"));
light-dark(
  linear-gradient(135deg, ghostwhite 20%, tomato),
  linear-gradient(45deg, darkslategray 20%, gold)
);
```

(source: mdn-light-dark-function.md, "Syntax")

Per-element overrides work because `light-dark()` reads from `color-scheme`,
not from the media query:

```css
.dark-section {
  color-scheme: dark;
  /* light-dark() now returns its second value here */
}
```

(source: una-kravets-modern-css-theming.md, "light-dark() as Foundation")

`light-dark()` is "more powerful than media queries because it's inherited and
composable." (source: una-kravets-modern-css-theming.md, "light-dark() as
Foundation")

Baseline since May 2024.
(source: mdn-light-dark-function.md, "Browser Compatibility")

## Design Token Architecture

A well-structured theming system uses three layers of CSS custom properties:

1. **Primitive tokens** — raw palette values with no semantic meaning.
   `--color-gray-900: #121212; --color-gray-100: #f5f5f5;`

2. **Semantic tokens** — context-aware references to primitives.
   `--color-bg: light-dark(var(--color-gray-100), var(--color-gray-900));`
   `--color-text: light-dark(var(--color-gray-900), var(--color-gray-100));`

3. **Component tokens** — element-specific references to semantic tokens.
   `--card-bg: var(--color-bg);`

(source: penpot-design-tokens-css-variables.md, "Three-Layer Token Structure")

Theme switching means remapping the semantic layer — primitive tokens and
component tokens stay the same.
(source: penpot-design-tokens-css-variables.md, "Three-Layer Token Structure")

Naming convention: `[category]-[property]-[element]-[modifier]-[state]`.
Examples: `--color-background-button-primary-active`,
`--spacing-padding-card-default`.
(source: penpot-design-tokens-css-variables.md, "Naming Conventions")

Scoping: global tokens on `:root`, themed tokens within theme selectors,
component-specific tokens scoped to their elements.
(source: penpot-design-tokens-css-variables.md, "Scoping")

Because CSS custom properties are live, the browser automatically recalculates
styles when scoped values change — theme switches are instantaneous without
component recompilation.
(source: penpot-design-tokens-css-variables.md, "Strategic Benefits")

### Practical pattern: light-dark() with token layers

```css
:root {
  color-scheme: light dark;

  /* Primitive */
  --gray-100: #f5f5f5;
  --gray-900: #121212;
  --green-600: #16a34a;
  --green-400: #4ade80;

  /* Semantic */
  --color-bg: light-dark(var(--gray-100), var(--gray-900));
  --color-text: light-dark(var(--gray-900), var(--gray-100));
  --color-link: light-dark(var(--green-600), var(--green-400));
}

body {
  background: var(--color-bg);
  color: var(--color-text);
}

a {
  color: var(--color-link);
}
```

(source: pbrumby-light-dark-production.md, "Nested Variables for Reusability";
mdn-light-dark-function.md, "Setting Colors Based on Color Scheme")

## Dark Mode Implementation

### Toggle approaches

Four methods to switch themes, in order of recommendation for modern sites:

| Method | Mechanism | Pros | Cons |
|--------|-----------|------|------|
| CSS custom properties | Class on `<body>` or `<html>` swaps variable values | Minimal repetition | Requires CSS variable support |
| Body class | Class toggles entire rule sets | Simple | Larger CSS |
| Separate stylesheets | Swap `<link>` href | Clean separation | Full stylesheet swap |
| Server-side | Apply class before render | No flash | Requires reload |

(source: css-tricks-dark-mode-guide.md, "Toggling Themes")

The CSS custom properties approach is the standard for modern sites.
(source: css-tricks-dark-mode-guide.md, "Implementation Decision Matrix")

### Combining OS detection with manual override

Default to OS preference, let the user override, persist the choice:

```css
body {
  --text-color: #222;
  --bkg-color: #fff;
}

@media (prefers-color-scheme: dark) {
  body {
    --text-color: #eee;
    --bkg-color: #121212;
  }
  body.light-theme {
    --text-color: #222;
    --bkg-color: #fff;
  }
}
```

(source: css-tricks-dark-mode-guide.md, "Allowing Manual Overrides")

### Persistence

Use `localStorage` to remember the user's choice:

```javascript
const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.add("dark-theme");
}
```

Limitation: JavaScript runs after CSS, causing a "flash of incorrect theme"
(FOIT). Mitigate by inlining a blocking `<script>` in `<head>` that reads
`localStorage` and applies the class before paint.
(source: css-tricks-dark-mode-guide.md, "Persisting User Preferences")

## Dark Mode Design

### Colors

- Avoid pure black (#000) backgrounds — use dark grays (#121212, #1E1E1E).
  Pure black with white text creates a halo effect.
  (source: css-tricks-dark-mode-guide.md, "Color Palettes")

- Avoid pure white (#fff) text — use off-white (#eee).
  (source: css-tricks-dark-mode-guide.md, "Color Palettes")

- Desaturate accent colors to prevent overly bright appearance on dark
  backgrounds. (source: css-tricks-dark-mode-guide.md, "Color Palettes")

- Maintain WCAG AA contrast ratio (4.5:1 body text, 3:1 large text/UI).
  See [[accessibility]].
  (source: css-tricks-dark-mode-guide.md, "Color Palettes")

### Elevation and shadows

Light themes use shadows to convey depth. In dark themes, shadows disappear
into the dark background. Two alternatives:

1. **Lighter surfaces** for elevated elements — close elements should still be
   lighter than distant ones, even in dark mode.
   (source: css-tricks-dark-mode-guide.md, "Shadows and Depth")

2. **Glowing borders** — use `light-dark()` to toggle shadow layers:

```css
.card {
  box-shadow:
    0 4px 12px light-dark(lightgray, transparent),
    inset 0 0 0 1px light-dark(transparent, rgba(255,255,255,0.1));
}
```

(source: una-kravets-modern-css-theming.md, "Elevation Mechanism Swapping")

### Images

Reduce brightness/contrast on images in dark mode:

```css
body.dark-theme img {
  filter: brightness(.8) contrast(1.2);
}
```

Or serve different versions:

```html
<picture>
  <source srcset="photo-dark.png" media="(prefers-color-scheme: dark)">
  <img src="photo-light.png">
</picture>
```

(source: css-tricks-dark-mode-guide.md, "Images in Dark Mode")

### SVGs

Inline `fill` attributes do not support `light-dark()`. Replace inline fills
with CSS classes:

```css
.fill-accent {
  fill: light-dark(var(--green-600), var(--green-400));
}
```

(source: pbrumby-light-dark-production.md, "SVG Implementation")

### Typography

Balance font weight — too heavy overwhelms on dark backgrounds, too light
causes eye fatigue. Medium weight provides optimal comfort.
(source: css-tricks-dark-mode-guide.md, "Typography")

## Advanced: contrast-color() and Style Queries

As of May 2026, two additional features automate micro-level theming:

**`contrast-color()`** returns black or white based on WCAG contrast against a
given background:

```css
.card {
  background: var(--brand-color);
  color: contrast-color(var(--brand-color));
}
```

(source: una-kravets-modern-css-theming.md, "Automatic Contrast")

**Container style queries** branch on the computed contrast color to use
hue-tinted text instead of stark black/white:

```css
@container style(--contrast-color: white) {
  .card-body { color: oklch(from var(--bg) 0.9 0.1 h); }
}
@container style(--contrast-color: black) {
  .card-body { color: oklch(from var(--bg) 0.3 0.1 h); }
}
```

(source: una-kravets-modern-css-theming.md, "Style Queries for Customizable
Palettes")

This separates **macro theming** (page-level light/dark via `light-dark()`)
from **micro theming** (element-level adaptation via `contrast-color()`
detection). (source: una-kravets-modern-css-theming.md, "Key Takeaway")

## Browser Support Summary

| Feature | Baseline | Since |
|---------|----------|-------|
| `prefers-color-scheme` | Widely available | January 2020 |
| `color-scheme` | Widely available | January 2022 |
| `light-dark()` | Newly available | May 2024 |
| `contrast-color()` | Newly available | May 2026 |

## See Also

- [[css-custom-properties]] — `var()`, `@property`, inheritance, IACVT
- [[css-colors]] — color spaces, color functions, manipulation
- [[color-theory]] — HSB framework, 60-30-10 rule, accessibility
- [[accessibility]] — WCAG contrast ratios, keyboard nav
