# React Bits — Space-Themed Component Set (Animations, Backgrounds & Components)

> Companion to `react-bits-text-animations.md`. That file covers the **Text Animations** category only. This file curates the best-fitting items from the other three React Bits categories — **Backgrounds**, **Animations**, and **Components** — for a **space / cosmic theme** (dark voids, nebulae, starfields, warp motion, orbiting bodies, glow).
> Source: https://reactbits.dev , https://reactbits.dev/tools/background-studio (official free-tier background list), https://github.com/DavidHDev/react-bits

This is a **curated subset**, not the full catalog (React Bits has 100+ components across these categories) — everything below was picked because it visually reads as "space" or is a natural building block for a space-themed UI. Install method, variants, and peer-dependency logic are identical to the text-animations doc — see that file's Sections 1–3 for the full explanation; the quick version is repeated in Section 0 below.

---

## 0. Install quick-reference (same rules as the text-animations doc)

```bash
# shadcn CLI
npx shadcn@latest add @react-bits/<ComponentName>-<Variant>   # e.g. Galaxy-TS-TW

# jsrepo CLI
npx jsrepo add TextAnimations/... # (n/a here)
npx jsrepo add Backgrounds/Galaxy
npx jsrepo add Animations/ClickSpark
npx jsrepo add Components/GlobeComponent
```
Variants: `JS-CSS`, `JS-TW`, `TS-CSS`, `TS-TW` — pick one and stay consistent across the project (see prior doc, Section 1, for the auto-detect rule).

Peer dependencies you'll likely need for this space set:
```bash
npm install three @react-three/fiber @react-three/drei   # Globe, ModelViewer, some 3D backgrounds
npm install ogl                                            # shader backgrounds: Iridescence, Liquid Ether, Plasma, Prism
npm install gsap                                           # AnimatedContent, ScrollStack, some Components
npm install motion                                         # FadeContent, Magnet, StarBorder, most Components
npm install matter-js                                      # Ballpit / physics-based effects, if used
```
As before: after installing a component, check its actual import lines and only install the dependency it really uses.

---

## 1. Backgrounds — the "environment" layer

These are full-bleed, absolutely-positioned canvas/WebGL/CSS layers meant to sit behind your content (`position: absolute; inset: 0; z-index: -1;` with `pointer-events` set appropriately). Confirmed free-tier component names below come directly from React Bits' own Background Studio tool.

| Component | Why it fits "space" | Engine | Notes |
|---|---|---|---|
| **Galaxy** | Literally a rotating starfield/galaxy — the most direct fit | Canvas/WebGL | Best default choice for a full-page space backdrop |
| **Aurora** | Flowing colored bands, reads as aurora borealis / nebula clouds | OGL/shader | Great layered *over* a starfield for nebula color |
| **Orb** | Glowing spherical gradient blob — reads as a planet, sun, or energy core | Canvas/shader | Good focal-point accent, not a full background |
| **Particles** | Configurable floating dot field — doubles as a starfield | Canvas | Lighter-weight alternative to Galaxy; `moveParticlesOnHover` adds interactivity |
| **Hyperspeed** | Warp-speed light-streak tunnel effect | WebGL | Excellent for a "travelling through space" hero moment or page-transition |
| **Dark Veil** | Deep, moody dark gradient/fog layer | CSS/Canvas | Good base layer under other effects to deepen the void |
| **Dot Grid** / **Dot Field** | Subtle dot matrix — works well as a distant starfield when desaturated | CSS/Canvas | Cheaper on performance than Galaxy/Particles |
| **Threads** | Thin flowing line strands — reads as light trails / cosmic strings | Canvas | Good subtle secondary layer |
| **Iridescence** | Shifting holographic color sheen | OGL/shader | Good for nebula-like color washes |
| **Plasma** / **Plasma Wave** | Organic energy-field motion | OGL/shader | Reads as solar plasma / energy fields |
| **Lightning** | Branching electric bolts | Canvas | Good accent for dramatic cosmic-storm moments |
| **Light Rays** / **Light Pillar** / **Side Rays** | Directional glowing light beams | CSS/Canvas | Good for "light breaking through space dust" |
| **Prism** / **Prismatic Burst** | Refracted light burst | WebGL/shader | Good for hero focal highlight, e.g. behind a logo |
| **Liquid Ether** / **Liquid Chrome** | Fluid, chrome-like distortion | OGL/shader | Good for a metallic-spacecraft-hull feel |
| **Noise** | Fine film-grain overlay | CSS/Canvas | Layer on top of anything to kill flat digital banding, adds "old sci-fi film" texture |
| **Grid Motion** / **Grid Distortion** | Warping grid | Canvas/WebGL | Good for a "gravity well" or wormhole visual near a black hole graphic |

**Pro-tier only (not free, mention only if the person confirms they have React Bits Pro):** `Black Hole`, `Aurora Blur`, `Particle Text` — direct space-themed Pro components at https://pro.reactbits.dev if the budget allows.

### Confirmed props — `Aurora`
```tsx
<Aurora
  colorStops={["#3a29ff", "#ff94b4", "#ffffff"]}
  amplitude={1.2}
  speed={0.8}
/>
```
### Confirmed props — `Particles`
```tsx
<Particles
  particleCount={200}
  particleColors={["#ffffff", "#a0c4ff"]}
  moveParticlesOnHover={true}
/>
```
For `Galaxy`, `Hyperspeed`, `Orb`, and the shader-based ones (`Iridescence`, `Plasma`, `Prism`, `Liquid Ether`), exact prop names vary by release — install first, then read the generated file's prop interface (same rule as the text-animations doc, Section 4 note).

---

## 2. Animations — motion wrappers & interaction effects

These wrap your existing content/UI to add entrance motion or pointer interactivity, rather than being backgrounds themselves.

| Component | Why it fits "space" | Confirmed-ish props |
|---|---|---|
| **AnimatedContent** | GSAP scroll-triggered fade/slide-in — use for panels drifting into view like objects entering a viewport | `direction`, `distance`, `duration`, `ease`, `delay`, `threshold` |
| **FadeContent** | Simple IntersectionObserver fade-in, optional blur — good for a "materializing out of the void" reveal | `blur`, `duration`, `threshold`, `delay` |
| **ClickSpark** | Burst of particles on click — perfect as a "shooting star" / spark-of-energy click effect on buttons | `sparkColor`, `sparkCount`, `sparkRadius`, `duration` |
| **Magnet** | Element subtly pulls toward the cursor — good for interactive planet/icon hover in a nav or feature grid | `strength`, `range` |
| **PixelTrail** | Cursor leaves a pixel trail — can be recolored to look like a comet tail following the mouse | check installed source for exact props |
| **GlareHover** | Glossy light-sweep on hover — good for a "sunlight glinting off a hull" card effect | check installed source |
| **Bounce** | Simple load-in bounce — usable sparingly, e.g. an emoji/badge "landing" | `delay` |

### Confirmed props — `AnimatedContent`
```tsx
<AnimatedContent direction="vertical" distance={100} duration={0.8} ease="power3.out" threshold={0.1}>
  <div>Mission briefing panel</div>
</AnimatedContent>
```
### Confirmed props — `FadeContent`
```tsx
<FadeContent blur={true} duration={1000} threshold={0.2} delay={200}>
  <img src="/nebula-hero.jpg" alt="Nebula" />
</FadeContent>
```
### Confirmed props — `ClickSpark`
```tsx
<ClickSpark sparkColor="#8ab4ff" sparkCount={10} sparkRadius={18} duration={500}>
  <button>Launch</button>
</ClickSpark>
```
### Confirmed props — `Magnet`
```tsx
<Magnet strength={0.3} range={100}>
  <div className="planet-icon">🪐</div>
</Magnet>
```

---

## 3. Components — structural / UI building blocks

| Component | Why it fits "space" | Notes |
|---|---|---|
| **GlobeComponent** | An actual interactive rotating 3D globe — use for "our world/mission map," or retexture as a planet/moon | Three.js (`@react-three/fiber`) — needs a texture image (planet/earth map) |
| **ModelViewer** | Loads and displays a `.glb`/`.gltf` 3D model with auto-rotate + parallax | Great for a rotating spacecraft, satellite, or planet model; needs `three` + drei |
| **StarBorder** | Animated star-like gradient border around any element — the name says it all | `color`, `speed` — wrap CTA buttons or feature cards |
| **Dock** | macOS-style magnifying icon dock | Good for a mission-control-style bottom nav bar |
| **Counter** | Animated number counter | Perfect for a launch countdown or "light-years travelled" stat |
| **Carousel** / **CircularGallery** | Item carousel, some with circular/orbit-style layouts | Good for an "orbiting" gallery of mission photos or crew cards |
| **TiltedCard** / **SpotlightCard** | 3D-tilt or spotlight-follow hover cards | Good for feature cards that feel like floating panels in zero-g |
| **GlassCard** / **GlassIcons** | Frosted-glass translucent surfaces | Reads well as a "cockpit HUD panel" over a starfield background |
| **FlowingMenu** / **GooeyNav** / **StaggeredMenu** | Stylized nav menu interactions | Good for a bold, futuristic primary nav |
| **AnimatedList** | Staggered entrance list | Good for a mission log / crew roster reveal |
| **Stack** / **ScrollStack** | Cards that stack/peel on scroll | Good for a step-by-step "mission timeline" |

> These Component-category items generally depend on `motion` or `gsap`; the 3D ones (`GlobeComponent`, `ModelViewer`) depend on `three` + `@react-three/fiber` + `@react-three/drei`. Confirm exact props from the installed file — this category changes fastest release-to-release.

---

## 4. A suggested "space hero section" recipe

Layering order (back to front):
```tsx
"use client";
import Galaxy from "@/components/Backgrounds/Galaxy/Galaxy";
import Aurora from "@/components/Backgrounds/Aurora/Aurora";
import Noise from "@/components/Backgrounds/Noise/Noise";
import FadeContent from "@/components/Animations/FadeContent/FadeContent";
import StarBorder from "@/components/Components/StarBorder/StarBorder";
import ClickSpark from "@/components/Animations/ClickSpark/ClickSpark";
import SplitText from "@/components/TextAnimations/SplitText/SplitText"; // from the text-animations doc

export default function SpaceHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Layer 1: starfield */}
      <div className="absolute inset-0 -z-30"><Galaxy /></div>
      {/* Layer 2: nebula color wash, lower opacity */}
      <div className="absolute inset-0 -z-20 opacity-40">
        <Aurora colorStops={["#3a29ff", "#ff94b4", "#ffffff"]} amplitude={1.0} speed={0.5} />
      </div>
      {/* Layer 3: grain to unify the composite */}
      <div className="absolute inset-0 -z-10 opacity-10"><Noise /></div>

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <FadeContent blur duration={1000}>
          <SplitText text="Explore the Unknown" className="text-6xl font-bold" splitType="words" />
        </FadeContent>
        <ClickSpark sparkColor="#8ab4ff" sparkCount={12}>
          <StarBorder color="#8ab4ff" speed="4s">
            <button className="mt-8 rounded-full px-8 py-3">Begin Mission</button>
          </StarBorder>
        </ClickSpark>
      </div>
    </section>
  );
}
```
Notes for Copilot:
- Keep at most ONE animated WebGL/shader background at full opacity — stacking multiple heavy canvas layers at full strength tanks frame rate. Dim secondary layers with `opacity` and/or `mix-blend-mode`.
- Set `pointer-events: none` on background layers unless a background is explicitly interactive (e.g. `Particles` with `moveParticlesOnHover`), so clicks pass through to real UI.
- Test on a mid-range mobile device — WebGL/canvas-heavy space backgrounds (Galaxy, Hyperspeed, Iridescence) are the most likely components in the whole library to need a lighter fallback (e.g. a static starfield PNG) on low-end hardware or `prefers-reduced-motion`.

---

## 5. Checklist for Copilot

1. Pick ONE primary background (`Galaxy` or `Particles` for stars; add `Aurora`/`Plasma`/`Iridescence` at reduced opacity for nebula color) — don't stack more than 2 animated backgrounds.
2. Install it + its peer dependency (`ogl` for shader ones, plain canvas ones need nothing extra).
3. Wrap key interactive elements in `StarBorder`, `Magnet`, or `ClickSpark` for the "cosmic interactivity" layer — sparingly, not on every element.
4. Use `AnimatedContent`/`FadeContent` for scroll/entrance reveals of panels and text.
5. If a literal planet/globe/spacecraft model is wanted, reach for `GlobeComponent` or `ModelViewer` — these need actual texture/model assets (a planet texture JPG or a `.glb` file), which the person will need to supply or you'll need to source separately (do not fabricate a fake asset path — ask or use a placeholder and flag it).
6. Verify exact props for anything not in the confirmed tables above by reading the installed source file directly — the Components and Backgrounds categories change the fastest of the four.
7. Add a reduced-motion / low-end fallback for the heaviest WebGL background in use.