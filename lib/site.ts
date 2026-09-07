const DEFAULT_SITE_URL = "https://whoami.dev";

function resolveSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }

  // En Vercel, si no configuraste NEXT_PUBLIC_SITE_URL, usa la URL del deployment.
  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return DEFAULT_SITE_URL;
}

export const siteConfig = {
  name: "Whoami",
  title: "Whoami — Guías prácticas de tecnología",
  description:
    "Guías prácticas y fáciles de entender sobre tecnología, programación, Windows y herramientas digitales.",
  url: resolveSiteUrl(),
  author: "Whoami",
  locale: "es_ES",
  twitterHandle: "@whoami",
  /** Publisher ID de Google AdSense (formato ca-pub-xxxxxxxx). */
  adsenseClient:
    process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim() ||
    "ca-pub-7923527211384947",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
