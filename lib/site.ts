export const siteConfig = {
  name: "Whoami",
  title: "Whoami — Guías prácticas de tecnología",
  description:
    "Guías prácticas y fáciles de entender sobre tecnología, programación, Windows y herramientas digitales.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://whoami.dev",
  author: "Whoami",
  locale: "es_ES",
  twitterHandle: "@whoami",
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
