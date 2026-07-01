# CSS Custom Properties

## Declaration

Two methods for declaring custom properties:

1. **`--` prefix syntax** — property names begin with `--` and are
   case-sensitive. Declaring on `:root` makes them globally available.
   (mdn-css-custom-properties.md, "Declaring Custom Properties")

2. **`@property` at-rule** — provides type checking, default values, and
   inheritance control beyond what `--` alone offers.
   (mdn-css-custom-properties.md, "Using @property At-rule";
   mdn-css-at-property.md, "Overview")

## Usage with var()

The `var()` function retrieves the value of a custom property.
(mdn-css-custom-properties.md, "Using var()")

**Fallback values.** `var()` accepts a fallback as its second argument.
Everything after the first comma is the fallback value, including any
additional commas. (mdn-css-custom-properties.md, "Comma-separated Fallback")

**Nested `var()` in fallbacks.** The fallback can itself contain `var()`:
`var(--theme-color, var(--default-color, blue))`.
(mdn-css-custom-properties.md, "Nested var() in Fallbacks")

`var()` takes exactly two arguments: the custom property name and a single
fallback value. (mdn-css-custom-properties.md, "Comma-separated Fallback")

## Inheritance

**`--` prefix properties always inherit.** A child element receives the value
from its nearest ancestor that defines the property.
(mdn-css-custom-properties.md, "With -- Prefix (Default)")

**`@property` with `inherits: false` prevents inheritance.** When a property
is registered with `inherits: false`, descendant elements that do not set the
property themselves get the `initial-value`, not the ancestor's value.
(mdn-css-custom-properties.md, "With @property";
mdn-css-at-property.md, "inherits (Required)")

## @property At-Rule

Part of CSS Houdini. Widely available since July 2024.
(mdn-css-at-property.md, "Overview")

### Required descriptors

- **`syntax`** — a string defining the allowed value type. Examples:
  `"<color>"`, `"<length>"`, `"<percentage>"`, `"<number>"`, `"<angle>"`,
  `"<time>"`, `"<transform-function>"`, `"*"` (universal/any value).
  Combinators: `|` for alternatives, `+` for space-separated lists, `#` for
  comma-separated lists.
  (mdn-css-at-property.md, "syntax (Required)")

- **`inherits`** — boolean (`true` or `false`) controlling whether the
  property inherits from parent elements.
  (mdn-css-at-property.md, "inherits (Required)")

### Optional descriptor

- **`initial-value`** — sets the default value. Required unless `syntax` is
  `"*"`. Must be computationally independent: cannot reference other
  properties or use `em` (no parent context). `rem`, `vh`, and other
  root-relative/viewport units are allowed.
  (mdn-css-at-property.md, "initial-value")

### Validity requirements

Both `syntax` and `inherits` are required in every `@property` rule. The
`initial-value` must parse as valid according to the `syntax` descriptor.
(mdn-css-at-property.md, "Validity Requirements")

## Typed Custom Properties and Animation

Unregistered custom properties (bare `--` syntax) cannot be interpolated by
the browser — they use discrete animation (instant swap).
(mdn-css-at-property.md, "Animated Gradient Progress Bar")

`@property` with a defined `syntax` enables smooth interpolation. The browser
understands the type and can animate accordingly. Example: registering
`--progress` as `<percentage>` allows `transition: --progress 0.5s ease` to
smoothly animate a gradient stop position.
(mdn-css-at-property.md, "Animated Gradient Progress Bar")

See [[css-transitions-animations]] for the general animation model.

## Invalid Value Handling

When `var()` substitution produces a value that is invalid for the property
where it is used, the property falls back to its **inherited value** (if the
property inherits) or its **initial value** (if it does not). The `var()`
fallback is *not* used in this case — that fallback only applies when the
custom property is not defined at all.
(mdn-css-custom-properties.md, "Invalid Custom Property Handling")

This behavior is called "invalid at computed value time" (IACVT).
(mdn-css-custom-properties.md, "Invalid Custom Property Handling")

With `@property`, if someone assigns a value that does not match the
registered `syntax`, it falls back to the `initial-value`.
(mdn-css-at-property.md, "Type-safe Design Tokens")

## JavaScript Integration

- **Read:** `getComputedStyle(element).getPropertyValue("--prop-name")`
  (mdn-css-custom-properties.md, "Reading Custom Properties")

- **Write:** `element.style.setProperty("--prop-name", "value")`
  (mdn-css-custom-properties.md, "Setting Custom Properties")

- **Remove:** `element.style.removeProperty("--prop-name")`
  (mdn-css-custom-properties.md, "Removing Custom Properties")

## Resolution Order

When the same custom property has multiple `@property` rules in CSS, the last
declaration wins (same as other at-rules).
(mdn-css-at-property.md, "Resolution Order")

`CSS.registerProperty()` in JavaScript takes precedence over `@property` in
CSS. Once registered via JS, subsequent `@property` rules for the same name
are ignored.
(mdn-css-at-property.md, "Resolution Order")

See [[css-cascade]] for the general cascade resolution model.

## See Also

- [[css-theming]] — using custom properties for light/dark theming, design
  token architecture, `light-dark()` function
