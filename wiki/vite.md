# Vite

A build tool for modern web projects. Two parts: a dev server over native ES
modules with fast HMR, and a production build command using Rolldown.

## Architecture

The dev server serves source files as native ESM. Dependencies from
`node_modules` are pre-bundled with Rolldown into single modules (converting
CommonJS/UMD to ESM and collapsing internal modules for fewer HTTP requests).
Pre-bundled dependencies are cached in `node_modules/.vite` and strongly cached
by the browser with `max-age=31536000,immutable` headers.
(source: vite-dep-pre-bundling.md)

TypeScript is compiled with Oxc Transformer (~20-30x faster than `tsc`). HMR
updates reflect in under 50ms. Vite does not type-check — that's the IDE's and
`tsc --noEmit`'s job. (source: vite-features.md)

Production builds use Rolldown with automatic CSS code splitting, preload
directive generation, and async chunk loading optimization.
(source: vite-building-for-production.md)

## Current version

v8.1.2 as of 2026-06-30. Requires Node.js 20.19+ or 22.12+.
(source: vite-getting-started.md)

## Scaffolding a project

```bash
npm create vite@latest        # interactive
npm create vite@latest my-app -- --template react-ts  # direct
```

Templates: `react`, `react-ts`, `react-swc`, `react-swc-ts`, plus vanilla,
vue, preact, lit, svelte, solid, qwik variants.
(source: vite-getting-started.md)

## Project structure

`index.html` is the entry point — it sits at the project root, not inside
`public/`. Vite treats it as source code and resolves `<script type="module">`
references. URLs inside it are automatically rebased relative to the project
root. (source: vite-getting-started.md)

## Default npm scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

`vite preview` serves the `dist/` folder locally at `http://localhost:4173` for
testing production builds. It is not a production server.
(source: vite-deploying.md)

## Browser support

Dev assumes modern browsers (`esnext` transform target). Production targets
Baseline Widely Available (Chrome >=111, Edge >=111, Firefox >=114,
Safari >=16.4). Legacy support via `@vitejs/plugin-legacy`.
(source: vite-getting-started.md, vite-building-for-production.md)

## See also

- [[vite-react-setup]] — React plugin choice and TypeScript configuration
- [[vite-configuration]] — config file, defineConfig, conditional config
- [[vite-features]] — CSS, static assets, glob imports, web workers
- [[vite-environment-variables]] — .env files, modes, VITE_ prefix
- [[vite-production-builds]] — build targets, deployment, code splitting
