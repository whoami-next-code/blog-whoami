export type PostFrontmatter = {
  title: string;
  slug: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  featured?: boolean;
};

export type Post = PostFrontmatter & {
  content: string;
  readingTime: string;
};

export type PostMeta = Omit<Post, "content">;

export type Category = {
  name: string;
  slug: string;
  description: string;
};
