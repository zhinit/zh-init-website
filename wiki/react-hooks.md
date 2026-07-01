# React Hooks API Reference

Complete API reference for all React hooks. For conceptual guides, see the
linked wiki pages. (sources: react-ref-useState.md, react-ref-useEffect.md,
react-ref-useRef.md, react-ref-useContext.md, react-ref-useMemo.md,
react-ref-useCallback.md, react-ref-useReducer.md, react-ref-useTransition.md,
react-ref-useDeferredValue.md, react-ref-use.md, react-ref-useId.md,
react-ref-useActionState.md)

## Rules of hooks

All hooks (except `use`) must be called at the top level of a component or
custom hook. Not inside conditions, loops, or nested functions.
(source: react-learn-state-a-components-memory.md)

---

## useState

```js
const [state, setState] = useState(initialState)
```

See [[react-state]] for full guide.

- `initialState`: any value, or an initializer function (called once).
- `setState(next)`: if `next` is a function, treated as updater
  `(prev) => next`.
- Comparison: `Object.is`. Stable setter identity.

(source: react-ref-useState.md)

---

## useEffect

```js
useEffect(setup, dependencies?)
```

See [[react-effects]] for full guide.

- `setup`: function, optionally returns cleanup function.
- `dependencies`: `[a, b]` | `[]` | omitted. Compared with `Object.is`.
- Runs on client only, after commit.

(source: react-ref-useEffect.md)

---

## useRef

```js
const ref = useRef(initialValue)
```

See [[react-refs]] for full guide.

- Returns `{ current: initialValue }`. Same object across renders.
- Mutable. No re-render on change.

(source: react-ref-useRef.md)

---

## useContext

```js
const value = useContext(SomeContext)
```

See [[react-context]] for full guide.

- Returns value from nearest provider above.
- Re-renders when context value changes (`Object.is`).

(source: react-ref-useContext.md)

---

## useMemo

```js
const cached = useMemo(calculateValue, dependencies)
```

See [[react-performance]] for full guide.

- `calculateValue`: pure function, no arguments, returns cached value.
- Only recalculates when dependencies change (`Object.is`).
- Performance optimization, not a semantic guarantee — React may discard
  cached values.
- A calculation is "expensive" if `console.time` shows >= 1ms.

(source: react-ref-useMemo.md)

---

## useCallback

```js
const cachedFn = useCallback(fn, dependencies)
```

See [[react-performance]] for full guide.

- Caches the function itself (not its result).
- Equivalent to `useMemo(() => fn, dependencies)`.
- Returns cached `fn` when dependencies unchanged.

(source: react-ref-useCallback.md)

---

## useReducer

```js
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

See [[react-reducers]] for full guide.

- `reducer`: `(state, action) => nextState` (pure).
- `init`: optional initializer `(initialArg) => initialState`.
- `dispatch(action)`: stable identity, safe to omit from deps.

(source: react-ref-useReducer.md)

---

## useTransition

```js
const [isPending, startTransition] = useTransition()
```

See [[react-performance]] for full guide.

- Marks state updates as non-blocking Transitions.
- `isPending`: boolean flag for pending state.
- `startTransition(action)`: called immediately, state updates inside are
  Transitions.
- Transitions are interruptible by higher-priority updates.
- Cannot control text inputs.

For non-component code, use the standalone `startTransition` import.

(source: react-ref-useTransition.md)

---

## useDeferredValue

```js
const deferred = useDeferredValue(value, initialValue?)
```

See [[react-performance]] for full guide.

- Returns old value during current render, schedules background re-render with
  new value.
- `initialValue` (optional): used during initial render.
- Background re-render is interruptible.
- Pass primitives or objects created outside rendering (new objects every
  render cause unnecessary re-renders).

(source: react-ref-useDeferredValue.md)

---

## use

```js
const value = use(resource)
```

NOT a hook — can be called inside `if` and `for`.
(source: react-ref-use.md)

**Two overloads:**

1. `use(context)` — like `useContext` but callable conditionally.
2. `use(promise)` — suspends until resolved. Promise must be cached (same
   instance across re-renders). Cannot be in a `try-catch` — use Error
   Boundary. Wrap in `<Suspense>` for fallback.

(source: react-ref-use.md)

---

## useId

```js
const id = useId()
```

- Returns a unique ID string stable across renders.
- For multiple related elements, derive: `id + '-firstName'`.
- Do NOT use for list keys or cache keys.
- Works with server rendering and hydration (generated from component path).
- For multiple React roots, use `identifierPrefix` on `createRoot`.

(source: react-ref-useId.md)

---

## useActionState

```js
const [state, dispatchAction, isPending] = useActionState(action, initialState, permalink?)
```

- `action`: `(previousState, payload) => newState`. Can be async. Can have
  side effects (unlike `useReducer` reducers).
- `dispatchAction(payload)`: triggers the action inside a Transition.
- `isPending`: boolean flag.
- `permalink` (optional): URL for progressive enhancement with Server
  Functions.
- `dispatchAction` must be called from an Action (inside `startTransition` or
  passed to an Action prop).

(source: react-ref-useActionState.md)

---

## Custom hooks

Custom hooks extract reusable stateful logic. They share logic, not state —
each call creates independent state.
(source: react-learn-reusing-logic-with-custom-hooks.md)

**Naming:** must start with `use` + capital letter. Functions that don't call
hooks should NOT use the `use` prefix.

**Anti-patterns:** do not create lifecycle hooks like `useMount`,
`useEffectOnce`, `useUpdateEffect` — they don't fit the React paradigm and
hide bugs from the linter.

Keep hooks focused on concrete, high-level use cases. Name describes what it
does (`useChatRoom`, `useMediaQuery`), not lifecycle timing.
(source: react-learn-reusing-logic-with-custom-hooks.md)

## Related pages

- [[react-state]] — useState conceptual guide
- [[react-effects]] — useEffect conceptual guide
- [[react-refs]] — useRef conceptual guide
- [[react-context]] — useContext conceptual guide
- [[react-reducers]] — useReducer conceptual guide
- [[react-performance]] — memoization and transitions
