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
import HeroDashboard from "@/components/HeroDashboard";
import InteractiveExperience from "@/components/InteractiveExperience";
import InteractiveEducation from "@/components/InteractiveEducation";
import Dither from "@/components/Dither";
import AmbientAudio from "@/components/AmbientAudio";
import TargetCursor from "@/components/TargetCursor";
import ScrollReveal from "@/components/ScrollReveal";
import AchievementsConsole from "@/components/AchievementsConsole";
import PillNav from "@/components/PillNav";

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

      {/* Full-screen slow WebGL Dither background animation rendered outside of stacking contexts */}
      {!isLoading && (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none opacity-[0.22]">
          <Dither
            waveColor={[0.3, 0.3, 0.35]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.4}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
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

        {/* Top Minimal Apple-like Nav Bar - Restructured into React Bits PillNav with smooth scroll controls */}
        {!isLoading && (
          <header className="sticky top-0 z-40 w-full flex justify-center py-4 bg-transparent">
            <PillNav
              logo=""
              logoAlt="Origin Logo"
              initialLoadAnimation={true}
              items={[
                { label: "DEPLOYMENTS", href: "#deployments" },
                { label: "EXPERIENCE", href: "#chronology" },
                { label: "EDUCATION", href: "#specifications" },
                { label: "BEATS", href: "#beats" },
                { label: "AWARDS", href: "#achievements" },
                { label: "CONTACT", href: "#uplink" }
              ]}
              baseColor="#050508"
              pillColor="transparent"
              pillTextColor="#a0a0b0"
              hoveredPillTextColor="#ffffff"
            />
          </header>
        )}

        {/* Content Body Container - fully utilizing the screen width, no container border-x or divide-y lines */}
        <main className="flex-1 w-full px-6 md:px-12 pt-10">
          
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

          {/* Section 7: Achievements Console */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="achievements" className="py-24">
              <AchievementsConsole />
            </section>
          </ScrollReveal>

          {/* Section 8: FL Studio Waveform Deck (Music beats) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="beats" className="py-24">
              <AudioDeck />
            </section>
          </ScrollReveal>

          {/* Section 9: Operator Transmissions (References) */}
          <ScrollReveal delay={100} duration={1200} distance={35} blur={true}>
            <section id="operators" className="py-24">
              <OperatorTransmissions />
            </section>
          </ScrollReveal>

          {/* Section 10: Telemetry Uplink Form (Contact Formspree) */}
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
