"use client";

import { useState, useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText";

interface Reference {
  name: string;
  affiliation: string;
  imgUrl: string;
  quote: string;
}

const REFERENCES: Reference[] = [
  {
    name: "Dr. Bhanu Chander",
    affiliation: "Professor at IIIT Kottayam",
    imgUrl: "/images/reference-image-1.jpg",
    quote: "I noticeably recall his dedication and enthusiasm in class for learning and sharing creative ideas. He shows extraordinary determination and sincerity in subject learning and has a meticulous approach to practice lab and exams. His ability to perform under stress and meet tough deadlines is also admirable... I honestly feel that he is the most deserving candidate.",
  },
  {
    name: "Dr. Suchitra M.S",
    affiliation: "Professor at IIIT Kottayam",
    imgUrl: "/images/reference-image-2.jpg",
    quote: "I found him to be an exemplary student with critical thinking, creativity, and excellent logic. As an undergraduate student, he is very meticulous and determined... He has always displayed his interest to gravitate towards cutting-edge CS research. He is also a well-mannered and polite student with excellent communication skills.",
  },
  {
    name: "Dr. Rubell Marion Lincy",
    affiliation: "HOD at IIIT Kottayam",
    imgUrl: "/images/HER.jpeg",
    quote: "I am writing to express my wholehearted appreciation for the exceptional hard work and dedication Nived has demonstrated in our supply chain project in collaboration with Tecnológico de Monterrey, Mexico... His proactive approach and attention to detail have not only streamlined processes but also inspired confidence among our team and partners.",
  },
  {
    name: "Aji Bhaskar",
    affiliation: "CEO at Klystron Global",
    imgUrl: "/images/aji_bhaskar.jpeg",
    quote: "Nived is an exceptionally talented and forward-thinking engineer. During his time building our AI-powered SaaS platforms, he demonstrated outstanding architectural foresight, handling complex agentic workflows and passive biometric controls with remarkable ease. He is highly proactive, committed to engineering excellence, and possesses a unique ability to translate challenging specifications into reliable, production-ready systems.",
  },
  {
    name: "Pankaj Pawan",
    affiliation: "CEO at Maximl",
    imgUrl: "/images/pankaj_pawan.jpeg",
    quote: "Nived's technical execution and problem-solving abilities are outstanding. He joined Maximl and immediately took charge of key backend systems, delivering clean, reliable, and high-performance API architectures for our project management flows. He has a solid understanding of system design, pays meticulous attention to details, and collaborates seamlessly across teams under tight deadlines.",
  },
  {
    name: "Prabal Kalia",
    affiliation: "CEO & Founder at Marketrack",
    imgUrl: "/images/prabal_kalia.jpeg",
    quote: "Nived is a phenomenal developer who brings immense energy and technical mastery to frontend systems. At Marketrack, he crafted exceptionally fluid, highly responsive user experiences with great precision. He has an intuitive sense for modern design patterns, integrates seamlessly with backend endpoints, and consistently delivers bug-free, refined products.",
  },
  {
    name: "Yasmin A. Rios Solis",
    affiliation: "Leader of Smart Supply Chain & Logistics, Tec de Monterrey",
    imgUrl: "/images/yasmin_rios_solis.jpeg",
    quote: "Working with Nived on our supply chain logistics research was an absolute pleasure. He immediately impressed us with his strong analytical mind, execution speed, and dedication. He successfully designed and integrated route optimization and forecasting systems, working incredibly well in collaborative international environments.",
  },
  {
    name: "Deepkumar K.R",
    affiliation: "CEO at MACOM (Manappuram Comptech)",
    imgUrl: "/images/deepkumar_kr.png",
    quote: "Nived has a brilliant mind for artificial intelligence and cloud architectures. During his internship with our product development team, he took deep initiative to optimize and streamline our multimodal document pipelines and designed incredibly fast interfaces. He is a highly competent developer who consistently exceeds expectations.",
  },
  {
    name: "Sumit Kumar Yadav",
    affiliation: "Scientist & Solution Architect, C-DAC India",
    imgUrl: "/images/sumit_kumar_yadav.jpeg",
    quote: "Nived proved to be an outstanding researcher and engineer during his research collaboration with CDAC. His contributions to benchmarking models and developing customized phonetic transformations for compound Sanskrit phenomena were highly valuable. He possesses a rare combination of solid software engineering skills and theoretical depth.",
  },
];

export default function OperatorTransmissions() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play advances to the next channel every 7 seconds unless paused by hovering
  useEffect(() => {
    if (!isPaused) {
      autoPlayTimerRef.current = setInterval(() => {
        setActiveIdx((prevIdx) => (prevIdx + 1) % REFERENCES.length);
      }, 7000);
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIdx((prevIdx) => (prevIdx - 1 + REFERENCES.length) % REFERENCES.length);
  };

  const handleNext = () => {
    setActiveIdx((prevIdx) => (prevIdx + 1) % REFERENCES.length);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
          OPERATOR REVIEWS // COMM_TRANS_DECRYPTED
        </span>
        <h3 className="font-display text-lg font-light tracking-widest text-white uppercase mt-1 term-caret">
          <DecryptedText text="Decrypted Transmissions" animateOn="view" speed={40} maxIterations={14} revealDirection="start" />
        </h3>
      </div>

      {/* Main Single-Focus Centered Carousel Card */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="group relative border border-white/[0.08] bg-black/40 rounded-xl p-8 md:p-12 hover:shadow-[0_0_30px_rgba(255,255,255,0.012)] transition-all duration-500 overflow-hidden min-h-[340px] flex flex-col justify-between"
      >
        {/* Absolute top diagnostic overlay */}
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] tracking-widest text-[#00FFCC]/40 select-none z-20">
          UPLINK_CHAN // [0{activeIdx + 1}] // ENCRYPT_OK
        </div>

        {/* Carousel Content Panel with horizontal sliding track transition */}
        <div className="overflow-hidden w-full relative z-10 flex-1 flex flex-col justify-center">
          <div
            className="flex transition-transform duration-700 ease-in-out h-full items-center w-full"
            style={{
              transform: `translateX(-${activeIdx * 100}%)`,
            }}
          >
            {REFERENCES.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 flex flex-col justify-center space-y-6 md:space-y-8"
              >
                {/* Header Metadata */}
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <div className="w-14 h-14 rounded-full border border-white/20 overflow-hidden flex-shrink-0 bg-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.03)]">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (target.src.endsWith(".jpeg")) {
                          target.src = target.src.replace(".jpeg", ".jpg");
                        }
                      }}
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <span className="font-mono text-[9px] tracking-widest text-[#00FFCC] block mb-1">
                      TRANSMISSION SOURCE // ONLINE
                    </span>
                    <h4 className="font-display text-base md:text-lg font-extrabold tracking-wider text-white uppercase leading-none">
                      {/* Active slide receives decryption effect, others keep clean text */}
                      {activeIdx === idx ? (
                        <DecryptedText
                          text={item.name}
                          animateOn="mount"
                          speed={25}
                          maxIterations={4}
                        />
                      ) : (
                        <span>{item.name}</span>
                      )}
                    </h4>
                    <p className="font-mono text-[9px] md:text-[10px] text-[#a0a0b0]/60 uppercase tracking-wider mt-1.5 leading-tight">
                      {item.affiliation}
                    </p>
                  </div>
                </div>

                {/* Centered Blockquote with left active border */}
                <div className="relative pl-6 border-l border-[#f97316]/50 text-left">
                  <p className="font-mono text-xs md:text-sm leading-relaxed text-[#a0a0b0] tracking-wide whitespace-pre-wrap">
                    "{item.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left/Right manual navigational coordinates */}
        <div className="absolute inset-y-0 left-3 right-3 flex items-center justify-between pointer-events-none z-20">
          <button
            onClick={handlePrev}
            className="w-8 h-8 rounded-full border border-white/5 bg-[#050508]/80 hover:border-white/20 flex items-center justify-center text-white hover:text-[#f97316] transition-all duration-300 cursor-pointer pointer-events-auto shadow-lg hover:scale-105"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-white/5 bg-[#050508]/80 hover:border-white/20 flex items-center justify-center text-white hover:text-[#f97316] transition-all duration-300 cursor-pointer pointer-events-auto shadow-lg hover:scale-105"
          >
            →
          </button>
        </div>

        {/* Diagnostic console bottom bar footer */}
        <div className="pt-4 mt-6 border-t border-white/[0.05] flex justify-between items-center font-mono text-[8px] text-[#a0a0b0]/50 select-none z-20">
          <span>SECURE_ROUTE // PKT_RSA_VERIFIED</span>
          <span>AUTOMATIC_SWEEP // {isPaused ? "STANDBY" : "ACTIVE"}</span>
        </div>
      </div>

      {/* Under-Card Channel Selector Indicators Strip */}
      <div className="flex flex-wrap justify-center items-center gap-3 font-mono text-[10px] select-none pt-2">
        {REFERENCES.map((_, idx) => {
          const isActive = activeIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-2.5 py-1 border transition-all duration-300 cursor-pointer rounded ${
                isActive
                  ? "border-[#f97316]/40 text-[#f97316] bg-[#f97316]/5 font-bold shadow-[0_0_15px_rgba(249,115,22,0.1)] animate-pulse"
                  : "border-white/[0.03] text-[#a0a0b0]/60 hover:text-white hover:border-white/10 bg-white/[0.01]"
              }`}
            >
              [0{idx + 1}]
            </button>
          );
        })}
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(3px);
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
