import { getAllArticles } from "@/lib/blog";
import Link from "next/link";
import { Metadata } from "next";
import { Header } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, ArrowRight, Search } from "lucide-react";
import Image from "next/image";

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

// Map categories to Unsplash image IDs (detective/investigation themed)
const categoryImages: Record<string, string> = {
  "Digital Investigations": "FlPc9_VocJ4", // Digital forensics
  "Cyberbetrug": "iar-afB0QQw", // Cybercrime
  "Hintergrundprüfung": "5QgIuuBxKwM", // Background checks
  "Untreue": "jrh5lAq-mIs", // Surveillance
  "Unternehmensbetrug": "hpjSkU2UYSU", // Corporate fraud
  "Louvre Heist": "zGZPvm3tzxE", // Art/museum
};

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
        <div className="container mx-auto max-w-6xl px-8">
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
                <h1 className="font-serif font-bold text-5xl md:text-6xl text-white">
                  {filterCategory}
                </h1>
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              <Badge className="font-mono text-xs tracking-widest px-4 py-2 backdrop-blur-sm border" style={{backgroundColor: 'rgba(194, 177, 109, 0.2)', color: '#FEF3C6', borderColor: 'rgba(194, 177, 109, 0.3)'}}>
                FALLARCHIV • {articles.length} DOKUMENTIERTE FÄLLE
              </Badge>

              <h1 className="font-serif font-bold text-5xl md:text-7xl text-white tracking-tight">
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

      {/* Articles by Category */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-8">
          {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
            <div key={category} className="mb-24">
              {!filterCategory && (
                <div className="mb-12 flex items-center gap-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <h2 className="font-serif font-bold text-3xl md:text-4xl text-white uppercase tracking-wide">
                    {category}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              )}

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {categoryArticles.map((article) => {
                  const imageId = categoryImages[category] || "FlPc9_VocJ4";

                  return (
                    <Link
                      key={article.metadata.slug}
                      href={`/blog/${article.metadata.slug}`}
                      className="group relative"
                    >
                      {/* Case File Folder */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl hover:bg-white/8 hover:border-amber-500/30 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.2)]">

                        {/* Image */}
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-900">
                          <Image
                            src={`https://images.unsplash.com/${imageId}?w=800&q=80&fit=crop`}
                            alt={article.metadata.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                          {/* Category Badge on Image */}
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-red-600/90 text-white font-mono text-xs px-2 py-1 rounded-sm backdrop-blur-sm">
                              {article.metadata.category}
                            </Badge>
                          </div>

                          {/* Classification Stamp */}
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform rotate-12">
                            <div className="w-12 h-12 border-2 border-dashed border-amber-400/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <FileText className="h-5 w-5 text-amber-400" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                          <h3 className="font-serif font-bold text-xl text-white leading-tight group-hover:text-amber-300 group-hover:tracking-wider transition-all duration-500 line-clamp-2">
                            {article.metadata.title}
                          </h3>

                          {article.metadata.excerpt && (
                            <p className="text-gray-400 font-mono text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-500">
                              {article.metadata.excerpt}
                            </p>
                          )}

                          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono pt-4 border-t border-white/10 group-hover:border-amber-500/20 transition-colors duration-500">
                            <Calendar className="h-3 w-3" />
                            <span>
                              {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </span>
                          </div>

                          <div className="flex items-center text-amber-500 text-sm font-mono font-bold uppercase tracking-wide group-hover:text-amber-300 transition-colors duration-500">
                            Akte öffnen
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Vintage Paper Clips */}
                        <div className="absolute top-2 left-2 w-8 h-4 border-2 border-gray-400/20 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  );
}
