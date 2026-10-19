"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        padding: "3rem 3.5rem",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "1.5px solid #DDD8CA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#303746",
            background: "rgba(255, 255, 255, 0.7)",
          }}
        >
          AM
        </div>
        <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 500 }}>
          &copy; 2026 Ajith M T. Crafted with precision &amp; care.
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Full Stack Developer · Angular, React, NextJS, Python &amp; Cloud
        </span>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            border: "1px solid var(--canvas-border)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#303746",
            transition: "all 0.2s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#242735";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
            e.currentTarget.style.color = "#303746";
          }}
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
