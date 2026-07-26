"use client";

import { useState, useRef, useEffect } from "react";
import DecryptedText from "./DecryptedText";

interface ExperienceItem {
  company: string;
  shortName: string;
  logo: string;
  duration: string;
  role: string;
  shortDesc: string;
  bullets: string[];
  scaleClass?: string;
}

const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    company: "IIT KHARAGPUR",
    shortName: "IIT KGP",
    logo: "/images/iitkgp.png",
    duration: "APR 2026 - JUL 2026",
    role: "Project Engineer",
    shortDesc: "Conducted advanced research in speech processing and computational linguistics, focusing on low-resource speech technologies.",
    bullets: [
      "Conducted comprehensive academic research in natural language processing (NLP), automatic speech recognition (ASR), and spoken Sanskrit computational linguistics.",
      "Co-authored specialized research papers investigating how compound morphological and phonological structures behave under noisy spoken inputs.",
      "Designed and benchmarked multiple spoken Sanskrit corpora utilizing custom ASR systems and Google Cloud pipelines.",
    ],
  },
  {
    company: "KLYSTRON GLOBAL",
    shortName: "KLYSTRON",
    logo: "/images/klystron_global_logo.jpeg",
    duration: "MAY 2025 - MAY 2026",
    role: "Software Engineer (AI / Platform Engineering)",
    shortDesc: "Owned end-to-end design, development, and operation of three AI-powered, multi-tenant SaaS platforms supporting 30+ enterprise tenants and handling 10k+ daily API requests.",
    bullets: [
      "Owned end-to-end architecture and lifecycle of three AI-powered SaaS platforms: Texo, VaaniX, Spectralense, supporting 30+ enterprise tenants and handling 10k+ daily API requests.",
      "Designed and productionized Texo, a vision-LLM document intelligence platform enabling rule-driven extraction, validation, and multilingual processing (scaled to 300k+ documents/month).",
      "Built VaaniX, a conversational AI workflow platform using LangGraph, allowing tenants to execute and monitor workflows with human-in-the-loop controls.",
      "Developed Spectralense, a biometric verification platform with fully passive liveness detection and webhook integrations.",
    ],
    scaleClass: "scale-[1.5]",
  },
  {
    company: "MAXIML",
    shortName: "MAXIML",
    logo: "/images/maximl.jpeg",
    duration: "JAN 2025 - APR 2025",
    role: "Backend Developer Intern",
    shortDesc: "Engineered high-performance backend microservices with Nest.js, PostgreSQL, and Prisma ORM. Developed interactive Gantt charts to track project milestones.",
    bullets: [
      "Engineered comprehensive backend systems using Nest.js, PostgreSQL, and Prisma ORM, implementing RESTful APIs for extracting data from XER files.",
      "Implemented Gantt chart backends that improved reporting efficiency by 35% using containerized Docker environments.",
      "Created a central user management system with role-based access control (RBAC), enhancing development productivity by 40%.",
    ],
  },
  {
    company: "C-DAC",
    shortName: "C-DAC",
    logo: "/images/cdac_logo.svg",
    duration: "JUN 2024 - OCT 2024",
    role: "AI Research",
    shortDesc: "Conducted benchmarking research on Conformer, Whisper, and Wav2Vec2 Sanskrit ASR systems, achieving 81.7% accuracy.",
    bullets: [
      "Conducted research on low-resource ASR, evaluating Conformer, Whisper, and Wav2Vec2 models on a 78+ hour Sanskrit speech corpus.",
      "Developed specialized phonetic Sandhi transformations for compound Sanskrit words, improving word error rate (WER) by 30%.",
      "Optimized ASR data pipelines through Sox audio preprocessing, reducing processing latency by 30%.",
    ],
  },
  {
    company: "MANAPPURAM COMPTECH",
    shortName: "MACOM",
    logo: "/images/macomsolutions_logo.jpeg",
    duration: "MAY 2024 - JUL 2024",
    role: "SDE Intern",
    shortDesc: "Developed multilingual, multimodal RAG platforms using Gemini-pro. Formulated optimized pipelines on Google Cloud Run with Docker to index documents 50% faster.",
    bullets: [
      "Developed a multilingual, multimodal RAG application utilizing Gemini-pro and VertexAI embeddings, boosting overall retrieval efficiency by 20%.",
      "Formulated document processing pipelines with cloud functions and agentic chunking, indexing files 50% faster.",
    ],
    scaleClass: "scale-[1.6]",
  },
  {
    company: "TEC DE MONTERREY",
    shortName: "ITESM",
    logo: "/images/tecdemonterrey_logo.jpeg",
    duration: "AUG 2023 - MAR 2024",
    role: "Software Engineer (Product Development)",
    shortDesc: "Created an order management system with route optimization, boosting inventory accuracy by 40%. Applied Scikit-learn demand forecasting to decrease stockouts by 20%.",
    bullets: [
      "Created an order management system with route optimization, boosting inventory accuracy by 40% and cutting delivery effort by 25%.",
      "Applied demand forecasting algorithms with Scikit-learn in Flask, decreasing stockouts by 20%.",
    ],
  },
  {
    company: "MARKETRACK",
    shortName: "MARKETRACK",
    logo: "/images/marketrack.jpeg",
    duration: "JUN 2023 - AUG 2023",
    role: "Frontend Developer Intern",
    shortDesc: "Crafted high-fidelity web and mobile responsive interfaces using Adobe XD and React.js, leading to a 30% increase in user engagement and 20% faster load speeds.",
    bullets: [
      "Crafted engaging web and mobile interfaces with Adobe XD, leading to a 30% boost in user engagement.",
      "Implemented responsive React.js designs, enhancing cross-platform compatibility by 20% and reducing frontend load times by 15%.",
      "Achieved seamless backend integration and effective cross-team collaboration, resulting in a 98% bug-free and refined product launch.",
    ],
  },
];

export default function InteractiveExperience() {
  const [viewState, setViewState] = useState<"orbit" | "timeline" | "expanded">("orbit");
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Position angles for our orbiting bodies (planets) around the central Explore button
  const orbitRadius = 160; // Radius in pixels for desktop orbit path (expanded slightly for 7 items)

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
          
          {/* Faint diagnostic background orbital ring paths */}
          <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-white/[0.03] pointer-events-none" />
          <div className="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-white/[0.02] animate-[spin_120s_linear_infinite] pointer-events-none" />

          {/* Orbit rotating wrapper */}
          <div className="absolute inset-0 animate-[spin_40s_linear_infinite] hover:[animation-play-state:paused]">
            {EXPERIENCE_DATA.map((item, idx) => {
              const angle = (idx * (360 / EXPERIENCE_DATA.length) * Math.PI) / 180;
              // Responsive adjustment for radius
              const activeRadius = typeof window !== "undefined" && window.innerWidth < 768 ? 100 : orbitRadius;
              const x = Math.cos(angle) * activeRadius;
              const y = Math.sin(angle) * activeRadius;

              // Extract custom institutional url
              const urls: Record<string, string> = {
                "IIT KHARAGPUR": "https://www.iitkgp.ac.in/",
                "KLYSTRON GLOBAL": "https://www.klystronglobal.com/",
                "MAXIML": "https://maximl.com/",
                "C-DAC": "https://www.cdac.in/index.aspx?id=BL",
                "MANAPPURAM COMPTECH": "https://macomsolutions.com/",
                "TEC DE MONTERREY": "https://tec.mx/es?srsltid=AfmBOoqk4_W9ykzCLIQvvKWTNF0K9yALiStEIAfNzr5NvNsvHmp9oS35",
                "MARKETRACK": "https://www.marketrack.in/"
              };
              const url = urls[item.company] || "#";

              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-1/2 -ml-8 -mt-8 md:-ml-10 md:-mt-10 flex flex-col items-center justify-center transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  {/* Orbiting planet element: White silhouette logo container */}
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/[0.05] hover:border-white/20 bg-[#050508]/90 flex items-center justify-center p-3.5 group cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                  >
                    
                    {/* Counter spin container is applied to counteract the parent wrapper spin, keeping logos standing upright all the time! */}
                    <div className="w-full h-full flex items-center justify-center animate-[spin_40s_linear_infinite_reverse] group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={item.logo}
                        alt={item.company}
                        className={`max-h-full max-w-full object-contain filter invert grayscale opacity-45 group-hover:opacity-100 transition-opacity duration-300 mix-blend-screen ${
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
              TIMELINE_VIEW // SYS.02
            </span>
            <button
              onClick={() => setViewState("orbit")}
              className="font-mono text-[10px] tracking-widest text-white hover:text-[#f97316] transition-colors uppercase cursor-pointer"
            >
              ← RETURN TO ORBIT SYSTEM
            </button>
          </div>

          <div className="relative border-l border-white/[0.08] pl-8 ml-3 space-y-14">
            {EXPERIENCE_DATA.map((item, idx) => (
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
                        UPLINK_0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <h4 className="font-display text-lg md:text-xl font-extrabold tracking-wider text-white uppercase leading-none">
                        <DecryptedText text={item.company} animateOn="view" speed={40} maxIterations={12} />
                      </h4>

                      <span className="font-mono text-sm md:text-base text-[#f97316] block uppercase tracking-wider font-semibold">
                        {item.role}
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
                        EXPAND IMPACT LOG [+]
                      </button>
                    </div>
                  </div>

                  {/* Right Column (2/12 width): Compact desaturated white-silhouette logo */}
                  <div className="md:col-span-2 flex justify-start md:justify-end order-1 md:order-2 pt-1.5">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/[0.05] bg-[#050508]/80 flex items-center justify-center p-2.5 group-hover:border-white/20 transition-all duration-300">
                      <img
                        src={item.logo}
                        alt={item.company}
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

      {/* ================= STATE 2: EXPANDED IMPACT LOG ================= */}
      {viewState === "expanded" && (
        <div className="w-full max-w-3xl space-y-8 animate-[fadeIn_0.5s_ease-out] relative z-10 px-4 md:px-0">
          <div className="flex justify-between items-center pb-4 border-b border-white/[0.05]">
            <span className="font-mono text-[10px] tracking-[0.2em] text-[#00FFCC] uppercase select-none">
              DEEP_DIVE // IMPACT_METRICS
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
                  src={EXPERIENCE_DATA[selectedIdx].logo}
                  alt={EXPERIENCE_DATA[selectedIdx].company}
                  className={`max-h-full max-w-full object-contain filter invert grayscale opacity-80 mix-blend-screen ${
                    EXPERIENCE_DATA[selectedIdx].scaleClass || ""
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
                  {EXPERIENCE_DATA[selectedIdx].duration}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase">
                  {EXPERIENCE_DATA[selectedIdx].company}
                </h3>
                <p className="font-mono text-sm md:text-base text-[#f97316] font-semibold uppercase tracking-wider">
                  {EXPERIENCE_DATA[selectedIdx].role}
                </p>
              </div>

              <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/90">
                {EXPERIENCE_DATA[selectedIdx].shortDesc}
              </p>

              <div className="h-[1px] w-full bg-white/[0.05]" />

              <div className="space-y-4">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#a0a0b0]/55 uppercase select-none block">
                  ENGINEERING_IMPACT_LOGS
                </span>
                <ul className="space-y-4 pl-2">
                  {EXPERIENCE_DATA[selectedIdx].bullets.map((bullet, idx) => (
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
