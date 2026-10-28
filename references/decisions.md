# User design decision record

Use this agreement to establish project design memory, receive feedback, resolve conflicts, and restore context. Record intent and decisions that affect subsequent design, not a transcript or a permanent aesthetic personality profile.

## File responsibilities and when to create it

By default, maintain `design.decisions.md` beside `design.md`. Reuse an equivalent existing record. Specifications within one design system share a record and distinguish scope; genuinely independent subprojects may keep separate records linked from their own agent entry points.

Create or link the record when establishing design guidelines. In projects with a record, update it when design choices arrive. Terminology discussions and standalone research do not automatically require a complete design system. If the user only asks to save one decision, save just the record and reading entry point, linking guidelines when they are later created.

- Decision record: what the user chose, why, where it applies, and what has been replaced.
- `design.md`: how current decisions become executable rules; its summary cites decision IDs.
- Token source: current concrete visual values.
- `interaction.md`: current behavior and state agreements.
- Preview and implementation: how those decisions actually appear.

When a user specifies an exact color or font, retain their statement in the decision; maintain the actual value in the token source. Do not duplicate the full token table or specification. An unimplemented choice remains valid: record the implementation gap.

## Current deliverable and authorized scope

Before the effective summary, state the deliverable: design guidelines and preview, or a specific product/page. If the product's purpose is unknown, say "Unknown; does not block the guidelines preview." Record the functionality the user has actually requested, rather than leaving unmentioned business features for the agent to invent.

Identify the user's aesthetic basis: their description, chosen reference and relevant part, or existing effective decisions. If it is missing, follow the [required style-input step](discovery.md#required-style-input-before-design) and wait before visual design. Missing product background may remain unknown; missing style input cannot be replaced by agent defaults. Record the pending question in an existing record if useful, without creating the whole artifact set just to ask it.

In `design.md`, cite default quality as "ByTaste baseline + version + baseline ID." Do not invent a user decision or request approval for every requirement. Concrete professional values may remain "ByTaste implementation recommendations." Keep reference observations, agent recommendations, and user choices separate. Defaults can complete the current specimens, but cannot establish a need for a business feature or imply approval of the implementation.

The meaning of "make a first version" comes from the current task and the user's supplied aesthetic basis. The phrase alone does not specify a style. A guidelines draft may show generic components and layouts; it does not automatically authorize creating, editing, or saving business objects. Approval of an overall visual reference does not settle every page's architecture.

## Make decisions discoverable and recoverable

When establishing project design memory, add a short reading instruction to the `AGENTS.md` that governs the interface scope, or to an equivalent existing agent instruction entry point. Add only the relevant section and preserve other instructions. If none exists, you may create a minimal `AGENTS.md` at the appropriate scope. Use real paths relative to that entry point. Do not change global user configuration or duplicate all instructions in every subdirectory.

Adapt this example to actual filenames:

```markdown
## Interface design context

Before designing an interface, changing styles, generating a page, or revising guidelines,
read the effective summary in [Current design decisions](design.decisions.md),
then the relevant rules and sources in [Design guidelines](design.md).
Restore this information after a new session, context compaction, or handoff.
When the user makes a new design decision, update the record first, then synchronize
affected guidelines, tokens, interactions, and previews.
Do not expand local decisions into global rules or use existing code or timestamps
to override new instructions.
Do not reread unchanged material already loaded; ordinary backend work does not
trigger design discovery.
```

Link only files that exist. If guidelines do not yet exist, link only the record. Where several instruction files exist, use the entry that actually governs the interface work, not an unrelated directory. If existing instructions prohibit editing that entry or it is unwritable, provide the exact reading path in delivery or handoff notes and state that automatic discovery was not established.

This is a persistence and recovery agreement, not a technical guarantee of permanent context. Updating an entry file does not prove an agent loaded the record. At task start, after context recovery, or on discovering a new revision, actually read the effective summary. If the current revision is already in context and unchanged, continue without polling.

## Current summary and historical detail

Keep a short revision marker, such as `revision: 3`, and a **current effective summary** at the top. Update them whenever a decision, status, scope, or implementation state changes. Include selected and explicitly excluded choices, plus tentative or undecided items that affect the next step. Do not mix obsolete history into work to be applied.

The summary is not another handwritten specification. Use short statements and IDs linking to decision details in the same file and to corresponding rules. One decision may affect several files; one file may be affected by several decisions.

Suggested minimum information:

| Information | Purpose |
| --- | --- |
| Stable ID | For example, `D-001`, referenced by guidelines, feedback, preview metadata, and handoffs |
| Decision and status | A concrete choice or explicit exclusion, distinguished from tentative and undecided |
| Scope | Project, page, region, state, or platform; avoid vague statements such as "always do this" |
| User evidence | Key wording, reference/preview location, and the context of the choice; include a real message link when available |
| Reasoning and open items | Record only reasons the user expressed; label agent explanations separately and do not fill unknowns with invented facts |
| Relationships and implementation | What it replaces, whether it is a local exception, linked rules/tokens/interactions/previews, and targets awaiting synchronization |

A simple decision can fit on one line; do not invent details to fill fields. Do not retain every wording change, whole conversations, or every historical screenshot. Make the reference or preview associated with a decision identifiable by version or location. If no exact identifier exists, say so instead of inventing a link or date.

Keep version-specific feedback in this record rather than a separate rating or feedback archive. Preserve meaningful wording, the version, liked or unsatisfactory parts, and the implications for current rules. The user's reported feeling is a fact; the agent's explanation of its cause is a hypothesis. "This feels too cold" must not become a claim that the user specified a particular warm color. Adjust the next version and seek feedback; unmentioned parts do not automatically become selected.

## Status and execution meaning

| Status | Meaning and subsequent behavior |
| --- | --- |
| Selected | An explicit user choice or established project agreement; follow it within scope |
| Explicitly excluded | A feature the user explicitly does not want; exclude only the stated feature and scope |
| Tentative | A leaning, agent recommendation, or delegated choice; state its source and do not report user approval |
| Undecided | An important unanswered question; do not invent a preference, and ask only when necessary |
| Superseded | Replaced by a new explicit decision; retain it in history, link the new ID, and stop applying it in the replaced scope |
| Withdrawn | Retracted by the user without a replacement; do not automatically restore an earlier decision |

Tentative choices do not automatically override selected decisions in the same scope. Once the user has supplied an aesthetic basis, delegated implementation choices may be shown as tentative proposals within it, without approval of every parameter. Delegation alone does not replace the required style input. If that input or a key choice is awaiting an answer, proceed only with independent work. A trial direction also needs a basis in the user's description or chosen reference; preserve official guidelines and tokens and use a distinguishable draft or preview version. A trial must not silently replace the official source.

Interpret "this version works" within what was actually shown and discussed. Feedback on a heading font is not approval of the whole page; "this reference is lively" is not a request to adopt it; not selecting something is not exclusion. Do not turn age, gender, region, or third-party suggestions into user choices.

## Updates and conflict resolution

When an explicit choice, rejection, scope adjustment, or correction affects future style, record it before continuing work that depends on it. Do not reconstruct it from memory at delivery, and do not require reconfirmation for every recorded decision.

1. Find relevant decisions in the current scope. New user instructions may change earlier decisions; external references and agent suggestions do not have that authority.
2. Distinguish clarification, local exception, replacement, withdrawal, and implementation deviation. Fix implementation mistakes without inventing a new preference.
3. When new intent changes a decision, create a new ID and an explicit relationship. Preserve the old evidence; simple typo corrections need no new decision.
4. Update the effective summary and impact list, then synchronize guidelines, tokens, interactions, previews, and implementation within scope. Mark other affected targets as awaiting synchronization and address them when next touched; do not expand the task into a full-site rebuild.
5. Briefly report material changes and pending synchronization without repeating the history.

When old and new intent in the same scope is unclear, do not decide solely by date, file order, or current code. Resolve it from conversation evidence first, asking only about remaining ambiguity that would change the result. A new suggestion conflicting with an old decision is not evidence that the user changed their mind.

Record a local exception as "override feature Y of D-001 within scope X"; the original decision remains effective elsewhere. For partial replacement, narrow the original effective scope rather than invalidating the entire global decision. Withdrawal does not automatically reactivate a superseded choice. Restoring one requires a new explicit choice.

## Example: global decisions and a page exception

This illustrates the record format; it is not an actual preference of this project or its users.

```markdown
# Current design decisions
revision: 3

## Current effective summary
| ID | Status | Scope | Decision | Relationships and implementation |
| --- | --- | --- | --- | --- |
| D-001 | Selected | Entire product, except D-003's scope | Low decoration; use typography and spacing to create order | design.md: VIS-GROUP-01; implemented |
| D-002 | Explicitly excluded | Product work interfaces | No glass materials | design.md: VIS-SURFACE-01; implemented |
| D-003 | Selected | Top of the event introduction page | Allow more expressive imagery and color | Local exception to D-001; preview awaiting synchronization |
| D-004 | Tentative | Body text in work interfaces | Agent temporarily uses the existing project font | User authorized a first version; font not yet approved |

## Decision details
### D-003
User wording: The top of the event page can be livelier; keep the workspace as it is.
Context: Discussion concerned the top of the event page, not body density or workspace colors.
Interpretation: Add imagery and color at the top; do not infer acceptance of all decoration.
Relationship: Overrides only D-001's expressive intensity in this region; other scopes retain it.
Links: Event guideline VIS-HERO-01; top of the event preview awaiting synchronization.
```

If the user later explicitly chooses another direction for the whole site, create a new global decision and adjust the scopes instead of accumulating conflicting entries.

## Recovery and handoff checks

A subsequent agent should be able to identify relevant effective decisions, unknowns, applicable local exceptions, and old artifacts awaiting synchronization. Handoffs give the record path, current revision, and relevant IDs rather than duplicating the entire history in another "memory."

If only an old `design.md` exists, continue from its explicit rules. When creating a record, state "Inherited from project guidelines; original user discussion unavailable." Do not fabricate quotes or claim renewed confirmation. Migrate only key decisions needed for the current work.
