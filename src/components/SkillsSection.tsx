"use client";

import React, { useState } from "react";
import { Search, Sparkles, Layers, CheckCircle2, Terminal } from "lucide-react";

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
    { name: "Angular", category: "frameworks", level: "Expert", exp: "3+ yrs", projects: ["Wayzon", "FoodCod PWA", "Zil Money", "Neeraali"], highlight: true, flagship: true },
    { name: "React.js", category: "frameworks", level: "Expert", exp: "3+ yrs", projects: ["Online Check Writer", "Portfolio", "Client Apps"], highlight: true, flagship: false },
    { name: "NextJS", category: "frameworks", level: "Expert", exp: "2.5+ yrs", projects: ["Fintech Portals", "High-Performance SSR"], highlight: true, flagship: false },
    { name: "Django", category: "frameworks", level: "Expert", exp: "3+ yrs", projects: ["Wayzon", "FoodCod PWA", "Neeraali"], highlight: true, flagship: false },
    { name: "FastAPI", category: "frameworks", level: "Advanced", exp: "2+ yrs", projects: ["Zil Money Fraud Detection", "Microservices"], highlight: true, flagship: false },
    { name: "Node.js", category: "frameworks", level: "Expert", exp: "3+ yrs", projects: ["Neeraali Apps", "REST APIs", "Event Engines"], highlight: true, flagship: false },
    { name: "Flutter", category: "frameworks", level: "Advanced", exp: "1.5+ yrs", projects: ["Cross-Platform Mobile"], highlight: false, flagship: false },
    { name: "Pydantic", category: "frameworks", level: "Advanced", exp: "2+ yrs", projects: ["FastAPI Data Validation & Schemas"], highlight: false, flagship: false },

    // Languages
    { name: "Python", category: "languages", level: "Expert", exp: "4+ yrs", projects: ["Fraud Detection", "Wayzon", "APIs"], highlight: true, flagship: false },
    { name: "JavaScript (ES6+)", category: "languages", level: "Expert", exp: "4+ yrs", projects: ["Online Check Writer", "Neeraali", "FoodCod"], highlight: true, flagship: false },
    { name: "TypeScript", category: "languages", level: "Advanced", exp: "2+ yrs", projects: ["Online Check Writer", "Next.js Architecture"], highlight: true, flagship: false },
    { name: "Dart", category: "languages", level: "Advanced", exp: "1.5+ yrs", projects: ["Flutter Cross-Platform"], highlight: false, flagship: false },
    { name: "HTML5", category: "languages", level: "Expert", exp: "4+ yrs", projects: ["Semantic Web Architecture"], highlight: false, flagship: false },
    { name: "CSS3 / Vanilla CSS", category: "languages", level: "Expert", exp: "4+ yrs", projects: ["Responsive Design Systems"], highlight: false, flagship: false },

    // Cloud & DevOps
    { name: "AWS (EC2, RDS, S3)", category: "cloud", level: "Advanced", exp: "2+ yrs", projects: ["Cloud Deployments & Object Storage"], highlight: true, flagship: false },
    { name: "Docker", category: "cloud", level: "Advanced", exp: "2+ yrs", projects: ["Containerized Microservices"], highlight: true, flagship: false },
    { name: "Kubernetes", category: "cloud", level: "Intermediate", exp: "1+ yr", projects: ["Zil Money Container Orchestration"], highlight: false, flagship: false },

    // Databases
    { name: "PostgreSQL", category: "databases", level: "Expert", exp: "3+ yrs", projects: ["Wayzon Education", "Production Relational DBs"], highlight: true, flagship: false },
    { name: "SQL", category: "databases", level: "Expert", exp: "4+ yrs", projects: ["Query Optimization & Indexing"], highlight: true, flagship: false },
    { name: "MySQL", category: "databases", level: "Advanced", exp: "3+ yrs", projects: ["FoodCod PWA & Enterprise Apps"], highlight: false, flagship: false },

    // Specialized
    { name: "Django REST Framework", category: "expertise", level: "Expert", exp: "3+ yrs", projects: ["Wayzon", "High-throughput APIs"], highlight: true, flagship: false },
    { name: "OAuth2 & JWT", category: "expertise", level: "Advanced", exp: "2+ yrs", projects: ["Online Check Writer Banking Auth"], highlight: true, flagship: false },
    { name: "ChartJS & Data Viz", category: "expertise", level: "Advanced", exp: "2+ yrs", projects: ["Financial Dashboards & Analytics"], highlight: false, flagship: false },
    { name: "Git & GitHub CI/CD", category: "expertise", level: "Expert", exp: "4+ yrs", projects: ["Version Control & Automated Pipelines"], highlight: false, flagship: false },
    { name: "Agile & Jira", category: "expertise", level: "Advanced", exp: "2+ yrs", projects: ["Sprint Planning & Milestone Tracking"], highlight: false, flagship: false },
  ];

  // Filtering
  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeTab === "all" || skill.category === activeTab;
    const matchesSearch =
      searchQuery.trim() === "" ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.projects.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      style={{
        padding: "7rem clamp(2rem, 4.5vw, 4.5rem)",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: "1340px", margin: "0 auto" }}>
        {/* Section Header with Tag */}
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
              02 —— TECHNICAL ARSENAL
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
              Skills, Frameworks &amp; Tools
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--text-muted)",
                marginTop: "0.8rem",
                maxWidth: "600px",
              }}
            >
              Interactive directory of technologies applied across fintech platforms, cloud infrastructures, and high-performance web products.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "320px",
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
              placeholder="Search skill or project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.72rem 1rem 0.72rem 2.8rem",
                borderRadius: "9999px",
                border: "1px solid var(--canvas-border)",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                fontSize: "0.88rem",
                color: "var(--text-headline)",
                outline: "none",
                boxSizing: "border-box",
                transition: "all 0.2s ease",
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.borderColor = "var(--text-headline)";
                e.currentTarget.style.boxShadow = "0 0 0 3px rgba(36, 39, 53, 0.08)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.75)";
                e.currentTarget.style.borderColor = "var(--canvas-border)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        {/* 4 Core Pillars Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.25rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { title: "Frontend Architecture", tech: "Angular (Flagship) · React.js · NextJS · TypeScript", desc: "Production SPAs, PWAs, enterprise modules & state management (Wayzon, FoodCod, Zil Money)" },
            { title: "Backend & Microservices", tech: "Python · FastAPI · Django · Node.js", desc: "Scalable REST APIs, event-driven loops & auth flow" },
            { title: "Cloud & Infrastructure", tech: "AWS (EC2, S3, RDS) · Docker · K8s", desc: "Resilient container deployments with CI/CD" },
            { title: "Databases & Data Layer", tech: "PostgreSQL · SQL · MySQL · ORMs", desc: "Optimized schemas, high-concurrency transactions" },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="interactive-card"
              style={{
                padding: "1.4rem",
                borderRadius: "14px",
                backgroundColor: "#FAF8F0",
                border: "1px solid var(--canvas-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.6rem" }}>
                <Terminal size={17} color="#242735" />
                <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-headline)", margin: 0 }}>
                  {pillar.title}
                </h4>
              </div>
              <p style={{ fontSize: "0.85rem", fontWeight: 600, color: "#4A5568", margin: "0 0 0.4rem 0" }}>
                {pillar.tech}
              </p>
              <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.4, display: "block" }}>
                {pillar.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Category Filter Pills */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.55rem",
            marginBottom: "2.5rem",
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
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
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <span>{cat.label}</span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    padding: "0.1rem 0.45rem",
                    borderRadius: "9999px",
                    backgroundColor: isActive ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.06)",
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
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.1rem",
          }}
        >
          {filteredSkills.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            return (
              <div
                key={skill.name}
                onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
                className="interactive-card"
                style={{
                  padding: "1.25rem 1.35rem",
                  borderRadius: "14px",
                  backgroundColor: skill.name === "Angular" ? "#FFFDF9" : isSelected ? "#FFFFFF" : "rgba(255, 255, 255, 0.75)",
                  border: skill.name === "Angular" ? "2px solid #DD0031" : `1.5px solid ${isSelected ? "var(--text-headline)" : "var(--canvas-border)"}`,
                  cursor: "pointer",
                  boxShadow: skill.name === "Angular"
                    ? "0 8px 20px -4px rgba(221, 0, 49, 0.15)"
                    : isSelected
                    ? "0 12px 24px -6px rgba(36, 39, 53, 0.15)"
                    : "0 2px 6px rgba(0,0,0,0.02)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                }}
              >
                {/* Top Row: Name and Level Pill */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                  <div>
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                        margin: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                      }}
                    >
                      {skill.name}
                      {skill.highlight && <Sparkles size={13} color={skill.name === "Angular" ? "#DD0031" : "#D97706"} />}
                    </h3>
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "0.15rem", display: "block" }}>
                      Experience: {skill.exp}
                    </span>
                    {skill.name === "Angular" && (
                      <span
                        style={{
                          fontSize: "0.64rem",
                          fontWeight: 700,
                          padding: "0.15rem 0.5rem",
                          borderRadius: "4px",
                          backgroundColor: "#FFF5F5",
                          border: "1px solid #FEB2B2",
                          color: "#C53030",
                          display: "inline-block",
                          marginTop: "0.3rem",
                          letterSpacing: "0.03em",
                        }}
                      >
                        ⭐ Core Frontend Flagship
                      </span>
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      padding: "0.22rem 0.55rem",
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

                {/* Bottom Row: Applied In Projects */}
                <div>
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
                          padding: "0.15rem 0.45rem",
                          borderRadius: "4px",
                          backgroundColor: "#F2EEE1",
                          color: "var(--text-headline)",
                          fontWeight: 500,
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
      </div>
    </section>
  );
}
