import { renderOg, ogSize, ogContentType } from "@/lib/og";
import { tools, getTool } from "@/data/tools";
export const alt = "Ranked Agents tool review";
export const size = ogSize;
export const contentType = ogContentType;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }
export default async function OG({ params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug);
  if (!t) return renderOg({ title: "AI Agent Tools", tagline: "Every AI agent, ranked." });
  return renderOg({ title: `${t.name}: ${t.tier}-Tier`, tagline: t.summary, kicker: `Review · Score ${t.score}/100`, tier: t.tier });
}
