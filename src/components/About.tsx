"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Zap } from "lucide-react";

const highlights = [
  {
    icon: Rocket,
    title: "Ship Fast",
    text: "Production-ready apps deployed on Vercel with modern Next.js stacks.",
  },
  {
    icon: Layers,
    title: "Full Stack",
    text: "From Supabase backends to Stripe billing and AI integrations.",
  },
  {
    icon: Code2,
    title: "Clean Code",
    text: "TypeScript-first, accessible UI, and maintainable architecture.",
  },
  {
    icon: Zap,
    title: "AI Native",
    text: "Gemini, HeyGen, and agentic workflows baked into products.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400/80">
              About
            </p>
            <h2
              id="about-heading"
              className="font-[family-name:var(--font-orbitron)] text-3xl font-bold text-white sm:text-4xl"
            >
              Engineering Tomorrow&apos;s Tools
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              I build full-stack applications that solve real problems — from
              local event discovery and newsletter automation to lead generation
              platforms and AI-powered video creation.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Every project in this portfolio is a working application with
              authentication, data persistence, and production deployment
              patterns. No mockups — just shipped software.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel rounded-2xl p-5"
              >
                <item.icon
                  className="mb-3 h-6 w-6 text-cyan-400"
                  aria-hidden="true"
                />
                <h3 className="font-[family-name:var(--font-orbitron)] text-sm font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
