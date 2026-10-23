import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { releases } from "@/data/releases";
import { TierBadge, AGENT_ACCESS_EXPLAINER } from "./components";
import { NewsletterSignup } from "./newsletter";
export const metadata: Metadata = { alternates: { canonical: "/" } };
export default function Home() {
  const tiers = ["S", "A", "B", "C"] as const;
  return (
    <div className="space-y-16">
      <section className="grid-bg rounded-2xl border border-white/10 p-10 md:p-16 text-center">
        <p className="font-display text-xs tracking-[0.4em] text-fuchsia-400">SEASON 1 · {tools.length} TOOLS RANKED</p>
        <h1 className="font-display mt-4 text-4xl md:text-6xl font-black leading-tight">The tier list for<br /><span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">AI agents</span></h1>
        <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">Coding agents, browser agents, frameworks, voice and no-code automation — ranked S to C for builders and vibe coders.</p>
        <div className="mt-8 flex justify-center gap-3"><Link href="/best" className="rounded-lg bg-fuchsia-500 px-5 py-2.5 font-semibold text-white hover:bg-fuchsia-400">See rankings</Link><Link href="/tools" className="rounded-lg border border-white/20 px-5 py-2.5 font-semibold hover:border-white/50">Browse all tools</Link></div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-black mb-6">Overall tier list</h2>
        <div className="space-y-2">
          {tiers.map((tier) => { const row = tools.filter((t) => t.tier === tier).sort((a, b) => b.score - a.score); if (!row.length) return null; return (
            <div key={tier} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3">
              <TierBadge tier={tier} big />
              <div className="flex flex-wrap gap-2 items-center">{row.map((t) => <Link key={t.slug} href={`/tools/${t.slug}`} className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-3 py-1.5 text-sm hover:bg-white/15">{t.name}{(t.mcp || t.api) && <span className="inline-flex gap-0.5">{t.mcp && <span title="Official MCP server (verified)" className="rounded border border-emerald-400/40 bg-emerald-400/10 px-1 text-[9px] font-display text-emerald-300">MCP</span>}{t.api && <span title="Public API / SDK (verified)" className="rounded border border-cyan-400/40 bg-cyan-400/10 px-1 text-[9px] font-display text-cyan-300">API</span>}</span>}</Link>)}</div>
            </div>); })}
        </div>
        <p className="mt-3 text-xs text-zinc-500"><span className="rounded border border-emerald-400/40 bg-emerald-400/10 px-1 text-[9px] font-display text-emerald-300">MCP</span> <span className="rounded border border-cyan-400/40 bg-cyan-400/10 px-1 text-[9px] font-display text-cyan-300">API</span> = agent-accessible. {AGENT_ACCESS_EXPLAINER}</p>
      </section>
      <NewsletterSignup />
      <section>
        <h2 className="font-display text-2xl font-black mb-6">Rankings by use case</h2>
        <div className="grid gap-4 md:grid-cols-3">{rankings.map((r) => <Link key={r.slug} href={`/best/${r.slug}`} className="card p-5"><h3 className="font-display font-bold">{r.title}</h3><p className="text-sm text-zinc-400 mt-1">{r.blurb}</p></Link>)}</div>
      </section>
      <section>
        <div className="flex items-baseline justify-between mb-6"><h2 className="font-display text-2xl font-black">Latest releases</h2><Link href="/releases" className="text-sm text-fuchsia-300">All releases →</Link></div>
        <div className="grid gap-3 md:grid-cols-2">{releases.slice(0, 4).map((r) => <a key={r.title} href={r.source} target="_blank" rel="noopener" className="card p-4"><p className="text-xs text-cyan-300 font-display">{r.date} · {r.product}</p><h3 className="font-semibold mt-1">{r.title}</h3><p className="text-sm text-zinc-400">{r.summary}</p></a>)}</div>
      </section>
    </div>
  );
}
