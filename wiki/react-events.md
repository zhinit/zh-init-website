# React Events

Event handlers are functions that run in response to user interactions.
They are the primary place for side effects in React.
(source: react-learn-responding-to-events.md)

## Adding event handlers

Define a function inside the component, pass it as a prop:

```jsx
function Button() {
  function handleClick() { alert('Clicked!'); }
  return <button onClick={handleClick}>Click me</button>;
}
```

Naming convention: `handle` + event name (e.g., `handleClick`,
`handleMouseEnter`). (source: react-learn-responding-to-events.md)

Inline alternatives:

```jsx
onClick={() => alert('...')}
onClick={function handleClick() { ... }}
```

**Pass, don't call:** `onClick={handleClick}` (correct) vs
`onClick={handleClick()}` (wrong — fires immediately during rendering).
(source: react-learn-responding-to-events.md)

## Event propagation

Events bubble up through the React tree:
(source: react-learn-responding-to-events.md)

1. **Capture phase** — travels down, firing `onClickCapture` handlers.
2. **Target** — runs the clicked element's `onClick`.
3. **Bubble phase** — travels up, firing `onClick` handlers on ancestors.

All events propagate in React except `onScroll`, which only fires on the
element it is attached to.

### Stopping propagation

`e.stopPropagation()` — stops the event from bubbling to parent handlers.

### Preventing default behavior

`e.preventDefault()` — prevents the browser's default action (e.g., form
submission reloading the page).

These are different operations and are not interchangeable.
(source: react-learn-responding-to-events.md)

## Passing event handlers as props

Custom event handler prop names should start with `on` + capital letter (e.g.,
`onPlayMovie`, `onSmash`). This lets parent components specify child behavior.
(source: react-learn-responding-to-events.md)

## Handler wrapping pattern

Alternative to propagation — child handles the event and explicitly calls the
parent:

```jsx
<button onClick={e => {
  e.stopPropagation();
  onClick();
}}>
```

(source: react-learn-responding-to-events.md)

## Event handlers vs rendering

Event handlers do not need to be pure. They are the best place for side
effects (unlike rendering functions, which must be pure).
(source: react-learn-responding-to-events.md)

Event handlers have access to props and state via closure.
(source: react-learn-responding-to-events.md)

## Accessibility

Use `<button>` (not `<div>`) for click handlers to preserve built-in browser
behaviors (keyboard navigation, accessibility).
(source: react-learn-responding-to-events.md)

## Related pages

- [[react-components]] — where event handlers are defined
- [[react-state]] — event handlers update state
- [[react-effects]] — side effects caused by rendering (not events)
