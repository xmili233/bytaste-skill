# Design concept map: from feelings to rules

Read this to identify gaps in guidelines, interpret vague feedback, or organize a new specification. The six layers are ByTaste's working classification for retrieval, not the only industry taxonomy, a psychological scale, or a fixed execution order. Layers overlap and depend on one another; enter only branches relevant to this design.

## Six layers

| Layer | Question | Concepts and reading entry points |
| --- | --- | --- |
| L0 Expressive intent | What character should the design convey, and which choices are selected versus recommended? | User wording, visual character, expressive intensity, leading and supporting features, scope; [discovery](discovery.md), [style combinations](vocabulary/styles.md), [decisions](decisions.md) |
| L1 Content organization | What is being expressed, and how is the content related? | Content roles, semantic groups, priorities, narrative order, tone, length; [content expression](knowledge/content-expression.md). Navigation and page architecture apply only to an existing product; see [architecture categories](vocabulary/layouts.md) |
| L2 Spatial composition | How does this content occupy space? | Visual entry, center of gravity, figure/ground, proportions, grids, alignment, negative space, density, repetition, rhythm; [layout](layout.md), [density](knowledge/density.md), [grouping](knowledge/grouping.md) |
| L3 Visual language | Which visual means carry the expression? | [Typography](knowledge/typography.md), [color relationships](knowledge/color.md), [shape and surfaces](knowledge/shape-surface.md), [icons and imagery](knowledge/imagery.md); data graphics only when the content requires them |
| L4 Composition and time | Does the same language hold when elements combine or change? | Parts, slots, variants, combined states, composition patterns; [component grammar](knowledge/component-grammar.md). Triggers, choreography, continuity, exits, interruptions; [motion](motion.md), [interaction](interaction.md) |
| L5 Context and continuity | What stays and what changes with content, size, theme, or page? | Invariants, responsive reorganization, content length, language/font fallback, required themes, input methods, local overrides; [adaptation and continuity](knowledge/adaptation.md) |

The [default quality baseline](visual-quality.md) spans all six layers. Apply relevant requirements by default; it is not another layer or a style the user must select. Decision records own preference adoption status; baselines cite versions and IDs; implementation recommendations remain recommendations. These must not impersonate one another.

## Distinguish concepts often conflated

| Concepts | Difference and implication |
| --- | --- |
| Feeling, style, concept | "Warm" is a feeling; "editorial" is a possible combination; line length, color temperature, and material are actionable concepts. The first two do not uniquely determine the latter |
| Information architecture, layout | Architecture describes content/page relationships; layout describes their spatial presentation. An unknown product still allows guideline layouts, but not invented product architecture |
| Semantic hierarchy, visual emphasis | The first expresses importance and parent/child relationships; the second is a means of expression. HTML heading levels are implementation semantics; do not map all three mechanically |
| Typography, font | A font is material. Roles, scale, line length, leading, wrapping, and language adaptation together form typography |
| Palette, color system | A palette lists values. A color system also defines roles, pairs, area distribution, emphasis, and states |
| Visual depth, stacking order | Shadows and surfaces suggest depth; layout and platform layering control actual occlusion. Coordinate them without treating them as interchangeable |
| Variant, state, theme | Variants express role differences; states express current conditions; themes map to environments. Do not make a separate component for every combination |
| Token, rule | Tokens store reusable values. A relationship such as "these content types share an alignment line" cannot be expressed by values alone |

## Overall style comes from coordination

Identify which features carry the expression, which support it, and where these relationships appear. Typography, imagery, or color fields may lead; rich combinations can also be intentional. Do not impose "one strong feature per page" or a fixed style quota.

For example, "energetic imagery with calm text" can use vivid, large images and orderly typography without making every label, border, and icon equally animated. "Low decoration without emptiness" can come from clear groups, suitable line lengths, and rhythmic density, not invented filler.

Record the project's leading relationships and exceptions, not a permanent label for the user. Different references may supply type, composition, and imagery; check whether the combination competes for the same focus.

## Locate issues by symptoms rather than traversing a checklist

| User feedback | Inspect first | Do not jump to |
| --- | --- | --- |
| The new font still looks cheap | Type roles, line length, weight, mixed scripts, rhythm | Another expensive font |
| The colors are right, but it still does not resemble the reference | Color pairing, area, backgrounds, image tones | Replacing every color value |
| The same components still look patched together | Part proportions, variants, icon weight, surfaces, composition spacing | Rewriting the component library |
| The homepage works, but other pages drift | Leading features, invariants, local overrides | Copying the homepage layout everywhere |
| Desktop looks good, but mobile is cramped | Content reorganization, wrapping, cropping, retained hierarchy | Scaling the entire page down |
| It is polished, but not the feeling I like | L0 choice evidence and expressive means | Treating technical checks as user approval |

## From concepts to the current guidelines

1. **Locate the subject and sources.** Restore effective decisions; establish whether this is a guidelines preview, an explicit page request, or a local change. Check the [required aesthetic basis](discovery.md#required-style-input-before-design) before inventing a direction. Separate user choices, existing constraints, default quality, and unknowns.
2. **Choose relevant layers.** Check important omissions across six layers for complete guidelines; enter relevant branches from symptoms for local tasks. Reuse sufficient existing rules and leave unknown business architecture undecided.
3. **Form relationship rules.** Choose applicable strategies from entries and state objects, relationships, conditions, and exceptions. Identify leading and supporting expression when helpful. Concrete values within a chosen direction can be recommendations; changes to user direction cannot masquerade as implementation details.
4. **Connect sources and samples.** Use rule IDs in design.md to link real bases (baseline, user decision, or project constraint) and knowledge sources to actual tokens, assets, or interactions. Check representative combinations. Use the [specification format](design-spec.md), without a separate concept archive or duplicate decision statuses.

For example, an explicit request to "reserve the accent color for emphasis" could lead to a candidate rule: "The current selection and its indicator use the accent role; ordinary panels retain base surfaces." Tokens own color values; interaction.md owns selection behavior. The preview checks actual colored area and states, not just swatches. This remains an implementation recommendation, not proof that the user specified every detail.

Complete guidelines briefly indicate whether relevant layers have rules, recommendations, undecided items, or no application. Reuse existing structure rather than forcing six new headings. Concepts and entries provide explanations and tradeoff support; the [decision record](decisions.md) continues to own adoption status.

## Check cross-layer effects

Recheck only relationships actually affected. This table is a diagnostic aid, not a mandatory test matrix for every task.

| Change | Possible effects | Relevant sample |
| --- | --- | --- |
| Font, size, or weight | Line length, wrapping, component dimensions, page rhythm | Short and long headings, paragraphs, and controls in the actual language |
| Accent color or surface | Text/background pairs, area distribution, state recognition, depth | Actual containers and states; compare only required themes |
| Image or crop | Visual balance, text contrast, image/text ratio, narrow-screen composition | Current assets at relevant container widths |
| Density or layout | Grouping, reading order, priority, component composition | The same content arranged in the target region |
| Component state or motion | Layers, focus/selection cues, occupied space, continuity | Relevant combined states, entries/exits, and interruptions |

Resolve conflicts through effective decisions and rule scope. Do not silently undo selected fonts, colors, or content to fix layout. Record new preferences first, then synchronize affected sources. Mark changes outside the current scope as awaiting synchronization.
