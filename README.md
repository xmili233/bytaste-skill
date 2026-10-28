# ByTaste

Turn your taste into design standards for AI.

ByTaste starts with design references or descriptions you like. Through viewable versions and iterative feedback, it develops and maintains project design guidelines so later pages continue the confirmed direction.

Current version: **v0.5.2**. For AI development tools that support Agent Skills, including Claude Code and Codex.

## Install

Run in your project directory:

```sh
npx skills add xmili233/bytaste-skill
```

Follow the installer's prompts to choose tools and installation scope. You can also download this repository and place the folder containing `SKILL.md`, `references/`, and `assets/` in your tool's skills directory, named `bytaste`.

## Get started

Give the AI screenshots, websites, or design files you like, or describe the feeling you want:

> Use ByTaste to help clarify this project's design direction. I want a clean interface with clear emphasis, but not too much empty space. Use my references to create guidelines and a viewable preview, then adjust them from my feedback. Save confirmed choices for later pages to follow.

It is usually helpful to understand purpose, intended users, and context before exploring overall feel and visual style. Reuse existing information; references or a trial version are also valid starting points. No fixed questionnaire is required.

The core loop: **reference or description → viewable version → user feedback → updated guidelines → continued iteration and reuse**.

## What you get

- `design.decisions.md`: effective choices, scope, and the basis for revisions.
- `design.md`: reusable design rules.
- A separate token source: concrete colors, fonts, dimensions, spacing, and other values.
- `interaction.md`: interactions, states, feedback, and motion agreements.
- A corresponding preview: an actual view of the guidelines, layout, components, and motion.

Reuse equivalent existing documents, themes, or preview systems. When exploring style alone, present the guidelines themselves without inventing business pages.

## Design quality and specialist resources

The [default quality baseline](references/visual-quality.md) covers visual finish, low cognitive effort, control, continuity, recovery, responsive and stable behavior, basic accessibility, and environmental adaptation. It defines goals and judging cues; concrete implementations depend on the project and the model.

For deeper motion work, the [motion agreement](references/motion.md) points to relevant open-source skills. Prefer installed versions; otherwise consult upstream material as needed. ByTaste does not automatically install other skills or let external authors' style preferences override user choices.

Download and directly open the [bundled guidelines preview](assets/monochrome-preview/index.html), or run from the repository directory:

```sh
python3 -m http.server 4187 --bind 127.0.0.1 --directory assets/monochrome-preview
```

Visit `http://127.0.0.1:4187/`. The example's monochrome palette, fonts, and values are references, not defaults for every project.

See [SKILL.md](SKILL.md) for the complete entry point. The skill's effectiveness still needs validation through real projects and user feedback; it does not guarantee identical results across models.

## License

ByTaste uses the [MIT License](LICENSE). Bundled third-party assets retain their licenses: [Motion](assets/monochrome-preview/assets/motion-LICENSE.txt) and [Manrope](assets/monochrome-preview/assets/manrope-OFL.txt).
