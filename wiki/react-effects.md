# React Effects

Effects synchronize React components with external systems (browser APIs,
third-party libraries, network). They run at the end of the commit phase after
the screen updates. (source: react-learn-synchronizing-with-effects.md)

## Three types of component logic

1. **Rendering code** — pure, no side effects.
2. **Event handlers** — side effects caused by user actions.
3. **Effects** — side effects caused by rendering itself (synchronization with
   external systems).

(source: react-learn-synchronizing-with-effects.md)

## useEffect API

```js
useEffect(() => {
  // setup: connect to external system
  return () => {
    // cleanup: disconnect
  };
}, [dependencies]);
```

(source: react-ref-useEffect.md)

### Dependency array behaviors

- `[a, b]` — runs on mount and when `a` or `b` change.
- `[]` — runs only on mount.
- No array — runs after every commit.

Dependencies are compared using `Object.is`. You cannot "choose" dependencies
— they are determined by what the Effect code reads. The linter enforces this.
(source: react-learn-synchronizing-with-effects.md, react-ref-useEffect.md)

### Cleanup

The cleanup function runs:
- Before the Effect runs again (with old values).
- On unmount (one final time).

(source: react-ref-useEffect.md)

### Stable values

`useState` setters and `useRef` return objects have stable identity across
renders and can be omitted from dependencies (the linter allows this).
(source: react-learn-lifecycle-of-reactive-effects.md)

## Data fetching pattern

Use an `ignore` flag to prevent race conditions:

```js
useEffect(() => {
  let ignore = false;
  async function startFetching() {
    const json = await fetchTodos(userId);
    if (!ignore) setTodos(json);
  }
  startFetching();
  return () => { ignore = true; };
}, [userId]);
```

Frameworks' built-in fetching or client-side caches (TanStack Query, useSWR)
are preferred over manual Effect-based fetching.
(source: react-learn-synchronizing-with-effects.md)

## You might not need an Effect

Effects are an escape hatch. If no external system is involved, an Effect is
unnecessary. (source: react-learn-you-might-not-need-an-effect.md)

### Common anti-patterns

| Instead of...                              | Do this                                          |
|--------------------------------------------|--------------------------------------------------|
| Effect to derive state from props/state    | Calculate during rendering                       |
| Effect + state for expensive calculations  | `useMemo(fn, deps)`                              |
| Effect to reset state when prop changes    | Use `key` prop: `<C key={id} />`                 |
| Effect to notify parent of state changes   | Call parent callback in the same event handler    |
| Effect to subscribe to external store      | `useSyncExternalStore`                            |
| Effect for app initialization              | Module-level guard outside component              |
| Effect for POST/buy on user action         | Event handler (not caused by rendering)           |

(source: react-learn-you-might-not-need-an-effect.md)

Chaining Effects that set state based on other state causes cascading
re-renders and fragile code.
(source: react-learn-you-might-not-need-an-effect.md)

## Effect lifecycle

Effects have their own lifecycle separate from components. An Effect starts
synchronizing and stops synchronizing. This cycle can repeat while the
component stays mounted. Think about each Effect in isolation.
(source: react-learn-lifecycle-of-reactive-effects.md)

### Reactive values

All values declared inside the component body (props, state, derived
variables) are reactive and must be listed in Effect dependencies.
(source: react-learn-lifecycle-of-reactive-effects.md)

### Non-reactive values

Module-scope constants, `ref.current`, mutable globals. These should NOT be
dependencies. For mutable external values like `location.pathname`, use
`useSyncExternalStore`. (source: react-learn-lifecycle-of-reactive-effects.md)

### Reducing unwanted re-synchronization

- Move the value outside the component (non-reactive).
- Move the value inside the Effect.
- Split unrelated logic into separate Effects.
- Use Effect Events (`useEffectEvent`) to read latest values without
  re-synchronizing.
- Avoid objects and functions as dependencies — they are new references on
  every render.

(source: react-learn-lifecycle-of-reactive-effects.md)

## Caveats

- Effects only run on the client, not during server rendering.
  (source: react-ref-useEffect.md)
- In Strict Mode, React runs an extra setup+cleanup cycle before the first
  real setup. The correct fix is proper cleanup, not refs to suppress
  double-firing. (source: react-learn-synchronizing-with-effects.md)
- Setting state inside an Effect without dependencies causes an infinite loop.
  (source: react-learn-synchronizing-with-effects.md)
- For visual effects where delay causes flicker, use `useLayoutEffect`.
  (source: react-ref-useEffect.md)
- Each render's Effect captures its own closure values.
  (source: react-learn-synchronizing-with-effects.md)
- Never suppress the linter with `eslint-disable` — it causes stale closure
  bugs. (source: react-learn-lifecycle-of-reactive-effects.md)

## Related pages

- [[react]] — rendering model and purity
- [[react-events]] — side effects from user actions (not Effects)
- [[react-refs]] — useRef for values that don't trigger re-renders
- [[react-hooks]] — full useEffect API reference
