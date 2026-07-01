# CSS Selectors

CSS provides 60+ selectors, 5 combinators, pseudo-classes, and pseudo-elements
for matching elements to style rules. [mdn-css-selectors.md]

## Simple Selectors

A simple selector is a single condition: type, class, ID, attribute, or
pseudo-class. [mdn-css-selectors.md]

| Selector | Syntax | Matches |
|---|---|---|
| Type | `div`, `p` | Elements by node name |
| Universal | `*` | Any element |
| Class | `.active` | Elements with matching `class` attribute |
| ID | `#header` | Element with matching `id` attribute |
| Attribute | `[attr]`, `[attr="val"]` | Elements by attribute presence or value |

### Attribute selector variants

```css
[href]              /* has attribute */
[type="text"]       /* exact match */
[class~="warning"]  /* contains word */
[lang|="en"]        /* starts with value or value- */
[href^="https"]     /* starts with */
[src$=".png"]       /* ends with */
[title*="hello"]    /* contains substring */
[type="email" i]    /* case-insensitive match */
[type="email" s]    /* case-sensitive match */
```

[mdn-css-selectors.md]

## Combinators

Five combinators define relationships between selectors. [mdn-css-selectors.md]

| Combinator | Syntax | Meaning |
|---|---|---|
| Descendant | `A B` | B is a descendant of A |
| Child | `A > B` | B is a direct child of A |
| Next-sibling | `A + B` | B immediately follows A |
| Subsequent-sibling | `A ~ B` | B follows A (not necessarily immediately) |
| Column | `A \|\| B` | B is in the column defined by A (tables) |

```css
nav a { text-decoration: none; }          /* descendant */
ul > li { list-style: disc; }             /* child */
h1 + p { font-size: 1.2em; }             /* next-sibling */
h1 ~ p { color: gray; }                  /* subsequent-sibling */
col.selected || td { background: pink; }  /* column */
```

[mdn-css-selectors.md]

## Pseudo-classes

Pseudo-classes select elements based on state or position. They use a single
colon `:`. [mdn-css-selectors.md]

### State-based

`:hover`, `:active`, `:focus`, `:focus-visible`, `:focus-within`, `:visited`,
`:link`, `:target`, `:target-within`. [mdn-css-selectors.md]

### Structural

`:first-child`, `:last-child`, `:only-child`, `:nth-child(n)`,
`:nth-last-child(n)`, `:first-of-type`, `:last-of-type`, `:only-of-type`,
`:nth-of-type(n)`, `:nth-last-of-type(n)`, `:root`, `:empty`.
[mdn-css-selectors.md]

### Form-related

`:enabled`, `:disabled`, `:checked`, `:indeterminate`, `:default`, `:valid`,
`:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`,
`:read-only`, `:read-write`, `:placeholder-shown`, `:autofill`.
[mdn-css-selectors.md]

### Functional pseudo-classes

- **`:is()`** -- matches any selector in its list. Uses a **forgiving selector
  list**: invalid selectors in the list are ignored rather than invalidating
  the whole rule. [mdn-css-selectors.md]
- **`:where()`** -- same matching behavior as `:is()`, also a **forgiving
  selector list**, but contributes **zero specificity**. [mdn-css-selectors.md]
- **`:has()`** -- relational pseudo-class. Takes a **relative selector** (a
  selector relative to an anchor element). [mdn-css-selectors.md]
- **`:not()`** -- negation pseudo-class. [mdn-css-selectors.md]

### Media-related

`:fullscreen`, `:picture-in-picture`, `:modal` (e.g., open `<dialog>`).
[mdn-css-selectors.md]

Note: the source also lists `:playing` and `:paused` are not present in the
MDN selectors reference as of this capture.

## Pseudo-elements

Pseudo-elements represent entities not in the DOM. They use double colons `::`.
[mdn-css-selectors.md]

| Pseudo-element | Purpose |
|---|---|
| `::before` | Insertable content before element |
| `::after` | Insertable content after element |
| `::first-line` | First formatted line |
| `::first-letter` | First letter of first line |
| `::placeholder` | Placeholder text in inputs |
| `::selection` | User-selected portion of text |
| `::marker` | List item marker |
| `::backdrop` | Box behind fullscreen/modal element |
| `::part()` | Shadow DOM parts exposed for external styling |

### View transition pseudo-elements

`::view-transition`, `::view-transition-old()`, `::view-transition-new()`,
`::view-transition-group()`, `::view-transition-image-pair()`.
[mdn-css-selectors.md]

Other pseudo-elements: `::file-selector-button`, `::cue`, `::slotted()`,
`::highlight()`, `::spelling-error`, `::grammar-error`, `::target-text`.
[mdn-css-selectors.md]

## CSS Nesting

The `&` nesting selector explicitly represents the parent rule's selector
within nested CSS rules. [mdn-css-selectors.md]

```css
.card {
  background: white;

  & .title {
    font-size: 1.5em;       /* matches .card .title */
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);  /* matches .card:hover */
  }

  .parent & {
    background: gray;       /* matches .parent .card */
  }
}
```

The `&` can appear at any position. When prepended it concatenates with the
parent; when another selector precedes it, the parent becomes a descendant
context. [mdn-css-selectors.md]

## Specificity Interaction

Different selector types contribute different weights to [[css-cascade]]
specificity:

- **ID selectors** (`#id`) -- highest specificity among simple selectors
- **Class selectors** (`.class`), **attribute selectors** (`[attr]`), and
  **pseudo-classes** (`:hover`) -- middle tier
- **Type selectors** (`div`) and **pseudo-elements** (`::before`) -- lowest tier
- **Universal selector** (`*`) -- zero specificity
- **`:where()`** -- explicitly contributes zero specificity [mdn-css-selectors.md]
- **`:is()`** and **`:not()`** -- take the specificity of their most specific
  argument [mdn-css-selectors.md]

See [[css-cascade]] for the full specificity algorithm and cascade ordering.

## Terminology

- **Selector list**: comma-separated list of selectors [mdn-css-selectors.md]
- **Simple selector**: a single condition (type, class, ID, attribute, pseudo-class) [mdn-css-selectors.md]
- **Compound selector**: sequence of simple selectors not separated by a combinator [mdn-css-selectors.md]
- **Complex selector**: compound selectors separated by combinators [mdn-css-selectors.md]
- **Relative selector**: selector relative to an anchor element, used in `:has()` [mdn-css-selectors.md]
- **Forgiving selector list**: invalid selectors are ignored rather than invalidating the entire list; used by `:is()` and `:where()` [mdn-css-selectors.md]
