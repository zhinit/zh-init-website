# CSS Cascade, Specificity, and Layers

Part of [[css]]. Related: [[css-selectors]], [[css-custom-properties]].

## The Cascade Algorithm

The cascade is the algorithm that resolves conflicts when multiple CSS declarations target the same property on the same element (source: mdn-css-cascade-introduction.md). It proceeds through five steps, in order:

1. **Relevance** — filter out rules whose selector does not match the element or whose `@media` condition is not met (source: mdn-css-cascade-introduction.md).
2. **Origin and importance** — sort by where the declaration came from and whether it is `!important` (source: mdn-css-cascade-introduction.md).
3. **Specificity** — among declarations from the same origin and layer, the one with the highest specificity wins (source: mdn-css-cascade-introduction.md).
4. **Scoping proximity** — when two selectors in the same origin/layer have equal specificity, the one with the fewest DOM hops to its `@scope` root wins (source: mdn-css-cascade-introduction.md).
5. **Order of appearance** — if everything else is equal, the last declaration in source order wins (source: mdn-css-cascade-introduction.md).

### Origin and importance precedence

Declarations are ranked by origin and whether they carry `!important`. The full precedence table, from lowest to highest:

| Precedence | Origin | Importance |
|---|---|---|
| 1 | user-agent (browser) | normal |
| 2 | user | normal |
| 3 | author (developer) | normal |
| 4 | CSS `@keyframes` animations | |
| 5 | author (developer) | `!important` |
| 6 | user | `!important` |
| 7 | user-agent (browser) | `!important` |
| 8 | CSS transitions | |

(source: mdn-css-cascade-introduction.md)

Normal author styles override user and user-agent styles regardless of selector specificity. `!important` reverses the origin order: an `!important` user-agent declaration beats an `!important` author declaration (source: mdn-css-cascade-introduction.md).

Transitions sit at the very top; property values mid-transition override everything, including `!important` (source: mdn-css-cascade-introduction.md). Animations override all normal styles but not `!important` styles (source: mdn-css-cascade-introduction.md).

## Specificity

Specificity is only compared between declarations that share the same cascade origin and layer (source: mdn-css-specificity.md). It uses a three-column weight: **ID – CLASS – TYPE**. Columns are compared left to right; a higher value in an earlier column wins regardless of later columns (source: mdn-css-specificity.md).

### Weight categories

| Column | What counts | Weight added |
|---|---|---|
| ID | `#foo` | 1-0-0 |
| CLASS | `.foo`, `[attr]`, `:hover`, `:nth-of-type()`, `:required` | 0-1-0 |
| TYPE | `p`, `h1`, `::before`, `::placeholder` | 0-0-1 |
| (none) | `*`, `:where()` | 0-0-0 |

(source: mdn-css-specificity.md)

Combinators (`+`, `>`, `~`, space, `||`) and the `&` nesting combinator add no weight (source: mdn-css-specificity.md).

### Examples

```css
#myElement {
  color: green;              /* 1-0-0 — wins */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow;             /* 0-4-0 — loses, ID column is 0 */
}
```

(source: mdn-css-specificity.md)

### :is(), :has(), :not()

These pseudo-classes add no weight of their own. Instead, their specificity equals that of their heaviest parameter (source: mdn-css-specificity.md):

```css
:is(p)              /* 0-0-1  (takes p's weight) */
:is(p, #fakeId)     /* 1-0-0  (takes #fakeId's weight) */
h1:has(+ h2, > #id) /* 1-0-1  (h1 = 0-0-1, #id = 1-0-0) */
p:not(#fakeId)       /* 1-0-1 */
```

(source: mdn-css-specificity.md)

### :where() is always 0-0-0

`:where()` is the specificity-adjustment pseudo-class. Everything inside it contributes zero weight (source: mdn-css-specificity.md):

```css
:where(#defaultTheme) a { color: red; }   /* 0-0-1 */
footer a { color: blue; }                 /* 0-0-2 — overrides the above */
```

(source: mdn-css-specificity.md)

### Inline styles

Inline styles (`style="..."`) have a weight of **1-0-0-0** — higher than any selector-based specificity. Only `!important` can override them (source: mdn-css-specificity.md).

### Increasing specificity by duplication

Repeating a selector in the same compound selector increases its column count (source: mdn-css-specificity.md):

```css
#id#id#id span  { /* 3-0-1 */ }
.c.c.c span     { /* 0-3-1 */ }
```

## Cascade Layers (`@layer`)

`@layer` gives developers explicit control over the cascade within a single origin (source: mdn-css-layer.md). See also [[css-selectors]].

### Three ways to create layers

1. **Block at-rule** — a named layer with rules inside (source: mdn-css-layer.md):
   ```css
   @layer utilities {
     .padding-sm { padding: 0.5rem; }
   }
   ```

2. **Statement at-rule** — declares layer names to establish order, with no rules (source: mdn-css-layer.md):
   ```css
   @layer reset, base, components, utilities;
   ```

3. **Anonymous layer** — unnamed, cannot be referenced or appended to later (source: mdn-css-layer.md):
   ```css
   @layer {
     p { margin: 0; }
   }
   ```

### Layer priority order

Layers are prioritized in the order they are first declared. The last declared layer has the highest priority for normal declarations (source: mdn-css-layer.md):

```css
@layer base, components, utilities;
/* base = lowest, utilities = highest for normal rules */
```

For `!important` declarations the order reverses: the first declared layer's `!important` rules have the highest priority (source: mdn-css-layer.md):

```css
@layer base, utilities;

@layer base     { p { color: red !important; } }   /* wins */
@layer utilities { p { color: blue !important; } }  /* loses */
```

### Unlayered styles vs layered styles

Styles declared outside any layer are treated as part of an anonymous last-declared layer (source: mdn-css-cascade-introduction.md). Unlayered normal styles beat all layered normal styles from the same origin. For `!important` declarations, unlayered styles have the lowest priority (source: mdn-css-layer.md).

### Re-declaring a layer

Using the same layer name again appends rules to the existing layer without changing its priority position (source: mdn-css-layer.md).

### Nesting layers with dot notation

Layers can be nested. Nested layers are referenced with dot notation (source: mdn-css-layer.md):

```css
@layer framework {
  @layer base  { p { margin: 0; } }
  @layer theme { p { color: darkblue; } }
}

/* Equivalent: */
@layer framework.base  { p { margin: 0; } }
@layer framework.theme { p { color: darkblue; } }
```

Pre-declaring nested layer order:

```css
@layer framework.base, framework.theme, framework.utilities;
```

(source: mdn-css-layer.md)

### @import with layer

Imported stylesheets can be assigned to a layer at import time (source: mdn-css-layer.md):

```css
@import url("normalize.css") layer(reset);
@import url("theme.css") layer(theme);
```

This is the recommended way to manage third-party CSS: import it into a low-priority layer so your own unlayered styles override it without needing `!important` (source: mdn-css-cascade-introduction.md).

## Inheritance

Some CSS properties inherit their computed value from the parent element by default; others do not (source: mdn-css-cascade-introduction.md).

**Properties that inherit by default** include `font-family`, `font-size`, `font-weight`, `color`, `line-height`, `text-align`, `visibility`, `cursor`, `list-style`, and `letter-spacing` (source: mdn-css-cascade-introduction.md).

**Properties that do not inherit** include `margin`, `padding`, `border`, `width`, `height`, `background`, `display`, `position`, `overflow`, and `box-sizing` (source: mdn-css-cascade-introduction.md).

Directly targeted elements always override inherited styles, regardless of the inherited rule's specificity (source: mdn-css-specificity.md).

### The `all` property

The `all` shorthand sets nearly every CSS property at once back to a known state — initial, inherited, or from a specific origin. It is useful for resetting styles wholesale (source: mdn-css-cascade-introduction.md).
