import type { MetadataRoute } from "next";
import { navigation, siteConfig } from "@/lib/config";
import { latestNews } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteConfig.url}/` },
    ...navigation.map((item) => ({ url: `${siteConfig.url}${item.href}/` })),
    ...latestNews.map((item) => ({ url: `${siteConfig.url}/news/${item.slug}/`, lastModified: item.date })),
  ];
}
