"use client";

import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, CheckCircle, ArrowRight, TrendingUp } from "lucide-react";

export default function ExperienceSection() {
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);

  const experiences = [
    {
      company: "Neeraali Digital Marketing",
      role: "Full Stack Developer",
      period: "July 2025 – August 2026",
      location: "Bengaluru, India",
      type: "Full-Time",
      tagline: "Architected end-to-end full stack web platforms and scalable client architectures.",
      metrics: [
        { label: "Delivered", value: "6+ Apps" },
        { label: "Lifecycle", value: "End-to-End" },
        { label: "Stack", value: "Node, Django, Angular" },
      ],
      description: [
        "Architected and successfully delivered 6+ full-stack production web applications, managing the complete engineering lifecycle from system design to cloud release.",
        "Engineered robust full-stack solutions using Node.js, Python/Django, Angular, and modern JavaScript, ensuring high performance, responsive UI, and clean code modularity.",
        "Significantly reduced client time-to-market by standardizing RESTful API conventions, streamlining CI/CD workflows, and enforcing automated validation best practices.",
        "Collaborated with UI/UX designers and stakeholders to implement intuitive, accessible user interfaces and reliable state management.",
      ],
      skills: ["Node.js", "Python / Django", "Angular", "JavaScript", "Full Stack Architecture", "API Integration", "Agile Execution"],
    },
    {
      company: "Anvenssa AI Consulting",
      role: "Senior Software Developer",
      period: "January 2026 – February 2026",
      location: "Remote",
      type: "Contract",
      tagline: "Customized Full Stack consulting and rapid milestone delivery on Time & Material basis.",
      metrics: [
        { label: "Model", value: "T&M Basis" },
        { label: "Delivery", value: "100% On-Time" },
        { label: "Focus", value: "Full Stack Architecture" },
      ],
      description: [
        "Provided specialized, high-tempo Full Stack development consulting services on a Time and Material basis.",
        "Delivered critical software milestones within tight deadlines, maintaining rigorous code quality standards and architectural consistency.",
        "Engineered reliable backend endpoints and integrated dynamic frontend components for client-facing software systems.",
        "Conducted code reviews, performance optimizations, and debugging for complex production issues.",
      ],
      skills: ["Full Stack Consulting", "Remote Execution", "Sprint Milestones", "Time & Material", "Rapid Prototyping"],
    },
    {
      company: "Zil Money (MNC)",
      role: "Software Engineer",
      period: "September 2023 – October 2024",
      location: "India",
      type: "Full-Time",
      tagline: "Led core fintech engineering for 1M+ active banking users and custom ML fraud prevention.",
      metrics: [
        { label: "User Base", value: "1M+ Users" },
        { label: "Core Projects", value: "2 Enterprise" },
        { label: "Infra", value: "Docker & K8s" },
      ],
      description: [
        "Led engineering on two flagship company products: a high-throughput Restaurant Management App and an intelligent Fraud Detection ML System.",
        "Constructed resilient fintech microservices using FastAPI, Django, Node.js, and Angular, deployed on Kubernetes and Docker clusters.",
        "Engineered real-time anomaly detection pipelines that intercepted suspicious financial transactions with high precision.",
        "Collaborated closely with cross-functional product teams, security auditors, and banking partners to ensure regulatory compliance and 99.9% availability.",
      ],
      skills: ["FastAPI", "Django", "Node.js", "Angular", "Kubernetes", "Docker", "Fintech Systems", "Machine Learning"],
    },
  ];

  const currentExp = experiences[activeCompanyIndex];

  return (
    <section
      id="experience"
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
            03 —— CAREER TRAJECTORY
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
            Professional Experience
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              marginTop: "0.8rem",
              maxWidth: "600px",
            }}
          >
            Proven track record delivering commercial fintech applications, scalable SaaS systems, and cloud infrastructure.
          </p>
        </div>

        {/* Interactive Experience Layout: Tabs + Active Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(280px, 1fr) 2.2fr",
            gap: "clamp(2rem, 3.5vw, 4rem)",
            alignItems: "start",
          }}
          className="about-grid-container"
        >
          {/* Company Switcher Tabs */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
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
                    padding: "1.35rem 1.4rem",
                    borderRadius: "14px",
                    backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.6)",
                    border: `1.5px solid ${isActive ? "var(--text-headline)" : "var(--canvas-border)"}`,
                    cursor: "pointer",
                    boxShadow: isActive
                      ? "0 10px 24px -6px rgba(36, 39, 53, 0.12)"
                      : "0 2px 4px rgba(0,0,0,0.02)",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: isActive ? 800 : 600,
                        color: "var(--text-headline)",
                        margin: 0,
                      }}
                    >
                      {exp.company}
                    </h3>
                    <span
                      style={{
                        fontSize: "0.82rem",
                        color: isActive ? "var(--text-headline)" : "var(--text-muted)",
                        fontWeight: 500,
                        marginTop: "0.25rem",
                        display: "block",
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginTop: "0.35rem",
                        display: "block",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ArrowRight
                    size={16}
                    color={isActive ? "#242735" : "#A2A098"}
                    style={{
                      transform: isActive ? "translateX(4px)" : "translateX(0)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Active Experience Showcase Card */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              border: "1px solid var(--canvas-border)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              boxShadow: "0 16px 36px -10px rgba(46, 52, 68, 0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top Details Strip */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid var(--canvas-border)",
                marginBottom: "1.75rem",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    display: "block",
                    marginBottom: "0.3rem",
                  }}
                >
                  {currentExp.type} Position
                </span>
                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.4vw, 1.95rem)",
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
                    fontSize: "1.08rem",
                    fontWeight: 600,
                    color: "#4A5568",
                    marginTop: "0.25rem",
                    display: "block",
                  }}
                >
                  @ {currentExp.company}
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  <Calendar size={14} />
                  <span>{currentExp.period}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                  <MapPin size={14} />
                  <span>{currentExp.location}</span>
                </div>
              </div>
            </div>

            {/* Impact Metrics Banner */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
                gap: "1rem",
                backgroundColor: "#FAF9F5",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                border: "1px solid #ECE7D9",
                marginBottom: "1.75rem",
              }}
            >
              {currentExp.metrics.map((m) => (
                <div key={m.label}>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", display: "block" }}>
                    {m.label}
                  </span>
                  <span style={{ fontSize: "1.15rem", fontWeight: 800, color: "var(--text-headline)" }}>
                    {m.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Accomplishment Bullets */}
            <div style={{ marginBottom: "2rem" }}>
              <h4
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Key Responsibilities &amp; Impact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {currentExp.description.map((bullet, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        marginTop: "0.3rem",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#242735",
                        flexShrink: 0,
                      }}
                    />
                    <p
                      style={{
                        fontSize: "0.96rem",
                        lineHeight: 1.65,
                        color: "#3F4555",
                        margin: 0,
                      }}
                    >
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Employed */}
            <div>
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  display: "block",
                  marginBottom: "0.6rem",
                }}
              >
                Technologies Employed
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                {currentExp.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      padding: "0.3rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "var(--canvas-bg)",
                      color: "var(--text-headline)",
                      border: "1px solid var(--canvas-border)",
                    }}
                  >
                    {skill}
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
