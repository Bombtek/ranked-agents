import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadFont(family: string, weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family.replace(/ /g, "+")}:wght@${weight}`, {
      headers: { "User-Agent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1" },
    })).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch { return null; }
}

const TIERS = [
  { t: "S", bg: "linear-gradient(135deg, #7c3aed, #c026d3)", glow: "0 0 40px rgba(124,58,237,0.9)" },
  { t: "A", bg: "linear-gradient(135deg, #6366f1, #22d3ee)", glow: "0 0 40px rgba(99,102,241,0.8)" },
  { t: "B", bg: "linear-gradient(135deg, #0891b2, #22d3ee)", glow: "0 0 40px rgba(34,211,238,0.8)" },
];

export async function renderOg({ title, tagline, kicker, tier }: { title: string; tagline: string; kicker?: string; tier?: string }) {
  const [heavy, bold] = await Promise.all([loadFont("Inter", 900), loadFont("Inter", 700)]);
  const fonts = [
    ...(heavy ? [{ name: "Inter", data: heavy, weight: 900 as const, style: "normal" as const }] : []),
    ...(bold ? [{ name: "Inter", data: bold, weight: 700 as const, style: "normal" as const }] : []),
  ];
  const titleSize = title.length > 34 ? 72 : title.length > 22 ? 88 : 104;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 64px", background: "#05070f", backgroundImage: "radial-gradient(circle at 85% 20%, rgba(124,58,237,0.35), transparent 45%), radial-gradient(circle at 10% 100%, rgba(34,211,238,0.25), transparent 50%)", color: "white", fontFamily: "Inter" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 40, fontWeight: 900, letterSpacing: 2, backgroundImage: "linear-gradient(90deg, #7c3aed, #22d3ee)", backgroundClip: "text", color: "transparent" }}>RANKED AGENTS</div>
          <div style={{ display: "flex", gap: 18 }}>
            {TIERS.map((x) => (
              <div key={x.t} style={{ display: "flex", width: 92, height: 92, borderRadius: 18, alignItems: "center", justifyContent: "center", fontSize: 60, fontWeight: 900, color: "white", backgroundImage: x.bg, boxShadow: x.glow, border: tier === x.t ? "4px solid white" : "2px solid rgba(255,255,255,0.25)" }}>{x.t}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {kicker && <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#22d3ee", textTransform: "uppercase", letterSpacing: 4, marginBottom: 12 }}>{kicker}</div>}
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 900, lineHeight: 1.02, letterSpacing: -2, maxWidth: 1070 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#c7d2fe", marginTop: 22, maxWidth: 1050, lineHeight: 1.25 }}>{tagline}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", height: 8, width: 420, borderRadius: 4, backgroundImage: "linear-gradient(90deg, #7c3aed, #22d3ee)" }} />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#e2e8f0" }}>rankedagents.dev</div>
        </div>
      </div>
    ),
    { ...ogSize, fonts: fonts.length ? fonts : undefined },
  );
}
