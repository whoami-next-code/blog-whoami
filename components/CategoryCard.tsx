import Link from "next/link";
import type { Category } from "@/lib/types";

type CategoryCardProps = {
  category: Category;
  count?: number;
};

export function CategoryCard({ category, count }: CategoryCardProps) {
  return (
    <Link
      href={`/categoria/${category.slug}`}
      className="block rounded-2xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {category.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {category.description}
      </p>
      {typeof count === "number" ? (
        <p className="mt-4 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {count} {count === 1 ? "artículo" : "artículos"}
        </p>
      ) : null}
    </Link>
  );
}
