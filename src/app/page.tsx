"use client";

import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import WorkSection from "@/components/WorkSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Clean hash from URL bar if present on load while maintaining scroll position
    if (typeof window !== "undefined" && window.location.hash) {
      const targetId = window.location.hash.replace("#", "");
      window.history.replaceState(null, "", window.location.pathname);
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleToggleSpeech = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleResetSpeech = () => {
    setIsPlaying(false);
  };

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "var(--canvas-bg)",
        overflowX: "hidden",
      }}
    >
      {/* Editorial Navigation Bar */}
      <Navigation
        isPlaying={isPlaying}
        onToggleSpeech={handleToggleSpeech}
      />

      {/* Hero Section matching the reference with horizontally centered avatar */}
      <Hero
        isPlaying={isPlaying}
        onToggleSpeech={handleToggleSpeech}
        onResetSpeech={handleResetSpeech}
      />

      {/* Verified Professional Sections from Ajith M T Resume */}
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
