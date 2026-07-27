"use client";

import { useEffect, useState, useRef } from "react";

interface PartnerLogo {
  name: string;
  src: string;
  scaleClass?: string;
  url: string;
}

const PARTNER_LOGOS: PartnerLogo[] = [
  { name: "IIT KHARAGPUR", src: "/images/iitkgp.png", url: "https://www.iitkgp.ac.in/" },
  { name: "KLYSTRON GLOBAL", src: "/images/klystron_global_logo.png", scaleClass: "scale-[1.6]", url: "https://www.klystronglobal.com/" },
  { name: "MAXIML", src: "/images/maximl.jpeg", url: "https://maximl.com/" },
  { name: "C-DAC", src: "/images/cdac_logo.svg", url: "https://www.cdac.in/index.aspx?id=BL" },
  { name: "MACOM", src: "/images/macomsolutions_logo.png", scaleClass: "scale-[1.8]", url: "https://macomsolutions.com/" },
  { name: "TEC DE MONTERREY", src: "/images/tecdemonterrey_logo.jpeg", url: "https://tec.mx/es?srsltid=AfmBOoqk4_W9ykzCLIQvvKWTNF0K9yALiStEIAfNzr5NvNsvHmp9oS35" },
  { name: "MARKETRACK", src: "/images/marketrack.jpeg", url: "https://www.marketrack.in/" },
];

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden border-y border-white/[0.05] bg-[#050508]/40 py-12 md:py-16">
      {/* Soft overlay gradient edges for smooth loop fading on dark void backdrop */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-44 bg-gradient-to-r from-[#050508] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-44 bg-gradient-to-l from-[#050508] to-transparent z-10 pointer-events-none" />

      {/* Marquee horizontal scroller track */}
      <div className="flex w-max items-center animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] gap-24">
        
        {/* Render list twice to ensure infinite scroll seam alignment */}
        {[...Array(2)].map((_, listIdx) => (
          <div key={listIdx} className="flex gap-24 items-center px-12">
            {PARTNER_LOGOS.map((logo, idx) => (
              <a
                key={`${listIdx}-${idx}`}
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center h-12 w-28 md:h-14 md:w-36 transition-all duration-300 cursor-pointer flex-shrink-0"
              >
                {/* 
                  ELEGANT SILHOUETTE ENGINE:
                  1. 'invert' turns dark logos white and solid white JPEG backgrounds black.
                  2. 'grayscale' unifies any colored hues into clean monochromatic values.
                  3. 'mix-blend-screen' blends the resulting black background perfectly into our dark page background, making it invisible.
                  This results in pristine white silhouettes directly on the space backdrop, with NO clumsy box frames!
                */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`max-h-full max-w-full object-contain filter invert grayscale opacity-50 group-hover:opacity-100 transition-all duration-300 mix-blend-screen ${
                    logo.scaleClass ? `${logo.scaleClass} group-hover:scale-[1.65]` : "group-hover:scale-103"
                  }`}
                  onError={(e) => {
                    // Fallback: hide broken image container
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </a>
            ))}
          </div>
        ))}
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
