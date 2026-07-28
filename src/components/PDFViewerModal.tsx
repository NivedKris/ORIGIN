"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PDFViewerModalProps {
  pdfPath: string;
  title: string;
  onClose: () => void;
}

export default function PDFViewerModal({ pdfPath, title, onClose }: PDFViewerModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock scroll on body
    document.body.style.overflow = "hidden";

    // Handle escape key to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]">
      {/* Container aspect-locked to standard portrait values so the PDF document fits perfectly with NO black side bars! */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-[580px] h-[86vh] bg-[#07080c] border border-white/[0.1] rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_rgba(249,115,22,0.25)]"
      >
        {/* Terminal Title Bar Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#07080c] select-none rounded-t-2xl">
          <div className="flex items-center space-x-3">
            {/* Status light nodes */}
            <div className="flex space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f97316]/80 animate-pulse" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <span className="font-mono text-xs text-white/60 tracking-wider uppercase truncate max-w-[180px] sm:max-w-md">
              SECURED_UPLINK // {title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="font-mono text-[10px] tracking-widest text-[#a0a0b0] hover:text-[#f97316] transition-colors cursor-pointer uppercase flex items-center gap-1.5"
          >
            <span>RETRACT</span>
            <span className="text-sm">✕</span>
          </button>
        </div>

        {/* PDF Frame Content Area */}
        <div className="flex-1 w-full h-full bg-[#12131a] relative rounded-b-2xl">
          <iframe
            src={`${pdfPath}#toolbar=0&navpanes=0`}
            className="w-full h-full border-0 rounded-b-2xl pdf-iframe"
            title={title}
          />
        </div>
      </div>
      <style jsx global>{`
        /* Custom styled scrollbar matching the dark terminal theme */
        .pdf-iframe {
          background-color: #12131a !important;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #07080c;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }
      `}</style>
    </div>,
    document.body
  );
}
