# Experience quality: goals, tradeoffs, and optional examples

ID: `knowledge.experience-quality`. Spans L1 Content, L4 Composition, and L5 Continuity. Related: `goal.clarity`, `goal.low-friction`, `goal.control`, `goal.confidence`. Nature: design guidance, standards explanations, and ByTaste interpretation.

The [default baseline](../visual-quality.md) defines required outcomes; this entry helps choose how to achieve them. Examples are not a feature checklist or the only answers. The model may use better methods for the current task. Once selected, concrete implementations belong in project rules, tokens, or interaction agreements.

## Low cognitive effort and interruption

Help users spend attention on their own judgments and work by reducing extra remembering, guessing, repetition, and interruption caused by the interface. Discoverability does not mean showing everything, and fewer steps do not always mean less effort.

Optional examples: make related information available together for comparison; pair unfamiliar icons with understandable names; complete simple choices in place; reveal infrequent explanations on demand. Direct visibility, contextual expansion, and dedicated pages each have uses depending on amount, frequency, and consequences of mistakes.

Counterexamples include unnecessary settings detours, hiding essential entries for minimalism, and repeating explanations to seem clear. Necessary hints and meaningful confirmations are not inherently intrusive; understand why users need them.

## Control, continuity, and recovery

Control concerns who directs change; continuity concerns continuing work; recovery concerns returning to a usable state after a problem. Do not translate all three into "add undo."

| Situation | Optional examples | Tradeoffs |
| --- | --- | --- |
| Changes with meaningful consequences | In-place adjustment, preview, deferred application, cancellation, undo, or explicit consequences | Choose according to reversibility, risk, and real capability. Frequent low-risk actions may not need confirmation; irreversible actions cannot pretend to offer undo |
| Return or temporary interruption | Retain input, filters, selections, or reading position; restore a recognizable point | Keep only valid, valuable state, accounting for privacy, permissions, expiry, and intentional reset |
| Ambiguous input or failure | Accept unambiguous common formats, identify correctable locations, preserve valid work, and provide a feasible continuation | Do not silently guess important meaning or relax real constraints. Recovery is not hiding failure or retrying indefinitely |

Inspect normal operation, a representative mistake, and the result of returning to see whether users understand what happened and what remains possible. Do not create forms for static pages or backend persistence for a guidelines preview.

## Responsiveness and stability

Respond to intent promptly, make waiting understandable, and keep the objects users read or intend to act on reliable. Distinguish action response, data completion, animation smoothness, and content stability. A beautiful loader does not prove responsiveness.

Optional methods include removing unnecessary work, loading when needed, reserving suitable space for asynchronous content, reusing results, and matching feedback to actual progress. Optimistic feedback is appropriate only when failure can be handled correctly; success must not appear before real capability permits it.

Experience operations, loading, and transitions with representative content on the current platform, measuring actual bottlenecks where needed. Animation, preloading, caching, and placeholders are means, not reasons to add dependencies. Web metrics can help diagnose issues but are not universal thresholds for all platforms and actions.

## Basic accessibility

Necessary information and existing capabilities should not disappear because of perception, movement, or input method. Keyboard, assistive technology, zoom, and reduced-motion checks reveal barriers; they are not a fixed visual theme.

Optional methods: controls with appropriate semantics and behavior; meaningful equivalent information for visual expression; state cues beyond color when relevant; alternatives to precise dragging that accomplish the same task. Judge actual perceivability and operability in native or custom implementations, not control names.

Inspect real pages under applicable platform and project standards. Do not add redundant announcements, meaningless descriptions, or dedicated settings panels in the name of accessibility. Visual preference does not excuse basic operation barriers. Full conformance requires appropriate scope and evidence; a few checks cannot establish it.

## Environmental adaptation

Retain meaning, capability, and approved design relationships when environments change; see [adaptation](adaptation.md). Automatic environment matching is an optional strategy, not the entire answer.

For example, an existing multilingual site may use language preferences while preserving a discoverable manual choice. An existing theme feature may respect system preferences. Actual needs determine persistence and source precedence. Do not add languages or themes to otherwise single-language or single-theme projects merely to satisfy a baseline.

## Clear expression and trustworthy transparency

Help users form expectations consistent with real capability and obtain information needed for current judgments. Labels, explanations, states, and consequences should agree. Add only decision-relevant content and first resolve ambiguity through structure and naming; see [content expression](content-expression.md).

When AI is involved, distinguish recommendations, generation in progress, execution, and failure as relevant. Explain material limitations and allow correction or takeover when needed. Do not fabricate confidence scores, sources, completion, or recovery capability. Repeating "AI can make mistakes" on every screen is unnecessary, as are automatic explanation panels, confirmation steps, or new features.

## Write project rules

First state the object, the situation to improve, and an observable outcome, then choose an implementation within existing constraints. A goal must be more concrete than "make it easier," without being replaced by a particular example.

For a list/detail return flow, for example: "After returning, the user can recognize and resume the prior browsing position without finding the target again." Retaining scroll position, highlighting the last-viewed object, or another approach depends on the actual list and platform. Put behavior into the [interaction agreement](../interaction.md) only after selection. This example does not apply when no list is requested.

Keep outcome checks separate from preference feedback. Actual operation may reveal lost work, unclear entries, and other problems; user reactions help revise design direction. Neither is measured by control count, presence of a particular component, or a composite taste score.

## Sources and evidence boundaries

- [NN/g: recognition rather than recall](https://www.nngroup.com/articles/recognition-and-recall/) and [progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/) support reducing memory demands and contextual information placement; they do not prove hiding content or reducing steps is always better.
- [NN/g: user control](https://www.nngroup.com/articles/user-control-and-freedom/) and [state visibility](https://www.nngroup.com/articles/visibility-system-status/) provide principles of control and feedback; choose undo, cancellation, and other examples by context.
- [GOV.UK: validation](https://design-system.service.gov.uk/patterns/validation/) and [interface writing](https://www.gov.uk/service-manual/design/writing-for-user-interfaces) offer error-tolerance, correction, and clarity practices without requiring government-service workflows.
- [W3C: redundant entry](https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html), [new WCAG 2.2 criteria](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/), and [language negotiation](https://www.w3.org/International/questions/qa-when-lang-neg.en) provide scope and exceptions; distinguish normative requirements from explanations.
- [web.dev: Web Vitals](https://web.dev/articles/vitals) distinguishes loading, responsiveness, and visual stability. These web metrics are not universal numerical requirements for native interfaces or all interactions.
- [Microsoft human-AI interaction guidelines](https://www.microsoft.com/en-us/research/articles/guidelines-for-human-ai-interaction-eighteen-best-practices-for-human-centered-ai-design/) offer capability expectations, correction, and control guidance only for AI-relevant contexts; they do not guarantee model reliability.

These sources support goals and candidate methods. ByTaste organizes them into default quality goals without claiming this combination has been validated in every product or model, or requiring a full user-research program.
