"use client";

import React from "react";
import { GraduationCap, Code, Award, CheckCircle2, BookOpen, Sparkles, Building } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      icon: <GraduationCap size={24} color="#242735" />,
      period: "2019 — 2021",
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Bangalore University",
      college: "SJB College of Management Studies",
      badge: "Graduated Degree",
      badgeColor: "#2563EB",
      focus: "Software Engineering & Computer Applications",
      desc: "Comprehensive undergraduate degree in computer applications covering core software engineering principles, algorithms, data structures, relational database management systems, and modern web application programming.",
      coursework: [
        "Data Structures & Algorithm Design",
        "Relational Database Management (RDBMS & SQL)",
        "Software Engineering Lifecycles",
        "Object-Oriented Programming & Web Technologies",
      ],
    },
    {
      icon: <Code size={24} color="#242735" />,
      period: "2022 — 2023",
      degree: "Full Stack Architecture Specialization",
      institution: "Brototype",
      college: "Intensive Engineering Bootcamp",
      badge: "Industry Certified",
      badgeColor: "#059669",
      focus: "Production Python, Django & React Systems",
      desc: "High-intensity, project-driven software engineering boot camp focusing on end-to-end full stack web architecture, data structures, REST API development, and real-world system delivery using Python, Django, and React.",
      coursework: [
        "Python & Django REST Framework APIs",
        "React.js Single-Page Applications",
        "PostgreSQL Schemas & ACID Optimization",
        "Full-Lifecycle Production Deployments",
      ],
    },
  ];

  return (
    <section
      id="education"
      style={{
        padding: "7.5rem clamp(2rem, 4.5vw, 4.5rem)",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* Section Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.8rem" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              05 —— ACADEMIC FOUNDATION
            </span>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#059669",
              }}
            />
          </div>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
              fontWeight: 800,
              color: "var(--text-headline)",
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            Education &amp; Credentials
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              marginTop: "0.8rem",
              maxWidth: "620px",
              lineHeight: 1.5,
            }}
          >
            Formal computer science degree from Bangalore University augmented by rigorous practical full-stack software architecture training.
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
                border: "1.5px solid var(--canvas-border)",
                borderTop: `4px solid ${item.badgeColor}`,
                borderRadius: "20px",
                padding: "clamp(1.75rem, 3vw, 2.5rem)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 10px 30px -8px rgba(36, 39, 53, 0.06)",
              }}
            >
              <div>
                {/* Card Top Row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "12px",
                      backgroundColor: `${item.badgeColor}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        padding: "0.22rem 0.65rem",
                        borderRadius: "9999px",
                        backgroundColor: `${item.badgeColor}12`,
                        color: item.badgeColor,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.badge}
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        padding: "0.22rem 0.65rem",
                        borderRadius: "9999px",
                        backgroundColor: "#FAF9F5",
                        border: "1px solid #ECE7D9",
                      }}
                    >
                      {item.period}
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-headline)",
                    margin: "0 0 0.35rem 0",
                    lineHeight: 1.25,
                  }}
                >
                  {item.degree}
                </h3>
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: item.badgeColor,
                    display: "block",
                    marginBottom: "0.15rem",
                  }}
                >
                  {item.institution}
                </span>
                <span
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "1rem",
                  }}
                >
                  {item.college}
                </span>

                <p
                  style={{
                    fontSize: "0.92rem",
                    color: "#4A5568",
                    lineHeight: 1.6,
                    margin: "0 0 1.5rem 0",
                  }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Core Coursework Badges */}
              <div
                style={{
                  borderTop: "1px solid #ECE7D9",
                  paddingTop: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    display: "block",
                    marginBottom: "0.65rem",
                  }}
                >
                  Core Coursework &amp; Mastery
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {item.coursework.map((course, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.55rem",
                        fontSize: "0.84rem",
                        color: "#374151",
                      }}
                    >
                      <CheckCircle2 size={15} color={item.badgeColor} style={{ flexShrink: 0 }} />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
