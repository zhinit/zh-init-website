# Hacker News Moderation

How HN ranking, flagging, and moderation work. For shadow-banning specifics,
see [[hn-shadow-bans]]. For submission rules, see [[hacker-news]].

## Ranking Algorithm

Stories rank based on points divided by a power of time elapsed, plus
additional factors including user flags and moderator intervention. User karma
does not directly affect post ranking (source: hn-official-faq.md).

HN is not purely algorithmic — rankings reflect votes, time, flags, anti-abuse
systems, account weighting, and manual moderator action (source:
syften-hn-posting-guide.md).

## Flagging and Vouching

- At **31 karma**, users can flag submissions. Flags act as "super" downvotes
  and push content toward [dead] status. Flagged content displays a "[flagged]"
  tag (source: hn-undocumented-features.md).
- At **31 karma**, users can also **vouch** for [dead] submissions/comments. A
  vouch restores rank and can counteract flags (source:
  hn-undocumented-features.md).
- At **501 karma**, users can downvote comments. Comments start at 1 point with
  a minimum of -4. Downvotes are unavailable on comments less than 24 hours old
  and cannot target direct replies to your own comments (source:
  hn-undocumented-features.md).

## Flame-War Detector

Software automatically downweights "overheated discussions," particularly when
comment counts significantly exceed submission scores (source:
hn-undocumented-features.md).

## Second-Chance Pool

Moderators occasionally rescue underperforming posts by resetting submission
timestamps. This pool is visible at `/pool` (source:
hn-undocumented-features.md).

## Implicit Downranking

Several content types are implicitly penalized in rankings:

- **Posts without URLs** — submissions without links face visibility penalties
  (source: hn-undocumented-features.md)
- **Tutorials** — downranked by moderators for gratifying intellectual curiosity
  less effectively (source: hn-undocumented-features.md)
- **Politics and diversity topics** — tend toward rapid flagging (source:
  hn-undocumented-features.md)

## Edit and Delete Limits

- Posts and comments are editable within **2 hours** (source:
  hn-undocumented-features.md)
- Deletion requires no replies within this window (source:
  hn-undocumented-features.md)
- Votes can be reversed within **1 hour**; afterward they are permanent (source:
  hn-undocumented-features.md)

## Anti-Voting Manipulation

HN employs voting ring detection. Manipulated submissions are prevented from
reaching the front page. Direct linking combined with upvote requests violates
community norms (source: hn-undocumented-features.md).

## Moderators

Dan Gackle (dang) is the primary full-time moderator. His comment history
provides a pseudo-log of moderation activities. Scott Bell also moderates.
Contact: hn@ycombinator.com — for genuine issues only, not promotion requests
(source: hn-undocumented-features.md, syften-hn-posting-guide.md).

See also: [[hacker-news]], [[hn-shadow-bans]]
