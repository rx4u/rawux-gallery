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

export default function Home() {
  const projects = portfolioData.case_studies as Project[];
  const { types, industries } = deriveFilters(projects);
  const enriched = projects.map(enrichProject);

  return (
    <div className="dot-grid min-h-screen flex flex-col">
      <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-black tracking-[0.25em] uppercase text-accent-green">
              Raw UX
            </h1>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted-foreground mt-1">
              Design. AI. Product. Leadership.
            </p>
          </div>
          <a
            href="https://rajaraman.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-muted-foreground hover:text-accent-green transition-colors"
          >
            About Raja
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 flex-1 w-full">
        <Gallery projects={enriched} types={types} industries={industries} />
      </main>

      <footer className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Built by Raja &middot; 20 years in product design
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://rajaraman.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent-green transition-colors"
            >
              Portfolio
            </a>
            <a
              href="https://dribbble.com/raja-raman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent-green transition-colors"
            >
              Dribbble
            </a>
            <a
              href="https://linkedin.com/in/dsgnr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-accent-green transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
