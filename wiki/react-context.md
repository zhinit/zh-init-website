# React Context

Context lets a parent component provide data to any descendant without prop
drilling. It works like CSS inheritance — the nearest provider value wins.
(source: react-learn-passing-data-deeply-with-context.md)

## Three-step process

### 1. Create

```js
import { createContext } from 'react';
export const MyContext = createContext(defaultValue);
```

The `defaultValue` is used only when no provider is found above. A provider
with `value={undefined}` overrides the default.
(source: react-ref-useContext.md)

### 2. Use

```js
import { useContext } from 'react';
const value = useContext(MyContext);
```

Returns the value from the closest `MyContext` provider above in the tree.
React automatically re-renders components that read a changed context (compared
via `Object.is`). (source: react-ref-useContext.md)

### 3. Provide

```jsx
<MyContext value={someValue}>
  {children}
</MyContext>
```

(source: react-learn-passing-data-deeply-with-context.md)

## Key behaviors

- `useContext()` in a component is not affected by providers returned from the
  *same* component. The provider must be *above* the component.
  (source: react-ref-useContext.md)
- Context passes through any intermediate components.
  (source: react-learn-passing-data-deeply-with-context.md)
- Providers can be nested to override context for subtrees.
  (source: react-ref-useContext.md)
- Skipping re-renders with `memo` does not prevent children from receiving
  fresh context values. (source: react-ref-useContext.md)

## use(context)

The `use` API can also read context and, unlike `useContext`, can be called
inside `if` and `for` blocks. (source: react-ref-use.md)

```js
const value = use(MyContext);
```

## Alternatives to consider before using context

1. Start with plain props — explicit data flow is valuable.
2. Extract components and pass JSX as `children` — reduces the number of
   intermediate layers that need to forward props.

(source: react-learn-passing-data-deeply-with-context.md)

## Common use cases

- Theming (dark mode).
- Current account/user.
- Routing (current route).
- Managing state (combined with [[react-reducers|useReducer]]).

(source: react-learn-passing-data-deeply-with-context.md)

## Performance

Wrap context values (objects/functions) in `useMemo`/`useCallback` to avoid
unnecessary re-renders of consuming components. (source: react-ref-useContext.md)

Split context into smaller contexts when only some consumers need some values
— avoids re-rendering all consumers on every change.
(source: react-ref-useContext.md)

## Caveats

- Overuse of context makes component reuse harder. Prop drilling for a few
  levels is acceptable.
  (source: react-learn-passing-data-deeply-with-context.md)
- Duplicate modules in the build (e.g., via symlinks) can break context. The
  `SomeContext` used for providing and reading must be the exact same object
  (`===`). (source: react-ref-useContext.md)
- Forgetting the `value` prop on a provider is like passing
  `value={undefined}`. (source: react-ref-useContext.md)

## Related pages

- [[react-components]] — props and children
- [[react-reducers]] — combined with context for state management
- [[react-hooks]] — useContext API reference
- [[react-performance]] — memoizing context values
