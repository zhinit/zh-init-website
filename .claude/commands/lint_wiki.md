# lint_wiki

Audit the wiki for quality and consistency. Report findings first; only fix
once the user approves.

Usage: `/lint_wiki`

## Checks

Start from `wiki/index.md`, then walk the pages and check:

1. **Contradictions** — claims in one page that conflict with another. Name both
   pages and the conflicting claims.
2. **Orphan pages** — pages with no inbound `[[wiki-link]]` from any other page.
3. **Missing pages** — concepts referenced or linked (`[[...]]`) that have no
   page of their own.
4. **Broken links** — `[[wiki-links]]` pointing to nonexistent pages, plus
   pipe-syntax or otherwise malformed links.
5. **Stale claims** — claims that may be outdated given newer sources in
   `raw/md/` or newer entries in `wiki/log.md`.
6. **Format violations** — pages that don't follow the page format in CLAUDE.md
   (missing **Summary** / **Sources** / **Last updated** headers, or no
   **Related pages** section).
7. **Uncited claims** — factual claims with no `(source: ...)` reference.
8. **Separation-of-concerns violations** — project decisions, design opinions,
   or site-specific implementation details in wiki pages. Red flags: "for this
   project", "we should use", "our site/design", references to specific
   component implementations. Design decisions belong in `docs/`, site content
   in `content/`; a wiki page may carry a one-line pointer, never the content.

## Output

Report findings as a numbered list grouped by check, each with the page(s)
involved and a suggested fix. **Do not edit any files** until the user picks
what to fix.

After applying approved fixes, append a one-line entry to `wiki/log.md`
describing what was corrected.
