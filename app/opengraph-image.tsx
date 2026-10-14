import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OG() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", background: "#07070c", color: "white" }}>
    <div style={{ fontSize: 96, fontWeight: 900, display: "flex" }}><span style={{ color: "#e879f9" }}>RANKED</span>AGENTS</div>
    <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 20 }}>S/A/B/C tier list of AI agents & automation tools</div></div>, size);
}
