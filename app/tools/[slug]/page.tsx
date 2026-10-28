import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, getTool } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { comparisonsForTool } from "@/data/compare";
import { SITE_URL } from "@/lib/site";
import { TierBadge, AgentAccessBadges, AGENT_ACCESS_EXPLAINER } from "../../components";
import { NewsletterSignup } from "../../newsletter";
import { OutboundLink } from "../../outbound-link";
import { BadgeEmbed } from "../../badge-embed";
import { BADGE_WIDTH, BADGE_HEIGHT, badgeHtml, badgeMarkdown } from "@/lib/badge";
export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const t = getTool((await params).slug); if (!t) return {};
  const title = t.seoTitle ?? `${t.name} review — ${t.tier}-tier`; const description = t.metaDescription ?? t.summary;
  return { title, description, alternates: { canonical: `/tools/${t.slug}` }, openGraph: { title: `${t.h1 ?? t.name} — ${t.tier}-tier | Ranked Agents`, description, url: `/tools/${t.slug}` } };
}
export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug); if (!t) notFound();
  const inRankings = rankings.filter((r) => r.picks.some((p) => p.tool === t.slug));
  const compares = comparisonsForTool(t.slug);
  const jsonLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: t.name, url: t.url, description: t.description, applicationCategory: "DeveloperApplication",
    review: { "@type": "Review", author: { "@type": "Organization", name: "Ranked Agents" }, reviewRating: { "@type": "Rating", ratingValue: t.score, bestRating: 100, worstRating: 0 },
      ...(t.verdict ? { reviewBody: t.verdict.summary,
        positiveNotes: { "@type": "ItemList", itemListElement: t.verdict.pros.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p })) },
        negativeNotes: { "@type": "ItemList", itemListElement: t.verdict.cons.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c })) } } : {}) },
    ...(t.pricingPlans ? { offers: t.pricingPlans.map((p) => ({ "@type": "Offer", name: p.plan, description: `${p.price}: ${p.includes}`, url: t.pricingSource ?? t.url })) } : {}),
    mainEntityOfPage: `${SITE_URL}/tools/${t.slug}` };
  const faqLd = t.faqs?.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })), url: `${SITE_URL}/tools/${t.slug}` } : null;
  return (
    <article className="space-y-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <div className="flex items-center gap-6">
        <TierBadge tier={t.tier} big />
        <div><h1 className="font-display text-4xl font-black">{t.h1 ?? t.name}</h1><p className="text-zinc-400 mt-1">{t.summary}</p></div>
        <div className="ml-auto text-right"><div className="font-display text-5xl font-black text-fuchsia-300">{t.score}</div><div className="text-xs text-zinc-500">SCORE / 100</div></div>
      </div>
      <OutboundLink tool={t} className="inline-block rounded-lg bg-fuchsia-500 px-5 py-2.5 font-semibold text-white hover:bg-fuchsia-400">Visit official site ↗</OutboundLink>{t.affiliateUrl && <p className="text-xs text-zinc-500">Affiliate link — <Link href="/disclosure" className="underline">disclosure</Link></p>}
      <div className="grid gap-4 md:grid-cols-3">
        <section className="card p-5 md:col-span-2"><h2 className="font-display font-bold mb-2">What it does</h2><p className="text-zinc-300">{t.description}</p></section>
        <section className="card p-5"><h2 className="font-display font-bold mb-2">Pricing</h2><p className="text-zinc-300">{t.pricing}</p></section>
        <section className="card p-5 md:col-span-3"><h2 className="font-display font-bold mb-2">Best for</h2><ul className="flex flex-wrap gap-2">{t.useCases.map((u) => <li key={u} className="rounded-md bg-white/5 px-3 py-1 text-sm">{u}</li>)}</ul></section>
        <section id="agent-access" className="card p-5 md:col-span-3"><h2 className="font-display font-bold mb-2">Agent-accessible</h2><AgentAccessBadges t={t} showSources />{t.agentNote && <p className="text-sm text-zinc-300 mt-2">{t.agentNote}</p>}<p className="text-xs text-zinc-500 mt-2">{AGENT_ACCESS_EXPLAINER}</p></section>
      </div>
      {t.pricingPlans && t.pricingPlans.length > 0 && <section id="pricing" className="space-y-3"><h2 className="font-display text-2xl font-bold">{t.name} pricing</h2>
        <div className="overflow-x-auto card"><table className="w-full text-sm text-left"><thead className="text-zinc-400 border-b border-white/10"><tr><th className="p-3">Plan</th><th className="p-3">Price</th><th className="p-3">What you get</th></tr></thead><tbody>{t.pricingPlans.map((p) => <tr key={p.plan} className="border-b border-white/5 align-top"><th scope="row" className="p-3 font-semibold text-zinc-200 whitespace-nowrap">{p.plan}</th><td className="p-3 text-zinc-200 whitespace-nowrap">{p.price}</td><td className="p-3 text-zinc-300">{p.includes}</td></tr>)}</tbody></table></div>
        {t.pricingNote && <p className="text-zinc-300">{t.pricingNote}</p>}
        <p className="text-xs text-zinc-500">{t.pricingVerifiedOn ? `Checked on ${t.name}'s official pricing page on ${t.pricingVerifiedOn}. ` : ""}Prices change often, so confirm on the vendor&apos;s site.{t.pricingSource && <> <a href={t.pricingSource} target="_blank" rel="noopener" className="text-cyan-300 hover:underline">See vendor pricing ↗</a></>}</p>
      </section>}
      {t.verdict && <section id="verdict" className="space-y-3"><h2 className="font-display text-2xl font-bold">{t.name} review: our verdict</h2>
        <div className="card p-5 border-fuchsia-500/40"><p className="text-zinc-200">{t.verdict.summary}</p><p className="text-sm text-zinc-400 mt-2">Score: <span className="text-fuchsia-300 font-semibold">{t.score}/100</span> · {t.tier}-tier</p></div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="card p-5"><h3 className="font-display font-bold text-emerald-300 mb-2">Pros</h3><ul className="list-disc space-y-1 pl-5 text-zinc-300">{t.verdict.pros.map((p) => <li key={p}>{p}</li>)}</ul></div>
          <div className="card p-5"><h3 className="font-display font-bold text-rose-300 mb-2">Cons</h3><ul className="list-disc space-y-1 pl-5 text-zinc-300">{t.verdict.cons.map((c) => <li key={c}>{c}</li>)}</ul></div>
        </div>
      </section>}
      {inRankings.length > 0 && <section><h2 className="font-display font-bold mb-2">Appears in</h2><div className="flex gap-3 flex-wrap">{inRankings.map((r) => <Link key={r.slug} href={`/best/${r.slug}`} className="text-fuchsia-300 hover:underline">{r.title}</Link>)}</div></section>}
      {compares.length > 0 && <section><h2 className="font-display font-bold mb-2">Compare {t.name}</h2><div className="flex gap-3 flex-wrap">{compares.map((c) => <Link key={c.slug} href={`/compare/${c.slug}`} className="text-fuchsia-300 hover:underline">{c.h1.split(":")[0]}</Link>)}</div></section>}
      {t.faqs && t.faqs.length > 0 && <section id="faq"><h2 className="font-display text-2xl font-bold mb-4">FAQ</h2><div className="space-y-3">{t.faqs.map((f) => <details key={f.q} className="card p-5" open><summary className="font-semibold cursor-pointer">{f.q}</summary><p className="text-zinc-300 mt-2">{f.a}</p>{f.links && f.links.length > 0 && <p className="text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1">{f.links.map((l) => l.href.startsWith("/") ? <Link key={l.href} href={l.href} className="text-fuchsia-300 hover:underline">{l.label}</Link> : <a key={l.href} href={l.href} target="_blank" rel="noopener" className="text-cyan-300 hover:underline">{l.label} ↗</a>)}</p>}</details>)}</div></section>}
      <NewsletterSignup title={`Track ${t.name}'s tier`} />
      <section id="badge" className="card p-5">
        <h2 className="font-display font-bold mb-1">Embed your badge</h2>
        <p className="text-sm text-zinc-400 mb-4">Built {t.name}? Show off its {t.tier}-tier ranking on your site or GitHub README. The badge updates automatically if the tier changes. <Link href="/badges" className="text-cyan-300 hover:underline">About badges</Link></p>
        <BadgeEmbed name={t.name} tier={t.tier} src={`/badge/${t.slug}`} width={BADGE_WIDTH} height={BADGE_HEIGHT} html={badgeHtml(t)} markdown={badgeMarkdown(t)} />
      </section>
    </article>
  );
}
