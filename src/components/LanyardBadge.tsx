"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { ShieldCheck, Sparkles, QrCode, Cpu, ArrowLeftRight } from "lucide-react";

export default function LanyardBadge() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation angles (damped for natural swing)
    const rotateY = (mouseX / (rect.width / 2)) * 14;
    const rotateX = -(mouseY / (rect.height / 2)) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const toggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  // Holographic reflection highlight calculation
  const holoX = 50 + rotate.y * 2.5;
  const holoY = 50 - rotate.x * 2.5;

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        perspective: "1200px",
        userSelect: "none",
        width: "100%",
        maxWidth: "340px",
        margin: "0 auto",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. SUSPENDED LANYARD STRAP */}
      <div
        style={{
          width: "36px",
          height: "85px",
          background: "linear-gradient(180deg, #1C1F2B 0%, #2A2F3F 100%)",
          boxShadow: "inset 0 0 4px rgba(0,0,0,0.4), 0 4px 10px rgba(0,0,0,0.15)",
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "3px 3px 0 0",
          transformOrigin: "top center",
          transform: `rotate(${rotate.y * 0.25}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Lanyard Fabric Stitch Details */}
        <div
          style={{
            position: "absolute",
            inset: "0 6px",
            borderLeft: "1px dashed rgba(255,255,255,0.18)",
            borderRight: "1px dashed rgba(255,255,255,0.18)",
          }}
        />
        {/* Micro brand text on strap */}
        <span
          style={{
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            fontSize: "0.55rem",
            letterSpacing: "0.22em",
            fontWeight: 700,
            color: "rgba(255,255,255,0.45)",
            textTransform: "uppercase",
          }}
        >
          AJITH M T
        </span>
      </div>

      {/* 2. METALLIC SWIVEL CLASP & RING */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "-2px",
          marginBottom: "-12px",
          transform: `rotate(${rotate.y * 0.4}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Metallic clamp bracket */}
        <div
          style={{
            width: "44px",
            height: "12px",
            background: "linear-gradient(90deg, #B8BAC2 0%, #E6E8EE 50%, #8E909B 100%)",
            borderRadius: "3px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
        />
        {/* Metal ring */}
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            border: "3.5px solid #C4C6D0",
            background: "transparent",
            marginTop: "-3px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* 3. 3D INTERACTIVE ID CARD CONTAINER */}
      <div
        ref={cardRef}
        onClick={toggleFlip}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "320px",
          height: "460px",
          cursor: "pointer",
          transformStyle: "preserve-3d",
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y + (isFlipped ? 180 : 0)}deg) translateZ(10px)`,
          transition: isHovered && !isFlipped
            ? "transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)"
            : "transform 0.75s cubic-bezier(0.2, 0.9, 0.3, 1)",
          zIndex: 4,
        }}
      >
        {/* ================= CARD FRONT FACE ================= */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            backgroundColor: "#FFFFFF",
            borderRadius: "18px",
            border: "1px solid rgba(226, 222, 210, 0.8)",
            boxShadow: isHovered
              ? "0 28px 50px -12px rgba(46, 52, 68, 0.22), 0 8px 16px rgba(0,0,0,0.06)"
              : "0 18px 36px -10px rgba(46, 52, 68, 0.14), 0 4px 10px rgba(0,0,0,0.04)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.3s ease",
          }}
        >
          {/* Lanyard Punch Hole */}
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "36px",
              height: "7px",
              backgroundColor: "var(--canvas-bg)",
              borderRadius: "4px",
              border: "1.5px solid rgba(0,0,0,0.1)",
              zIndex: 10,
            }}
          />

          {/* Top Navy Banner */}
          <div
            style={{
              backgroundColor: "#242735",
              color: "#FFFFFF",
              padding: "1.75rem 1.25rem 0.9rem 1.25rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  backgroundColor: "#FFFFFF",
                  color: "#242735",
                  fontWeight: 800,
                  fontSize: "0.75rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                AM
              </div>
              <div>
                <span
                  style={{
                    fontSize: "0.74rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    display: "block",
                    lineHeight: 1.1,
                  }}
                >
                  DEVELOPER ID
                </span>
                <span
                  style={{
                    fontSize: "0.62rem",
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.08em",
                  }}
                >
                  Full Stack Engineer
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                backgroundColor: "rgba(255,255,255,0.12)",
                padding: "0.25rem 0.55rem",
                borderRadius: "9999px",
                fontSize: "0.62rem",
                fontWeight: 600,
                color: "#68D391",
                letterSpacing: "0.04em",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor: "#68D391",
                  boxShadow: "0 0 6px #68D391",
                }}
              />
              ACTIVE
            </div>
          </div>

          {/* Card Body */}
          <div
            style={{
              flex: 1,
              padding: "1rem 1.25rem 1rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#FAF9F5",
              position: "relative",
            }}
          >
            {/* Portrait Photo Container */}
            <div
              style={{
                width: "142px",
                height: "155px",
                borderRadius: "14px",
                border: "none",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.08)",
                backgroundColor: "#F7F4E8",
              }}
            >
              <img
                src="/assets/ajith-badge-portrait.png?v=3"
                alt="Ajith M T - Developer ID Portrait"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center center",
                }}
              />
            </div>

            {/* Name & Title */}
            <div style={{ textAlign: "center", marginTop: "0.5rem" }}>
              <h3
                style={{
                  fontSize: "1.18rem",
                  fontWeight: 800,
                  letterSpacing: "0.06em",
                  color: "#242735",
                  margin: 0,
                  lineHeight: 1.15,
                }}
              >
                AJITH M T
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "#6B7280",
                  fontWeight: 500,
                  marginTop: "0.2rem",
                }}
              >
                Full Stack Developer
              </p>
            </div>

            {/* Metadata 3-Column Strip */}
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "1fr 1.3fr 0.9fr",
                gap: "0.3rem",
                padding: "0.55rem 0.4rem",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECE7D9",
                marginTop: "0.5rem",
                boxSizing: "border-box",
              }}
            >
              <div>
                <span style={{ fontSize: "0.58rem", color: "#9CA3AF", display: "block", fontWeight: 600 }}>
                  ID NO.
                </span>
                <span style={{ fontSize: "0.72rem", color: "#242735", fontWeight: 700 }}>
                  AMT-0001
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.58rem", color: "#9CA3AF", display: "block", fontWeight: 600 }}>
                  DEPT.
                </span>
                <span style={{ fontSize: "0.72rem", color: "#242735", fontWeight: 700 }}>
                  Full Stack &amp; Cloud
                </span>
              </div>
              <div>
                <span style={{ fontSize: "0.58rem", color: "#9CA3AF", display: "block", fontWeight: 600 }}>
                  STATUS
                </span>
                <span style={{ fontSize: "0.72rem", color: "#242735", fontWeight: 700 }}>
                  Permanent
                </span>
              </div>
            </div>

            {/* Bottom Barcode Strip & Holographic Chip */}
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "0.6rem",
                paddingTop: "0.4rem",
                borderTop: "1px dashed #E5E1D7",
              }}
            >
              {/* Barcode Lines */}
              <div style={{ display: "flex", gap: "2.5px", alignItems: "flex-end", height: "24px" }}>
                {[3, 1, 2, 4, 1, 3, 2, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2].map((w, i) => (
                  <div
                    key={i}
                    style={{
                      width: `${w}px`,
                      height: i % 3 === 0 ? "24px" : i % 2 === 0 ? "18px" : "21px",
                      backgroundColor: "#242735",
                      borderRadius: "0.5px",
                    }}
                  />
                ))}
              </div>

              {/* Holographic Security Seal */}
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: `radial-gradient(circle at ${holoX}% ${holoY}%, #FFE5A3 0%, #A0E6FF 35%, #D4A5FF 70%, #FFD6A5 100%)`,
                  boxShadow: "0 1px 4px rgba(0,0,0,0.15), inset 0 0 3px rgba(255,255,255,0.8)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(255,255,255,0.6)",
                }}
              >
                <Sparkles size={13} color="#242735" />
              </div>
            </div>
          </div>

          {/* Interactive Flip Hint Banner */}
          <div
            style={{
              backgroundColor: "#F2EEE1",
              padding: "0.45rem",
              textAlign: "center",
              fontSize: "0.62rem",
              fontWeight: 600,
              color: "#7E7B74",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.35rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeftRight size={11} />
            <span>Click card to inspect credentials</span>
          </div>

          {/* Holographic Sheen Layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `linear-gradient(${115 + rotate.y * 3}deg, transparent 40%, rgba(255, 255, 255, 0.35) 50%, transparent 60%)`,
              opacity: isHovered ? 0.7 : 0,
              transition: "opacity 0.25s ease",
            }}
          />
        </div>

        {/* ================= CARD BACK FACE ================= */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            backgroundColor: "#20232F",
            color: "#FFFFFF",
            borderRadius: "18px",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 24px 44px -10px rgba(0,0,0,0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "1.75rem 1.4rem 1.25rem 1.4rem",
            boxSizing: "border-box",
          }}
        >
          {/* Back Top Banner */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                <ShieldCheck size={16} color="#68D391" />
                <span style={{ fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.14em", color: "#68D391" }}>
                  VERIFIED CREDENTIAL
                </span>
              </div>
              <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
                SEC-AMT-VERIFIED
              </span>
            </div>
            <h4 style={{ fontSize: "1.05rem", fontWeight: 700, margin: "0 0 0.3rem 0", color: "#FFFFFF" }}>
              Ajith M T
            </h4>
            <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", margin: 0, lineHeight: 1.4 }}>
              Full Stack Developer · 2+ Years Professional Experience
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div style={{ margin: "0.8rem 0" }}>
            <span style={{ fontSize: "0.62rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
              Core Specialization
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
              {["Angular", "React", "Next.js", "Python", "FastAPI", "Django", "Node.js", "AWS", "Docker", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: "0.65rem",
                    padding: "0.22rem 0.5rem",
                    borderRadius: "4px",
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#E2E8F0",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom QR & Microchip block */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.7rem",
              borderRadius: "10px",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "6px",
                  backgroundColor: "#FFFFFF",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <QrCode size={30} color="#242735" />
              </div>
              <div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#FFFFFF", display: "block" }}>
                  Official Portfolio
                </span>
                <span style={{ fontSize: "0.58rem", color: "rgba(255,255,255,0.55)" }}>
                  Scan to connect
                </span>
              </div>
            </div>

            <Cpu size={22} color="#A0AEC0" />
          </div>

          {/* Return button */}
          <div
            style={{
              textAlign: "center",
              marginTop: "0.5rem",
              fontSize: "0.62rem",
              color: "rgba(255,255,255,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.3rem",
            }}
          >
            <ArrowLeftRight size={11} />
            <span>Click to flip front</span>
          </div>
        </div>
      </div>
    </div>
  );
}
