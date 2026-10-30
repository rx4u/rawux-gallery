import { Dot, Headline, Pagination, AnnotationCard } from "./primitives";

const ff = {
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
};

const designTools = ["Figma", "Claude Design", "Framer"];
const engTools = ["Next.js", "Supabase", "Tailwind", "Vercel", "Claude Code", "Claude API"];

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="cream-texture px-6 md:px-16 py-16 md:py-[120px] relative"
      style={{ backgroundColor: "#FAF7F2" }}
    >
      <Pagination label="TOOLS & STACK" num="6" />

      <div className="flex flex-col md:flex-row gap-12 md:gap-20">
        <div className="flex-1">
          <Headline text="The stack behind the speed." />

          <div style={{ marginTop: 56 }}>
            <div
              style={{
                ...ff.mono,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C0452A",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Dot /> Design
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 48 }}>
              {designTools.map((t) => (
                <div
                  key={t}
                  style={{
                    ...ff.mono,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    color: "#1A1A1A",
                    padding: "10px 18px",
                    backgroundColor: "rgba(245,240,232,0.8)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            <div
              style={{
                ...ff.mono,
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C0452A",
                marginBottom: 20,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Dot /> Engineering
            </div>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              {engTools.map((t) => (
                <div
                  key={t}
                  style={{
                    ...ff.mono,
                    fontSize: "0.8rem",
                    letterSpacing: "0.06em",
                    color: "#1A1A1A",
                    padding: "10px 18px",
                    backgroundColor: "rgba(245,240,232,0.8)",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden md:flex" style={{ width: 280, flexShrink: 0, alignSelf: "center" }}>
          <AnnotationCard label="MODERN STACK" value={"IDEA TO PRODUCTION\nIN 21 DAYS"} dark={true} />
        </div>
      </div>
    </section>
  );
}
