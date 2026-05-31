import type { MetadataRoute } from "next";
import { allSystems } from "@/data/systems";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const systemRoutes = allSystems.map((system) => ({
    url: `${siteUrl}/systems/${system.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: Number(system.id) <= 5 ? 0.8 : 0.6,
  }));

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/archive`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...systemRoutes,
  ];
}
