import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { categories, getCategoryBySlug } from "@/lib/categories";
import { getPostsByCategory } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return { title: "Categoría no encontrada" };
  }

  const description = category.description;
  const url = absoluteUrl(`/categoria/${category.slug}`);

  return {
    title: `Categoría: ${category.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `Categoría: ${category.name}`,
      description,
      url,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Categorías", href: "/#categorias" },
          { label: category.name },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {category.name}
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
            {category.description}
          </p>

          <div className="mt-8">
            <ArticleList posts={posts} />
          </div>
        </div>

        <aside className="hidden lg:block">
          <AdPlaceholder
            slot="sidebar"
            label="Sidebar de categoría"
            className="sticky top-24 min-h-[250px]"
          />
        </aside>
      </div>
    </div>
  );
}
