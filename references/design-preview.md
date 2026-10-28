# A viewable page for design guidelines

Read when generating or updating guidelines. The preview directly shows their visual language, tokens, layout, component states, and motion. An unrequested product demo must not substitute for it.

## Deliverable boundaries

When product purpose, pages, and business requirements are unknown, the guidelines themselves are the content. Use generic text, glyphs, colors, regions, and component states to demonstrate relationships. Do not create invented draft management, authentication, order lists, or other business features. Calling them "examples" or "tentative" does not make scope expansion necessary.

When a user explicitly requests a page, you may additionally show its guidelines using real content. The guideline presentation must remain easy to find, not hidden in explanations inside an unrelated product page.

The agent decides whether early visual comparisons help express preferences; this is not a fixed A/B selection process.

## Content should be directly visible

| Content | Presentation |
| --- | --- |
| Design language | Let the page's own typography, composition, and details express the direction; briefly distinguish adopted choices from recommendations |
| Typography | Show headings, body, secondary text, numerals, and long text in relevant languages, with inspectable fonts and parameters |
| Color and layers | Show values, semantic roles, text/background pairs, surfaces, and necessary boundaries in use |
| Layout and spacing | Demonstrate alignment, proportions, grouping, and spacing; optionally switch generic compositions without assuming product architecture |
| Components and states | Use enough button, input, selection, and disclosure specimens to show a coherent control language |
| Motion | Viewable, replayable feedback, entry/exit, or layout changes, with reduced-motion alternatives |

Choose enough specimens to explain the current guidelines, not a component encyclopedia. If photography, illustration, materials, or specific composition rules are adopted, include representative assets and combinations. Do not add them merely to cover concepts. Choose widths, content lengths, and state samples under [adaptation](knowledge/adaptation.md). Essential specimens and parameters must not all be collapsed. Long explanations, sources, and implementation details may be disclosed as needed. The first screen should identify the guidelines and provide access to the main content.

Category navigation, token copying, layout switching, and motion replay directly support inspection. Sample buttons change demonstration state only, without maintaining fictional business objects or pretending to perform real operations.

## Reference and quality

The [bundled monochrome preview](../assets/monochrome-preview/index.html) is a viewable quality reference with local fonts and Motion assets. Consult its [tokens](../assets/monochrome-preview/tokens.css), [styles](../assets/monochrome-preview/styles.css), and [script](../assets/monochrome-preview/app.js) as needed without loading all source into context.

Prefer an existing preview system. Otherwise, you may borrow the example's organization, components, or motion. If reusing it, copy it into the user project before replacing branding, content, tokens, layout, and sources. Do not inherit its historical decisions or treat monochrome, Manrope, and fixed dimensions as universal requirements. Retain third-party licenses for resources used.

Before generation, apply the [default quality baseline](visual-quality.md), [LAY-01 through LAY-08](layout.md), and the [motion agreement](motion.md). First establish priorities among specimens, parameters, explanations, and inspection controls, then lay out the page. Show specimens directly instead of foregrounding oversized branding or unrelated business features.

## Correspondence and running

- By default, `design.md` corresponds to `design.preview.html` in the same directory; existing naming and dedicated routes may be reused.
- Each specification needs an entry that identifies its scope. Specifications may share a site and tokens, but must not all link to one undifferentiated page.
- Guidelines link real files and startup instructions. Preview development metadata connects the specification, effective decisions, and token source; do not put this metadata all over the main interface.
- Prefer project themes and components. Standalone HTML may directly load CSS tokens. For JSON/TS sources, use the project's conversion mechanism or generate derived styles and retain the source version.
- Do not assume `file://` can fetch adjacent JSON or Markdown. Direct-open previews need necessary data embedded at generation or locally usable resources. If a server is required, provide verified startup instructions.
- Match motion to the stack. Reuse a suitable implementation; Motion is recommended for new web previews, with compatible libraries or native capabilities researched when needed. Actually use the approach, not merely declare a dependency.

## Synchronization and checks

Maintenance flows from effective decisions to guidelines, tokens, and interaction agreements, then to the preview. Update relevant sources before the preview; do not maintain independent values inside it.

After relevant changes, compare current sources and actual presentation. A source version or content fingerprint may live in development metadata; a timestamp alone cannot prove synchronization. Unrelated historical edits do not require rebuilding every page. Pending synchronization means the result cannot be called the latest design.

Before delivery, follow the [visual verification sequence](verification.md#4-does-actual-styling-express-the-choices): inspect overall hierarchy, normal-size typography and grouping, then relevant content, widths, and states. Play motion and check exit and interruption. Known unresolved baseline deviations prevent a claim of completed design. Copied values must match their conditions; distinguish demonstration behavior from business implementation. If tools are unavailable, state what was not viewed.

Delivering guidelines requires an actual preview, not a promise to make one later. If the environment prevents completion, retain finished artifacts and identify the missing preview as incomplete.
