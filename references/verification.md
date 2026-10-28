# Checking preference fit and design continuity

The current goals are to meet applicable basic quality, show actual versions, hear and accurately record user feedback, and carry valid choices into later pages and changes. Full usability research and experiments on efficiency, conversion, or task success are not required. Basic quality checks remain part of design work. Follow existing explicit functionality, standards, and separately requested checks within their original scope.

## Record three things separately

| Dimension | Where it belongs and what it means | What it cannot establish |
| --- | --- | --- |
| Decision and adoption | Status, scope, and evidence in the decision record | Choosing a feature does not approve all its parameters or the whole page |
| Implementation conformance | Related rules are implemented, unimplemented, or deviating | File existence and token references do not prove correct rendering |
| Actual inspection and feedback | The version and conditions inspected, and what the user evaluated | Technical checks and agent self-assessment do not prove the user likes it |

Decision status comes from the [decision record](decisions.md), not a second state machine in a check report. Associate evidence with relevant decision/rule IDs, current version, actual content, and conditions. When a change invalidates old evidence, use the [concept map's cross-layer effects](concepts.md#check-cross-layer-effects) to choose what to recheck. Do not inspect only the token just changed or redo the entire design without cause.

## 1. Is expression and recording faithful?

- Can the user describe or correct key preferences in their own words? Judge effective expression, not a required count of questions, labels, or comparisons.
- Were observations mistaken for intent, unselected options for rejection, silence for approval, or local feedback for a global choice?
- Does the current summary expose relevant selected, explicitly excluded, tentative, undecided, and local override decisions? Have old choices correctly left their replaced scope?
- Can agent instructions locate the record? Was it actually read after a new session or context recovery rather than presumed from memory?

Without user feedback, deliver recommendations and actual results without claiming approval. Do not require users to reconfirm clear choices merely to verify their expression.

## 2. Deliverable scope and default quality

When the product is unknown or the request is only for guidelines, the main deliverable should be standards, tokens, and their preview. Check for unrequested business objects, navigation, or editing flows. Labeling them tentative does not relax the boundary.

Check applicable requirements under the [default quality baseline](visual-quality.md), not merely faithful implementation of an initial recommendation. Baselines need no item-by-item selection; layout follows LAY-01 through LAY-08. Improve rough initial proposals within the chosen style. Do not treat quiet expression, equal peer emphasis, or numerous type sizes as failures in themselves; identify the relationship that does not work.

Judge results rather than the presence of a control. Control does not require confirmation at every step or undo everywhere; responsiveness is not equivalent to skeleton screens; continuity is not permanent retention of all data. Inspect actual flows for needless memory demands or detours, lost work, unactionable errors, delays or layout shifts, and barriers in relevant input/environment conditions. Do not invent features or unrelated scenarios to fill a checklist.

Check priorities, regional relationships, proportions, and adaptation under the [layout agreement](layout.md). For motion, inspect playback, exits, interruption, and reduced motion under the [motion agreement](motion.md). Not every project needs Motion, but the chosen approach must fit the stack and deliver the goal. A successful dependency installation is not completed motion.

When establishing complete guidelines, use the [six-layer concept map](concepts.md) to find significant omissions: undecided, inapplicable, or merely named without relationship rules. Check combinations especially: correct colors with unbalanced areas, correct fonts with poor mixed-script typography, or correct static components whose states drift. Exhaustive coverage is not required.

## 3. Are guidelines and sources consistent?

Check relationships between baseline IDs/versions, decision IDs, design rules, tokens, interactions, and previews. A default baseline must not masquerade as a user choice, and required quality must not be skipped by calling it an optional strategy. If only a direction is selected, do not present interpretations and values as confirmed. Maintain original wording/history in decisions, values in tokens, and behavior in interaction.md.

Conflicts in the same scope need an explicit resolution basis; local overrides must not leak globally. List previews or pages awaiting synchronization. Do not rewrite user requirements to make the current implementation pass.

## 4. Does actual styling express the choices?

Open the corresponding page under the [preview agreement](design-preview.md), or inspect the actual interface being changed:

1. Check the primary, supporting, and auxiliary information, groups, and action scopes established before layout.
2. Zoom out to inspect overall balance and grouping, then inspect actual text, backgrounds, boundaries, imagery, and component combinations at normal size. Thumbnail inspection is a diagnostic clue, not experimental evidence of attention order.
3. Check long/short content, languages, images, widths, and states that the change may affect. Play motion and rapidly reverse or repeat triggers. Do not test irrelevant conditions merely to fill a checklist.

Only concrete observable deviations justify a failure finding. Preserve choice among symmetry/asymmetry, stronger/weaker hierarchy, and different densities.

| Check | Observe |
| --- | --- |
| Direction and scope | Whether selected density, decoration, emphasis, and asset characteristics appear in the correct region |
| Scope and presentation | Whether guidelines, tokens, and specimens are directly visible, without an invented product substituting for them |
| Motion completeness | Whether effects match shared rules, the engine fits the stack, and entry, exit, and reversal are continuous |
| Actual composition | Whether type, colors, spacing, and components work together and visual semantics match state, beyond correct token names |
| Content variation | Whether long labels, actual counts, wrapping, and relevant states cause accidental clipping, overlap, or drift |
| Source synchronization | Whether current effective decisions, guidelines, and tokens are used and derived previews are current |
| User feedback | What the user specifically likes or dislikes in this result, and the scope of that judgment |

Known misplaced priorities, incorrect label grouping, clipped necessary content, indistinguishable states, occlusion, or misalignment after changes are incomplete work to fix first. If they cannot be fixed, state the location, effect, and gap. "The page runs" does not resolve these issues.

Use rendering tools when available. Otherwise, distinguish source checks from unperformed visual inspection, without claiming baseline success. Old screenshots do not prove a new implementation, and simulated preview behavior does not establish completed business flows. There is no need to install an entire research or testing toolchain solely for ByTaste.

## 5. Show a version and invite the next round of feedback

Provide a current version the user can open or view, then invite feedback about its actual effect. Ask which parts are close and which are not, or focus on the current changes. Avoid leading praise/disparagement, fixed scoring, or a full category questionnaire. Act directly on feedback already provided instead of requesting confirmation again.

Record the version, region, wording, and scope. Separate the user's feeling, the agent's causal interpretation, and actual implementation deviations. A direction change updates decisions and guidelines; local feedback stays local. Keep uncertain explanations as hypotheses, distinguishing them through necessary clarification or the next version. One approval does not confirm the entire design, all parameters, or every future page.

If the user has not replied, this round can still be delivered, but recommendations remain unselected. Iteration follows feedback; do not automatically generate more directions to reach a round count.

## 6. Can subsequent work continue the direction?

Restore current decisions before new pages or changes, then check that relevant design language is followed. Pages may differ reasonably; surface consistency does not require identical layouts.

A useful separate evaluation is whether an agent without the early conversation can continue from the project entry point, effective summary, and guidelines. Record missed decisions, repeated questions about known preferences, reuse of superseded choices, and lost local exceptions. These are outcomes to observe, not successes implied by file existence.

After an explicit direction change, check that updates propagate. After a local implementation correction, check that the global style has not changed without cause. Reduced repetition and rework can be tracked without creating a composite taste score.

## Brief issue record

```text
Location: Order list / row with a long note.
Related: D-001, VIS-DENSITY-01.
Observation: The selected direction is compact spacing while retaining type size; the implementation shrinks all text in the row.
Evidence: Current version, desktop preview, actual fonts and computed styles.
Conclusion: Implementation deviation; it does not justify changing D-001.
Action: Restore the selected size and recheck the region. The user has not evaluated the correction.
```

This is a format example, not an actual finding. Report only real evidence; do not duplicate the entire decision history.

## Completion and updates

Report completion only when relevant decisions and applicable baselines are implemented and the inspection scope is stated. Qualify conclusions honestly when known deviations or unverified conditions remain. Missing user feedback does not block delivery, but do not claim approval or demand formal confirmation. Preview, implementation, and approval are separate results; none substitutes for another.

When feedback changes intent, update decisions before synchronizing affected artifacts. Implementation deviations require implementation fixes only. Recheck only what the change affects, without adding a requirement to prove improved usability.
