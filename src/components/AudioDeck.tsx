"use client";

import { useState, useRef, useEffect } from "react";
import ElasticSlider from "./rb/ElasticSlider";
import DecryptedText from "./DecryptedText";

interface Track {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  artworkUrl: string;
  gitUrl: string;
}

const BEAT_LIST: Track[] = [
  {
    id: "yes-indeed",
    title: "YES INDEED",
    description: "Hard-hitting trap beat featuring deep sub-bass and crisp 808 hi-hat rollers.",
    audioUrl: "/audio/yes_indeed.mp3",
    artworkUrl: "/images/photography-1.jpeg",
    gitUrl: "https://github.com/NivedKris/FL-studio-beats/tree/main/yes%20indeed",
  },
  {
    id: "lucid-dreams",
    title: "LUCID DREAMS",
    description: "Melodic, emotional guitar-led layout layered with smooth contemporary pads.",
    audioUrl: "/audio/lucid_dreams.mp3",
    artworkUrl: "/images/photography-2.jpeg",
    gitUrl: "https://github.com/NivedKris/FL-studio-beats/tree/main/lucid%20dreams",
  },
  {
    id: "woah",
    title: "WOAH",
    description: "Up-tempo bouncy synth progression featuring heavy kick thumps and breaks.",
    audioUrl: "/audio/woah.mp3",
    artworkUrl: "/images/photography-3.jpeg",
    gitUrl: "https://github.com/NivedKris/FL-studio-beats/tree/main/woah",
  },
  {
    id: "miss-the-rage",
    title: "MISS THE RAGE",
    description: "High-energy synth-heavy rage beat modeled with distorted textures and bass.",
    audioUrl: "/audio/miss_the_rage.mp3",
    artworkUrl: "/images/photography-4.jpeg",
    gitUrl: "https://github.com/NivedKris/FL-studio-beats/tree/main/miss%20the%20rage%20trippie",
  },
];

export default function AudioDeck() {
  const [activeTrack, setActiveTrack] = useState<Track>(BEAT_LIST[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8); // Default 80% volume

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Sync state transitions when changing active tracks
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      } else {
        setCurrentTime(0);
      }
    }
  }, [activeTrack]);

  // Synchronize playing state with ambient background loop audio via custom events
  useEffect(() => {
    if (isPlaying) {
      window.dispatchEvent(new CustomEvent("origin-beat-play"));
    } else {
      window.dispatchEvent(new CustomEvent("origin-beat-stop"));
    }
    return () => {
      window.dispatchEvent(new CustomEvent("origin-beat-stop"));
    };
  }, [isPlaying]);

  // Synchronize volume updates
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = (track: Track) => {
    if (activeTrack.id === track.id) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play().catch(() => {});
        setIsPlaying(true);
      }
    } else {
      setActiveTrack(track);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      setDuration(audioRef.current.duration);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = nextTime;
      setCurrentTime(nextTime);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-6">
      {/* Structural layout decorations */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <span className="font-mono text-[10px] tracking-[0.3em] text-[#00FFCC] block uppercase">
            STUDIO MONITOR // FL_AUDIO_CORE
          </span>
          <h3 className="font-display text-lg font-light tracking-widest text-white uppercase term-caret">
            <DecryptedText text="FL Studio Beat Production" animateOn="view" speed={40} maxIterations={14} revealDirection="start" />
          </h3>
        </div>
        <span className="hidden sm:inline font-mono text-[9px] tracking-widest text-[#a0a0b0]/55 select-none">
          ENGINE // FL_BEATS_DECK
        </span>
      </div>

      {/* Embedded HTML5 Audio Core */}
      <audio
        ref={audioRef}
        src={activeTrack.audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column (5/12 width): Hardware Track Playlist */}
        <div className="lg:col-span-5 space-y-3.5 flex flex-col justify-between">
          <div className="space-y-3">
            {BEAT_LIST.map((track, idx) => {
              const isCurrent = activeTrack.id === track.id;
              return (
                <div
                  key={track.id}
                  onClick={() => togglePlay(track)}
                  className={`group flex items-center justify-between p-4 border rounded-xl transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "border-white/20 bg-white/[0.03] shadow-[0_0_20px_rgba(255,255,255,0.01)]"
                      : "border-white/[0.04] bg-white/[0.01] hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center space-x-4 min-w-0">
                    <div className="w-12 h-12 rounded-lg border border-white/10 relative overflow-hidden flex-shrink-0 bg-zinc-950">
                      <img
                        src={track.artworkUrl}
                        alt={track.title}
                        className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (target.src.endsWith(".jpeg")) {
                            target.src = target.src.replace(".jpeg", ".jpg");
                          }
                        }}
                      />
                    </div>
                    <div className="truncate">
                      <span className="font-mono text-[8px] text-[#a0a0b0]/55 tracking-wider block uppercase">
                        TRACK_0{idx + 1}
                      </span>
                      <h4 className="font-display text-sm font-semibold tracking-wider text-white truncate">
                        {track.title}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 flex-shrink-0">
                    {/* Simulated Waveform Bar visualizer */}
                    {isCurrent && isPlaying ? (
                      <div className="flex items-end space-x-0.5 h-4 w-6">
                        <span className="w-0.5 bg-[#00FFCC] h-4 animate-[wave_0.8s_ease-in-out_infinite]" />
                        <span className="w-0.5 bg-[#00FFCC] h-3 animate-[wave_0.5s_ease-in-out_infinite_0.1s]" />
                        <span className="w-0.5 bg-[#00FFCC] h-5 animate-[wave_1.1s_ease-in-out_infinite_0.2s]" />
                        <span className="w-0.5 bg-[#00FFCC] h-2 animate-[wave_0.7s_ease-in-out_infinite_0.3s]" />
                      </div>
                    ) : (
                      <div className="flex items-end space-x-0.5 h-4 w-6">
                        <span className="w-0.5 bg-white/20 h-1" />
                        <span className="w-0.5 bg-white/20 h-1.5" />
                        <span className="w-0.5 bg-white/20 h-1" />
                        <span className="w-0.5 bg-white/20 h-2" />
                      </div>
                    )}

                    <span className="font-mono text-[10px] text-white">
                      {isCurrent && isPlaying ? "PLAYING" : "PAUSED"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="font-mono text-[9px] text-[#a0a0b0]/55 select-none block uppercase text-left pl-1 pt-4">
            FL_STUDIO // 4_STREAMS_OK
          </div>
        </div>

        {/* Right Column (7/12 width): Expanded Control Deck Console */}
        <div className="lg:col-span-7 border border-white/[0.08] bg-black/40 p-6 md:p-8 rounded-xl flex flex-col justify-between relative overflow-hidden">
          
          <div className="space-y-6 w-full">
            {/* Expanded Visual Artwork Frame - using aspect-square with max-width to display square cover art perfectly without empty side borders */}
            <div className="w-full max-w-[280px] mx-auto aspect-square border border-white/[0.05] bg-zinc-950 relative overflow-hidden rounded-lg group">
              <img
                src={activeTrack.artworkUrl}
                alt={activeTrack.title}
                className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-transform duration-700 group-hover:scale-103"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.endsWith(".jpeg")) {
                    target.src = target.src.replace(".jpeg", ".jpg");
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508]/90 via-transparent to-transparent opacity-85 pointer-events-none" />
              <div className="absolute bottom-4 left-4 flex items-baseline gap-2 pointer-events-none">
                <span className="font-mono text-[8px] text-[#00FFCC] tracking-widest uppercase">ACTIVE</span>
                <span className="font-display text-base font-bold tracking-widest text-white uppercase leading-none">
                  {activeTrack.title}
                </span>
              </div>
            </div>

            {/* Description and metadata */}
            <div className="space-y-2">
              <p className="font-mono text-xs leading-relaxed text-[#a0a0b0]">
                {activeTrack.description}
              </p>
            </div>

            {/* Hardware Seek Timeline Scrub Slider */}
            <div className="space-y-1.5 pt-2">
              <input
                type="range"
                min={0}
                max={duration || 100}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/[0.08] hover:bg-white/20 accent-[#00FFCC] rounded-lg cursor-pointer transition-all duration-300 outline-none"
              />
              <div className="flex justify-between items-center font-mono text-[10px] text-[#a0a0b0]/50 select-none">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Master Console Control Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-2 border-t border-white/[0.05]">
              
              {/* Play Pause Button CTA */}
              <div className="flex items-center justify-between sm:justify-start space-x-4 w-full sm:w-auto">
                <button
                  onClick={() => togglePlay(activeTrack)}
                  className="font-mono text-xs tracking-widest uppercase border border-white hover:bg-white hover:text-black px-6 py-2.5 bg-transparent text-white transition-all duration-300 cursor-pointer font-bold flex-shrink-0"
                >
                  {isPlaying ? "PAUSE STREAM [-]" : "PLAY INSTRUMENTAL [+]"}
                </button>
                <a
                  href={activeTrack.gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-widest text-[#a0a0b0] hover:text-[#f97316] transition-colors uppercase whitespace-nowrap pr-2"
                >
                  Source Code [↗]
                </a>
              </div>

              {/* Elastic volume slider (React Bits ElasticSlider) */}
              <div className="w-full sm:w-56 text-[#00FFCC]">
                <ElasticSlider
                  value={Math.round(volume * 100)}
                  maxValue={100}
                  isStepped
                  stepSize={1}
                  onChange={(v) => setVolume(v / 100)}
                  valuePosition="bubble"
                  formatValue={(v) => `VOL ${Math.round(v)}`}
                  thickness={4}
                  activeThickness={10}
                  wheel
                  trackColor="rgba(255,255,255,0.08)"
                  rangeColor="#00FFCC"
                  iconColor="#a0a0b0"
                  ariaLabel="Volume"
                />
              </div>

            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @keyframes wave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
      `}</style>
    </div>
  );
}
