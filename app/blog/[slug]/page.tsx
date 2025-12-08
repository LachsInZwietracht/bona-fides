import { getArticleBySlug, getAllSlugs } from "@/lib/blog";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft, FileText } from "lucide-react";
import Image from "next/image";

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

  const baseUrl = 'https://bona-fides.vercel.app';
  const articleUrl = `${baseUrl}/blog/${slug}`;

  return {
    title: `${article.metadata.title} | Bona Fides Detektei`,
    description: article.metadata.excerpt,
    keywords: article.metadata.keyword,
    authors: [{ name: 'Bona Fides Detektei' }],
    creator: 'Bona Fides Detektei',
    publisher: 'Bona Fides Detektei',
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.metadata.title,
      description: article.metadata.excerpt,
      url: articleUrl,
      siteName: 'Bona Fides Detektei',
      locale: 'de_DE',
      type: 'article',
      publishedTime: article.metadata.date,
      authors: ['Bona Fides Detektei'],
      section: article.metadata.category,
      tags: [article.metadata.keyword, article.metadata.category, 'Detektei', 'Deutschland', 'Ermittlungen'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.metadata.title,
      description: article.metadata.excerpt,
      creator: '@bonafides',
      site: '@bonafides',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
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

  // Map categories to Unsplash image IDs
  const categoryImages: Record<string, string> = {
    "Digital Investigations": "FlPc9_VocJ4",
    "Cyberbetrug": "iar-afB0QQw",
    "Hintergrundprüfung": "5QgIuuBxKwM",
    "Untreue": "jrh5lAq-mIs",
    "Unternehmensbetrug": "hpjSkU2UYSU",
    "Louvre Heist": "zGZPvm3tzxE",
  };

  const imageId = categoryImages[article.metadata.category] || "FlPc9_VocJ4";

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

      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <Header dark />

        {/* Film grain texture */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Venetian blind effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="h-full w-full"
            style={{
              background: `repeating-linear-gradient(
                0deg,
                transparent 0px,
                transparent 15px,
                rgba(255,255,255,0.08) 15px,
                rgba(255,255,255,0.08) 18px,
                transparent 18px,
                transparent 35px
              )`,
            }}
          />
        </div>

        <article className="relative z-10">
          {/* Article Header with Hero Image */}
          <header className="relative border-b border-white/10 overflow-hidden">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={`https://images.unsplash.com/${imageId}?w=1920&q=80&fit=crop`}
                alt={article.metadata.title}
                fill
                className="object-cover opacity-40"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

              {/* Content Overlay */}
              <div className="absolute inset-0 flex items-end">
                <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
                  <Link
                    href="/blog"
                    className="mb-6 inline-flex items-center text-amber-400 hover:text-amber-300 font-mono text-sm uppercase tracking-wide transition-colors group"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Zurück zum Archiv
                  </Link>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 flex-wrap">
                      <Badge className="bg-red-600/90 text-white font-mono text-xs px-3 py-1 rounded-sm backdrop-blur-sm">
                        {article.metadata.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-gray-300 text-sm font-mono">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-2xl">
                      {article.metadata.title}
                    </h1>

                    {article.metadata.excerpt && (
                      <p className="text-xl text-gray-300 font-mono max-w-3xl leading-relaxed">
                        {article.metadata.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Classification Stamp */}
                  <div className="absolute top-8 right-8 transform rotate-12">
                    <div className="w-20 h-20 border-4 border-dashed border-red-500/70 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/30">
                      <div className="text-center">
                        <FileText className="h-8 w-8 text-red-500 mx-auto mb-1" />
                        <div className="text-[10px] font-mono font-bold text-red-500 tracking-tight">
                          GEHEIM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content - Case File Style */}
          <div className="py-16 md:py-20">
            <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              {/* Paper Document Effect */}
              <div className="relative">
                {/* Shadow layers */}
                <div className="absolute inset-0 bg-gray-800/20 transform rotate-1 rounded-sm" />
                <div className="absolute inset-0 bg-gray-700/10 transform -rotate-1 rounded-sm" />

                {/* Main document */}
                <div className="relative bg-white/95 text-black p-6 sm:p-8 md:p-12 lg:p-16 rounded-sm shadow-2xl">
                  {/* Paper texture */}
                  <div
                    className="absolute inset-0 opacity-10 rounded-sm pointer-events-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperGrain)' opacity='0.4'/%3E%3C/svg%3E")`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 prose prose-lg max-w-none">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => (
                          <h1 className="mb-6 font-serif font-bold text-3xl text-black md:text-4xl border-b-4 border-amber-500 pb-4">
                            {children}
                          </h1>
                        ),
                        h2: ({ children }) => (
                          <h2 className="mb-4 mt-12 font-serif font-bold text-2xl text-black md:text-3xl border-l-4 border-amber-500 pl-4">
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className="mb-3 mt-8 font-serif font-bold text-xl text-black md:text-2xl">
                            {children}
                          </h3>
                        ),
                        p: ({ children }) => (
                          <p className="mb-6 text-gray-800 text-lg leading-relaxed font-mono">
                            {children}
                          </p>
                        ),
                        em: ({ children }) => (
                          <em className="not-italic my-8 block border-l-4 border-red-600 bg-red-50 py-6 px-8 font-mono text-gray-900 text-lg italic shadow-md">
                            {children}
                          </em>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-bold text-black underline decoration-amber-500 decoration-2">
                            {children}
                          </strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="mb-6 ml-6 space-y-3">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="mb-6 ml-6 space-y-3">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-gray-800 text-lg font-mono before:content-['▸'] before:text-amber-600 before:font-bold before:mr-3">
                            {children}
                          </li>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className="my-8 border-l-4 border-amber-600 bg-amber-50/50 py-4 pl-8 pr-6 italic text-gray-700 font-serif text-xl">
                            {children}
                          </blockquote>
                        ),
                        hr: () => (
                          <hr className="my-12 border-t-2 border-dashed border-gray-400" />
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-amber-700 underline hover:text-amber-900 font-bold transition-colors"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {article.content}
                    </ReactMarkdown>
                  </div>

                  {/* Paper clips */}
                  <div className="absolute top-4 left-8 w-12 h-6 border-2 border-gray-400/40 rounded-full" />
                  <div className="absolute top-8 left-12 w-10 h-5 border-2 border-gray-400/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </article>

        <Footer />

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
      </div>
    </>
  );
}
