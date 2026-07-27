"use client";

import { useState } from "react";
import DecryptedText from "./DecryptedText";

export default function ResearchTerminal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
          ACADEMIC DISPATCH // DISSEMINATION_NODES
        </span>
        <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1">
          Publications & Research
        </h3>
      </div>

      <div className="group relative border border-white/[0.08] hover:border-white/20 bg-black/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.015)] overflow-hidden rounded-xl">
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.05] pb-3">
            <span className="font-mono text-[9px] text-[#00FFCC] tracking-widest uppercase">
              ACCEPTED PAPER // ISCLS 2026
            </span>
            <span className="font-mono text-[8px] text-[#a0a0b0]/40 tracking-wider">
              ID // ISCLS_SANSKRIT_2026
            </span>
          </div>

          <h4 className="font-display text-lg md:text-xl font-extrabold tracking-wide text-white uppercase leading-snug">
            <span>A computational study of how Sanskrit-specific morphophonological phenomena behave under noisy spoken input</span>
          </h4>

          <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-[#a0a0b0]">
            <span>
              AUTHORS // <span className="text-white font-bold">Nived Krishna</span>, John Martin, Manu Madhavan
            </span>
            <span>
              DOI // <a href="https://lnkd.in/dH4XX-8f" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f97316] border-b border-white/20 transition-colors">View Publication [↗]</a>
            </span>
          </div>

          <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/80">
            This work investigates how Sanskrit phenomena such as sandhi and samāsa interact with ASR noise, and why aggregate metrics like Word Error Rate (WER) often fail to predict downstream usability in speech-driven access systems.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="font-mono text-xs tracking-widest border border-white/20 hover:border-white hover:text-[#f97316] px-5 py-2.5 bg-transparent text-white transition-all duration-300 uppercase cursor-pointer"
            >
              {isOpen ? "Hide Publication Abstract [-]" : "Decrypt Abstract Metrics [+]"}
            </button>

            <div
              className={`transition-all duration-500 overflow-hidden ${
                isOpen ? "max-h-[300px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-4 bg-white/[0.01] border border-white/[0.05] space-y-3">
                <span className="font-mono text-[8px] tracking-widest text-[#00FFCC]/50 uppercase block">
                  ABSTRACT_STREAM
                </span>
                <p className="font-mono text-xs text-[#a0a0b0]/75 leading-relaxed tracking-wide">
                  Using the Charaka Saṃhitā as a testbed, we construct a controlled oracle–ASR benchmark and show that boundary-sensitive errors disproportionately degrade retrieval performance even when overall transcription accuracy appears similar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
