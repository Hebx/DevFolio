import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://lordheb.com";
  const now = new Date();
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/#about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/#projects", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/#skills", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/#experience", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/#education", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/#achievements", priority: 0.85, changeFrequency: "monthly" as const },
  ];
  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
