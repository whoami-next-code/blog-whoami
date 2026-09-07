import Link from "next/link";
import { cn } from "@/lib/utils";

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath?: string;
};

export function Pagination({
  page,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const prev = page > 1 ? page - 1 : null;
  const next = page < totalPages ? page + 1 : null;

  const hrefFor = (value: number) =>
    value === 1 ? basePath : `${basePath}?page=${value}`;

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Paginación"
    >
      {prev ? (
        <Link
          href={hrefFor(prev)}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
        >
          Anterior
        </Link>
      ) : (
        <span className="rounded-lg border border-transparent px-3 py-2 text-sm text-zinc-400">
          Anterior
        </span>
      )}

      <ul className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, index) => {
          const value = index + 1;
          const active = value === page;
          return (
            <li key={value}>
              <Link
                href={hrefFor(value)}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 min-w-9 items-center justify-center rounded-lg px-2 text-sm",
                  active
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                    : "border border-zinc-200 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900",
                )}
              >
                {value}
              </Link>
            </li>
          );
        })}
      </ul>

      {next ? (
        <Link
          href={hrefFor(next)}
          className="rounded-lg border border-zinc-200 px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-900"
        >
          Siguiente
        </Link>
      ) : (
        <span className="rounded-lg border border-transparent px-3 py-2 text-sm text-zinc-400">
          Siguiente
        </span>
      )}
    </nav>
  );
}
