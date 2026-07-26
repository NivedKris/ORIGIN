"use client";

import { useEffect, useState, useRef } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  revealDirection?: "start" | "end" | "center";
  animateOn?: "mount" | "view" | "hover";
  enableHoverEffect?: boolean;
  className?: string;
  onComplete?: () => void;
}

const GLYPHS = "XX//++__--[][]{}##%%@@0101XYZ!?*&";

export default function DecryptedText({
  text,
  speed = 25,
  maxIterations = 4,
  revealDirection = "start",
  animateOn = "mount",
  enableHoverEffect = false,
  className = "",
  onComplete,
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const resolvedRef = useRef<boolean[]>(new Array(text.length).fill(false));
  const iterationsRef = useRef<number[]>(new Array(text.length).fill(0));

  const triggerAnimation = () => {
    // Clear any existing intervals
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    // Initialize arrays
    resolvedRef.current = new Array(text.length).fill(false);
    iterationsRef.current = new Array(text.length).fill(0);

    // Initial random character state
    const initialText = text
      .split("")
      .map((char) => (char === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]))
      .join("");
    setDisplayText(initialText);

    let frameCount = 0;

    animationRef.current = setInterval(() => {
      frameCount++;

      const nextDisplayText = text
        .split("")
        .map((char, index) => {
          if (char === " ") {
            resolvedRef.current[index] = true;
            return " ";
          }

          // Determine if we should lock/reveal the character
          let shouldResolve = false;

          if (revealDirection === "start") {
            // Left to right reveal
            const threshold = Math.floor(frameCount / maxIterations);
            shouldResolve = index <= threshold;
          } else if (revealDirection === "end") {
            // Right to left reveal
            const threshold = text.length - 1 - Math.floor(frameCount / maxIterations);
            shouldResolve = index >= threshold;
          } else {
            // Center outwards reveal
            const mid = Math.floor(text.length / 2);
            const offset = Math.floor(frameCount / maxIterations);
            shouldResolve = Math.abs(index - mid) <= offset;
          }

          if (shouldResolve) {
            resolvedRef.current[index] = true;
            return char;
          }

          // If not resolved, scramble with random glyph
          iterationsRef.current[index]++;
          return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        })
        .join("");

      setDisplayText(nextDisplayText);

      // Check if completely resolved
      const allResolved = resolvedRef.current.every((val) => val);
      if (allResolved) {
        setDisplayText(text);
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
        if (onComplete) {
          onComplete();
        }
      }
    }, speed);
  };

  const elementRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (animateOn === "mount") {
      triggerAnimation();
    } else if (animateOn === "view") {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              triggerAnimation();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => observer.disconnect();
    }
    return () => {
      if (animationRef.current) clearInterval(animationRef.current);
    };
  }, [text, animateOn]);

  const handleMouseEnter = () => {
    if (enableHoverEffect && !isHovered) {
      setIsHovered(true);
      triggerAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (enableHoverEffect) {
      setIsHovered(false);
    }
  };

  return (
    <span
      ref={elementRef}
      className={`inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
}
