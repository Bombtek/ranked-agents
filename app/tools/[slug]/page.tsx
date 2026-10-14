import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getTool } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { SITE_URL } from "@/lib/site";
import { TierBadge } from "../../components";
export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTool((await params).slug); if (!t) return {};
  return { title: `${t.name} review — ${t.tier}-tier`, description: t.summary, alternates: { canonical: `/tools/${t.slug}` }, openGraph: { title: `${t.name} — ${t.tier}-tier | Ranked Agents`, description: t.summary, url: `/tools/${t.slug}` } };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug); if (!t) notFound();
  const inRankings = rankings.filter((r) => r.picks.some((p) => p.tool === t.slug));
  const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: t.name, url: t.url, description: t.description, applicationCategory: "DeveloperApplication",
    review: { "@type": "Review", author: { "@type": "Organization", name: "Ranked Agents" }, reviewRating: { "@type": "Rating", ratingValue: t.score, bestRating: 100, worstRating: 0 } },
    mainEntityOfPage: `${SITE_URL}/tools/${t.slug}` };
  return (
    <article className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="flex items-center gap-6">
        <TierBadge tier={t.tier} big />
        <div><h1 className="font-display text-4xl font-black">{t.name}</h1><p className="text-zinc-400 mt-1">{t.summary}</p></div>
        <div className="ml-auto text-right"><div className="font-display text-5xl font-black text-fuchsia-300">{t.score}</div><div className="text-xs text-zinc-500">SCORE / 100</div></div>
      </div>
      <a href={t.url} target="_blank" rel="noopener" className="inline-block rounded-lg bg-fuchsia-500 px-5 py-2.5 font-semibold text-white hover:bg-fuchsia-400">Visit official site ↗</a>
      <div className="grid gap-4 md:grid-cols-3">
        <section className="card p-5 md:col-span-2"><h2 className="font-display font-bold mb-2">What it does</h2><p className="text-zinc-300">{t.description}</p></section>
        <section className="card p-5"><h2 className="font-display font-bold mb-2">Pricing</h2><p className="text-zinc-300">{t.pricing}</p></section>
        <section className="card p-5 md:col-span-3"><h2 className="font-display font-bold mb-2">Best for</h2><ul className="flex flex-wrap gap-2">{t.useCases.map((u) => <li key={u} className="rounded-md bg-white/5 px-3 py-1 text-sm">{u}</li>)}</ul></section>
      </div>
      {inRankings.length > 0 && <section><h2 className="font-display font-bold mb-2">Appears in</h2><div className="flex gap-3 flex-wrap">{inRankings.map((r) => <Link key={r.slug} href={`/best/${r.slug}`} className="text-fuchsia-300 hover:underline">{r.title}</Link>)}</div></section>}
    </article>
  );
}
