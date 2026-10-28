# Context adaptation and design continuity

ID: `knowledge.adaptation`. Layer: L5. Related: `visual.geometry`, `visual.density`, `visual.typography`, `visual.brightness`, `visual.motion`. Nature: design-system practice and ByTaste interpretation.

## Entry points and mechanism

"Only the homepage looks good," "it loses its character when smaller," "long content breaks it," or "dark mode looks like another product" may indicate guidelines for only one static specimen. Separate visual relationships that must persist from implementation values that change with context.

For a real tradeoff, ask which should survive a narrow view: image presence, text density, or their relative priority. Without a clear conflict, follow the current direction rather than asking the user to decide every breakpoint.

## Concepts and handling

| Context | Preserve | Possible changes |
| --- | --- | --- |
| Viewport and container | Content priority, reading order, important image focus | Wrap, change columns, stack, resize, or crop; derive breakpoints from relationships |
| Content length and count | Content completeness and role distinctions | Grow, group, and wrap; do not invent or remove content to fit a specimen |
| Language and fonts | Brand character, role hierarchy, necessary meaning | Adjust fallbacks, apparent glyph scale, leading; add variants only for relevant languages |
| Required themes | Semantic roles and emphasis relationships | Remap lightness, surfaces, and boundaries rather than invert colors |
| Input and motion preferences | State meaning and primary feedback | Touch/keyboard alternatives and reduced motion; reuse defined interactions without changing business behavior |
| Pages and regions | Currently selected design language | Use content-appropriate layouts; local exceptions need scope/evidence instead of global copying |

## Documentation and preview

In existing `design.md`, describe "invariant → trigger condition → change → checking sample." Values reference tokens; behavior references interaction.md. Do not create a separate specification per device, language, and theme, or prebuild every combination.

Example recommendation: "Type specimens remain primary; when specimens and parameters no longer fit side by side, parameters move below. Preserve role order and hierarchy while allowing line-length and spacing changes." Determine actual breakpoints with fonts and long parameters.

Choose samples affected by the change: CJK/fallback and long headings for a font change, key crop widths for a new hero image, combined states for state changes. Check required contexts, not a universal device matrix or an automatically multilingual project.

## Sources and counterexamples

[Material canonical layouts](https://m3.material.io/foundations/layout/canonical-examples/overview) show arrangements of the same content relationships in different spaces; [Spectrum typography](https://spectrum.adobe.com/foundations/typography/typography-system) addresses language/platform differences; [Atlassian elevation](https://atlassian.design/foundations/elevation/) discusses depth across themes. ByTaste uses adaptation relationships without copying platform breakpoints or brand styling.

Misuse: only shrinking type on mobile; making every page the homepage for consistency; adding an unrequested dark-mode toggle; turning one local compactness comment into a global density change.
