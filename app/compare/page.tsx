import type { Metadata } from "next";
import Link from "next/link";
import { comparisons } from "@/data/compare";
import { SITE_URL } from "@/lib/site";
export const metadata: Metadata = { title: "AI tool comparisons & alternatives", description: "Head-to-head comparisons and alternatives for AI agents and automation tools: n8n vs Make, Cursor vs Claude Code, Bolt vs Lovable, Zapier alternatives and more.", alternates: { canonical: "/compare" }, openGraph: { title: "AI tool comparisons & alternatives | Ranked Agents", description: "Head-to-head comparisons: n8n vs Make, Make vs Zapier, Cursor vs Claude Code and more.", url: "/compare" } };
export default function CompareIndex() {
  const ld = { "@context": "https://schema.org", "@type": "ItemList", name: "AI tool comparisons & alternatives", url: `${SITE_URL}/compare`, numberOfItems: comparisons.length, itemListElement: comparisons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.h1, url: `${SITE_URL}/compare/${c.slug}` })) };
  return (<div><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /><h1 className="font-display text-4xl font-black">Compare AI tools</h1><p className="text-zinc-400 mt-2 mb-8">Head-to-head matchups and alternatives, with pricing checked on each vendor's site.</p>
    <div className="grid gap-4 md:grid-cols-2">{comparisons.map((c) => <Link key={c.slug} href={`/compare/${c.slug}`} className="card p-6"><p className="text-xs uppercase tracking-wider text-fuchsia-300">{c.kind === "vs" ? "Head to head" : "Alternatives"}</p><h2 className="font-display text-xl font-bold mt-1">{c.h1}</h2><p className="text-zinc-400 mt-2 text-sm">{c.description}</p></Link>)}</div></div>);
}
