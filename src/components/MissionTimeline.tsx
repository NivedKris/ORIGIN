"use client";

import { useState } from "react";
import DecryptedText from "./DecryptedText";

interface ExperienceItem {
  company: string;
  duration: string;
  role: string;
  shortDesc: string;
  bullets: string[];
}

const EXPERIENCE_LOGS: ExperienceItem[] = [
  {
    company: "IIT KHARAGPUR (PROJECT ENGINEER)",
    duration: "APR 2026 - JUL 2026",
    role: "Project Engineer",
    shortDesc: "Conducted advanced research in speech processing and computational linguistics, focusing on low-resource speech technologies. Testing Sanskrit speech benchmarks against ASR noise.",
    bullets: [
      "Conducted comprehensive academic research in natural language processing (NLP), automatic speech recognition (ASR), and spoken Sanskrit computational linguistics.",
      "Co-authored specialized research papers investigating how compound morphological and phonological structures behave under noisy spoken inputs.",
      "Designed and benchmarked multiple spoken Sanskrit corpora utilizing custom ASR systems and Google Cloud pipelines.",
    ],
  },
  {
    company: "KLYSTRON GLOBAL (SDE - AI / PLATFORM)",
    duration: "MAY 2025 - MAY 2026",
    role: "Software Engineer (AI / Platform Engineering)",
    shortDesc: "Owned end-to-end design, development, and operation of three AI-powered, multi-tenant SaaS platforms supporting 30+ enterprise tenants and handling 10k+ daily API requests.",
    bullets: [
      "Owned end-to-end architecture of three AI-powered SaaS platforms: Texo, VaaniX, Spectralense, supporting 30+ enterprise tenants and handling 10,000+ daily API requests.",
      "Productionized Texo, a vision-LLM document intelligence SaaS platform enabling rule-driven extraction, validation, and multilingual processing (scaled to 300k+ documents/month).",
      "Built VaaniX, a conversational AI workflow SaaS platform using LangGraph, allowing tenants to define, execute, and monitor their own workflows with human-in-the-loop controls.",
      "Developed Spectralense, a biometric verification SaaS platform with fully passive liveness detection.",
    ],
  },
  {
    company: "MAXIML (BACKEND DEVELOPER INTERN)",
    duration: "JAN 2025 - APR 2025",
    role: "Backend Developer Intern",
    shortDesc: "Engineered high-performance backend microservices with Nest.js, PostgreSQL, and Prisma ORM. Developed interactive Gantt charts and robust RESTful APIs to track project milestones.",
    bullets: [
      "Engineered backend systems using Nest.js, PostgreSQL, and Prisma ORM to extract Gantt-visualized data from XER files.",
      "Improved reporting efficiency by 35% by implementing interactive Gantt chart backends, Dockerizing services, and integrating Elastic APM.",
      "Designed secure collaboration frameworks with role-based access control (RBAC), enhancing overall productivity by 40%.",
    ],
  },
  {
    company: "C-DAC (AI RESEARCH)",
    duration: "JUN 2024 - OCT 2024",
    role: "AI Research",
    shortDesc: "Conducted benchmarking research on Conformer, Whisper, and Wav2Vec2 Sanskrit ASR systems, achieving 81.7% accuracy. Created specialized morphophonological Sandhi transformations.",
    bullets: [
      "Conducted research on low-resource ASR, evaluating Conformer, Whisper, and Wav2Vec2 on a 78+ hour Sanskrit speech corpus (achieving 81.7% accuracy).",
      "Optimized Sanskrit speech recognition by refining Wav2Vec2, constructing phonetic Sandhi transformations to improve WER by 30%.",
      "Streamlined data processing pipelines with Sox audio preprocessing, reducing ingestion latency by 30%.",
    ],
  },
  {
    company: "MANAPPURAM COMPTECH (SDE INTERN)",
    duration: "MAY 2024 - JUL 2024",
    role: "SDE Intern",
    shortDesc: "Developed multilingual, multimodal RAG platforms using Gemini-pro. Formulated optimized pipelines on Google Cloud Run with Docker to index documents 50% faster.",
    bullets: [
      "Developed a multilingual, multimodal RAG application utilizing Gemini-pro and VertexAI embeddings, boosting retrieval efficiency by 20%.",
      "Formulated document processing pipelines with agentic chunking, indexing files 50% faster.",
    ],
  },
];

interface EducationItem {
  institution: string;
  duration: string;
  degree: string;
  details: string;
}

const EDUCATION_LOGS: EducationItem[] = [
  {
    institution: "INDIAN INSTITUTE OF TECHNOLOGY, KHARAGPUR",
    duration: "JULY 2026 - PRESENT",
    degree: "Doctor of Philosophy (PhD) in CSE",
    details: "Pursuing doctoral research in Computer Science and Engineering, focusing on deep learning speech models for low-resource languages under the supervision of Prof. Pawan Goyal.",
  },
  {
    institution: "INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, KOTTAYAM",
    duration: "2021 - 2025",
    degree: "Bachelor of Technology (B.Tech) in CSE",
    details: "Graduated with an outstanding CGPA of 8.67/10.0. Cultivated deep foundational knowledge in systems programming, data structures, algorithm design, machine learning, and databases.",
  },
  {
    institution: "KAILASANADHA VIDYANIKETHAN",
    duration: "2020 - 2021",
    degree: "12th Grade (CBSE CS Degree)",
    details: "Attained fundamental expertise in Python, relational databases, SQL, and core computer science principles.",
  },
];

export default function MissionTimeline() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      {/* Work Experience Timeline - 7 Cols */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
            CHRONOLOGICAL LOGS // EXP_NODE
          </span>
          <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1 term-caret">
            <DecryptedText text="Work Experience Timeline" animateOn="view" speed={40} maxIterations={14} revealDirection="start" />
          </h3>
        </div>

        <div className="relative border-l border-white/[0.08] pl-6 ml-2 space-y-8">
          {EXPERIENCE_LOGS.map((item, idx) => {
            const isExpanded = expandedIdx === idx;
            return (
              <div key={idx} className="relative group">
                {/* Visual node indicator on the line */}
                <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border border-white/20 bg-[#050508] group-hover:border-[#f97316] transition-all duration-300" />

                <div className="space-y-2">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <span className="font-mono text-[9px] text-[#00FFCC] tracking-widest">
                      {item.duration}
                    </span>
                    <span className="font-mono text-[8px] text-[#a0a0b0]/40 tracking-wider">
                      RECORD_0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-display text-sm font-semibold tracking-wider text-white uppercase">
                    <DecryptedText text={item.company} animateOn="view" speed={40} maxIterations={12} />
                  </h4>

                  <p className="font-mono text-[11px] leading-relaxed text-[#a0a0b0]">
                    {item.shortDesc}
                  </p>

                  <button
                    onClick={() => setExpandedIdx(isExpanded ? null : idx)}
                    className="font-mono text-[9px] tracking-widest text-[#f97316] hover:text-[#f97316]/80 transition-colors uppercase cursor-pointer"
                  >
                    {isExpanded ? "Collapse Details [-]" : "Expand Impact Log [+]"}
                  </button>

                  {/* Expanded Bullets */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="space-y-2 pl-4 border-l border-white/10">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="font-mono text-[10px] text-[#a0a0b0]/80 leading-relaxed list-none relative pl-3">
                          <span className="absolute left-0 top-1.5 w-1 h-1 bg-[#00FFCC] rounded-full" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Education Timeline - 5 Cols */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
            CHRONOLOGICAL LOGS // EDU_NODE
          </span>
          <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1 term-caret">
            <DecryptedText text="Academic Track" animateOn="view" speed={40} maxIterations={14} revealDirection="start" />
          </h3>
        </div>

        <div className="relative border-l border-white/[0.08] pl-6 ml-2 space-y-8">
          {EDUCATION_LOGS.map((item, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full border border-white/20 bg-[#050508] group-hover:border-[#00FFCC] transition-all duration-300" />

              <div className="space-y-1.5">
                <span className="font-mono text-[9px] text-[#00FFCC] tracking-widest block">
                  {item.duration}
                </span>

                <h4 className="font-display text-xs font-semibold tracking-wider text-white uppercase">
                  {item.institution}
                </h4>

                <span className="font-mono text-[10px] text-[#f97316] block uppercase tracking-wide">
                  {item.degree}
                </span>

                <p className="font-mono text-[10px] leading-relaxed text-[#a0a0b0]/80">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
