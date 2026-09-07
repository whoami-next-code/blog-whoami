import type { PostMeta } from "@/lib/types";
import { ArticleCard } from "@/components/ArticleCard";

type RelatedArticlesProps = {
  posts: PostMeta[];
};

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-14" aria-labelledby="related-heading">
      <h2
        id="related-heading"
        className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
      >
        Artículos relacionados
      </h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
