import { GitHubIcon } from "./GitHubIcon";
import { GITHUB_USER } from "@/data/projects";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/8 px-6 py-16">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white sm:text-3xl">
          Let&apos;s Build Something
          <span className="text-cyan-400"> Epic</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">
          Explore the code, fork a project, or reach out to collaborate on the
          next big idea.
        </p>
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_0_30px_rgba(0,240,255,0.2)] transition-transform hover:scale-105"
        >
          <GitHubIcon className="h-4 w-4" />
          github.com/{GITHUB_USER}
        </a>
        <p className="mt-12 text-xs text-slate-600" suppressHydrationWarning>
          © {year} InterLogic. All projects showcased with pride.
        </p>
      </div>
    </footer>
  );
}
