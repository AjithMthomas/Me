"use client";

import React, { useState } from "react";
import { ArrowDownRight, ChevronDown } from "lucide-react";
import TalkingAvatar from "./TalkingAvatar";

interface HeroProps {
  isPlaying: boolean;
  onToggleSpeech: () => void;
  onResetSpeech: () => void;
}

export default function Hero({
  isPlaying,
  onToggleSpeech,
  onResetSpeech,
}: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <section
      id="hero"
      className="hero-section"
      onMouseMove={handleMouseMove}
    >
      {/* 1. OVERSIZED BACKGROUND TYPOGRAPHY: AJITH */}
      <div
        aria-hidden="true"
        className="hero-bg-typography"
        style={{
          transform: `translate(-50%, 0) translate3d(${mousePos.x * -16}px, ${mousePos.y * -10}px, 0)`,
        }}
      >
        <span>AJITH</span>
      </div>

      {/* 2. TALKING AVATAR (Centered on Desktop, Adaptive Flow on Mobile) */}
      <div
        className="hero-avatar-wrapper"
        style={{
          transform: typeof window !== "undefined" && window.innerWidth > 1024
            ? `translateX(-50%) translate3d(${mousePos.x * 10}px, ${mousePos.y * 6}px, 0)`
            : undefined,
        }}
      >
        <div style={{ pointerEvents: "auto", height: "100%", width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <TalkingAvatar
            isPlaying={isPlaying}
            onTogglePlay={onToggleSpeech}
            onReset={onResetSpeech}
          />
        </div>
      </div>

      {/* Spacer for navigation */}
      <div className="hero-nav-spacer" style={{ height: "1rem" }} />

      {/* 3. HERO CONTENT: Headline on left, Action buttons on right (Stacks cleanly on Mobile) */}
      <div className="hero-content-container">
        {/* LOWER-LEFT CONTENT: Headline, Title & Subtitle */}
        <div className="hero-headline-column">
          {/* Small uppercase label */}
          <div
            className="hero-tag-badge"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.8rem",
            }}
          >
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              AJITH M T
            </span>
          </div>

          {/* Main Headline: Bold Two-Line Composition with dot */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5.2vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.038em",
              color: "var(--text-headline)",
              marginBottom: "1rem",
            }}
          >
            Full Stack
            <br />
            Developer<span style={{ color: "#303746" }}>.</span>
          </h1>

          {/* Supporting description */}
          <p
            style={{
              fontSize: "clamp(0.92rem, 1.2vw, 1.08rem)",
              fontWeight: 400,
              color: "var(--text-muted)",
              lineHeight: 1.55,
              letterSpacing: "-0.01em",
            }}
          >
            Creative full stack developer · Angular, React, Next.js &amp; Python
          </p>
        </div>

        {/* FLOATING ACTION BUTTONS */}
        <div className="hero-actions-column">
          {/* Primary Dark Pill Button: Explore work */}
          <a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "projects")}
            className="hero-explore-btn"
            style={{
              backgroundColor: "var(--btn-dark)",
              color: "#FFFFFF",
              padding: "0.78rem 1.45rem",
              borderRadius: "9999px",
              fontSize: "0.92rem",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 4px 14px rgba(36, 39, 53, 0.16)",
              transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--btn-dark-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(36, 39, 53, 0.22)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--btn-dark)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(36, 39, 53, 0.16)";
            }}
          >
            <span>Explore work</span>
            <ArrowDownRight size={17} strokeWidth={2.4} />
          </a>

          {/* Secondary Actions: Let's talk & Resume buttons */}
          <div
            className="hero-secondary-btns"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            {/* Let's talk */}
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "contact")}
              style={{
                backgroundColor: "var(--btn-pill-bg)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--btn-pill-border)",
                color: "var(--text-headline)",
                padding: "0.6rem 1.15rem",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--btn-pill-hover)";
                e.currentTarget.style.borderColor = "#D0C9B8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--btn-pill-bg)";
                e.currentTarget.style.borderColor = "var(--btn-pill-border)";
              }}
            >
              <span>Let&apos;s talk</span>
            </a>

            {/* Resume */}
            <a
              href="/assets/Ajith_MT_Resume-05-10-26.pdf"
              download="Ajith_MT_Resume-05-10-26.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "var(--btn-pill-bg)",
                backdropFilter: "blur(8px)",
                border: "1px solid var(--btn-pill-border)",
                color: "var(--text-headline)",
                padding: "0.6rem 1.15rem",
                borderRadius: "9999px",
                fontSize: "0.85rem",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--btn-pill-hover)";
                e.currentTarget.style.borderColor = "#D0C9B8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--btn-pill-bg)";
                e.currentTarget.style.borderColor = "var(--btn-pill-border)";
              }}
            >
              <span>Resume</span>
              <ChevronDown size={14} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
