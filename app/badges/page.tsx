import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/data/tools";
import { BADGE_WIDTH, BADGE_HEIGHT, badgeHtml, badgeMarkdown } from "@/lib/badge";
import { BadgeEmbed } from "../badge-embed";
import { SITE_URL } from "@/lib/site";

const title = "Tier badges for tool makers";
const description = "Embed a Ranked Agents tier badge on your website or GitHub README to show your AI agent or automation tool's S, A or B-tier ranking.";
export const metadata: Metadata = { title, description, alternates: { canonical: "/badges" }, openGraph: { title: `${title} | Ranked Agents`, description, url: "/badges" } };

const tierOrder = { S: 0, A: 1, B: 2, C: 3 } as const;

export default function BadgesPage() {
  const sorted = [...tools].sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier] || b.score - a.score);
  const example = sorted[0];
  return (
    <div className="space-y-10">
      <header className="max-w-3xl space-y-3">
        <h1 className="font-display text-4xl font-black">Tier badges for tool makers</h1>
        <p className="text-zinc-300">Every tool on Ranked Agents gets a free badge showing its current tier. Drop it on your landing page, docs or GitHub README. It&apos;s a lightweight SVG that stays crisp at any size and updates automatically if your tier changes.</p>
        <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
          <li>Badge URL: <code className="text-cyan-200">{SITE_URL}/badge/&lt;slug&gt;</code></li>
          <li>Find your snippet on your tool&apos;s page under <em>Embed your badge</em>, or copy it below.</li>
          <li>Tiers are editorial and can&apos;t be bought. See our <Link href="/disclosure" className="underline">disclosure</Link>.</li>
        </ul>
      </header>
      {example && (
        <section className="card p-5 max-w-3xl">
          <h2 className="font-display font-bold mb-3">Example: {example.name}</h2>
          <BadgeEmbed name={example.name} tier={example.tier} src={`/badge/${example.slug}`} width={BADGE_WIDTH} height={BADGE_HEIGHT} html={badgeHtml(example)} markdown={badgeMarkdown(example)} />
        </section>
      )}
      <section>
        <h2 className="font-display font-bold mb-4">All badges</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((t) => (
            <Link key={t.slug} href={`/tools/${t.slug}#badge`} className="card flex flex-col gap-2 p-4">
              <span className="font-semibold text-white">{t.name}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/badge/${t.slug}`} alt={`${t.name} is ${t.tier}-tier on Ranked Agents`} width={BADGE_WIDTH} height={BADGE_HEIGHT} loading="lazy" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
