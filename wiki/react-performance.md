# React Performance

React provides several APIs for optimizing rendering performance: skipping
re-renders, deferring updates, code splitting, and caching.

## memo

```js
import { memo } from 'react';
const Memoized = memo(Component, arePropsEqual?);
```

Wraps a component to skip re-rendering when props haven't changed.
(source: react-ref-memo.md)

- Default comparison: each prop compared individually with `Object.is`.
- Custom `arePropsEqual(oldProps, newProps)`: return `true` to skip re-render.
  Must compare every prop including functions.
- A memoized component **still re-renders** when its own state or consumed
  context changes.
- Performance optimization, not a correctness guarantee.

**Minimizing prop changes:**

- Pass primitives instead of objects.
- Use `useMemo` for object props, `useCallback` for function props.
- Accept JSX as children in wrapper components.

React Compiler applies the equivalent of `memo` automatically when enabled.
(source: react-ref-memo.md)

## useMemo

```js
const cached = useMemo(() => expensiveCalc(a, b), [a, b]);
```

Caches the **result** of a calculation. Only recalculates when dependencies
change. (source: react-ref-useMemo.md)

Valuable when:
- Calculation is noticeably slow (>= 1ms via `console.time`).
- Passing the value to a `memo`-wrapped component.
- The value is used as a dependency of another hook.

Test with CPU throttling; dev mode timings are inaccurate.
(source: react-ref-useMemo.md)

## useCallback

```js
const cachedFn = useCallback(fn, [deps]);
```

Caches the **function itself** (not its result). Equivalent to
`useMemo(() => fn, deps)`. (source: react-ref-useCallback.md)

Valuable when:
- Passing function as prop to a `memo`-wrapped component.
- Function is used as a dependency of another hook.

Use state updater functions (`setTodos(t => [...t, new])`) to remove state
variables from `useCallback` dependencies. (source: react-ref-useCallback.md)

## Suspense

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

Shows a fallback while children are loading.
(source: react-ref-Suspense.md)

**What activates Suspense:**
- Suspense-enabled frameworks (Relay, Next.js).
- `lazy()` for code splitting.
- Reading a cached Promise with `use()`.

Suspense does **not** detect data fetched inside Effects or event handlers.
(source: react-ref-Suspense.md)

**Key behaviors:**
- All children under one `<Suspense>` are treated as a unit — if any suspends,
  the entire group is replaced by `fallback`.
- Nested boundaries enable progressive disclosure.
- `startTransition` prevents replacing already-revealed content with fallback.
- React does not preserve state for renders that suspended before first mount.

(source: react-ref-Suspense.md)

## lazy

```js
const LazyComponent = lazy(() => import('./Component'));
```

Code-splits a component. Loading it suspends — must be used with `<Suspense>`.
(source: react-ref-lazy.md)

- `load` function returns a Promise resolving to `{ default: Component }`.
- Called only once; result is cached.
- **Never declare `lazy` inside a component** — always at module top level.

(source: react-ref-lazy.md)

## Transitions

### useTransition

```js
const [isPending, startTransition] = useTransition();
```

Marks state updates as non-blocking. The UI stays responsive during
re-rendering — React interrupts Transition renders for higher-priority updates
(e.g., user typing). (source: react-ref-useTransition.md)

- `isPending`: boolean flag for showing visual feedback.
- `startTransition(action)`: called immediately. All synchronous state updates
  inside are Transitions.
- Cannot control text inputs.
- State updates after `await` require wrapping in another `startTransition`.

### startTransition (standalone)

```js
import { startTransition } from 'react';
startTransition(action);
```

Same as `useTransition` but without `isPending`. Works outside components.
(source: react-ref-startTransition.md)

### useDeferredValue

```js
const deferred = useDeferredValue(value, initialValue?);
```

Alternative to transitions when you don't have access to the `set` function.
Returns old value during current render, schedules background re-render with
new value. (source: react-ref-useDeferredValue.md)

- Background re-render is interruptible.
- Integrated with Suspense — shows old value instead of fallback.
- Pass primitives or stable object references.

## cache (Server Components only)

```js
import { cache } from 'react';
const cachedFn = cache(fn);
```

Memoizes function results across Server Components within a single server
request. (source: react-ref-cache.md)

- Arguments compared with `Object.is` (shallow).
- Cache invalidated on every server request — does not persist.
- Each `cache()` call creates an independent memoized function.
- Errors are cached and re-thrown.
- Call at module level, not inside components.

### cache vs useMemo vs memo

| API      | Scope                   | What it caches        | Where          |
|----------|-------------------------|-----------------------|----------------|
| `cache`  | Across components       | Function result       | Server only    |
| `useMemo`| Single component instance | Calculation result  | Client         |
| `memo`   | Single component        | Last render           | Client         |

(source: react-ref-cache.md)

## React Compiler

When enabled, React Compiler handles memoization automatically — equivalent to
`memo`, `useMemo`, and `useCallback` throughout the tree. Manual memoization
becomes unnecessary. (source: react-ref-memo.md, react-ref-useMemo.md,
react-ref-useCallback.md)

## Related pages

- [[react]] — rendering model
- [[react-hooks]] — full hooks API reference
- [[react-state]] — useState and re-renders
- [[react-effects]] — useEffect and dependencies
