# Hacker News Shadow Bans

How shadow banning works on HN, how to detect it, and how to appeal. For
general moderation, see [[hn-moderation]]. For submission rules, see
[[hacker-news]].

## What Shadow Banning Is

When a user or domain is shadow-banned, all their posts and comments are
instantly marked [dead]. The content is invisible to other users unless those
users have **showdead** enabled in their profile settings. The banned user sees
their own content normally — they get no notification that they've been banned
(source: hn-undocumented-features.md).

## Three Ban Types

### User Banning

Affects an individual account. Can impact posts, comments, or both
independently. Causes include excessive self-promotion, rule violations, or
spam-like behavior (source: hamy-hn-shadow-ban-detection.md).

For accounts with a substantial history, moderators typically give warnings
before banning (source: hn-undocumented-features.md).

### Site/Domain Banning

An entire domain is banned when it's seen as too spammy or has too many
low-quality links. All submissions linking to that domain are instantly [dead]
(source: hn-undocumented-features.md).

### IP Banning

Occurs when a single IP address makes excessive requests. Can be tested by
accessing HN from a different network. HN offers a self-service unbanning
process via the FAQ (source: hamy-hn-shadow-ban-detection.md).

## How to Detect a Shadow Ban

### Check Your Posts

1. Open `https://news.ycombinator.com/submitted?id=YOUR_USERNAME` in a normal
   browser window.
2. Open the same URL in an incognito/private window (logged out).
3. If significantly fewer posts appear in incognito, your posts are being killed.

(source: hamy-hn-shadow-ban-detection.md)

### Check Your Comments

Same method with `https://news.ycombinator.com/threads?id=YOUR_USERNAME` —
compare logged-in vs incognito (source: hamy-hn-shadow-ban-detection.md).

### Check a Domain

Open `https://news.ycombinator.com/from?site=yourdomain.com` in both regular
and incognito windows. If posts are visible logged in but missing logged out,
the domain is banned (source: hamy-hn-shadow-ban-detection.md).

### Ask Someone with Showdead

Another user with **showdead** enabled in their HN profile can see [dead]
content and confirm whether your posts are marked as such (source:
hn-undocumented-features.md).

## Common Causes

- Account used **primarily** for self-promotion (posting only your own
  blog/site) (source: syften-hn-posting-guide.md)
- Soliciting upvotes or comments (source: hn-official-guidelines.md)
- Voting ring participation (source: hn-undocumented-features.md)
- New account showing signs of spam (source: hn-undocumented-features.md)
- Domain with too many low-quality submissions (source:
  hn-undocumented-features.md)

## How to Appeal

Email **hn@ycombinator.com**. This is the only recourse. There is no
self-service process for user or domain bans (IP bans have a separate
self-service flow) (source: hamy-hn-shadow-ban-detection.md,
hn-undocumented-features.md).

## Vouching

If a user has **31+ karma**, they can vouch for a [dead] submission or comment.
Vouching restores the content's rank and can counteract the effects of flags
(source: hn-undocumented-features.md). This means a single sympathetic user
can resurrect your killed post.

See also: [[hacker-news]], [[hn-moderation]]
