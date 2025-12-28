import { getAllArticles } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogCard } from "@/components/blog-card";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { RecentArticlesSection } from "@/components/recent-articles-section";

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
      <div className="absolute inset-0 opacity-30 pointer-events-none">
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

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 border-b border-white/10">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {filterCategory ? (
            <>
              <Link
                href="/blog"
                className="mb-6 inline-flex items-center text-amber-400 hover:text-amber-300 font-mono text-sm uppercase tracking-wide transition-colors"
              >
                ← ZURÜCK ZUM FALLARCHIV
              </Link>
              <div className="text-center space-y-6">
                <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
                  KATEGORIE • {filteredArticles.length} AKTEN
                </Badge>
                <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  {filterCategory}
                </h1>
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
                FALLARCHIV • {articles.length} DOKUMENTIERTE FÄLLE
              </Badge>

              <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight">
                ERMITTLUNGS-
                <br />
                <span className="text-gray-300">ARCHIV</span>
              </h1>

              <p className="mx-auto max-w-3xl text-gray-300 text-xl font-mono leading-relaxed">
                Expertenwissen, Fallstudien und Ermittlungstechniken – Von Deutschlands führender Detektei für digitale Ermittlungen
              </p>

              <div className="flex items-center justify-center gap-2 text-gray-400 font-mono text-sm">
                <Search className="h-4 w-4" />
                <span>Durchsuchen Sie unser Fallarchiv</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Aktuelle Akten Section with Load More */}
      <RecentArticlesSection articles={articles} />

      {/* Articles by Category */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
            <div key={category} className="mb-24">
              {!filterCategory && (
                <div className="mb-12 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wide">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article) => (
                  <BlogCard key={article.metadata.slug} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  );
}
