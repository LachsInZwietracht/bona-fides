import { getArticleBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static pages for all articles
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel nicht gefunden" };
  }

  return {
    title: `${article.metadata.title} | Bona Fides Detektei`,
    description: article.metadata.excerpt,
    keywords: article.metadata.keyword,
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.excerpt,
      type: "article",
      publishedTime: article.metadata.date,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Extract FAQ for schema markup
  const faqMatch = article.content.match(/## Häufig gestellte Fragen \(FAQ\)\n\n([\s\S]*?)(?=\n---|\n##|$)/);
  const faqSection = faqMatch ? faqMatch[1] : "";
  const faqItems = [];

  const faqRegex = /\*\*F: (.+?)\*\*\nA: ([\s\S]+?)(?=\n\n\*\*F:|\n\n---|\n\n##|$)/g;
  let match;
  while ((match = faqRegex.exec(faqSection)) !== null) {
    faqItems.push({
      question: match[1].trim(),
      answer: match[2].trim(),
    });
  }

  // Generate JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.metadata.title,
    datePublished: article.metadata.date,
    author: { "@type": "Organization", name: "Bona Fides Detektei" },
    publisher: {
      "@type": "Organization",
      name: "Bona Fides Detektei",
      logo: {
        "@type": "ImageObject",
        url: "https://bona-fides.vercel.app/logo.png",
      },
    },
    keywords: article.metadata.keyword,
    articleSection: article.metadata.category,
  };

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer },
          })),
        }
      : null;

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="min-h-screen bg-white">
        {/* Article Header */}
        <header className="border-b border-gray-200 bg-gradient-to-br from-slate-900 to-slate-800 py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center text-amber-400 hover:underline"
            >
              ← Zurück zum Blog
            </Link>
            <div className="mb-4 text-gray-300 text-sm">
              {article.metadata.category} •{" "}
              {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h1 className="font-semibold text-4xl text-white md:text-5xl">
              {article.metadata.title}
            </h1>
          </div>
        </header>

        {/* Article Content */}
        <div className="py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="mb-6 font-semibold text-3xl text-slate-900 md:text-4xl">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="mb-4 mt-12 font-semibold text-2xl text-slate-900 md:text-3xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mb-3 mt-8 font-semibold text-xl text-slate-900 md:text-2xl">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-6 text-gray-700 text-lg leading-relaxed">
                      {children}
                    </p>
                  ),
                  em: ({ children }) => (
                    <em className="not-italic my-8 block border-l-4 border-amber-500 bg-amber-50 py-4 px-6 font-medium text-gray-800 text-lg italic">
                      {children}
                    </em>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-slate-900">
                      {children}
                    </strong>
                  ),
                  ul: ({ children }) => (
                    <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-700 text-lg">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-6 border-l-4 border-amber-500 py-2 pl-6 italic text-gray-600">
                      {children}
                    </blockquote>
                  ),
                  hr: () => <hr className="my-12 border-t border-gray-300" />,
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="text-amber-600 underline hover:text-amber-700"
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {article.content}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
