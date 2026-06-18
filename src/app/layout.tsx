import type { Metadata } from "next";
import { Exo_2, Orbitron } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "InterLogic — App Portfolio",
  description:
    "A futuristic showcase of SaaS platforms, AI tools, and mobile apps built by InterLogic.",
  openGraph: {
    title: "InterLogic — App Portfolio",
    description:
      "Explore cutting-edge apps: FluxLocal, CopyQuill, Magnetly, UGC Studio, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${exo2.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased" suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
