"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import {
  categories,
  projects,
  type ProjectCategory,
} from "@/data/projects";

export function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState<
    ProjectCategory | "All"
  >("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-fuchsia-400/80">
            The Collection
          </p>
          <h2
            id="projects-heading"
            className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-white sm:text-5xl"
          >
            Apps I&apos;ve Built
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            A curated showcase of production-ready platforms — from newsletter
            engines to AI video SaaS and mobile apps.
          </p>
        </div>

        <div
          className="mb-12 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          <Filter
            className="mr-1 h-4 w-4 text-slate-500"
            aria-hidden="true"
          />
          {(["All", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              aria-pressed={activeCategory === cat}
              className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 ring-1 ring-cyan-400/40"
                  : "border border-white/10 bg-white/4 text-slate-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {featured.length > 0 && activeCategory === "All" && (
              <div className="mb-12">
                <h3 className="mb-6 font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.2em] text-amber-400/80">
                  ★ Flagship Projects
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {featured.map((project, i) => (
                    <ProjectCard key={project.id} project={project} index={i} />
                  ))}
                </div>
              </div>
            )}

            {(activeCategory !== "All" ? filtered : rest).length > 0 && (
              <div>
                {activeCategory === "All" && (
                  <h3 className="mb-6 font-[family-name:var(--font-orbitron)] text-sm uppercase tracking-[0.2em] text-slate-500">
                    More Projects
                  </h3>
                )}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {(activeCategory !== "All" ? filtered : rest).map(
                    (project, i) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={i}
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {filtered.length === 0 && (
              <p className="py-16 text-center text-slate-500">
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
