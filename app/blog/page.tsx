import { getAllArticles } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bona Fides Detektei - Expertise in Digitalen Ermittlungen",
  description:
    "200+ Fachartikel zu digitalen Ermittlungen, Cyberkriminalität, Betrugsaufklärung und Hintergrundprüfungen. DSGVO-konform, rechtssicher und praxisnah von Deutschlands führender Detektei.",
  keywords: "Detektei Blog, digitale Ermittlungen, Cyberkriminalität, Betrugsaufklärung, OSINT, forensische Analysen, Hintergrundprüfungen",
  alternates: {
    canonical: 'https://bona-fides.vercel.app/blog',
  },
  openGraph: {
    title: "Bona Fides Blog - Expertise in Digitalen Ermittlungen",
    description: "200+ Fachartikel zu digitalen Ermittlungen, Cyberkriminalität und Betrugsaufklärung",
    url: 'https://bona-fides.vercel.app/blog',
    siteName: 'Bona Fides Detektei',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bona Fides Blog - Expertise in Digitalen Ermittlungen",
    description: "200+ Fachartikel zu digitalen Ermittlungen und Cyberkriminalität",
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

interface BlogIndexProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogIndex({ searchParams }: BlogIndexProps) {
  const { category: filterCategory } = await searchParams;
  const articles = getAllArticles();

  // Filter by category if specified
  const filteredArticles = filterCategory
    ? articles.filter((article) => article.metadata.category === filterCategory)
    : articles;

  // Group articles by category
  const articlesByCategory = filteredArticles.reduce(
    (acc, article) => {
      const category = article.metadata.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(article);
      return acc;
    },
    {} as Record<string, typeof filteredArticles>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="border-b border-gray-200 bg-gradient-to-br from-slate-900 to-slate-800 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          {filterCategory ? (
            <>
              <Link
                href="/blog"
                className="mb-4 inline-flex items-center text-amber-400 hover:underline"
              >
                ← Alle Artikel
              </Link>
              <h1 className="mb-6 text-center font-semibold text-5xl text-white md:text-6xl">
                {filterCategory}
              </h1>
              <p className="mx-auto max-w-2xl text-center text-gray-300 text-lg">
                {filteredArticles.length} Artikel in dieser Kategorie
              </p>
            </>
          ) : (
            <>
              <h1 className="mb-6 text-center font-semibold text-5xl text-white md:text-6xl">
                Bona Fides Blog
              </h1>
              <p className="mx-auto max-w-2xl text-center text-gray-300 text-lg">
                Expertenwissen zu digitalen Ermittlungen, Cyberkriminalität und
                Betrugsaufklärung. Von Deutschlands führender Detektei für digitale
                Ermittlungen.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Articles by Category */}
      <section className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
            <div key={category} className="mb-16">
              {!filterCategory && (
                <h2 className="mb-8 border-b border-gray-300 pb-4 font-semibold text-2xl text-slate-900 md:text-3xl">
                  {category}
                </h2>
              )}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article, index) => {
                  const gradients = [
                    "from-amber-500/20 to-yellow-400/10",
                    "from-slate-700/20 to-slate-500/10",
                    "from-amber-600/20 to-amber-400/10",
                  ];
                  const gradient = gradients[index % gradients.length];

                  return (
                    <Link
                      key={article.metadata.slug}
                      href={`/blog/${article.metadata.slug}`}
                      className="group block overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-amber-500 hover:shadow-lg"
                    >
                      {/* Gradient Placeholder */}
                      <div
                        className={`aspect-[16/9] w-full bg-gradient-to-br ${gradient} flex items-center justify-center p-6`}
                      >
                        <div className="text-center">
                          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-amber-600">
                            {article.metadata.category}
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="mb-3 font-semibold text-slate-900 text-xl leading-tight group-hover:text-amber-600">
                          {article.metadata.title}
                        </h3>
                        {article.metadata.excerpt && (
                          <p className="mb-3 text-gray-600 text-sm line-clamp-2">
                            {article.metadata.excerpt}
                          </p>
                        )}
                        <p className="mb-4 text-gray-500 text-xs">
                          {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                        <div className="flex items-center text-amber-600 text-sm font-medium">
                          Artikel lesen →
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
