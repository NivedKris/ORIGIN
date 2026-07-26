"use client";

import { useState } from "react";
import DecryptedText from "./DecryptedText";

interface Project {
  title: string;
  image: string;
  demoUrl: string;
  gitUrl: string;
  category: string;
  description: string;
  techStack: string[];
}

const FEATURED_PROJECTS: Project[] = [
  {
    title: "SENTINEL",
    image: "/images/sentinel.png",
    demoUrl: "https://sentinel-one-ebon.vercel.app/",
    gitUrl: "https://github.com/NivedKris/Sentinel.git",
    category: "3D GEOSPATIAL HAZARDS EXPLORER",
    description: "A real-time natural hazards explorer in a navigable 3D model of Earth. Streams live NASA EONET feeds, renders data in CesiumJS, and enriches listings with nearby populated places and current air quality index metrics. Built as an installable Progressive Web App (PWA) with custom validation layers.",
    techStack: ["CesiumJS", "NASA EONET API", "PWA", "Tailwind CSS", "React.js"],
  },
  {
    title: "MATCHUP",
    image: "/images/matchup.png",
    demoUrl: "https://tournament-io-web.vercel.app/",
    gitUrl: "https://github.com/NivedKris/tournament.io.git",
    category: "END-TO-END ESPORTS TOURNAMENT ECOSYSTEM",
    description: "A comprehensive end-to-end esports tournament management ecosystem. Designed to eliminate manual coordination with automated group brackets, custom host organization panels, UCL & World Cup bracket mechanics, squad selectors, verification flows, and integrated match-specific chat systems.",
    techStack: ["React.js", "FastAPI", "Tailwind CSS", "UCL Brackets Engine", "WebSockets"],
  },
];

export default function DeploymentsConsole() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
          FEATURED SYSTEMS // ARCHIVAL_NODES
        </span>
        <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1">
          Active Deployments
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {FEATURED_PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group relative border border-white/[0.08] hover:border-white/20 bg-black/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.015)] overflow-hidden rounded-xl"
          >
            <div className="space-y-6">
              {/* Screenshot Frame with contrast normalization & grayscaler - using object-cover to fill container completely with no side blank spaces */}
              <div className="w-full aspect-video border border-white/[0.05] bg-zinc-950 relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-[0.70] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-[1.02] mix-blend-lighten transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[#050508]/15 pointer-events-none transition-opacity duration-500 group-hover:opacity-0" />
              </div>

              {/* Title & Live Status line */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-display text-2xl font-bold tracking-wider text-white uppercase">
                    <DecryptedText text={project.title} animateOn="view" speed={60} maxIterations={12} />
                  </h4>
                  <div className="flex items-center space-x-1.5 font-mono text-[9px] text-[#00FFCC]/80 select-none bg-[#00FFCC]/5 border border-[#00FFCC]/10 px-2 py-0.5 rounded">
                    <span className="w-1 h-1 rounded-full bg-[#00FFCC] animate-pulse" />
                    <span>STATUS: LIVE</span>
                  </div>
                </div>

                {/* Subtitle */}
                <span className="font-mono text-[9px] text-[#a0a0b0]/50 tracking-[0.2em] block uppercase">
                  {project.category}
                </span>

                {/* Description */}
                <p className="font-mono text-[11px] leading-relaxed text-[#a0a0b0] tracking-wide">
                  {project.description}
                </p>

                {/* Scannable Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="font-mono text-[9px] tracking-wider text-[#a0a0b0]/60 bg-white/[0.02] border border-white/[0.04] px-2.5 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Actions Block - Bold Primary vs Understated secondary */}
            <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px]">
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0b0] hover:text-white transition-colors duration-200"
              >
                REPOSITORY [↗]
              </a>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold border border-white/20 px-4 py-2 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-white uppercase text-center"
              >
                Launch Terminal →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
