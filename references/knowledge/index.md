# Reusable design knowledge entries

Vocabulary locates concepts to discuss; knowledge entries help apply them to questions, choices, implementation, and verification. Select entries using the user's wording, task, and relevant dimensions, check applicability, and use only relevant parts.

See the [six-layer concept map](../concepts.md) for relationships. This index routes common issues without loading all entries. Existing category IDs remain stable; one entry may serve several dimensions. L0 expressive intent uses discovery, vocabulary, and decisions instead of another preference-status system. Enter layout and motion guidance through the concept map.

Implementation strategies are conditional; the [default quality baseline](../visual-quality.md) applies independently. Reading an entry does not mean the user selected its style, and declining a strategy does not waive relevant quality.

## Read by issue

| Layer | Entry ID | Common entry points | Related categories | Read |
| --- | --- | --- | --- | --- |
| L1 Content | `knowledge.content-expression` | Template-like copy, flat content, no narrative | `visual.voice`, `visual.emphasis` | [Content organization and expression](content-expression.md) |
| L2 Space | `knowledge.density` | Empty, cramped, insufficient visible information, compact | `visual.density`, `goal.comparison`, `goal.efficiency` | [Information density](density.md) |
| L2 Space / L3 Typography | `knowledge.hierarchy` | Weak focus, competing emphasis, oversized headings | `visual.emphasis`, `visual.scale`, `goal.clarity` | [Text hierarchy](hierarchy.md) |
| L2 Space | `knowledge.grouping` | Clean, too many cards, unclear group boundaries | `visual.decoration`, `goal.clarity`, `goal.focus` | [Containers and decoration](grouping.md) |
| L3 Visual | `knowledge.typography` | Correct font but rough typography, cramped CJK text, unaligned numerals | `visual.typography`, `visual.scale` | [Typography system](typography.md) |
| L3 Visual | `knowledge.color` | Correct values but wrong feeling, unbalanced color | `visual.palette`, `visual.saturation`, `visual.brightness` | [Color relationships and roles](color.md) |
| L3 Visual | `knowledge.shape-surface` | Toy-like, cheap depth, optical misalignment | `visual.shape`, `visual.depth`, `visual.texture` | [Shape, surfaces, and optical detail](shape-surface.md) |
| L3 Visual | `knowledge.imagery` | Mismatched icons, photos do not fit, bad crops | `visual.imagery`, `visual.scale` | [Icons, imagery, and graphics](imagery.md) |
| L4 Composition | `knowledge.component-grammar` | Components lack a shared language, states drift | `visual.shape`, `visual.density`, `visual.emphasis` | [Component grammar](component-grammar.md) |
| Across L1 / L4 / L5 | `knowledge.experience-quality` | Mental effort, detours, interruption, lost progress, unrecoverable failure, slowness, operation barriers | `goal.clarity`, `goal.low-friction`, `goal.control`, `goal.confidence` | [Experience quality: goals and optional examples](experience-quality.md) |
| L5 Continuity | `knowledge.adaptation` | Cramped mobile layout, long-content breakage, cross-page drift | `visual.geometry`, `visual.typography`, `visual.motion` | [Adaptation and continuity](adaptation.md) |

An input may relate to two entries, such as "simple but not too empty" involving decoration and density. Identify the issue that most affects the current decision rather than loading everything. If no entry fits, retain the gap; do not fabricate a match or force a nearby term.

## Entry agreement

Reusable entries should contain the following. Simple entries may combine sections rather than add empty fields:

| Content | Requirement |
| --- | --- |
| Identity and entry points | Stable ID, related categories, common user expressions |
| Nature | Distinguish research, practitioner experience, reference observation, ByTaste interpretation, and attributed standards. Project adoption status does not belong in generic entries |
| Problem and mechanism | Explain possible issues behind the wording and why a method might help; a mechanism does not guarantee project results |
| Candidate strategies | Several methods for a goal, with conditions and costs; no single style is the only answer |
| Recognizable differences | Changes a user can see or experience, described neutrally |
| Questions and choices | A question reducing ambiguity, and what a choice can and cannot establish |
| Applicability and tradeoffs | Task, content, and platform conditions, limits, and costs |
| References and counterexamples | Source, location, observation scope; distinguish actual observation, original examples, and inference. Counterexamples describe misuse, not another valid option as bad design |
| Implementation relationships | Effects on rules, components, and token roles; project context determines values |
| Checks and evidence limits | How to inspect conformance and obtain feedback; what sources did and did not study; no added efficiency or usability research requirement |

Reuse existing IDs and synonymous expressions when adding entries. Add an entry only when it supports a real problem or decision. Do not generalize a personal choice or one successful screenshot across projects.

## From a library entry to a project rule

Entries provide optional knowledge without user adoption status. When using one, connect its ID, a concrete project rule, real evidence, and checks in the guidelines. For user choices, record the actual selection and scope in the [decision record](../decisions.md) and cite the decision ID. For baselines, cite version/ID; recommendations retain recommendation attribution. A partial user choice adopts only that part.

For example, a rule derived from `knowledge.density` for tighter reimbursement-list spacing does not determine font, record count, or palette. Resolve shared rules and page exceptions under the [specification structure](../design-spec.md).

## Sources and maintenance

Entries provide understanding and tradeoff support without prescribing how agents must explain them. External guidance and design reasoning are background, not proof of project-specific user validation.

Prefer original sources, evidence type, studied/observed subjects and scope, and known limits. Reposts of one study count as one source. Several websites using a pattern does not prove that pattern caused success. Compare conditions behind conflicting conclusions instead of voting for a "best design." Project adoption or approval does not turn an entry into a universal rule.

A future API may return similar entries. Check sources, applicability, and versions, keeping retrieved suggestions separate from user choices. Use local material when sufficient; an API is not a prerequisite.

[GOV.UK pattern contribution criteria](https://design-system.service.gov.uk/community/contribution-criteria/) illustrate explicit contexts and evidence. Do not import their full acceptance process as a ByTaste requirement. Early recommendations may remain if their basis and unknowns are stated honestly.
