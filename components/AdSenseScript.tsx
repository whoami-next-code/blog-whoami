import Script from "next/script";
import { siteConfig } from "@/lib/site";

/**
 * Script oficial de AdSense en <head> (beforeInteractive),
 * como pide Google para verificar el sitio.
 */
export function AdSenseScript() {
  if (!siteConfig.adsenseClient) {
    return null;
  }

  return (
    <Script
      id="adsense-init"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsenseClient}`}
      crossOrigin="anonymous"
      strategy="beforeInteractive"
    />
  );
}
