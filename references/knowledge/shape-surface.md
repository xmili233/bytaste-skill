# Shape, surfaces, and optical detail

ID: `knowledge.shape-surface`. Layer: L3. Related: `visual.shape`, `visual.depth`, `visual.texture`, `visual.decoration`. Nature: design-system practice and ByTaste interpretation.

## Entry points and mechanism

"Toy-like," "cheap cards," "paper-like," or "it looks misaligned" may concern contour, depth, material, or optical weight. Equal geometric values do not guarantee visual coherence; decoration amount does not establish clarity of depth.

Distinguish, for example, clean flat boundaries from a perceptible foreground/background relationship. Allow local combinations; "quality" does not automatically mean shadows or glass.

## Concepts and tradeoffs

| Concept | What guidelines should explain | Candidates and boundaries |
| --- | --- | --- |
| Contour language | Which objects have angular, rounded, or organic forms | Controls and large containers may differ; one radius need not fit everything |
| Nesting | Relationships among outer shells, inner surfaces, and spacing | Inspect actual boundary/radius relationships instead of applying a universal subtraction formula |
| Boundary language | How line weight, contrast, dividers, and fill group content | Space, lines, and surfaces are alternatives; choose by preference rather than layering everything |
| Surfaces and depth | Canvas, inset areas, raised objects, and overlays | Flat styles can still convey depth; shadows are not the only method |
| Stacking order | Which objects actually cover others | Define visual depth separately from platform stacking; raising z-index is not a substitute for refinement |
| Material and light | Texture scale, transparency, blur, lighting direction, and scope | Follow current style needs and inspect against images, text, and different underlying content |
| Optical coordination | Icon weight, glyph area, edges, baselines, and visual centers | Distinguish mathematical from optical alignment; local corrections must not become arbitrary pixel shifts |

## Implementation and preview

Guidelines own contour, nesting, light, and depth usage; tokens own radii, line widths, shadows, and other adopted values. Real textures need asset sources. State changes and motion across surfaces reference interaction.md.

Inspect relevant flat, nested, or overlapping combinations without adding dialogs merely to demonstrate materials. Zoom out for overall weight, then inspect edges. For transparency, use representative backgrounds and check fit with the choice.

## Sources and counterexamples

[Atlassian Elevation](https://atlassian.design/foundations/elevation/) distinguishes surfaces, shadows, stacking, and light/dark behavior. Use those relationships without adopting its fixed level count and usage restrictions. [IBM pictogram usage](https://www.ibm.com/design/language/iconography/pictograms/usage/) gives optical-centering examples; its dimensions are not universal rules.

Misuse: identical shadows on every panel to look premium; mechanically using large equal radii in nested containers; copying light-theme shadows into dark contexts; declaring equal icon weight from equal bounding boxes.
