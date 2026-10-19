"use client";

import React, { useState, useEffect } from "react";
import { Volume2, Menu, X } from "lucide-react";

interface NavigationProps {
  isPlaying: boolean;
  onToggleSpeech: () => void;
}

export default function Navigation({ isPlaying, onToggleSpeech }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    // Remove any hash on initial mount or hash change
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    const handleHash = () => {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHash);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPdf: boolean) => {
    if (isPdf) return;
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined" && window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const navLinks = [
    { label: "About", href: "#about", isPdf: false },
    { label: "Skills", href: "#skills", isPdf: false },
    { label: "Experience", href: "#experience", isPdf: false },
    { label: "Projects", href: "#projects", isPdf: false },
    { label: "Education", href: "#education", isPdf: false },
    { label: "Resume", href: "/assets/Ajith_MT_Resume-05-10-26.pdf", isPdf: true },
    { label: "Contact", href: "#contact", isPdf: false },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "1rem clamp(1.2rem, 3.5vw, 2.5rem)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? "rgba(247, 244, 232, 0.94)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(229, 225, 215, 0.85)"
            : "1px solid transparent",
          transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Brand: Monogram + Full Name */}
        <a
          href="/"
          onClick={handleScrollToTop}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "1.5px solid #DDD8CA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "#303746",
              background: "rgba(255, 255, 255, 0.7)",
              letterSpacing: "0.04em",
              boxShadow: "0 1px 3px rgba(0,0,0,0.02)",
            }}
          >
            AM
          </div>
          <span
            style={{
              fontSize: "0.98rem",
              fontWeight: 600,
              color: "#2E3444",
              letterSpacing: "-0.015em",
            }}
          >
            Ajith M T
          </span>
        </a>

        {/* Nav items + Voice Intro Button + Mobile Menu Toggle */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            className="desktop-nav-links"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isPdf)}
                target={link.isPdf ? "_blank" : undefined}
                rel={link.isPdf ? "noreferrer" : undefined}
                style={{
                  fontSize: "0.92rem",
                  fontWeight: link.isPdf ? 600 : 500,
                  color: link.isPdf ? "#2E3444" : "#525968",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#1E2230")}
                onMouseLeave={(e) => (e.currentTarget.style.color = link.isPdf ? "#2E3444" : "#525968")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            {/* Circular dark action button at top right */}
            <button
              onClick={onToggleSpeech}
              aria-label={isPlaying ? "Pause introduction audio" : "Play introduction audio"}
              title={isPlaying ? "Pause voice introduction" : "Hear Ajith speak"}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#242735",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                position: "relative",
                boxShadow: isPlaying
                  ? "0 0 0 4px rgba(36, 39, 53, 0.15)"
                  : "0 2px 6px rgba(36, 39, 53, 0.18)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.08)";
                e.currentTarget.style.backgroundColor = "#161822";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.backgroundColor = "#242735";
              }}
            >
              {isPlaying ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2.5px",
                    height: "14px",
                  }}
                >
                  <span
                    style={{
                      width: "2.5px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "2px",
                      animation: "barWave1 0.8s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: "2.5px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "2px",
                      animation: "barWave2 0.7s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      width: "2.5px",
                      backgroundColor: "#FFFFFF",
                      borderRadius: "2px",
                      animation: "barWave3 0.9s ease-in-out infinite",
                    }}
                  />
                </div>
              ) : (
                <Volume2 size={17} strokeWidth={2.2} />
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-nav-toggle"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              style={{
                display: "none",
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                backgroundColor: "#FAF9F5",
                border: "1px solid var(--canvas-border)",
                color: "var(--text-headline)",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Navigation Panel */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "4.5rem",
            left: "1rem",
            right: "1rem",
            backgroundColor: "rgba(247, 244, 232, 0.98)",
            backdropFilter: "blur(20px)",
            border: "1px solid var(--canvas-border)",
            borderRadius: "18px",
            padding: "1.25rem",
            boxShadow: "0 20px 40px rgba(46, 52, 68, 0.16)",
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
            zIndex: 99,
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.isPdf)}
              target={link.isPdf ? "_blank" : undefined}
              rel={link.isPdf ? "noreferrer" : undefined}
              style={{
                padding: "0.75rem 1rem",
                borderRadius: "10px",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--text-headline)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                border: "1px solid rgba(229, 225, 215, 0.5)",
              }}
            >
              <span>{link.label}</span>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>↗</span>
            </a>
          ))}
        </div>
      )}
    </>
  );
}
