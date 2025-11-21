import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ai-vibe-dashboard.vercel.app/dashboard",
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://ai-vibe-dashboard.vercel.app/playground",
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
