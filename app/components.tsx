import Link from "next/link";
import { tierColor } from "@/lib/site";
import { type Tool } from "@/data/tools";
import { OutboundLink } from "./outbound-link";
export function TierBadge({ tier, big }: { tier: string; big?: boolean }) {
  return <span className={`inline-flex items-center justify-center rounded-md bg-gradient-to-br font-display font-black ${tierColor[tier]} ${big ? "h-16 w-16 text-4xl" : "h-8 w-8 text-lg"}`}>{tier}</span>;
}
export function ToolCard({ t, rank, reason }: { t: Tool; rank?: number; reason?: string }) {
  return (
    <div className="card relative flex items-start gap-4 p-4">
      {rank !== undefined && <span className="font-display text-2xl font-black text-white/30 w-8">#{rank}</span>}
      <TierBadge tier={t.tier} />
      <div className="flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-white"><Link href={`/tools/${t.slug}`} className="after:absolute after:inset-0">{t.name}</Link></h3>
          <span className="font-display text-sm text-fuchsia-300">{t.score}</span>
        </div>
        <p className="text-sm text-zinc-400">{reason ?? t.summary}</p>
        <OutboundLink tool={t} className="relative z-10 mt-1 inline-block text-xs text-cyan-300 hover:underline">Visit ↗</OutboundLink>
      </div>
    </div>
  );
}
