# Color relationships and roles

ID: `knowledge.color`. Layer: L3. Related: `visual.palette`, `visual.saturation`, `visual.temperature`, `visual.brightness`, `visual.emphasis`. Nature: design-system practice and ByTaste interpretation.

## Entry points and mechanism

"The colors are right but it does not resemble the reference," "I like vivid color but not a glaring whole page," or "the dark design lacks depth" need not mean changing the palette. Color perception depends on background, area, adjacent colors, and roles; an isolated swatch does not represent a whole page.

Help distinguish: "Do you prefer a few vivid accents, or large colored backgrounds too?" This establishes usage, not a particular hue.

## Concepts and candidate approaches

| Concept | Relationship to establish | Boundary |
| --- | --- | --- |
| Hue, lightness, chroma/saturation, temperature | Which change carries the preference | Name the color space when using tools; parameters from different models are not one perceptual scale |
| Palette relationships | Monochromatic variation, analogous color, complementary contrast, multiple colors | Offer combinations without claiming one harmony is inherently sophisticated |
| Semantic roles | Canvas, surface, text, border, action, state, emphasis | Brand color cannot replace every role; identical values may have different semantics |
| Pairing and context | Backgrounds behind text/icons and the effect of layering | Do not judge contrast from isolated swatches; transparent colors depend on underlying content |
| Area and distribution | Large color fields, accents, and repetition | Compare whole-page composition without mechanically applying 60/30/10 or another quota |
| Theme mapping | Equivalent roles across required light/dark themes | Preserve semantics while changing values; dark mode is not inversion |
| Data color, as needed | Unordered categories, sequential magnitude, diverging values around a midpoint | Preserve data meaning before choosing colors; aesthetic preference does not justify mixing encodings |

## Rules, tokens, and checks

Guidelines define regions, roles, pairings, and emphasis scope; tokens hold actual values and aliases. For example, "concentrate accent color on current selections and related indicators rather than filling every container" is a project candidate, not a global ban. Current decisions still constrain the actual colors.

Show swatches alongside real text, surfaces, and state combinations. Check actual pairs under adopted standards. Do not add a second theme unless needed. Label demonstration data in graphics, check series mapping, and do not fabricate statistical conclusions.

## Sources and counterexamples

[Spectrum color](https://spectrum.adobe.com/foundations/color/color) treats color as relationships among roles, backgrounds, and themes. Its restriction to Spectrum values is a brand rule, not a requirement for every ByTaste project. [Carbon data palettes](https://v10.carbondesignsystem.com/data-visualization/color-palettes/) distinguish data relationships; this older documentation is a conceptual reference, with current component documentation needed for implementation.

Misuse: turning a reference's bright buttons into a fluorescent whole-page background; making error, selection, and success indistinguishable in the name of brand consistency; claiming whole-page preference fit from a palette screenshot.
