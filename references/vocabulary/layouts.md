# Layout categories

Read for the current ambiguity; do not ask the user to complete the whole list. Composition, content architecture, and visual style are separate, combinable axes. Liking a specimen does not select an entire product architecture.

## Composition approaches

| ID | Name and recognizable relationship | May express | Boundaries and misuse |
| --- | --- | --- | --- |
| `layout.reading` | Single-column reading: continuous organization on one main axis | Continuity, calm, focus | Body text must not stretch indefinitely across wide screens; do not automatically reduce content |
| `layout.centered` | Centered focus: space around a primary subject | Concentration, stability, clarity | Do not center every paragraph or substitute blank space for content |
| `layout.editorial` | Editorial: varied spans for headings, body, graphics, and notes | Refinement, narrative, rhythm | Variation must not disrupt reading relationships |
| `layout.grid` | Equal-column grid: similar content shares alignment and dimensions | Order, rationality, neatness | Do not force differently weighted content into equal emphasis |
| `layout.modular` | Mixed-span / Bento: a shared base grid with key content spanning rows/columns | Richness, modularity, distinction | Do not draw cards first and invent content to fill them |
| `layout.split` | Split / two-column: related content side by side at equal or primary/secondary proportions | Comparison, directness, tension | Do not force columns just to fill the screen when content is unrelated |
| `layout.asymmetric` | Asymmetric balance: position, area, and whitespace balance weight | Flexibility, expression | Random misalignment is not intentional composition |
| `layout.immersive` | Full-bleed media: work or imagery leads, interface supports | Immersion, emotion, distinction | Needs actual assets or an explicit generation request, not an empty hero |

These are discussable tendencies, not a guarantee that everyone interprets feelings the same way. Adopt local relationships if appropriate, such as editorial heading proportions without its image layout.

## Content and page architecture

Apply only when real content relationships or an explicit page task exist. For an unknown product, explain structures in guidelines without generating the corresponding business features.

| ID | Architecture | Prerequisite |
| --- | --- | --- |
| `architecture.shell` | Navigation shell + main content | Real regions or pages to switch among |
| `architecture.list-detail` | List/detail | Selecting an object from a collection to inspect details |
| `architecture.supporting-pane` | Main region + supporting pane | Tools or supplementary information attached to the current subject |
| `architecture.feed` | Feed / collection | Ongoing arrangement or browsing of similar content |
| `architecture.canvas` | Canvas + tools | A real editable object to operate on |
| `architecture.steps` | Stepwise flow | An explicit task with actual stage relationships |

List/detail and main/supporting-pane structures differ: details can often stand alone, while support depends on the current subject. See [Material-derived canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts) for the distinction without copying platform implementation.

## Guidance and recording

Present differences only when the task needs a composition choice and the user has difficulty expressing it. Explain side-by-side comparison versus sequential reading without requiring terminology first. The agent chooses the method of help.

Record region, content relationships, and relevant IDs when adopting a choice. A guidelines page demonstrating three layouts teaches relationships; it does not mean the product adopts three architectures. See [layout rules](../layout.md) for values and rule format.
