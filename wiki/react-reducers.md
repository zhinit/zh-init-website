# React Reducers

Reducers consolidate all state update logic into a single pure function outside
the component. (source: react-learn-extracting-state-logic-into-a-reducer.md)

## useReducer

```js
import { useReducer } from 'react';
const [state, dispatch] = useReducer(reducer, initialArg, init?);
```

(source: react-ref-useReducer.md)

### Parameters

- **`reducer`** — pure function `(state, action) => nextState`.
- **`initialArg`** — initial state value (or argument to `init`).
- **`init`** (optional) — initializer function. If provided, initial state is
  `init(initialArg)`. Avoids recreating initial state on every render.

### Returns

`[currentState, dispatch]`

### dispatch

`dispatch(action)` — triggers a re-render with new state. By convention,
actions are objects with a `type` string property.

- Only updates state for the next render (reading state after dispatch returns
  the old value).
- Skips re-render if new state is identical (via `Object.is`).
- Has a stable identity — safe to omit from Effect dependencies.

(source: react-ref-useReducer.md)

## Migration from useState

Three steps (source: react-learn-extracting-state-logic-into-a-reducer.md):

1. Replace `setState` calls with `dispatch(action)`.
2. Write the reducer function.
3. Use `useReducer` in the component.

## Action conventions

- Must have a string `type` property describing what happened (e.g.,
  `'added'`, `'deleted'`).
- Additional fields carry minimal information about the event.
- Each action describes a single user interaction, even if it leads to multiple
  data changes.

(source: react-learn-extracting-state-logic-into-a-reducer.md)

## Writing reducers well

- Reducers must be pure — no requests, no timeouts, no side effects, no
  mutations.
- Use `switch` with `{}` blocks around each `case` and always `return`.
- Throw on unknown action types (`default: throw Error(...)`).
- Use Immer (`useImmerReducer`) for concise mutative-style reducers — Immer
  creates copies under the hood.

(source: react-learn-extracting-state-logic-into-a-reducer.md)

## useState vs useReducer

| Dimension    | useState                     | useReducer                          |
|-------------|------------------------------|-------------------------------------|
| Code size   | Less boilerplate             | Better when many handlers modify state similarly |
| Readability | Simple updates               | Separates "what happened" from "how state changes" |
| Debugging   | Harder to trace              | Log every action and resulting state |
| Testing     | Tied to component            | Reducer is a pure function, testable in isolation |

They are interchangeable. `useReducer` can be implemented with `useState`:

```js
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);
  function dispatch(action) { setState(s => reducer(s, action)); }
  return [state, dispatch];
}
```

(source: react-learn-extracting-state-logic-into-a-reducer.md)

## Combined with context

Use `useReducer` + [[react-context|context]] for scalable state management:
provide `dispatch` via context so any descendant can dispatch actions without
prop drilling.
(source: react-learn-passing-data-deeply-with-context.md,
react-ref-useContext.md)

## Caveats

- State is read-only in reducers — always return new objects, never mutate.
- In Strict Mode, reducer and initializer are called twice. One result is
  discarded.

(source: react-ref-useReducer.md)

## Related pages

- [[react-state]] — useState for simpler state
- [[react-context]] — providing dispatch via context
- [[react-hooks]] — useReducer API reference
