"use client";

import React, { useState } from "react";
import {
  Search,
  Sparkles,
  Layers,
  CheckCircle2,
  Terminal,
  Layout,
  Server,
  Cloud,
  Database,
  X,
  Code2,
  Cpu,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All Skills", count: 23 },
    { id: "frameworks", label: "Frameworks & Libs", count: 8 },
    { id: "languages", label: "Languages", count: 6 },
    { id: "cloud", label: "Cloud & DevOps", count: 3 },
    { id: "databases", label: "Databases", count: 3 },
    { id: "expertise", label: "Specialized", count: 5 },
  ];

  const skills = [
    // Frameworks & Libraries (Top Focus: Angular Flagship)
    {
      name: "Angular",
      category: "frameworks",
      level: "Expert",
      proficiency: 96,
      exp: "3+ yrs",
      projects: ["Wayzon", "FoodCod PWA", "Zil Money", "Neeraali"],
      highlight: true,
      flagship: true,
      summary: "Primary enterprise framework for scalable, modular SPA architectures with RxJS state management.",
    },
    {
      name: "React.js",
      category: "frameworks",
      level: "Expert",
      proficiency: 94,
      exp: "3+ yrs",
      projects: ["Online Check Writer", "Portfolio", "Client Apps"],
      highlight: true,
      flagship: false,
      summary: "Modern component-driven UI with Hooks, Context API, and high-performance virtual DOM rendering.",
    },
    {
      name: "NextJS",
      category: "frameworks",
      level: "Expert",
      proficiency: 92,
      exp: "2.5+ yrs",
      projects: ["Fintech Portals", "High-Performance SSR"],
      highlight: true,
      flagship: false,
      summary: "Server-side rendering, App Router, incremental static regeneration & Turbopack deployment.",
    },
    {
      name: "Django",
      category: "frameworks",
      level: "Expert",
      proficiency: 93,
      exp: "3+ yrs",
      projects: ["Wayzon", "FoodCod PWA", "Neeraali"],
      highlight: true,
      flagship: false,
      summary: "Enterprise Python backend, ORM optimization, secure session handling, and REST frameworks.",
    },
    {
      name: "FastAPI",
      category: "frameworks",
      level: "Advanced",
      proficiency: 88,
      exp: "2+ yrs",
      projects: ["Zil Money Fraud Detection", "Microservices"],
      highlight: true,
      flagship: false,
      summary: "Asynchronous high-throughput REST APIs with automatic OpenAPI docs and Pydantic validation.",
    },
    {
      name: "Node.js",
      category: "frameworks",
      level: "Expert",
      proficiency: 91,
      exp: "3+ yrs",
      projects: ["Neeraali Apps", "REST APIs", "Event Engines"],
      highlight: true,
      flagship: false,
      summary: "Event-driven asynchronous microservices, custom middleware, and WebSocket servers.",
    },
    {
      name: "Flutter",
      category: "frameworks",
      level: "Advanced",
      proficiency: 82,
      exp: "1.5+ yrs",
      projects: ["Cross-Platform Mobile"],
      highlight: false,
      flagship: false,
      summary: "Cross-platform mobile interfaces with reactive state trees and custom widgets.",
    },
    {
      name: "Pydantic",
      category: "frameworks",
      level: "Advanced",
      proficiency: 89,
      exp: "2+ yrs",
      projects: ["FastAPI Data Validation & Schemas"],
      highlight: false,
      flagship: false,
      summary: "Strict type enforcement, data parsing, and runtime schema validation for Python.",
    },

    // Languages
    {
      name: "Python",
      category: "languages",
      level: "Expert",
      proficiency: 95,
      exp: "4+ yrs",
      projects: ["Fraud Detection", "Wayzon", "APIs"],
      highlight: true,
      flagship: false,
      summary: "Core language for backend microservices, algorithmic pipelines, and data systems.",
    },
    {
      name: "JavaScript (ES6+)",
      category: "languages",
      level: "Expert",
      proficiency: 96,
      exp: "4+ yrs",
      projects: ["Online Check Writer", "Neeraali", "FoodCod"],
      highlight: true,
      flagship: false,
      summary: "Modern ECMAScript, closures, asynchronous promises, and browser runtime performance.",
    },
    {
      name: "TypeScript",
      category: "languages",
      level: "Advanced",
      proficiency: 90,
      exp: "2+ yrs",
      projects: ["Online Check Writer", "Next.js Architecture"],
      highlight: true,
      flagship: false,
      summary: "Strict type modeling, interfaces, generics, and compile-time contract enforcement.",
    },
    {
      name: "Dart",
      category: "languages",
      level: "Advanced",
      proficiency: 80,
      exp: "1.5+ yrs",
      projects: ["Flutter Cross-Platform"],
      highlight: false,
      flagship: false,
      summary: "Object-oriented language for mobile client architectures.",
    },
    {
      name: "HTML5",
      category: "languages",
      level: "Expert",
      proficiency: 98,
      exp: "4+ yrs",
      projects: ["Semantic Web Architecture"],
      highlight: false,
      flagship: false,
      summary: "Semantic structure, accessibility standards (WCAG), and responsive metadata.",
    },
    {
      name: "CSS3 / Vanilla CSS",
      category: "languages",
      level: "Expert",
      proficiency: 95,
      exp: "4+ yrs",
      projects: ["Responsive Design Systems"],
      highlight: false,
      flagship: false,
      summary: "Modern CSS Grid, Flexbox, custom design tokens, glassmorphism, and micro-animations.",
    },

    // Cloud & DevOps
    {
      name: "AWS (EC2, RDS, S3)",
      category: "cloud",
      level: "Advanced",
      proficiency: 88,
      exp: "2+ yrs",
      projects: ["Cloud Deployments & Object Storage"],
      highlight: true,
      flagship: false,
      summary: "Cloud infrastructure provisioning, scalable EC2 instances, S3 media buckets, and RDS instances.",
    },
    {
      name: "Docker",
      category: "cloud",
      level: "Advanced",
      proficiency: 87,
      exp: "2+ yrs",
      projects: ["Containerized Microservices"],
      highlight: true,
      flagship: false,
      summary: "Containerization, multi-stage Dockerfiles, network isolation, and microservice bundling.",
    },
    {
      name: "Kubernetes",
      category: "cloud",
      level: "Intermediate",
      proficiency: 78,
      exp: "1+ yr",
      projects: ["Zil Money Container Orchestration"],
      highlight: false,
      flagship: false,
      summary: "Pod management, service definitions, horizontal scaling, and cluster rollout strategies.",
    },

    // Databases
    {
      name: "PostgreSQL",
      category: "databases",
      level: "Expert",
      proficiency: 94,
      exp: "3+ yrs",
      projects: ["Wayzon Education", "Production Relational DBs"],
      highlight: true,
      flagship: false,
      summary: "ACID transactions, relational schema design, foreign keys, and complex analytical queries.",
    },
    {
      name: "SQL",
      category: "databases",
      level: "Expert",
      proficiency: 94,
      exp: "4+ yrs",
      projects: ["Query Optimization & Indexing"],
      highlight: true,
      flagship: false,
      summary: "Query performance tuning, indexing strategies, CTEs, and schema migrations.",
    },
    {
      name: "MySQL",
      category: "databases",
      level: "Advanced",
      proficiency: 89,
      exp: "3+ yrs",
      projects: ["FoodCod PWA & Enterprise Apps"],
      highlight: false,
      flagship: false,
      summary: "High-throughput database tables, replication configurations, and relational queries.",
    },

    // Specialized
    {
      name: "Django REST Framework",
      category: "expertise",
      level: "Expert",
      proficiency: 94,
      exp: "3+ yrs",
      projects: ["Wayzon", "High-throughput APIs"],
      highlight: true,
      flagship: false,
      summary: "Model serializers, custom viewsets, permission classes, and pagination.",
    },
    {
      name: "OAuth2 & JWT",
      category: "expertise",
      level: "Advanced",
      proficiency: 92,
      exp: "2+ yrs",
      projects: ["Online Check Writer Banking Auth"],
      highlight: true,
      flagship: false,
      summary: "Stateless security, token refresh lifecycles, and role-based access control.",
    },
    {
      name: "ChartJS & Data Viz",
      category: "expertise",
      level: "Advanced",
      proficiency: 86,
      exp: "2+ yrs",
      projects: ["Financial Dashboards & Analytics"],
      highlight: false,
      flagship: false,
      summary: "Real-time canvas charting, financial reporting graphs, and interactive cash-flow dashboards.",
    },
    {
      name: "Git & GitHub CI/CD",
      category: "expertise",
      level: "Expert",
      proficiency: 95,
      exp: "4+ yrs",
      projects: ["Version Control & Automated Pipelines"],
      highlight: false,
      flagship: false,
      summary: "Branching strategies, automated test pipelines, and zero-downtime deployment hooks.",
    },
    {
      name: "Agile & Jira",
      category: "expertise",
      level: "Advanced",
      proficiency: 90,
      exp: "2+ yrs",
      projects: ["Sprint Planning & Milestone Tracking"],
      highlight: false,
      flagship: false,
      summary: "Sprint estimation, backlog prioritization, time-and-material consulting deliverables.",
    },
  ];

  // Filtering
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeTab === "all" || skill.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.projects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (skill.summary && skill.summary.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      style={{
        padding: "7.5rem clamp(2rem, 4.5vw, 4.5rem)",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* Section Header with Tag & Search */}
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
                02 —— TECHNICAL ARSENAL
              </span>
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#DD0031",
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
              Skills, Frameworks &amp; Stack
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
              Production-hardened stack powering commercial fintech platforms, cloud microservices, and high-concurrency web systems.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "340px",
            }}
          >
            <Search
              size={17}
              color="#888680"
              style={{
                position: "absolute",
                left: "1.1rem",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
              }}
            />
            <input
              type="text"
              placeholder="Filter by skill, tool, or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 2.4rem 0.75rem 2.8rem",
                borderRadius: "9999px",
                border: "1.5px solid var(--canvas-border)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.88rem",
                color: "var(--text-headline)",
                outline: "none",
                boxSizing: "border-box",
                transition: "all 0.25s ease",
                boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--text-headline)";
                e.currentTarget.style.boxShadow = "0 0 0 4px rgba(36, 39, 53, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
                e.currentTarget.style.borderColor = "var(--canvas-border)";
                e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.02)";
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                style={{
                  position: "absolute",
                  right: "0.85rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "0.2rem",
                  color: "#9CA3AF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* 4 Architectural Pillars: Elevated with Distinct Glow Accents */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3.2rem",
          }}
        >
          {[
            {
              title: "Frontend Architecture",
              icon: <Layout size={19} color="#DD0031" />,
              accent: "#DD0031",
              tag: "⭐ Core Flagship",
              tech: "Angular (Primary) · React.js · NextJS · TypeScript",
              desc: "Enterprise SPAs, reactive RxJS streams, modular routing & high-performance design systems (Wayzon, FoodCod, Zil Money).",
            },
            {
              title: "Backend & Microservices",
              icon: <Server size={19} color="#4F46E5" />,
              accent: "#4F46E5",
              tag: "High Concurrency",
              tech: "Python · FastAPI · Django · Node.js",
              desc: "Scalable REST APIs, event-driven loops, token authentication, and robust asynchronous data pipelines.",
            },
            {
              title: "Cloud & DevOps",
              icon: <Cloud size={19} color="#059669" />,
              accent: "#059669",
              tag: "Containerized",
              tech: "AWS (EC2, S3, RDS) · Docker · K8s",
              desc: "Multi-stage container builds, automated CI/CD deployments, cloud storage, and reliable production orchestration.",
            },
            {
              title: "Databases & Data Layer",
              icon: <Database size={19} color="#D97706" />,
              accent: "#D97706",
              tag: "ACID Compliant",
              tech: "PostgreSQL · SQL · MySQL · Redis",
              desc: "Optimized relational schemas, high-concurrency transactions, indexing strategies, and data integrity guarantees.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="interactive-card"
              style={{
                padding: "1.6rem 1.5rem",
                borderRadius: "16px",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--canvas-border)",
                borderTop: `3px solid ${pillar.accent}`,
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.85rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "10px",
                      backgroundColor: `${pillar.accent}12`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {pillar.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.2rem 0.55rem",
                      borderRadius: "9999px",
                      backgroundColor: `${pillar.accent}10`,
                      color: pillar.accent,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {pillar.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "var(--text-headline)",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: 600,
                    color: "#374151",
                    margin: "0 0 0.65rem 0",
                    lineHeight: 1.4,
                  }}
                >
                  {pillar.tech}
                </p>
              </div>

              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.5,
                  margin: 0,
                  borderTop: "1px solid #F3F0E6",
                  paddingTop: "0.75rem",
                }}
              >
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Category Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.6rem",
            marginBottom: "2.4rem",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
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
                  gap: "0.5rem",
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    padding: "0.1rem 0.45rem",
                    borderRadius: "9999px",
                    backgroundColor: isActive ? "rgba(255, 255, 255, 0.22)" : "rgba(0, 0, 0, 0.06)",
                    color: isActive ? "#FFFFFF" : "var(--text-muted)",
                  }}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            const isAngular = skill.name === "Angular";

            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                className="interactive-card"
                style={{
                  padding: "1.4rem",
                  borderRadius: "16px",
                  backgroundColor: isAngular
                    ? "#FFFFFF"
                    : isSelected
                    ? "#FFFFFF"
                    : "rgba(255, 255, 255, 0.8)",
                  border: isAngular
                    ? "2px solid #DD0031"
                    : `1.5px solid ${isSelected ? "var(--text-headline)" : "var(--canvas-border)"}`,
                  cursor: "pointer",
                  boxShadow: isAngular
                    ? "0 8px 24px -4px rgba(221, 0, 49, 0.16)"
                    : isSelected
                    ? "0 12px 28px -6px rgba(36, 39, 53, 0.14)"
                    : "0 2px 8px rgba(0, 0, 0, 0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Angular Top Ribbon */}
                {isAngular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: "linear-gradient(90deg, #DD0031 0%, #C3002F 100%)",
                    }}
                  />
                )}

                <div>
                  {/* Top Row: Name, Flagship Badge & Level Pill */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                        <h4
                          style={{
                            fontSize: "1.08rem",
                            fontWeight: 700,
                            color: "var(--text-headline)",
                            margin: 0,
                          }}
                        >
                          {skill.name}
                        </h4>
                        {skill.highlight && (
                          <Sparkles
                            size={14}
                            color={isAngular ? "#DD0031" : "#D97706"}
                          />
                        )}
                      </div>
                      <span
                        style={{
                          fontSize: "0.74rem",
                          color: "var(--text-muted)",
                          marginTop: "0.2rem",
                          display: "block",
                          fontWeight: 500,
                        }}
                      >
                        Experience: {skill.exp}
                      </span>
                    </div>

                    <span
                      style={{
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        padding: "0.22rem 0.58rem",
                        borderRadius: "9999px",
                        backgroundColor:
                          skill.level === "Expert"
                            ? "#EBF8FF"
                            : skill.level === "Advanced"
                            ? "#F0FFF4"
                            : "#FEFCBF",
                        color:
                          skill.level === "Expert"
                            ? "#2B6CB0"
                            : skill.level === "Advanced"
                            ? "#22543D"
                            : "#744210",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  {/* Angular Flagship Banner */}
                  {isAngular && (
                    <div
                      style={{
                        backgroundColor: "#FFF5F5",
                        border: "1px solid #FEB2B2",
                        borderRadius: "6px",
                        padding: "0.35rem 0.6rem",
                        marginBottom: "0.85rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      <ShieldCheck size={14} color="#C53030" />
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          color: "#9B2C2C",
                          letterSpacing: "0.02em",
                        }}
                      >
                        Core Enterprise Flagship
                      </span>
                    </div>
                  )}

                  {/* Proficiency Meter */}
                  <div style={{ marginBottom: "0.85rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "0.68rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "5px",
                        borderRadius: "9999px",
                        backgroundColor: "#EDE8DB",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.proficiency}%`,
                          height: "100%",
                          borderRadius: "9999px",
                          backgroundColor: isAngular
                            ? "#DD0031"
                            : skill.proficiency >= 90
                            ? "#242735"
                            : "#4A5568",
                          transition: "width 0.6s ease",
                        }}
                      />
                    </div>
                  </div>

                  {/* Summary / Use Case */}
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#4B5563",
                      lineHeight: 1.45,
                      margin: "0 0 0.85rem 0",
                    }}
                  >
                    {skill.summary}
                  </p>
                </div>

                {/* Bottom Row: Applied In Projects */}
                <div
                  style={{
                    borderTop: "1px solid #F3F0E6",
                    paddingTop: "0.7rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      display: "block",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Applied in:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {skill.projects.map((proj) => (
                      <span
                        key={proj}
                        style={{
                          fontSize: "0.72rem",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          backgroundColor: isAngular ? "#FEE2E2" : "#F2EEE1",
                          color: isAngular ? "#991B1B" : "var(--text-headline)",
                          fontWeight: 600,
                        }}
                      >
                        {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length === 0 && (
          <div
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              border: "1px dashed var(--canvas-border)",
            }}
          >
            <p style={{ fontSize: "1.1rem", fontWeight: 600, color: "var(--text-headline)", margin: "0 0 0.5rem 0" }}>
              No technologies match &quot;{searchQuery}&quot;
            </p>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: "0 0 1rem 0" }}>
              Try searching for Angular, Python, Django, React, AWS, or Docker.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              style={{
                padding: "0.55rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: "var(--btn-dark)",
                color: "#FFFFFF",
                fontSize: "0.85rem",
                fontWeight: 600,
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
