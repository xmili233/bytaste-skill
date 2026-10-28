---
name: bytaste
description: Require a user-provided style description, screenshot, or design reference before choosing a visual direction, then create viewable designs, explicitly ask for feedback, and maintain reusable guidelines, tokens, and interactions. Reuse established project choices. Use for design exploration, reference interpretation, preference changes, and style reuse; not ordinary code fixes or backend-only work.
license: MIT
metadata:
  version: "0.6.0"
---

# ByTaste

Help users develop design preferences they can express and revise, and help subsequent agents consistently produce designs they like. Standardize how guidelines are expressed while preserving visual differences between users and projects.

The core loop is: **obtain the user's style input → create a viewable version → explicitly ask how it feels → update decisions and guidelines from feedback → iterate → reuse on later pages**. Obtaining an aesthetic basis before design and asking for feedback after showing a version are required parts of the workflow. Text, screenshots, and design links are alternative input formats; no particular format or platform is required.

The current goals are expressing preferences, matching the design to those preferences, and sustaining reuse. Tasks, content, and platforms help interpret preferences and choose implementations. Proactively deliver applicable basic quality within the current scope; do not expand the task into usability research or make efficiency, conversion, or task-success experiments a completion requirement. Preserve the user's existing explicit functional requirements and standards.

## Start by restoring current design decisions

For design work, first locate the decision record linked from the project's agent instructions (by default, `design.decisions.md`). If it exists, read its current effective summary, then the relevant parts of `design.md`, overrides, and sources. If no record exists, retain verifiable project rules and establish or continue the record as needed for this task. Missing records do not justify redesigning the project. Repeat this recovery after a new session, context compaction, or handoff; do not reread the full history when the current version is already in context and unchanged.

The user's current instructions can revise earlier decisions. Check scope and explicit replacement relationships; neither file timestamps, current code, nor a new suggestion can override a choice the user has made. If the record cannot be read, state the gap. Do not pretend to remember or to have checked it.

When creating a record, receiving feedback that affects later design, resolving conflicts, or updating decisions, read the [decision record agreement](references/decisions.md). Maintain a discoverable reading entry point in the project. Save decisions promptly, then update the affected guidelines, tokens, interactions, and preview.

## Required: obtain the user's style input before design

Before choosing a new visual direction or generating its guidelines, tokens, preview, or page, establish an aesthetic basis from the user. Accept a useful description of what they like or dislike, a screenshot/design file, a website/example they want to draw from, or relevant effective project decisions already established with the user. Reuse sufficient existing input instead of interviewing them again.

If that basis is missing, **ask for it and wait for the answer before designing**. In the first style question, offer the choice of a description, screenshot, or design link. If helpful, include two or three relevant [free-browsing design platforms](references/reference-platforms.md) so the user can pick examples. One useful reference or concrete description can be enough; do not require every input format, a complete brief, or a style questionnaire.

Product purpose, an industry label, and generic requests such as "make it beautiful" do not determine taste. Neither "make a first version" nor "you decide" alone supplies the missing aesthetic basis. Do not silently choose a style, generate competing style proposals, or treat the bundled example or search ranking as the user's choice. You may inspect existing code, clarify content, or help them find and discuss references while waiting; do not produce visual design artifacts that assume a direction.

When the user provides only an ambiguous adjective or a reference whose intended use is unclear, ask one focused question about the concrete feeling or part they want. Once enough is clear to ground the direction, proceed without demanding exact fonts, color values, or approval of every implementation detail. Follow the [required input guidance](references/discovery.md#required-style-input-before-design).

## Determine the deliverable

When the user provides only a feeling, references, or colors, or is establishing design guidelines without a product purpose yet, the default deliverable is **design standards and a guidelines preview**. Typography, tokens, layout relationships, component states, and motion are the content. Do not require a complete product brief or invent draft management, customer dashboards, or other business features.

Apply the design language to specific content and functionality only when the user explicitly requests a page. Ask only for essential missing page requirements. A local change to an existing interface does not trigger a complete rebuild. Deliver standalone research or terminology explanations as requested.

After obtaining the user's aesthetic basis, you may propose professional implementation defaults for the current guidelines preview, labeled as ByTaste recommendations, without asking about every font size or pixel. **Tentative describes approval status; it does not replace required style input or expand scope.** In a guidelines discussion, "make a first version" means a draft grounded in that input, not automatic permission to invent a style or design a product.

## Scope and artifacts

- When users cannot articulate a feeling, use the built-in categories to help distinguish differences and form a preference description they can restate and correct. Reuse what is already clear.
- When establishing guidelines, produce `design.decisions.md`, `design.md`, a separate token source, `interaction.md`, and a corresponding style preview. Reuse and explicitly connect equivalent existing files and systems instead of creating parallel sources.
- When implementing an interface from guidelines, follow current decisions. Apply preference changes only within their stated scope. For research, terminology explanations, or discussion alone, deliver what was requested without automatically creating every artifact.

## Load knowledge by task

Restore project decisions, establish the user's aesthetic basis and scope, then choose an entry below. If style input is missing, use discovery and the platform suggestions before design. For interfaces and guidelines previews, apply the [default quality baseline](references/visual-quality.md). Terminology explanations and standalone research do not thereby require new interface artifacts. Do not reload unchanged material already read.

| Current task | What to read and use |
| --- | --- |
| Articulating a feeling or interpreting references | Use [discovery guidance](references/discovery.md) and the vocabulary; consult concepts and knowledge entries only when a specific difference needs explanation |
| Establishing guidelines or changing the overall direction | Use the [concept map](references/concepts.md) to check relationships across six layers, read relevant entries, then apply the [specification structure](references/design-spec.md) |
| Implementing a page or making a local change | Follow existing rules; consult only [knowledge entries](references/knowledge/index.md) related to the difference, using the concept map if needed; do not restart preference discovery |
| Responding to feedback, checking, or correcting | Use the [verification agreement](references/verification.md) to distinguish changes of intent from implementation deviations, check affected relationships, and synchronize locally |

Vocabulary helps expression, the concept map locates issues, knowledge entries support tradeoffs, and specification agreements define artifact responsibilities. Together they serve the task, not an additional mandatory process.

## 1. Understand the design context

Before exploring overall feel and visual style, it is usually useful to understand the product or page's main purpose, intended users, and use context. Prefer existing material. When missing information would help this design, ask briefly; see [recommended background discovery](references/discovery.md#recommended-background-purpose-users-and-context). Background discovery is optional; obtaining the user's aesthetic basis is required. A user may start with references or a style description without a full product interview. A request to see a first version still needs that basis.

Establish page scope, content, platform, existing visual language, and constraints that must remain. A marketing site, workspace, and reading page may need different treatments; their categories do not automatically determine their styles.

An existing interface is also context. Distinguish reuse, local adjustment, and redesign. Do not rebuild a brand because design documentation is missing. Ask only questions that would change this proposal and cannot be answered from existing information; do not reconfirm recorded choices.

## 2. Read references and separate observation from intent

References may be URLs, screenshots, design files, existing pages, descriptions, or feedback. Use available tools to inspect actual content. If it is inaccessible, retain the gap rather than claiming to have researched it.

Record useful local features, what the user specifically likes or dislikes, and where they want to use it. Distinguish "what it looks like," "whether the user likes it," and "whether they want their project to adopt it." Sharing a website does not mean endorsing the entire site.

Screenshots support visual observations but usually cannot establish full interaction behavior, exact tokens, or implementation quality. Preserve observation limits and inference status. Popularity or design awards do not make a reference's choices project requirements.

Familiar structures can coexist with distinctive visual expression. When a user says "avoid the AI look," identify concrete counterexamples instead of automatically banning familiar navigation, components, fonts, or effects.

## 3. Help users recognize and express a feeling

When important ambiguity remains, read the [discovery guidance](references/discovery.md). Determine whether the user lacks words, does not yet understand the difference, has not formed a preference, or is weighing competing goals. Choose the appropriate help.

Use [experience goals](references/vocabulary/experience.md), [visual dimensions](references/vocabulary/visual.md), and [style combinations](references/vocabulary/styles.md) as needed. Categories are ways to express preferences, not fixed aesthetic personality types. Do not choose styles for users based on age, gender, region, or similar attributes.

The agent decides which explanations, questions, or reference comparisons help obtain the required input. Neither visual comparisons nor fixed questionnaires are mandatory. Sketches or designed alternatives may follow once the user has supplied an aesthetic basis; they do not substitute for asking first. Describe differences neutrally and allow "not sure," "neither," "somewhere between," and partial choices. Do not steer answers with praise or disparagement.

Summarize valid choices in one understandable sentence, introducing terminology only if useful. Choosing low decoration does not also settle colors, fonts, or density. Allow tentative choices and revisions. When authorized to make a first version, use recommendations within the supplied direction without presenting your choices as user approval. If no direction has been supplied, ask and wait first.

Move into design once the important differences are clear enough. Silence is not a choice, and an unselected option is not a rejection. Do not keep asking to fill every category. Record choices that affect later work promptly; not every restatement needs formal confirmation.

## 4. Form rules from quality requirements and preferences

Use the [concept-to-guidelines method](references/concepts.md#from-concepts-to-the-current-guidelines) to turn current decisions into relationship rules and checking samples. The six layers help reveal omissions and dependencies; they are not a user questionnaire. Concept names and token lists cannot replace actual rules.

The [default quality baseline](references/visual-quality.md) defines the visual and experiential results required within scope. Proactively pursue applicable goals and choose implementations based on intent, context, and constraints. Do not ask whether the user wants clarity, fluidity, or control, and do not treat those goals as mandates for undo buttons, dialogs, or other specific mechanisms. Clarify only significant tradeoffs that context cannot resolve. Fix issues within the chosen style first; do not mislabel general quality as a user preference or a fixed visual theme.

For layout, apply [LAY-01 through LAY-08](references/layout.md). First describe content priorities, grouping, and action scope, then consult [composition and architecture categories](references/vocabulary/layouts.md) as needed. Peer content may have equal weight, and regions may each have a focal point. When the product is unknown, use guideline specimens as content rather than inventing business architecture.

When creating a guidelines preview or relevant motion, read the [motion agreement](references/motion.md). Deliver an actual viewable motion language by default. Motion is recommended for the web, but check the project stack first. If incompatible, research and use a suitable library or native capability based on the intended effect. Installing a dependency or listing timing values is not completion.

For implementation, review, or performance work, choose relevant material from the [specialist motion skill entry points](references/motion.md#use-specialist-motion-skills-as-needed). Prefer an installed local skill; otherwise, consult the open-source upstream material as needed. External expertise serves the current goal; ByTaste continues to maintain user decisions and project guidelines.

Reason through "user expression → current decision → observable features → project rules and values → actual presentation." When using [candidate rules](references/principles.md) or [knowledge entries](references/knowledge/index.md), check applicability, mechanism, alternative strategies, counterexamples, and source type. If no entry fits, honestly use general advice; do not fabricate a lookup result.

One goal can have several implementations. Grouping can use spacing, alignment, or boundaries; "simple" can mean low decoration rather than less content. The knowledge base does not impose global style bans or infer an entire visual theme from one adjective.

For each key rule, state scope, requirement, exceptions, and how to check it. Attribute it accurately: cite the ByTaste version and baseline ID for default quality, a decision ID for a user choice, and the original basis for a project constraint. Strategies and concrete values from knowledge entries may remain recommendations. Do not fabricate user decisions or automatically promote research findings, practitioner experience, or reference observations into hard constraints. When external sources disagree, retain their conditions and uncertainty; multiple reposts are not independent evidence.

When requirements seem to conflict, check dimensions and scope first. Ask only if a material conflict cannot reasonably be resolved; proceed when a choice is already explicit. After a direction change, update its affected scope rather than turning local feedback into a global change.

## 5. Maintain artifacts and their source relationships

When establishing or adjusting guidelines, read the [specification structure](references/design-spec.md) and record only what the scope needs:

- `design.decisions.md` is the maintained source of user intent, evidence, status, scope, and replacement relationships.
- `design.md` translates applicable baselines and current decisions into principles, layout, component, and style rules. Cite their sources without maintaining another decision history.
- A separate token source owns visual values such as color, typography, dimensions, and spacing. Prefer the existing theme under the [token agreement](references/tokens.md).
- `interaction.md` owns the relevant flows, states, and feedback under the [interaction specification](references/interaction.md), without adding business features.
- Each design specification has a corresponding style preview. Under the [preview agreement](references/design-preview.md), actually generate and link a page that directly shows standards, tokens, layout, component states, and motion. The default is `design.preview.html`; an existing dedicated preview entry may be reused.

The preview uses the same token source or a derived snapshot. When the product is unknown, demonstrate the guidelines with generic specimens. Do not hide essential guidelines in collapsed sections while invented business features dominate the page. Modest category navigation, parameter copying, composition switching, and motion replay may help inspect guidelines without becoming a component encyclopedia.

If no preview system exists, you may open the bundled [quality reference](assets/monochrome-preview/index.html) and borrow its organization or implementation as useful. The example has been visually inspected and interaction-tested, but its branding, monochrome palette, fonts, values, and historical decisions are not defaults for other users. If reusing the example, copy it into the project and adapt it to current preferences; do not edit the skill installation directory.

After a decision changes, record it first, check cross-layer effects using the concept map, synchronize affected rules and sources, then update the preview and implementation within scope. Mark unsynchronized targets explicitly and resolve deviations when those targets are next touched. Do not present an old preview as current. Changes to unrelated historical notes do not require rebuilding every page.

## 6. Show versions, hear feedback, and sustain reuse

Under the [verification agreement](references/verification.md), distinguish what the user selected, whether the implementation conforms, and what was actually inspected. Approval of one part does not approve the whole design. Technical checks and agent self-assessment cannot replace user feedback.

Check whether current decisions are expressed accurately, the deliverable stays in scope, applicable quality goals are met, rules and tokens are implemented, and actual styling fits representative content. Play current motion and check exits and interruptions; screenshots and syntax checks cannot substitute. Inspect rendered results when possible; otherwise, state that visual inspection was not performed. Fix observed baseline violations first. If they cannot be fixed, mark them incomplete instead of treating a complete file set as sufficient. Simulated preview feedback does not prove real business functionality is implemented.

After showing each viewable page or preview version, **explicitly ask for the user's feelings about that actual version in the delivery message**, such as "Which parts feel close to what you want, and which still feel off?" A completion report or generic "let me know" is not a substitute. Adapt the question to the changed region rather than restarting the whole style discussion. Do not require item-by-item ratings, questionnaires, or a fixed number of rounds. If the user has already given feedback on this exact version, process it directly without asking again. Record its version, location, and scope, write valid new choices into decisions and guidelines, and use them for the next version. The current version may be delivered while awaiting the reply, but do not infer approval or start another aesthetic revision from silence.

Preserve the chosen design language across pages while allowing justified local differences. A new agent should be able to continue from the effective decision summary and relevant guidelines without making the user explain everything again.

Classify feedback first: fix implementation deviations in the implementation; record new local choices with local scope; establish explicit replacement relationships for a global change of direction. Preserve history for traceability, while the current summary contains only what still needs to be applied or distinguished. Do not rewrite user requirements to make checks pass.

## Delivery notes

Briefly state the current preference description and its user-provided basis, decisions added or changed and their scope, relevant files and preview entry points, unresolved or unsynchronized items, and checks actually performed. When showing a page or preview, include the required feedback question unless this exact version has already received feedback. When generating guidelines, a plan for a future preview cannot replace an actual page. Without user feedback, do not claim the user likes the result.
