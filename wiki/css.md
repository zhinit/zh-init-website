# CSS

CSS is a styling language organized into modules, each covering a specific area
of the language. Each module reflects how CSS specifications are structured,
providing properties, at-rules, and data types for its domain.
(source: mdn-css-guides-index.md)

## Module Map

### Cascade & Inheritance

- [[css-cascade]] — how the cascade, specificity, inheritance, and layers
  determine which styles apply. CSS Cascade and Inheritance defines rules for
  assigning values through cascading and inheritance.
  (source: mdn-css-guides-index.md)

### Selectors

- [[css-selectors]] — 60+ selectors, 5 combinators, pseudo-classes,
  pseudo-elements. CSS Selectors are patterns to select elements; CSS
  Pseudo-elements represent abstract portions of the render tree.
  (source: mdn-css-guides-index.md)

### Values & Units

- [[css-values-units]] — data types, length/angle/time units, math functions,
  viewport units. CSS Values and Units defines data types, values, units, and
  formal grammar. CSS Easing Functions control transformation of values.
  (source: mdn-css-guides-index.md)

### Box Model

- [[css-box-model]] — content, padding, border, margin; box-sizing. CSS Box
  Model defines margin and padding properties along with height, width, and
  border properties. CSS Box Sizing enables specifying how elements fit their
  content or layout context. (source: mdn-css-guides-index.md)

### Display

- [[css-display]] — display property values, inner/outer types, multi-keyword
  syntax. CSS Display defines how the CSS formatting box tree is generated from
  the document element tree. (source: mdn-css-guides-index.md)

### Position

- [[css-position]] — static, relative, absolute, fixed, sticky positioning. CSS
  Positioned Layout defines coordinate-based positioning and offsetting schemes.
  (source: mdn-css-guides-index.md)

### Flexbox

- [[css-flexbox]] — one-dimensional layout (row or column), alignment, space
  distribution. CSS Flexible Box Layout is a box model optimized for user
  interface design and one-dimensional layout. (source: mdn-css-guides-index.md)

### Grid

- [[css-grid]] — two-dimensional layout, tracks, areas, auto-placement,
  subgrid. CSS Grid Layout excels at dividing a page into major regions or
  defining relationships between parts. (source: mdn-css-guides-index.md)

### Colors

- [[css-colors]] — color spaces, functions, manipulation, accessibility. CSS
  Colors defines colors, color types, color blending, and opacity. CSS Color
  Adjustment provides automatic color adjustment for user preferences like
  "Dark Mode". (source: mdn-css-guides-index.md)

### Fonts & Text

- [[css-fonts-text]] — font properties, @font-face, variable fonts, text
  styling. CSS Fonts defines font-related properties and how font resources are
  loaded. CSS Text covers text manipulation like line breaking, justification,
  alignment, and whitespace handling. CSS Text Decoration provides features like
  underlines, text shadows, and emphasis marks.
  (source: mdn-css-guides-index.md)

### Custom Properties

- [[css-custom-properties]] — CSS variables (var(), @property), inheritance,
  animation. CSS Custom Properties creates variables using `--*` syntax. CSS
  Properties and Values API registers new CSS properties with defined data
  types. (source: mdn-css-guides-index.md)

### Responsive Design

- [[css-responsive]] — media queries, container queries, responsive patterns.
  CSS Media Queries tests and queries viewport values and browser/device
  features. CSS Conditional Rules provides media and support queries for
  conditional styling. CSS Containment covers containment and container queries.
  (source: mdn-css-guides-index.md)

### Transitions & Animations

- [[css-transitions-animations]] — transitions, keyframe animations,
  scroll-driven animations, view transitions. CSS Animations animates CSS
  property values over time using keyframes. CSS Transitions creates gradual
  transitions between different CSS property values. CSS Scroll-driven
  Animations animates property values along a scroll-based timeline. CSS View
  Transitions provides animated transitions between different document states.
  (source: mdn-css-guides-index.md)

### Anchor Positioning

- [[css-anchor-positioning]] — declarative element tethering without JavaScript.
  CSS Anchor Positioning defines features that allow elements to tether
  together. (source: mdn-css-guides-index.md)

### Logical Properties

- [[css-logical-properties]] — flow-relative properties for
  internationalization. CSS Logical Properties and Values provides logical rather
  than physical direction/dimension mappings.
  (source: mdn-css-guides-index.md)

## Modules Without Dedicated Pages

The following modules appear in the MDN CSS Guides index but do not have their
own wiki pages yet: (source: mdn-css-guides-index.md)

- **Backgrounds & Borders** — properties for adding backgrounds, borders,
  rounded corners, and box shadows
- **Filter Effects** — process an element's rendering before display (blur,
  color intensity, etc.)
- **Transforms** — transform elements in two-dimensional or three-dimensional
  space
- **Compositing & Blending** — define how element background layers blend
  together
- **Shapes** — geometric shapes and float area control
- **Masking** — masking and clipping operations for partially or fully hiding
  visual elements
- **Overflow** — handle scrollable overflow in visual media
- **Scroll Snap** — define snap positions for scrolling content
- **Multi-column Layout** — divide content across multiple columns
- **Writing Modes** — support for various international writing modes
- **Nesting** — nesting selectors within other selectors
- **Containment** — containment and container queries
- **Scoping** — CSS scoping and encapsulation mechanisms for Shadow DOM
