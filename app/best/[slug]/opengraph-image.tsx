import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { rankings, getRanking } from "@/data/rankings";
export const alt = "Ranked Agents ranking";
export const size = ogSize;
export const contentType = ogContentType;
export function generateStaticParams() { return rankings.map((r) => ({ slug: r.slug })); }
export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const r = getRanking((await params).slug);
  if (!r) return renderOg({ title: "AI Agent Rankings", tagline: "The best AI agents by use case." });
  return renderOg({ title: `${r.title} 2026`, tagline: r.blurb, kicker: "Tier list ranking" });
}
