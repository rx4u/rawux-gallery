import Image from "next/image";
import { Dot, BtnPrimary, BtnOutline, Monogram, AnnotationCard } from "./primitives";

const ff = {
  fraunces: { fontFamily: "'Fraunces', serif" } as React.CSSProperties,
  mono: { fontFamily: "'JetBrains Mono', monospace" } as React.CSSProperties,
  sans: { fontFamily: "'Public Sans', sans-serif" } as React.CSSProperties,
};

const navItems = [
  { label: "Work", href: "/work" },
  { label: "Process", href: "#process" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export function HeroSection() {
  return (
    <section id="hero" className="cream-texture relative overflow-hidden min-h-screen">

      {/* Nav */}
      <nav className="flex justify-between items-center px-6 md:px-16 py-5 md:py-7 relative z-10">
        <div style={{ ...ff.fraunces, fontSize: "1.4rem", color: "#1A1A1A" }}>Raw UX</div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ ...ff.sans, fontSize: "0.85rem", letterSpacing: "0.06em", textTransform: "uppercase" as const, color: "#1A1A1A", textDecoration: "none" }}
              className="hover:text-[#C0452A] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile: single CTA */}
        <a
          href="#contact"
          className="md:hidden"
          style={{ ...ff.mono, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1A1A1A", textDecoration: "none" }}
        >
          Contact →
        </a>
      </nav>

      {/* Main content */}
      <div className="flex flex-col md:flex-row px-6 md:px-16 pt-10 md:pt-20 pb-24 md:pb-28 gap-10 relative">

        {/* Left: full on mobile, 40% on desktop */}
        <div className="relative z-[5] w-full md:w-[40%] md:flex-shrink-0">
          <div
            className="flex items-center gap-2 mb-8 md:mb-10"
            style={{ ...ff.mono, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6B6560" }}
          >
            <Dot /> Design. AI. Product. Leadership.
          </div>

          <h1
            style={{
              ...ff.fraunces,
              fontSize: "clamp(2.6rem, 5.5vw, 5.5rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              color: "#1A1A1A",
              margin: "0 0 28px 0",
            }}
          >
            Your product, designed and shipped<span style={{ color: "#C0452A" }}>.</span>
          </h1>

          <p
            style={{
              ...ff.sans,
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "#6B6560",
              margin: "0 0 36px 0",
            }}
          >
            We design, build, and deploy production products in 3 weeks. Not mockups. Not concepts. Shipped.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <BtnPrimary href="/work" className="w-full sm:w-auto">See the work</BtnPrimary>
            <BtnOutline href="#contact" className="w-full sm:w-auto">Start your 21 days</BtnOutline>
          </div>

          <div className="mt-12 md:absolute md:mt-0" style={{ bottom: -40, left: 0 }}>
            <Monogram />
          </div>
        </div>

        {/* Right: Collage — desktop only */}
        <div className="hidden md:block" style={{ width: "60%", position: "relative", minHeight: 520 }}>
          {/* Fig 01: Marketplace — large, top-right */}
          <div className="absolute" style={{ top: 0, right: 0, width: "72%", height: 300, zIndex: 1, overflow: "hidden" }}>
            <Image src="/shots/buillt.png" alt="Buillt marketplace" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            <div className="absolute" style={{ bottom: 12, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
              fig. 01 / marketplace
            </div>
          </div>

          {/* Fig 02: Mobile app — mid-left */}
          <div className="absolute" style={{ top: 70, left: 0, width: "38%", height: 240, zIndex: 2, overflow: "hidden" }}>
            <Image src="/shots/alma-mobile.png" alt="Alma health mobile app" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            <div className="absolute" style={{ bottom: 12, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
              fig. 02 / mobile app
            </div>
          </div>

          {/* Fig 03: Dashboard — lower-right */}
          <div className="absolute" style={{ top: 268, right: 20, width: "50%", height: 210, zIndex: 3, overflow: "hidden" }}>
            <Image src="/shots/orbit-dashboard.png" alt="Orbit ML dashboard" fill style={{ objectFit: "cover", objectPosition: "top" }} />
            <div className="absolute" style={{ bottom: 12, left: 16, ...ff.mono, fontSize: "0.6rem", color: "rgba(255,255,255,0.8)", letterSpacing: "0.12em", textTransform: "uppercase", textShadow: "0 1px 3px rgba(0,0,0,0.6)" }}>
              fig. 03 / dashboard
            </div>
          </div>

          {/* Annotation cards */}
          <div className="absolute" style={{ top: 24, left: "10%", zIndex: 10 }}>
            <AnnotationCard label="COHERENCE" value="0.92" dark={true} />
          </div>
          <div className="absolute" style={{ bottom: 30, left: 20, zIndex: 10 }}>
            <AnnotationCard label="SIGNAL / NOISE" value="HIGH" dark={false} />
          </div>
        </div>
      </div>

      {/* Torn edge */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden z-10">
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full block">
          <path
            d="M0,0 L0,20 Q30,35 60,22 T120,28 T180,18 T240,30 T300,20 T360,32 T420,22 T480,28 T540,18 T600,30 T660,24 T720,32 T780,20 T840,28 T900,22 T960,30 T1020,18 T1080,26 T1140,32 T1200,20 T1260,28 T1320,22 T1380,30 L1440,24 L1440,0 Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    </section>
  );
}
