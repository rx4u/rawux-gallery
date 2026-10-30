"use client";

import React, { useState } from "react";
import { Dot, Headline, Pagination, BtnPrimary, Monogram } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const productTypes = ["Web App", "Mobile App", "Landing Page", "Dashboard", "Marketplace", "Other"];
const budgets = ["$3K-5K", "$5K-10K", "$10K-20K", "$20K+"];
const timelines = ["ASAP", "This Month", "Next Month", "Exploring"];
const links = [
  { label: "Dribbble", href: "https://dribbble.com/rawux" },
  { label: "LinkedIn", href: "https://linkedin.com/company/rawux" },
  { label: "X", href: "https://x.com/rawux" },
];

const inputStyle: React.CSSProperties = {
  fontFamily: "'Public Sans', sans-serif",
  fontSize: "0.95rem",
  color: "#E5E5E5",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(229,229,229,0.2)",
  padding: "12px 0",
  width: "100%",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: "0.65rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(229,229,229,0.45)",
  marginBottom: 8,
  display: "block",
};

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brief: "",
    types: [] as string[],
    budget: "",
    timeline: "",
  });

  const toggleType = (t: string) => {
    setForm((prev) => ({
      ...prev,
      types: prev.types.includes(t) ? prev.types.filter((x) => x !== t) : [...prev.types, t],
    }));
  };

  const pillStyle = (selected: boolean): React.CSSProperties => ({
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "10px 18px",
    borderRadius: 999,
    border: selected ? "1px solid #C0452A" : "1px solid rgba(229,229,229,0.25)",
    backgroundColor: selected ? "#C0452A" : "transparent",
    color: selected ? "#FAF7F2" : "rgba(229,229,229,0.7)",
    cursor: "pointer",
    transition: "all 0.15s",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Raw UX Project Brief");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nWhat we're building:\n${form.brief}\n\nProduct Type: ${form.types.join(", ")}\nBudget: ${form.budget}\nTimeline: ${form.timeline}`
    );
    window.location.href = `mailto:hello@rawux.studio?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="px-6 md:px-16 py-16 md:py-[120px] relative"
      style={{ backgroundColor: "#1E1E1E", paddingBottom: 80 }}
    >
      <Pagination label="CONTACT" num="7" light={true} />

      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        {/* Left CTA */}
        <div className="w-full md:w-[40%] md:flex-shrink-0">
          <Headline text="Start your 21 days." light={true} />
          <p
            style={{
              ...ff.sans,
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "rgba(229,229,229,0.65)",
              maxWidth: 380,
              margin: "24px 0 32px 0",
            }}
          >
            Tell us what you want to build. We get back within 24 hours.
          </p>
          <a
            href="mailto:hello@rawux.studio"
            style={{
              ...ff.sans,
              fontSize: "1.05rem",
              color: "#E5E5E5",
              textDecoration: "none",
              borderBottom: "1px solid #6B6560",
              display: "inline-block",
              marginBottom: 28,
            }}
          >
            hello@rawux.studio
          </a>
          <div style={{ display: "flex", gap: 24 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                style={{
                  ...ff.mono,
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6B6560",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right intake form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:flex-1"
          style={{ backgroundColor: "#2A2A2A", padding: "40px 28px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
            <Dot />
            <span style={{ ...ff.mono, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#E5E5E5" }}>
              Project Brief
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text"
                style={inputStyle}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                style={inputStyle}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label style={labelStyle}>What are we building?</label>
              <textarea
                rows={3}
                style={{ ...inputStyle, resize: "vertical" }}
                placeholder="An AI dashboard, a SaaS platform, a marketplace..."
                value={form.brief}
                onChange={(e) => setForm({ ...form, brief: e.target.value })}
              />
            </div>
            <div>
              <label style={labelStyle}>Product Type</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {productTypes.map((t) => (
                  <button key={t} type="button" style={pillStyle(form.types.includes(t))} onClick={() => toggleType(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={labelStyle}>Budget Range</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {budgets.map((b) => (
                  <button key={b} type="button" style={pillStyle(form.budget === b)} onClick={() => setForm({ ...form, budget: b })}>
                    {b}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label style={labelStyle}>Timeline</label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
                {timelines.map((t) => (
                  <button key={t} type="button" style={pillStyle(form.timeline === t)} onClick={() => setForm({ ...form, timeline: t })}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 8 }}>
              <BtnPrimary className="w-full">Send brief</BtnPrimary>
            </div>

            <div
              style={{
                ...ff.mono,
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(229,229,229,0.3)",
                textAlign: "center",
              }}
            >
              We respond within 24 hours.
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: 80,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "1px solid #2D3830",
          paddingTop: 28,
        }}
      >
        <Monogram light={true} />
        <div
          style={{
            ...ff.mono,
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#6B6560",
          }}
        >
          © 2026 Raw UX
        </div>
      </div>
    </section>
  );
}
