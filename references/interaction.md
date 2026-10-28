# Interaction specification: interaction.md

Read when establishing or maintaining interaction agreements. `interaction.md` is a project artifact; this file explains how to write it. Reuse equivalent existing interaction documentation and link it explicitly from `design.md` to avoid parallel maintenance.

Describe interactions in user-requested and existing flows, applying relevant goals for low cognitive effort, control, continuity, recovery, responsiveness, and accessibility without adding usability research or efficiency experiments. User choices cite project decision IDs, default quality cites baselines, and existing business behavior retains its original basis. When the user's preferences for feedback, motion, or states change, record the decision first, then synchronize the interaction document and its preview.

## Responsibilities

Record what happens after an action and how states transition. `design.md` retains cross-context principles and rules; tokens own values. Do not duplicate state machines, validation rules, or color values in several places.

For example, "users can understand failure and continue" is a design goal; "retain input and allow retry" may be the chosen interaction for a particular flow; feedback colors and transition durations belong in tokens. Candidate mechanisms in [experience-quality knowledge](knowledge/experience-quality.md) are not automatic requirements for every project.

## Guidelines previews and business pages

When the product is unknown, describe only category switching, parameter copying, layout demonstrations, specimen states, and motion playback needed to inspect guidelines. Generic inputs or buttons can demonstrate appearance without adding drafts, orders, accounts, or save workflows.

By default, choose motion suited to the stack under the [motion agreement](motion.md), documenting triggers, sequencing, exit, interruption, and reduced-motion alternatives. Motion is a web recommendation; research a suitable capability when incompatible instead of replacing the framework.

## Cover what the task needs

| Dimension | What to explain |
| --- | --- |
| Flow and scope | User goal, entry, completion, return, exit, and associated pages/rules |
| Action contract | Trigger, prerequisites, system response, visible feedback, and next state |
| States | Relevant default, editing, processing, success, failure, empty, permission, or disabled states |
| Input and validation | Accepted input, when validation runs, where errors appear, and how to correct them; distinguish existing requirements from recommendations |
| Recovery and interruption | Retry, cancel, undo, timeout, repeat actions, and leaving with unsaved changes |
| Context retention | Necessary filter/position state on returning to lists, refreshing, or navigating |
| Input methods | Keyboard, focus flow, touch/pointer behavior, and appropriate alternatives |
| Motion and feedback | What movement communicates, whether it is interruptible, and how reduced motion still expresses state; reference tokens for values |

Write only flows that exist or are explicitly being designed. A static content page may need only links, navigation, and focus agreements; do not add forms, dialogs, or business functionality to fill a document.

Retry, cancellation, undo, and similar mechanisms are possibilities to explain, not features every product must have. Define the required outcome first, then choose methods supported by real capability and constraints. Do not claim recovery exists only because it appears in documentation or a preview.

## Writing an interaction agreement

Use stable IDs for references from `design.md`, implementation, and previews. Complex flows can use a state table or small diagram; simple behavior may need only a few lines. A uniform table is not mandatory.

This is a format example, not a default save feature:

```text
INT-SAVE-01: Save preferences
Scope: Preference form on the settings page.
Basis: User request; implementation pending.
Entry: User changes at least one field and selects Save.
Validation: Check defined required fields before submission; identify failures and move focus to the error.
Processing: Show actual save progress and prevent duplicate submissions of the same content.
Success: Update saved state and retain page context.
Failure: Preserve input, explain a feasible next step, and allow retry.
Exit: Follow project rules for unsaved changes; do not infer business policy.
Related: DESIGN-FEEDBACK-01; feedback appearance references existing semantic tokens.
Preview: May simulate these states; does not prove a real save API is complete.
```

For an existing product, inspect actual behavior and confirmed agreements first. Mark unknown business rules undecided and new recommendations as recommendations; plausible guesses are not existing capabilities.

## State appearance and combinations

Under [component grammar](knowledge/component-grammar.md), separate variants, states, and themes. When selection, focus, and other states can coexist, explain which visual cues remain and which are added. Do not create a new component for every combination. Appearance constraints belong in design.md; transitions and responses belong here.

## Relationship to previews and implementation

A style preview shows representative component states and lightweight demonstrations needed to judge feedback. It must not trigger real data changes, payments, or messages. Use local state and make the demonstration scope clear.

A preview can show that a state is presentable, not that real APIs, permissions, data consistency, or complete flows work. Keep implementation and verification status separate under the [verification agreement](verification.md).
