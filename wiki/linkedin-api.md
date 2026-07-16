# LinkedIn API — Programmatic Posting

How to share content on LinkedIn programmatically. For manual publishing, see
[[linkedin-articles]]. For format comparisons, see [[linkedin-content-types]].

## API Overview

LinkedIn has two relevant API surfaces for posting content:

1. **Posts API** (`/rest/posts`) — the current, recommended endpoint for
   creating and managing posts on behalf of members or organizations. Replaced
   the legacy UGC Posts and Shares APIs (source: linkedin-posts-api-docs.md).
2. **Share on LinkedIn** (consumer integration) — a simpler OAuth flow for
   personal profile sharing, using `w_member_social` scope (source:
   linkedin-share-on-linkedin-docs.md).

The legacy `/v2/ugcPosts` and `/v2/shares` endpoints are deprecated. LinkedIn
still accepts requests but no longer guarantees feature parity (source:
linkedin-posts-api-docs.md).

## Authentication

OAuth 2.0 with these scopes:

| Scope                  | Purpose                              |
|------------------------|--------------------------------------|
| `w_member_social`      | Post on behalf of authenticated member |
| `r_member_social`      | Retrieve member's posts (restricted) |
| `w_organization_social`| Post on behalf of an organization    |
| `r_organization_social`| Retrieve organization's posts        |

To get `w_member_social`: add the "Share on LinkedIn" product to your app via
the LinkedIn Developer Portal (source: linkedin-share-on-linkedin-docs.md).

Required headers for all Posts API calls:
- `X-Restli-Protocol-Version: 2.0.0`
- `Linkedin-Version: {YYYYMM}` (e.g., `202605`)

(source: linkedin-posts-api-docs.md)

## Rate Limits

| Throttle     | Limit                         |
|--------------|-------------------------------|
| Per member   | 150 requests/day (consumer)   |
| Per app      | 100,000 requests/day (consumer) |

(source: linkedin-share-on-linkedin-docs.md)

Access tokens expire in 60 days; refresh tokens in 365 days.

## Supported Content Types

The Posts API supports these content types for organic (non-sponsored) posts:

- Text only
- Images
- Videos
- Documents
- Articles (link sharing)
- MultiImage
- Polls

(source: linkedin-posts-api-docs.md)

## Sharing an Article/Link

The article content type is how you share a link to an external blog post. The
Posts API does not scrape URLs for metadata — you must set the title,
description, and thumbnail explicitly (source: linkedin-posts-api-docs.md).

```json
{
  "author": "urn:li:person:{id}",
  "commentary": "My latest blog post on system design.",
  "visibility": "PUBLIC",
  "distribution": {
    "feedDistribution": "MAIN_FEED",
    "targetEntities": [],
    "thirdPartyDistributionChannels": []
  },
  "content": {
    "article": {
      "source": "https://example.com/blog/system-design",
      "thumbnail": "urn:li:image:{image-id}",
      "title": "System Design Fundamentals",
      "description": "A practical guide to distributed systems."
    }
  },
  "lifecycleState": "PUBLISHED",
  "isReshareDisabledByAuthor": false
}
```

To include a thumbnail, first upload the image via the Images API to get an
image URN (`urn:li:image:{id}`) (source: linkedin-posts-api-docs.md).

## Creating a Text Post

```json
{
  "author": "urn:li:person:{id}",
  "commentary": "Sample text post.",
  "visibility": "PUBLIC",
  "distribution": {
    "feedDistribution": "MAIN_FEED",
    "targetEntities": [],
    "thirdPartyDistributionChannels": []
  },
  "lifecycleState": "PUBLISHED",
  "isReshareDisabledByAuthor": false
}
```

Successful creation returns `201` with the post URN in the `x-restli-id`
response header (source: linkedin-posts-api-docs.md).

## Sharing an Image

Three-step process:

1. Register the upload via the Assets API (or Images API for Posts API).
2. Upload the binary file to the returned `uploadUrl`.
3. Create the post referencing the asset URN.

(source: linkedin-share-on-linkedin-docs.md)

## Mentions and Hashtags

The `commentary` field supports inline mentions and hashtags:

- **Organization mentions**: `@[CompanyName](urn:li:organization:{id})` — must
  match the full organization name exactly, case-sensitive.
- **Member mentions**: `@[Name](urn:li:person:{id})` — partial name match
  (first or last) is sufficient.
- **Hashtags**: `#keyword` in the commentary text.

(source: linkedin-posts-api-docs.md)

## Limitations

- **No scheduling** — the Posts API has no native scheduling parameter or
  draft-to-publish workflow. Build your own scheduler or use a third-party
  service.
- **No article publishing** — the API creates posts (feed items that link to
  external URLs), not LinkedIn Articles. There is no public API to create
  LinkedIn Articles or Newsletters programmatically.
- **No URL scraping** — article metadata (title, description, thumbnail) must
  be set explicitly.

(source: linkedin-posts-api-docs.md)

## Consumer "Share on LinkedIn" Integration

A simpler integration path for personal profile sharing. Uses the
`/v2/ugcPosts` endpoint (legacy but still functional) with `w_member_social`
scope. Supports text, article/URL, image, and video shares (source:
linkedin-share-on-linkedin-docs.md).

Note: this documentation still references the deprecated UGC Posts API. For new
integrations, use the Posts API (`/rest/posts`) instead.

## Key Endpoints

| Endpoint                          | Method | Purpose                    |
|-----------------------------------|--------|----------------------------|
| `/rest/posts`                     | POST   | Create a post              |
| `/rest/posts/{urn}`               | GET    | Get a post by URN          |
| `/rest/posts?ids=List(...)`       | GET    | Batch get posts            |
| `/rest/posts?author={urn}&q=author` | GET  | Find posts by author       |
| `/rest/posts/{urn}`               | POST   | Update (PARTIAL_UPDATE)    |
| `/rest/posts/{urn}`               | DELETE | Delete a post              |

(source: linkedin-posts-api-docs.md)

See also: [[linkedin-content-types]], [[linkedin-articles]]
