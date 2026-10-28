# Guidelines preview interactions

Scope: local design specimens without business data or remote services.

- Section navigation scrolls to the corresponding guideline, with a subtle current-section indicator.
- The type specimen button cycles through Aa, Ag, Rr, and 09 to show different glyphs in the same font.
- Color swatches and type parameters support copying. Failures show an honest message rather than false success.
- Three layout buttons retain the same content and use Motion to connect positional changes. Show grid displays only composition guides.
- Sample buttons, switches, choices, inputs, and disclosures use local visual state and do not save business objects.
- The motion region demonstrates press, entry/exit, and spring behavior, with replay and reversal.
- Respect system reduced motion by default. An explicit Reduce motion option lets users inspect the alternative state.
- If Motion fails to load, retain readable content and clearly report the missing motion.

Animation constants come from tokens.css; spring details are tuned for this example. Inputs and choices return to defaults on refresh.
