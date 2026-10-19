"use client";

import React, { useState } from "react";
import { Download, ArrowUpRight } from "lucide-react";
import LanyardBadge from "./LanyardBadge";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function AboutSection() {
  const [activeFactIndex, setActiveFactIndex] = useState<number | null>(null);

  const quickFacts = [
    { label: "Based in", value: "Bengaluru, India" },
    { label: "Experience", value: "2+ Yrs Pro · 4+ Yrs Total" },
    { label: "Degree", value: "BCA · Bangalore University" },
    { label: "Specialization", value: "Angular, React, Next.js, Python, AWS" },
    { label: "Focus", value: "Any Software Solutions" },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "6.5rem clamp(2rem, 4.5vw, 4.5rem) 7rem clamp(2rem, 4.5vw, 4.5rem)",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* 3-Column Editorial Grid matching Reference Image */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.95fr 1fr",
            gap: "clamp(2rem, 3.5vw, 4rem)",
            alignItems: "center",
          }}
          className="about-grid-container"
        >
          {/* ================= LEFT COLUMN: BIO & ACTIONS ================= */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Section Tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.2rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.22em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                01 —— ABOUT
              </span>
            </div>

            {/* Headline with Editorial Serif Name */}
            <h2
              style={{
                fontSize: "clamp(2.8rem, 4.6vw, 4.2rem)",
                fontWeight: 800,
                color: "var(--text-headline)",
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                marginBottom: "1.75rem",
              }}
            >
              Hi, I&apos;m{" "}
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontWeight: 600,
                  color: "var(--text-headline)",
                }}
              >
                Ajith.
              </span>
            </h2>

            {/* Bio Body Paragraphs */}
            <p
              style={{
                fontSize: "clamp(1.02rem, 1.25vw, 1.15rem)",
                lineHeight: 1.72,
                color: "#3F4555",
                marginBottom: "1.1rem",
                fontWeight: 400,
              }}
            >
              Full Stack Developer with 2+ years of professional working experience and 4+ years of overall development experience across <strong>Angular</strong>, <strong>React.js</strong>, <strong>NextJS</strong>, <strong>Node.js</strong>, <strong>Django</strong>, and <strong>FastAPI</strong>.
            </p>
            <p
              style={{
                fontSize: "clamp(0.96rem, 1.15vw, 1.05rem)",
                lineHeight: 1.7,
                color: "var(--text-muted)",
                marginBottom: "2.4rem",
              }}
            >
              I work across frontend, backend, AI, APIs, databases, and creative web development — delivering robust architectures that scale reliably from day one.
            </p>

            {/* Action Pills */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.85rem",
              }}
            >
              {/* Primary Dark Pill: Resume Download */}
              <a
                href="/assets/Ajith_MT_Resume-05-10-26.pdf"
                download="Ajith_MT_Resume-05-10-26.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "var(--btn-dark)",
                  color: "#FFFFFF",
                  padding: "0.72rem 1.45rem",
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
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(36, 39, 53, 0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--btn-dark)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 14px rgba(36, 39, 53, 0.16)";
                }}
              >
                <span>Résumé</span>
                <Download size={15} strokeWidth={2.4} />
              </a>

              {/* GitHub Pill */}
              <a
                href="https://github.com/AjithMthomas"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--btn-pill-border)",
                  color: "var(--text-headline)",
                  padding: "0.68rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#CBC4B2";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.borderColor = "var(--btn-pill-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>

              {/* LinkedIn Pill */}
              <a
                href="https://www.linkedin.com/in/ajithmt1/"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid var(--btn-pill-border)",
                  color: "var(--text-headline)",
                  padding: "0.68rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#CBC4B2";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                  e.currentTarget.style.borderColor = "var(--btn-pill-border)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* ================= CENTER COLUMN: HANGING LANYARD DEVELOPER ID BADGE ================= */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 0",
            }}
          >
            <LanyardBadge />
          </div>

          {/* ================= RIGHT COLUMN: QUICK FACTS & EDITORIAL QUOTE ================= */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "clamp(0rem, 1.5vw, 1.5rem)",
            }}
          >
            {/* Quick Facts Section Header */}
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                display: "block",
                marginBottom: "1.2rem",
              }}
            >
              QUICK FACTS
            </span>

            {/* Quick Facts List with Hairline Dividers & Interactive Hover */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderTop: "1px solid var(--canvas-border)",
              }}
            >
              {quickFacts.map((fact, index) => {
                const isHovered = activeFactIndex === index;
                return (
                  <div
                    key={fact.label}
                    onMouseEnter={() => setActiveFactIndex(index)}
                    onMouseLeave={() => setActiveFactIndex(null)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.82rem 0.5rem",
                      borderBottom: "1px solid var(--canvas-border)",
                      backgroundColor: isHovered ? "rgba(255,255,255,0.4)" : "transparent",
                      borderRadius: "6px",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.86rem",
                        color: isHovered ? "var(--text-headline)" : "var(--text-muted)",
                        fontWeight: 500,
                        transition: "color 0.2s ease",
                      }}
                    >
                      {fact.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-headline)",
                        fontWeight: isHovered ? 700 : 600,
                        textAlign: "right",
                        transition: "font-weight 0.2s ease",
                      }}
                    >
                      {fact.value}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Editorial Serif Quote */}
            <div style={{ marginTop: "2.6rem" }}>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "clamp(1.4rem, 2vw, 1.75rem)",
                  color: "var(--text-headline)",
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em",
                  margin: 0,
                }}
              >
                &ldquo;From the database to the last pixel.&rdquo;
              </p>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  letterSpacing: "0.14em",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  marginTop: "0.6rem",
                  display: "block",
                }}
              >
                — Engineering Philosophy
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
