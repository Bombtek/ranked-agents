import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getTool } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { comparisonsForTool } from "@/data/compare";
import { SITE_URL } from "@/lib/site";
import { TierBadge } from "../../components";
import { OutboundLink } from "../../outbound-link";
import { BadgeEmbed } from "../../badge-embed";
import { BADGE_WIDTH, BADGE_HEIGHT, badgeHtml, badgeMarkdown } from "@/lib/badge";
export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTool((await params).slug); if (!t) return {};
  return { title: `${t.name} review — ${t.tier}-tier`, description: t.summary, alternates: { canonical: `/tools/${t.slug}` }, openGraph: { title: `${t.name} — ${t.tier}-tier | Ranked Agents`, description: t.summary, url: `/tools/${t.slug}` } };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug); if (!t) notFound();
  const inRankings = rankings.filter((r) => r.picks.some((p) => p.tool === t.slug));
  const compares = comparisonsForTool(t.slug);
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
      <OutboundLink tool={t} className="inline-block rounded-lg bg-fuchsia-500 px-5 py-2.5 font-semibold text-white hover:bg-fuchsia-400">Visit official site ↗</OutboundLink>{t.affiliateUrl && <p className="text-xs text-zinc-500">Affiliate link — <Link href="/disclosure" className="underline">disclosure</Link></p>}
      <div className="grid gap-4 md:grid-cols-3">
        <section className="card p-5 md:col-span-2"><h2 className="font-display font-bold mb-2">What it does</h2><p className="text-zinc-300">{t.description}</p></section>
        <section className="card p-5"><h2 className="font-display font-bold mb-2">Pricing</h2><p className="text-zinc-300">{t.pricing}</p></section>
        <section className="card p-5 md:col-span-3"><h2 className="font-display font-bold mb-2">Best for</h2><ul className="flex flex-wrap gap-2">{t.useCases.map((u) => <li key={u} className="rounded-md bg-white/5 px-3 py-1 text-sm">{u}</li>)}</ul></section>
      </div>
      {inRankings.length > 0 && <section><h2 className="font-display font-bold mb-2">Appears in</h2><div className="flex gap-3 flex-wrap">{inRankings.map((r) => <Link key={r.slug} href={`/best/${r.slug}`} className="text-fuchsia-300 hover:underline">{r.title}</Link>)}</div></section>}
      {compares.length > 0 && <section><h2 className="font-display font-bold mb-2">Compare {t.name}</h2><div className="flex gap-3 flex-wrap">{compares.map((c) => <Link key={c.slug} href={`/compare/${c.slug}`} className="text-fuchsia-300 hover:underline">{c.h1.split(":")[0]}</Link>)}</div></section>}
      <section id="badge" className="card p-5">
        <h2 className="font-display font-bold mb-1">Embed your badge</h2>
        <p className="text-sm text-zinc-400 mb-4">Built {t.name}? Show off its {t.tier}-tier ranking on your site or GitHub README. The badge updates automatically if the tier changes. <Link href="/badges" className="text-cyan-300 hover:underline">About badges</Link></p>
        <BadgeEmbed name={t.name} tier={t.tier} src={`/badge/${t.slug}`} width={BADGE_WIDTH} height={BADGE_HEIGHT} html={badgeHtml(t)} markdown={badgeMarkdown(t)} />
      </section>
    </article>
  );
}
