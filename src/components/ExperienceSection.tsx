"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Building2,
  Sparkles,
  ExternalLink,
  Layers,
  Award,
} from "lucide-react";

export default function ExperienceSection() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

  const experiences = [
    {
      company: "Neeraali Digital Marketing",
      shortName: "Neeraali",
      role: "Full Stack Developer",
      period: "July 2025 – August 2026",
      location: "Bengaluru, India",
      type: "Full-Time",
      badgeColor: "#2563EB",
      tagline: "Architected end-to-end full stack web platforms and scalable client architectures.",
      metrics: [
        { label: "Delivered", value: "6+ Apps", detail: "End-to-end production delivery" },
        { label: "Architecture", value: "Full Stack", detail: "Angular, Django, Node.js" },
        { label: "Deployment", value: "Cloud CI/CD", detail: "Automated pipelines & testing" },
      ],
      description: [
        "Architected and successfully delivered 6+ full-stack production web applications, managing the complete engineering lifecycle from system design to cloud release.",
        "Engineered robust full-stack solutions using Node.js, Python/Django, Angular, and modern JavaScript, ensuring high performance, responsive UI, and clean code modularity.",
        "Significantly reduced client time-to-market by standardizing RESTful API conventions, streamlining CI/CD workflows, and enforcing automated validation best practices.",
        "Collaborated with UI/UX designers and stakeholders to implement intuitive, accessible user interfaces and reliable state management.",
      ],
      skills: ["Angular", "Python", "Django", "Node.js", "JavaScript (ES6+)", "RESTful APIs", "Full Stack Architecture", "Agile Execution"],
    },
    {
      company: "Anvenssa AI Consulting",
      shortName: "Anvenssa AI",
      role: "Senior Software Developer",
      period: "January 2026 – February 2026",
      location: "Remote",
      type: "Contract",
      badgeColor: "#7C3AED",
      tagline: "Specialized Full Stack development and rapid milestone execution on Time & Material basis.",
      metrics: [
        { label: "Engagement", value: "T&M Basis", detail: "Specialized advisory & build" },
        { label: "Milestones", value: "100%", detail: "Delivered on schedule" },
        { label: "Scope", value: "Full Stack", detail: "Client-facing software systems" },
      ],
      description: [
        "Provided specialized, high-tempo Full Stack development consulting services on a Time and Material basis.",
        "Delivered critical software milestones within tight deadlines, maintaining rigorous code quality standards and architectural consistency.",
        "Engineered reliable backend endpoints and integrated dynamic frontend components for client-facing software systems.",
        "Conducted code reviews, performance optimizations, and debugging for complex production issues.",
      ],
      skills: ["Full Stack Consulting", "Remote Execution", "Sprint Milestones", "Time & Material", "Rapid Prototyping", "Code Auditing"],
    },
    {
      company: "Zil Money (MNC)",
      shortName: "Zil Money",
      role: "Software Engineer",
      period: "September 2023 – October 2024",
      location: "India",
      type: "Full-Time",
      badgeColor: "#059669",
      tagline: "Led core fintech engineering for 1M+ active banking users and custom ML fraud prevention.",
      metrics: [
        { label: "User Base", value: "1M+ Users", detail: "Commercial banking scale" },
        { label: "Core Products", value: "2 Flagships", detail: "Restaurant App & ML Fraud System" },
        { label: "Infrastructure", value: "Docker & K8s", detail: "High-concurrency microservices" },
      ],
      description: [
        "Led engineering on two flagship company products: a high-throughput Restaurant Management App and an intelligent Fraud Detection ML System.",
        "Constructed resilient fintech microservices using FastAPI, Django, Node.js, and Angular, deployed on Kubernetes and Docker clusters.",
        "Engineered real-time anomaly detection pipelines that intercepted suspicious financial transactions with high precision.",
        "Collaborated closely with cross-functional product teams, security auditors, and banking partners to ensure regulatory compliance and 99.9% availability.",
      ],
      skills: ["Angular", "FastAPI", "Django", "Node.js", "Kubernetes", "Docker", "Machine Learning", "Fintech Systems"],
    },
  ];

  const currentExp = experiences[activeCompanyIndex];

  return (
    <section
      id="experience"
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
              03 —— CAREER TRAJECTORY
            </span>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "#242735",
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
            Professional Experience
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
            Proven commercial track record delivering enterprise fintech applications, SaaS platforms, and cloud infrastructure.
          </p>
        </div>

        {/* 2-Column Experience Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) 2.2fr",
            gap: "clamp(2rem, 3.5vw, 3.5rem)",
            alignItems: "start",
          }}
          className="about-grid-container"
        >
          {/* Company Switcher Timeline Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {experiences.map((exp, idx) => {
              const isActive = activeCompanyIndex === idx;
              return (
                <div
                  key={exp.company}
                  onClick={() => setActiveCompanyIndex(idx)}
                  className="interactive-card"
                  style={{
                    padding: "1.45rem 1.4rem",
                    borderRadius: "16px",
                    backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                    border: `1.5px solid ${isActive ? "var(--text-headline)" : "var(--canvas-border)"}`,
                    borderLeft: `4px solid ${isActive ? exp.badgeColor : "transparent"}`,
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 10px 24px -6px rgba(36, 39, 53, 0.12)"
                      : "0 2px 6px rgba(0, 0, 0, 0.02)",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.3rem" }}>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          backgroundColor: `${exp.badgeColor}12`,
                          color: exp.badgeColor,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                        {exp.location}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontSize: "1.08rem",
                        fontWeight: isActive ? 800 : 700,
                        color: "var(--text-headline)",
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </h3>

                    <span
                      style={{
                        fontSize: "0.84rem",
                        color: isActive ? "var(--text-headline)" : "var(--text-muted)",
                        fontWeight: 600,
                        marginTop: "0.25rem",
                        display: "block",
                      }}
                    >
                      {exp.role}
                    </span>

                    <span
                      style={{
                        fontSize: "0.74rem",
                        color: "var(--text-muted)",
                        marginTop: "0.35rem",
                        display: "block",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ArrowRight
                    size={17}
                    color={isActive ? "#242735" : "#A2A098"}
                    style={{
                      transform: isActive ? "translateX(4px)" : "none",
                      transition: "transform 0.2s ease",
                      flexShrink: 0,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Company Deep-Dive Showcase */}
          <div
            className="interactive-card"
            style={{
              padding: "clamp(2rem, 3.5vw, 2.75rem)",
              borderRadius: "20px",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid var(--canvas-border)",
              boxShadow: "0 16px 36px -10px rgba(36, 39, 53, 0.08)",
            }}
          >
            {/* Top Detail Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1.25rem",
                borderBottom: "1px solid #ECE7D9",
                paddingBottom: "1.75rem",
                marginBottom: "1.75rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.4rem" }}>
                  <Building2 size={18} color={currentExp.badgeColor} />
                  <span
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: currentExp.badgeColor,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {currentExp.type} Role
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 1.85rem)",
                    fontWeight: 800,
                    color: "var(--text-headline)",
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {currentExp.role}
                </h3>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#4A5568",
                    marginTop: "0.35rem",
                    display: "block",
                  }}
                >
                  {currentExp.company}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "0.35rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  <Calendar size={15} />
                  <span>{currentExp.period}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 500 }}>
                  <MapPin size={15} />
                  <span>{currentExp.location}</span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <p
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--text-headline)",
                lineHeight: 1.5,
                margin: "0 0 1.5rem 0",
              }}
            >
              {currentExp.tagline}
            </p>

            {/* Metrics Ribbon */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "1rem",
                marginBottom: "2rem",
              }}
            >
              {currentExp.metrics.map((metric, i) => (
                <div
                  key={i}
                  style={{
                    padding: "1rem 1.15rem",
                    borderRadius: "12px",
                    backgroundColor: "#FAF9F5",
                    border: "1px solid #ECE7D9",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {metric.label}
                  </span>
                  <span
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: 800,
                      color: "var(--text-headline)",
                      display: "block",
                      lineHeight: 1.1,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {metric.value}
                  </span>
                  <span
                    style={{
                      fontSize: "0.74rem",
                      color: "#6B7280",
                      display: "block",
                    }}
                  >
                    {metric.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* Key Accomplishments Checklist */}
            <div style={{ marginBottom: "2rem" }}>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "1rem",
                }}
              >
                Key Responsibilities &amp; Impact
              </span>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {currentExp.description.map((point, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.92rem",
                      color: "#374151",
                      lineHeight: 1.55,
                    }}
                  >
                    <CheckCircle2
                      size={17}
                      color="#059669"
                      style={{ flexShrink: 0, marginTop: "0.2rem" }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Applied */}
            <div
              style={{
                borderTop: "1px solid #ECE7D9",
                paddingTop: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  display: "block",
                  marginBottom: "0.75rem",
                }}
              >
                Technologies Applied
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {currentExp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="pill-chip"
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: skill === "Angular" ? "#FFF5F5" : "#FAF9F5",
                      color: skill === "Angular" ? "#C53030" : "var(--text-headline)",
                      border: skill === "Angular" ? "1px solid #FEB2B2" : "1px solid #E5E1D7",
                    }}
                  >
                    {skill === "Angular" ? "⭐ Angular" : skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
