import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleList } from "@/components/ArticleList";
import { CategoryCard } from "@/components/CategoryCard";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { categories } from "@/lib/categories";
import { getFeaturedPosts, getPostsByCategory, getRecentPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function HomePage() {
  const featured = getFeaturedPosts(3);
  const recent = getRecentPosts(6);

  return (
    <div className="hero-atmosphere">
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700 dark:text-sky-400">
          {siteConfig.name}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          Soluciones, tutoriales y herramientas que realmente funcionan.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          Guías prácticas y fáciles de entender sobre tecnología, programación,
          Windows y herramientas digitales.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            Explorar el blog
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            href="/sobre-nosotros"
            className="inline-flex items-center rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            Sobre el proyecto
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="featured-heading">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 id="featured-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Artículos destacados
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Lecturas seleccionadas para empezar rápido.
            </p>
          </div>
          <Link href="/blog" className="hidden text-sm font-medium text-sky-700 hover:underline sm:inline dark:text-sky-400">
            Ver todos
          </Link>
        </div>
        <ArticleList posts={featured} priorityCount={1} />
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AdPlaceholder slot="between-articles" label="Espacio entre secciones" />
      </div>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-labelledby="recent-heading">
        <div className="mb-6">
          <h2 id="recent-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Artículos recientes
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Las últimas guías publicadas en el blog.
          </p>
        </div>
        <ArticleList posts={recent} />
      </section>

      <section
        id="categorias"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="categories-heading"
      >
        <div className="mb-6">
          <h2 id="categories-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Categorías
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Explora contenidos por tema.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              category={category}
              count={getPostsByCategory(category.slug).length}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6" aria-labelledby="purpose-heading">
        <div className="rounded-3xl border border-zinc-200 bg-white px-6 py-10 sm:px-10 dark:border-zinc-800 dark:bg-zinc-950">
          <h2 id="purpose-heading" className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            El propósito de este blog
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {siteConfig.name} nace para compartir tutoriales claros y accionables.
            Priorizamos explicaciones útiles, pasos concretos y contenido pensado
            primero para personas reales — y después para buscadores.
          </p>
        </div>
      </section>
    </div>
  );
}
