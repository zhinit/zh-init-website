# Vite Features

CSS handling, static assets, glob imports, web workers, and build optimizations.

## CSS

### Plain CSS

Importing `.css` injects content via `<style>` with HMR support. `@import`
inlining via `postcss-import` is pre-configured. Vite aliases work in CSS
`@import`. All `url()` references are automatically rebased.
(source: vite-features.md)

### PostCSS

PostCSS config (e.g., `postcss.config.js`) is auto-detected and applied to all
CSS. CSS minification runs after PostCSS. (source: vite-features.md)

### CSS Modules

Files ending in `.module.css` return a module object:

```js
import classes from './example.module.css'
element.className = classes.red
```

With `css.modules.localsConvention: 'camelCaseOnly'`, named imports work:

```js
import { applyColor } from './example.module.css'
```

Combine with pre-processors: `style.module.scss`. (source: vite-features.md)

### Pre-processors

Built-in support — just install the pre-processor:

```bash
npm add -D sass-embedded   # .scss, .sass
npm add -D less            # .less
npm add -D stylus          # .styl, .stylus
```

No Vite plugin needed. Vue `<style lang="sass">` works automatically.
(source: vite-features.md)

### Lightning CSS

Used for production CSS minification by default. Experimental option to use it
for all CSS processing:

```js
css: { transformer: 'lightningcss' }
```

(source: vite-features.md)

### Disabling injection

Use `?inline` to get processed CSS as a string without injecting:

```js
import styles from './bar.css?inline'
```

(source: vite-features.md)

## Static assets

Import returns resolved public URL:

```js
import imgUrl from './img.png'
```

Special queries:

| Query | Effect |
|-------|--------|
| `?url` | Explicit URL import |
| `?raw` | Import as string |
| `?worker` | Web Worker |
| `?worker&inline` | Inline Worker as base64 |
| `?worker&url` | Worker URL |

(source: vite-features.md)

## JSON

Direct import with tree-shakeable named exports:

```js
import { field } from './example.json'
```

(source: vite-features.md)

## Glob import

`import.meta.glob` for batch module imports:

```js
const modules = import.meta.glob('./dir/*.js')
// Lazy by default — each value is () => import(...)

const eager = import.meta.glob('./dir/*.js', { eager: true })
// Statically imported
```

Supports arrays, negative patterns (`!`), named imports (`{ import: 'setup' }`),
custom queries, and case-insensitive matching.

**Caveats:** Vite-only feature. Arguments must be string literals — no
variables or expressions. (source: vite-features.md)

## Web Workers

Standards-based (recommended):

```ts
const worker = new Worker(new URL('./worker.js', import.meta.url), {
  type: 'module',
})
```

Query-based:

```js
import MyWorker from './worker?worker'
const worker = new MyWorker()
```

(source: vite-features.md)

## WebAssembly

Direct ESM import:

```js
import { add } from './add.wasm'
```

Or manual initialization with `?init`:

```js
import init from './example.wasm?init'
init().then(instance => instance.exports.test())
```

TypeScript: enable `allowArbitraryExtensions` and create `.d.wasm.ts` files.
(source: vite-features.md)

## Build optimizations (automatic)

- **CSS code splitting** — async chunk CSS extracted into separate files, loaded
  before JS to prevent FOUC
- **Preload directives** — `<link rel="modulepreload">` generated for entry
  chunks and direct imports
- **Async chunk loading** — common chunk dependencies fetched in parallel with
  the requesting chunk
- **Chunk import maps** — maps chunk IDs to URLs, preventing cascading cache
  invalidation (`build.chunkImportMap: true`)

(source: vite-features.md)

## CSP (Content Security Policy)

`html.cspNonce` injects nonce attributes on `<script>`, `<style>`, and `<link>`
tags. Never allow `data:` for `script-src`. (source: vite-features.md)

## See also

- [[vite]] — overview
- [[vite-react-setup]] — React plugin, TypeScript
- [[vite-environment-variables]] — .env and modes
