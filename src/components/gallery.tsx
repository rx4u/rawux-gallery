"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import type { EnrichedProject } from "@/app/page";
import { ExternalLink, Globe } from "lucide-react";

type Props = {
  projects: EnrichedProject[];
  types: string[];
  industries: string[];
};

const PLACEHOLDER_COLORS = [
  "#141720",
  "#181C26",
  "#1A1E2A",
  "#151924",
  "#12161E",
  "#191D28",
  "#161A24",
  "#131722",
];

function getPlaceholderColor(id: string) {
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = id.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PLACEHOLDER_COLORS[Math.abs(hash) % PLACEHOLDER_COLORS.length];
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-muted-foreground whitespace-nowrap">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-secondary text-sm text-foreground border border-border/50 rounded-[4px] px-3 py-1.5 outline-none focus:border-accent-green cursor-pointer appearance-none pr-8"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2300E676' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 8px center",
        }}
      >
        <option value="All">All</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function ProjectCard({ project }: { project: EnrichedProject }) {
  const hasLink = !!project.proof_link;
  const displayTags = project.tags.slice(0, 4);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-[6px] border border-border/50 bg-card/60 overflow-hidden hover:border-accent-green-muted transition-all duration-300"
    >
      <div
        className="aspect-[16/10] relative flex items-center justify-center overflow-hidden"
        style={!project.thumbnail ? { backgroundColor: getPlaceholderColor(project.id) } : undefined}
      >
        {project.thumbnail ? (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="font-heading text-lg font-black tracking-wide text-white/50 text-center px-6 uppercase">
            {project.title}
          </span>
        )}
        {!hasLink && (
          <div className="absolute top-3 right-3">
            <span className="text-[0.72rem] font-bold uppercase tracking-[0.14em] bg-black/50 text-white/50 px-2 py-1 rounded-[2px]">
              Concept
            </span>
          </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-heading text-base font-extrabold tracking-tight leading-snug text-foreground group-hover:text-accent-green transition-colors">
            {project.title}
          </h3>
          <Badge
            variant="outline"
            className="text-[0.65rem] font-bold uppercase tracking-[0.08em] px-1.5 py-0 border-accent-green/30 text-accent-green-dim shrink-0"
          >
            {project.type}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.scope}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {displayTags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-[0.72rem] font-bold uppercase tracking-[0.08em] px-2 py-0.5 bg-secondary/60 text-muted-foreground border-0 rounded-[2px]"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {hasLink ? (
          <a
            href={project.proof_link!}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-green hover:text-accent-green-dim transition-colors pt-1"
          >
            <Globe className="w-3.5 h-3.5" />
            View live
            <ExternalLink className="w-3 h-3" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground/50 pt-1">
            <Globe className="w-3.5 h-3.5" />
            Not deployed
          </span>
        )}
      </div>
    </motion.article>
  );
}

export function Gallery({ projects, types, industries }: Props) {
  const [activeType, setActiveType] = useState("All");
  const [activeIndustry, setActiveIndustry] = useState("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (activeType !== "All" && p.type !== activeType) return false;
      if (activeIndustry !== "All" && p.industry !== activeIndustry)
        return false;
      return true;
    });
  }, [projects, activeType, activeIndustry]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-6">
        <FilterSelect
          label="Type"
          value={activeType}
          options={types}
          onChange={setActiveType}
        />
        <FilterSelect
          label="Industry"
          value={activeIndustry}
          options={industries}
          onChange={setActiveIndustry}
        />
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No projects match this filter combination.
          </p>
          <button
            onClick={() => {
              setActiveType("All");
              setActiveIndustry("All");
            }}
            className="text-accent-green text-sm font-bold mt-2 hover:underline cursor-pointer"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
