# Monochrome design guidelines · preview draft

This directory is a runnable quality reference introduced with ByTaste v0.2. The project author approved its overall result. Borrow its organization and finish while adapting it to the current user's preferences.

- [Decision scope](design.decisions.md)
- [Visual tokens](tokens.css)
- [Interaction and motion](interaction.md)
- [Open preview](index.html)

## Direction and scope

Monochrome, neutral surfaces, clear text hierarchy, relational spacing, and subtle motion. Specific fonts, dimensions, layout, and motion values belong to this example. Approval of the overall result does not establish suitability for every user or individual approval of every value.

The page shows design guidelines only. Category navigation, token copying, layout switching, specimen states, and motion playback support inspection; they are not product features.

## Visual rules

| Rule | Current proposal |
| --- | --- |
| Text | Latin text uses local Manrope variable font; Chinese uses PingFang or Microsoft YaHei. Body 16px / 1.7, section headings 28px. Display specimens scale with width. |
| Hierarchy | Specimens are primary, section/role labels secondary, and parameters auxiliary. Copy controls have subdued emphasis. |
| Grayscale | Ink for primary text/actions; graphite for dark surfaces; medium gray for secondary text; silver/mist for graphics and boundaries; paper white for the canvas. |
| Spacing | A 4px base, with 4, 8, 12, 16, 24, 32, 48, 64, and related steps. Keep groups compact and sections distinctly separated. |
| Layout | Maximum content width 1216px. Editorial, primary/secondary split, and modular grid examples reuse the same content to show compositional changes. |
| Surfaces | Control radius 10px, main specimen panels 18px; use soft shadows where depth is needed. Monochrome does not mean no shadows. |
| Motion | Local Motion 14.6.0; feedback 160ms, state 240ms, entry 420ms, layout 450ms. Springs are tuned for the demonstrations. |
| Adaptation | Narrow views adjust type scale, grid columns, and content relationships while retaining specimens and inspectable parameters. |

`tokens.css` is the main source of visual values. `styles.css` defines presentation and specimen composition; animation timing reads tokens. The three compositions are guideline demonstrations, not selected business architectures.

## Running and assets

Open `index.html` directly; clipboard capability depends on browser permission. Alternatively, run `python3 -m http.server 4187 --bind 127.0.0.1` in this directory and visit `http://127.0.0.1:4187/`.

Motion and Manrope are local, with no runtime CDN dependency. Their licenses are in assets. Actual Chinese fallback depends on the system.

## Recorded checks from the original preview

- Viewed at 1440px desktop and 390px narrow widths, with no horizontal page overflow.
- Tested layout switching, grid display, button feedback, switch, input, disclosure, motion replay, and reduced-motion settings.
- Tested successful color copying and system reduced motion; desktop interaction checks captured no script errors.
- JavaScript syntax, local asset paths, and CSS token references passed. Cross-browser and real-phone touch testing were not performed. The author described the overall result as "very good" (translated) and requested applying the method to the skill.

The original approval above applies to the original preview. The English translation was separately inspected at 1440px, 390px, and 320px with no horizontal page overflow. English button feedback, layout switching, disclosure, reduced-motion feedback, and motion replay were checked; tested interactions produced no script errors. These checks do not imply user approval of the translated version, cross-browser coverage, or real-phone touch testing.
