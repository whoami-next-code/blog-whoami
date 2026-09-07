"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type AdUnitProps = {
  adSlotId: string;
  className?: string;
  label?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdUnit({ adSlotId, className, label = "Anuncio" }: AdUnitProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current || !siteConfig.adsenseClient) return;
    pushed.current = true;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Bloqueadores de anuncios u otros errores no deben romper la página.
    }
  }, []);

  if (!siteConfig.adsenseClient) return null;

  return (
    <aside aria-label={label} className={cn("overflow-hidden", className)}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={siteConfig.adsenseClient}
        data-ad-slot={adSlotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}
