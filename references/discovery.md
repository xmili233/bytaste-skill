# Help users recognize and express preferences

Read this when a user has only a vague feeling, lacks design terminology, cannot explain what they like in a reference, or gives descriptions that seem to conflict. The aim is to help them express what they want and then form guidelines.

The approaches below are optional, not mandatory stages. The agent decides what the user has yet to understand and what help would be useful. Visual comparisons, sample creation, and a fixed number of questions are not required.

Suggest starting with references the user likes and identifying the parts to retain. Descriptions, existing pages, and counterexamples also work. Without references, use available information to make a viewable version rather than making reference collection a prerequisite. Preferences can become clearer after seeing results; they need not be complete before work begins.

When the product and pages are unknown and the task is to establish guidelines, proceed with viewable standards and tokens. Missing business context is not a reason to require further interviewing. When the user explicitly requests a product or page, obtain only requirements essential to that task. Professional defaults within scope can be recommendations without individual approval.

## Recommended background: purpose, users, and context

Before deciding overall feel and visual style, it is usually worth understanding whom the design serves and what they are doing. These are optional background prompts, not a required form or fixed question order:

| Background | Possible question |
| --- | --- |
| Main purpose | What is this product or page for, and what should it help people do? |
| Intended users | Who will use it, and how familiar are they with this type of task? |
| Use context | In what circumstances and on what devices will they use it: occasional browsing or sustained work? |

Reuse answers already available in project descriptions, conversation, or the interface. Ask selectively only when missing information would help the current design. If the user is unsure, does not want to elaborate, or wants to see references or a version first, proceed while retaining unknowns. Do not invent personas.

With relevant context, explore the desired overall feeling and visual expression through references or descriptions. Purpose and users help judge suitability, but do not determine a font, palette, or style. Do not infer aesthetic preferences from age, gender, industry, or similar labels. Adapt the order to the user's input, and do not restart a full background interview for a local edit.

## Identify where the user is stuck

Difficulty expressing a preference is not always a lack of vocabulary. These are clues for choosing help, not categories that must be diagnosed in sequence:

| Difficulty | Possible help | Avoid |
| --- | --- | --- |
| A feeling without words | Describe the feature they point to in ordinary language; name it if useful | Requiring terminology first |
| Differences are not yet understood | Explain visible changes, give content-specific examples, or try them | Repeating near-synonymous adjectives |
| A preference has not formed | Allow tentative choices and revision after seeing results | Forcing a complete style choice at once |
| Requirements appear to conflict | Check dimensions and scope before discussing a tradeoff | Treating compatible features, such as low decoration and high density, as contradictory |

Questions and candidate sets can influence answers. Do not assume a complete preference is waiting to be "measured." Do not steer with labels such as "sophisticated" versus "tacky," or infer attitudes toward every other option from a limited selection.

Vocabulary lowers the expression barrier; it does not classify people by demographic attributes or measure a fixed aesthetic personality. When the user wants a first version, try one within their authorization and retain tentative status.

## How to use the categories

Categories support understanding, questioning, and recording. Do not present the whole library as a required questionnaire or treat its output as a fixed aesthetic profile.

| What needs clarification | Read as needed | Purpose |
| --- | --- | --- |
| Desired experience | [Experience goals](vocabulary/experience.md) | Connect words such as "efficient," "approachable," or "reassuring" to tasks and feelings |
| Differences in appearance and expression | [Visual dimensions](vocabulary/visual.md) | Help users recognize preferences through observable differences |
| Where to begin exploring | [Style combinations](vocabulary/styles.md) | Offer comparable starting points, then identify the parts the user actually likes |
| Which design layer an issue belongs to | [Six-layer concept map](concepts.md) | Locate content, space, visual language, composition, or adaptation issues; read only relevant branches |
| Turning known preferences into implementation | [Candidate rules](principles.md), [specification structure](design-spec.md), [tokens](tokens.md) | Translate expressed preferences into conditional requirements |

Follow the user's input. Inspect a concrete reference first; unpack possible meanings of "sophisticated" if that is all you have; directly restate differences the user can already describe. Do not force a style-name selection first.

## The discovery loop

### 1. Preserve the wording and find the important ambiguity

Keep the user's words and counterexamples, such as "not too empty, but still clean." Distinguish unknowns, ambiguity, and actual conflict. Unmentioned colors are unknown; "premium" is ambiguous; wanting both generous whitespace and more entries in the same view may require a tradeoff.

First check whether requirements concern different dimensions or pages. Low decoration can coexist with high density; an expressive homepage can coexist with a restrained workspace. Do not rush into a forced choice.

### 2. Choose the most useful question

Prioritize an unanswered issue whose resolution would materially change this design. Usually focus on one difference, with a closely related question if necessary, rather than walking through every dimension.

Use differences the user can recognize. With the same content, "more information together in one view" versus "more space and browsing in sections" is more concrete than "what style do you like?" Explain the difference before introducing "information density" if needed.

### 3. Help the user distinguish options, including choosing none

If offering options, use a small number of materially different, neutral descriptions. If the user still cannot distinguish them, try another explanation, example, or suitable form of expression. A fixed visual demonstration stage is not required.

- Name observable differences neutrally; do not rank options as "premium/basic" or "professional/tacky."
- Accept "not sure," "neither," "between them," and "only A's font." Do not require acceptance of an entire combination.
- Not choosing an option does not mean disliking it; no reply does not mean accepting a default.
- You can begin by excluding disliked features, but record only explicit exclusions and their scope.
- If differences remain unclear, change the content, local comparison, or question rather than repeating synonyms.

### 4. Restate the choice and listen for correction

Briefly restate what has been expressed, with a reusable term if useful. For example: "You want low decoration and relatively high information density: content stays together, with fewer card borders and background blocks."

Ask again only if meaningful ambiguity remains. Do not require formal confirmation after every choice or treat your added interpretation as the user's decision. Corrections from the user take precedence over category definitions.

### 5. Make a version when enough is clear, then hear how it feels

You can write guidelines once the current task, main experience goals, and differences that affect this proposal are clear enough. Leave untouched dimensions blank or unknown; do not continue questioning just to complete a profile.

If the user delegates decisions or wants results first, offer a justified tentative direction and continue. Label it as a recommendation, not a selected preference. While a key choice awaits an answer, proceed only with independent work.

Apply the guidelines to a real preview or authorized page, then ask about that version. Listen to the user's own words before locating specific relationships in typography, density, hierarchy, or interaction. Do not lead with "isn't this more sophisticated?" If they only say "not right," use the indicated area and current changes to narrow the ambiguity instead of assigning the cause to a token without evidence.

Record the version and scope of feedback in the [decision record](decisions.md), update affected guidelines, and use them for the next version. Give the user a chance to respond to actual results each round, without requiring scores, fixed rounds, or repeated confirmation of clear choices.

## Match the explanation to the user's understanding

Prefer the user's own references and ask about specific parts. A reference is a clue, not approval of an entire website.

"This reference looks lively" is an observation, not necessarily "I want my product to look lively." Distinguish what the user is describing from what they want to retain or change; do not turn reaction words directly into target preferences.

Text explanations, situational examples, existing references, visual comparisons, and sketches can all help. The agent chooses based on user response, task, and tools. Discovery can continue without visual tools.

Whatever method you use, record only preferences actually expressed. Partial feedback on an example does not approve the whole design. State what you inspected in references; do not present self-made material as a real external example. Preference discovery does not automatically authorize a complete website implementation or publication.

## Ways to unpack common ambiguous words

These are possible interpretations, not claims about what the user means.

| User wording | Possible meanings | Example next step |
| --- | --- | --- |
| Sophisticated, premium, polished | Typographic precision, restraint, materials, scale, image quality | Compare an emphasis on typography with an emphasis on materials and depth |
| Simple, clean | Less decoration, less information, clearer groups, fewer colors | First distinguish reducing decoration from reducing visible information |
| Expansive, bold | Larger type or imagery, more open spacing, stronger focal points | Compare scale and whitespace with the same content before choosing colors |
| Technological | Data-tool precision, futuristic expression, exact order, luminous materials | Explain different constructions without defaulting to dark neon |
| Professional | Reliability, precise language, sufficient information, visual restraint | Ask where in use the user most wants to feel this quality |
| Warm | Warm colors, natural materials, soft shapes, approachable language | Identify the source in a reference without bundling a whole style |
| Playful | Vivid color, illustration, free composition, motion feedback | Identify the expressive medium first, then its intensity |
| Avoid the AI look | Repeated templates, irrelevant decoration, generic copy, missing domain content | Ask which parts of a counterexample they dislike; do not globally ban a font or gradient |
| Too messy | Unclear hierarchy, weak grouping, too much emphasis, too much information | Locate the hard-to-find content or area before diagnosing the cause |
| Too empty | Excess spacing, insufficient content, unbalanced proportions, weak focal points | Compare with real content instead of adding decoration or invented information |

## Example conversation: from "simple and sophisticated" to an expressible preference

This is an illustrative conversation, not a decision made by this project's user.

> User: I want it simple and sophisticated, but not too empty.
>
> ByTaste: Let's separate what "simple" means. Keeping the same information and functions, would you rather reduce borders and background blocks and group through alignment, or keep clear regions with a container for each group? Somewhere between is also fine.
>
> User: Less decoration, but I still want to see plenty of content.
>
> ByTaste: That establishes low decoration and relatively high information density. Is the sophistication more about precise typography and alignment, or materials and depth? If the words are hard to judge, we can compare a small example.
>
> User: More careful typography. No glass effects.
>
> ByTaste: You could describe this as low decoration, compact but clearly grouped, with refinement coming mainly from typography and alignment, avoiding glass materials. Colors and corner shapes are still undecided.

Map only the selected parts to rules and token needs. This description does not imply monochrome, a particular font, or square corners.

## Save preferences and revise them

Promptly record choices that affect later design using the [decision agreement](decisions.md). Keep the user's wording, choice context, specific meaning, scope, status, and implementation relationships. `design.md` summarizes the current direction and cites decision IDs; it does not maintain another preference history.

For corrections, distinguish clarification, local exception, and replacement. Update the effective summary and check affected rules without reopening clear, unaffected choices. Preserve new project-specific terms in the user's language rather than forcing a category match.

These categories are an extensible design vocabulary, not a psychological scale. Do not convert selection counts into an unvalidated "taste score."

## Extend the categories gradually

Each new concept needs a stable ID, common user expressions, an observable or discussable meaning, a distinguishing question, relationships to specifications or rules, and misuse boundaries. Prefer aliases for synonyms. When a word has several meanings, preserve branches rather than forcing them together.

For frequent concepts that support both questioning and implementation, follow the [knowledge entry agreement](knowledge/index.md): include applicability, references/counterexamples, rule and token relationships, and verification. Strengthen evidence for frequent entries before increasing the label count.

New concepts must improve recognition or design decisions, not merely add adjectives. Attribute concrete examples and state observation limits. Combinations without supporting examples remain exploratory suggestions. Expressions outside the library can remain in the project until curated; personal project preferences must not become defaults for everyone.

## Method sources and limits

[Slovic's research on preference construction](https://bear.warrington.ufl.edu/brenner/mar7588/Papers/slovic-ampsy1995.pdf) reminds us that elicitation methods can affect choices. This is general decision research, not proof that this design guidance works. [Reaction-word practice](https://www.nngroup.com/articles/microsoft-desirability-toolkit/) supports using vocabulary to aid expression while noting that words can mean different things to different people. Evaluating a reference still differs from stating project intent.

[A meta-analysis of choice overload](https://chernev.com/wp-content/uploads/2017/02/ChoiceOverload_JCP_2015.pdf) suggests considering preference clarity and how easily options can be compared. It does not prescribe a fixed number of options for a design conversation; adapt to understanding and current ambiguity.
