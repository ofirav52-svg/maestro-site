I’ll update the contact section so the email button appears first and the Instagram DM button sits directly to its right on the exact same row.

Implementation details:
- Change the button container from wrapping layout to a single no-wrap horizontal row.
- Reorder the controls to: email button, then Instagram DM button.
- Reduce button padding slightly and add no-wrap text so both fit side-by-side on the current 390px mobile preview.
- Keep the existing styles, links, and email form behavior unchanged.