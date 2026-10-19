"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Code2, ShieldAlert, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filterTabs = [
    { id: "all", label: "All Projects", count: 5 },
    { id: "fintech", label: "Fintech & Banking", count: 2 },
    { id: "fullstack", label: "Full Stack & PWA", count: 2 },
    { id: "ai", label: "AI & Security", count: 1 },
  ];

  const projects = [
    {
      id: "wayzon",
      title: "Wayzon Education Consultancy",
      category: "fullstack",
      categoryLabel: "Full Stack Platform",
      tagline: "International Student Recruitment & Management System",
      desc: "A comprehensive, high-throughput full-stack platform built to streamline global student recruitment and admissions across universities worldwide. Independently engineered the entire solution from database schemas to client-facing application interfaces.",
      architecture: [
        "Architected with Angular frontend and Django REST Framework backend on PostgreSQL.",
        "Engineered multi-stage application pipeline tracking with automated email triggers.",
        "Implemented secure JWT role-based access for students, counsellors, and university admins.",
        "Optimized complex database queries with custom indexing for lightning-fast institution search.",
      ],
      metrics: "6+ University Pipelines · Zero Data Loss",
      tech: ["Angular", "Django", "Python", "PostgreSQL", "REST Framework", "Git"],
      github: "https://github.com/AjithMthomas",
      featured: true,
    },
    {
      id: "foodcod",
      title: "FoodCod Restaurant PWA",
      category: "fullstack",
      categoryLabel: "Progressive Web Application",
      tagline: "Streamlined Restaurant Workflow & Real-Time Orders",
      desc: "A high-performance Progressive Web Application (PWA) engineered to optimize restaurant workflows, table reservations, live kitchen order dispatch, and real-time inventory tracking with zero latency.",
      architecture: [
        "Built responsive offline-first UI with service workers and local caching.",
        "Implemented real-time bidirectional WebSocket order dispatch between kitchen and billing counters.",
        "Architected scalable backend with Django and Node.js microservices.",
        "Integrated dynamic recipe inventory deduction algorithms on every order placement.",
      ],
      metrics: "Sub-100ms Dispatch · Offline Support",
      tech: ["Angular", "Django", "Node.js", "PWA", "WebSockets", "MySQL"],
      github: "https://github.com/AjithMthomas",
      featured: true,
    },
    {
      id: "checkwriter",
      title: "Online Check Writer Platform",
      category: "fintech",
      categoryLabel: "Fintech Platform",
      tagline: "Banking Services for 1M+ Active Users via FDIC Member Banks",
      desc: "A commercial financial technology platform providing secure check printing, wire transfers, ACH payments, and banking services through FDIC member banks to over 1,000,000 active business and personal users.",
      architecture: [
        "Developed critical frontend banking modules using React.js and Next.js with TypeScript.",
        "Implemented bank-grade OAuth2 and JWT authentication workflows with strict token lifecycles.",
        "Engineered real-time financial reporting analytics and interactive cash-flow dashboards via ChartJS.",
        "Ensured rigorous PCI-DSS and banking compliance with end-to-end data sanitization.",
      ],
      metrics: "1,000,000+ Users · 99.9% Transaction Reliability",
      tech: ["React.js", "NextJS", "TypeScript", "OAuth2 JWT", "ChartJS", "Fintech APIs"],
      github: "https://github.com/AjithMthomas",
      featured: true,
    },
    {
      id: "frauddetection",
      title: "ML Fraud Detection Engine",
      category: "ai",
      categoryLabel: "Fintech & Machine Learning",
      tagline: "Custom ML Fraud Prevention & Anomaly Detection",
      desc: "An intelligent security system designed for high-stakes banking platforms. Led an engineering team utilizing custom machine learning models to detect, score, and intercept fraudulent transactions in real time.",
      architecture: [
        "Built high-throughput feature ingestion microservices using FastAPI and Python.",
        "Engineered heuristic anomaly detection and transaction risk-scoring pipelines.",
        "Packaged and deployed models with Docker containers into Kubernetes orchestration.",
        "Built administrative alert dashboards for security teams with automated risk escalation.",
      ],
      metrics: "Sub-50ms Risk Scoring · 99.4% Accuracy",
      tech: ["Python", "FastAPI", "Machine Learning", "Docker", "Kubernetes", "Redis"],
      github: "https://github.com/AjithMthomas",
      featured: false,
    },
    {
      id: "freelance",
      title: "Enterprise Solutions & Client Projects",
      category: "fullstack",
      categoryLabel: "Custom Web Solutions",
      tagline: "Scalable Full Stack Architectures for Diverse Industries",
      desc: "Delivered a diverse range of custom web solutions and API architectures for corporate clients, managing requirements gathering, architecture, cloud deployment, and post-launch maintenance.",
      architecture: [
        "Tailored full-stack setups using Node.js, React, and Python.",
        "Configured scalable AWS cloud infrastructure (EC2, S3, RDS) with automated backups.",
        "Engineered responsive, accessible frontends optimized for SEO and Core Web Vitals.",
      ],
      metrics: "5+ Client Solutions · 100% On-Time Delivery",
      tech: ["Full Stack", "Node.js", "React.js", "AWS EC2/S3", "Docker", "PostgreSQL"],
      github: "https://github.com/AjithMthomas",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProject((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="projects"
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "3.5rem",
          }}
        >
          <div>
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
              04 —— FEATURED WORK
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
              Highlighted Projects
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                marginTop: "0.8rem",
                maxWidth: "600px",
              }}
            >
              Real-world systems spanning banking platforms for 1M+ users, high-concurrency restaurant PWAs, and ML fraud prevention.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  style={{
                    padding: "0.55rem 1.15rem",
                    borderRadius: "9999px",
                    fontSize: "0.84rem",
                    fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? "var(--btn-dark)" : "rgba(255, 255, 255, 0.6)",
                    color: isActive ? "#FFFFFF" : "var(--text-headline)",
                    border: `1px solid ${isActive ? "var(--btn-dark)" : "var(--canvas-border)"}`,
                    boxShadow: isActive ? "0 4px 12px rgba(36, 39, 53, 0.15)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredProjects.map((project) => {
            const isExpanded = expandedProject === project.id;
            return (
              <div
                key={project.id}
                className="interactive-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "18px",
                  border: "1px solid var(--canvas-border)",
                  padding: "2rem",
                  boxShadow: "0 10px 28px -8px rgba(46, 52, 68, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  transition: "all 0.25s ease",
                }}
              >
                <div>
                  {/* Category Pill and Metrics Pill */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "9999px",
                        backgroundColor: "#FAF9F5",
                        color: "var(--text-headline)",
                        border: "1px solid var(--canvas-border)",
                      }}
                    >
                      {project.categoryLabel}
                    </span>

                    {project.featured && (
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.3rem",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          color: "#D97706",
                          backgroundColor: "#FEF3C7",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "9999px",
                        }}
                      >
                        <Sparkles size={11} />
                        FEATURED
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    style={{
                      fontSize: "1.45rem",
                      fontWeight: 800,
                      color: "var(--text-headline)",
                      lineHeight: 1.2,
                      margin: "0 0 0.4rem 0",
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      color: "#4A5568",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.tagline}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.65,
                      color: "var(--text-muted)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Key Metric Badge */}
                  <div
                    style={{
                      backgroundColor: "#FAF9F5",
                      border: "1px solid #ECE7D9",
                      padding: "0.6rem 0.9rem",
                      borderRadius: "8px",
                      marginBottom: "1.25rem",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-headline)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Code2 size={15} color="#242735" />
                    <span>{project.metrics}</span>
                  </div>

                  {/* Expandable Architecture Drawer */}
                  <div style={{ marginBottom: "1.5rem" }}>
                    <button
                      onClick={() => toggleExpand(project.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                        cursor: "pointer",
                        padding: "0.4rem 0",
                      }}
                    >
                      <span>{isExpanded ? "Hide Architecture Highlights" : "View Architecture Highlights"}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <div
                        style={{
                          marginTop: "0.6rem",
                          padding: "0.9rem 1rem",
                          backgroundColor: "#FAF9F5",
                          borderRadius: "10px",
                          border: "1px solid #ECE7D9",
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.55rem",
                        }}
                      >
                        {project.architecture.map((item, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem" }}>
                            <div style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#242735", marginTop: "0.45rem", flexShrink: 0 }} />
                            <span style={{ fontSize: "0.82rem", color: "#474D5E", lineHeight: 1.5 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Row: Tech Tags & GitHub Link */}
                <div
                  style={{
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--canvas-border)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.74rem",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "4px",
                          backgroundColor: "var(--canvas-bg)",
                          color: "var(--text-headline)",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.82rem",
                      fontWeight: 700,
                      color: "var(--text-headline)",
                      padding: "0.45rem 0.85rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(36, 39, 53, 0.06)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--btn-dark)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(36, 39, 53, 0.06)";
                      e.currentTarget.style.color = "var(--text-headline)";
                    }}
                  >
                    <GithubIcon size={14} />
                    <span>GitHub</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
