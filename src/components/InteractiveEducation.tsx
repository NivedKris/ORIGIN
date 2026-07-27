"use client";

import { useState, useRef, useEffect } from "react";
import DecryptedText from "./DecryptedText";

interface EducationItem {
  institution: string;
  shortName: string;
  logo: string;
  duration: string;
  degree: string;
  shortDesc: string;
  bullets: string[];
  scaleClass?: string;
}

const EDUCATION_DATA: EducationItem[] = [
  {
    institution: "INDIAN INSTITUTE OF TECHNOLOGY, KHARAGPUR",
    shortName: "IIT KGP",
    logo: "/images/iitkgp.png",
    duration: "JULY 2026 - PRESENT",
    degree: "Doctor of Philosophy (PhD) in CSE",
    shortDesc: "Pursuing doctoral research in Computer Science and Engineering, focusing on deep learning speech models for low-resource languages.",
    bullets: [
      "Specializing in deep learning speech architectures, Sanskrit morphophonological research, and low-resource speech technologies.",
      "Conducting research under the supervision of Prof. Pawan Goyal.",
      "Investigating boundary-sensitive speech errors and downstream NLP task robustness.",
    ],
  },
  {
    institution: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KOTTAYAM",
    shortName: "IIIT KOTTAYAM",
    logo: "/images/iiit_kottayam.jpeg",
    duration: "2021 - 2025",
    degree: "Bachelor of Technology (B.Tech) in CSE",
    shortDesc: "Graduated with an outstanding CGPA of 8.67/10.0 in Computer Science & Engineering.",
    bullets: [
      "Cultivated deep foundational knowledge in systems programming, data structures, algorithm design, machine learning, and databases.",
      "Maintained an exceptional CGPA of 8.67 / 10.0.",
      "Participated in collaborative supply chain logistics product development with Tecnológico de Monterrey.",
    ],
  },
  {
    institution: "KAILASANADHA VIDYANIKETHAN",
    shortName: "KAILASANADHA",
    logo: "/images/kvn.png",
    duration: "2020 - 2021",
    degree: "12th Grade (CBSE Computer Science Degree)",
    shortDesc: "Attained fundamental expertise in Python, relational databases, SQL, and core computer science principles.",
    bullets: [
      "Acquired fundamental knowledge of structural programming concepts, object-oriented concepts, and memory allocations.",
      "Mastered structured query languages (SQL) and relational schema mappings.",
    ],
  },
  {
    institution: "SN VIDYA BHAVAN",
    shortName: "SNVB",
    logo: "/images/snvidyabhavan_logo.jpeg",
    duration: "2018 - 2019",
    degree: "10th Grade (AISSCE Degree)",
    shortDesc: "Acquired basic skills in electronics, computer programming, mathematics, and science.",
    bullets: [
      "Acquired basic skills in microcontrollers, electronics, and logical algorithmic scripting.",
      "Studied advanced science, physics mechanics, and mathematics foundations.",
    ],
  },
];

export default function InteractiveEducation() {
  const [viewState, setViewState] = useState<"orbit" | "timeline" | "expanded">("orbit");
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Position angles for our orbiting bodies (planets) around the central Explore button
  const orbitRadius = 140; // Radius in pixels for desktop orbit path (4 items)

  const handleExplore = () => {
    setViewState("timeline");
  };

  const handleExpand = (idx: number) => {
    setSelectedIdx(idx);
    setViewState("expanded");
  };

  // Programmatic viewport alignment focus sweep:
  // When view state changes, scroll the viewport instantly to align with the top of this container
  useEffect(() => {
    if (viewState !== "orbit" && containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [viewState]);

  return (
    <div ref={containerRef} className="min-h-[500px] flex items-center justify-center relative overflow-hidden py-12 scroll-mt-24">
      
      {/* ================= STATE 0: CIRCULAR ORBIT HUD ================= */}
      {viewState === "orbit" && (
        <div className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] flex items-center justify-center">
          
          {/* Faint background orbital ring paths */}
          <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-white/[0.03] pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] md:w-[300px] md:h-[300px] rounded-full border border-dashed border-white/[0.02] animate-[spin_100s_linear_infinite] pointer-events-none" />

          {/* Orbit rotating wrapper */}
          <div className="absolute inset-0 animate-[spin_35s_linear_infinite] hover:[animation-play-state:paused]">
            {EDUCATION_DATA.map((item, idx) => {
              const angle = (idx * (360 / EDUCATION_DATA.length) * Math.PI) / 180;
              const activeRadius = typeof window !== "undefined" && window.innerWidth < 768 ? 95 : orbitRadius;
              const x = Math.cos(angle) * activeRadius;
              const y = Math.sin(angle) * activeRadius;

              // Extract custom institutional url
              const urls: Record<string, string> = {
                "INDIAN INSTITUTE OF TECHNOLOGY, KHARAGPUR": "https://www.iitkgp.ac.in/",
                "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KOTTAYAM": "https://www.iiitkottayam.ac.in/#!/home",
                "KAILASANADHA VIDYANIKETHAN": "https://www.kvnschool.com/",
                "SN VIDYA BHAVAN": "https://snvbss.org/"
              };
              const url = urls[item.institution] || "#";

              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-1/2 -ml-10 -mt-10 md:-ml-12 md:-mt-12 flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Orbiting planet element: White silhouette logo container */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/[0.05] hover:border-white/20 bg-[#050508]/90 flex items-center justify-center p-4 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                  >
                    
                    {/* Counter spin container to keep logos standing upright all the time! */}
                    <div className="w-full h-full flex items-center justify-center animate-[spin_35s_linear_infinite_reverse] group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className={`max-h-full max-w-full object-contain filter invert grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${
                          item.scaleClass || ""
                        }`}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Central Sun Element: Explore CTA Button - Small explore and arrow sign only */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <button
              onClick={handleExplore}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-white/20 hover:border-white bg-[#050508] text-white flex flex-col items-center justify-center text-center p-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] cursor-pointer group"
            >
              <span className="font-mono text-xs md:text-sm font-bold tracking-[0.15em] flex items-center gap-1 group-hover:scale-105 transition-transform duration-300">
                EXPLORE →
              </span>
            </button>
          </div>

        </div>
      )}

      {/* ================= STATE 1: TIMELINE CONSOLE ================= */}
      {viewState === "timeline" && (
        <div className="w-full max-w-3xl space-y-10 animate-[fadeIn_0.5s_ease-out] relative z-10 px-4 md:px-0">
          <div className="flex justify-between items-center pb-4 border-b border-white/[0.05]">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#a0a0b0]/55 uppercase select-none">
              ACADEMIC_TIMELINE // SYS.03
            </span>
            <button
              onClick={() => setViewState("orbit")}
              className="font-mono text-[10px] tracking-widest text-white hover:text-[#f97316] transition-colors uppercase cursor-pointer"
            >
              ← RETURN TO ORBIT SYSTEM
            </button>
          </div>

          <div className="relative border-l border-white/[0.08] pl-8 ml-3 space-y-14">
            {EDUCATION_DATA.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline vertical line connector node dot */}
                <span className="absolute -left-[37px] top-2 w-2.5 h-2.5 rounded-full border border-white/20 bg-[#050508] group-hover:border-[#f97316] transition-all duration-300" />

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  
                  {/* Left Column (10/12 width): Primary Timeline Data */}
                  <div className="md:col-span-10 space-y-3.5 order-2 md:order-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <span className="font-mono text-xs text-[#00FFCC] tracking-widest">
                        {item.duration}
                      </span>
                      <span className="font-mono text-[9px] text-[#a0a0b0]/55 select-none uppercase tracking-wider">
                        DEGREE_0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-display text-lg md:text-xl font-extrabold tracking-wider text-white uppercase leading-none">
                        <span>{item.institution}</span>
                      </h4>

                      <span className="font-mono text-sm md:text-base text-[#f97316] block uppercase tracking-wider font-semibold">
                        {item.degree}
                      </span>
                    </div>

                    <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/80">
                      {item.shortDesc}
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => handleExpand(idx)}
                        className="font-mono text-xs tracking-widest border border-white/20 hover:border-white hover:text-[#f97316] px-5 py-2.5 bg-transparent text-white transition-all duration-300 uppercase cursor-pointer"
                      >
                        EXPAND DEGREE LOG [+]
                      </button>
                    </div>
                  </div>

                  {/* Right Column (2/12 width): Compact desaturated white-silhouette logo */}
                  <div className="md:col-span-2 flex justify-start md:justify-end order-1 md:order-2 pt-1.5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/[0.05] bg-[#050508]/80 flex items-center justify-center p-2.5 group-hover:border-white/20 transition-all duration-300">
                      <img
                        src={item.logo}
                        alt={item.institution}
                        className={`max-h-full max-w-full object-contain filter invert grayscale opacity-60 mix-blend-screen transition-opacity duration-300 group-hover:opacity-100 ${
                          item.scaleClass || ""
                        }`}
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================= STATE 2: EXPANDED DEGREE LOG ================= */}
      {viewState === "expanded" && (
        <div className="w-full max-w-3xl space-y-8 animate-[fadeIn_0.5s_ease-out] relative z-10 px-4 md:px-0">
          <div className="flex justify-between items-center pb-4 border-b border-white/[0.05]">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00FFCC] uppercase select-none">
              DEEP_DIVE // ACADEMIC_METRICS
            </span>
            <button
              onClick={() => setViewState("timeline")}
              className="font-mono text-[10px] tracking-widest text-white hover:text-[#f97316] transition-colors uppercase cursor-pointer"
            >
              ← BACK TO TIMELINE
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column (3/12 width): Compact desaturated logo side frame */}
            <div className="md:col-span-3 flex md:justify-start justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/[0.08] bg-[#050508]/90 flex items-center justify-center p-4">
                <img
                  src={EDUCATION_DATA[selectedIdx].logo}
                  alt={EDUCATION_DATA[selectedIdx].institution}
                  className={`max-h-full max-w-full object-contain filter invert grayscale opacity-80 mix-blend-screen ${
                    EDUCATION_DATA[selectedIdx].scaleClass || ""
                  }`}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </div>

            {/* Right Column (9/12 width): Information payload content */}
            <div className="md:col-span-9 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs text-[#00FFCC] tracking-widest block">
                  {EDUCATION_DATA[selectedIdx].duration}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase">
                  {EDUCATION_DATA[selectedIdx].institution}
                </h3>
                <p className="font-mono text-sm md:text-base text-[#f97316] font-semibold uppercase tracking-wider">
                  {EDUCATION_DATA[selectedIdx].degree}
                </p>
              </div>

              <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/90">
                {EDUCATION_DATA[selectedIdx].shortDesc}
              </p>

              <div className="h-[1px] w-full bg-white/[0.05]" />

              <div className="space-y-4">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#a0a0b0]/55 uppercase select-none block">
                  ACADEMIC_IMPACT_LOGS
                </span>
                <ul className="space-y-4 pl-2">
                  {EDUCATION_DATA[selectedIdx].bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="font-mono text-xs md:text-sm text-[#a0a0b0]/80 leading-relaxed list-none relative pl-5"
                    >
                      <span className="absolute left-0 top-2 w-1 h-1 bg-[#00FFCC] rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* Basic Keyframe Fade CSS animation fallback inline */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
