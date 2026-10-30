"use client";

import React from "react";

export function Dot() {
  return (
    <span
      style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#C0452A", display: "inline-block", flexShrink: 0 }}
    />
  );
}

export function Headline({ text, light = false }: { text: string; light?: boolean }) {
  const color = light ? "#FAF7F2" : "#1A1A1A";
  return (
    <h2
      style={{
        fontFamily: "'Fraunces', serif",
        fontSize: "clamp(2.5rem, 5vw, 5rem)",
        fontWeight: 400,
        letterSpacing: "-0.02em",
        lineHeight: 1.0,
        color,
        margin: 0,
      }}
    >
      {text.replace(/\.$/, "")}
      <span style={{ color: "#C0452A" }}>.</span>
    </h2>
  );
}

export function Monogram({ light = false }: { light?: boolean }) {
  const textColor = light ? "#FAF7F2" : "#1A1A1A";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.8rem",
          color: textColor,
          lineHeight: 1,
        }}
      >
        R <span style={{ color: "#C0452A" }}>/</span> U
      </div>
    </div>
  );
}

export function Pagination({ label, num, light = false }: { label: string; num: string; light?: boolean }) {
  const color = light ? "rgba(229,229,229,0.35)" : "rgba(26,26,26,0.35)";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        marginBottom: 48,
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.6rem",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color,
      }}
    >
      <span>{num}</span>
      <span style={{ flex: 1, height: 1, backgroundColor: "currentColor", opacity: 0.3 }} />
      <span>{label}</span>
    </div>
  );
}

export function BtnPrimary({
  children,
  href,
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const style: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    backgroundColor: "#C0452A",
    color: "#FAF7F2",
    border: "none",
    padding: "16px 32px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  if (href) {
    return <a href={href} style={style} className={className}>{children}</a>;
  }
  return <button style={style} onClick={onClick} className={className}>{children}</button>;
}

export function BtnOutline({
  children,
  href,
  light = false,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
  className?: string;
}) {
  const style: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.75rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    color: light ? "#E5E5E5" : "#1A1A1A",
    border: `1px solid ${light ? "rgba(229,229,229,0.35)" : "rgba(26,26,26,0.35)"}`,
    padding: "16px 32px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  };

  if (href) return <a href={href} style={style} className={className}>{children}</a>;
  return <button style={style} className={className}>{children}</button>;
}

export function AnnotationCard({
  label,
  value,
  dark = false,
}: {
  label: string;
  value: string;
  dark?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: dark ? "#1A1A1A" : "#FAF7F2",
        padding: "28px 24px",
        border: dark ? "none" : "1px solid rgba(26,26,26,0.1)",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "0.55rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#C0452A",
          marginBottom: 12,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: "1.05rem",
          lineHeight: 1.3,
          color: dark ? "#FAF7F2" : "#1A1A1A",
          whiteSpace: "pre-line",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export function FigLabel({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "0.6rem",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: light ? "rgba(229,229,229,0.4)" : "rgba(26,26,26,0.4)",
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      <Dot />
      {text}
    </div>
  );
}

export function TornEdge({ flip = false }: { flip?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: flip ? undefined : -1,
        top: flip ? -1 : undefined,
        left: 0,
        right: 0,
        height: 40,
        overflow: "hidden",
        zIndex: 10,
        transform: flip ? "scaleY(-1)" : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <path
          d="M0,20 C120,5 240,35 360,18 C480,2 600,38 720,22 C840,6 960,36 1080,19 C1200,3 1320,37 1440,20 L1440,40 L0,40 Z"
          fill="#F5F0E8"
        />
      </svg>
    </div>
  );
}
