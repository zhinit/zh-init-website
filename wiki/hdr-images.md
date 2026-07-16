# HDR Images

High dynamic range for still photos: what it adds over SDR, transfer
functions, bit depth, and file formats. For the gain-map mechanism that
makes HDR shareable, see [[hdr-gain-maps]]. For current support, see
[[hdr-browser-support]]. For gamut (a separate axis), see
[[color-spaces-and-gamut]].

## What HDR Is

HDR basically adds "brighter than normal white" colors to the display. HDR
displays can show many colors SDR displays simply cannot
(source: scottstuff-end-of-srgb-hdr-images-2026.md). This is not the same
as the "stacked"/multi-exposure HDR photography style of the 2010s
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

The stock iPhone camera app produces HDR images with brighter colors than
sRGB can represent, tagged in a standard way; Google and Samsung Android
devices also capture and display HDR without the user being aware. Modern
dedicated cameras capture 12–14 stops of dynamic range, more than the ~8
stops sRGB can represent
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Headroom

Headroom is the ratio of the luminance of the image's brightest white to
the luminance of SDR white, in the image's native color space
(source: apple-developer-applying-apple-hdr-effect.md). It is measured in
stops (factors of 2) (source: apple-developer-applying-apple-hdr-effect.md).

Device examples: MacBook Pro and M4 iPad Pro XDR displays (1600 nits) offer
up to 4 stops; iPhone is limited to 3 stops despite also having a 1600-nit
OLED, because peak brightness is not allowed below ~80% screen brightness
(source: gregbenz-apple-hdr-iso-gain-map.md). Android headroom is limited
to 2.3 stops even where hardware would support 3–4
(source: gregbenz-hdr-display-photo-software.md).

## Transfer Functions: PQ and HLG

For HDR, two transfer functions replace the usual sRGB-style gamma
(source: scottstuff-end-of-srgb-hdr-images-2026.md):

- **HLG** (Hybrid Log Gamma) — similar to sRGB's gamma but curves away at
  higher brightness, making it relatively easy to map back onto SDR
  displays.
- **PQ** (Perceptual Quantizer) — a more cinema-focused function that is
  harder to map onto SDR but better at avoiding banding at lower bit
  depths.

HDR P3 is supposed to use PQ; Rec. 2100 can use either. Modern software
should convert between these without major quality loss, so browsers can be
fed a mix of Rec. 2100/HLG, Rec. 2100/PQ, and Display P3/PQ content
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Why 8 Bits Isn't Enough

8 bits per channel covers sRGB without visible banding for most people, but
stretching into a bigger color space (more gamut, more brightness) makes
the steps between adjacent values large enough to see. The fix is 10 or 12
bits per channel (source: scottstuff-end-of-srgb-hdr-images-2026.md).

## File Formats

JPEG and PNG are 8-bit standards, so they can't really represent HDR
content without banding (source: scottstuff-end-of-srgb-hdr-images-2026.md).
The JPEG workaround is a gain map — see [[hdr-gain-maps]].

Newer formats hold more than 8 bits of depth and compress dramatically
better: WebP, AVIF, JPEG XL, HEIC. Browser support as of March 2026 per
caniuse: WebP 95.9%, AVIF 94.7%, JPEG XL 12%, HEIC/HEIF 12%. AVIF and JPEG
XL also have lossless modes, replacing many PNG uses. HTML `<picture>`
fallbacks let a site serve newer formats and fall back to JPEG
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Tone Mapping

Viewing a simple HDR image (no gain map) on an SDR display triggers
automatic adaptation known as tone mapping. The result is often lower
quality and varies from one browser to the next. Apple's tone mapping was
very poor prior to macOS 15 / iOS 18 — highlights lacked detail, color
looked cartoonish — and those releases shipped a much better global tone
mapper across macOS, iOS, iPadOS, tvOS, watchOS, and visionOS including
Safari; Chrome's tone mapping remained slightly better
(source: gregbenz-apple-hdr-iso-gain-map.md). A properly encoded gain map
gives more consistently high quality than tone mapping because it includes
the artist's own SDR rendition, adapts pixel by pixel, and does not vary by
browser (source: gregbenz-apple-hdr-iso-gain-map.md).
