import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "blog/articles");

export interface ArticleMetadata {
  title: string;
  slug: string;
  keyword: string;
  category: string;
  date: string;
  excerpt: string;
}

export interface Article {
  metadata: ArticleMetadata;
  content: string;
}

// Get all articles, sorted by date (newest first)
export function getAllArticles(): Article[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames
    .filter((fileName) => fileName.endsWith(".md") && fileName !== "README.md")
    .map((fileName) => {
      const fullPath = path.join(articlesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        metadata: data as ArticleMetadata,
        content,
      };
    })
    .sort((a, b) => {
      return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
    });

  return articles;
}

// Get single article by slug
export function getArticleBySlug(slug: string): Article | null {
  const fileNames = fs.readdirSync(articlesDirectory);
  const fileName = fileNames.find((name) => {
    if (name === "README.md" || !name.endsWith(".md")) return false;
    const fullPath = path.join(articlesDirectory, name);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return data.slug === slug;
  });

  if (!fileName) return null;

  const fullPath = path.join(articlesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data as ArticleMetadata,
    content,
  };
}

// Get all slugs for static generation
export function getAllSlugs(): string[] {
  const articles = getAllArticles();
  return articles.map((article) => article.metadata.slug);
}
