# Origin — Obsidian Telemetry Portfolio

Origin is an immersive, high-performance, and responsive digital portfolio environment engineered for **Nived Krishna**. It seamlessly blends the aesthetic of advanced aerospace mission control systems with Apple's typographic minimalism and meticulous structural grid alignment.

---

## 🚀 Key Visual & Functional Dimensions

### 1. Zero-Bloat Atmospheric HUD Grid
* **WebGL Galaxy Backdrop**: Houses a slow-drifting, deep-space WebGL `<Galaxy />` star cluster, desaturated into monochromatic slate tones to coordinate with the dark layout.
* **Typographic Centerpiece**: Features a high-fidelity GSAP `<Shuffle />` kinetic title block rendering Nived Krishna's name with real-time letter-scrambling on viewport entrance.
* **Custom Targeting Cursor**: Integrated a custom, physics-driven GSAP `<TargetCursor />` that automatically snaps and locks onto active buttons, links, and cards.

### 2. Symmetrical Interactive Experience Consoles
* **Twin Orbital State-Machines**: Revamped the Work Experience and Education sections into interactive, circular orbit wheels. All orbiting logos stand perfectly upright and rotate smoothly, transitioning into vertical timeline logs and deep-dive panels on command.
* **Sanskrit Speech & NLP Publication**: Showcases Nived's academic research accepted at **ISCLS 2026** inside an understated, decrypted terminal card.

### 3. Integrated FL Studio Media Deck
* **Responsive HTML5 Player**: A fully functioning audio console cataloguing Nived's beat productions (*Yes Indeed, Lucid Dreams, Woah, Miss the Rage*).
* **Automated Audio Synchronization**: Features custom inter-track communication events. Playing any beat in the playlist automatically mutes the ambient background soundtrack, resuming it on stop/pause to prevent audio clutter.
* **Timeline Scrubbing & Equalizers**: Offers a click-to-scrub timeline slider and custom animated waveform equalizers on active tracks.

---

## 🛠️ Architecture & Tech Stack

* **Framework**: Next.js (App Router, static compilation pipeline)
* **Styling**: Tailwind CSS v4 (hardware-accelerated styling engine)
* **Animations**: GSAP (GreenSock), `@gsap/react`, HTML5 Canvas rendering, and WebGL
* **Media Handling**: Native HTML5 Web Audio with custom inter-mute brokers
* **PWA & Favicon Assets**: Fully configured standard PWA Web Manifest (`manifest.json`) supporting standalone iOS and Android desktop installation, complete with custom favicon sets.

---

## 🚀 Getting Started & Execution

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your browser to view the portfolio.

### 3. Build Production Distribution
```bash
npm run build
```
Compiles and generates a highly optimized static bundle inside the `.next/` directory.

---

## 📂 Asset Directories

* `src/components/` — Houses WebGL, Canvas, and GSAP-based animation components (`Galaxy`, `Starfield`, `TargetCursor`, `Shuffle`, `InteractiveExperience`, etc.)
* `public/audio/` — Serves ambient loop tracks (`bg.mp3`) and instrumental beat playlists (`yes_indeed.mp3`, `lucid_dreams.mp3`, etc.)
* `public/images/` — Serves desaturated grayscale portraits and white-silhouette brand logo vectors.

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
