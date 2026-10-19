"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Code2,
  ShieldAlert,
  Sparkles,
  Layers,
  Terminal,
  Activity,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { GithubIcon } from "./Icons";

export default function WorkSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [expandedProject, setExpandedProject] = useState<string | null>("wayzon");

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
      color: "#DD0031",
      slug: "wayzon.edu-platform",
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
      color: "#059669",
      slug: "foodcod.pwa-dispatch",
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
      color: "#2563EB",
      slug: "onlinecheckwriter.fintech",
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
      color: "#7C3AED",
      slug: "fraud-ml.risk-engine",
    },
    {
      id: "freelance",
      title: "Enterprise Solutions & Corporate Apps",
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
      color: "#D97706",
      slug: "enterprise.client-apps",
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
        padding: "7.5rem clamp(2rem, 4.5vw, 4.5rem)",
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
            marginBottom: "3.2rem",
          }}
        >
          <div>
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
                04 —— SELECTED WORKS
              </span>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#2563EB",
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
              Featured Engineering Projects
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
              Real-world commercial platforms ranging from fintech systems with 1M+ active users to real-time PWAs and automated pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.55rem" }}>
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className="pill-chip"
                  style={{
                    padding: "0.55rem 1.15rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive ? "var(--btn-dark)" : "rgba(255, 255, 255, 0.75)",
                    color: isActive ? "#FFFFFF" : "var(--text-headline)",
                    border: `1.5px solid ${isActive ? "var(--btn-dark)" : "var(--canvas-border)"}`,
                    boxShadow: isActive ? "0 4px 14px rgba(36, 39, 53, 0.16)" : "0 1px 3px rgba(0,0,0,0.02)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      padding: "0.1rem 0.45rem",
                      borderRadius: "9999px",
                      backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
                      color: isActive ? "#FFFFFF" : "var(--text-muted)",
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
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
                  borderRadius: "20px",
                  border: "1.5px solid var(--canvas-border)",
                  borderTop: `4px solid ${project.color}`,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px -8px rgba(36, 39, 53, 0.06)",
                }}
              >
                {/* Browser-Chrome Style Header Bar */}
                <div
                  style={{
                    backgroundColor: "#FAF9F5",
                    borderBottom: "1px solid #ECE7D9",
                    padding: "0.85rem 1.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                  }}
                >
                  {/* Traffic light dots + slug */}
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ display: "flex", gap: "6px" }}>
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                      <span style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        backgroundColor: "#FFFFFF",
                        padding: "0.22rem 0.75rem",
                        borderRadius: "9999px",
                        border: "1px solid #E5E1D7",
                        fontSize: "0.74rem",
                        color: "var(--text-muted)",
                        fontFamily: "monospace",
                      }}
                    >
                      <Globe size={12} color="#9CA3AF" />
                      <span>https://{project.slug}</span>
                    </div>
                  </div>

                  {/* Category Pill & Metrics */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        backgroundColor: `${project.color}14`,
                        color: project.color,
                        letterSpacing: "0.03em",
                      }}
                    >
                      {project.categoryLabel}
                    </span>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.65rem",
                        borderRadius: "9999px",
                        backgroundColor: "#FAF3E0",
                        color: "#92400E",
                        border: "1px solid #FDE68A",
                      }}
                    >
                      {project.metrics}
                    </span>
                  </div>
                </div>

                {/* Card Main Body */}
                <div style={{ padding: "clamp(1.75rem, 3vw, 2.5rem)" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: "1.25rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)",
                          fontWeight: 800,
                          color: "var(--text-headline)",
                          margin: "0 0 0.35rem 0",
                          lineHeight: 1.2,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.98rem",
                          fontWeight: 600,
                          color: project.color,
                          margin: 0,
                        }}
                      >
                        {project.tagline}
                      </p>
                    </div>

                    {/* External links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-chip"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.55rem 1.15rem",
                          borderRadius: "9999px",
                          backgroundColor: "#FAF9F5",
                          border: "1px solid #ECE7D9",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "var(--text-headline)",
                          cursor: "pointer",
                        }}
                      >
                        <GithubIcon size={15} />
                        <span>Source</span>
                        <ArrowUpRight size={13} />
                      </a>

                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="pill-chip"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          padding: "0.55rem 1.15rem",
                          borderRadius: "9999px",
                          backgroundColor: isExpanded ? "var(--btn-dark)" : "#FFFFFF",
                          border: `1.5px solid ${isExpanded ? "var(--btn-dark)" : "var(--canvas-border)"}`,
                          color: isExpanded ? "#FFFFFF" : "var(--text-headline)",
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        <span>{isExpanded ? "Hide Blueprint" : "Inspect Architecture"}</span>
                        {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                      </button>
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#4A5568",
                      lineHeight: 1.6,
                      margin: "0 0 1.5rem 0",
                      maxWidth: "1050px",
                    }}
                  >
                    {project.desc}
                  </p>

                  {/* Tech stack badges */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: isExpanded ? "1.75rem" : 0 }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="pill-chip"
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          padding: "0.3rem 0.75rem",
                          borderRadius: "9999px",
                          backgroundColor: t === "Angular" ? "#FFF5F5" : "#FAF9F5",
                          color: t === "Angular" ? "#C53030" : "var(--text-headline)",
                          border: t === "Angular" ? "1px solid #FEB2B2" : "1px solid #ECE7D9",
                        }}
                      >
                        {t === "Angular" ? "⭐ Angular" : t}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Technical Decisions / Architecture Drawer */}
                  {isExpanded && (
                    <div
                      style={{
                        backgroundColor: "#FAF9F5",
                        borderRadius: "14px",
                        border: "1px solid #ECE7D9",
                        padding: "1.6rem 1.75rem",
                        marginTop: "1.25rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
                        <Terminal size={17} color={project.color} />
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--text-headline)",
                          }}
                        >
                          Technical Architecture &amp; Key Solutions
                        </span>
                      </div>

                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                          gap: "1rem",
                        }}
                      >
                        {project.architecture.map((item, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.65rem",
                              backgroundColor: "#FFFFFF",
                              padding: "0.95rem 1.15rem",
                              borderRadius: "10px",
                              border: "1px solid #ECE7D9",
                              fontSize: "0.86rem",
                              color: "#374151",
                              lineHeight: 1.5,
                            }}
                          >
                            <CheckCircle2
                              size={16}
                              color={project.color}
                              style={{ flexShrink: 0, marginTop: "0.15rem" }}
                            />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
