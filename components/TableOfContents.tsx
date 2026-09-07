type TocItem = {
  id: string;
  text: string;
  level: number;
};

type TableOfContentsProps = {
  items: TocItem[];
};

export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length < 2) return null;

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
    >
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Contenido
      </p>
      <ol className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={item.level === 3 ? "ml-3" : undefined}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
