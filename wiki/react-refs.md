# React Refs

Refs hold values that persist between renders but do not trigger re-renders
when changed. They are an escape hatch from React's one-way data flow.
(source: react-learn-referencing-values-with-refs.md)

## useRef

```js
import { useRef } from 'react';
const ref = useRef(initialValue);
// ref.current is mutable — read and write freely
```

Returns `{ current: initialValue }`. On subsequent renders, returns the same
object. (source: react-ref-useRef.md)

### Refs vs state

| Refs | State |
|------|-------|
| `useRef(init)` → `{ current: init }` | `useState(init)` → `[value, setValue]` |
| No re-render on change | Triggers re-render |
| Mutable — modify `.current` directly | Immutable — use setter |
| Don't read/write during rendering | Can read any time; each render has its own snapshot |

(source: react-learn-referencing-values-with-refs.md)

### When to use refs

- Storing timeout/interval IDs.
- Storing and manipulating DOM elements.
- Storing objects not needed for JSX calculation.

(source: react-learn-referencing-values-with-refs.md)

### Best practices

- Treat refs as an escape hatch; prefer state when the value affects rendering.
- Never read or write `ref.current` during rendering (exception: one-time lazy
  init: `if (!ref.current) ref.current = new Thing()`).
- Refs update synchronously.
- Per-instance values should use refs, not module-level variables (which are
  shared across all instances).

(source: react-learn-referencing-values-with-refs.md, react-ref-useRef.md)

## DOM refs

Pass a ref to a JSX element's `ref` attribute to get the DOM node:

```jsx
<div ref={myRef}>
```

React sets `ref.current` during the commit phase. Before updating, it sets
affected refs to `null`. (source: react-learn-manipulating-the-dom-with-refs.md)

### Common operations

- **Focusing:** `inputRef.current.focus()`
- **Scrolling:** `node.scrollIntoView({ behavior: 'smooth', block: 'nearest' })`

(source: react-learn-manipulating-the-dom-with-refs.md)

### Ref callbacks for dynamic lists

Cannot call `useRef` in a loop. Use a `Map` with ref callbacks:

```jsx
<li ref={(node) => {
  map.set(item, node);
  return () => { map.delete(item); };
}}>
```

(source: react-learn-manipulating-the-dom-with-refs.md)

### Accessing child component's DOM

Pass ref as a prop:

```jsx
function MyInput({ ref }) {
  return <input ref={ref} />;
}
```

(source: react-learn-manipulating-the-dom-with-refs.md)

### Restricting exposed API

`useImperativeHandle` limits what the parent can do with a ref:

```js
useImperativeHandle(ref, () => ({
  focus() { realInputRef.current.focus(); }
}));
```

(source: react-learn-manipulating-the-dom-with-refs.md)

### Flushing state updates before reading DOM

Use `flushSync` from `react-dom` to ensure DOM is updated before reading it:

```js
flushSync(() => { setTodos([...todos, newTodo]); });
listRef.current.lastChild.scrollIntoView();
```

(source: react-learn-manipulating-the-dom-with-refs.md)

## Rules

- Avoid modifying DOM nodes managed by React — it can cause crashes or
  inconsistent visuals.
- Safe to modify parts of the DOM that React has no reason to update.
- In Strict Mode, ref callbacks run twice in development.
- React sets `current` back to `null` when the DOM node is removed.

(source: react-learn-manipulating-the-dom-with-refs.md, react-ref-useRef.md)

## Related pages

- [[react-state]] — for values that trigger re-renders
- [[react-effects]] — refs are often used alongside Effects
- [[react-hooks]] — full useRef API reference
- [[react-portals]] — flushSync for synchronous DOM updates
