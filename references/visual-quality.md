# Default design and experience quality baseline

Read before generating or modifying a guidelines preview or product interface. This is the unified entry point for ByTaste's default quality requirements. Proactively pursue applicable quality goals within scope; the user need not first request clarity, polish, fluidity, or control. Local changes concern only relevant parts and do not trigger a full-site redesign.

## Quality, strategies, and preferences

| Type | Execution meaning | Example |
| --- | --- | --- |
| Default quality baseline | Meet the goal where the relevant object exists, and judge actual results before delivery | Understandable relationships, confidence in actions, recoverable mistakes, and continuity after changes |
| Conditional strategy | Choose based on content, platform, existing guidelines, and preferences; methods outside the library are allowed | Grouping with space or boundaries, whether to offer undo, how to show progress, which motion engine to use |
| User style choice | Express it according to effective decisions and scope | Hierarchy strength, density, font character, color, shape, material, and motion intensity |

Defaults constrain results, not style. A quiet design may use subtle hierarchy without confusing priorities; free composition does not justify accidental overlap; low decoration does not justify missing necessary states. Applicability of a baseline does not mean the user has approved a particular implementation.

These entries describe quality goals and judging cues, not a list of controls, technologies, or features. The model chooses methods based on intent and constraints. Clarify only unresolved tradeoffs that materially affect results. Implementation examples are references, not the only solution or a limit on proposing better approaches.

Fix quality within the selected direction first, without changing chosen fonts, colors, layout direction, or content. For explicitly requested experimental departures, record the intent, scope, and tradeoffs. Vague adjectives are not exemptions, and local exceptions are not global. Explain genuine conflicts, follow current user instructions, and do not claim both conflicting requirements are met.

## Expected outcomes by default

| Baseline ID / quality | Applicable scope and goal | Judging cues |
| --- | --- | --- |
| `BASE-LAYOUT` | Follow [LAY-01 through LAY-08](layout.md): priorities, grouping, alignment, proportions, space, order, adaptation, and layers agree | Inspect overall balance, then regions and components; peers may have equal weight, without an artificial hero |
| `BASE-READABILITY` | Text and important visual cues remain recognizable with actual fonts, languages, backgrounds, and states; secondary information can be quieter without becoming unreadable | Inspect actual CJK/Latin text, numerals, short/long content, and background pairs; see [token checks](tokens.md#checks) for specific standards |
| `BASE-SEMANTICS` | The same role uses consistent cues; important role/state differences are distinguishable; visuals, words, and actual meaning agree | Check selection, disabled, error, and emphasis cues, not just color or component names |
| `BASE-STATE` | Existing or explicitly requested interactions show current state, response, and outcome; applicable focus, processing, and failure states are complete | Operate relevant states and combinations; do not impose one notification style or invent business features to fill states |
| `BASE-CONTENT` Clear and trustworthy | Content is complete, specific, and faithful to real capabilities; users can understand information, action consequences, and important uncertainty when deciding; demonstrations do not masquerade as real results | Are labels misleading, achievements fabricated, actions vague, or certainty unsupported? Does repeated copy obscure relationships the structure could explain? See [content knowledge](knowledge/content-expression.md) |
| `BASE-CRAFT` | Type roles, icon weight, boundaries, shapes, surfaces, component proportions, and assets form a coherent whole with fewer unintended differences | Compare similar objects and their combinations; optical adjustment may differ from mathematical alignment; do not require one font or radius |
| `BASE-MOTION` | Apply the [motion agreement](motion.md) by default: feedback, change, and expression have purpose; entry, exit, interruption, and reduced motion remain coherent | Play it; Motion is a recommendation, while quality in the actual stack is the requirement; respect explicit static requests |
| `BASE-FLOW` Low cognitive effort and interruption | Users can understand the situation, find relevant information and the next step, with less unhelpful memory, inference, repetition, and interruption | Must they remember another page, guess an icon, or take an irrelevant detour? Is help available when useful? Retain necessary confirmation and guidance |
| `BASE-CONTROL` Control | Users understand and direct important changes and can adjust, exit, or handle mistakes within real capabilities; control matches consequences | Are submissions, navigation, or automatic changes hard to anticipate? Can users handle unwanted outcomes? Control is not synonymous with undo, dialogs, or toggles |
| `BASE-CONTINUITY` Continuity | Across steps, returns, waits, or interruptions, users can recognize their place and continue valuable work without needless loss or repetition | Are still-valid input, selections, reading position, or context lost? What needs resetting, or is limited by privacy, permissions, or expiry? Do not promise permanent retention of everything |
| `BASE-RECOVERY` Error tolerance and recovery | Reduce foreseeable mistake costs; when something goes wrong, users understand what happened, what remains valid, and how to continue | Is understandable input rejected unnecessarily, work erased on failure, or an error unactionable? Recovery must reflect real capability, not fabricated retry or success |
| `BASE-PERFORMANCE` Responsiveness and stability | Actions respond promptly, waits are understandable, and content/action targets remain stable during loading and change; effects do not impede the task | Are actual operations unresponsive, stuttering, shifting unexpectedly, or blocked by transitions? Observe the current platform and main content; libraries, loaders, and scores alone cannot establish quality |
| `BASE-ACCESSIBILITY` Basic accessibility | Users can obtain necessary information, recognize states, and complete existing actions through relevant input and assistive methods, without relying on one sense or difficult gestures | Can relevant keyboard/assistive methods identify and operate the interface? Do focus, semantics, perception, or targets create barriers? Follow applicable platform/project standards rather than one visual style |
| `BASE-ADAPTATION` Environmental adaptation | Retain necessary meaning, capability, and design language across the screens, content, languages, inputs, and system preferences involved in this task | Does it work only in an ideal screenshot, losing information or functionality with long text, narrow widths, or another input? Follow [adaptation](knowledge/adaptation.md) without automatically adding languages, themes, or settings |

These goals support one another; one implementation may satisfy several. Do not manufacture a control or repeat a rule for each row. Content, width, input methods, and required themes inform checks without separate device specifications or invented photography, charts, dialogs, or business features. Lower implementation cost supports quality; it does not authorize more features or scope.

For concrete methods, read [experience-quality goals, tradeoffs, and examples](knowledge/experience-quality.md) as needed. Optional methods do not make quality goals optional. If real flows depend on unfinished APIs or persistence, distinguish agreements, simulations, and implemented capability, and state gaps.

## Sources and numerical boundaries

Project guidelines cite baseline IDs and the ByTaste version and state actual project requirements. Do not fabricate user decision IDs or request approval for every baseline. Values remain in tokens. Unspecified values are implementation recommendations, separate from default baseline applicability.

Apply adopted platform/project standards within their scope. Basic accessibility cannot be omitted, but a few checks do not establish full accessibility conformance; local responsiveness checks do not prove production performance. An 8px grid, fixed type-size count, golden ratio, one focus per screen, or universal response time is not a cross-platform baseline. See [numerical boundaries](tokens.md#numerical-values-and-standards) for formal scope and exceptions.

These requirements are ByTaste's project-oriented synthesis of [NN/g visual hierarchy](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/), [Atlassian spacing](https://atlassian.design/foundations/spacing/), [Apple layout](https://developer.apple.com/design/human-interface-guidelines/layout), [state feedback](https://www.nngroup.com/articles/visibility-system-status/), and [Carbon motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview). Use general relationships and applicability, not the sources' brand styling, values, or feature scope.

Sources and limits for added experience goals are in [experience-quality knowledge](knowledge/experience-quality.md#sources-and-evidence-boundaries). Making these goals defaults is a ByTaste product choice; external guidance does not guarantee results for every product, user, or implementation.

## Actual checks and completion

Under the [verification agreement](verification.md), inspect current rendering, representative content, and relevant states. Observed baseline violations are incomplete work to fix first. If unresolved, state location, impact, and incomplete status. Missing user feedback does not block delivery, but agent self-assessment cannot establish that the user likes it.

Running code, correct token references, no overflow, or an installed animation library cannot individually prove baseline quality. If inspection is impossible, state unverified conditions without pretending visual checks passed. Avoid mechanical repetition or a composite aesthetic score that hides concrete issues.

## Quality reference and knowledge entry points

Use the [six-layer concept map](concepts.md) and relevant entries to locate causes. Concepts identify what is involved, baselines define the minimum outcome, and user decisions define how it should be expressed.

The [bundled monochrome preview](../assets/monochrome-preview/index.html) is a runnable reference for typography, color, layout, components, and motion. Its overall result was approved by the author; that does not verify every later baseline or every scenario. You may borrow its direct presentation, parameter relationships, and interactions without treating monochrome, Manrope, historical decisions, or specific values as everyone's preferences.

Copy it into the project before modifying it, replace branding and sources, and adapt visuals and composition to the current direction. Retain licenses for third-party assets used. Do not use the skill installation directory for a user's project.
