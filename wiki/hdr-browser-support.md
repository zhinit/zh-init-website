# HDR Browser and Platform Support

Where HDR photos actually display as HDR, as of early 2026. Mechanisms in
[[hdr-images]] and [[hdr-gain-maps]]; color management fundamentals in
[[browser-color-management]].

Dates matter on this page: support changed rapidly between 2024 and 2026,
and the sources span that window.

## Browsers

Roughly 95% of browsers offer HDR support (JPG gain maps and AVIF) on
capable monitors. JPG gain maps are 100% safe: even legacy browsers from
the 1990s show a nice SDR result
(source: gregbenz-hdr-display-photo-software.md).

- **Chrome / Chromium** (Edge, Brave, Opera, Arc, Vivaldi, etc.) — supports
  HDR AVIF and JPG with gain map, in both the ISO format and legacy
  Adobe/Google encodings; AVIF-with-gain-map sits behind a dev flag
  (source: gregbenz-hdr-display-photo-software.md,
  gregbenz-iso-21496-1-gain-maps.md).
- **Safari / WebKit** — had no HDR photo support in any format as of
  September 2024, called out as Apple's key gap since all iOS/iPadOS
  browsers use WebKit (source: gregbenz-apple-hdr-iso-gain-map.md). Support
  arrived with the v26 updates to macOS/iOS/iPadOS, which means every
  iPhone and iPad browser (even Firefox on iOS) now displays HDR
  (source: gregbenz-hdr-display-photo-software.md).
- **Firefox** — lacks HDR support on desktop and Android
  (source: gregbenz-hdr-display-photo-software.md).

## Operating Systems

- **Apple** (macOS 15+, iOS/iPadOS 18+) — ISO JPG gain map support in
  Photos, iMessage, Preview, Quick Look, and developer APIs; the native
  camera writes ISO gain maps to JPG/HEIF; the older Apple encoding remains
  supported. macOS 15 also added a brightness slider for third-party HDR
  monitors, previously exclusive to Apple displays
  (source: gregbenz-iso-21496-1-gain-maps.md,
  gregbenz-apple-hdr-iso-gain-map.md). As of January 2025, Apple's ISO
  gain map rendering was treated as a simple 3-stop HDR image rather than
  using the map as expected, giving inferior results to Chrome
  (source: gregbenz-iso-21496-1-gain-maps.md).
- **Windows** — all browsers except Firefox support HDR; setup can be
  complicated; File Explorer does not show HDR
  (source: gregbenz-hdr-display-photo-software.md).
- **Android** — all browsers except Firefox; Google Photos supports Ultra
  HDR JPG; camera captures HDR gain maps natively
  (source: gregbenz-hdr-display-photo-software.md).

There is no ICC standard for profiling monitors in HDR mode on any OS —
creating a custom profile loses HDR support
(source: gregbenz-apple-hdr-iso-gain-map.md).

## Websites and Services

- **Instagram / Threads** — HDR photos in posts (not Stories) on iOS,
  Android, and desktop browsers; HDR video in Reels
  (source: gregbenz-hdr-display-photo-software.md).
- **WordPress** — gain maps survive self-hosted uploads only via the
  "full" size option (avoiding transcoding); v6.8's HDR AVIF support is
  buggy, with full native support expected in v7.1
  (source: gregbenz-hdr-display-photo-software.md).
- **Discord** — HDR in desktop app and browser via HDR PNG encoded for P3
  or Rec2020 (sRGB not supported)
  (source: gregbenz-hdr-display-photo-software.md).
- **Facebook** — HDR video, not HDR photos
  (source: gregbenz-hdr-display-photo-software.md).
- Gain maps are stripped when uploading to most websites; open-source
  library support landing in late 2025 (see [[hdr-gain-maps]]) paves the
  way for wider adoption (source: gregbenz-hdr-display-photo-software.md).

## The Remaining Bottleneck

The browsers, OSes, monitors, cameras, and file formats all support HDR;
web infrastructure tools do not. Thumbnailers and resizers routinely drop
color profiles (Hugo, Immich, Slack), YouTube's HDR transcoder was broken
from late 2025, and Zoom is entirely Rec. 709
(source: scottstuff-end-of-srgb-hdr-images-2026.md). See
[[browser-color-management]] for the full pipeline picture.
