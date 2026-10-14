import type { Metadata } from "next";
import Link from "next/link";
import { rankings } from "@/data/rankings";
export const metadata: Metadata = { title: "Rankings by use case", description: "The best AI agents for coding, browsing, automation, voice, research and more.", alternates: { canonical: "/best" } };
export default function Best() {
  return (<div><h1 className="font-display text-4xl font-black mb-8">Rankings</h1><div className="grid gap-4 md:grid-cols-2">{rankings.map((r) => <Link key={r.slug} href={`/best/${r.slug}`} className="card p-6"><h2 className="font-display text-xl font-bold">{r.title}</h2><p className="text-zinc-400 mt-1">{r.blurb}</p><p className="text-xs text-zinc-500 mt-3">{r.picks.length} picks</p></Link>)}</div></div>);
}
