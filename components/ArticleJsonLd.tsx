import type { Post } from "@/lib/types";
import { absoluteUrl, siteConfig } from "@/lib/site";

type ArticleJsonLdProps = {
  post: Post;
};

export function ArticleJsonLd({ post }: ArticleJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    image: post.image ? [absoluteUrl(post.image)] : undefined,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "es-ES",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
