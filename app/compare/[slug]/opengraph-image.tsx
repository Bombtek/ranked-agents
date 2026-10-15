import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { comparisons, getComparison } from "@/data/compare";
export const alt = "Ranked Agents comparison";
export const size = ogSize;
export const contentType = ogContentType;
export function generateStaticParams() { return comparisons.map((c) => ({ slug: c.slug })); }
export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const c = getComparison((await params).slug);
  if (!c) return renderOg({ title: "AI Tool Comparisons", tagline: "Head-to-head picks with pricing and verdicts." });
  const [head, rest] = c.h1.split(":");
  const tagline = rest?.trim() ? rest.trim().replace(/^./, (m) => m.toUpperCase()) : c.description;
  return renderOg({ title: head.trim(), tagline, kicker: c.kind === "vs" ? "Head to head · 2026" : "Alternatives · 2026" });
}
