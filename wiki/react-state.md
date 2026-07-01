# React State

State is a component's memory — data that persists between renders and triggers
re-renders when changed. (source: react-learn-state-a-components-memory.md)

## Why local variables fail

1. Local variables do not persist between renders (React re-invokes the
   function from scratch).
2. Changes to local variables do not trigger re-renders.

(source: react-learn-state-a-components-memory.md)

## useState

```js
import { useState } from 'react';
const [index, setIndex] = useState(0);
```

Returns `[currentValue, setterFunction]`. The argument is the initial value,
used only on first render. (source: react-ref-useState.md)

### set function

`setState(nextState)` — if `nextState` is a function, it is treated as an
updater: receives pending state, returns next state. React queues updater
functions and applies them in order.
(source: react-ref-useState.md)

**Behavior:**

- Calling the setter updates state for the **next** render. Reading the state
  variable immediately after calling `set` returns the old value (state is a
  snapshot).
- React uses `Object.is` to compare new and current state. If identical, it
  skips re-rendering.
- React batches state updates — the screen updates after all event handlers
  have run. Use `flushSync` to force earlier DOM updates.
- The `set` function has a stable identity; safe to omit from Effect
  dependencies.

(source: react-ref-useState.md)

### Initializer function

Pass a function (not its result) to avoid expensive recalculation on every
render: `useState(createTodos)` not `useState(createTodos())`.
(source: react-ref-useState.md)

### Storing functions as state

Wrap in an arrow function because bare function arguments are treated as
initializers/updaters:

```js
const [fn, setFn] = useState(() => someFunction);
setFn(() => someOtherFunction);
```

(source: react-ref-useState.md)

## State immutability

State is read-only. Replace objects and arrays with spread syntax rather than
mutating. (source: react-ref-useState.md,
react-learn-keeping-components-pure.md)

## Multiple state variables

A component can have as many state variables as needed. If two always change
together, consider combining them into one object.
(source: react-learn-state-a-components-memory.md)

## State isolation

Each component instance has its own independent state. Rendering the same
component twice gives two separate copies. Parent components cannot access
child state. To share state between siblings, lift it to the closest common
parent. (source: react-learn-state-a-components-memory.md)

## Resetting state with key

Passing a different `key` prop to a component resets all its state (including
children). (source: react-ref-useState.md,
react-learn-you-might-not-need-an-effect.md)

```jsx
<Profile userId={userId} key={userId} />
```

## Deriving values (not state)

If a value can be computed from existing props or state, compute it during
rendering instead of storing it as state:
(source: react-learn-you-might-not-need-an-effect.md)

```js
// Bad: useEffect to derive fullName from firstName + lastName
// Good:
const fullName = firstName + ' ' + lastName;
```

Use `useMemo` for expensive calculations, not useEffect + state.
(source: react-learn-you-might-not-need-an-effect.md)

## Rules of hooks

Hooks (`useState`, `useEffect`, etc.) can only be called at the top level of
components or custom hooks. Not inside conditions, loops, or nested functions.
This ensures stable call order — React tracks hooks by their position.
(source: react-learn-state-a-components-memory.md)

A linter plugin (`eslint-plugin-react-hooks`) catches most violations.
(source: react-learn-state-a-components-memory.md)

## Caveats

- Calling `set` during rendering is allowed only from the currently rendering
  component, must be inside a condition, and must include a guard to prevent
  infinite loops. (source: react-ref-useState.md)
- In Strict Mode, initializer and updater functions are called twice to detect
  impurities. One result is discarded. (source: react-ref-useState.md)

## Related pages

- [[react]] — rendering model
- [[react-reducers]] — useReducer for complex state
- [[react-hooks]] — full hooks API reference
- [[react-effects]] — when state changes trigger effects
