import type { PostMeta } from "@/lib/types";
import { ArticleCard } from "@/components/ArticleCard";

type ArticleListProps = {
  posts: PostMeta[];
  priorityCount?: number;
};

export function ArticleList({ posts, priorityCount = 0 }: ArticleListProps) {
  if (posts.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-zinc-300 px-4 py-10 text-center text-sm text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        No hay artículos para mostrar.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <ArticleCard
          key={post.slug}
          post={post}
          priority={index < priorityCount}
        />
      ))}
    </div>
  );
}
