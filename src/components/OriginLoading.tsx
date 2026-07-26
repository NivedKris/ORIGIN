"use client";

import { useEffect, useState, useRef } from "react";
import DecryptedText from "./DecryptedText";

interface OriginLoadingProps {
  onComplete?: () => void;
}

const BOOT_LOGS = [
  "SEC // INITIATING ORG.00 CORE SEQUENCE",
  "SEC // SYSTEM CHECKS ... OK",
  "SEC // SECTOR MAP READ ... ENCRYPTED",
  "SEC // CONFIGURING ORBITAL LAYERS",
  "SEC // LOADING MINIMALIST SYSTEM CORE",
  "SEC // RESOLVING TYPOGRAPHY SCALE ... OK",
  "SEC // ESTABLISHING TELEMETRY HOOKS",
  "SEC // RECONSTRUCTING GRID NETWORK",
  "SEC // SYNCHRONIZING WITH SYSTEM TIME",
  "SEC // COMPLETED CORE ASSEMBLY",
];

export default function OriginLoading({ onComplete }: OriginLoadingProps) {
  const [currentLog, setCurrentLog] = useState("");
  const [logIndex, setLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showContinuePrompt, setShowContinuePrompt] = useState(false); // Controls the click-to-unmute continue overlay
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Background Starfield - High Performance Lightweight Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Create particles (stars)
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    const starCount = 60;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2,
        alpha: Math.random(),
        speed: 0.05 + Math.random() * 0.1, // extremely slow cinematic drift
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.fillStyle = "#050508";
      ctx.fillRect(0, 0, width, height);

      // Draw faint grid lines to give it a structured, telemetry Apple design
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;

      // Draw vertical grid lines
      const gridSize = 120;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal grid lines
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Slow movement down
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        // Faint twinkle
        star.alpha += (Math.random() - 0.5) * 0.04;
        if (star.alpha < 0.1) star.alpha = 0.1;
        if (star.alpha > 0.8) star.alpha = 0.8;
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Telemetry Log Cycler & Progress Counter
  useEffect(() => {
    // Progress increment
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Organic, staggered loading speed
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 250);

    // Logs cyclic updates
    const logInterval = setInterval(() => {
      setLogIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex < BOOT_LOGS.length) {
          setCurrentLog(BOOT_LOGS[nextIndex]);
          return nextIndex;
        }
        clearInterval(logInterval);
        return prevIndex;
      });
    }, 320);

    // Initial log
    setCurrentLog(BOOT_LOGS[0]);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, []);

  // Exit trigger when loading completed
  useEffect(() => {
    if (progress === 100) {
      const exitTimeout = setTimeout(() => {
        // Show "TAP ANYWHERE TO CONTINUE" prompt to cleanly bypass browser autoplay limitations
        setShowContinuePrompt(true);
      }, 500); // Give user a brief moment to see 100% complete state
      return () => clearTimeout(exitTimeout);
    }
  }, [progress]);

  const handleContinue = () => {
    setIsExiting(true);
    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 800); // Match globals.css transition duration (800ms)
    return () => clearTimeout(completeTimeout);
  };

  return (
    <div
      onClick={showContinuePrompt ? handleContinue : undefined}
      className={`fixed inset-0 z-50 flex flex-col justify-between p-6 md:p-12 bg-[#050508] transition-all duration-700 ${
        isExiting ? "opacity-0 scale-[0.98] blur-xl pointer-events-none" : "opacity-100 scale-100 blur-0"
      } ${showContinuePrompt ? "cursor-pointer" : "select-none"}`}
    >
      {/* Background Starfield Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 -z-10 w-full h-full" />

      {/* Noise Overlay Layer to unify design */}
      <div className="noise-overlay" />

      {/* Top Telemetry Header */}
      <div className="w-full flex justify-between items-start font-mono text-[10px] tracking-widest text-[#a0a0b0]/40">
        <div className="flex flex-col gap-1">
          <span>SYS // ORIGIN_BOOTLOADER</span>
          <span>BUILD // 2026.07.26</span>
        </div>
        <div className="flex flex-col items-end gap-1 text-right">
          <span>COSMOS // SECTOR_01</span>
          <span>STATUS // ONLINE</span>
        </div>
      </div>

      {/* Central Screen: Decrypting Title */}
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        {/* Subtle glowing ring background (holographic accent) */}
        <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full border border-white/[0.01] bg-[radial-gradient(circle,rgba(255,255,255,0.01)_0%,transparent_70%)] animate-pulse pointer-events-none" />

        {/* Clean, widely tracked main name */}
        <h1 className="relative font-display text-4xl md:text-6xl font-extralight tracking-[0.6em] md:tracking-[1.2em] text-white pl-[0.6em] md:pl-[1.2em] transition-all duration-300">
          <DecryptedText
            text="ORIGIN"
            speed={50}
            maxIterations={12}
            revealDirection="center"
          />
        </h1>
        
        {/* Understated subhead */}
        <p className="font-mono text-[10px] tracking-[0.25em] text-[#a0a0b0]/40 uppercase">
          PERFORMANCE HARDWARE ARCHITECTURE
        </p>
      </div>

      {/* Bottom Telemetry & Progress Indicator */}
      <div className="w-full max-w-lg mx-auto flex flex-col space-y-4 relative z-20">
        {/* Bootlogs Console */}
        <div className="h-6 overflow-hidden flex items-center justify-center">
          {showContinuePrompt ? (
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#00FFCC] animate-pulse font-bold uppercase select-none">
              &gt; UPLINK_UNLOCKED // TAP ANYWHERE TO DEPLOY &lt;
            </span>
          ) : (
            <span className="font-mono text-[10px] tracking-widest text-[#00FFCC] animate-pulse">
              {currentLog}
            </span>
          )}
        </div>

        {/* Apple Style Thin Minimalist Loading Bar */}
        <div className="w-full h-[1px] bg-white/[0.05] relative overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading metrics */}
        <div className="flex justify-between items-center font-mono text-[10px] tracking-widest text-[#a0a0b0]/40">
          <span>DEPLOY_X.00</span>
          <span className="font-bold text-white/[0.7]">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
