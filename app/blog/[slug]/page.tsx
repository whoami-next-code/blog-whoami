import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AdPlaceholder } from "@/components/AdPlaceholder";
import { ArticleJsonLd } from "@/components/ArticleJsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { MarkdownContent } from "@/components/MarkdownContent";
import { RelatedArticles } from "@/components/RelatedArticles";
import { ShareButtons } from "@/components/ShareButtons";
import { TableOfContents } from "@/components/TableOfContents";
import { categoryNameToSlug } from "@/lib/categories";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";
import { extractHeadings, formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Artículo no encontrado",
    };
  }

  const url = absoluteUrl(`/blog/${post.slug}`);

  return {
    title: post.title,
    description: post.description,
    authors: [{ name: post.author }],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image
        ? [
            {
              url: absoluteUrl(post.image),
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [absoluteUrl(post.image)] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post.slug, 3);
  const url = absoluteUrl(`/blog/${post.slug}`);

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <ArticleJsonLd post={post} />

      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <header>
            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
              <Link
                href={`/categoria/${categoryNameToSlug(post.category)}`}
                className="font-medium text-sky-700 hover:underline dark:text-sky-400"
              >
                {post.category}
              </Link>
              <span aria-hidden>•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden>•</span>
              <span>{post.readingTime} de lectura</span>
              <span aria-hidden>•</span>
              <span>Por {post.author}</span>
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>

            {post.image ? (
              <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
                <Image
                  src={post.image}
                  alt={`Imagen de portada: ${post.title}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 720px"
                  priority
                />
              </div>
            ) : null}

            <div className="mt-6">
              <ShareButtons title={post.title} url={url} />
            </div>
          </header>

          <div className="mt-8 lg:hidden">
            <TableOfContents items={headings} />
          </div>

          <div className="mt-8">
            <MarkdownContent content={post.content} />
          </div>

          <div className="my-10">
            <AdPlaceholder slot="in-article" label="Anuncio dentro del artículo" />
          </div>

          {post.tags.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-2" aria-label="Etiquetas">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}

          <RelatedArticles posts={related} />
        </div>

        <aside className="hidden space-y-6 lg:block">
          <div className="sticky top-24 space-y-6">
            <TableOfContents items={headings} />
            <AdPlaceholder slot="sidebar" label="Sidebar del artículo" className="min-h-[250px]" />
          </div>
        </aside>
      </div>
    </article>
  );
}
