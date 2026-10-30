import { Headline, Pagination } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const capabilities = [
  { title: "AI Product Design", desc: "Interfaces for LLMs, agents, and intelligent workflows.", metric: "CONFIDENCE 0.96", span: 2 },
  { title: "SaaS Platforms", desc: "Dashboards, admin panels, and data-dense products.", metric: "SIGNAL / NOISE HIGH", span: 1 },
  { title: "Landing Pages", desc: "Narrative-driven pages that convert intent into action.", metric: "CONVERSION LAYER", span: 1 },
  { title: "Mobile Apps", desc: "Touch-native experiences from onboarding to retention.", metric: "PLATFORM NATIVE", span: 1 },
  { title: "Design Systems", desc: "Scalable foundations that keep products coherent at scale.", metric: "200+ COMPONENTS", span: 1 },
  { title: "Marketplaces", desc: "Multi-sided platforms with booking flows and role-based experiences.", metric: "5 TEAMS LED", span: 2 },
];

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="px-6 md:px-16 py-16 md:py-[120px] relative"
      style={{ backgroundColor: "#1E1E1E" }}
    >
      <Pagination label="CAPABILITIES" num="5" light={true} />

      <div style={{ marginBottom: 56 }}>
        <Headline text="What we build." light={true} />
      </div>

      {/* Mobile: single column list */}
      <div className="flex flex-col gap-4 md:hidden">
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="green-texture"
            style={{ padding: "28px 24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 140 }}
          >
            <div>
              <div style={{ ...ff.mono, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(229,229,229,0.5)", marginBottom: 12 }}>
                {c.title}
              </div>
              <div style={{ ...ff.sans, fontSize: "0.9rem", lineHeight: 1.55, color: "#E5E5E5" }}>{c.desc}</div>
            </div>
            <div style={{ ...ff.mono, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0452A", marginTop: 16 }}>
              {c.metric}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: 4-column grid with spans */}
      <div
        className="hidden md:grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}
      >
        {capabilities.map((c) => (
          <div
            key={c.title}
            className="green-texture"
            style={{
              gridColumn: `span ${c.span}`,
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 180,
            }}
          >
            <div>
              <div style={{ ...ff.mono, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(229,229,229,0.5)", marginBottom: 12 }}>
                {c.title}
              </div>
              <div style={{ ...ff.sans, fontSize: "0.9rem", lineHeight: 1.55, color: "#E5E5E5" }}>{c.desc}</div>
            </div>
            <div style={{ ...ff.mono, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C0452A", marginTop: 20 }}>
              {c.metric}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
