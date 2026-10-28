# Design principles and candidate rules

Use to translate experience preferences into project rules. This is a starting point for selection and contextualization, not an automatically enabled checklist for every project.

Vocabulary helps users articulate what they want; this document turns recognized preferences into rules. If words such as "simple" or "professional" remain materially ambiguous, use [discovery guidance](discovery.md) first rather than defining preferences on the user's behalf. One experience word can have several implementations; there is no fixed one-word-to-one-rule mapping.

For concrete comparisons, applicability, and checks, consult relevant [knowledge entries](knowledge/index.md). Choose their strategies conditionally. The [default quality baseline](visual-quality.md) still applies within scope; candidate strategies do not make quality optional.

These terms identify the expression and organization the user wants to emphasize. Clarity, low cognitive effort, control, and other basic qualities are already covered by the baseline and must not be omitted because the user did not select a word. Their choices affect expression and emphasis. Preserve explicit functional requirements and standards. Unadopted strategies are not hard constraints and do not automatically trigger outcome research.

## Handle requirements by source

| Type | Source | Use |
| --- | --- | --- |
| ByTaste default quality | Current baseline version and applicability | Apply within scope without fabricating user choices or fixing one style |
| Product and usage requirements | Actual tasks, behavior to preserve, adopted accessibility standards | Record scope; do not silently sacrifice them for decoration or surface simplicity |
| User design choices | Explicit preferences, brand requirements, sample feedback | Form project rules, revisable when the user changes direction |
| Practitioner recommendations | Reference synthesis, design-system guidance, heuristics | Treat as conditional candidates and check fit with task and user |

General heuristics help find problems, but cannot prove a page is usable or replace user choice. Nielsen Norman Group's [usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/) can guide checks of feedback, consistency, and recovery; they are not a fixed visual style.

## From preferences to rules

| Preference / intent | Possible rule | Applicability and checking |
| --- | --- | --- |
| Simple: reduce irrelevant burden | Remove decoration, repeated labels, and explanations that do not help understanding, decisions, or action; improve grouping, naming, and hierarchy first | Preserve necessary labels, consequences, and recovery; identify the task each element serves |
| Focused: clear current task | Establish a clear focus in a task view, with supporting content organized around it | Keep information needed for comparison or coordination together; check added switching and memory demands |
| Efficient: frequent actions are convenient | Make frequent actions discoverable, put decision information nearby, and reuse entered information | Add batch/shortcut paths only for real repeated tasks; check chosen organization and states without adding timing studies |
| Clear: easy to understand | Express relationships through alignment, grouping, typography, and explicit names; action labels state outcomes | Do not patch unclear structure with long explanations; check grouping, naming, and hints against chosen expression |
| Consistent: predictable | Use the same components, tokens, terms, and behavior for the same semantics | Different tasks may use different structures; check for identical appearances with different behavior |
| Compact: high information density | Align information needed for simultaneous comparison in rows/columns; distinguish within-group and between-group spacing | Do not shrink readable type/hit areas or hide column labels; inspect real long content |
| Quiet: less distraction | Limit emphasis competing with the task; make motion explain state and spatial relationships | Important warnings still need visibility; check readability and feedback after reducing emphasis |
| Approachable: less unfamiliarity | Use natural, specific wording and predictable actions; explain errors and remedies | This does not automatically mean rounded corners, illustrations, or cartoons; distinguish language, interaction, and visual preference |
| Refined: ordered detail | Coordinate type roles, alignment, spacing relationships, and asset quality; reduce unintended differences | Do not assume large whitespace, black/gold, or tiny text; inspect stability with real content |
| Expressive: distinctive presentation | Use brand color, imagery, typography, or motion for meaningful emphasis and narrative | Intensity depends on the page task; check expression, content, and user feedback |

Do not derive one palette, font, or layout directly from "professional," "technological," "youthful," or "premium." Interpret it through references and the task, then distinguish recommendations from adopted choices.

## First establish what "simple" means

The user may want less decoration, clearer priorities, more information in one view, or easier language. These are independently selectable, not synonyms for less content and more whitespace. Knowledge entries should offer different methods and their conditions, allowing the user to determine current expression without fixed option counts or universal style restrictions.

## How to handle "one thing per screen"

Establish whether "screen" means a task segment, page, or physical viewport. The phrase alone does not justify fixed full-height sections, forced pagination, or scroll snapping.

For a sequential question flow, "one main question per page" may be a starting point; related questions that need to be understood together may be combined. [GOV.UK Question pages](https://design-system.service.gov.uk/patterns/question-pages/) describes both cases.

For reconciliation, analysis, and batch work, retaining information side by side often better fits the task. [Carbon Data table](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines) includes density, selection, expansion, and batch-action patterns, illustrating concrete uses for compact information.

Recognizable priorities and content relationships are [default layout requirements](layout.md). For an explicit product task, organize content around current decisions and actions; for guidelines alone, specimens, parameters, and inspection controls are the content. Actual relationships determine whether pages should split. Independent regions may each have a primary action; do not mechanically limit a whole page to one button or content block.

## Rewrite candidates as checkable project rules

Avoid vague rules such as "keep it simple" or "reduce cognitive load." For a workspace where the user handles many orders daily, for example:

```text
UX-EFFICIENCY-01
Applies to: Repeated filtering and batch operations in the order list.
Requirement: Retain current filters; keep frequent filters visible; show clear batch actions after record selection.
Exception: Infrequent filters may expand on demand, with a recognizable entry.
Check: After filtering, opening details, and returning, can the user continue from the previous position?
Basis: Repeated tasks need context; actual usage determines specific filters.
Status: Recommendation. A preference for efficiency alone does not authorize new batch business features.
```

Write rules from user requests and existing capabilities. A design recommendation does not automatically authorize new functionality.

## Avoid common misuse

- Simplicity does not mean replacing all text with icons, hiding errors, or deleting essential explanations.
- Efficiency is not simply fewer clicks; consider recovery cost, error rate, waiting, and memory demands.
- Consistency does not mean the same card grid on every page.
- Rule count is not guideline quality. Prefer rules that resolve actual tradeoffs.
- Numerical thresholds need a standard, project constraint, or validation basis; personal experience is not a mandatory industry requirement.
