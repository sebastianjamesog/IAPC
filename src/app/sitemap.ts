import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors belong to the homepage, not separate indexable pages.
  return [{ url: siteUrl, changeFrequency: "monthly", priority: 1 }];
}
