# React Bits — Text Animations: Integration Reference for AI Coding Agents

> Source: https://reactbits.dev/text-animations (+ component sub-pages) and https://github.com/DavidHDev/react-bits
> Purpose: Give Copilot (or any coding agent) everything needed to install and correctly implement React Bits text-animation components in a React project, without having to re-derive install commands, dependencies, or prop shapes from scratch.

---

## 1. What this library is

React Bits is an open-source, **copy-paste** component library (MIT + Commons Clause — free for commercial use, you own the code after install). It is **not** an npm package you `import` from a single module — each component is installed as source files directly into your project, then imported locally. This matters for Copilot: after install, components live in your own repo (e.g. `src/components/TextAnimations/SplitText.tsx`) and can be freely edited.

Every component ships in **4 variants** — pick ONE per project and stay consistent:

| Variant | Language | Styling |
|---|---|---|
| `JS-CSS` (default) | JavaScript | Plain CSS file alongside component |
| `JS-TW` (tailwind) | JavaScript | Tailwind utility classes |
| `TS-CSS` (ts/default) | TypeScript | Plain CSS file alongside component |
| `TS-TW` (ts/tailwind) | TypeScript | Tailwind utility classes |

**Decision rule for Copilot:** detect the host project's language (`tsconfig.json` present → TS) and styling system (Tailwind config present → TW) and pick the matching variant automatically. Default to `TS-TW` if both TypeScript and Tailwind are present, `JS-TW` if only Tailwind, `TS-CSS`/`JS-CSS` otherwise.

---

## 2. Installation methods (in priority order)

### Method A — shadcn CLI (recommended if project already uses shadcn/ui)
```bash
npx shadcn@latest add @react-bits/<ComponentName>-<Variant>
# Example:
npx shadcn@latest add @react-bits/SplitText-TS-TW
npx shadcn@latest add @react-bits/BlurText-TS-TW
npx shadcn@latest add @react-bits/ShinyText-JS-TW
```

### Method B — jsrepo CLI (React Bits' native tool, works in any project)
```bash
# One-time project init (choose ONE variant registry):
npx jsrepo init --project --repos github/davidhdev/react-bits

# Add a specific component:
npx jsrepo add TextAnimations/SplitText
npx jsrepo add TextAnimations/BlurText

# Or add the Tailwind-flavored category directly:
npx jsrepo add TailwindTextAnimations/ShinyText

# Browse interactively:
npx jsrepo add
```
Equivalent direct-URL form (no init needed):
```bash
npx jsrepo add https://reactbits.dev/default/TextAnimations/SplitText      # JS + CSS
npx jsrepo add https://reactbits.dev/tailwind/TextAnimations/SplitText    # JS + Tailwind
npx jsrepo add https://reactbits.dev/ts/default/TextAnimations/SplitText # TS + CSS
npx jsrepo add https://reactbits.dev/ts/tailwind/TextAnimations/SplitText# TS + Tailwind
```
You can substitute `pnpm dlx` or `yarn dlx` for `npx`.

### Method C — manual copy-paste
Open the component's page at `https://reactbits.dev/text-animations/<kebab-case-name>`, copy the code block for your chosen variant, and paste it into your project (e.g. `src/components/TextAnimations/<Name>/<Name>.tsx`). Use this when the CLI can't reach the network (sandboxed/offline environments) — Copilot should fall back to this and fetch source directly from GitHub:
```
https://github.com/DavidHDev/react-bits/tree/main/src/<variant-folder>/TextAnimations/<ComponentName>/
```
where `<variant-folder>` is one of `content` (JS-CSS), `tailwind` (JS-TW), `ts-default` (TS-CSS), `ts-tailwind` (TS-TW).

**Copilot instruction:** Always try Method A or B first via a terminal tool call. If network/registry access fails, fall back to Method C by fetching the raw GitHub source for the exact variant needed, then hand-adapt import paths to the project's alias conventions (e.g. `@/components/...`).

---

## 3. Peer dependencies — install BEFORE or alongside components

Different components rely on different animation engines. Install only what's needed:

```bash
# Motion (powers most text animations: BlurText, TextType, DecryptedText, etc.)
npm install motion

# GSAP (powers SplitText, ScrollFloat, ScrollReveal, ScrollVelocity, and some Animations-category components)
npm install gsap

# Three.js (only for 3D text: ASCIIText)
npm install three @types/three

# OGL (only used by shader BACKGROUNDS, not text animations — skip unless also installing backgrounds)
npm install ogl
```
Note: React Bits' own docs sometimes reference `framer-motion` in older code samples — the current package is the renamed `motion` library and is a drop-in (`import { motion } from "motion/react"`). Prefer `motion` for new installs.

**Copilot instruction:** After installing a component via jsrepo/shadcn, read the top import lines of the generated file to see which of `motion`, `gsap`, or `three` it actually imports, and `npm install` exactly that dependency if not already present. Don't blanket-install all four.

---

## 4. Full component catalog — Text Animations category

Base URL pattern for docs: `https://reactbits.dev/text-animations/<kebab-case-slug>`

| Component | Slug | Engine | Description |
|---|---|---|---|
| **SplitText** | `split-text` | GSAP (+ScrollTrigger) | Splits text into chars/words/lines and animates each piece in on scroll into view |
| **BlurText** | `blur-text` | Motion | Multi-step blur-to-focus reveal, animate by word or letter |
| **ShinyText** | `shiny-text` | CSS/Motion | Animated light-sweep/shine gradient moving across static text |
| **GradientText** | `gradient-text` | CSS | Animated multi-color gradient fill on text, optional border |
| **RotatingText** | `rotating-text` | Motion + AnimatePresence | Cycles through a list of strings with enter/exit transitions, autoplay + loop |
| **TextType** | `text-type` | Motion/custom | Typewriter-style character-by-character typing effect with cursor |
| **DecryptedText** | `decrypted-text` | Custom (interval-based) | Characters scramble through random glyphs before settling on final text; hover or view trigger |
| **ScrambledText** | `scrambled-text` | Custom/GSAP | Continuous or triggered character-scramble effect (distinct from DecryptedText's one-shot reveal) |
| **GlitchText** | `glitch-text` | CSS/Motion | RGB-split glitch/flicker effect on text, often looping |
| **FuzzyText** | `fuzzy-text` | Canvas | Renders text to canvas with animated noise/fuzz distortion, reacts to hover |
| **TrueFocus** | `true-focus` | Motion (spring) | Word-by-word "focus" cycling — active word sharp with animated corner brackets, others blurred |
| **VariableProximity** | `variable-proximity` | Motion + variable font | Uses a variable font axis (e.g. weight) that changes per-letter based on cursor proximity |
| **TextPressure** | `text-pressure` | Variable font + pointer tracking | Letters change weight/width based on distance from mouse cursor, like "pressure" |
| **TextTrail** | `text-trail` | Canvas/WebGL | Text leaves a fading motion trail as it moves or as cursor passes over it |
| **TextCursor** | `text-cursor` | Motion | Custom cursor that morphs into/reveals text near the pointer |
| **CircularText** | `circular-text` | CSS transform + Motion | Text laid out and rotating along a circular path |
| **CurvedLoop** | `curved-loop` | SVG `textPath` | Text following a custom curved/looping SVG path, often auto-scrolling marquee-style |
| **FallingText** | `falling-text` | Matter.js/physics | Words/letters fall and collide with physics simulation (gravity) |
| **CountUp** | `count-up` | Motion/custom | Animated numeric counter that increments to a target value on view |
| **ScrollFloat** | `scroll-float` | GSAP ScrollTrigger | Characters float up into place progressively as the section scrolls into view |
| **ScrollReveal** | `scroll-reveal` | GSAP ScrollTrigger | Word-by-word opacity/blur reveal tied to scroll progress through the element |
| **ScrollVelocity** | `scroll-velocity` | GSAP ScrollTrigger | Text scrolls horizontally at a speed tied to the user's scroll velocity/direction |
| **ASCIIText** | `ascii-text` | Three.js | Renders 3D text re-rendered as animated ASCII-art characters |

> Note: exact prop names/behavior for the less-documented rows above should be **confirmed from the installed source file** (Section 2, Method C fallback) since React Bits updates props between releases. Sections 5–6 below give verified prop tables for the most-used components as of this writing; treat those as ground truth and everything else as "install, then read the file."

---

## 5. Verified prop reference (from official docs/source)

### `SplitText` (GSAP)
```tsx
<SplitText
  text="Hello, GSAP!"
  className="text-2xl font-bold"
  delay={100}
  duration={0.6}
  splitType="chars"           // "chars" | "words" | "lines" | "words, chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  onLetterAnimationComplete={() => console.log('done')}
/>
```
| Prop | Type | Default | Notes |
|---|---|---|---|
| `text` | `string` | `""` | Content to animate |
| `delay` | `number` | `100` | Stagger delay (ms) between elements |
| `duration` | `number` | `0.6` | Per-element animation duration (s) |
| `splitType` | `"chars" \| "words" \| "lines" \| "words, chars"` | `"chars"` | Split granularity |
| `from` / `to` | `gsap.TweenVars` | opacity/y pair | Initial/final tween state |
| `threshold` | `number` | `0.1` | ScrollTrigger viewport intersection ratio to fire |
| `onLetterAnimationComplete` | `() => void` | — | Fires once when the whole animation finishes |

Implementation notes for Copilot: uses GSAP's `SplitText` plugin + `ScrollTrigger`; sets `willChange: transform, opacity` for GPU acceleration; on cleanup it must kill the GSAP timeline and call `.revert()` on the SplitText instance to avoid DOM/memory leaks on unmount — verify this exists if hand-editing.

### `BlurText` (Motion)
```tsx
<BlurText
  text="Isn't this so cool?!"
  delay={200}
  animateBy="words"        // "words" | "letters"
  direction="top"          // "top" | "bottom"
  stepDuration={0.35}
  onAnimationComplete={() => console.log('done')}
/>
```
| Prop | Type | Default | Notes |
|---|---|---|---|
| `animateBy` | `"words" \| "letters"` | `"words"` | Segmentation strategy |
| `direction` | `"top" \| "bottom"` | `"top"` | Entry direction, drives default `y` offset sign |
| `delay` | `number` | `200` | Stagger delay between segments (ms) |
| `stepDuration` | `number` | `0.35` | Duration of each blur "step" (s) |
| `animationFrom` | `Record<string, string \| number>` | derived from `direction` | Custom initial keyframe override |
| `animationTo` | `Array<Record<string, string \| number>>` | derived | Custom multi-step keyframe override |

Implementation notes: uses an `IntersectionObserver` (not GSAP ScrollTrigger) to trigger once on view, then unobserves; builds multi-keyframe animation via a `buildKeyframes` helper; sets `willChange: transform, filter, opacity`.

### `ShinyText`
| Prop | Type | Default | Notes |
|---|---|---|---|
| `text` | `string` | — | Content |
| `disabled` | `boolean` | `false` | Turns off the shine sweep entirely |
| `speed` | `number` | ~5 | Animation cycle duration |
| `direction` | e.g. `"left" \| "right"` | — | Direction the shine sweeps |
| `className` | `string` | — | Extra classes on root element |

### `RotatingText` (Motion + AnimatePresence)
| Prop | Type | Notes |
|---|---|---|
| `texts` | `string[]` | List of strings to cycle through |
| `rotationInterval` | `number` | ms between rotations |
| `initial` / `animate` / `exit` | Motion variant objects | Enter/active/exit states per element |
| `mode` | AnimatePresence mode, e.g. `"wait"` | Waits for exit before next enter |
| `staggerDuration` / `staggerFrom` | `number` / string | Per-character stagger delay & origin |
| `loop` | `boolean` | Loop back to first string after last |
| `auto` | `boolean` | Autostart rotation |
| `splitBy` | `"characters" \| "words" \| "lines"` | Animation granularity |
| `onNext` | `(index: number) => void` | Fires on each rotation |
| `className` | `string` | Root element classes |

### `DecryptedText`
| Prop | Type | Default | Notes |
|---|---|---|---|
| `text` | `string` | — | Final text to reveal |
| `speed` | `number` | e.g. `50` | ms between scramble iterations |
| `maxIterations` | `number` | e.g. `20` | Scramble cycles before locking each character |
| `revealDirection` | `"start" \| "end" \| "center"` | — | Order in which characters lock in |
| `animateOn` | `"view" \| "hover"` | — | Trigger type |
| `enableHoverEffect` | `boolean` | — | Whether hover re-triggers scrambling |
| `className` | `string` | — | Root element classes |

---

## 6. General usage pattern (applies to nearly all components)

```tsx
import { SplitText } from "@/components/TextAnimations/SplitText/SplitText";
// path depends on where the CLI installed it — check the component's
// generated import block or your project's shadcn/jsrepo config for the alias.

export default function Hero() {
  return (
    <SplitText
      text="Ship faster with React Bits"
      className="text-4xl font-bold text-white"
      splitType="words"
      delay={80}
    />
  );
}
```

Universal rules for Copilot when wiring these in:
1. **Client components only.** In Next.js App Router, add `"use client"` at the top of any file that renders a React Bits text animation (they use hooks/refs/observers).
2. **One trigger per element.** Scroll-triggered components (SplitText, ScrollFloat, ScrollReveal, ScrollVelocity) register a `ScrollTrigger`/`IntersectionObserver` on mount — don't wrap the same text node in two different scroll-triggered components.
3. **Cleanup matters.** GSAP-based components must kill their timeline/ScrollTrigger instance in the `useEffect` cleanup function on unmount; Motion-based ones must disconnect their `IntersectionObserver`. If you hand-edit a component, preserve this.
4. **Re-mounting to replay.** Because most of these animate once on mount/view, to "replay" an animation when text changes, force a re-mount with a changing `key` prop (`<SplitText key={text} text={text} />`) rather than expecting the component to detect text changes internally.
5. **Respect `prefers-reduced-motion`.** React Bits components don't all do this automatically — wrap usage in a check (e.g. `useReducedMotion()` from Motion, or a CSS media query) and fall back to static text for accessibility when the user has reduced-motion enabled.
6. **Tailwind variant + custom classes.** For `-TW` variants, pass additional Tailwind classes via the `className` prop rather than editing the source file directly, so future re-installs don't clobber customizations.
7. **Fonts for variable-font components** (`VariableProximity`, `TextPressure`): the effect requires an actual **variable font** (with a `wght`/`wdth` axis) loaded via `@font-face` or a service like Google Fonts' variable font builds — a static-weight font will show no effect. Verify a variable font is loaded before wiring these up.

---

## 7. Quick-start checklist for Copilot

1. Detect project stack (TS? Tailwind? shadcn already configured?) → choose variant.
2. Install peer dependency/-ies actually required by the chosen component(s) (`motion`, `gsap`, or `three`).
3. Run the install command (Section 2, Method A or B). If offline/sandboxed, fetch source from GitHub (Method C) and place it at a sensible path (e.g. `src/components/text-animations/<Name>.tsx`).
4. Add `"use client"` if the framework needs it.
5. Import and use per Section 6's usage pattern, tuning props per Sections 4–5.
6. Add reduced-motion fallback if the target audience/accessibility requirements call for it.
7. If a prop isn't listed in Section 5, open the just-installed file and read its `interface Props { ... }` (TS variants) or top-of-file destructured props (JS variants) directly — that file is the single source of truth post-install.

---

## 8. Reference links
- Docs home: https://reactbits.dev/text-animations
- Individual component docs: https://reactbits.dev/text-animations/<slug> (e.g. `/split-text`, `/blur-text`, `/shiny-text`, `/rotating-text`, `/decrypted-text`, `/true-focus`, `/scroll-reveal`, etc.)
- Source code (all variants): https://github.com/DavidHDev/react-bits/tree/main/src
- jsrepo tool: https://jsrepo.dev