# Browser Color Management

How browsers interpret color in images: tagged vs untagged, the sRGB
assumption, and where the pipeline still breaks. For the underlying color
space definitions, see [[color-spaces-and-gamut]]. For HDR specifics, see
[[hdr-images]] and [[hdr-browser-support]].

## Tagged Images: Color-Matching

WebKit color-matches all images on iOS and macOS: if an image has an
embedded color profile, the colors are matched to the display, whether
normal or wide gamut. This matters because many digital cameras don't use
sRGB in their raw format, so interpreting RGB values directly would produce
wrong colors. Nearly all image processing software can tag an image with a
profile, and many do it by default
(source: webkit-improving-color-on-the-web.md).

As of 2016, WebKit/Safari on Mac had operated in sRGB for years, while most
other browser engines operated in the *device color space* — passing color
values to the display hardware unprocessed
(source: webkit-improving-color-on-the-web.md). By 2026, all modern browsers
support ICC profiles properly and can display HDR content on HDR displays —
on Chrome, Edge, Firefox, and Safari, across macOS, Windows, iOS, Android,
and Linux (Wayland) (source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Untagged Images: The sRGB Assumption

If an image has no tagged profile, WebKit assumes it is sRGB. The stated
reason: generated artwork such as border and background images should match
colors defined in CSS — an untagged image's `rgb(255, 0, 0)` should match
the CSS `rgb(255, 0, 0)` (source: webkit-improving-color-on-the-web.md).

## Historical Context: Why Profiles Were Stripped

Safari added color profile support early, which meant Safari and non-Safari
users saw vastly different views of the same pages when images carried ICC
tags. The community "fix" was to publish everything as implicitly sRGB and
omit color tags entirely; tribal knowledge said there was no point using
color tags online. This worked but couldn't represent wide-gamut color
(source: scottstuff-end-of-srgb-hdr-images-2026.md).

## Serving Wide-Gamut Images

Converting a wide-gamut image into sRGB can be done a few ways and isn't
guaranteed to happen identically across browsers or platforms, so WebKit's
guidance is to convert images offline to control what users see, and serve
each display class its own file
(source: webkit-improving-color-on-the-web.md):

```html
<picture>
  <source media="(color-gamut: p3)" srcset="photo-wide.jpg">
  <img src="photo-srgb.jpg">
</picture>
```

The `color-gamut` media query accepts `p3` and `rec2020`, and also works in
stylesheets and `window.matchMedia`
(source: webkit-improving-color-on-the-web.md). Embedding a color profile
also adds to file size, another reason to serve sRGB where wide gamut isn't
supported (source: webkit-improving-color-on-the-web.md).

## Where the Pipeline Still Breaks (2026)

Browsers and monitors are no longer the bottleneck; server-side tooling is.
Almost everything that creates thumbnails from JPEGs historically ignored
color profiles, and even tools updated for new formats tend to drop profiles
when resizing, leaving drab images. Examples reported March 2026: Hugo's
image-resizing has no color profile support; Immich (through v2.4.x) strips
profiles from resized uploads; Slack does the same; YouTube's HDR transcoder
had been broken since late 2025; Zoom is entirely Rec. 709
(source: scottstuff-end-of-srgb-hdr-images-2026.md).
