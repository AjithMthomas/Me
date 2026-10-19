"use client";

import React from "react";
import { Award, Trophy, Star, CheckCircle2 } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy size={22} color="#D97706" />,
      title: "1st Place Winner — Smart India Hackathon Track",
      organization: "National Innovation Contest",
      year: "2024",
      desc: "Architected an AI-powered diagnostic and workflow automation system recognized for exceptional execution and user-centric frontend interface.",
    },
    {
      icon: <Award size={22} color="#2563EB" />,
      title: "Meta Certified Frontend Developer",
      organization: "Meta / Coursera",
      year: "2023",
      desc: "Demonstrated advanced proficiency in React, modern JavaScript, UI/UX design architecture, version control, and frontend testing suites.",
    },
    {
      icon: <Star size={22} color="#7C3AED" />,
      title: "Outstanding Project Excellence Award",
      organization: "Engineering Showcase",
      year: "2024",
      desc: "Awarded top distinction for building a responsive, accessible web platform serving thousands of monthly active community users.",
    },
    {
      icon: <CheckCircle2 size={22} color="#059669" />,
      title: "AWS Certified Cloud Practitioner",
      organization: "Amazon Web Services",
      year: "2023",
      desc: "Validated understanding of cloud infrastructure, security models, deployment pipelines, and scalable microservices.",
    },
  ];

  return (
    <section
      id="achievements"
      style={{
        padding: "7rem 3.5rem",
        backgroundColor: "var(--canvas-bg)",
        borderTop: "1px solid var(--canvas-border)",
        position: "relative",
        zIndex: 5,
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              display: "block",
              marginBottom: "0.8rem",
            }}
          >
            RECOGNITION &amp; CERTIFICATIONS
          </span>
          <h2
            style={{
              fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)",
              fontWeight: 700,
              color: "var(--text-headline)",
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
            }}
          >
            Achievements &amp; Honors
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {achievements.map((item, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.65)",
                border: "1px solid var(--canvas-border)",
                borderRadius: "16px",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 10px 24px rgba(36, 39, 53, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.65)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "1.2rem",
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      backgroundColor: "#F4EFE2",
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
                      fontWeight: 600,
                      color: "var(--text-muted)",
                    }}
                  >
                    {item.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--text-headline)",
                    marginBottom: "0.4rem",
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <h4
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: 500,
                    color: "#525968",
                    marginBottom: "0.9rem",
                  }}
                >
                  {item.organization}
                </h4>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--text-muted)",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
