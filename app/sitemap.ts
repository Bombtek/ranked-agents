import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tools", "/best", "/releases", ...rankings.map((r) => `/best/${r.slug}`), ...tools.map((t) => `/tools/${t.slug}`)];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date() }));
}
