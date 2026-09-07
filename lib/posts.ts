import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostMeta } from "@/lib/types";
import { categoryNameToSlug } from "@/lib/categories";

const postsDirectory = path.join(process.cwd(), "content", "posts");

function parsePost(filename: string): Post {
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  return {
    title: String(data.title),
    slug: String(data.slug),
    description: String(data.description),
    date: String(data.date),
    author: String(data.author ?? "Whoami"),
    category: String(data.category),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: data.image ? String(data.image) : undefined,
    featured: Boolean(data.featured),
    content,
    readingTime: `${Math.max(1, Math.ceil(stats.minutes))} min`,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPostMeta(): PostMeta[] {
  return getAllPosts().map((post) => ({
    title: post.title,
    slug: post.slug,
    description: post.description,
    date: post.date,
    author: post.author,
    category: post.category,
    tags: post.tags,
    image: post.image,
    featured: post.featured,
    readingTime: post.readingTime,
  }));
}

export function getPostBySlug(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getFeaturedPosts(limit = 3): PostMeta[] {
  const posts = getAllPostMeta();
  const featured = posts.filter((post) => post.featured);
  const source = featured.length > 0 ? featured : posts;
  return source.slice(0, limit);
}

export function getRecentPosts(limit = 6): PostMeta[] {
  return getAllPostMeta().slice(0, limit);
}

export function getPostsByCategory(categorySlug: string): PostMeta[] {
  return getAllPostMeta().filter(
    (post) => categoryNameToSlug(post.category) === categorySlug,
  );
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  const currentCategorySlug = categoryNameToSlug(current.category);

  return getAllPostMeta()
    .filter((post) => post.slug !== slug)
    .map((post) => {
      let score = 0;
      if (categoryNameToSlug(post.category) === currentCategorySlug) {
        score += 3;
      }
      score += post.tags.filter((tag) => current.tags.includes(tag)).length;
      return { post, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post);
}

export function searchPosts(query: string): PostMeta[] {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return getAllPostMeta();

  return getAllPostMeta().filter((post) => {
    const haystack = [
      post.title,
      post.description,
      post.category,
      ...post.tags,
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}

export function paginatePosts<T>(
  items: T[],
  page: number,
  pageSize = 6,
): {
  items: T[];
  page: number;
  totalPages: number;
  totalItems: number;
} {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: currentPage,
    totalPages,
    totalItems,
  };
}
