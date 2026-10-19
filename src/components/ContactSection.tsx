"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Download,
  ArrowUpRight,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
} from "lucide-react";
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
              06 —— GET IN TOUCH
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
            Let&apos;s Build Something Exceptional
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
            Have an engineering challenge, full stack project requirement, or looking for a high-impact developer for your team? Let&apos;s talk.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.35fr",
            gap: "clamp(2rem, 4vw, 4rem)",
            alignItems: "start",
          }}
          className="about-grid-container"
        >
          {/* Left Column: Direct Info & Availability */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Live Availability Beacon Card */}
            <div
              className="interactive-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1.5px solid var(--canvas-border)",
                borderLeft: "4px solid #059669",
                padding: "1.6rem 1.75rem",
                boxShadow: "0 8px 24px -6px rgba(36, 39, 53, 0.05)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.5rem" }}>
                <span
                  className="subtle-pulse"
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#059669",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "#065F46",
                    textTransform: "uppercase",
                  }}
                >
                  Available For Opportunities
                </span>
              </div>
              <p
                style={{
                  fontSize: "0.94rem",
                  color: "var(--text-headline)",
                  margin: 0,
                  lineHeight: 1.55,
                }}
              >
                Open to full-time Full Stack engineering positions, high-throughput backend contracts, and architecture consulting.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.85rem", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                <Clock size={14} />
                <span>Typical response time: within 2 hours</span>
              </div>
            </div>

            {/* Direct Contact Channels Card */}
            <div
              className="interactive-card"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "20px",
                border: "1.5px solid var(--canvas-border)",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.4rem",
                boxShadow: "0 8px 24px -6px rgba(36, 39, 53, 0.05)",
              }}
            >
              {/* Email with One-Click Copy */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "12px",
                      backgroundColor: "#FAF9F5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #ECE7D9",
                    }}
                  >
                    <Mail size={19} color="#242735" />
                  </div>
                  <div>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${emailAddress}`}
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                      }}
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="pill-chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.45rem 0.9rem",
                    borderRadius: "9999px",
                    backgroundColor: copiedEmail ? "#F0FFF4" : "#FAF9F5",
                    border: `1px solid ${copiedEmail ? "#68D391" : "#E2DDD2"}`,
                    color: copiedEmail ? "#065F46" : "var(--text-headline)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  {copiedEmail ? <Check size={14} color="#065F46" /> : <Copy size={14} />}
                  <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                </button>
              </div>

              {/* Phone & WhatsApp */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    backgroundColor: "#FAF9F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ECE7D9",
                  }}
                >
                  <Phone size={19} color="#242735" />
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Phone &amp; WhatsApp
                    </span>
                    <span
                      style={{
                        fontSize: "0.66rem",
                        fontWeight: 700,
                        color: "#065F46",
                        backgroundColor: "#F0FFF4",
                        border: "1px solid #C6F6D5",
                        padding: "0.1rem 0.5rem",
                        borderRadius: "9999px",
                      }}
                    >
                      Instant Chat Active
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "0.2rem" }}>
                    <a
                      href="https://wa.me/919562441350"
                      target="_blank"
                      rel="noreferrer"
                      style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-headline)" }}
                    >
                      {phoneDisplay}
                    </a>
                    <a
                      href="https://wa.me/919562441350"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        fontSize: "0.78rem",
                        color: "#059669",
                        fontWeight: 700,
                        textDecoration: "underline",
                      }}
                    >
                      Chat on WhatsApp ↗
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.85rem" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    backgroundColor: "#FAF9F5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #ECE7D9",
                  }}
                >
                  <MapPin size={19} color="#242735" />
                </div>
                <div>
                  <span style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontWeight: 700, display: "block", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Location
                  </span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text-headline)" }}>
                    Bengaluru, Karnataka, India
                  </span>
                  <span style={{ fontSize: "0.76rem", color: "var(--text-muted)", display: "block", marginTop: "0.15rem" }}>
                    Available for Remote &amp; Global Relocation
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Badges: Download Official Resume + Socials */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <a
                href="/assets/Ajith_MT_Resume-05-10-26.pdf"
                download="Ajith_MT_Resume-05-10-26.pdf"
                target="_blank"
                rel="noreferrer"
                className="pill-chip"
                style={{
                  backgroundColor: "var(--btn-dark)",
                  color: "#FFFFFF",
                  padding: "0.75rem 1.45rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 14px rgba(36, 39, 53, 0.16)",
                  cursor: "pointer",
                }}
              >
                <Download size={15} />
                <span>Download Official CV (PDF)</span>
              </a>

              <a
                href="https://github.com/AjithMthomas"
                target="_blank"
                rel="noreferrer"
                className="pill-chip"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid var(--canvas-border)",
                  color: "var(--text-headline)",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <a
                href="https://www.linkedin.com/in/ajithmt1/"
                target="_blank"
                rel="noreferrer"
                className="pill-chip"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1.5px solid var(--canvas-border)",
                  color: "var(--text-headline)",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.45rem",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.02)",
                }}
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Dispatch Form */}
          <div
            className="interactive-card"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              border: "1.5px solid var(--canvas-border)",
              padding: "clamp(2rem, 3.5vw, 2.75rem)",
              boxShadow: "0 16px 36px -10px rgba(36, 39, 53, 0.08)",
            }}
          >
            <div style={{ marginBottom: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                <MessageSquare size={18} color="#059669" />
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--text-headline)",
                    margin: 0,
                  }}
                >
                  Send a Direct Message
                </h3>
              </div>
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Submitting this form prepares your inquiry and opens directly into Ajith&apos;s WhatsApp with full context.
              </p>
            </div>

            {isSubmitted ? (
              <div
                style={{
                  padding: "2rem",
                  borderRadius: "14px",
                  backgroundColor: "#F0FFF4",
                  border: "1.5px solid #68D391",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#C6F6D5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                  }}
                >
                  <CheckCircle2 size={26} color="#059669" />
                </div>
                <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#065F46", margin: "0 0 0.5rem 0" }}>
                  Message Ready &amp; Dispatched!
                </h4>
                <p style={{ fontSize: "0.92rem", color: "#2F855A", lineHeight: 1.5, margin: "0 0 1.5rem 0" }}>
                  Your inquiry has been compiled and redirected to WhatsApp (+91 9562441350).
                </p>

                {submittedWhatsappUrl && (
                  <a
                    href={submittedWhatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#059669",
                      color: "#FFFFFF",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "9999px",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                    }}
                  >
                    <span>Click here if WhatsApp didn&apos;t open</span>
                    <ArrowUpRight size={15} />
                  </a>
                )}

                <div style={{ marginTop: "1.25rem" }}>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    style={{
                      fontSize: "0.82rem",
                      color: "#4A5568",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.78rem 1rem",
                        borderRadius: "10px",
                        border: "1.5px solid var(--canvas-border)",
                        backgroundColor: "#FAF9F5",
                        fontSize: "0.92rem",
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
                        e.currentTarget.style.backgroundColor = "#FAF9F5";
                        e.currentTarget.style.borderColor = "var(--canvas-border)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: "block",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.78rem 1rem",
                        borderRadius: "10px",
                        border: "1.5px solid var(--canvas-border)",
                        backgroundColor: "#FAF9F5",
                        fontSize: "0.92rem",
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
                        e.currentTarget.style.backgroundColor = "#FAF9F5";
                        e.currentTarget.style.borderColor = "var(--canvas-border)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    style={{
                      display: "block",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "var(--text-headline)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.78rem 1rem",
                      borderRadius: "10px",
                      border: "1.5px solid var(--canvas-border)",
                      backgroundColor: "#FAF9F5",
                      fontSize: "0.92rem",
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
                      e.currentTarget.style.backgroundColor = "#FAF9F5";
                      e.currentTarget.style.borderColor = "var(--canvas-border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
                    <label
                      htmlFor="contact-message"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "var(--text-headline)",
                      }}
                    >
                      Your Message *
                    </label>
                    <span style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>
                      {formData.message.length} characters
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, tech requirements, or role details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.85rem 1rem",
                      borderRadius: "10px",
                      border: "1.5px solid var(--canvas-border)",
                      backgroundColor: "#FAF9F5",
                      fontSize: "0.92rem",
                      color: "var(--text-headline)",
                      outline: "none",
                      boxSizing: "border-box",
                      resize: "vertical",
                      fontFamily: "inherit",
                      lineHeight: 1.5,
                      transition: "all 0.2s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor = "#FFFFFF";
                      e.currentTarget.style.borderColor = "var(--text-headline)";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(36, 39, 53, 0.08)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor = "#FAF9F5";
                      e.currentTarget.style.borderColor = "var(--canvas-border)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="pill-chip"
                  style={{
                    backgroundColor: "var(--btn-dark)",
                    color: "#FFFFFF",
                    padding: "0.95rem 1.75rem",
                    borderRadius: "9999px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.6rem",
                    boxShadow: "0 6px 18px rgba(36, 39, 53, 0.2)",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.25s ease",
                    marginTop: "0.5rem",
                  }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? "Preparing WhatsApp Message..." : "Send Message to WhatsApp"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
