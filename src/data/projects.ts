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
    id: "newsletter-playbook",
    name: "Newsletter Playbook",
    tagline: "Launch your local newsletter with confidence",
    description:
      "Step-by-step launch playbook for local newsletter creators — practical guidance, templates, and workflows to go from idea to first issue without the guesswork.",
    category: "Newsletter",
    tech: ["Next.js", "React", "TypeScript"],
    website: "https://local-newsletter-launch-playbook.vercel.app/",
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
    id: "caterjunction",
    name: "CaterJunction",
    tagline: "Food truck & catering marketplace",
    description:
      "Full MVP for mobile food vendors — inquiry flows, booking management, Stripe billing, quote tokens, and Resend-powered transactional email.",
    category: "Commerce",
    tech: ["Next.js", "Supabase", "Stripe", "Resend"],
    website: "https://caterjunction.com/",
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
    website: "https://collab-hub-bsnp.vercel.app/",
    accent: "#38bdf8",
    year: 2026,
  },
  {
    id: "rssfeedz",
    name: "RSSFeedz",
    tagline: "Turn any URL into an RSS feed",
    description:
      "Generate valid RSS feeds from any website in seconds — auto-detect list patterns, cache feeds for reliability, and integrate with Feedly, Zapier, and IFTTT.",
    category: "Tools",
    tech: ["Next.js", "React", "TypeScript"],
    website: "https://rssfeedz.vercel.app/",
    accent: "#f59e0b",
    year: 2026,
  },
  {
    id: "eventhog",
    name: "EventHog",
    tagline: "Event management for food trucks",
    description:
      "Food truck event platform with visual calendar, staff management, prep checklists, online booking requests, location tracking, and payment status monitoring.",
    category: "Commerce",
    tech: ["Next.js", "React", "TypeScript"],
    website: "https://eventhog.vercel.app/",
    accent: "#ef4444",
    year: 2025,
  },
  {
    id: "rocketrewrite",
    name: "RocketRewrite",
    tagline: "AI-powered article rewriting",
    description:
      "Scrape any article URL and rewrite it into fresh, original content with platform-optimized posts for X, Facebook, YouTube, and Instagram — supports Gemini, OpenAI, and Anthropic.",
    category: "AI",
    tech: ["Next.js", "AI", "TypeScript"],
    website: "https://rocketrewrite.vercel.app/",
    accent: "#8b5cf6",
    year: 2026,
  },
  {
    id: "qr-helix",
    name: "QR Helix",
    tagline: "Create & track QR codes",
    description:
      "Generate QR codes from URLs with real-time analytics on every scan — track location, device info, and engagement metrics with API access and custom domains.",
    category: "SaaS",
    tech: ["Next.js", "React", "TypeScript"],
    website: "https://www.qrhelix.com/",
    accent: "#06b6d4",
    year: 2026,
  },
  {
    id: "roadmap-sigma",
    name: "RoadmapSigma",
    tagline: "Product management platform",
    description:
      "FeatureStream-style product roadmap platform for managing features, collecting feedback, and coordinating product development workflows.",
    category: "SaaS",
    tech: ["Next.js", "React", "TypeScript"],
    website:
      "https://roadmap-sigma-six.vercel.app/dashboard?subdomain=roadmap.copyquill.com",
    accent: "#10b981",
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
