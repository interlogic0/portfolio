"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "./GitHubIcon";
import { GITHUB_USER } from "@/data/projects";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#030014]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#"
          className="font-[family-name:var(--font-orbitron)] text-lg font-bold tracking-wider text-white"
        >
          <span className="text-cyan-400">INTER</span>LOGIC
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-300"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`https://github.com/${GITHUB_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/10 px-4 py-1.5 text-sm text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-300"
              aria-label="GitHub profile (opens in new tab)"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-white/8 bg-[#030014]/95 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`https://github.com/${GITHUB_USER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                onClick={() => setMenuOpen(false)}
              >
                <GitHubIcon className="h-5 w-5" />
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
