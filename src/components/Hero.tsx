"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";
import { useHydrated } from "@/hooks/useHydrated";
import { GitHubIcon } from "./GitHubIcon";
import { GITHUB_AVATAR, GITHUB_USER, stats } from "@/data/projects";

export function Hero() {
  const hydrated = useHydrated();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 text-center"
    >
      <motion.div
        initial={false}
        animate={hydrated ? { opacity: 1, scale: 1 } : undefined}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-8"
      >
        <div
          className="absolute inset-0 animate-pulse-glow rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,240,255,0.25) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <Image
          src={GITHUB_AVATAR}
          alt=""
          width={120}
          height={120}
          className="relative rounded-full border-2 border-cyan-400/40 shadow-[0_0_40px_rgba(0,240,255,0.3)]"
          priority
        />
      </motion.div>

      <motion.p
        initial={false}
        animate={hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.2 }}
        className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400/80"
      >
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        <span>Developer Portfolio</span>
        <Sparkles className="h-4 w-4" aria-hidden="true" />
      </motion.p>

      <motion.h1
        id="hero-heading"
        initial={false}
        animate={hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="font-[family-name:var(--font-orbitron)] text-4xl font-black leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
      >
        <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
          INTER
        </span>
        <span className="text-white">LOGIC</span>
      </motion.h1>

      <motion.p
        initial={false}
        animate={hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.5 }}
        className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl"
      >
        Building the future of{" "}
        <span className="text-cyan-300">SaaS</span>,{" "}
        <span className="text-fuchsia-300">newsletter tech</span>, and{" "}
        <span className="text-purple-300">AI-powered tools</span> — one app at a
        time.
      </motion.p>

      <motion.div
        initial={false}
        animate={hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.65 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-transform hover:scale-105 focus-visible:scale-105"
        >
          <span className="relative z-10">Explore Projects</span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden="true"
          />
        </a>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur transition-colors hover:border-cyan-400/40 hover:text-white"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </motion.div>

      <motion.dl
        initial={false}
        animate={hydrated ? { opacity: 1, y: 0 } : undefined}
        transition={{ delay: 0.8 }}
        className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-10"
        aria-label="Portfolio statistics"
      >
        {[
          { label: "Projects", value: stats.projects },
          { label: "Live Sites", value: stats.liveSites },
          { label: "Featured", value: stats.featured },
          { label: "Active Years", value: stats.years },
        ].map((item) => (
          <div key={item.label} className="glass-panel rounded-2xl px-6 py-4">
            <dt className="text-xs uppercase tracking-widest text-slate-500">
              {item.label}
            </dt>
            <dd className="mt-1 font-[family-name:var(--font-orbitron)] text-2xl font-bold text-cyan-300 sm:text-3xl">
              {item.value}
            </dd>
          </div>
        ))}
      </motion.dl>

      <motion.a
        href="#projects"
        initial={false}
        animate={hydrated ? { opacity: 1 } : undefined}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 animate-float text-cyan-400/60 transition-colors hover:text-cyan-300"
        aria-label="Scroll to projects section"
      >
        <ArrowDown className="h-6 w-6" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
