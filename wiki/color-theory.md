# Color Theory

Principles for selecting and combining colors in web interfaces. The practical
skill is not memorizing color wheel relationships — it's modifying one base
color to generate an entire palette through HSB adjustments.

## The HSB framework

The most actionable color model for UI work. HSB (Hue, Saturation, Brightness)
maps to how humans perceive color better than RGB or hex values (source:
learnui-color-ui-design-practical-framework.md).

### Darker variations
- Decrease brightness
- Increase saturation
- Shift hue toward luminosity minimums (red, green, blue)

### Lighter variations
- Increase brightness
- Decrease saturation
- Shift hue toward luminosity maximums (cyan, magenta, yellow)

This mirrors real-world light behavior: shadowed areas on colored surfaces show
reduced brightness paired with heightened saturation. A single theme color can
generate hover states, selected states, disabled states, and text colors
through HSB adjustments alone (source:
learnui-color-ui-design-practical-framework.md).

Traditional color theory ("use a split complementary palette") is "about 0%
predictive" of good design. Color variations — modifying one base color — is
the fundamental skill (source: learnui-color-ui-design-practical-framework.md).

## The 60-30-10 rule

60% dominant color, 30% secondary color, 10% accent color. This distribution
creates visual balance without requiring complex theory (source:
uxpin-color-theory-web-ui-design.md).

## Color schemes

Standard relationships on the color wheel (source:
uxpin-color-theory-web-ui-design.md):

- **Monochromatic**: one hue in different shades/tints. Simple and cohesive.
- **Analogous**: adjacent hues on the wheel. Harmonious, low contrast.
- **Complementary**: opposite hues. High contrast, draws attention.
- **Split-complementary**: a hue plus the two colors adjacent to its complement.
- **Triadic**: three hues equidistant on the wheel.

## Emotional associations

Colors trigger psychological responses (source:
uxpin-color-theory-web-ui-design.md, clay-web-design-guide-2026.md):

- Warm colors (red, orange, yellow) create urgency and energy
- Blue communicates trust and professionalism
- Green suggests health, finance, nature
- Black/dark tones convey luxury and sophistication

These are cultural, not universal. Test with target audiences.

## Contrast for hierarchy

Color creates visual hierarchy by making some elements advance and others
recede. A high-contrast CTA button pops against a muted background (source:
webflow-visual-hierarchy-principles.md). "Color combinations can be used to
influence what visitors see more of on a website" (source:
uxpin-color-theory-web-ui-design.md).

## Accessibility requirements

Non-negotiable contrast ratios per WCAG 2.1 (source:
onething-typography-web-design-guide-2026.md, clay-web-design-guide-2026.md):

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18px+ or 14px+ bold): 3:1 minimum
- Never rely solely on color to convey meaning

See [[accessibility]].

## Style guides

Document color choices in a style guide to maintain consistency. Show
application examples without overwhelming with technical detail. Design tokens
(named variables) allow global updates across a system (source:
uxpin-color-theory-web-ui-design.md, clay-web-design-guide-2026.md).

## 2026 trends

Bright, saturated "dopamine design" palettes are replacing muted/minimal
tones. Neon gradients, high-contrast pairings, and Y2K-influenced hues are
prominent. Dark mode with light/dark toggle is now standard (source:
figma-web-design-trends-2026.md).

## Related pages

- [[color-psychology]] — empirical research on color's effects on cognition, emotion, behavior
- [[color-and-cognition]] — effects on intelligence, creativity, memory, learning
- [[color-and-relaxation]] — calming effects, stress reduction, physiological responses
- [[green-shades]] — shade-by-shade psychological effects of green
- [[visual-hierarchy]] — color as a hierarchy mechanism
- [[whitespace]] — background color and negative space
- [[accessibility]] — contrast ratio requirements
- [[web-design-trends-2026]] — current color trends
