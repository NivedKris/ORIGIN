"use client";

import { useEffect, useState, useRef } from "react";
import DecryptedText from "./DecryptedText";

import PixelCard from "./PixelCard";
import Shuffle from "./Shuffle";

export default function HeroDashboard() {
  return (
    <section className="relative py-20 md:py-28 flex flex-col justify-center px-0 overflow-hidden">
      
      {/* 
        HIGH-IMPACT ATMOSPHERIC PASS (Apple standard background fill):
        1. Clean, faint desaturated dot-grid pattern.
        2. Faint ambient scanline overlay matching CRT terminals.
        3. Warm, pulsing telemetry orange-to-emerald radial backdrop glow.
      */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-[0.035]">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:20px_26px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_100%,transparent_100%)]" />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.003)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] md:w-[700px] md:h-[700px] rounded-full bg-[radial-gradient(circle,rgba(249,115,22,0.015)_0%,rgba(0,255,204,0.003)_50%,transparent_70%)] pointer-events-none select-none animate-pulse" />

      {/* Main asymmetric grid with unified alignment - Left shift offset to bring photo closer to text */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start relative z-10 w-full max-w-6xl mx-auto">
        
        {/* Left Column (4/12 Width): Clean Grayscale Portrait Frame - Shifted right towards name */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:justify-end items-center lg:items-end pt-2 space-y-4 pr-0 lg:pr-8">
          
          {/* Symmetrical 1px hairline border container nested with React Bits PixelCard hover stream */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 group rounded-xl">
            <PixelCard
              variant="orange"
              gap={5}
              speed={45}
              colors="#ff7a00,#f97316,#ffffff"
              noFocus={true}
              className="relative w-full h-full border border-white/[0.08] bg-black/40 p-2 group transition-all duration-500 rounded-xl hover:shadow-[0_0_25px_rgba(249,115,22,0.1)] hover:border-[#f97316]/50"
            >
              {/* Viewport Diagnostic Framing Ticks */}
              <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-white/20 group-hover:border-[#f97316]/50 transition-colors duration-300 rounded-tl-md z-20 pointer-events-none" />
              <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-white/20 group-hover:border-[#f97316]/50 transition-colors duration-300 rounded-tr-md z-20 pointer-events-none" />
              <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-white/20 group-hover:border-[#f97316]/50 transition-colors duration-300 rounded-bl-md z-20 pointer-events-none" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-white/20 group-hover:border-[#f97316]/50 transition-colors duration-300 rounded-br-md z-20 pointer-events-none" />

              {/* Inner Image Wrapper */}
              <div className="w-full h-full bg-zinc-950 border border-white/[0.05] relative overflow-hidden rounded-lg z-10">
                <img
                  src="/images/me.png"
                  alt="Nived Krishna"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-all duration-700 group-hover:scale-102 group-hover:grayscale-0 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/85 via-transparent to-transparent opacity-40 pointer-events-none" />
              </div>
            </PixelCard>
          </div>

          {/* Symmetrical Monospaced Caption to visually extend portrait height and balance x-axis */}
          <div className="w-64 md:w-72 flex justify-between items-center font-mono text-[8px] tracking-[0.25em] text-[#a0a0b0]/40 uppercase select-none px-1">
            <span>OPERATOR_PORTRAIT</span>
            <span>SYS_COORD_OK</span>
          </div>
        </div>

        {/* Right Column (8/12 Width): Typographic Information Center */}
        <div className="lg:col-span-8 space-y-8 text-left pl-0 lg:pl-4">
          
          {/* Name Header - Massive, Highly Compressed, Solid White, using high-fidelity GSAP Shuffle */}
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[5rem] xl:text-[6rem] font-extrabold tracking-tight leading-[0.85] text-white uppercase select-none">
            <Shuffle
              text="NIVED"
              shuffleDirection="right"
              duration={0.3}
              stagger={0.03}
              shuffleTimes={2}
              triggerOnce={true}
              triggerOnHover={true}
              tag="span"
              className="inline-block"
            />
            <br />
            <Shuffle
              text="KRISHNA"
              shuffleDirection="right"
              duration={0.3}
              stagger={0.03}
              shuffleTimes={2}
              triggerOnce={true}
              triggerOnHover={true}
              tag="span"
              className="inline-block"
            />
          </h2>

          {/* Role Decoupler parallel facts - styled with clean bullet indicators ▸ */}
          <div className="space-y-4 font-mono text-xs md:text-sm tracking-widest text-[#a0a0b0]">
            <div className="flex items-center space-x-3 group">
              <span className="text-[#f97316] font-bold">▸</span>
              <span className="text-white">
                PhD Scholar @ IIT Kharagpur
              </span>
              <span className="text-[#a0a0b0]/40 font-light">— NLP & AI Research</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <span className="text-[#f97316] font-bold">▸</span>
              <span className="text-white">
                AI Platform Engineer
              </span>
              <span className="text-[#a0a0b0]/40 font-light">— Scalable SaaS Core Systems</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <span className="text-[#f97316] font-bold">▸</span>
              <span className="text-white">
                FL Studio Beat Producer
              </span>
              <span className="text-[#a0a0b0]/40 font-light">— Audio Engineering & Textures</span>
            </div>
          </div>

          {/* Minimal dividing line */}
          <div className="h-[1px] w-full bg-white/[0.05]" />

          {/* Understated bio - small unified font size */}
          <p className="font-mono text-xs tracking-wide text-[#a0a0b0]/60 max-w-xl leading-relaxed">
            Investigating the margins where spoken natural language models intersect with hardware-grade multi-tenant platform backends. Designed with mathematical constraints and frictionless kinetic layouts.
          </p>

          {/* 
            Hierarchical CTA Buttons & Social Profiles:
            1. Connect Terminal is primary, fully bordered.
            2. Spacing bumped up to 32px (space-y-8/pt-6) to ensure consistent rhythm.
          */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6">
            <a
              href="#uplink"
              className="font-mono text-xs tracking-widest uppercase border border-white hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] px-8 py-3.5 transition-all duration-300 text-white text-center cursor-pointer font-bold rounded-md"
            >
              Connect Terminal
            </a>
            <a
              href="https://drive.google.com/file/d/1YFLD7LjYHqi3-Q68X6im1HxNQ98MG7Mw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs tracking-widest uppercase text-[#a0a0b0] hover:text-white transition-colors duration-300"
            >
              Access System CV [↗]
            </a>
            <div className="flex items-center space-x-6 pl-0 lg:pl-4 border-l border-white/0 lg:border-white/10 h-4">
              <a
                href="https://github.com/NivedKris"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-[#a0a0b0] hover:text-white transition-colors duration-300"
              >
                GitHub [↗]
              </a>
              <a
                href="https://www.linkedin.com/in/nived-krishna-976923257/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs tracking-widest uppercase text-[#a0a0b0] hover:text-white transition-colors duration-300"
              >
                LinkedIn [↗]
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Subtle fading edge scroll indicator to hints at the next section */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 select-none pointer-events-none opacity-40">
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#a0a0b0]">SCROLL</span>
        <span className="w-1 h-3 border border-[#a0a0b0] rounded-full relative overflow-hidden">
          <span className="absolute top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#f97316] rounded-full animate-bounce" />
        </span>
      </div>
    </section>
  );
}
