"use client";

import { useState } from "react";
import DecryptedText from "./DecryptedText";
import PDFViewerModal from "./PDFViewerModal";

export default function ResearchTerminal() {
  const [openPub, setOpenPub] = useState<number | null>(null);
  const [activePdf, setActivePdf] = useState<{ path: string; title: string } | null>(null);

  const togglePub = (idx: number) => {
    setOpenPub(openPub === idx ? null : idx);
  };

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

      <div className="space-y-6">
        {/* Publication 1 */}
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

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.03] pb-3 text-xs font-mono text-[#a0a0b0]/80">
              <div className="space-y-1.5 max-w-2xl">
                <div>
                  <span className="text-[#f97316]/80 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Authors:</span>
                  <span className="text-white font-bold">Nived Krishna</span> (nived21bcs28@iiitkottayam.ac.in),{" "}
                  <span className="text-white">Dr. John Paul Martin</span> (johnpaul@iiitkottayam.ac.in),{" "}
                  <span className="text-white">Dr. Manu Madhavan</span> (manum@iiitkottayam.ac.in)
                </div>
                <div className="text-[10px] text-[#a0a0b0]/60 leading-normal">
                  Indian Institute of Information Technology (IIIT), Kottayam, Kerala, India<br />
                  Venue: <span className="text-white/80 font-bold">ISCLS 2026</span> // DOI: <a href="https://aclanthology.org/2026.iscls-1.13.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#f97316] border-b border-white/20 transition-all duration-300">2026.iscls-1.13 [↗]</a>
                </div>
              </div>

              <div className="flex-shrink-0 pt-2 sm:pt-0">
                <button 
                  onClick={() => setActivePdf({ path: "/Certificates/ISCLS 2026 Certificate.pdf", title: "ISCLS_2026_CERTIFICATE" })}
                  className="font-mono text-[10px] md:text-xs tracking-widest border border-[#f97316]/30 hover:border-[#f97316] bg-[#f97316]/5 hover:bg-[#f97316]/10 px-4 py-2.5 text-[#f97316] transition-all duration-300 uppercase cursor-pointer rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                >
                  <svg className="w-3.5 h-3.5 fill-[#f97316]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  Read Certificate
                </button>
              </div>
            </div>

            <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/80">
              Sanskrit exhibits morphophonological phenomena — sandhi (phonological fusion at word boundaries) and productive samāsa (compounding) — that systematically alter lexical boundaries in connected speech. This paper investigates how these boundary-sensitive recognition errors cause disproportionate semantic disruption in downstream speech-driven passage retrieval.
            </p>

            <div className="pt-2">
              <button
                onClick={() => togglePub(0)}
                className="font-mono text-xs tracking-widest border border-white/20 hover:border-white hover:text-[#f97316] px-5 py-2.5 bg-transparent text-white transition-all duration-300 uppercase cursor-pointer"
              >
                {openPub === 0 ? "Hide Abstract [-]" : "Decrypt Abstract [+]"}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openPub === 0 ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 bg-white/[0.01] border border-white/[0.05] space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[8px] tracking-widest text-[#00FFCC]/50 uppercase block">
                      ABSTRACT_STREAM
                    </span>
                    <p className="font-mono text-xs text-[#a0a0b0]/75 leading-relaxed tracking-wide">
                      Sanskrit exhibits morphophonological phenomena — sandhi (phonological fusion at word boundaries) and productive samāsa (compounding) — that systematically alter lexical boundaries in connected speech, posing unique challenges for speech-based access to classical texts. Since Sanskrit concentrates semantic content at these boundaries, downstream applications are especially sensitive to boundary-disrupting recognition errors. The paper uses the <em>Charaka Saṃhitā</em> (a classical Ayurvedic text) as a testbed, employing speech-driven passage retrieval as a diagnostic probe to compare oracle (ground-truth) textual queries against ASR-generated queries across multiple ASR architectures under fixed retrieval conditions.
                    </p>
                    <p className="font-mono text-xs text-[#a0a0b0]/75 leading-relaxed tracking-wide">
                      <strong>Key finding:</strong> Retrieval degradation is <em>not</em> fully explained by aggregate Word Error Rate (WER). Boundary-sensitive errors — particularly sandhi mis-resolution and compound segmentation — cause disproportionate semantic disruption and severe retrieval failures, even when overall transcription accuracy is similar across systems. ASR systems that better preserve morphophonological boundaries enable more reliable access to classical Sanskrit content, showing that transcription accuracy alone is an inadequate usability measure.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.03]">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-widest text-[#f97316]/50 uppercase block">
                        BENCHMARK_SPECIFICATIONS
                      </span>
                      <ul className="font-mono text-[10px] text-[#a0a0b0]/60 space-y-1 leading-normal">
                        <li>• <strong className="text-white/70">Speech Corpus:</strong> Vāksañcayaḥ Sanskrit (~78 hrs, 45k+ utterances)</li>
                        <li>• <strong className="text-white/70">Text Corpus:</strong> Full Charaka Saṃhitā (~9k retrieval passages)</li>
                        <li>• <strong className="text-white/70">Query Benchmark:</strong> 1.2k human queries (3.6k spoken renditions)</li>
                        <li>• <strong className="text-white/70">ASR Systems:</strong> Wav2Vec 2.0, Conformer, Whisper, IndicWhisper</li>
                        <li>• <strong className="text-white/70">Retrieval Models:</strong> BM25, FAISS Bi-Encoder, Hybrid re-ranking</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-widest text-[#f97316]/50 uppercase block">
                        CORE_METRICS // DEGRADATION
                      </span>
                      <ul className="font-mono text-[10px] text-[#a0a0b0]/60 space-y-1 leading-normal">
                        <li>• ASR retrieval MRR drops of <strong className="text-[#f97316]">20-40%</strong> vs. oracle queries.</li>
                        <li>• Each <strong className="text-[#f97316]">sandhi error</strong> costs <strong className="text-white/70">-0.043 MRR</strong> (p&lt;0.001).</li>
                        <li>• Each <strong className="text-[#f97316]">compound error</strong> costs <strong className="text-white/70">-0.038 MRR</strong> (p&lt;0.001).</li>
                        <li>• Phonetic/Inflectional errors cost far less (-0.009 and -0.005).</li>
                        <li>• IndicWhisper yielded the best MRR due to fewest boundary errors.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-white/[0.03]">
                    <span className="font-mono text-[8px] tracking-widest text-[#00FFCC]/50 uppercase block">
                      CONTRIBUTION & MITIGATION
                    </span>
                    <p className="font-mono text-[10px] text-[#a0a0b0]/60 leading-relaxed">
                      The paper argues for linguistically informed, task-oriented evaluation of Sanskrit ASR, moving beyond WER/CER, and proposes mitigation directions (sandhi/compound-aware post-processing, ASR-noise-aware retriever training, confidence-based query expansion) for future work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Publication 2 */}
        <div className="group relative border border-white/[0.08] hover:border-white/20 bg-black/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.015)] overflow-hidden rounded-xl">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.05] pb-3">
              <span className="font-mono text-[9px] text-[#00FFCC] tracking-widest uppercase">
                ACCEPTED PROJECT & PAPER // IIITK CHORDS
              </span>
              <span className="font-mono text-[8px] text-[#a0a0b0]/40 tracking-wider">
                ID // IIITK_CHORDS_26_PP_12
              </span>
            </div>

            <h4 className="font-display text-lg md:text-xl font-extrabold tracking-wide text-white uppercase leading-snug">
              <span>Conversational Custodians: Deploying Large Language Model-Powered Agentic Systems for Dynamic Digitisation and Contextual Revival of Intangible Cultural Heritage</span>
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.03] pb-3 text-xs font-mono text-[#a0a0b0]/80">
              <div className="space-y-1.5 max-w-2xl">
                <div>
                  <span className="text-[#f97316]/80 font-bold uppercase tracking-wider text-[10px] block mb-0.5">Authors:</span>
                  <span className="text-white font-bold">Nived Krishna¹</span> (nivedkrishna26@kgpian.iitkgp.ac.in),{" "}
                  <span className="text-white">Shubham Kumar¹</span> (Validation, Data Curation, Review & Editing),{" "}
                  <span className="text-white">Vaishnavi Bharadwaj²</span> (Validation, Data Curation, Analysis, Review & Editing)
                </div>
                <div className="text-[10px] text-[#a0a0b0]/60 leading-normal">
                  ¹ Department of Computer Science and Engineering, IIT Kharagpur, India<br />
                  ² Manipal Academy of Higher Education, India
                </div>
              </div>

              <div className="flex-shrink-0 pt-2 sm:pt-0">
                <button 
                  onClick={() => setActivePdf({ path: "/Certificates/CHORDS.pdf", title: "CHORDS_CERTIFICATE" })}
                  className="font-mono text-[10px] md:text-xs tracking-widest border border-[#f97316]/30 hover:border-[#f97316] bg-[#f97316]/5 hover:bg-[#f97316]/10 px-4 py-2.5 text-[#f97316] transition-all duration-300 uppercase cursor-pointer rounded-lg flex items-center gap-2 hover:shadow-[0_0_15px_rgba(249,115,22,0.1)]"
                >
                  <svg className="w-3.5 h-3.5 fill-[#f97316]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                  Read Certificate
                </button>
              </div>
            </div>

            <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0]/80">
              Proposes the <strong>Culturally Attuned Agentic System (CAAS)</strong>, the first instantiation of the <strong>Governance-Aware Retrieval Architecture (GARA)</strong>: a governance-first Retrieval-Augmented Generation framework in which community-defined access constraints are encoded as first-class computational objects at the retrieval layer, rather than applied as a post-processing filter.
            </p>

            <div className="pt-2">
              <button
                onClick={() => togglePub(1)}
                className="font-mono text-xs tracking-widest border border-white/20 hover:border-white hover:text-[#f97316] px-5 py-2.5 bg-transparent text-white transition-all duration-300 uppercase cursor-pointer"
              >
                {openPub === 1 ? "Hide Abstract [-]" : "Decrypt Abstract [+]"}
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openPub === 1 ? "max-h-[800px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 bg-white/[0.01] border border-white/[0.05] space-y-4">
                  <div className="space-y-1.5">
                    <span className="font-mono text-[8px] tracking-widest text-[#00FFCC]/50 uppercase block">
                      ABSTRACT_STREAM
                    </span>
                    <p className="font-mono text-xs text-[#a0a0b0]/75 leading-relaxed tracking-wide">
                      The custodianship of intangible cultural heritage (ICH) — oral traditions, ritual knowledge, endangered performing arts, and indigenous epistemologies — poses challenges that static digitisation pipelines cannot address, since this knowledge is living, context-dependent, and access-sensitive. This paper presents the <strong>Culturally Attuned Agentic System (CAAS)</strong>, the first instantiation of the <strong>Governance-Aware Retrieval Architecture (GARA)</strong>: a governance-first Retrieval-Augmented Generation framework in which community-defined access constraints are encoded as first-class computational objects at the retrieval layer, rather than applied as a post-processing filter. CAAS represents heritage knowledge in a <strong>Heritage Memory Graph (HMG)</strong> — a directed, weighted graph combining LLM-based triple extraction with expert annotation — governed by a five-tier cultural sensitivity taxonomy grounded in UNESCO conventions and the CARE/OCAP principles of Indigenous Data Sovereignty. A prototype covering six endangered Malabar-coast performing arts traditions, including Theyyam, Koodiyattam, and Kathakali, provides an illustrative empirical validation across six experiments. HMG-augmented retrieval improves specificity significantly over a vanilla RAG baseline (Δ = +0.325, p = .022), and a three-way baseline comparison shows that input-stage governance eliminates the context-window exposure of restricted content that post-hoc filtering cannot prevent. CAAS demonstrates that community sovereignty over AI heritage retrieval is architecturally feasible.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.03]">
                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-widest text-[#f97316]/50 uppercase block">
                        SYSTEM_ARCHITECTURE
                      </span>
                      <ul className="font-mono text-[10px] text-[#a0a0b0]/60 space-y-1 leading-normal">
                        <li>• <strong className="text-white/70">Multilingual Ingestion:</strong> Malayalam + English parsing of ~6.5k chunk FAISS index</li>
                        <li>• <strong className="text-white/70">Heritage Memory Graph (HMG):</strong> 12,239 nodes governed by 5-tier sensitivity taxonomy</li>
                        <li>• <strong className="text-white/70">Hybrid Retrieval Agent:</strong> Vector similarity combined with dynamic graph traversal</li>
                        <li>• <strong className="text-white/70">Dual-Stage Gate:</strong> Input-gate prevents restricted exposure to LLM context logs</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <span className="font-mono text-[8px] tracking-widest text-[#f97316]/50 uppercase block">
                        KEY_EXPERIMENTS // DEEP_DIVE
                      </span>
                      <ul className="font-mono text-[#a0a0b0]/60 space-y-1 leading-normal text-[10px]">
                        <li>• <strong className="text-white/70">HMG vs RAG:</strong> Significant specificity increase (<strong className="text-[#f97316]">Δ = +0.325</strong>, p = .022)</li>
                        <li>• <strong className="text-white/70">Sensitivity Gate:</strong> 73.5% binary accuracy & <strong className="text-[#f97316]">88.2% recall</strong> on protected content</li>
                        <li>• <strong className="text-white/70">Cross-lingual Align:</strong> English-Malayalam mean alignment of <strong className="text-white">3.90 / 5.00</strong></li>
                        <li>• <strong className="text-white/70">Implicit Restriction:</strong> Solves under-blocking on neutral ethnographic texts</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-white/[0.03]">
                    <span className="font-mono text-[8px] tracking-widest text-[#00FFCC]/50 uppercase block">
                      REFLEXIVITY & ETHICAL REFLECTION
                    </span>
                    <p className="font-mono text-[10px] text-[#a0a0b0]/60 leading-relaxed">
                      Small sample sizes (34–60 queries) are highlighted. Features a detailed positionality statement reflecting lead author Nived's ancestral ties to Kerala's temple communities. Grounded in Indigenous Data Sovereignty, it structures a 3-phase roadmap towards community co-design (participatory workshops, controlled corpus curation, practitioner veto power).
                    </p>
                  </div>

                  <div className="space-y-1 pt-1">
                    <span className="font-mono text-[8px] tracking-widest text-[#f97316]/50 uppercase block">
                      KEYWORDS
                    </span>
                    <p className="font-mono text-[10px] text-[#a0a0b0]/60 leading-relaxed">
                      intangible cultural heritage, large language models, retrieval-augmented generation, heritage memory graph, cultural sensitivity gating, Indigenous Data Sovereignty, knowledge graphs, multilingual retrieval, digital humanities, Malabar performing arts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Secure Uplink Overlay Render Core */}
      {activePdf && (
        <PDFViewerModal
          pdfPath={activePdf.path}
          title={activePdf.title}
          onClose={() => setActivePdf(null)}
        />
      )}
    </div>
  );
}
