import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site";
import { AdUnit } from "@/components/AdUnit";

type AdPlaceholderProps = {
  label?: string;
  className?: string;
  slot?: "sidebar" | "in-article" | "between-articles" | "footer";
  /** ID de unidad de anuncio de AdSense (data-ad-slot). Opcional. */
  adSlotId?: string;
};

/**
 * Espacio publicitario.
 * - Con AdSense + adSlotId: unidad display manual.
 * - Con AdSense sin adSlotId: reserva espacio (Auto ads gestiona el resto).
 * - Sin AdSense: placeholder visual de desarrollo.
 */
export function AdPlaceholder({
  label = "Espacio publicitario",
  className,
  slot = "sidebar",
  adSlotId,
}: AdPlaceholderProps) {
  const adsEnabled = Boolean(siteConfig.adsenseClient);

  if (adsEnabled && adSlotId) {
    return (
      <AdUnit
        adSlotId={adSlotId}
        className={className}
        label={label}
      />
    );
  }

  if (adsEnabled) {
    return (
      <aside
        data-ad-placement={slot}
        aria-hidden
        className={cn("min-h-[90px]", className)}
      />
    );
  }

  return (
    <aside
      data-ad-placement={slot}
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
