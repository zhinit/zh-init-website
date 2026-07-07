# Vercel Rewrites

A rewrite routes a request to a different destination without changing the URL
in the browser. Defined in `vercel.json` at the project root.
(source: vercel-rewrites.md)

## SPA catch-all

SPAs with client-side routing (e.g. React Router's `BrowserRouter`) need a
catch-all rewrite. Without it, direct navigation to any route other than `/`
returns 404 because Vercel looks for a file at that path and finds nothing.
(source: vercel-vite-framework.md, vercel-404-troubleshooting.md)

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Rewrites are checked after the filesystem — if a file exists at the source
path (JS, CSS, images in `dist/`), it is served directly. Only paths that
don't match a real file fall through to the rewrite.
(source: vercel-json-configuration.md)

If `cleanUrls` is `true` in `vercel.json`, omit the `.html` extension:
`/index.html` becomes `/`. (source: vercel-vite-framework.md)

## Two rewrite types

1. **Same-application** — route requests to different pages within the project
   (friendly URLs, A/B testing, device/country-specific content).
2. **External origin** — forward requests to an API or website outside the
   project. Vercel acts as reverse proxy.
   (source: vercel-rewrites.md)

## Syntax

Each rewrite object:
- `source` (string, required) — incoming path pattern
- `destination` (string or object, required) — target path or URL
- `has` (array, optional) — conditions that must be met (headers, cookies, query, host)
- `missing` (array, optional) — conditions that must NOT be met
(source: vercel-json-configuration.md)

### Path parameters and wildcards

```json
{ "source": "/docs/:path*", "destination": "/help/:path*" }
```

Named segments (`:path`) and wildcards (`:path*`) capture and forward path
parts. (source: vercel-rewrites.md)

### Regular expressions

```json
{ "source": "^/articles/(\\d{4})/(\\d{2})/(.+)$", "destination": "/archive?year=$1&month=$2&slug=$3" }
```

Named capture groups also supported: `(?<name>pattern)` → `$name`.
(source: vercel-rewrites.md)

## External origin caching

Since April 6, 2026, Vercel honors `cache-control`, `CDN-Cache-Control`, and
`Vercel-CDN-Cache-Control` from upstream servers by default (new projects).
Older projects must opt in with header `x-vercel-enable-rewrite-caching: 1`.
Opt out with value `0`. (source: vercel-rewrites.md)

## Service rewrites

Target a Vercel Service instead of a URL:

```json
{ "source": "/api/:path*", "destination": { "service": "my_backend" } }
```

Services are internal by default and only receive public traffic via a
top-level rewrite. (source: vercel-rewrites.md)

## Framework note

For frameworks with native routing (Next.js, Astro, SvelteKit), prefer the
framework's rewrite mechanism. Use `vercel.json` rewrites when the framework
doesn't provide native routing — e.g. plain Vite SPAs.
(source: vercel-rewrites.md)

## See also

- [[vercel-custom-domains]] — domain setup, DNS, SSL
- [[vite-production-builds]] — Vercel deployment basics
