import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ParticleField } from "@/components/ParticleField";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <div className="relative min-h-screen">
        <div
          className="pointer-events-none fixed inset-0 grid-bg scanline"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none fixed inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,50,255,0.15), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(0,240,255,0.06), transparent)",
          }}
          aria-hidden="true"
        />
        <ParticleField />

        <Navigation />

        <main id="main-content" className="relative z-10">
          <Hero />
          <ProjectGrid />
          <About />
          <Footer />
        </main>
    </div>
  );
}
