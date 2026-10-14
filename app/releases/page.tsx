import type { Metadata } from "next";
import Link from "next/link";
import { releases } from "@/data/releases";
export const metadata: Metadata = { title: "New AI agent releases", description: "Recent launches and updates across AI agents and automation tools, with sources.", alternates: { canonical: "/releases" } };
export default function Releases() {
  return (<div><h1 className="font-display text-4xl font-black mb-8">New releases</h1><ul className="space-y-3">{releases.map((r) => (
    <li key={r.title} className="card p-5"><p className="text-xs font-display text-cyan-300">{r.date} · {r.product}</p><h2 className="font-semibold text-lg mt-1">{r.title}</h2><p className="text-zinc-400 text-sm">{r.summary}</p>
      <div className="mt-2 flex gap-4 text-sm"><a href={r.source} target="_blank" rel="noopener" className="text-fuchsia-300 hover:underline">Source ↗</a>{r.toolSlug && <Link href={`/tools/${r.toolSlug}`} className="text-zinc-300 hover:underline">Tool page</Link>}</div></li>))}</ul></div>);
}
