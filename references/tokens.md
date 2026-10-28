# UI token agreement

Use when establishing or changing visual parameters. Tokens express reusable values; layout intent, component choices, and interaction rules remain in design guidelines.

An unknown product purpose does not prevent establishing visual tokens once the [required user-provided aesthetic basis](discovery.md#required-style-input-before-design) exists. If style input is missing, ask and wait; do not invent a palette or type system. Offer viewable implementation recommendations within the supplied direction, distinguishing primitive values, semantics, and layout rules without assuming business architecture.

Recognizing "warm, low-saturation, compact" establishes a preference direction, not selected numerical values. Label derived values as candidates and validate with content. Untouched dimensions cannot automatically become adopted values through classification.

## Establish the maintained source first

1. If a theme, CSS variables, component-library tokens, or native design resources exist, read and reuse them. Document paths and usage in `design.md`; do not create parallel data just to standardize a format.
2. Otherwise, create a separate token file suited to the stack. For cross-tool exchange, default to `design.tokens.json` with typed values following the [DTCG Format Module 2025.10](https://www.designtokens.org/TR/2025.10/format/).
3. Record how product code and the preview each consume tokens. If JSON is maintained, generate CSS or other outputs from it or define a clear synchronization method. Mark product integration as pending when absent; preview usage does not establish product usage.

Record decisions about values or style under the [decision agreement](decisions.md), linking affected token roles without copying the entire value table into history. `design.md` owns usage rules and `interaction.md` owns behavior; neither duplicates palettes, typography values, or complete stylesheets. Previews reference the same CSS/theme source or a snapshot derived at generation time, recording source and update status under the [preview agreement](design-preview.md).

DTCG specifies an exchange format, not design suitability. It is published by the Design Tokens Community Group, not a W3C Recommendation. Using some of its types does not mean a fully compatible conversion tool has been implemented.

## Layer only as needed

- **Primitive values:** reusable palette, dimension, or font values.
- **Semantic roles:** body text, secondary text, page background, primary action, error state, spacing between related content, and similar roles. Interfaces should prefer semantic roles.
- **Component values:** introduce only when a component needs a stable, independently adjustable contract, such as table row height. Do not automatically create a token for every CSS property.

Identical primitive values do not imply identical meaning. An error color and brand color that happen to match still have different roles. Conversely, avoid many aliases for details that have no independent variation needs.

## Parameter families to consider

| Family | Relationships to express |
| --- | --- |
| Color | Text/background pairs, actions/states, boundaries/focus; color must not carry meaning alone |
| Typography | Body, headings, explanations, data, and other roles; fallback fonts, weight, size, leading, and tracking as needed |
| Space and layout | Within/between-group gaps, gutters, column gaps, reading width, primary/secondary target and minimum widths; [layout rules](layout.md) own proportions and adaptation conditions |
| Size and shape | Control size, hit area, border, and radius; distinguish visual size from operable area |
| Layers | Scrims, stacking order, shadows, or surface differences; define only layers that exist |
| Motion | By default, timing, curves, or springs needed for feedback, state, entry, and layout changes; choose under [motion guidance](motion.md), with triggers, exits, and alternatives in interaction.md |

Icons and images usually need asset sources, style, and usage rules rather than conversion into tokens. Create responsive, light/dark, or brand variants only for current needs, without predefining unrequested combinations.

## Preserve relationships that tokens cannot express

Concepts in the [concept map](concepts.md) do not each need a token. Font size can be parameterized; "long headings should wrap," "where the accent color is concentrated," "which image subject must remain visible," and "which pages retain the leading expression" belong in rules. Assets need sources and usage; state transitions belong in interaction.md.

Conversely, abstract principles without actual type, color, and spacing values cannot reliably produce a design. Check that rules reference real sources and that values have clear uses.

## Numerical values and standards

The [default quality baseline](visual-quality.md) requires recognizability, clear relationships, and complete content, not a universal type-size count, 8px grid, golden ratio, or line height. Choose parameters based on fonts, content, platform, and existing constraints; common practice is not automatically a mandatory industry standard.

When a project adopts WCAG 2.2, check the applicable level and criterion scope. In addition to text contrast and pointer targets below, note:

- [1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) applies to visual information needed to identify controls/states and understand graphics, generally requiring 3:1 against adjacent colors with exceptions. It does not apply to every decorative border or require 3:1 between nonadjacent states.
- [1.4.12 Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing) requires no loss of content/function when supported properties are overridden to line height 1.5 times font size, paragraph spacing 2 times, letter spacing 0.12 times, and word spacing 0.16 times, accounting for language exceptions. It does not require these as author defaults.
- [1.4.10 Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html) checks vertically scrolling content at an equivalent width of 320 CSS pixels and horizontally scrolling content at an equivalent height of 256 CSS pixels, without information/function loss or two-dimensional scrolling. Preserve exceptions for content whose use or meaning requires two dimensions; do not break tables or canvases.
- [2.4.11 Focus Not Obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) at AA requires that the focused component not be entirely hidden by author-created content, not that it be completely unobscured. Minimize occlusion without confusing minimum and enhanced requirements.

The [WCAG 2.2 Recommendation](https://www.w3.org/TR/WCAG22/) is normative; Understanding pages provide explanations. These checks do not constitute a complete conformance evaluation.

## Minimal format example

These values illustrate structure only. **They are not ByTaste's default palette or spacing.** A complete project determines its own values from content, references, and adoption status.

```json
{
  "primitive": {
    "color": {
      "ink": {
        "$type": "color",
        "$value": { "colorSpace": "srgb", "components": [0.1, 0.12, 0.16], "alpha": 1 }
      },
      "paper": {
        "$type": "color",
        "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "alpha": 1 }
      }
    },
    "space": {
      "regular": { "$type": "dimension", "$value": { "value": 1, "unit": "rem" } }
    }
  },
  "color": {
    "text": {
      "primary": { "$type": "color", "$value": "{primitive.color.ink}" }
    },
    "surface": {
      "page": { "$type": "color", "$value": "{primitive.color.paper}" }
    }
  },
  "space": {
    "group": {
      "$type": "dimension",
      "$value": "{primitive.space.regular}"
    }
  }
}
```

For example, a rule could use `color.text.primary` for body text, `color.surface.page` for the canvas, and `space.group` between groups, pointing to real files. Dots separate reference-path segments; they are not part of individual token names.

## Checks

- JSON parses; types, values, and units match; reference targets exist without cycles.
- Every new token has a real semantic role or consumer. Check semantic differences before deleting equal values.
- Preview names, values, and actual rendering correspond. State the applicable width for responsive values; copied parameters must not masquerade as current values.
- Check actual text/background pairs, including necessary states and themes, not just the palette.
- Compare guidelines, tokens, and code bindings to detect files that exist but are not integrated.
- Apply size thresholds according to platform and adopted standards; do not mix CSS pixels, native points, and physical pixels.

For web projects adopting WCAG 2.2 AA, ordinary text usually needs at least 4.5:1 contrast, and qualifying large text at least 3:1; see [SC 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) for scope and exceptions. Pointer targets need at least 24 × 24 CSS pixels or a specified exception; see [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html). Do not present arbitrary control-size recommendations as these standards.

These checks concern tokens directly, not full accessibility conformance. Keyboard use, focus, semantics, feedback, and reflow still require inspection of real pages.
