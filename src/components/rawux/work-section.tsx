import Image from "next/image";
import { Headline, Pagination, BtnOutline } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const projects = [
  {
    num: "01",
    image: "/shots/orbit-dashboard.png",
    title: "Orbit ML Dashboard",
    desc: "Data-dense ML insights platform with AI-powered pattern recognition and team collaboration.",
    label: "fig. 05 / SaaS dashboard",
    href: "https://orbit.ml",
  },
  {
    num: "02",
    image: "/shots/alma-mobile.png",
    title: "Alma Health Mobile",
    desc: "Symptom tracking app with AI insights and doctor-ready reports.",
    label: "fig. 06 / mobile app",
    light: false,
  },
  {
    num: "03",
    image: "/shots/buillt.png",
    title: "Buillt Marketplace",
    desc: "Two-sided platform connecting businesses with pre-built automation packages.",
    label: "fig. 07 / marketplace",
  },
];

export function WorkSection() {
  const [main, ...rest] = projects;

  return (
    <section id="work" className="cream-texture relative px-6 md:px-16 py-16 md:py-[120px]">
      <Pagination label="SELECTED WORK" num="3" />
      <Headline text="What we shipped." />

      <p
        style={{
          ...ff.sans,
          fontSize: "1.05rem",
          lineHeight: 1.65,
          color: "#6B6560",
          maxWidth: 520,
          margin: "24px 0 56px 0",
        }}
      >
        Products we designed, built, and deployed. Not concepts. Not mockups. Live and running.
      </p>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Large card */}
        <div className="w-full md:flex-[1.5]" style={{ position: "relative" }}>
          <div style={{ ...ff.mono, fontSize: "0.8rem", color: "#C0452A", marginBottom: 12 }}>{main.num}</div>
          <div className="relative mb-4" style={{ height: 300, backgroundColor: "#2D3830", overflow: "hidden" }}>
            <Image
              src={main.image}
              alt={main.title}
              fill
              className="object-cover object-top"
            />
            <div
              className="absolute"
              style={{ bottom: 16, right: 16, backgroundColor: "#1E1E1E", padding: "12px 16px", ...ff.mono, fontSize: "0.65rem", color: "#E5E5E5", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              <div style={{ color: "#6B6560", marginBottom: 4 }}>SHIPPED</div>
              <div>CONFIDENCE 0.96</div>
            </div>
            <div
              className="absolute"
              style={{ bottom: 12, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              {main.label}
            </div>
          </div>
          <div style={{ ...ff.fraunces, fontSize: "1.4rem", color: "#1A1A1A", marginBottom: 6 }}>{main.title}</div>
          <div style={{ ...ff.sans, fontSize: "0.9rem", color: "#6B6560" }}>{main.desc}</div>
        </div>

        {/* Stacked small cards */}
        <div className="w-full md:flex-1 flex flex-col gap-6">
          {rest.map((p) => (
            <div key={p.num}>
              <div style={{ ...ff.mono, fontSize: "0.8rem", color: "#C0452A", marginBottom: 12 }}>{p.num}</div>
              <div
                className="relative mb-3"
                style={{ height: 185, backgroundColor: "#E8DFD0", overflow: "hidden" }}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover object-top"
                />
                <div
                  className="absolute"
                  style={{
                    bottom: 12,
                    left: 16,
                    ...ff.mono,
                    fontSize: "0.6rem",
                    color: p.light === false ? "#6B6560" : "rgba(255,255,255,0.6)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {p.label}
                </div>
              </div>
              <div style={{ ...ff.fraunces, fontSize: "1.15rem", color: "#1A1A1A", marginBottom: 4 }}>{p.title}</div>
              <div style={{ ...ff.sans, fontSize: "0.85rem", color: "#6B6560" }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <BtnOutline href="/work">View all work →</BtnOutline>
      </div>
    </section>
  );
}
