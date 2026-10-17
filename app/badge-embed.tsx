"use client";

import { useState } from "react";

function CopyBlock({ label, code }: { label: string; code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">{label}</span>
        <button
          type="button"
          onClick={async () => { try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {} }}
          className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-zinc-200 hover:border-cyan-300/60 hover:text-white"
        >{copied ? "Copied ✓" : "Copy"}</button>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-cyan-100"><code>{code}</code></pre>
    </div>
  );
}

export function BadgeEmbed({ name, tier, src, width, height, html, markdown }: { name: string; tier: string; src: string; width: number; height: number; html: string; markdown: string }) {
  return (
    <div className="space-y-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${name} is ${tier}-tier on Ranked Agents`} width={width} height={height} />
      <CopyBlock label="HTML (websites)" code={html} />
      <CopyBlock label="Markdown (GitHub README)" code={markdown} />
    </div>
  );
}
