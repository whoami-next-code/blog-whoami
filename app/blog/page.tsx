import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SearchBar } from "@/components/SearchBar";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { getAllPostMeta } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Listado de artículos y guías prácticas sobre tecnología, programación, Windows y herramientas digitales.",
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    title: "Blog",
    description:
      "Listado de artículos y guías prácticas sobre tecnología, programación, Windows y herramientas digitales.",
    url: absoluteUrl("/blog"),
  },
};

export default function BlogPage() {
  const posts = getAllPostMeta();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Blog
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Busca y lee guías prácticas. El buscador filtra por título,
            descripción, categoría y tags.
          </p>

          <div className="mt-8">
            <SearchBar posts={posts} />
          </div>
        </div>

        <aside className="hidden space-y-6 lg:block">
          <AdPlaceholder slot="sidebar" label="Sidebar del blog" className="sticky top-24 min-h-[250px]" />
        </aside>
      </div>
    </div>
  );
}
