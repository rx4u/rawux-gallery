import Image from "next/image";
import { Dot, Headline, Pagination, BtnPrimary, BtnOutline, AnnotationCard } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const pillars = [
  { num: "01", title: "Design Systems", desc: "Scalable foundations that unify product language across every surface and state." },
  { num: "02", title: "AI Product Design", desc: "Interfaces for models, agents, and intelligent workflows that feel human." },
  { num: "03", title: "Design Leadership", desc: "Building teams, rituals, and culture that ship with intention and clarity." },
  { num: "04", title: "Full-Stack Craft", desc: "From research to code. Design that ships, not decks that sit." },
];

export function PhilosophySection() {
  return (
    <section id="philosophy" className="cream-texture relative px-6 md:px-16 py-16 md:py-[120px]">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Left */}
        <div className="w-full md:w-[55%]">
          <Pagination label="PHILOSOPHY" num="2" />
          <Headline text="Clear thinking produces fast shipping." />

          <p
            style={{
              ...ff.sans,
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "#6B6560",
              maxWidth: 480,
              margin: "28px 0 48px 0",
            }}
          >
            The 21 days work because the process is tight, not because corners are cut. We treat every product decision as a hypothesis, every interface as evidence of intention.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.num}>
                <div style={{ ...ff.mono, fontSize: "0.8rem", color: "#C0452A", marginBottom: 8 }}>{p.num}</div>
                <div style={{ ...ff.fraunces, fontSize: "1.25rem", color: "#1A1A1A", marginBottom: 6 }}>{p.title}</div>
                <div style={{ ...ff.sans, fontSize: "0.9rem", lineHeight: 1.55, color: "#6B6560" }}>{p.desc}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-12">
            <BtnPrimary href="/work" className="w-full sm:w-auto">See the work</BtnPrimary>
            <BtnOutline href="#process" className="w-full sm:w-auto">Our process</BtnOutline>
          </div>
        </div>

        {/* Right: collage — desktop only */}
        <div className="hidden md:block" style={{ width: "45%", position: "relative", minHeight: 400 }}>
          {/* Main shot */}
          <div className="absolute" style={{ top: 40, right: 0, width: "80%", height: 260, overflow: "hidden" }}>
            <Image src="/shots/precis-ai-v2.png" alt="Precis AI product" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            <div className="absolute" style={{ bottom: 12, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
              fig. 04 / ai product
            </div>
          </div>

          {/* Smaller shot below */}
          <div className="absolute" style={{ top: 280, left: 0, width: "55%", height: 150, overflow: "hidden" }}>
            <Image src="/shots/agentdeck.png" alt="AgentDeck dashboard" fill style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>

          <div className="absolute" style={{ top: 0, left: 0, zIndex: 5 }}>
            <AnnotationCard label="OBSERVATION" value="PATTERN RECOGNITION IS DESIGN" dark={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
