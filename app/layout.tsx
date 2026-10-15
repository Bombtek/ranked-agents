import type { Metadata } from "next";
import Link from "next/link";
import { Orbitron, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NewsletterSignup } from "./newsletter";
import { SITE_URL, SITE_NAME } from "@/lib/site";
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron", weight: ["600", "800", "900"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} — Tier list of AI agents & automation tools`, template: `%s | ${SITE_NAME}` },
  description: "S/A/B/C tier rankings of AI coding agents, browser agents, agent frameworks, voice agents and no-code automation tools.",
  openGraph: { type: "website", siteName: SITE_NAME, url: SITE_URL, title: SITE_NAME, description: "The tier list for AI agents and automation tools." },
  twitter: { card: "summary_large_image", title: SITE_NAME, description: "The tier list for AI agents and automation tools." },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="font-sans min-h-screen">
        <header className="border-b border-white/10 sticky top-0 z-10 bg-[#07070c]/80 backdrop-blur">
          <nav className="mx-auto max-w-6xl flex items-center gap-6 px-4 py-3 text-sm">
            <Link href="/" className="font-display font-black text-lg tracking-wider"><span className="text-fuchsia-400">RANKED</span>AGENTS</Link>
            <Link href="/tools" className="text-zinc-300 hover:text-white">All tools</Link>
            <Link href="/best" className="text-zinc-300 hover:text-white">Rankings</Link>
            <Link href="/compare" className="text-zinc-300 hover:text-white">Compare</Link>
            <Link href="/releases" className="text-zinc-300 hover:text-white">New releases</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="border-t border-white/10 mt-16">
          <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-zinc-500 space-y-4">
            <div className="max-w-md"><NewsletterSignup compact /></div>
            <p>© {new Date().getFullYear()} Ranked Agents. Tiers and scores are editorial opinions. Pricing changes often — always check the official site.</p>
            <p>Disclosure: some links are affiliate links; we may earn a commission at no cost to you. Rankings are not influenced by affiliate relationships. <Link href="/disclosure" className="underline hover:text-zinc-300">Read our disclosure</Link>.</p>
            <p><Link href="/compare" className="underline hover:text-zinc-300">Compare AI tools</Link> · <Link href="/best" className="underline hover:text-zinc-300">Rankings</Link></p>
          </div>
        </footer>
        <Script src="https://subscribe-forms.beehiiv.com/attribution.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
