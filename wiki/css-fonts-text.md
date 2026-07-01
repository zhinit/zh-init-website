# CSS Fonts and Text

Related: [[typography]], [[css]]

## Font Selection

`font-family` specifies a prioritized list of font family names and/or generic family names [mdn-css-text-font-styling.md]. The browser walks the list and uses the first available font.

**Web safe fonts** available on virtually all systems: Arial (sans-serif), Courier New (monospace), Georgia (serif), Times New Roman (serif), Trebuchet MS (sans-serif, not widely available on mobile), Verdana (sans-serif) [mdn-css-text-font-styling.md].

**Generic family names**: `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`, `ui-serif`, `ui-sans-serif`, `ui-monospace`, `ui-rounded`, `math`, `emoji`, `fangsong` [mdn-css-fonts.md]. Every font stack should end with a generic family as the final fallback [mdn-css-text-font-styling.md].

**Font stacks** provide fallbacks. Font names containing spaces must be quoted [mdn-css-text-font-styling.md]:

```css
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-family: Georgia, "Times New Roman", serif;
font-family: "Fira Code", "Courier New", monospace;
```

**`font-size`** sets font size. The default browser font size is 16px [mdn-css-text-font-styling.md].

| Unit | Relative to | Notes |
|------|-------------|-------|
| `px` | Screen (absolute) | Fixed, does not scale |
| `em` | Parent element's font-size | Compounds when nested |
| `rem` | Root (`:root`/`<html>`) font-size | Preferred for predictability |

`rem` is generally preferred over `em` because `em` compounds when elements are nested, while `rem` always references the root [mdn-css-text-font-styling.md].

**`font-weight`** sets boldness. Values: `normal` (400), `bold` (700), `lighter`, `bolder`, or numeric 100-900 in increments of 100 [mdn-css-text-font-styling.md]. The numeric scale maps to named weights: 100 Thin, 200 Extra Light, 300 Light, 400 Normal, 500 Medium, 600 Semi Bold, 700 Bold, 800 Extra Bold, 900 Black [mdn-css-text-font-styling.md]. The absolute range is 1-1000 [mdn-css-fonts.md].

**`font-style`** values: `normal`, `italic` (the italic variant of the font), `oblique` (a slanted version of the normal font), `oblique <angle>` (oblique with a specific angle) [mdn-css-text-font-styling.md, mdn-css-fonts.md].

**`font-width`** (also `font-stretch`) sets the width of the font face. Values include keywords like `condensed` and `expanded`, or a percentage [mdn-css-fonts.md].

### The font Shorthand

Sets multiple font properties in one declaration. Order matters [mdn-css-text-font-styling.md]:

```
font: [style] [variant] [weight] [stretch] size[/line-height] family;
```

`font-size` and `font-family` are required. Other values are optional and default to `normal`. Properties not specified are reset to their initial values [mdn-css-text-font-styling.md].

```css
font: italic small-caps bold 1.2rem/1.6 "Helvetica Neue", sans-serif;
font: 1rem sans-serif;              /* minimal: size and family only */
font: 700 1.25rem/1.5 Georgia, serif;
```

## @font-face

Defines a custom font for use in the document [mdn-css-fonts.md]:

```css
@font-face {
  font-family: "MyFont";
  src: url("myfont.woff2") format("woff2"),
       url("myfont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

Key descriptors [mdn-css-fonts.md]:

| Descriptor | Description |
|------------|-------------|
| `font-family` | Name to reference the font by |
| `src` | Font file location(s) and format(s) |
| `font-weight` | Weight range the font covers |
| `font-style` | Style the font covers (normal, italic, oblique) |
| `font-width` / `font-stretch` | Width range the font covers |
| `font-display` | Loading behavior: `auto`, `block`, `swap`, `fallback`, `optional` |
| `unicode-range` | Range of Unicode code points the font covers |
| `size-adjust` | Multiplier for glyph outlines and metrics |
| `ascent-override` | Override the ascent metric |
| `descent-override` | Override the descent metric |
| `line-gap-override` | Override the line gap metric |
| `font-feature-settings` | Default OpenType features |
| `font-variation-settings` | Default variable font axis values |

## Variable Fonts

A variable font is a single font file that contains multiple variations along defined axes (weight, width, slant, etc.) [mdn-css-fonts.md]. Instead of shipping separate files for each weight/style combination, one file covers all variations.

`font-variation-settings` provides low-level control over variable font axes [mdn-css-fonts.md]. Where possible, use the high-level properties (`font-weight`, `font-style`, `font-width`) instead, as they map to registered axes.

## Text Styling

**`text-decoration`** is shorthand for `text-decoration-line`, `text-decoration-style`, and `text-decoration-color` [mdn-css-text-font-styling.md]:

```css
text-decoration: underline dotted red;
text-decoration: line-through;
text-decoration: underline wavy #ff6600;
```

Individual sub-properties [mdn-css-text-font-styling.md]:
- `text-decoration-line`: `none`, `underline`, `overline`, `line-through`
- `text-decoration-style`: `solid`, `double`, `dotted`, `dashed`, `wavy`
- `text-decoration-color`: any color value

**`text-transform`** changes text capitalization [mdn-css-text-font-styling.md]:
- `none` — no change
- `uppercase` — ALL CAPS
- `lowercase` — all lowercase
- `capitalize` — First Letter Of Each Word
- `full-width` — fixed-width square for CJK compatibility

**`text-shadow`** takes four values: horizontal offset (required), vertical offset (required), blur radius (optional, default 0), color (optional, default `currentColor`) [mdn-css-text-font-styling.md]. Multiple shadows can be comma-separated. Negative offsets go up and left.

```css
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
text-shadow: 1px 1px 1px #000, 0 0 10px rgba(255, 255, 255, 0.8);
```

**`text-align`** aligns text within its containing block: `left`, `right`, `center`, `justify` [mdn-css-text-font-styling.md].

**`line-height`** sets the height of a line box. Unitless values are preferred because they act as a multiplier of the element's font-size [mdn-css-text-font-styling.md]. The browser default is roughly 1.2. Recommended range for body text: 1.5 to 2; 1.6 is commonly used [mdn-css-text-font-styling.md].

```css
line-height: 1.5;    /* 1.5x the font-size */
line-height: 24px;   /* absolute (less flexible) */
line-height: 150%;   /* percentage of font-size */
```

**`letter-spacing`** and **`word-spacing`** adjust spacing between characters and words respectively [mdn-css-text-font-styling.md]:

```css
letter-spacing: 0.05em;   /* slight increase */
letter-spacing: -0.02em;  /* tighten */
word-spacing: 0.25em;     /* increase space between words */
```

## Font Features

**`font-feature-settings`** provides low-level control over OpenType font features [mdn-css-fonts.md].

**`font-kerning`** controls kerning: `auto`, `normal`, `none` [mdn-css-fonts.md].

**`font-variant`** is shorthand for all font-variant sub-properties [mdn-css-fonts.md]:
- `font-variant-ligatures` — controls ligature usage
- `font-variant-numeric` — controls numeric glyph forms (tabular figures, fractions, etc.)
- `font-variant-caps` — controls capital letter glyphs: `small-caps`, `all-small-caps`, `petite-caps`, etc.
- `font-variant-alternates` — controls alternate glyphs
- `font-variant-east-asian` — controls East Asian text rendering
- `font-variant-position` — controls superscript/subscript positioning
- `font-variant-emoji` — controls emoji presentation: `text`, `emoji`, `unicode`

`@font-feature-values` defines friendly names for OpenType feature indices, used with `font-variant-alternates` [mdn-css-fonts.md]:

```css
@font-feature-values "MyFont" {
  @stylistic { curly: 1; }
  @swash { fancy: 2; }
}
.decorative {
  font-variant-alternates: stylistic(curly) swash(fancy);
}
```

**`font-optical-sizing`** controls optical size adjustments: `auto`, `none` [mdn-css-fonts.md].

## Font Performance

The `font-display` descriptor in `@font-face` controls how the font is displayed during loading [mdn-css-fonts.md]:

| Value | Behavior |
|-------|----------|
| `auto` | Browser default strategy |
| `block` | Brief invisible period, then font swaps in when ready |
| `swap` | Immediate fallback text, font swaps in when ready |
| `fallback` | Very brief invisible period, short swap period, then keeps fallback if font not ready |
| `optional` | Very brief invisible period, browser decides whether to use the font based on connection speed |

## Font Synthesis

When a font file lacks a requested weight or style, the browser may synthesize it [mdn-css-fonts.md]:

- `font-synthesis` — shorthand controlling which faces the browser may synthesize
- `font-synthesis-weight` — controls synthesis of bold: `auto`, `none`
- `font-synthesis-style` — controls synthesis of italic: `auto`, `none`
- `font-synthesis-small-caps` — controls synthesis of small caps: `auto`, `none`
