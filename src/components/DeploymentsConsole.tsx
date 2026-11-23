"use client";

import { useState } from "react";
import DecryptedText from "./DecryptedText";
import SpotlightCard from "./rb/SpotlightCard";

interface Project {
  title: string;
  image: string;
  /** Omit for code-only projects: the card then links to the repo instead. */
  demoUrl?: string;
  gitUrl: string;
  category: string;
  description: string;
  techStack: string[];
  /** "logo" shows a square mark centered (uncropped) instead of a full-bleed screenshot. */
  imageFit?: "cover" | "logo";
  reportUrl?: string;
}

const FEATURED_PROJECTS: Project[] = [
  {
    title: "COMPASS",
    image: "/images/compass.png",
    imageFit: "logo",
    demoUrl: "https://compass-steel-sigma.vercel.app/",
    gitUrl: "https://github.com/NivedKris/COMPASS.git",
    category: "HYBRID GNN + VECTOR SEARCH FOR RESEARCH PAPERS",
    description: "A citation-aware search engine over 15.6K CS papers and 240K citation edges. Blends MiniLM text embeddings, a GraphSAGE model trained on the citation graph (0.973 test ROC-AUC) and live in-database citation links into one explainable ranking, beating BM25 by 78% on Recall@10. Vectors, graph and search indexes all live in a single MongoDB Atlas cluster behind a serverless Next.js app.",
    techStack: ["PyTorch Geometric", "GraphSAGE", "MongoDB Atlas Vector Search", "Next.js", "ONNX"],
  },
  {
    title: "CAAS",
    image: "/images/caas.png",
    imageFit: "logo",
    demoUrl: "https://caas-prototype-one.vercel.app/",
    gitUrl: "https://github.com/NivedKris/CAAS_PROTOTYPE.git",
    category: "GOVERNANCE-AWARE GRAPHRAG FOR CULTURAL HERITAGE // IIT KHARAGPUR",
    description: "A RAG system that knows what it shouldn't say. Built for Kerala's ritual arts (Theyyam, Mudiyettu, Koodiyattam), it pairs a 13.9K-node bilingual knowledge graph with governance-weighted edges and a two-stage, 5-tier LLM sensitivity gate (92% accuracy), enforcing CARE/OCAP data-sovereignty rules. Cut restricted-content exposure from 43.7% to 0% and lifted cultural-sensitivity scores 4.53 → 4.92 (p = 0.018) over vanilla RAG.",
    techStack: ["Gemini 2.5 Flash", "FAISS", "NetworkX", "Next.js", "MongoDB Atlas"],
  },
  {
    title: "TROJAN",
    image: "/images/trojan.svg",
    imageFit: "logo",
    demoUrl: "https://trojan-beige.vercel.app/",
    gitUrl: "https://github.com/NivedKris/Trojan.git",
    reportUrl: "https://drive.google.com/file/d/1g8wsElCNWs_fRAIz6vrR21Ve2tF3JqIM/view",
    category: "IS RAG-MCP SAFE AGAINST TOOL POISONING? // LLM SECURITY RESEARCH",
    description: "Tested whether retrieval-based tool selection protects LLM agents from poisoned MCP tool descriptions: 1,348 MCPTox attacks across 7 model setups, 312K judged runs. Retrieval is not a security boundary: top-1 cuts attacks to ≤4% only at a ~33-point accuracy cost, while a post-retrieval filter brings them to ≤2.2%. TROJAN streams live Groq and Gemini agents through a real-time attack-path graph that ends in BREACHED or HELD.",
    techStack: ["vLLM", "PyTorch", "sentence-transformers", "TypeScript", "React", "SSE"],
  },
  {
    title: "ARBORIST",
    image: "/images/arborist.svg",
    imageFit: "logo",
    gitUrl: "https://github.com/NivedKris/NLP-Assignment-group-9.git",
    category: "FROM CKY TO NEURAL GRAMMAR INDUCTION // CONSTITUENCY PARSING",
    description: "Three constituency parsers built and compared on the same Penn Treebank split: a count-based PCFG with a from-scratch CKY Viterbi decoder, a supervised neural PCFG (68.6 labeled F1), and an unsupervised Compound PCFG (ACL 2019) that learns grammar from raw text alone. Inside and Viterbi algorithms verified against brute-force tree enumeration; results backed by 3-seed runs and paired bootstrap tests. One-command Docker pipeline with GPU/CPU auto-detection.",
    techStack: ["PyTorch", "NLTK", "CKY / PCFG", "Variational Inference", "Docker"],
  },
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
        <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1 term-caret">
          <DecryptedText text="Active Deployments" animateOn="view" speed={40} maxIterations={14} revealDirection="start" />
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {FEATURED_PROJECTS.map((project, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor="rgba(0, 255, 204, 0.22)"
            intensity={0.2}
            spotlightSize={320}
            borderGlow={0.8}
            grain={0.04}
            style={{ padding: 24, borderRadius: 12, backgroundColor: "rgba(5,5,10,0.55)" }}
            className="group border border-white/[0.08] hover:border-white/20 flex flex-col justify-between transition-colors duration-300"
          >
            <div className="space-y-6">
              {/* Screenshot Frame with contrast normalization & grayscaler - using object-cover to fill container completely with no side blank spaces */}
              <div className="w-full aspect-video border border-white/[0.05] bg-zinc-950 relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full ${project.imageFit === "logo" ? "object-contain p-10 bg-black" : "object-cover"} filter grayscale contrast-[1.15] brightness-[0.70] group-hover:grayscale-0 group-hover:brightness-95 group-hover:scale-[1.02] mix-blend-lighten transition-all duration-500`}
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
                    <span className={`w-1 h-1 rounded-full bg-[#00FFCC] ${project.demoUrl ? "animate-pulse" : "opacity-50"}`} />
                    <span>{project.demoUrl ? "STATUS: LIVE" : "STATUS: SOURCE"}</span>
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
              <div className="flex items-center gap-5">
              <a
                href={project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a0a0b0] hover:text-white transition-colors duration-200"
              >
                REPOSITORY [↗]
              </a>
              {project.reportUrl && (
                <a
                  href={project.reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#a0a0b0] hover:text-white transition-colors duration-200"
                >
                  REPORT [↗]
                </a>
              )}
              </div>
              <a
                href={project.demoUrl ?? project.gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden border border-white/25 hover:border-[#00FFCC] px-4 py-2 font-mono text-[10px] font-bold tracking-widest uppercase text-white hover:text-black transition-colors duration-200"
              >
                {/* fill wipes in like a cursor block on hover */}
                <span aria-hidden="true" className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[#00FFCC] transition-transform duration-300 ease-[steps(8)] group-hover/btn:scale-x-100" />
                <span className="relative z-10 flex items-center gap-1.5">
                  <span className="text-[#00FFCC] group-hover/btn:text-black transition-colors">&gt;</span>
                  <DecryptedText
                    text={project.demoUrl ? "LAUNCH TERMINAL" : "INSPECT SOURCE"}
                    animateOn="hover"
                    speed={30}
                    maxIterations={8}
                  />
                  <span className="animate-[caret-blink_1s_steps(1)_infinite]">_</span>
                </span>
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
}
