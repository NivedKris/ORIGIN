"use client";

import { useEffect, useState, useRef } from "react";
import DecryptedText from "./DecryptedText";

interface DockItem {
  label: string;
  href: string;
}

const DOCK_ITEMS: DockItem[] = [
  { label: "SYS // TOP", href: "#" },
  { label: "01 // DEPLOYMENTS", href: "#deployments" },
  { label: "02 // CHRONOLOGY", href: "#chronology" },
  { label: "03 // RESEARCH", href: "#research" },
  { label: "04 // BEATS", href: "#beats" },
  { label: "05 // OPERATORS", href: "#operators" },
  { label: "06 // UPLINK", href: "#uplink" },
];

export default function HudDock() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[90vw] md:max-w-xl w-full">
      <div className="border border-white/[0.08] bg-[#050508]/80 backdrop-blur-md px-4 py-3 rounded-full flex items-center justify-between shadow-2xl">
        {DOCK_ITEMS.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          return (
            <a
              key={idx}
              href={item.href}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="relative flex flex-col items-center justify-center py-1 flex-1 text-center transition-all duration-300"
            >
              {/* Custom micro-dot active indicator */}
              <span
                className={`w-1 h-1 rounded-full mb-1 transition-all duration-300 ${
                  isHovered ? "bg-[#f97316] scale-125" : "bg-white/10"
                }`}
              />

              {/* Monospaced simplified labels */}
              <span className="font-mono text-[8px] tracking-wider text-[#a0a0b0] hover:text-white transition-colors uppercase">
                {item.label.split(" // ")[0]}
              </span>

              {/* Floating Tooltip detail label */}
              <div
                className={`absolute bottom-12 bg-[#050508] border border-white/10 px-3 py-1 rounded-md text-[9px] font-mono tracking-widest text-[#00FFCC] transition-all duration-300 pointer-events-none whitespace-nowrap ${
                  isHovered ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-2 scale-95"
                }`}
              >
                {item.label}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
