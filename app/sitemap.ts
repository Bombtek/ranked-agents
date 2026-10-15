import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { rankings } from "@/data/rankings";
import { comparisons } from "@/data/compare";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/tools", "/best", "/releases", "/disclosure", "/compare", ...comparisons.map((c) => `/compare/${c.slug}`), ...rankings.map((r) => `/best/${r.slug}`), ...tools.map((t) => `/tools/${t.slug}`)];
  return paths.map((p) => ({ url: `${SITE_URL}${p}`, lastModified: new Date() }));
}
