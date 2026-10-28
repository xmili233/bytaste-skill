# Layout, hierarchy, and spatial relationships

Read when defining layout rules or creating/modifying previews and product interfaces. LAY-01 through LAY-08 are concrete layout requirements under the [default quality baseline](visual-quality.md). Apply them to the current subject without waiting for the user to request hierarchy. Content, platform, and preferences determine composition and values.

## Establish the subject and content relationships first

- Guidelines preview: fonts, colors, parameters, rules, component states, and motion are the content; generic specimens explain relationships.
- Explicit product page: use existing or requested content and functionality; ask only about essential gaps.
- Unknown product: once the [required style input](discovery.md#required-style-input-before-design) exists, guidelines can proceed while page architecture remains unknown; do not invent business features or require a full product interview.

Before layout, briefly describe primary information, supporting information, auxiliary notes, grouping, and action scope in the relevant guidelines. A guidelines overview foregrounds styling; a parameter inspection area may foreground parameters. Branding, version numbers, and decoration do not automatically deserve the strongest emphasis.

## Default layout requirements

| ID | Required relationship | Failure cues and applicability |
| --- | --- | --- |
| `LAY-01` Justified priority | Visual emphasis matches content importance through relative scale, weight, tone, position, whitespace, and grouping | Decoration or arbitrary imagery dominates the subject; regions with different responsibilities compete indiscriminately. A heading need not always be largest |
| `LAY-02` Scoped hierarchy | Whole-page, regional, and component hierarchies connect; peers retain peer relationships | Local hints accidentally dominate the page; forced focal points undermine comparison. Equal-weight items and regional focal points are valid |
| `LAY-03` Clear grouping and belonging | Labels sit near their content; related objects share cues; distinct groups remain recognizable | A label appears to belong to the next group, or a background falsely groups unrelated objects. Spacing, containers, headings, or boundaries can all group |
| `LAY-04` Ordered alignment and proportions | Related/comparable objects share appropriate alignment lines; space supports primary and secondary roles | Edges/baselines drift unintentionally, support areas crowd out main content, fixed ratios clip content. Optical adjustment and asymmetric composition are allowed |
| `LAY-05` Meaningful spacing and rhythm | Part, within-group, between-group, and regional spacing express relationships; repeated content follows consistent logic | Identical gaps blur relationships; whitespace or leading is arbitrary. When space is the main grouping cue, groups are usually farther apart, without a fixed multiplier |
| `LAY-06` Order compatible with meaning | Where sequence matters, visual reordering, linear reading, and operation preserve correct relationships | Narrow layouts separate explanations from their objects; keyboard order conflicts with meaningful visual order. Multiple valid orders are possible; no fixed reading path is imposed |
| `LAY-07` Works with real content and sizes | Representative text, imagery, counts, and relevant widths retain hierarchy and necessary content | Works only with short English copy; replacement imagery shifts balance; smaller text conceals layout defects. Necessary two-dimensional tables/canvases may scroll locally |
| `LAY-08` Structure survives layers and change | Occlusion is clear; current focus/content is not accidentally hidden; transitions and final states remain coherent and stable | Misordered overlays, fixed bars covering targets, animation leaving gaps/overlap. Flat styling still needs correct stacking; see motion.md |

Visual priority is not an HTML heading level. Structural semantics follow content. Do not simply enlarge every heading or remove hierarchy from one independent region because another already has a focal point.

## Choose strategies and compositions as needed

[Layout categories](vocabulary/layouts.md) offer composition and content-architecture options, not a default theme. Consider:

- Figure/ground and negative space: what must be seen, and which spaces connect or separate content; more whitespace is not automatically better.
- Balance and center of gravity: how symmetry/asymmetry, weight, and position interact; equal areas need not have equal visual weight.
- Proportion and scale: relative sizes of text, imagery, regions, and containers; no mandatory golden ratio or full-screen height.
- Repetition, variation, and rhythm: where to retain order, and where content or expression calls for changes in spans and spacing.
- Reading path: how entry, sequence, and subsequent destinations connect; F/Z patterns are not universal laws.

Check content and container space needs before selecting breakpoints and column counts. Use the project's layout technology. Fonts, colors, and imagery also change these relationships; check [cross-layer effects](concepts.md#check-cross-layer-effects), not only grid-line alignment.

## Turn these into project rules

In design.md, state content roles, alignment lines, space allocation, grouping, and adaptation conditions, referencing existing tokens for values. Separate baseline sources from implementation recommendations. Do not copy the entire baseline table into every project.

```text
Rule: LAYOUT-SAMPLE-01
Baseline source: ByTaste v0.5.0, LAY-01 / LAY-03 / LAY-07.
Subject: Typography region of a guidelines page, not a product page.
Relationship: Actual type specimens are primary, role names secondary, parameters auxiliary.
Implementation recommendation: Specimens share a left alignment line; parameters move below when width is insufficient.
Values: Existing text roles and spacing tokens; new values remain recommendations.
Check: Real CJK/Latin content and long parameters retain clear priority and grouping at relevant widths, without clipping necessary content.
Preference status: Concrete implementation not yet evaluated; do not invent a user decision ID.
```

Different layouts may share tokens without sharing component structures. Page overrides state rule ID, scope, and real evidence; one local comment does not change every page. Follow the [verification agreement](verification.md) for checks and incomplete items.

## Sources and limits

[NN/g visual hierarchy](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/), [Atlassian spacing](https://atlassian.design/foundations/spacing/), and [Apple layout](https://developer.apple.com/design/human-interface-guidelines/layout) support priority, grouping, alignment, and adaptation. [IBM layout](https://www.ibm.com/design/language/layout/tips-and-techniques/) and [Every Layout](https://every-layout.dev/layouts/) provide composition and implementation approaches, not brand values to copy.

For web relationships, sequence, and reflow, see [1.3.1](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html), [1.3.2](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence), and [1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html). Formal applicability and exceptions are in [token numerical boundaries](tokens.md#numerical-values-and-standards); these local checks do not establish full conformance.
