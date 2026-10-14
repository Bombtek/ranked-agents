import type { Metadata } from "next";
import { tools } from "@/data/tools";
import { ToolCard } from "../components";
export const metadata: Metadata = { title: "All AI agent tools", description: "Every AI agent and automation tool on Ranked Agents, sorted by score.", alternates: { canonical: "/tools" } };
export default function ToolsPage() {
  const sorted = [...tools].sort((a, b) => b.score - a.score);
  return (<div><h1 className="font-display text-4xl font-black mb-8">All tools <span className="text-zinc-500">({tools.length})</span></h1><div className="grid gap-3 md:grid-cols-2">{sorted.map((t) => <ToolCard key={t.slug} t={t} />)}</div></div>);
}
