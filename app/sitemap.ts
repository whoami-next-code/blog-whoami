import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { getAllPostMeta } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPostMeta().map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const categoryEntries = categories.map((category) => ({
    url: absoluteUrl(`/categoria/${category.slug}`),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/sobre-nosotros"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: absoluteUrl("/contacto"),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    ...categoryEntries,
    ...posts,
  ];
}
