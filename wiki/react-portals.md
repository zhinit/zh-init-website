# React Portals and DOM APIs

## createPortal

```js
import { createPortal } from 'react-dom';
createPortal(children, domNode, key?)
```

Renders React children into a different DOM node while maintaining the React
tree hierarchy. (source: react-ref-dom-createPortal.md)

### Parameters

- **`children`** — anything renderable (JSX, Fragment, string, number, array).
- **`domNode`** — a DOM node that must already exist. Passing a different node
  during an update causes portal content to be recreated.
- **`key`** (optional) — unique string or number.

### Behavior

A portal changes only the physical DOM placement. In every other way, the
portaled JSX acts as a child of the React component that renders it:
- It can access context provided by the parent tree.
- Events bubble up through the React tree, not the DOM tree.

(source: react-ref-dom-createPortal.md)

### Use cases

- **Modal dialogs** — render into `document.body` to escape `overflow: hidden`
  or z-index constraints.
- **Tooltips** — render outside clipping containers.
- **Non-React server markup** — render React content into static DOM nodes
  elsewhere on a partially-React page.
- **Third-party widget integration** — store a widget's DOM node in state,
  portal React content into it.

(source: react-ref-dom-createPortal.md)

### Caveats

- Event propagation follows the React tree, not the DOM tree. If this causes
  issues, stop propagation inside the portal or move the portal up in the
  React tree.
- Accessibility: portals do not automatically manage keyboard focus. Handle
  focus trapping and restoration yourself (WAI-ARIA Modal Authoring
  Practices).
- DOM node must exist before rendering.

(source: react-ref-dom-createPortal.md)

## flushSync

```js
import { flushSync } from 'react-dom';
flushSync(callback)
```

Forces synchronous DOM updates, breaking React's normal async batching.
(source: react-ref-dom-flushSync.md)

### Behavior

After `flushSync` returns, the DOM is guaranteed to be updated with state
changes made inside the callback.

### Use case

Third-party integrations where browser APIs expect the DOM to be updated
synchronously. Primary example: `window.onbeforeprint`.
(source: react-ref-dom-flushSync.md)

### Caveats

- Significantly hurts performance. Use as a last resort.
- May force Suspense boundaries to show fallback state.
- May run pending Effects and apply their updates synchronously.
- May flush updates outside the callback when necessary.
- Cannot be called during rendering (`useLayoutEffect`, `useEffect`,
  lifecycle methods) — produces a warning and noops.

(source: react-ref-dom-flushSync.md)

## Related pages

- [[react-refs]] — DOM refs and flushSync for reading DOM after state update
- [[react-performance]] — Suspense and transitions
- [[react-hooks]] — hooks API reference
