import type { Metadata } from "next";
export const metadata: Metadata = { title: "Affiliate disclosure", description: "How Ranked Agents uses affiliate links.", alternates: { canonical: "/disclosure" } };
export default function Disclosure() {
  return (
    <div className="max-w-2xl space-y-4">
      <h1 className="font-display text-4xl font-black">Affiliate disclosure</h1>
      <p className="text-zinc-300">Some links are affiliate links; we may earn a commission at no cost to you. Rankings are not influenced by affiliate relationships.</p>
      <p className="text-zinc-400 text-sm">Affiliate links are marked with <code>rel=&quot;sponsored&quot;</code>. Tiers and scores are editorial opinions.</p>
    </div>
  );
}
