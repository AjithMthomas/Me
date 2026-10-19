"use client";

import React from "react";
import { GraduationCap, Code, Award, CheckCircle } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      icon: <Code size={22} color="#242735" />,
      period: "2022 — 2023",
      degree: "Full Stack Architecture (Python Django + React)",
      institution: "Brototype",
      badge: "Industry Specialization",
      desc: "Rigorous, project-driven software engineering boot camp focusing on end-to-end full stack web architecture, data structures, REST API development, and real-world system delivery using Python, Django, and React.",
      skills: ["Python", "Django REST Framework", "React.js", "PostgreSQL", "Full Stack Lifecycles"],
    },
    {
      icon: <GraduationCap size={22} color="#242735" />,
      period: "2019 — 2021",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "SJB College of Management Studies · Bangalore University",
      badge: "Graduated",
      desc: "Comprehensive undergraduate degree in computer applications from Bangalore University, covering software engineering principles, algorithms, data structures, relational database management systems, and web technologies.",
      skills: ["Computer Science Fundamentals", "Data Structures", "RDBMS & SQL", "Software Engineering"],
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "7rem clamp(2rem, 4.5vw, 4.5rem)",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: "0.8rem",
            }}
          >
            06 —— ACADEMIC FOUNDATION
          </span>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: 800,
              color: "var(--text-headline)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
            }}
          >
            Education &amp; Specialization
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              marginTop: "0.8rem",
              maxWidth: "600px",
            }}
          >
            Formal computer science degree augmented by high-intensity practical full-stack specialization.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "2rem",
          }}
        >
          {education.map((item, idx) => (
            <div
              key={idx}
              className="interactive-card"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--canvas-border)",
                borderRadius: "18px",
                padding: "2.4rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 24px -8px rgba(46, 52, 68, 0.05)",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.4rem",
                  }}
                >
                  <div
                    style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "12px",
                      backgroundColor: "#FAF9F5",
                      border: "1px solid #ECE7D9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      backgroundColor: "#FAF9F5",
                      border: "1px solid var(--canvas-border)",
                      color: "var(--text-headline)",
                      padding: "0.28rem 0.75rem",
                      borderRadius: "9999px",
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <div style={{ marginBottom: "0.4rem" }}>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#2563EB",
                      backgroundColor: "#EFF6FF",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px",
                      display: "inline-block",
                      marginBottom: "0.6rem",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-headline)",
                    marginBottom: "0.35rem",
                    lineHeight: 1.3,
                  }}
                >
                  {item.degree}
                </h3>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 600,
                    color: "#4A5568",
                    marginBottom: "1rem",
                  }}
                >
                  {item.institution}
                </h4>
                <p
                  style={{
                    fontSize: "0.92rem",
                    lineHeight: 1.65,
                    color: "var(--text-muted)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Coursework & Skills Chips */}
              <div
                style={{
                  paddingTop: "1.2rem",
                  borderTop: "1px solid var(--canvas-border)",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.4rem",
                }}
              >
                {item.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: "0.75rem",
                      padding: "0.22rem 0.55rem",
                      borderRadius: "4px",
                      backgroundColor: "var(--canvas-bg)",
                      color: "var(--text-headline)",
                      fontWeight: 500,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
