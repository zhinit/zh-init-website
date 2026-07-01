# Vite Production Builds

Build targets, base path, code splitting, multi-page apps, and deployment.

## Building

```bash
vite build
```

Uses `<root>/index.html` as entry point. Output goes to `dist/` by default
(configurable via `build.outDir`). (source: vite-building-for-production.md)

## Build targets

Default production targets: Chrome >=111, Edge >=111, Firefox >=114,
Safari >=16.4 (Baseline Widely Available). Minimum possible target: `es2015`.
Customize via `build.target`. (source: vite-building-for-production.md)

Vite handles syntax transforms only, not polyfills. Use
`@vitejs/plugin-legacy` for legacy browser support.
(source: vite-building-for-production.md)

## Public base path

Set `base` for nested deployments:

```js
export default defineConfig({
  base: '/my-app/',
})
```

Or via CLI: `vite build --base=/my-app/`. All JS-imported asset URLs, CSS
`url()`, and HTML asset references are rewritten. Use
`import.meta.env.BASE_URL` for dynamic URL construction.
(source: vite-building-for-production.md)

Relative base (`"./"` or `""`) generates relative URLs for each file — useful
when the deploy path is unknown. (source: vite-building-for-production.md)

## Rolldown configuration

```js
export default defineConfig({
  build: {
    rolldownOptions: {
      // https://rolldown.rs/reference/
    },
  },
})
```

(source: vite-building-for-production.md)

## Code splitting

Configure via `build.rolldownOptions.output.codeSplitting`. Automatic
optimizations: CSS code splitting, preload directives, async chunk parallel
loading, chunk import maps. (source: vite-features.md,
vite-building-for-production.md)

## Multi-page apps

Specify multiple HTML entry points:

```js
import { resolve } from 'path'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        nested: resolve(import.meta.dirname, 'nested/index.html'),
      },
    },
  },
})
```

(source: vite-building-for-production.md)

## Load error handling

`vite:preloadError` event fires when dynamic imports fail (e.g., after a new
deployment deletes old assets):

```js
window.addEventListener('vite:preloadError', (event) => {
  window.location.reload()
})
```

(source: vite-building-for-production.md)

## Watch mode

```bash
vite build --watch
```

Rebuilds on file changes. Config file changes require restart.
(source: vite-building-for-production.md)

## Preview

```bash
vite preview
```

Serves `dist/` at `http://localhost:4173`. For local testing only — not a
production server. (source: vite-deploying.md)

## Deployment

### Vercel

Auto-detects Vite. Install CLI (`npm i -g vercel`) and run `vercel`, or connect
a Git repo. Preview deployments for branches, production for main.
(source: vite-deploying.md)

### Netlify

CLI: `ntl init` then `ntl deploy --prod`. Or connect Git repo via dashboard.
(source: vite-deploying.md)

### GitHub Pages

Set `base` to `'/<REPO>/'` for repo pages. Use GitHub Actions workflow to build
and deploy. (source: vite-deploying.md)

### Cloudflare Pages

Workers: use `@cloudflare/vite-plugin` + `wrangler deploy`. Pages: connect Git
repo via dashboard. (source: vite-deploying.md)

### Other platforms

Firebase, Surge, Azure Static Web Apps, Render, Flightcontrol, Kinsta.
(source: vite-deploying.md)

## See also

- [[vite]] — overview
- [[vite-configuration]] — config file
- [[vite-features]] — build optimizations
