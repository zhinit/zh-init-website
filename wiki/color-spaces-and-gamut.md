# Color Spaces and Gamut

Definitions and comparisons of the color spaces relevant to the web: sRGB,
Display P3, and the Rec. standards. For how browsers apply these to images,
see [[browser-color-management]]. For brightness beyond standard white, see
[[hdr-images]]. For CSS syntax, see [[css-colors]].

## Core Definitions

- **Color space** — an environment in which colors can be defined and
  compared. RGB-type spaces use red, green, and blue parameters; print
  workflows often use CMYK-type spaces
  (source: webkit-improving-color-on-the-web.md).
- **Color profile** — data defining what a device's color space is, used to
  convert between spaces. The ICC was formed in 1993 by a group of vendors
  to standardize the format. Profiles can be written to a file or embedded
  directly into an image, which tells a computer what the image's color
  values actually mean (source: webkit-improving-color-on-the-web.md).
- **Gamut** — the range of colors a device can process or a color space can
  define (source: webkit-improving-color-on-the-web.md).
- **Color depth** — the number of distinct colors that can be represented
  within a gamut, e.g. 8 bits per channel = 16,777,216 colors. Depth is
  independent of gamut. Insufficient depth produces visible banding in
  gradients (source: webkit-improving-color-on-the-web.md).

Numeric color values in isolation don't inherently mean anything — a color
space is the standard that translates numeric values into measurable optical
results, including which red/green/blue primaries are meant and what "white"
means (source: scottstuff-end-of-srgb-hdr-images-2026.md).

## sRGB

The color space of the typical computer monitor for the decade-plus before
wide-gamut displays, and the space HTML and CSS were defined to work in
(source: webkit-improving-color-on-the-web.md). By the early 2000s LCD
displays standardized on sRGB, which is closely related to HDTV's Rec. 709
standard (same primaries, somewhat different gamma curve); some time before
2010 the web converged on sRGB as the default
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

sRGB's limitation is a relatively narrow gamut: it cannot represent most of
the greens people can see, is not great with reds or pure blues, and cannot
represent the large brightness ranges modern cameras capture
(source: scottstuff-end-of-srgb-hdr-images-2026.md). In the WebKit shoe-photo
example, fewer than half the pixels of a wide-gamut photograph were
accurately representable on an sRGB display
(source: webkit-improving-color-on-the-web.md).

## Display P3

A wide-gamut space supported by modern Apple displays. Initially described
as ~25% wider than sRGB, corrected to about 50% larger by volume (~1.2M Lab
units vs ~0.8M) (source: webkit-improving-color-on-the-web.md). It is a
variant of the DCI P3 cinema standard
(source: webkit-improving-color-on-the-web.md). DCI-P3 proper uses an odd
whitepoint and unusual gamma; Display P3 uses the D65 whitepoint (same as
sRGB and Rec. 2020/2100) with a transfer curve similar to sRGB's
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

Display P3 is a superset of sRGB. Its expansion is greatest in saturated
greens (and reds, yellows, purples); blues expand much less
(source: webkit-wide-gamut-color-css-display-p3.md).

Hardware with P3 support includes iPhone 7 and newer, MacBook Pro since
2016, iMac since 2015, iPad Pro since 2016, and the LG UltraFine 5K
(source: webkit-wide-gamut-color-css-display-p3.md).

## The Rec. Standards

- **Rec. 709** — the "plain" HDTV standard, almost the same as sRGB
  (source: scottstuff-end-of-srgb-hdr-images-2026.md).
- **Rec. 2020** — the 4K SDR standard. Its primaries differ from
  Rec. 709/sRGB, so 4K devices can display colors basic HD cannot. Since
  display technology flows from TVs to monitors, modern displays aren't
  natively sRGB anymore (source: scottstuff-end-of-srgb-hdr-images-2026.md).
- **Rec. 2100** — the 4K HDR standard, basically a superset of Rec. 2020
  (source: scottstuff-end-of-srgb-hdr-images-2026.md).

Rec. 2020/2100 is a much bigger gamut than P3, so with enough bit depth,
encoding into Rec. 2020/2100 makes better use of source material that has
the extra gamut (source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Converting Between Spaces

Because color spaces have an underlying mathematical model, colors can be
translated between them. Conversion involves some possible loss of
precision, and converting from a wide-gamut to a narrow-gamut space can lose
data (source: scottstuff-end-of-srgb-hdr-images-2026.md). Colors outside a
display's gamut get squished into colors it can show; e.g. all fully-red
values between 241/255 and 255/255 in Display P3 are indistinguishable when
shown in sRGB (source: webkit-improving-color-on-the-web.md).
