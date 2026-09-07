import { cn } from "@/lib/utils";

type AdPlaceholderProps = {
  label?: string;
  className?: string;
  slot?: "sidebar" | "in-article" | "between-articles" | "footer";
};

/**
 * Espacio reservado para publicidad futura (p. ej. Google AdSense).
 * Sustituye este componente por el snippet real cuando actives anuncios.
 */
export function AdPlaceholder({
  label = "Espacio publicitario",
  className,
  slot = "sidebar",
}: AdPlaceholderProps) {
  return (
    <aside
      data-ad-slot={slot}
      aria-label={label}
      className={cn(
        "flex min-h-[120px] items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 px-4 py-8 text-center dark:border-zinc-700 dark:bg-zinc-900/40",
        className,
      )}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          Publicidad
        </p>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
        <p className="mt-2 text-[11px] text-zinc-400 dark:text-zinc-500">
          Slot: {slot}
        </p>
      </div>
    </aside>
  );
}
