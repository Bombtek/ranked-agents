import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { rankings, getRanking } from "@/data/rankings";
import { getTool } from "@/data/tools";
import { ToolCard } from "../../components";
export const dynamicParams = false;
export function generateStaticParams() { return rankings.map((r) => ({ slug: r.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const r = getRanking((await params).slug); if (!r) return {};
  return { title: r.title, description: r.blurb, alternates: { canonical: `/best/${r.slug}` }, openGraph: { title: `${r.title} | Ranked Agents`, description: r.blurb, url: `/best/${r.slug}` } };
}
export default async function RankingPage({ params }: { params: Promise<{ slug: string }> }) {
  const r = getRanking((await params).slug); if (!r) notFound();
  return (<div><h1 className="font-display text-4xl font-black">{r.title}</h1><p className="text-zinc-400 mt-2 mb-8">{r.blurb}</p>
    <ol className="space-y-3">{r.picks.map((p, i) => { const t = getTool(p.tool); return t ? <li key={p.tool}><ToolCard t={t} rank={i + 1} reason={p.reason} /></li> : null; })}</ol></div>);
}
