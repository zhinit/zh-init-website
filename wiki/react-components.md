# React Components

Components are the building blocks of a React UI. A component is a JavaScript
function that returns JSX markup. (source: react-learn-your-first-component.md)

## Defining a component

Three steps (source: react-learn-your-first-component.md):

1. **Export** — use `export default` to mark the main function.
2. **Define the function** — `function Profile() { }`. Name must start with a
   capital letter.
3. **Add markup** — return JSX. Multi-line JSX must be wrapped in parentheses
   after `return` (JavaScript ASI will silently ignore subsequent lines
   otherwise).

```jsx
export default function Profile() {
  return (
    <img src="https://example.com/photo.jpg" alt="Profile" />
  );
}
```

Component names must start with a capital letter. Lowercase tags (`<div>`,
`<img>`) are treated as HTML elements. `<profile />` renders an HTML tag, not
a component. (source: react-learn-your-first-component.md)

## Props

Props are read-only arguments passed from parent to child.
(source: react-learn-passing-props-to-a-component.md)

**Passing props:**

```jsx
<Avatar person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} size={100} />
```

**Reading props (destructuring is conventional):**

```jsx
function Avatar({ person, size }) { ... }
```

**Default values:**

```jsx
function Avatar({ person, size = 100 }) { ... }
```

Default is used when the prop is missing or `undefined`. Not used for `null`
or `0`. (source: react-learn-passing-props-to-a-component.md)

**Spread syntax** — `<Avatar {...props} />` forwards all props. Use with
restraint. (source: react-learn-passing-props-to-a-component.md)

**Children prop** — content nested inside a JSX tag is received as `children`:

```jsx
<Card><Avatar /></Card>

function Card({ children }) {
  return <div className="card">{children}</div>;
}
```

Used for visual wrappers (panels, grids).
(source: react-learn-passing-props-to-a-component.md)

**Rules:**

- Props are read-only snapshots. Every render receives a new version.
- Never try to change props. Use [[react-state|state]] for interactivity.
- Props can be any JavaScript value: objects, arrays, functions.
- Double curlies `{{ }}` in JSX are an object inside JSX curlies, not special
  syntax.

## Conditional rendering

Three techniques (source: react-learn-conditional-rendering.md):

1. **`if`/`else` with early return:**
   ```jsx
   if (isPacked) return <li>{name} ✓</li>;
   return <li>{name}</li>;
   ```

2. **Ternary `? :`:**
   ```jsx
   {isPacked ? name + ' ✓' : name}
   ```

3. **Logical AND `&&`:**
   ```jsx
   {isPacked && '✓'}
   ```
   **Pitfall:** never put a number on the left side. `0 && <p>...</p>` renders
   `0`. Use `messageCount > 0 && <p>...</p>`.

Returning `null` from a component renders nothing, but this is uncommon.
(source: react-learn-conditional-rendering.md)

## Rendering lists

Use `map()` and `filter()` on arrays to produce lists of components.
(source: react-learn-rendering-lists.md)

```jsx
const listItems = people.map(person =>
  <li key={person.id}>{person.name}</li>
);
```

### Keys

JSX elements directly inside a `map()` call always need keys.
(source: react-learn-rendering-lists.md)

**Rules of keys:**

- Must be unique among siblings.
- Must not change — never generate them during rendering.
- `key` is not received as a prop. To pass the ID to a component, use a
  separate prop: `<Profile key={id} userId={id} />`.

**Where to get keys:**

- Database data → use database IDs.
- Locally generated data → use `crypto.randomUUID()` at creation time.

**Anti-patterns:**

- Do not use array index as key when items can be reordered, inserted, or
  deleted.
- Do not use `Math.random()` — keys never match between renders.

The shorthand Fragment `<>...</>` does not accept `key`. Use
`<Fragment key={...}>` instead.
(source: react-learn-rendering-lists.md)

## Component nesting rules

Never nest component definitions. Defining a component inside another is slow
and causes bugs — state resets on every render. Always declare components at
the top level. (source: react-learn-your-first-component.md)

## Related pages

- [[react]] — overview and mental model
- [[react-state]] — component memory (useState)
- [[react-events]] — event handling
- [[react-typescript]] — typing props with TypeScript
