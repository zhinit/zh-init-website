# React

React is a JavaScript library for building user interfaces from components. It
uses a declarative, component-based model where UI is described as a function
of state. (source: react-learn-thinking-in-react.md)

## Core mental model

A React application is a tree of components. Each component is a JavaScript
function that returns JSX markup describing what should appear on screen. Data
flows one way: from parent to child via props. When state changes, React
re-renders the affected subtree. (source: react-learn-your-first-component.md,
react-learn-thinking-in-react.md)

## The five-step process

The official React mental model for building a UI from a mockup
(source: react-learn-thinking-in-react.md):

1. **Break the UI into a component hierarchy** — draw boxes around every
   component, name them, arrange into a tree. Three lenses: programming
   (separation of concerns), CSS (class selectors), design (layer
   organization).
2. **Build a static version** — render UI from data using components and props
   only. No state. Top-down for simple apps, bottom-up for complex ones.
3. **Find minimal but complete state** — keep state DRY. A value is NOT state
   if: (a) it remains unchanged over time, (b) it is passed from a parent via
   props, or (c) it can be computed from existing state/props.
4. **Identify where state should live** — for each piece of state, find the
   closest common parent of all components that use it.
5. **Add inverse data flow** — pass setter functions down as props so children
   can update parent state.

## Rendering model

React renders in three phases (source: react-learn-render-and-commit.md):

1. **Trigger** — initial render (`createRoot().render()`) or a state update
   (`set` function).
2. **Render** — React calls component functions to compute new JSX. This must
   be a pure calculation (same inputs → same output, no side effects). React
   recurses through the tree.
3. **Commit** — React applies minimal DOM changes. On initial render, uses
   `appendChild()`. On re-renders, only touches DOM nodes that differ.

After commit, the browser repaints the screen.

React does not touch the DOM if the rendering result is unchanged. Strict Mode
calls each component twice in development to surface impure-function bugs.
(source: react-learn-render-and-commit.md)

## Purity rules

React assumes every component is a pure function. Given the same props, state,
and context, a component must return the same JSX.
(source: react-learn-keeping-components-pure.md)

- Components must not change pre-existing objects or variables during
  rendering.
- Mutating variables and objects created during the same render ("local
  mutation") is fine.
- Side effects belong in event handlers. As a last resort, use
  [[react-effects|useEffect]].
- Treat props, state, and context as read-only during rendering.
- Array methods that mutate (`push`, `pop`, `reverse`, `sort`) must not be
  used on state directly — use methods that return new arrays (`slice`,
  `filter`, `map`).

## Project setup

Recommended full-stack frameworks
(source: react-learn-creating-a-react-app.md):

- **Next.js (App Router)** — `npx create-next-app@latest`. Maintained by
  Vercel. Fully implements React Server Components. Supports SSR, CSR, SPA,
  SSG.
- **React Router v7** — `npx create-react-router@latest`. Paired with Vite.
  Maintained by Shopify.
- **Expo** — `npx create-expo-app@latest`. For native apps (Android, iOS,
  web).

For apps with constraints not served by frameworks, use build tools like Vite,
Parcel, or RSbuild directly. This requires making your own choices for routing,
data fetching, etc. (source: react-learn-creating-a-react-app.md)

## Related pages

- [[react-components]] — components, JSX, props, children
- [[react-state]] — useState, state as snapshot, immutability
- [[react-events]] — event handlers, propagation
- [[react-effects]] — useEffect, synchronization, cleanup
- [[react-refs]] — useRef, DOM manipulation
- [[react-context]] — createContext, useContext, provider pattern
- [[react-reducers]] — useReducer, actions, dispatch
- [[react-hooks]] — complete hooks API reference
- [[react-performance]] — memo, useMemo, useCallback, Suspense, lazy
- [[react-typescript]] — TypeScript integration
- [[react-portals]] — createPortal, flushSync
