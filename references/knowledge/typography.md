# Typography system

ID: `knowledge.typography`. Layer: L3. Related: `visual.typography`, `visual.scale`, `visual.density`, `knowledge.hierarchy`. Nature: design-system practice and ByTaste interpretation.

## Entry points and mechanism

"Editorial feel," "an expensive font but rough typography," "cramped Chinese text," and "unaligned numbers" may concern font character or typographic relationships. A font is not a complete typography system; roles, line length, and rhythm change its feeling.

Ask, for example: "Do you like the letterforms themselves, or the size and spacing relationships between headings and body text?" A font choice does not also select density, tracking, or heading size.

## Concepts and tradeoffs

| Concept | What guidelines should establish | Choice and misuse boundaries |
| --- | --- | --- |
| Font roles | Display, heading, body, caption, control, numeric/code roles | Roles may share fonts; multiple families are not required for professionalism |
| Glyphs and optical scale | Apparent size, width, stroke weight, serifs, available optical sizes | Equal nominal sizes may not appear equal; inspect actual rendering after a font change |
| Scale and contrast | How headings, body, and supporting text create hierarchy | Strong hierarchy may come from weight or position; no mandatory scale ratio or maximum size |
| Line length and vertical rhythm | Text width, leading, paragraph spacing, heading-to-content gaps | Short headings and long body text may need different rhythm; do not use one line height for every role |
| Tracking and wrapping | Where tracking varies and how long words/headings wrap | Do not mechanically apply spaced uppercase Latin styling to Chinese body text |
| Mixed scripts and numerals | CJK fallback, punctuation, baselines, amounts/units, tabular figures where needed | Use actual languages and numbers; numeric alignment does not require monospaced text throughout |

## Implementation

`design.md` defines roles, combinations, line length, and wrapping. Tokens own adopted families, weights, sizes, leading, and tracking. Font files and licenses are assets, not files to copy into token data.

Example recommendation: "Use leading suited to continuous reading for body text; give parameters a numeric role aligned with their labels. Let headings wrap, and do not shrink auxiliary text indefinitely to force one line." Choose values with the actual font and preferences.

## Preview and checks

Show short/long headings, paragraphs, mixed CJK/Latin text, and actual numerals for adopted roles. Inspect actual fallback where needed. Examine combinations before the size list; attractive Latin glyphs must not conceal Chinese typography problems. Check roles, wrapping, and rhythm rather than equating no overflow with quality.

[Adobe Spectrum typography](https://spectrum.adobe.com/foundations/typography/typography-system) combines roles, parameters, non-Latin scripts, and platform differences. ByTaste adopts these dimensions without copying Adobe fonts, scale ratios, or weight restrictions. Concrete results still need project preview and user feedback.
