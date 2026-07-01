# React TypeScript

TypeScript adds type safety to React. Files with JSX must use `.tsx`
extension. Install `@types/react` and `@types/react-dom`.
(source: react-learn-typescript.md)

## Typing component props

```tsx
// Inline
function MyButton({ title }: { title: string }) { ... }

// Interface
interface MyButtonProps {
  title: string;
  disabled: boolean;
}
function MyButton({ title, disabled }: MyButtonProps) { ... }
```

(source: react-learn-typescript.md)

## Typing hooks

### useState

Type is inferred from initial value. Use explicit generic for union types:

```ts
type Status = "idle" | "loading" | "success" | "error";
const [status, setStatus] = useState<Status>("idle");
```

(source: react-learn-typescript.md)

### useReducer

Type the state, action as a discriminated union, and the reducer's return type:

```ts
interface State { count: number }
type Action =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }
function reducer(state: State, action: Action): State { ... }
```

(source: react-learn-typescript.md)

### useContext

Type inferred from `createContext<Type>(defaultValue)`. For `null` defaults,
use `createContext<T | null>(null)` and throw in a consumer hook if null.
(source: react-learn-typescript.md)

### useMemo

Type inferred from the return value of the factory function.
(source: react-learn-typescript.md)

### useCallback

Callback parameters need explicit types. Can use
`React.ChangeEventHandler<HTMLInputElement>` as a generic.
(source: react-learn-typescript.md)

## Useful types from @types/react

### DOM events

- `React.ChangeEvent<HTMLInputElement>`
- `React.MouseEvent<HTMLButtonElement>`
- `React.SyntheticEvent` — catch-all.

(source: react-learn-typescript.md)

### Children

- `React.ReactNode` — broad: strings, numbers, JSX, null, etc.
- `React.ReactElement` — JSX elements only.

(source: react-learn-typescript.md)

### Style props

`React.CSSProperties` for the `style` prop object.
(source: react-learn-typescript.md)

## Related pages

- [[react-components]] — props and components
- [[react-hooks]] — hooks API reference
- [[react-state]] — useState typing
- [[react-context]] — useContext typing
