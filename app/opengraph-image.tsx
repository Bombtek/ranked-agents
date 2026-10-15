import { renderOg, ogSize, ogContentType } from "@/lib/og";
export const alt = "Ranked Agents — the tier list for AI agents & automation tools";
export const size = ogSize;
export const contentType = ogContentType;
export default function OG() {
  return renderOg({ title: "The AI Agent Tier List", tagline: "S/A/B tier rankings of coding agents, browser agents, frameworks & automation tools.", kicker: "Ranked Agents 2026" });
}
