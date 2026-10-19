"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";

interface TalkingAvatarProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
}

const SCRIPT_SENTENCES = [
  "Hi, I'm Ajith.",
  "I'm a creative full stack developer with over 2 years of professional and 4 years of overall engineering experience.",
  "I architect high-performance web applications, scalable APIs, and robust fintech systems using Angular, React, Next.js, Node.js, and Python.",
  "Feel free to explore my projects below, download my resume, or get in touch to collaborate!",
];

const FULL_SCRIPT = SCRIPT_SENTENCES.join(" ");

export default function TalkingAvatar({
  isPlaying,
  onTogglePlay,
  onReset,
}: TalkingAvatarProps) {
  const [videoAvailable, setVideoAvailable] = useState<boolean>(false);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [speakingProgress, setSpeakingProgress] = useState<number>(0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [useSpeechSynthesisFallback, setUseSpeechSynthesisFallback] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const scriptSentences = SCRIPT_SENTENCES;

  // Speech synthesis fallback handler if audio file cannot play
  const startSpeechSynthesis = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(FULL_SCRIPT);
    utterance.rate = 0.98;
    utterance.pitch = 0.92; // Natural, deep mens pitch

    const voices = window.speechSynthesis.getVoices();
    // Prioritize natural deep male voices
    const maleVoice = voices.find(
      (v) =>
        (v.name.includes("Andrew") ||
          v.name.includes("Christopher") ||
          v.name.includes("Guy") ||
          v.name.includes("David") ||
          v.name.includes("George") ||
          v.name.includes("Male") ||
          v.name.includes("Natural") ||
          v.name.includes("Google US English") ||
          v.lang.startsWith("en")) &&
        !v.name.toLowerCase().includes("female") &&
        !v.name.toLowerCase().includes("zira")
    );
    if (maleVoice) {
      utterance.voice = maleVoice;
    }

    utterance.onboundary = (event) => {
      const charIndex = event.charIndex;
      let cumulative = 0;
      for (let i = 0; i < SCRIPT_SENTENCES.length; i++) {
        cumulative += SCRIPT_SENTENCES[i].length + 1;
        if (charIndex < cumulative) {
          setCurrentSentenceIndex(i);
          setSpeakingProgress(Math.min(((i + 0.5) / SCRIPT_SENTENCES.length) * 100, 100));
          break;
        }
      }
    };

    utterance.onend = () => {
      onReset();
      setCurrentSentenceIndex(0);
      setSpeakingProgress(0);
    };

    utterance.onerror = () => {
      onReset();
      setCurrentSentenceIndex(0);
      setSpeakingProgress(0);
    };

    utteranceRef.current = utterance;

    if (!isMuted) {
      window.speechSynthesis.speak(utterance);
    }
  }, [isMuted, onReset]);

  // Audio & speech sync control - strictly triggers only when isPlaying state changes!
  useEffect(() => {
    const audio = audioRef.current;

    if (isPlaying) {
      if (audio && !useSpeechSynthesisFallback) {
        audio.currentTime = 0;
        audio.muted = isMuted;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn("Audio playback error, falling back to speech synthesis:", err);
            setUseSpeechSynthesisFallback(true);
            startSpeechSynthesis();
          });
        }
      } else {
        startSpeechSynthesis();
      }
    } else {
      if (audio && !audio.paused) {
        audio.pause();
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    }
  }, [isPlaying]);

  // Synchronize mute state without disrupting ongoing playback
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
    if (isMuted && typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }, [isMuted]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Handle HTML5 audio time update
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = Math.min((currentTime / duration) * 100, 100);
    setSpeakingProgress(progress);

    // Dynamic thresholds based on the full 26.5-second spoken intro:
    const ratio = currentTime / duration;
    if (ratio < 0.10) {
      setCurrentSentenceIndex(0);
    } else if (ratio < 0.38) {
      setCurrentSentenceIndex(1);
    } else if (ratio < 0.73) {
      setCurrentSentenceIndex(2);
    } else {
      setCurrentSentenceIndex(3);
    }
  };

  const handleAudioEnded = () => {
    onReset();
    setCurrentSentenceIndex(0);
    setSpeakingProgress(0);
  };

  const handleAudioError = () => {
    setUseSpeechSynthesisFallback(true);
    if (isPlaying) {
      startSpeechSynthesis();
    }
  };

  const handleReplay = () => {
    const audio = audioRef.current;
    if (audio && !useSpeechSynthesisFallback) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
      setSpeakingProgress(0);
      setCurrentSentenceIndex(0);
    } else {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      setSpeakingProgress(0);
      setCurrentSentenceIndex(0);
      startSpeechSynthesis();
    }
  };

  const handleToggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    if (audioRef.current) {
      audioRef.current.muted = newMuted;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      if (newMuted) {
        window.speechSynthesis.cancel();
      } else if (isPlaying) {
        startSpeechSynthesis();
      }
    }
  };

  // Video element sync if transparent webm video is provided
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        height: "100%",
        width: "100%",
        maxWidth: "520px",
        pointerEvents: "auto",
        zIndex: 10,
      }}
    >
      {/* Hidden audio element with genuine recorded human male voice */}
      <audio
        ref={audioRef}
        src="/assets/ajith-intro.mp3?v=4"
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
      />

      {/* Character Visual Element: Supports Video or High-res Transparent Character */}
      <div
        className="talking-avatar-figure"
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          animation: isPlaying
            ? "talkingGesture 3.5s ease-in-out infinite"
            : "naturalBreathing 6s ease-in-out infinite",
          transition: "transform 0.4s ease",
          transformOrigin: "bottom center",
        }}
      >
        {/* Transparent WebM / MP4 video slot */}
        <video
          ref={videoRef}
          src="/assets/ajith-talking-avatar.webm"
          playsInline
          muted={isMuted}
          preload="none"
          onError={() => setVideoAvailable(false)}
          onCanPlay={() => setVideoAvailable(true)}
          style={{
            display: videoAvailable ? "block" : "none",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            objectPosition: "bottom center",
          }}
        />

        {/* High-fidelity full-body character fallback */}
        {!videoAvailable && (
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <img
              src="/assets/ajith-character-transparent.png"
              alt="Ajith M T - Full Stack Developer"
              style={{
                width: "auto",
                height: "100%",
                maxHeight: "75vh",
                objectFit: "contain",
                objectPosition: "bottom center",
                filter: "drop-shadow(0 12px 24px rgba(46, 52, 68, 0.05))",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </div>
        )}

        {/* Speaking Status Pill near character's shoulder */}
        <button
          id="hear-my-intro-btn"
          onClick={onTogglePlay}
          aria-label={isPlaying ? "Pause voice introduction" : "Hear voice introduction"}
          style={{
            position: "absolute",
            top: "16%",
            right: "-2%",
            backgroundColor: "rgba(255, 255, 255, 0.94)",
            backdropFilter: "blur(10px)",
            border: `1px solid ${isPlaying ? "#38A169" : "#E5E1D7"}`,
            padding: "0.45rem 0.95rem",
            borderRadius: "9999px",
            display: "flex",
            alignItems: "center",
            gap: "0.55rem",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: isPlaying
              ? "0 8px 24px rgba(56, 161, 105, 0.16)"
              : "0 6px 20px rgba(36, 39, 53, 0.08)",
            transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
            zIndex: 30,
            outline: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 8px 24px rgba(36, 39, 53, 0.12)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0px)";
            e.currentTarget.style.boxShadow = isPlaying
              ? "0 8px 24px rgba(56, 161, 105, 0.16)"
              : "0 6px 20px rgba(36, 39, 53, 0.08)";
          }}
        >
          {/* Animated sound bars when playing */}
          {isPlaying ? (
            <div style={{ display: "flex", alignItems: "center", gap: "2px", height: "14px" }}>
              <span style={{ width: "2.5px", backgroundColor: "#38A169", borderRadius: "1px", animation: "barWave1 0.8s infinite ease-in-out" }} />
              <span style={{ width: "2.5px", backgroundColor: "#38A169", borderRadius: "1px", animation: "barWave2 0.8s infinite ease-in-out" }} />
              <span style={{ width: "2.5px", backgroundColor: "#38A169", borderRadius: "1px", animation: "barWave3 0.8s infinite ease-in-out" }} />
              <span style={{ width: "2.5px", backgroundColor: "#38A169", borderRadius: "1px", animation: "barWave4 0.8s infinite ease-in-out" }} />
            </div>
          ) : (
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#303746",
              }}
            />
          )}

          <span
            style={{
              fontSize: "0.78rem",
              fontWeight: 600,
              color: isPlaying ? "#22543D" : "#303746",
              letterSpacing: "0.02em",
            }}
          >
            {isPlaying ? "Speaking..." : "Hear my intro"}
          </span>

          {isPlaying ? (
            <Pause size={13} color="#22543D" />
          ) : (
            <Play size={13} color="#303746" fill="#303746" />
          )}
        </button>
      </div>

      {/* Floating Subtitles & Audio Controller Bar when active */}
      {isPlaying && (
        <div
          className="talking-avatar-speech-bubble"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.96)",
            backdropFilter: "blur(16px)",
            border: "1px solid #E5E1D7",
            borderRadius: "16px",
            padding: "0.95rem 1.25rem",
            boxShadow: "0 16px 36px rgba(46, 52, 68, 0.14)",
            zIndex: 30,
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
          }}
        >
          {/* Subtitle text */}
          <p
            style={{
              fontSize: "0.88rem",
              lineHeight: 1.48,
              color: "#2E3444",
              fontWeight: 500,
              textAlign: "center",
              minHeight: "2.6rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: 0,
            }}
          >
            &ldquo;{scriptSentences[currentSentenceIndex]}&rdquo;
          </p>

          {/* Progress bar */}
          <div
            style={{
              width: "100%",
              height: "3.5px",
              backgroundColor: "#EFECE1",
              borderRadius: "2px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${speakingProgress}%`,
                backgroundColor: "#242735",
                transition: "width 0.15s linear",
              }}
            />
          </div>

          {/* Quick playback control bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "0.2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <button
                onClick={onTogglePlay}
                style={{
                  padding: "0.32rem 0.65rem",
                  borderRadius: "6px",
                  background: "#F4F0E4",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#303746",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  cursor: "pointer",
                }}
              >
                <Pause size={12} /> Pause
              </button>
              <button
                onClick={handleReplay}
                style={{
                  padding: "0.32rem 0.65rem",
                  borderRadius: "6px",
                  background: "#F4F0E4",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#303746",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3rem",
                  cursor: "pointer",
                }}
              >
                <RotateCcw size={12} /> Replay
              </button>
            </div>

            <button
              onClick={handleToggleMute}
              style={{
                padding: "0.32rem 0.55rem",
                borderRadius: "6px",
                background: isMuted ? "#FDE8E8" : "#F4F0E4",
                color: isMuted ? "#E11D48" : "#303746",
                fontSize: "0.75rem",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                cursor: "pointer",
              }}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
              {isMuted ? "Muted" : "Mute"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
