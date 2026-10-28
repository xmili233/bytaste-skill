# Component grammar and composition patterns

ID: `knowledge.component-grammar`. Layer: L4. Related: `visual.shape`, `visual.density`, `visual.emphasis`. Nature: design-system practice and ByTaste interpretation.

## Entry points and mechanism

"Each component looks good but the whole does not," "every card is identical," or "the style changes when pressed" indicates that static appearance alone is insufficient. Define shared part relationships, role variants, and state expression, then how they combine. Components here may be design objects; no specific frontend framework is required.

Distinguish shared proportional relationships from different structures for distinct content types. A shared language does not mean putting everything in one kind of card.

## Concepts and candidate approaches

| Concept | What to establish | Boundary |
| --- | --- | --- |
| Parts and slots | Necessity and order of labels, content, icons, supporting information, and actions | Include only needed parts; do not add explanations and icons to every component |
| Proportions and alignment | Padding, icon/text relationships, and how content/actions expand | Shared relationships do not require equal container heights; inspect real content |
| Roles and variants | Strong/weak emphasis, compact/spacious treatment, semantic uses | Give each variant a reason; do not duplicate slightly different styles per page |
| States | Applicable default, selected, hover, focus, pressed, disabled, processing, and other states | States can combine, such as selected plus focused; not every component supports every state |
| Composition patterns | How labels/inputs, lists/toolbars, and content/supporting panels cooperate | Require current content/functionality; specimens suffice for previews |
| Temporal continuity | Which parts remain, appear, exit, or transform during state changes | Behavior belongs in interaction.md and motion follows motion.md; do not duplicate parameters |

## Rules and checks

In `design.md`, describe adopted components' parts, variant purposes, and composition. In `interaction.md`, describe transitions and responses to combined states. Tokens own shared parameters; add component-specific tokens only for actual independent variation needs.

Example recommendation: "Parameter-copy controls share label and feedback placement; successful copying changes feedback state; long token names wrap without shifting adjacent alignment lines." This describes guideline inspection, not a business save feature.

Inspect relevant component combinations and consequential state combinations. Look for attractive defaults that turn into a different language on focus, disablement, expansion, or error. Do not exhaust every component × state combination or add business rules to do so.

## Sources and counterexamples

[Spectrum Button](https://spectrum.adobe.com/web/swc/components/button) separates parts, options, states, behavior, and usage. [Material States](https://m3.material.io/foundations/interaction/states/overview) explains combined states. ByTaste borrows the explanatory structure without requiring their components, colors, dimensions, or state-layer implementation.

Misuse: a slightly different button for every page; dimming to mean secondary, disabled, and selected simultaneously; inventing accounts, payment, or administration flows to make a preview look complete.
