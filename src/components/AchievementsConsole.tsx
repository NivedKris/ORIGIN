"use client";

import { useEffect, useState, useRef } from "react";

interface Achievement {
  title: string;
  role: string;
  organization: string;
  logo: string;
  date: string;
  url: string;
}

const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    title: "WINNER",
    role: "BIA GenAI Hackathon",
    organization: "Boston Institute of Analytics",
    logo: "/images/bia_logo.jpeg",
    date: "JUNE 2025",
    url: "https://drive.google.com/file/d/1yIgIZPUJDf3mc5q4_owDvDtb74d3dl7i/view?usp=sharing"
  },
  {
    title: "RUNNER UP",
    role: "IEEE Hack@Arch 2.0",
    organization: "IEEE Computer Society",
    logo: "/images/ieee_logo.jpeg",
    date: "DECEMBER 2023",
    url: "https://www.linkedin.com/in/nived-krishna-976923257/"
  },
  {
    title: "GRAND FINALIST",
    role: "IEEE CIS AI Hackathon",
    organization: "IEEE Computational Intelligence Society",
    logo: "/images/ieee_logo.jpeg",
    date: "SEPTEMBER 2023",
    url: "https://www.linkedin.com/in/nived-krishna-976923257/"
  },
  {
    title: "WINNER",
    role: "Google WinterHacks",
    organization: "Google Developer Student Clubs",
    logo: "/images/google_logo.jpeg",
    date: "FEBRUARY 2022",
    url: "https://www.linkedin.com/in/nived-krishna-976923257/"
  },
];

export default function AchievementsConsole() {
  return (
    <div className="space-y-6">
      {/* Section Header - matches left margins of of the portfolio layout */}
      <div className="w-full">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
          DIAGNOSTICS // PERFORMANCE_AWARDS
        </span>
        <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1">
          Achievements & Hackathons
        </h3>
      </div>

      {/* Infinite Horizontal Achievements Marquee Scroller */}
      <div className="relative w-full overflow-hidden border-y border-white/[0.05] bg-[#050508]/40 py-12 md:py-16 -mx-6 md:-mx-12 w-[100vw]">
        {/* Soft overlay gradient edges for smooth loop fading on dark void backdrop */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-[#050508]/85 to-transparent z-10 pointer-events-none" />

        {/* Marquee horizontal scroller track */}
        <div className="flex w-max items-center animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused] gap-24">
          
          {/* Render list twice to ensure infinite scroll seam alignment */}
          {[...Array(2)].map((_, listIdx) => (
            <div key={listIdx} className="flex gap-24 items-center px-12">
              {ACHIEVEMENTS_DATA.map((item, idx) => (
                <a
                  key={`${listIdx}-${idx}`}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-8 px-8 py-5 md:px-10 md:py-6 bg-white/[0.01] hover:bg-white/[0.03] border border-white/[0.04] hover:border-[#FFCC00]/40 rounded-xl transition-all duration-300 backdrop-blur-md cursor-pointer flex-shrink-0 hover:shadow-[0_0_20px_rgba(255,204,0,0.06)]"
                >
                  {/* Symmetrical 1px corner borders that glow Gold on hover */}
                  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/5 group-hover:border-[#FFCC00]/40 transition-colors duration-300" />
                  <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/5 group-hover:border-[#FFCC00]/40 transition-colors duration-300" />
                  <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/5 group-hover:border-[#FFCC00]/40 transition-colors duration-300" />
                  <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/5 group-hover:border-[#FFCC00]/40 transition-colors duration-300" />

                  {/* Massively Enlarged White Silhouette Logo Frame */}
                  <div className="h-14 w-24 md:h-16 md:w-28 relative flex items-center justify-center p-1 flex-shrink-0">
                    <img
                      src={item.logo}
                      alt={item.organization}
                      className="max-h-full max-w-full object-contain filter invert grayscale opacity-55 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none";
                      }}
                    />
                  </div>

                  {/* Typographic Metadata & Title Stack - No details text */}
                  <div className="flex flex-col text-left pr-2">
                    <span className="font-mono text-[9px] md:text-[10px] text-[#FFCC00] tracking-widest font-bold uppercase leading-none select-none">
                      {item.title} // {item.date}
                    </span>
                    <h4 className="font-display text-sm md:text-base font-extrabold tracking-wider text-white uppercase group-hover:text-[#FFCC00] transition-colors duration-300 mt-2 leading-none select-none">
                      {item.role}
                    </h4>
                    <span className="font-mono text-[7px] md:text-[8px] tracking-[0.2em] text-[#a0a0b0]/30 uppercase mt-1 leading-none select-none">
                      {item.organization}
                    </span>
                  </div>

                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
