import { tools, getTool } from "@/data/tools";
import { badgeSvg } from "@/lib/badge";

export const dynamic = "force-static";
export const dynamicParams = false;
export function generateStaticParams() { return tools.map((t) => ({ slug: t.slug })); }

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const t = getTool((await params).slug);
  if (!t) return new Response("Not found", { status: 404 });
  return new Response(badgeSvg(t), {
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
