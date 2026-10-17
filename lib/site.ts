export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rankedagents.dev";
export const SITE_NAME = "Ranked Agents";
export const tierColor: Record<string, string> = {
  S: "from-fuchsia-500 to-rose-500 text-white",
  A: "from-amber-400 to-orange-500 text-black",
  B: "from-cyan-400 to-sky-500 text-black",
  C: "from-zinc-400 to-zinc-500 text-black",
};
