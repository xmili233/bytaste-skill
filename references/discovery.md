# Help users recognize and express preferences

Read this when a user has only a vague feeling, lacks design terminology, cannot explain what they like in a reference, or gives descriptions that seem to conflict. The aim is to help them express what they want and then form guidelines.

Obtaining a user-provided aesthetic basis before design and explicitly asking for feedback after showing each version are required. The explanation and comparison methods below are optional: choose what helps, without a fixed questionnaire or number of questions.

Start from a description of what the user likes or dislikes, a screenshot, or a design link they want to draw from. Relevant effective project decisions also count. Images are not mandatory when the user has supplied a useful description, but some user-provided aesthetic basis is mandatory. If none exists, ask for it and wait instead of choosing a style and making a version. Preferences can become more precise after seeing results; they need not specify every implementation value in advance.

When the product and pages are unknown but an aesthetic basis has been supplied, proceed with viewable standards and tokens. Missing business context is not the same as missing style input and does not require a full interview. For an explicit product or page request, obtain only essential requirements. Professional implementation defaults within the supplied direction can remain recommendations without individual approval.

## Required style input before design

First check existing conversation and effective project decisions. Do not ask for material the user has already provided. If the current direction is not grounded in their input, ask them to do any one of the following:

- Describe the feeling or observable features they like or dislike, in their own words.
- Share a screenshot or design file they like, optionally pointing to the relevant part.
- Share a website or design-example link they want the design to draw from.

In the first question, offer two or three relevant [free-browsing platforms](reference-platforms.md) when the user needs somewhere to look. Select them by the task: website galleries for pages, UI/project galleries for app interfaces or brand expression. Browsing a platform is optional; a useful description or their own reference is sufficient.

A concise example, adapted to the user's language and task:

> Before I design this, what kind of look do you like? You can describe it, share a screenshot, or send a website/design link. If you need ideas, [Lapa Ninja](https://www.lapa.ninja/) and [Siteinspire](https://www.siteinspire.com/) have large website galleries you can browse for free. One example is enough to start; tell me what you like about it, or whether you mean the overall feel.

For an app or dashboard, substitute the relevant UI entries from the platform guide. Do not require paid access, registration, a download, or all three formats. If a site is inaccessible, offer another free entry or accept a description/screenshot; do not bypass access controls or pretend to have viewed it.

Wait for the answer before generating visual guidelines, tokens, a style preview, or a page that assumes a new direction. While waiting, code inspection, content clarification, and helping locate existing references may continue. Do not make your own style candidates as a substitute for the missing input. A blank "you decide" or "show me a first version" alone is not an aesthetic preference.

Input is sufficient when you can state the intended visual direction or chosen reference and its scope without inventing the user's taste. A concrete description such as "compact, low decoration, with clear type hierarchy" is enough; exact fonts and colors can remain recommendations. If all you have is "beautiful/professional," or an unexplained image that may be a bug report rather than inspiration, ask a focused follow-up. Do not demand exhaustive preferences or a formal confirmation when the user's intent is already clear.

## Recommended background: purpose, users, and context

Before deciding overall feel and visual style, it is usually worth understanding whom the design serves and what they are doing. These are optional background prompts, not a required form or fixed question order:

| Background | Possible question |
| --- | --- |
| Main purpose | What is this product or page for, and what should it help people do? |
| Intended users | Who will use it, and how familiar are they with this type of task? |
| Use context | In what circumstances and on what devices will they use it: occasional browsing or sustained work? |

Reuse answers already available in project descriptions, conversation, or the interface. Ask selectively only when missing background would help the current design. The user may leave product background unknown and start with visual preferences or references. This does not waive required style input. Do not invent personas.

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

Vocabulary lowers the expression barrier; it does not classify people by demographic attributes or measure a fixed aesthetic personality. A first version can use tentative implementation choices within the user's supplied direction. If that direction is absent, first help them express it or choose a reference.

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

You can write guidelines once the user-provided aesthetic basis and current scope are clear enough to ground this proposal. Leave untouched dimensions blank or unknown; do not continue questioning just to complete a profile.

Delegation of implementation details or a request for quick results does not supply missing style input. Once an aesthetic basis exists, make justified tentative implementation choices within it and label them as recommendations. While required input or a key choice awaits an answer, proceed only with independent work.

Apply the guidelines to a real preview or authorized page, show that version, and explicitly ask about its effect in the delivery message: for example, "Which parts feel right to you, and which would you change?" This question is required, not a generic offer to help later. Listen to the user's own words before locating specific relationships in typography, density, hierarchy, or interaction. Do not lead with "isn't this more sophisticated?" If they only say "not right," use the indicated area and current changes to narrow the ambiguity instead of assigning the cause to a token without evidence.

Record the version and scope of feedback in the [decision record](decisions.md), update affected guidelines, and use them for the next version. If the user has already evaluated this exact version, process that feedback instead of asking again. Otherwise, ask and leave the version awaiting feedback. Delivering it does not require an immediate reply, but silence does not authorize an inferred preference or another aesthetic iteration. Scores, fixed rounds, and repeated confirmation of clear choices are not required.

## Match the explanation to the user's understanding

Prefer the user's own references and ask about specific parts. A reference is a clue, not approval of an entire website.

"This reference looks lively" is an observation, not necessarily "I want my product to look lively." Distinguish what the user is describing from what they want to retain or change; do not turn reaction words directly into target preferences.

Text explanations, situational examples, existing references, and comparisons can help collect the required input. Sketches can help refine a direction after it has a user-provided basis. The agent chooses methods based on user response, task, and tools; discovery can continue without visual tools.

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
