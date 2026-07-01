# CSS Transitions and Animations

## CSS Transitions

CSS transitions cause property changes to occur over a specified duration following an acceleration curve, rather than taking effect immediately. These are called **implicit transitions** [mdn-css-transitions.md].

Four longhand properties control transitions [mdn-css-transitions.md]:

- **`transition-property`** — which CSS properties to animate; unlisted properties change instantaneously.
- **`transition-duration`** — how long the transition takes; can vary per property.
- **`transition-timing-function`** — easing function (cubic bezier or predefined values).
- **`transition-delay`** — how long to wait before the transition begins.

Shorthand syntax [mdn-css-transitions.md]:

```css
transition: <property> <duration> <timing-function> <delay>;
```

Multiple properties can be transitioned by comma-separating values. If property value lists have different lengths, shorter lists repeat to match [mdn-css-transitions.md].

### Transition events

Three events fire during a transition [mdn-css-transitions.md]:

| Event | When it fires |
|---|---|
| `transitionrun` | Before any delay |
| `transitionstart` | After any delay |
| `transitionend` | When the transition completes |

Each event exposes `propertyName` (which CSS property transitioned) and `elapsedTime` (seconds elapsed, not affected by `transition-delay`) [mdn-css-transitions.md].

### Caveats

Not all CSS properties can be animated. The `auto` value should be avoided in transitions. Care should be taken when using transitions immediately after adding elements to the DOM or removing `display: none` [mdn-css-transitions.md].

## Transitioning Display

`display` and `content-visibility` can be transitioned using discrete animation. When transitioning to/from `display: none`, the value flips so content remains visible throughout the animation [mdn-css-transitions.md].

Required declaration [mdn-css-transitions.md]:

```css
transition-behavior: allow-discrete;
```

Use `@starting-style` to define the initial state for entry animations [mdn-css-transitions.md]:

```css
.showing {
  opacity: 1;
  display: block;
  transition:
    opacity 1s,
    display 1s allow-discrete;
}

@starting-style {
  .showing {
    opacity: 0;
  }
}
```

## CSS Keyframe Animations

Standard CSS animations use `@keyframes` to define animation sequences and the `animation` shorthand property (or its longhands) to apply them. Scroll-driven animations build on this same `@keyframes` mechanism [mdn-css-scroll-driven-animations.md].

## Scroll-driven Animations

The scroll-driven animations module allows animating property values along a scroll-based timeline rather than the default time-based document timeline [mdn-css-scroll-driven-animations.md].

### Timeline functions

- **`scroll()`** — creates a timeline based on scroll container progress [mdn-css-scroll-driven-animations.md].
- **`view()`** — creates a timeline based on element visibility in the viewport [mdn-css-scroll-driven-animations.md].

### Properties

| Property | Purpose |
|---|---|
| `animation-timeline` | Binds an animation to a scroll or view timeline [mdn-css-scroll-driven-animations.md] |
| `animation-range` (shorthand) | Sets `animation-range-start` and `animation-range-end` [mdn-css-scroll-driven-animations.md] |
| `scroll-timeline` (shorthand) | Sets `scroll-timeline-name` and `scroll-timeline-axis` [mdn-css-scroll-driven-animations.md] |
| `view-timeline` (shorthand) | Sets `view-timeline-name`, `view-timeline-axis`, and `view-timeline-inset` [mdn-css-scroll-driven-animations.md] |
| `timeline-scope` | Makes a named timeline accessible to descendants [mdn-css-scroll-driven-animations.md] |

### Data types

- `<axis>` — defines the axis to track scroll progress along [mdn-css-scroll-driven-animations.md].
- `<timeline-range-name>` — specifies portions of the timeline (e.g., `cover`, `contain`) [mdn-css-scroll-driven-animations.md].

### Example

```css
main {
  scroll-timeline: --main-timeline;
}

div {
  animation: background-animation linear;
  animation-timeline: scroll(nearest inline);
}

@keyframes background-animation {
  0% { background-color: palegoldenrod; }
  100% { background-color: magenta; }
}
```

### JavaScript APIs

`ScrollTimeline` and `ViewTimeline` constructors provide programmatic scroll/view timeline creation [mdn-css-scroll-driven-animations.md].

## View Transitions

View transitions create animated transitions between different DOM states within a document (SPA) or across page navigations (MPA) [mdn-css-view-transitions.md].

### Properties

- **`view-transition-name`** — names an element for view transitions [mdn-css-view-transitions.md].
- **`view-transition-class`** — assigns a class to the transition group [mdn-css-view-transitions.md].
- **`view-transition-scope`** — controls the scope of the transition [mdn-css-view-transitions.md].

### Pseudo-element tree

The browser creates a pseudo-element tree to animate between old and new states [mdn-css-view-transitions.md]:

```
::view-transition
  └── ::view-transition-group(name)
        └── ::view-transition-image-pair(name)
              ├── ::view-transition-old(name)    — snapshot of old state
              └── ::view-transition-new(name)    — live representation of new state
```

`::view-transition` is the root overlay. `::view-transition-group()` contains each named transition. `::view-transition-image-pair()` holds both the old snapshot and new live representation [mdn-css-view-transitions.md].

### Cross-document transitions

The `@view-transition` at-rule enables cross-document view transitions with a `navigation` descriptor that controls which navigations trigger them [mdn-css-view-transitions.md].

### Selectors

- `:active-view-transition` — matches when a view transition is active [mdn-css-view-transitions.md].
- `:active-view-transition-type()` — matches by transition type [mdn-css-view-transitions.md].

### Events

- `pagereveal` — fires on the destination page during cross-document navigation [mdn-css-view-transitions.md].
- `pageswap` — fires on the source page during cross-document navigation [mdn-css-view-transitions.md].

### JavaScript API

`Document.startViewTransition()` starts a same-document view transition. `Element.startViewTransition()` starts an element-scoped view transition [mdn-css-view-transitions.md].

The `ViewTransition` object exposes [mdn-css-view-transitions.md]:
- `skipTransition()` — skip the animation.
- `ready` — promise resolving when the pseudo-element tree is created.
- `updateCallbackDone` — promise resolving when the update callback finishes.
- `finished` — promise resolving when the new view is visible.

---

See also: [[css-custom-properties]] (animating typed custom properties with transitions), [[css]].
