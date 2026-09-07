import Link from "next/link";
import Image from "next/image";
import type { PostMeta } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { categoryNameToSlug } from "@/lib/categories";

type ArticleCardProps = {
  post: PostMeta;
  priority?: boolean;
};

export function ArticleCard({ post, priority = false }: ArticleCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700">
      {post.image ? (
        <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={post.image}
            alt={`Imagen de portada: ${post.title}`}
            fill
            className="object-cover transition duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </Link>
      ) : null}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <Link
            href={`/categoria/${categoryNameToSlug(post.category)}`}
            className="font-medium text-sky-700 hover:underline dark:text-sky-400"
          >
            {post.category}
          </Link>
          <span aria-hidden>•</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>•</span>
          <span>{post.readingTime} de lectura</span>
        </div>

        <h3 className="mt-3 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          <Link
            href={`/blog/${post.slug}`}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex text-sm font-medium text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100"
        >
          Leer artículo
        </Link>
      </div>
    </article>
  );
}
