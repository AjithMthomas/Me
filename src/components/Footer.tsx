"use client";

import React from "react";
import { ArrowUp, Heart, Code2, Sparkles, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#1E212B",
        color: "#FFFFFF",
        padding: "4.5rem clamp(2rem, 4.5vw, 4.5rem) 2.5rem clamp(2rem, 4.5vw, 4.5rem)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* Top Footer Row: Branding, Navigation Links & Socials */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "2.5rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            paddingBottom: "3rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ maxWidth: "380px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "#FFFFFF",
                  color: "#1E212B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.95rem",
                  fontWeight: 900,
                  letterSpacing: "0.05em",
                }}
              >
                AMT
              </div>
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0, letterSpacing: "0.04em" }}>
                  AJITH M T
                </h4>
                <span style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
                  Full Stack Developer
                </span>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.88rem",
                color: "#9CA3AF",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Building resilient, high-throughput web applications with Angular, React, Next.js, Python, and cloud infrastructure.
            </p>
          </div>

          {/* Quick Jump Links */}
          <div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Quick Navigation
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem 1.75rem" }}>
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  style={{
                    fontSize: "0.88rem",
                    color: "#D1D5DB",
                    fontWeight: 500,
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#D1D5DB")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Connections */}
          <div>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "#9CA3AF",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Direct Connect
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <a
                href="https://github.com/AjithMthomas"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="pill-chip"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <GithubIcon size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajithmt1/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="pill-chip"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href="https://wa.me/919562441350"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="pill-chip"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <Phone size={17} />
              </a>

              <a
                href="mailto:ajithmuzhayamkattil@gmail.com"
                aria-label="Email"
                className="pill-chip"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.25rem",
          }}
        >
          <span style={{ fontSize: "0.82rem", color: "#9CA3AF" }}>
            &copy; Ajith M T · Full Stack Developer · Crafted for performance &amp; clean design.
          </span>

          <button
            onClick={scrollToTop}
            className="pill-chip"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.6rem 1.15rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "#FFFFFF",
              fontSize: "0.82rem",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
