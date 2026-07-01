# Vite Environment Variables

How `.env` files, the `VITE_` prefix, modes, and `import.meta.env` work.

## import.meta.env

Built-in constants available in all environments:

| Variable | Type | Description |
|----------|------|-------------|
| `import.meta.env.MODE` | string | Current mode |
| `import.meta.env.BASE_URL` | string | Base URL from `base` config |
| `import.meta.env.PROD` | boolean | Production (NODE_ENV) |
| `import.meta.env.DEV` | boolean | Development (NODE_ENV) |
| `import.meta.env.SSR` | boolean | Server-side rendering |

These are statically replaced at build time for tree-shaking.
(source: vite-env-and-mode.md)

## .env files

Loaded via `dotenv` in priority order:

1. `.env` — all cases
2. `.env.local` — all cases, git-ignored
3. `.env.[mode]` — mode-specific
4. `.env.[mode].local` — mode-specific, git-ignored

Mode-specific files override generic ones. Variables already set in the shell
have highest priority. Restart the dev server after changes.
(source: vite-env-and-mode.md)

## VITE_ prefix

Only variables prefixed with `VITE_` are exposed to client code:

```
VITE_API_URL=https://api.example.com   # accessible
DB_PASSWORD=secret                      # NOT accessible
```

`VITE_*` variables must not contain sensitive information — they are bundled
into client source code. (source: vite-env-and-mode.md)

Variable expansion is supported via `dotenv-expand`:

```
KEY=123
NEW_KEY=test$KEY    # evaluates to test123
ESCAPED=test\$KEY   # evaluates to test$KEY
```

(source: vite-env-and-mode.md)

## HTML replacement

Use `%ENV_NAME%` syntax in HTML files:

```html
<h1>Vite is running in %MODE%</h1>
<p>Using data from %VITE_API_URL%</p>
```

Non-existent variables are ignored (not replaced with undefined).
(source: vite-env-and-mode.md)

## Modes

Dev server defaults to `development` mode. `vite build` defaults to
`production` mode. Override with `--mode`:

```bash
vite build --mode staging
```

This loads `.env.staging`. (source: vite-env-and-mode.md)

### NODE_ENV vs mode

These are distinct concepts:

| Command | NODE_ENV | Mode |
|---------|----------|------|
| `vite build` | `"production"` | `"production"` |
| `vite build --mode development` | `"production"` | `"development"` |
| `NODE_ENV=development vite build` | `"development"` | `"production"` |

`import.meta.env.PROD`/`.DEV` reflect NODE_ENV. `import.meta.env.MODE` reflects
the mode. (source: vite-env-and-mode.md)

## TypeScript IntelliSense

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

No `import` statements in this file — they break type augmentation.
(source: vite-env-and-mode.md)

## Loading env in config

`.env` files are not available during config evaluation. Use `loadEnv`:

```js
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return { /* use env values */ }
})
```

(source: vite-configuration.md)

## See also

- [[vite-configuration]] — config file, loadEnv
- [[vite]] — overview
