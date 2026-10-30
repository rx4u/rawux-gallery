import Image from "next/image";
import { Dot, Headline, Pagination } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const phases = [
  {
    week: "Week 1",
    title: "Discover + Design",
    desc: "Research, decisions, and rapid prototyping. We understand the problem and design the solution in the first 7 days.",
  },
  {
    week: "Week 2",
    title: "Build",
    desc: "Production code. Real data. Integrations. The product takes shape with working functionality.",
  },
  {
    week: "Week 3",
    title: "Ship",
    desc: "Polish, review, deploy. Live on day 21. Every detail intentional, every interaction tested.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="cream-texture relative px-6 md:px-16 py-16 md:py-[120px]" style={{ backgroundColor: "#FAF7F2" }}>
      <Pagination label="PROCESS" num="4" />

      <div style={{ maxWidth: 560, marginBottom: 56 }}>
        <Headline text="How we work." />
        <p
          style={{
            ...ff.sans,
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "#6B6560",
            margin: "24px 0 0 0",
          }}
        >
          Three weeks. From first conversation to deployed product.
        </p>
      </div>

      {/* 3-panel image strip */}
      <div className="hidden md:flex" style={{ width: "100%", height: 220, marginBottom: 48 }}>
        <div className="relative overflow-hidden" style={{ flex: 1 }}>
          <Image src="/shots/agentdeck.png" alt="Discover and design phase" fill style={{ objectFit: "cover", objectPosition: "top" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
          <div className="absolute" style={{ bottom: 14, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            week 01
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ flex: 1 }}>
          <Image src="/shots/novapay.png" alt="Build phase" fill style={{ objectFit: "cover", objectPosition: "top" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
          <div className="absolute" style={{ bottom: 14, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            week 02
          </div>
        </div>
        <div className="relative overflow-hidden" style={{ flex: 1 }}>
          <Image src="/shots/lune-hotel.png" alt="Ship phase" fill style={{ objectFit: "cover", objectPosition: "top" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }} />
          <div className="absolute" style={{ bottom: 14, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            week 03
          </div>
        </div>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {phases.map((p) => (
          <div key={p.week}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <Dot />
            </div>
            <div style={{ ...ff.mono, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0452A", marginBottom: 8 }}>
              {p.week}
            </div>
            <div style={{ ...ff.fraunces, fontSize: "1.3rem", color: "#1A1A1A", marginBottom: 10 }}>
              {p.title}
            </div>
            <div style={{ ...ff.sans, fontSize: "0.9rem", lineHeight: 1.55, color: "#6B6560", marginBottom: 16 }}>
              {p.desc}
            </div>
            <span style={{ ...ff.mono, fontSize: "0.7rem", color: "#C0452A", letterSpacing: "0.06em" }}>→</span>
          </div>
        ))}
      </div>
    </section>
  );
}
