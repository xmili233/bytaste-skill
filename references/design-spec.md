# Design specification structure

Use when establishing or revising project guidelines. The goal is to express user choices accurately and guide actual styling while meeting applicable quality goals. Do not require every category to be filled, proof of efficiency gains, or a complete usability study.

When the product is unknown, the guidelines themselves are the subject: show typography, color, layout rules, component states, and motion without inventing a business to fill the preview. Concrete values may be clearly labeled default recommendations; product architecture remains unknown.

## Five companion artifacts

| Artifact | Responsibility | Maintenance |
| --- | --- | --- |
| `design.decisions.md`, or an equivalent existing record | User intent, evidence, scope, status, replacement relationships, and pending synchronization | Maintained source of decisions; see [decision records](decisions.md) |
| `design.md`, or equivalent guidelines | Current direction, design principles, executable rules, exceptions, and checks | Cite baselines, decisions, or project constraints without duplicating decision history |
| Existing theme/token files; `design.tokens.json` is an option for new projects | Reusable visual values and semantic roles | One maintained source; see [tokens](tokens.md) |
| `interaction.md`, or equivalent documentation | Relevant actions, states, feedback, and behavior | Maintained source of behavior; see [interactions](interaction.md) |
| A corresponding preview, by default `design.preview.html` | Actual presentation of the current style and representative component combinations | Derived from the above; see [previews](design-preview.md) |

At the start, identify the deliverable, authorized scope, unknown product details, ByTaste baseline version and relevant IDs, sources of implementation recommendations, decision record path, related decision IDs, tokens, interaction documentation, and preview entry. Explain how to run it if needed. Every entry must point to a real file; mark missing artifacts rather than claiming delivery.

Maintain the agent reading entry under the decision agreement. If code and documentation conflict, check current user instructions and effective decisions instead of inferring preference from filenames, modification times, or current code.

## Rules are the substance of a specification

Guidelines explain how to organize and express the design in accordance with project choices. Tokens own values, but cannot replace hierarchy, layout, component composition, content, or style relationships.

| Category | Example project rule | Boundary to explain |
| --- | --- | --- |
| Information and expression | Preserve selected content scope; reduce unrelated decorative explanations | Simplicity must not remove necessary labels, consequences, or recovery information |
| Hierarchy and focus | Give the selected primary information the agreed level of emphasis | Peer content may have several focal points; do not impose a universal content count |
| Grouping and structure | Express relationships through the agreed spacing, alignment, or containers | Do not require one card structure for every page |
| Density and adaptation | Retain the chosen density and complete content at relevant widths | State narrow-screen behavior, long-content handling, and local density differences |
| Visual semantics | Use consistent expression for the same role | Reference tokens instead of repeating values |
| Component usage | Reuse existing components and variants for similar visual structures | New expression needs may justify scoped extensions |
| Motion and feedback | Express current state at the selected intensity | Behavior belongs in interaction.md; timing and curves reference tokens |
| Content and assets | Follow agreed wording, imagery, and assets | Label demonstrations; do not invent customers or business achievements |

Adapt these examples to the actual content; do not copy them wholesale as a default theme. Keep requirement strength, source, and user approval separate: **must** applies to relevant ByTaste baselines, explicit user requirements, or adopted project standards; **should** to conditional agreements; **may** to optional strategies. Baselines need no item-by-item approval, and implementation does not automatically make a preference selected.

Cite the ByTaste version and baseline ID for baseline rules, and write the actual project relationship and checking method into project files rather than leaving only a local skill-path link. User rules cite real decision IDs; project constraints cite their original source. Unspecified parameters and strategies remain recommendations. Reuse existing rules covering the same requirement rather than duplicating them.

Preserve explicit functional requirements and standards. Apply reduced cognitive effort, control, continuity, recovery, responsiveness, accessibility, and adaptation to current circumstances. State goals, conditions, and how to judge results without imposing one control or technology. Consult [experience-quality knowledge](knowledge/experience-quality.md) for implementation choices; do not add full usability research or efficiency experiments as a ByTaste requirement.

## Specification dimensions to cover as needed

Use the [six-layer concept map](concepts.md) to check important relationships. When establishing complete guidelines, briefly indicate which relevant layers have rules, recommendations, undecided items, or no application. Not every sub-concept needs a value. Keep the existing five artifacts instead of creating parallel files for each concept.

| Dimension | What to record for this task | Check |
| --- | --- | --- |
| Purpose, users, and context | Known purpose, intended users, use context, pages, content, platform, and constraints; retain unknowns as needed | Is the evidence real? Was background mistaken for taste or forced to be complete? |
| Current direction | Restatable preferences, leading and supporting expression, scope, and decision IDs | Is it faithful to the user, with unknowns still unknown? |
| Principles and tradeoffs | Selected expressive goals, priorities, and exceptions | Can the chosen treatment be explained? |
| Content and structure | Roles, semantic groups, priorities, narrative order, tone, and representative lengths; see [content expression](knowledge/content-expression.md) | Does it reflect the selected structure without changing functionality? |
| Layout and density | Priorities, composition, regional relationships, proportions, alignment, grouping, spacing, and adaptation; see [layout](layout.md) | Do long content or narrow widths break the style? |
| Typography | Font roles, scale, line length, rhythm, wrapping, mixed scripts, and numerals; see [typography](knowledge/typography.md) | Does it work in actual languages, long headings, and fallback fonts? |
| Color | Palette relationships, semantic pairs, area distribution, and emphasis scope; see [color](knowledge/color.md) | Are usage relationships specified, not just color values? |
| Shape and surfaces | Contours, nesting, boundaries, depth, materials, and optical balance; see [surfaces](knowledge/shape-surface.md) | Are combinations and layers coherent? |
| Icons and imagery | Asset roles, icon families, photography/illustration guidance, focus, cropping, and image/text relationships; see [imagery](knowledge/imagery.md) | Are real assets available, and are placeholders being mistaken for final results? |
| Components and content patterns | Parts, variant purposes, state combinations, and composition rules; see [component grammar](knowledge/component-grammar.md) | Is the language consistent alone and in groups, at rest and during change? |
| Interaction and motion | Comprehension, control, continuity, recovery, and response goals for current flows; retain expressive intensity and link concrete behavior to interaction.md; see [motion](motion.md) | Do states support continued use and fit the direction? |
| Basic accessibility and adaptation | Relevant inputs and assistive methods, adopted standards, and invariants/changes across content, widths, languages, and required themes; see [adaptation](knowledge/adaptation.md) | Are there barriers, or were unrequested contexts introduced? |
| Checks and synchronization | Actual inspection scope, user feedback, source revision, and pending synchronization | What is implemented, and what is unconfirmed? |

### Suggested document organization

For a new design.md, the following order can help. Reuse an existing structure that conveys the same information:

1. Scope and sources: current subject, baseline version/IDs, decision record, tokens, interactions, and preview.
2. Expressive direction: current preferences, leading and supporting features, and constraints to retain.
3. Content and space: relationship rules for roles, priority, grouping, composition, and density.
4. Visual language and composition: adopted typography, color, surface, asset, and component rules.
5. Motion and adaptation: visual continuity, invariants, and conditions for change; link concrete behavior to interaction.md.
6. Checks and open items: representative samples, actual results, unknowns, and pending synchronization.

Each key rule connects "real basis (baseline/decision/project constraint) → applicable object/condition → concrete relationship → implementation source → preview sample." Details not specified by the user remain recommendations. Cite adoption status from the decision record rather than maintaining several status lists. Usually no empty sections are needed for inapplicable concepts.

Split page-family rules only when they become difficult to read selectively. Every specification still needs a clearly corresponding preview. Several specifications may share a decision record and token source.

## Preference summary and decision references

Keep a short, understandable description of the current direction in design.md, citing relevant IDs in `design.decisions.md`. Maintain original wording, choice context, and replacement history only in the decision record. Continue valid preferences from old guidelines under the [migration agreement](decisions.md); do not fabricate missing original evidence.

For example, assuming the user has actually expressed these choices:

```text
Current direction: Low decoration, relatively high information density, refinement through typography and alignment.
Decision sources: D-001 and D-002 in design.decisions.md.
Scope: Work interfaces; the marketing site remains undecided.
Open: Specific fonts and color temperature; do not infer them from "low decoration."
Rules: VIS-GROUP-01, VIS-DENSITY-01.
```

Keep the summary aligned with effective decisions without maintaining adoption status separately. More detailed interpretations may remain recommendations. "Low saturation selected" must not become "every color value confirmed."

Check previews against the [default quality baseline](visual-quality.md). Fix observed issues such as unclear hierarchy, wrong grouping, necessary content being cut off, or ambiguous state within scope. If they cannot be fixed, mark them incomplete. Checks do not expand into efficiency or conversion research and do not replace preference feedback.

## Expressing key rules

At minimum, state scope, a concrete requirement, and a checking method. Add exceptions and rationale when needed. Stable rule IDs are separate from decision IDs: one user decision may produce several implementation rules.

```text
Rule: VIS-DENSITY-01
Related concepts: Information density; knowledge.density (knowledge source, not a user choice).
Decision source: D-001 (user chose a compact list; other pages unchanged).
Scope: Order list content region.
Requirement: Retain current fields, use compact row spacing, and preserve existing type sizes.
Exception: Allow wrapping on narrow screens; do not cut important content to force a row height.
Values: Reference the existing theme's table density variant; new values remain recommendations.
Check: Inspect actual content and long notes against this rule and related tokens.
Implementation: Not implemented.
Preference feedback: Direction selected; this concrete implementation has not yet been evaluated by the user.
```

These are format examples, not real user decisions to copy. Completion follows the [verification agreement](verification.md); technical success does not imply the user likes it.

## Shared rules and page overrides

Read effective decisions and shared guidelines first, then explicit overrides matching the page, region, or state. An override includes its rule ID, the overridden rule/decision ID, scope, and user evidence. Conflicts without explicit relationships cannot be resolved by file order.

If the overall design is spacious but a reconciliation list is compact, only that list's density overrides the shared rule. Fonts, colors, and other pages remain unaffected. A new local choice does not invalidate the entire global decision. An explicit global change updates replacement relationships, current rules, and affected artifacts.

## References and sources

Record only material affecting real decisions, including its location, observation scope, and purpose. For example: "R1: the filter region at the top of the screenshot; user likes its compactness; interaction cannot be established from this image." Preserve applicability when citing research or guidelines. User preference, reference observation, and agent explanation must not be merged into one source.

Maintain values in tokens and behavior in interaction.md. Update relevant references and previews after a decision changes; changes to historical notes alone do not require rebuilding unrelated artifacts.
