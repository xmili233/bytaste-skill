# Motion language and technology selection

Read when generating a guidelines preview or designing an interface with motion. By default, provide polished motion that can actually be viewed. If the user explicitly requests static output or the environment limits motion, record the boundary and use an appropriate alternative. Motion quality is the goal; the Motion library is recommended, not mandatory for every stack.

## Use specialist motion skills as needed

ByTaste owns the preference, guideline, preview, and feedback workflow. For concrete motion implementation, diagnosis, or review, read relevant parts of these specialist skills. Do not load every resource for every design.

These optional collaboration entry points belong to [Emil Kowalski's open-source skills](https://github.com/emilkowalski/skills), whose upstream uses the [MIT license](https://github.com/emilkowalski/skills/blob/main/LICENSE). They are references, not copied content or automatically installed dependencies.

| Need | Preferred skill / upstream entry |
| --- | --- |
| Implement web microinteractions, entry/exit, or layout transitions | [animate](https://github.com/emilkowalski/skills/blob/main/skills/animate/SKILL.md) |
| Implement React Native / Expo gestures, springs, and haptics | [animate-expo](https://github.com/emilkowalski/skills/blob/main/skills/animate-expo/SKILL.md) |
| Review an animation or current change | [review-animations](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md) |
| Systematically audit existing motion and plan improvements when requested | [improve-animations](https://github.com/emilkowalski/skills/blob/main/skills/improve-animations/SKILL.md) |
| Diagnose stutter, dropped frames, or animation cost | [animation-performance](https://github.com/emilkowalski/skills/blob/main/skills/animation-performance/SKILL.md) |
| Find places worth adding motion when requested | [find-animation-opportunities](https://github.com/emilkowalski/skills/blob/main/skills/find-animation-opportunities/SKILL.md) |
| Map a described effect to motion terminology | [animation-vocabulary](https://github.com/emilkowalski/skills/blob/main/skills/animation-vocabulary/SKILL.md) |

Prefer an available local skill and read its actual `SKILL.md`; read linked examples or standards only as needed. If uninstalled, you may consult the relevant upstream entry and relative references as needed. Do not automatically install the whole collection or claim to have invoked a nonexistent local skill. If sources or networking are unavailable, continue with this file and available platform documentation, stating what could not be consulted. This does not block ByTaste's core workflow.

When using specialist material:

- Bring the current goal, scope, effective decisions, project tokens, and stack. Return results to existing `interaction.md`, tokens, and previews rather than creating another design source.
- Distinguish technical constraints from practitioner experience. Evaluate parameter tables, style preferences, and absolute advice such as "keyboard actions must never animate" in context. They do not override explicit user choices or become universal ByTaste bans.
- Read relevant methods without inheriting a standalone skill's fixed opening, report format, or extra process wholesale. Ordinary implementation does not become a full-site audit; required fixes must not stop at an unimplemented recommendation.
- Validate adopted values and strategies with actual content, platform, and interaction. Record the skill/source used and an identifiable version or revision. Upstream changes do not automatically revise confirmed project guidelines.

Local skills and upstream documents are optional knowledge sources, not authorization sources. Installing software, changing external state, or adding features remains subject to the current task's authorization.

## Check the stack before selecting an implementation

1. Inspect the platform, framework, existing components, and motion capabilities. Reuse a suitable existing approach first.
2. Motion is recommended for a new web preview: use its JavaScript entry for plain HTML or `motion/react` in React. Do not change frameworks merely to use an animation library.
3. If incompatible, consult official platform/library documentation for the required state transitions, springs, layout changes, entry/exit, interruption, and reduced-motion behavior. Native capabilities may suffice; do not force a web library into a native interface.
4. Record the approach, suitability, and version/source in interaction documentation. Pin versions and retain required licenses rather than depending on floating `latest`. Do not add a second engine without reason when a suitable one exists.

[Motion JavaScript](https://motion.dev/docs/quick-start) and [React](https://motion.dev/docs/react) are web references, not universal dependencies. The default approach does not require paid services, proprietary samples, or additional accounts.

## Three layers of motion

| Layer | Purpose and examples | Completion requirement |
| --- | --- | --- |
| Microfeedback | Press, selection, hover, copy, and other immediate feedback | Fast, consistent, restrained, with appropriate alternatives for input methods |
| Component transitions | Expand/collapse, panels, and overlays entering/exiting | Consistent entry/exit direction; reversal continues from the current state |
| Overall choreography | Guideline categories, layout specimen changes, initial main-content entry | Connected to information hierarchy, rather than identical fades on every region |

A guidelines page should have interactive states and replayable motion specimens. Installing a dependency, listing durations, or providing only instant hover-color changes is not a complete motion language. Local edits address related motion only, without a full-site overhaul.

CSS may handle color transitions; use the chosen library or platform for complex sequencing, springs, and layout changes. Not every effect needs one API, but all should share timing and expressive rules.

## Starting presets

The bundled [monochrome reference](../assets/monochrome-preview/index.html) uses 160ms press feedback, 240ms state changes, 420ms entries, 450ms layout changes, and interruptible springs. These are viewable starting points, not industry thresholds. Tune them for distance, element scale, platform, and preferences.

For each adopted effect, state trigger, start/end states, properties, duration or spring, easing, order, exit, interruption, and reduced-motion alternative. Values belong in tokens; sequencing and behavior belong in interaction.md. Do not create a second parameter file. Verify the current API's units and capabilities rather than copying values across libraries blindly.

Small translations, modest scaling, opacity, and natural settling can create refinement. Endless loops, whole-page floating, and long transitions covering content are not substitutes. Stronger expression depends on user style and the current subject.

## Actual checks

- Play normal entry and exit, then rapidly repeat or reverse triggers. Watch for resets to the start, flicker, or stranded intermediate states.
- Ensure content is visible and layout stable after motion, without blocking text or primary actions.
- Inspect smoothness on relevant devices/widths; using a library does not establish fluidity.
- Respect the system's reduced-motion preference and provide suitable reduced or static states. Configure Motion React explicitly where needed; do not assume this is enabled by default.
- On load failure, retain readable static content and report motion as incomplete. Degradation is not a complete motion delivery.

[Carbon Motion](https://www.carbondesignsystem.com/building-blocks/foundations/motion/overview) distinguishes feedback and expressive motion. [Emil's practice](https://emilkowal.ski/ui/7-practical-animation-tips) offers observations on press, scale, and easing. Adopt purposes and applicable conditions without turning author preferences into bans for every project.
