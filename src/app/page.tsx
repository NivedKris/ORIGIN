"use client";

import { useState } from "react";
import OriginLoading from "@/components/OriginLoading";
import DecryptedText from "@/components/DecryptedText";
import LogoMarquee from "@/components/LogoMarquee";
import DeploymentsConsole from "@/components/DeploymentsConsole";
import MissionTimeline from "@/components/MissionTimeline";
import ResearchTerminal from "@/components/ResearchTerminal";
import AudioDeck from "@/components/AudioDeck";
import OperatorTransmissions from "@/components/OperatorTransmissions";
import ContactForm from "@/components/ContactForm";
import HudDock from "@/components/HudDock";
import HeroDashboard from "@/components/HeroDashboard";
import InteractiveExperience from "@/components/InteractiveExperience";
import InteractiveEducation from "@/components/InteractiveEducation";
import Galaxy from "@/components/Galaxy";
import AmbientAudio from "@/components/AmbientAudio";
import TargetCursor from "@/components/TargetCursor";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Premium Target Cursor lock-on overlay (Only active when main content is unlocked) */}
      {!isLoading && (
        <TargetCursor 
          targetSelector="a, button, .cursor-target, .group" 
          cursorColor="#ffffff" 
          cursorColorOnTarget="#f97316"
          spinDuration={4}
        />
      )}

      {/* Full-screen slow WebGL Galaxy background animation rendered outside of stacking contexts */}
      {!isLoading && (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none opacity-[0.22]">
          <Galaxy 
            density={0.7} 
            starSpeed={0.35} 
            glowIntensity={0.65} 
            twinkleIntensity={0.6} 
            rotationSpeed={0.06}
            saturation={0.05} // Pristine desaturated slate look matching our monochrome telemetry
            hueShift={220}
          />
        </div>
      )}

      {/* Premium Boot Loader Screen */}
      {isLoading && (
        <OriginLoading onComplete={() => setIsLoading(false)} />
      )}

      {/* Main Portfolio Page (revealed when loading is finished) */}
      <div
        className={`min-h-screen text-white flex flex-col justify-between selection:bg-[#f97316] selection:text-black transition-all duration-1000 relative z-10 ${
          isLoading ? "opacity-0 blur-md scale-[1.02]" : "opacity-100 blur-0 scale-100"
        }`}
      >
        {/* Ambient music control toggle (fixed top-left node matching reference) */}
        {!isLoading && <AmbientAudio />}

        {/* Custom global noise overlay to kill flat digital banding (Apple standard) */}
        <div className="noise-overlay" />

        {/* Top Minimal Apple-like Nav Bar - No borders, full screen usage, shifted origin left */}
        <header className="w-full bg-[#050508]/80 backdrop-blur-md sticky top-0 z-40">
          <div className="w-full px-6 md:px-12 h-16 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="font-display font-light text-sm tracking-[0.4em] text-white uppercase select-none">
                ORIGIN
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 font-mono text-[9px] tracking-[0.2em] text-[#a0a0b0]/40">
              <span>COORD // 45.109.81.24</span>
              <span>SYS // RESPONSIVE_OK</span>
            </div>
          </div>
        </header>

        {/* Bottom Floating Console Dock Panel */}
        {!isLoading && <HudDock />}

        {/* Content Body Container - fully utilizing the screen width, no container border-x or divide-y lines */}
        <main className="flex-1 w-full px-6 md:px-12">
          
          {/* Section 1: Hero Dashboard Panel (Instant fade on loader finish) */}
          <ScrollReveal delay={100} duration={1000} distance={15} blur={true}>
            <HeroDashboard />
          </ScrollReveal>

          {/* Section 2: Seamless Logo Marquee Loop */}
          <ScrollReveal delay={200} duration={1000} distance={10} blur={false}>
            <section className="py-12 border-t-0 -mx-6 md:-mx-12">
              <LogoMarquee />
            </section>
          </ScrollReveal>

          {/* Section 3: Deployments Console (Projects) */}
          <ScrollReveal delay={100} duration={1200} distance={30} blur={true}>
            <section id="deployments" className="py-24">
              <DeploymentsConsole />
            </section>
          </ScrollReveal>

          {/* Section 4: Chronological Mission Logs (Work Experience) */}
          <ScrollReveal delay={100} duration={1200} distance={30} blur={true}>
            <section id="chronology" className="py-24 space-y-8">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
                  SYSTEM LOGS // CORE_EXPERIENCES
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extralight tracking-[0.2em] text-white uppercase leading-none">
                  02 // PROFESSIONAL TIMELINE
                </h2>
              </div>
              <InteractiveExperience />
            </section>
          </ScrollReveal>

          {/* Section 5: Academic Mission Logs (Education) */}
          <ScrollReveal delay={100} duration={1200} distance={30} blur={true}>
            <section id="specifications" className="py-24 space-y-8">
              <div className="space-y-1">
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
                  SYSTEM LOGS // ACADEMIC_TRACKS
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-extralight tracking-[0.2em] text-white uppercase leading-none">
                  03 // ACADEMIC TIMELINE
                </h2>
              </div>
              <InteractiveEducation />
            </section>
          </ScrollReveal>

          {/* Section 6: Research Terminal (Sanskrit Publication) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="research" className="py-24">
              <ResearchTerminal />
            </section>
          </ScrollReveal>

          {/* Section 6: FL Studio Waveform Deck (Music beats) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="beats" className="py-24">
              <AudioDeck />
            </section>
          </ScrollReveal>

          {/* Section 7: Operator Transmissions (References) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="operators" className="py-24">
              <OperatorTransmissions />
            </section>
          </ScrollReveal>

          {/* Section 8: Telemetry Uplink Form (Contact Formspree) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="uplink" className="py-24 pb-36">
              <ContactForm />
            </section>
          </ScrollReveal>

        </main>

        {/* Page Footer */}
        <footer className="w-full border-t border-white/[0.08] bg-[#050508] py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] tracking-widest text-[#a0a0b0]/40">
            <span>ORIGIN CORE TERMINAL // ALL RIGHTS RESERVED // 2026</span>
            <span>BUILD // MULTI_TARGET_OK</span>
          </div>
        </footer>
      </div>
    </>
  );
}
