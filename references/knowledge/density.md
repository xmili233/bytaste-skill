# Information density

ID: `knowledge.density`. Nature: conditional practitioner guidance. Categories: `visual.density`, `goal.comparison`, `goal.efficiency`.

## Recognition and questions

Users may say "too empty," "too cramped," or "I cannot see enough at once." Distinguish insufficient content, excess space, weak hierarchy, and inadequate action areas. They are not all density problems.

Explain density as the same information arranged more tightly or with more space between rows. If unclear, the agent chooses further help, such as a specific usage example.

Compact and spacious are both valid. Selecting compactness applies to current content density; it does not accept smaller text or targets.

## Applicability and tradeoffs

- Frequent comparison across records may benefit from a more compact presentation.
- Long content, item-by-item reading, or frequent touch use needs adequate reading and action space.
- Row spacing, content count, and grouping jointly affect perceived density; distinguish them.

## Mechanism and candidate strategies

Content count, space, emphasis, and grouping jointly determine density. A messy appearance may need clearer hierarchy and grouping rather than less information; emptiness does not automatically call for decoration. Candidates include compact rows/columns, more generous spacing, and local density differences. Retain dimensions the user did not request changing so feedback remains interpretable.

## References and counterexamples

[Carbon Data table](https://www.carbondesignsystem.com/building-blocks/core/components/data-table/guidelines) presents contexts for different densities; it does not prove a particular row height fits this project.

Misuse: deleting necessary records to look simple; shrinking both type and hit areas for compactness; expanding a local density choice to every page.

## Implementation relationships

May affect list gaps, group spacing, table row heights, and content-reveal strategies. Reuse existing density variants first, adding candidate values only when necessary. A density choice alone does not justify pagination, hidden fields, virtualization, or other unsupported features.

## Verification

Inspect density, wrapping, whitespace, and overflow with typical content, long content, and relevant widths, checking the selected direction. Feedback on one region updates only that scope; do not infer improved task efficiency.

Evidence status: guidelines support contextual candidates; user feedback determines whether the result is liked. Efficiency gains are not the current verification goal.
