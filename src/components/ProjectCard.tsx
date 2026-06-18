"use client";

import { ExternalLink, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative"
      style={{ "--card-accent": project.accent } as React.CSSProperties}
    >
      <div className="card-glow" aria-hidden="true" />

      <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1 group-focus-within:-translate-y-1">
        <div
          className="holo-shine pointer-events-none absolute inset-0 z-10"
          aria-hidden="true"
        />

        <div
          className="h-1 w-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
          }}
          aria-hidden="true"
        />

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${project.accent}18`,
                    color: project.accent,
                    border: `1px solid ${project.accent}40`,
                  }}
                >
                  {project.category}
                </span>
                {project.featured && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    <Star className="h-3 w-3 fill-current" aria-hidden="true" />
                    Featured
                  </span>
                )}
              </div>
              <h3
                className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white"
                style={{ textShadow: `0 0 20px ${project.accent}40` }}
              >
                {project.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-slate-400">
                {project.tagline}
              </p>
            </div>
            <span className="shrink-0 font-[family-name:var(--font-orbitron)] text-xs text-slate-600">
              {project.year}
            </span>
          </div>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
            {project.description}
          </p>

          <ul
            className="mb-5 flex flex-wrap gap-1.5"
            aria-label={`Technologies used in ${project.name}`}
          >
            {project.tech.map((t) => (
              <li
                key={t}
                className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 text-[11px] text-slate-400"
              >
                {t}
              </li>
            ))}
          </ul>

          {project.website && (
            <a
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
              aria-label={`Visit ${project.name} website (opens in new tab)`}
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              Visit Website
              <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
