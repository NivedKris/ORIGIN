"use client";

import { useState, useRef, useEffect } from "react";

export default function AmbientAudio() {
  const [isPlaying, setIsPlaying] = useState(true); // User preference state (on by default)
  const [isMutedByBeat, setIsMutedByBeat] = useState(false); // Controlled by active beat selection
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Synchronize audio element playback with react states
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const shouldPlay = isPlaying && !isMutedByBeat;

    if (shouldPlay) {
      audio.play().catch(() => {
        // Fallback for browser autoplay block policy
        // If autoplay gets blocked, we only update state to represent reality
        if (isPlaying) {
          setIsPlaying(false);
        }
      });
    } else {
      audio.pause();
    }
  }, [isPlaying, isMutedByBeat]);

  // Handle document click/keydown to bypass browser autoplay blocks
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (isPlaying && !isMutedByBeat && audio.paused) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            cleanupInteraction();
          })
          .catch(() => {});
      }
    };

    const cleanupInteraction = () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("keydown", handleFirstInteraction);
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("keydown", handleFirstInteraction);

    return cleanupInteraction;
  }, [isPlaying, isMutedByBeat]);

  // Listen to custom play/pause broadcasts from the AudioDeck (Beat Selector Player)
  useEffect(() => {
    const handleBeatPlay = () => {
      setIsMutedByBeat(true);
    };

    const handleBeatStop = () => {
      setIsMutedByBeat(false);
    };

    window.addEventListener("origin-beat-play", handleBeatPlay);
    window.addEventListener("origin-beat-stop", handleBeatStop);

    return () => {
      window.removeEventListener("origin-beat-play", handleBeatPlay);
      window.removeEventListener("origin-beat-stop", handleBeatStop);
    };
  }, []);

  const togglePlayback = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="fixed top-20 left-6 md:left-12 z-50">
      {/* Hidden background loop audio - removed JSX autoPlay to prevent browser overriding state */}
      <audio ref={audioRef} src="/audio/bg.mp3" loop />

      {/* Aesthetic Circular Audio Control Node */}
      <button
        onClick={togglePlayback}
        className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-white/[0.08] hover:border-white/20 bg-[#050508]/90 flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group shadow-2xl relative"
        title={isPlaying && !isMutedByBeat ? "Mute Ambient Soundtrack" : "Unmute Ambient Soundtrack"}
      >
        {isPlaying && !isMutedByBeat ? (
          /* Waveform Visualizer Icon (Exact match to left icon in screenshot) */
          <div className="flex items-end space-x-[2px] h-3 w-4">
            <span className="w-0.5 bg-[#00FFCC] h-2.5 animate-[wave_0.8s_ease-in-out_infinite]" />
            <span className="w-0.5 bg-[#00FFCC] h-1.5 animate-[wave_0.5s_ease-in-out_infinite_0.15s]" />
            <span className="w-0.5 bg-[#00FFCC] h-3 animate-[wave_1.1s_ease-in-out_infinite_0.3s]" />
            <span className="w-0.5 bg-[#00FFCC] h-2 animate-[wave_0.7s_ease-in-out_infinite_0.45s]" />
          </div>
        ) : (
          /* Concentric Target Ring Mute Icon (Exact match to right icon in screenshot) */
          <div className="relative w-4 h-4 rounded-full border border-[#a0a0b0]/40 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a0a0b0]/55" />
          </div>
        )}

        {/* Outer pulsing ring decoration on play */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full border border-[#00FFCC]/20 animate-ping opacity-75 pointer-events-none" />
        )}
      </button>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { transform: scaleY(0.4); }
          50% { transform: scaleY(1.2); }
        }
      `}</style>
    </div>
  );
}
