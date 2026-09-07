"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/types";
import { ArticleList } from "@/components/ArticleList";

type SearchBarProps = {
  posts: PostMeta[];
  placeholder?: string;
};

export function SearchBar({
  posts,
  placeholder = "Buscar por título, descripción, categoría o tags…",
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;

    return posts.filter((post) => {
      const haystack = [post.title, post.description, post.category, ...post.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [posts, query]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="article-search" className="sr-only">
          Buscar artículos
        </label>
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            aria-hidden
          />
          <input
            id="article-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placeholder}
            className="w-full rounded-xl border border-zinc-200 bg-white py-3 pl-10 pr-4 text-sm text-zinc-900 outline-none ring-sky-500 placeholder:text-zinc-400 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
          />
        </div>
        <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400" aria-live="polite">
          {results.length} {results.length === 1 ? "resultado" : "resultados"}
        </p>
      </div>

      <ArticleList posts={results} />
    </div>
  );
}
