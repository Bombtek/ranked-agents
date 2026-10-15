import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { comparisons, getComparison, VERIFIED_ON } from "@/data/compare";
import { getTool, outboundLink } from "@/data/tools";
import { getRanking } from "@/data/rankings";
import { SITE_URL } from "@/lib/site";
import { TierBadge } from "../../components";
export const dynamicParams = false;
export function generateStaticParams() { return comparisons.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getComparison((await params).slug); if (!c) return {};
  return { title: { absolute: c.title }, description: c.description, alternates: { canonical: `/compare/${c.slug}` }, openGraph: { title: c.title, description: c.description, url: `/compare/${c.slug}` } };
}
export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getComparison((await params).slug); if (!c) notFound();
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })), url: `${SITE_URL}/compare/${c.slug}` };
  const hasAffiliate = c.rows.some((r) => getTool(r.tool)?.affiliateUrl);
  const others = comparisons.filter((o) => o.slug !== c.slug);
  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header><p className="text-xs text-zinc-500"><Link href="/compare" className="hover:underline">Compare</Link> / {c.kind === "vs" ? "Head to head" : "Alternatives"}</p><h1 className="font-display text-4xl font-black mt-2">{c.h1}</h1></header>
      <section className="card p-6 border-fuchsia-500/40"><h2 className="font-display font-bold text-fuchsia-300 mb-2">Quick verdict</h2><p className="text-zinc-200">{c.verdict}</p></section>
      <section><h2 className="font-display text-2xl font-bold mb-4">Comparison table</h2>
        <div className="overflow-x-auto card"><table className="w-full text-sm text-left"><thead className="text-zinc-400 border-b border-white/10"><tr><th className="p-3">Tool</th><th className="p-3">Pricing</th><th className="p-3">Free tier</th><th className="p-3">Best for</th><th className="p-3">Hosting</th><th className="p-3"></th></tr></thead>
          <tbody>{c.rows.map((r) => { const t = getTool(r.tool); if (!t) return null; return (<tr key={r.tool} className="border-b border-white/5 align-top"><td className="p-3 font-semibold whitespace-nowrap"><span className="inline-flex items-center gap-2"><TierBadge tier={t.tier} /><Link href={`/tools/${t.slug}`} className="hover:underline">{t.name}</Link></span></td><td className="p-3 text-zinc-300">{r.pricing}</td><td className="p-3 text-zinc-300">{r.freeTier}</td><td className="p-3 text-zinc-300">{r.bestFor}</td><td className="p-3 text-zinc-300">{r.hosting}</td><td className="p-3"><a {...outboundLink(t)} className="text-cyan-300 hover:underline whitespace-nowrap">Visit ↗</a></td></tr>); })}</tbody></table></div>
        <p className="text-xs text-zinc-500 mt-2">Pricing checked on each vendor's official site on {VERIFIED_ON}. Prices change often — always confirm on the official site. &quot;See site&quot; means we couldn't verify it.{hasAffiliate && <> Some links are affiliate links — <Link href="/disclosure" className="underline">disclosure</Link>.</>}</p>
      </section>
      <section><h2 className="font-display text-2xl font-bold mb-4">Who should pick which?</h2><div className="grid gap-4 md:grid-cols-2">{c.picks.map((p) => { const t = getTool(p.tool); if (!t) return null; return (<div key={p.tool} className="card p-5"><h3 className="font-display font-bold">Pick <Link href={`/tools/${t.slug}`} className="text-fuchsia-300 hover:underline">{t.name}</Link> if…</h3><p className="text-zinc-300 mt-2">{p.text}</p><a {...outboundLink(t)} className="mt-3 inline-block text-sm text-cyan-300 hover:underline">Try {t.name} ↗</a></div>); })}</div></section>
      <section><h2 className="font-display text-2xl font-bold mb-4">FAQ</h2><div className="space-y-3">{c.faqs.map((f) => <details key={f.q} className="card p-5" open><summary className="font-semibold cursor-pointer">{f.q}</summary><p className="text-zinc-300 mt-2">{f.a}</p></details>)}</div></section>
      <section className="space-y-2"><h2 className="font-display font-bold">Related</h2>
        <div className="flex flex-wrap gap-3">{c.rankings.map((s) => { const r = getRanking(s); return r ? <Link key={s} href={`/best/${s}`} className="text-fuchsia-300 hover:underline">{r.title}</Link> : null; })}{c.rows.map((r) => { const t = getTool(r.tool); return t ? <Link key={t.slug} href={`/tools/${t.slug}`} className="text-zinc-300 hover:underline">{t.name} review</Link> : null; })}</div>
        <div className="flex flex-wrap gap-3 text-sm">{others.map((o) => <Link key={o.slug} href={`/compare/${o.slug}`} className="text-zinc-400 hover:underline">{o.h1.split(":")[0]}</Link>)}</div>
      </section>
    </article>
  );
}
