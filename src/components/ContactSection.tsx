"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedWhatsappUrl, setSubmittedWhatsappUrl] = useState<string>("");

  const emailAddress = "ajithmuzhayamkattil@gmail.com";
  const whatsappNumber = "919562441350";
  const phoneDisplay = "+91 9562441350";

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);

    const messageContext = `*New Contact Inquiry — Portfolio Website*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📧 *Email:* ${formData.email.trim()}
📌 *Subject:* ${formData.subject.trim() || "General Inquiry / Software Opportunity"}

💬 *Message:*
${formData.message.trim()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Delivered directly to Ajith M T via Portfolio Hub_`;

    const encodedText = encodeURIComponent(messageContext);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedText}`;
    setSubmittedWhatsappUrl(whatsappUrl);

    // Open WhatsApp in a new tab / application
    if (typeof window !== "undefined") {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact"
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
            05 —— GET IN TOUCH
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
            Let&apos;s Build Something Great Together
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              marginTop: "0.8rem",
              maxWidth: "600px",
            }}
          >
            Have a project in mind, need full stack architecture expertise, or looking for an impactful addition to your team? Let&apos;s talk.
          </p>
        </div>

        {/* 2-Column Layout: Direct Details + Interactive Form */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: "clamp(2rem, 4vw, 4.5rem)",
            alignItems: "start",
          }}
          className="about-grid-container"
        >
          {/* Left Column: Direct Info & Quick Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {/* Live Availability Card */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid var(--canvas-border)",
                padding: "1.5rem",
                boxShadow: "0 6px 18px -6px rgba(46, 52, 68, 0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.6rem" }}>
                <span
                  style={{
                    width: "9px",
                    height: "9px",
                    borderRadius: "50%",
                    backgroundColor: "#38A169",
                    boxShadow: "0 0 10px #38A169",
                  }}
                />
                <span style={{ fontSize: "0.82rem", fontWeight: 700, letterSpacing: "0.08em", color: "#22543D", textTransform: "uppercase" }}>
                  Available For Opportunities
                </span>
              </div>
              <p style={{ fontSize: "0.92rem", color: "var(--text-headline)", margin: 0, lineHeight: 1.5 }}>
                Open to full-time Full Stack engineering roles, lead development positions, and high-impact advisory contracts.
              </p>
            </div>

            {/* Direct Contact Methods */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid var(--canvas-border)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* Email with One-Click Copy */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "#FAF9F5", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ECE7D9" }}>
                    <Mail size={17} color="#242735" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, display: "block" }}>
                      DIRECT EMAIL
                    </span>
                    <a href={`mailto:${emailAddress}`} style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-headline)" }}>
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.45rem 0.85rem",
                    borderRadius: "9999px",
                    backgroundColor: copiedEmail ? "#F0FFF4" : "#FAF9F5",
                    border: `1px solid ${copiedEmail ? "#68D391" : "#E2DDD2"}`,
                    color: copiedEmail ? "#22543D" : "var(--text-headline)",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {copiedEmail ? <Check size={13} color="#22543D" /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Phone */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "#FAF9F5", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ECE7D9" }}>
                  <Phone size={17} color="#242735" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, display: "block" }}>
                      PHONE / WHATSAPP
                    </span>
                    <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#22543D", backgroundColor: "#F0FFF4", border: "1px solid #C6F6D5", padding: "0.1rem 0.45rem", borderRadius: "9999px" }}>
                      WhatsApp Active
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "0.15rem" }}>
                    <a href="https://wa.me/919562441350" target="_blank" rel="noreferrer" style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-headline)" }}>
                      {phoneDisplay}
                    </a>
                    <a
                      href="https://wa.me/919562441350"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "0.72rem",
                        color: "#25D366",
                        fontWeight: 600,
                        textDecoration: "underline",
                      }}
                    >
                      Chat now ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "38px", height: "38px", borderRadius: "10px", backgroundColor: "#FAF9F5", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #ECE7D9" }}>
                  <MapPin size={17} color="#242735" />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 600, display: "block" }}>
                    LOCATION
                  </span>
                  <span style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-headline)" }}>
                    Bengaluru, Karnataka, India (Open to Remote &amp; Relocation)
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Pills: Resume + Profiles */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="/assets/Ajith_MT_Resume-05-10-26.pdf"
                download="Ajith_MT_Resume-05-10-26.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "var(--btn-dark)",
                  color: "#FFFFFF",
                  padding: "0.72rem 1.4rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  cursor: "pointer",
                }}
              >
                <Download size={15} />
                <span>Download Official CV</span>
              </a>

              <a
                href="https://github.com/AjithMthomas"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--canvas-border)",
                  color: "var(--text-headline)",
                  padding: "0.72rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajithmt1/"
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--canvas-border)",
                  color: "var(--text-headline)",
                  padding: "0.72rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                }}
              >
                <LinkedinIcon size={15} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "18px",
              border: "1px solid var(--canvas-border)",
              padding: "clamp(1.75rem, 3vw, 2.5rem)",
              boxShadow: "0 14px 32px -8px rgba(46, 52, 68, 0.07)",
            }}
          >
            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 800,
                color: "var(--text-headline)",
                marginBottom: "0.4rem",
              }}
            >
              Send a Direct Message
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
              Leave a note below and I will respond to your inquiry within 24 hours.
            </p>

            {isSubmitted ? (
              <div
                style={{
                  backgroundColor: "#F0FFF4",
                  border: "1px solid #9AE6B4",
                  borderRadius: "14px",
                  padding: "2rem",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.85rem",
                }}
              >
                <div style={{ width: "52px", height: "52px", borderRadius: "50%", backgroundColor: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(37, 211, 102, 0.3)" }}>
                  <CheckCircle2 size={28} color="#FFFFFF" />
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#22543D", margin: 0 }}>
                  Connecting to WhatsApp!
                </h4>
                <p style={{ fontSize: "0.9rem", color: "#276749", margin: 0, maxWidth: "420px", lineHeight: 1.55 }}>
                  Your message and project details have been formatted and directed to Ajith&apos;s WhatsApp at <strong>+91 9562441350</strong>.
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
                  {submittedWhatsappUrl && (
                    <a
                      href={submittedWhatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        backgroundColor: "#25D366",
                        color: "#FFFFFF",
                        padding: "0.7rem 1.3rem",
                        borderRadius: "9999px",
                        fontSize: "0.88rem",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        boxShadow: "0 4px 12px rgba(37, 211, 102, 0.25)",
                      }}
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid #9AE6B4",
                      color: "#22543D",
                      padding: "0.7rem 1.2rem",
                      borderRadius: "9999px",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-headline)", display: "block", marginBottom: "0.35rem" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.72rem 0.95rem",
                        borderRadius: "8px",
                        border: "1px solid var(--canvas-border)",
                        backgroundColor: "#FAF9F5",
                        fontSize: "0.9rem",
                        color: "var(--text-headline)",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--text-headline)";
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--canvas-border)";
                        e.currentTarget.style.backgroundColor = "#FAF9F5";
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-headline)", display: "block", marginBottom: "0.35rem" }}>
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.72rem 0.95rem",
                        borderRadius: "8px",
                        border: "1px solid var(--canvas-border)",
                        backgroundColor: "#FAF9F5",
                        fontSize: "0.9rem",
                        color: "var(--text-headline)",
                        outline: "none",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--text-headline)";
                        e.currentTarget.style.backgroundColor = "#FFFFFF";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "var(--canvas-border)";
                        e.currentTarget.style.backgroundColor = "#FAF9F5";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-headline)", display: "block", marginBottom: "0.35rem" }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.72rem 0.95rem",
                      borderRadius: "8px",
                      border: "1px solid var(--canvas-border)",
                      backgroundColor: "#FAF9F5",
                      fontSize: "0.9rem",
                      color: "var(--text-headline)",
                      outline: "none",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--text-headline)";
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--canvas-border)";
                      e.currentTarget.style.backgroundColor = "#FAF9F5";
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-headline)", display: "block", marginBottom: "0.35rem" }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, or engineering role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem 0.95rem",
                      borderRadius: "8px",
                      border: "1px solid var(--canvas-border)",
                      backgroundColor: "#FAF9F5",
                      fontSize: "0.9rem",
                      color: "var(--text-headline)",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "var(--text-headline)";
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "var(--canvas-border)";
                      e.currentTarget.style.backgroundColor = "#FAF9F5";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    backgroundColor: "var(--btn-dark)",
                    color: "#FFFFFF",
                    padding: "0.85rem 1.5rem",
                    borderRadius: "9999px",
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    boxShadow: "0 4px 14px rgba(36, 39, 53, 0.16)",
                    cursor: isSubmitting ? "wait" : "pointer",
                    transition: "all 0.25s ease",
                    marginTop: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "var(--btn-dark-hover)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "var(--btn-dark)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <Send size={15} />
                  <span>{isSubmitting ? "Opening WhatsApp..." : "Send Message via WhatsApp"}</span>
                </button>
                <p style={{ fontSize: "0.78rem", color: "var(--text-muted)", margin: "0.3rem 0 0 0", textAlign: "center", lineHeight: 1.4 }}>
                  💬 Submits directly to Ajith&apos;s WhatsApp (<strong>+91 9562441350</strong>) with your full name, email, subject, and message.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
