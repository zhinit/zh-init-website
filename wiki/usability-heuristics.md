# Usability Heuristics

Jakob Nielsen's 10 heuristics for user interface design. Originally developed
with Rolf Molich in 1990, refined in 1994 through factor analysis of 249
usability problems. Unchanged since 1994 because they're rooted in fundamental
human behavior (source: nngroup-ten-usability-heuristics.md).

## The 10 heuristics

### 1. Visibility of system status

Keep users informed about what's happening through timely feedback. Predictable
interactions build trust. Communicate state clearly before consequential
actions.

### 2. Match between system and real world

Use language and concepts familiar to users, not internal jargon. Controls
should follow real-world conventions so the interface is easier to learn and
remember.

### 3. User control and freedom

Provide clearly marked emergency exits. Support Undo/Redo. Display clear
Cancel buttons. When it's easy to back out, users feel confident exploring.

### 4. Consistency and standards

Users shouldn't wonder whether different words or actions mean the same thing.
Follow platform and industry conventions. Jakob's Law: users spend most time
on other products, so their expectations come from elsewhere.

### 5. Error prevention

Prevent problems before they occur. Two error types:
- **Slips**: unconscious, caused by inattention
- **Mistakes**: conscious, caused by mental model mismatches

Prioritize preventing high-cost errors. Provide helpful constraints, good
defaults, and confirmation dialogs.

### 6. Recognition rather than recall

Make elements, actions, and options visible. Recognition requires less
cognitive effort than recall. Offer contextual help rather than forcing users
to remember across steps.

### 7. Flexibility and efficiency of use

Shortcuts for expert users (keyboard shortcuts, gestures) that don't impede
novices. Offer personalization and customization options.

### 8. Aesthetic and minimalist design

Interfaces should not contain irrelevant or rarely needed information. Every
element competes for attention — prioritize content that supports primary user
goals. This isn't about flat design; it's about signal-to-noise ratio.

### 9. Help users recognize, diagnose, and recover from errors

Error messages in plain language. Precisely indicate the problem. Constructively
suggest a solution. Use visual treatments (bold, red) to ensure messages are
noticed.

### 10. Help and documentation

Ideally unnecessary, but when needed: searchable, contextual (at moment of
need), and actionable (concrete steps).

## Application to web design

Heuristic 8 (aesthetic and minimalist design) directly connects to
[[visual-hierarchy]] — every element on the page should earn its place.
Heuristic 4 (consistency) connects to [[typography]] and design systems.
Heuristic 2 (match real world) informs navigation and [[color-theory]]
choices (blue for links, red for errors).

## Related pages

- [[visual-hierarchy]] — heuristic #8 in practice
- [[accessibility]] — heuristics #9 and #10 overlap with accessibility
- [[web-design-process]] — heuristics as evaluation criteria
