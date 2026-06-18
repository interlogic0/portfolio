export type ProjectCategory =
  | "SaaS"
  | "Newsletter"
  | "Commerce"
  | "AI"
  | "Tools"
  | "Mobile";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  website?: string;
  accent: string;
  featured?: boolean;
  year: number;
}

export const GITHUB_USER = "interlogic0";
export const GITHUB_AVATAR =
  "https://avatars.githubusercontent.com/u/87204491?v=4";

export const projects: Project[] = [
  {
    id: "fluxlocal",
    name: "FluxLocal",
    tagline: "Event discovery meets newsletter automation",
    description:
      "Full-stack SaaS for discovering local events, curating directories, generating AI-powered newsletters, and monetizing community content with Stripe billing and embeddable calendars.",
    category: "SaaS",
    tech: ["Next.js", "Supabase", "Stripe", "AI"],
    website: "https://www.fluxlocal.com",
    accent: "#00f0ff",
    featured: true,
    year: 2025,
  },
  {
    id: "copyquill-2",
    name: "CopyQuill 2.0",
    tagline: "Next-gen newsletter creation platform",
    description:
      "Modernized newsletter builder with drag-and-drop editing, audience growth tools, and a polished dashboard experience for creators who publish at scale.",
    category: "Newsletter",
    tech: ["Next.js", "React", "TypeScript"],
    website: "https://cq2.vercel.app",
    accent: "#a855f7",
    featured: true,
    year: 2026,
  },
  {
    id: "copyquill",
    name: "CopyQuill",
    tagline: "Enterprise-grade newsletter generator",
    description:
      "Production newsletter platform with drag-and-drop sections, AWS SES delivery, Clerk auth, AI content assistance, and S3-backed email parsing workflows.",
    category: "Newsletter",
    tech: ["Next.js", "AWS", "Clerk", "Gemini"],
    website: "https://copyquill.app",
    accent: "#6366f1",
    featured: true,
    year: 2025,
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Newsletter scraper, reader & AI digest",
    description:
      "SaaS platform to scrape Substack, Beehiiv, and Ghost newsletters, read issues in-app, extract events, and generate AI digests with Gemini 2.5 Flash.",
    category: "Newsletter",
    tech: ["Next.js", "Gemini", "JWT"],
    website: "https://pulse.vercel.app",
    accent: "#f472b6",
    featured: true,
    year: 2025,
  },
  {
    id: "magnetly",
    name: "Magnetly",
    tagline: "Create, host & track lead magnets",
    description:
      "All-in-one lead magnet platform — build checklists and swipe files, auto-generate landing pages with email capture, and track conversion analytics.",
    category: "SaaS",
    tech: ["Next.js", "Supabase"],
    website: "https://magnetifier.vercel.app",
    accent: "#fbbf24",
    year: 2025,
  },
  {
    id: "waitlist",
    name: "WaitList",
    tagline: "Multi-tenant waitlist management",
    description:
      "WCAG-compliant SaaS for building waitlists with drag-reorder fields, UTM link generation, per-account analytics, CSV export, and super-admin oversight.",
    category: "SaaS",
    tech: ["Next.js 15", "Supabase", "NextAuth"],
    website: "https://waitlist-chi-ten.vercel.app",
    accent: "#34d399",
    year: 2025,
  },
  {
    id: "ugc-studio",
    name: "UGC Studio",
    tagline: "AI talking-avatar video SaaS",
    description:
      "Credit-based UGC platform with HeyGen video and ElevenLabs voice — admins manage API keys, users get preview-only free tier and paid export renders.",
    category: "AI",
    tech: ["Next.js", "Supabase", "Stripe", "HeyGen"],
    website: "https://ugc-studio.vercel.app",
    accent: "#fb7185",
    year: 2025,
  },
  {
    id: "caterjunction",
    name: "CaterJunction",
    tagline: "Food truck & catering marketplace",
    description:
      "Full MVP for mobile food vendors — inquiry flows, booking management, Stripe billing, quote tokens, and Resend-powered transactional email.",
    category: "Commerce",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    website: "https://app.thefoodtruckguide.com",
    accent: "#f97316",
    year: 2025,
  },
  {
    id: "collabhub",
    name: "CollabHub",
    tagline: "Team collaboration workspace",
    description:
      "Collaborative platform for teams to coordinate projects, share resources, and work together in a unified digital workspace.",
    category: "SaaS",
    tech: ["JavaScript", "React"],
    website: "https://collabhub.vercel.app",
    accent: "#38bdf8",
    year: 2026,
  },
  {
    id: "landing-page-creator",
    name: "Landing Page Creator",
    tagline: "Visual landing page builder SaaS",
    description:
      "Template-driven landing page platform with visual editor, analytics dashboard, public page hosting, admin pricing controls, and Supabase backend.",
    category: "SaaS",
    tech: ["Next.js", "Supabase", "Tailwind"],
    website: "https://landingpagecreator-seven.vercel.app",
    accent: "#818cf8",
    year: 2025,
  },
  {
    id: "expired-nls",
    name: "Expired NLs",
    tagline: "Newsletter marketplace admin",
    description:
      "Admin platform for managing expired newsletter inventory — track status, assign buyers, import listings, and broker high-authority newsletter assets.",
    category: "Newsletter",
    tech: ["Next.js", "Supabase"],
    website: "https://expired-nls.vercel.app",
    accent: "#e879f9",
    year: 2025,
  },
  {
    id: "localbizscout",
    name: "LocalBizScout",
    tagline: "Local business discovery for creators",
    description:
      "Portable cross-platform scout tool for finding local businesses to feature in community newsletters — packaged for Windows, macOS, and Linux.",
    category: "Tools",
    tech: ["Next.js", "Node.js"],
    accent: "#2dd4bf",
    year: 2025,
  },
  {
    id: "samgov-tracker",
    name: "SamGov Tracker",
    tagline: "Government contract intelligence",
    description:
      "Contract analysis dashboard — paste SAM.gov URLs for AI-powered breakdowns, track opportunities, and manage your federal procurement pipeline.",
    category: "Tools",
    tech: ["Next.js", "TanStack Query", "Framer Motion"],
    website: "https://samgov.vercel.app",
    accent: "#64748b",
    year: 2025,
  },
  {
    id: "mainhq",
    name: "MainHQ",
    tagline: "Agentic OS command center",
    description:
      "Premium admin console for orchestrating Vercel, Next.js, WordPress, PHP, and AI agent workflows from a single agentic operating system interface.",
    category: "AI",
    tech: ["Express", "Node.js", "AI Agents"],
    accent: "#c084fc",
    year: 2025,
  },
  {
    id: "auto-publisher",
    name: "Auto-Publisher",
    tagline: "Automated content publishing pipeline",
    description:
      "Full-stack publishing automation with React dashboard, article generation, CSV-driven workflows, and scheduled content distribution.",
    category: "Tools",
    tech: ["React", "Vite", "Node.js"],
    accent: "#4ade80",
    year: 2025,
  },
  {
    id: "rallydeck",
    name: "RallyDeck",
    tagline: "Baseball strategy deck app",
    description:
      "Interactive baseball strategy companion built with Next.js and Capacitor — ships as a native Android APK with smooth animations and offline-ready static export.",
    category: "Mobile",
    tech: ["Next.js", "Capacitor", "Android"],
    accent: "#ef4444",
    year: 2025,
  },
  {
    id: "peptide-lip-quiz",
    name: "Peptide Lip Quiz",
    tagline: "Interactive product recommendation",
    description:
      "Engaging quiz funnel with confetti celebrations and motion-driven UX — guides users to personalized peptide lip balm recommendations.",
    category: "Commerce",
    tech: ["Next.js", "Framer Motion"],
    accent: "#fda4af",
    year: 2025,
  },
  {
    id: "budgetingfix",
    name: "BudgetingFix",
    tagline: "Personal finance dashboard",
    description:
      "Clean budgeting interface with animated charts, expense tracking, and a focused UX for taking control of personal finances.",
    category: "Tools",
    tech: ["React", "Vite", "Recharts"],
    accent: "#86efac",
    year: 2025,
  },
];

export const categories: ProjectCategory[] = [
  "SaaS",
  "Newsletter",
  "AI",
  "Commerce",
  "Tools",
  "Mobile",
];

export const stats = {
  projects: projects.length,
  categories: categories.length,
  featured: projects.filter((p) => p.featured).length,
  liveSites: projects.filter((p) => p.website).length,
  years: `${Math.min(...projects.map((p) => p.year))}–${Math.max(...projects.map((p) => p.year))}`,
};
