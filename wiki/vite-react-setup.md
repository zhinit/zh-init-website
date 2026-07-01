# Vite React Setup

How to configure Vite for a React + TypeScript project.

## Plugin choice

Two official React plugins. Both provide Fast Refresh and automatic JSX runtime.

### @vitejs/plugin-react (default)

Uses Babel. Smaller install. Supports the React Compiler via
`reactCompilerPreset` and `@rolldown/plugin-babel`. Required peer deps for
React Compiler: `@rolldown/plugin-babel`, `babel-plugin-react-compiler`,
`@babel/core`. (source: vite-plugin-react.md)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### @vitejs/plugin-react-swc

Uses SWC. ~20x faster than Babel for transforms. Recommended when you don't
need Babel plugins. Disables esbuild in dev; default dev target is `es2020`
(configurable via `devTarget`). (source: vite-plugin-react-swc.md)

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})
```

Notable SWC plugin option — enables SWC during build too:

```js
react({ plugins: [['@swc/plugin-styled-components', {}]] })
```

### When to use which

Use `plugin-react` (Babel) when you need React Compiler, custom Babel plugins,
or MDX support via `@mdx-js/rollup`. Use `plugin-react-swc` for maximum dev
server speed when none of those apply. (source: vite-plugin-react.md,
vite-plugin-react-swc.md)

## TypeScript configuration

Vite transpiles TypeScript with Oxc Transformer. It does not type-check.
(source: vite-features.md)

### Required tsconfig.json settings

```json
{
  "compilerOptions": {
    "isolatedModules": true,
    "types": ["vite/client"],
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true
  }
}
```

- **`isolatedModules: true`** — required. Oxc transpiles per-file without type
  system context; this warns against `const enum` and implicit type-only
  imports. (source: vite-features.md)
- **`types: ["vite/client"]`** — provides types for `import.meta.env`,
  `import.meta.hot`, and asset imports (`.svg`, `.png`, etc.).
  (source: vite-features.md)
- **`target`** — Vite ignores this for transpilation; use `oxc.target` (dev)
  and `build.target` (production) instead. (source: vite-features.md)
- **`useDefineForClassFields: true`** — default for ES2022+ targets, matching
  TC39 spec. Some older libraries (e.g. `lit-element`) need `false`.
  (source: vite-features.md)

### Type-only imports

Use `import type` to prevent type-only imports from being bundled:

```ts
import type { T } from 'only/types'
export type { T }
```

(source: vite-features.md)

### Custom type overrides

To override default asset types (e.g., make `.svg` imports return React
components):

```ts
// vite-env-override.d.ts
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}
```

Reference this file before `vite/client` in your declaration file.
(source: vite-features.md)

### Environment variable types

Create `src/vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

Do not add `import` statements to this file — it breaks type augmentation.
(source: vite-env-and-mode.md)

## Fast Refresh requirements

Files should only export React components for Fast Refresh to work correctly.
Simple constant exports (strings, numbers) are allowed if their values don't
change. Use `eslint-plugin-react-refresh` or Oxlint's
`react/only-export-components` rule to enforce this.
(source: vite-plugin-react.md, vite-plugin-react-swc.md)

## JSX configuration

JSX is handled by Oxc Transformer. The automatic runtime is used by default.
Custom `jsxImportSource` can be set in the plugin options or inferred from
tsconfig. (source: vite-features.md, vite-plugin-react.md)

For injecting React imports globally (classic runtime):

```js
export default defineConfig({
  oxc: {
    jsxInject: `import React from 'react'`,
  },
})
```

(source: vite-features.md)

## SSR preamble

SSR apps that don't use `transformIndexHtml` must import the preamble in the
client entry:

```js
import '@vitejs/plugin-react/preamble'
// or for SWC:
import '@vitejs/plugin-react-swc/preamble'
```

(source: vite-plugin-react.md, vite-plugin-react-swc.md)

## See also

- [[vite]] — overview, architecture, scaffolding
- [[vite-configuration]] — config file details
- [[vite-features]] — CSS, assets, HMR
