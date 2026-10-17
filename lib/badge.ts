import type { Tool } from "@/data/tools";
import { SITE_URL } from "@/lib/site";

export const BADGE_WIDTH = 220;
export const BADGE_HEIGHT = 36;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const badgeUrl = (slug: string) => `${SITE_URL}/badge/${slug}`;
export const badgeLinkUrl = (slug: string) => `${SITE_URL}/tools/${slug}?ref=badge`;
export const badgeAlt = (t: Tool) => `${t.name} is ${t.tier}-tier on Ranked Agents`;

export function badgeHtml(t: Tool) {
  return `<a href="${badgeLinkUrl(t.slug)}"><img src="${badgeUrl(t.slug)}" alt="${esc(badgeAlt(t))}" width="${BADGE_WIDTH}" height="${BADGE_HEIGHT}"></a>`;
}
export function badgeMarkdown(t: Tool) {
  return `[![${badgeAlt(t)}](${badgeUrl(t.slug)})](${badgeLinkUrl(t.slug)})`;
}

/** Crisp, font-independent-width SVG badge: "RANKED AGENTS | S-TIER" in brand violet→cyan on navy. */
export function badgeSvg(t: Tool) {
  const W = BADGE_WIDTH, H = BADGE_HEIGHT, split = 132;
  const font = "'Segoe UI','Helvetica Neue',Verdana,'DejaVu Sans',Arial,sans-serif";
  const label = `${t.tier}-TIER`;
  const title = esc(badgeAlt(t));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-label="${title}">
<title>${title}</title>
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#7c3aed"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
<linearGradient id="t" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#c4b5fd"/><stop offset="1" stop-color="#67e8f9"/></linearGradient>
<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".18"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></linearGradient>
<clipPath id="r"><rect width="${W}" height="${H}" rx="7"/></clipPath>
</defs>
<g clip-path="url(#r)">
<rect width="${W}" height="${H}" fill="#070b1f"/>
<rect x="${split}" width="${W - split}" height="${H}" fill="url(#g)"/>
<rect width="${W}" height="${H}" fill="url(#s)"/>
<rect x="0" y="${H - 2}" width="${split}" height="2" fill="url(#g)"/>
</g>
<rect x=".5" y=".5" width="${W - 1}" height="${H - 1}" rx="6.5" fill="none" stroke="#fff" stroke-opacity=".16"/>
<g font-family="${font}" font-weight="800">
<text x="14" y="23" font-size="12.5" letter-spacing="1" fill="url(#t)" textLength="${split - 28}" lengthAdjust="spacingAndGlyphs">RANKED AGENTS</text>
<text x="${(split + W) / 2}" y="24.5" font-size="16" fill="#05070f" fill-opacity=".35" text-anchor="middle" textLength="62" lengthAdjust="spacingAndGlyphs">${label}</text>
<text x="${(split + W) / 2}" y="23.5" font-size="16" fill="#fff" text-anchor="middle" textLength="62" lengthAdjust="spacingAndGlyphs">${label}</text>
</g>
</svg>`;
}
