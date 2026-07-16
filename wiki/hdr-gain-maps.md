# HDR Gain Maps

The mechanism that lets one image file adapt to both HDR and SDR displays.
For HDR fundamentals, see [[hdr-images]]. For which software supports gain
maps, see [[hdr-browser-support]].

## The Concept

A gain map adds HDR information to an SDR image: the file carries a regular
(R,G,B) set for each pixel plus an extra "gain"/brightness level per pixel.
Software that supports HDR decodes the gain map to boost brightness; older
software ignores it and shows the SDR image
(source: scottstuff-end-of-srgb-hdr-images-2026.md). The photo adapts
optimally to any display — HDR, limited HDR, or SDR — with the creator in
control of both renditions (source: gregbenz-iso-21496-1-gain-maps.md).

Compared to tone mapping (automatic adaptation of a gain-map-less HDR
image), a properly encoded gain map offers more consistently high quality:
it includes the artist's input for an optimal SDR, allows local adaptation
pixel by pixel, and does not vary from one browser to the next
(source: gregbenz-apple-hdr-iso-gain-map.md).

## The Three Legacy Encodings

Apple, Adobe, and Google (Android) all used somewhat different gain map
encodings — conceptually similar but not interchangeable. The Adobe and
Android specs are nearly identical (Android adds a redundant "GContainer"
header); Apple's format is more unique and not fully documented, with
several unique metadata values (source: gregbenz-iso-21496-1-gain-maps.md).
The practical result: an HDR photo captured on iPhone could be uploaded to
Instagram from an iPhone but not from an Android device, and vice versa
(source: gregbenz-apple-hdr-iso-gain-map.md).

## The ISO 21496-1 Standard

ISO 21496-1 is the official gain map standard that resolves the format
split. Apple calls it "Adaptive HDR"
(source: gregbenz-apple-hdr-iso-gain-map.md). It is most similar to the
Adobe/Android spec, with one significant difference: metadata lives in the
codestream rather than in XML (source: gregbenz-iso-21496-1-gain-maps.md).
The technique Apple documented was proposed for standardization as
ISO/NP 21496-1, with Apple committing to license essential patents
(source: apple-developer-applying-apple-hdr-effect.md).

Images can be dual-encoded with both ISO and a legacy XMP encoding for
maximum compatibility (source: gregbenz-iso-21496-1-gain-maps.md). Gain
maps apply conceptually to all the important file types (JPG, AVIF, HEIC,
JXL, DNG) (source: gregbenz-apple-hdr-iso-gain-map.md).

## Apple's Gain Map Format

Apple's HDR gain map is an 8-bit, single-channel luminance map stored as
auxiliary image data (type `urn:com:apple:photo:2020:aux:hdrgainmap`),
untagged, linear, encoded with the Rec. 709 transfer function, at 1/4 the
resolution of the original image
(source: apple-developer-applying-apple-hdr-effect.md).

Decoding without Apple SDKs: validity is signaled by the
`HDRGainMapVersion` metadata key and 32-bit float values under MakerNote
keys `33` and `48`, which feed a published piecewise-linear formula that
yields stops, then linear headroom (`headroom = 2^max(stops, 0)`). To
apply: resize the gain map to the image, linearize both, then per pixel

```
hdr_rgb = sdr_rgb * (1.0 + (headroom - 1.0) * gainmap)
```

producing a linear HDR image where 1.0 is reference white and the peak
value is no greater than the headroom
(source: apple-developer-applying-apple-hdr-effect.md).

## Encoding and Transcoding Tools

- **libultrahdr** — Google-backed open-source C++ library/CLI supporting
  encoding, decoding, and transcoding (resize, crop, mirror, compress) of
  JPG gain maps; AVIF/HEIF gain map support planned for 2026
  (source: gregbenz-hdr-display-photo-software.md).
- **libvips** supports JPG gain maps via libultrahdr; **wasm-vips** adds
  client-side encoding; **Sharp** (Node.js) adds server-side encoding via
  libvips; **ImageMagick** added libultrahdr support behind a compile flag
  (source: gregbenz-hdr-display-photo-software.md).
- Adobe Lightroom (Classic v14, Cloud v8, Mobile v10) and Camera RAW v17
  create ISO gain maps on export with "HDR output" and "maximize
  compatibility" checked; JPG is the most consistently supported format
  (source: gregbenz-iso-21496-1-gain-maps.md).

Legacy-format images likely remain supported for a long time, but
re-encoding to ISO can increase support (e.g. Apple never added support for
the Adobe/Android spec) (source: gregbenz-iso-21496-1-gain-maps.md).
