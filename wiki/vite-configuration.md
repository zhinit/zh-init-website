# Vite Configuration

How `vite.config.ts` works, including conditional configs, async configs, and
environment variable loading.

## Config file

Vite resolves `vite.config.js` (or `.ts`, `.mjs`, `.mts`) from the project
root. ES module syntax is supported even without `"type": "module"` in
`package.json`. (source: vite-configuration.md)

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
})
```

`defineConfig` provides TypeScript intellisense. Alternatively use the
`satisfies` operator:

```ts
import type { UserConfig } from 'vite'

export default {
  // ...
} satisfies UserConfig
```

(source: vite-configuration.md)

## Config loaders

Three ways Vite loads the config file:

1. **Rolldown (default)** — bundles config into a temporary file in
   `node_modules/.vite-temp`. May cause issues in monorepos with external
   tsconfig references.
2. **Module runner** (`--configLoader runner`) — transforms on-the-fly, no
   temp file. Does not support CJS.
3. **Native** (`--configLoader native`) — uses the runtime's own TS support
   (e.g., `node --experimental-strip-types`). Modules won't auto-update.

(source: vite-configuration.md)

## Conditional config

Export a function to branch on `command`, `mode`, `isSsrBuild`, or `isPreview`:

```js
export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return { /* dev config */ }
  } else {
    return { /* build config */ }
  }
})
```

`command` is `'serve'` during dev (`vite`, `vite dev`, `vite serve`) and
`'build'` for production. (source: vite-configuration.md)

## Async config

The function can be async:

```js
export default defineConfig(async ({ command, mode }) => {
  const data = await asyncFunction()
  return { /* config */ }
})
```

(source: vite-configuration.md)

## Environment variables in config

`.env` files are **not** automatically loaded during config evaluation (because
`root` and `envDir` affect which files load). Use `loadEnv` explicitly:

```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
  }
})
```

The third argument to `loadEnv` is the prefix filter. Pass `''` to load all
variables regardless of prefix. (source: vite-configuration.md)

## Server options

Key dev server options:

| Option | Default | Purpose |
|--------|---------|---------|
| `server.host` | `'localhost'` | `'0.0.0.0'` or `true` for LAN access |
| `server.port` | `5173` | Auto-increments if taken |
| `server.strictPort` | `false` | Exit if port taken |
| `server.open` | `false` | Open browser on start |
| `server.proxy` | — | Proxy API requests |
| `server.hmr.overlay` | `true` | Error overlay in browser |
| `server.cors` | localhost only | CORS configuration |
| `server.https` | — | TLS + HTTP/2 |
| `server.warmup` | — | Pre-transform files |

(source: vite-server-options.md)

### Proxy example

```js
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4567',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

(source: vite-server-options.md)

### File system security

`server.fs.strict` (default `true`) restricts serving files outside the
workspace root. `server.fs.deny` blocks `.env`, `.git/`, and certificate files
by default. (source: vite-server-options.md)

## VS Code debugging

When using the default config loader, breakpoints in `vite.config.ts` need a
source map location override:

```json
// .vscode/settings.json
{
  "debug.javascript.terminalOptions": {
    "resolveSourceMapLocations": [
      "${workspaceFolder}/**",
      "!**/node_modules/**",
      "**/node_modules/.vite-temp/**"
    ]
  }
}
```

(source: vite-configuration.md)

## See also

- [[vite]] — overview
- [[vite-environment-variables]] — .env files, modes
- [[vite-react-setup]] — React plugin configuration
