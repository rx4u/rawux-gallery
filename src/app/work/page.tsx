import portfolioData from "@/data/portfolio.json";
import { Gallery } from "@/components/gallery";

export type Project = {
  id: string;
  title: string;
  type: string;
  domain: string[];
  service: string;
  scope: string;
  result: string;
  proof_link: string | null;
  thumbnail: string | null;
  dribbble_shot?: boolean;
  tags: string[];
  date: string | null;
};

const DOMAIN_TO_INDUSTRY: Record<string, string> = {
  "AI/ML platforms": "AI/ML",
  "Developer tools": "AI/ML",
  "Logistics and freight": "Logistics",
  "Health tech": "Healthcare",
  "Community health": "Healthcare",
  EdTech: "EdTech",
  Fintech: "Fintech",
  Crypto: "Crypto",
  "Real estate": "Real Estate",
  Editorial: "Lifestyle",
  Lifestyle: "Lifestyle",
  "F&B": "F&B",
  "D2C": "D2C",
  "SaaS products": "SaaS",
  "Enterprise software": "Enterprise",
};

export type EnrichedProject = Project & { industry: string };

function enrichProject(p: Project): EnrichedProject {
  let industry = "Other";
  for (const d of p.domain) {
    const ind = DOMAIN_TO_INDUSTRY[d];
    if (ind) {
      industry = ind;
      break;
    }
  }
  return { ...p, industry };
}

function deriveFilters(projects: Project[]) {
  const types = new Set<string>();
  const industries = new Set<string>();

  for (const p of projects) {
    types.add(p.type);
    for (const d of p.domain) {
      const ind = DOMAIN_TO_INDUSTRY[d];
      if (ind) industries.add(ind);
    }
  }

  return {
    types: Array.from(types).sort(),
    industries: Array.from(industries).sort(),
  };
}

export const metadata = {
  title: "Work — Raw UX",
  description: "Design. AI. Product. Leadership. 20 years of product design work by Raja.",
};

export default function WorkPage() {
  const projects = portfolioData.case_studies as Project[];
  const { types, industries } = deriveFilters(projects);
  const enriched = projects.map(enrichProject);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E8]">
      <header className="border-b border-black/10 sticky top-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-16 py-5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-4">
            <span style={{ fontFamily: "'Fraunces', serif" }} className="text-[1.8rem] text-[#1A1A1A] leading-none">
              R <span className="text-[#C0452A]">/</span> U
            </span>
          </a>
          <a
            href="/"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-[0.7rem] tracking-[0.12em] uppercase text-[#6B6560] hover:text-[#C0452A] transition-colors"
          >
            ← Back
          </a>
        </div>
      </header>

      <main className="max-w-[1440px] mx-auto px-16 py-10 flex-1 w-full">
        <div className="mb-10">
          <h1 style={{ fontFamily: "'Fraunces', serif" }} className="text-5xl font-normal text-[#1A1A1A] mb-2">
            All work<span className="text-[#C0452A]">.</span>
          </h1>
          <p style={{ fontFamily: "'Public Sans', sans-serif" }} className="text-[#6B6560]">
            18 case studies across AI, SaaS, mobile, and more.
          </p>
        </div>
        <Gallery projects={enriched} types={types} industries={industries} />
      </main>

      <footer className="border-t border-black/10">
        <div className="max-w-[1440px] mx-auto px-16 py-8 flex items-center justify-between">
          <p style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[0.6rem] tracking-[0.12em] uppercase text-[#6B6560]">
            © 2026 Raw UX
          </p>
          <a
            href="mailto:hello@rawux.studio"
            style={{ fontFamily: "'Public Sans', sans-serif" }}
            className="text-sm text-[#6B6560] hover:text-[#C0452A] transition-colors"
          >
            hello@rawux.studio
          </a>
        </div>
      </footer>
    </div>
  );
}
