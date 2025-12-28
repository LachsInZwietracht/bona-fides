"use client";

import { useState } from "react";
import { Article } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface RecentArticlesSectionProps {
  articles: Article[];
  initialCount?: number;
  incrementCount?: number;
}

export function RecentArticlesSection({
  articles,
  initialCount = 6,
  incrementCount = 6
}: RecentArticlesSectionProps) {
  const [displayCount, setDisplayCount] = useState(initialCount);

  const displayedArticles = articles.slice(0, displayCount);
  const hasMore = displayCount < articles.length;

  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + incrementCount, articles.length));
  };

  return (
    <section className="relative z-10 py-20 border-b border-white/10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
            AKTUELLE AKTEN
          </h2>
          <p className="font-mono text-gray-400">
            Die neuesten Fachartikel aus unserem Archiv
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedArticles.map((article) => (
            <BlogCard key={article.metadata.slug} article={article} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              className="group relative bg-transparent border-2 text-[#FEF3C6] hover:text-black transition-all duration-300 font-mono uppercase tracking-wider px-8 py-4 text-sm backdrop-blur-sm"
              style={{
                borderColor: 'rgba(194, 177, 109, 0.5)',
                backgroundColor: 'rgba(194, 177, 109, 0.1)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Mehr Akten laden
                <ChevronDown className="h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
              </span>

              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{backgroundColor: '#C2B16D'}}
              ></div>

              {/* Film strip effect */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

              {/* Border glow effect */}
              <div
                className="absolute inset-0 border-2 transform scale-110 group-hover:scale-105 transition-transform duration-300 opacity-0 group-hover:opacity-100"
                style={{borderColor: 'rgba(194, 177, 109, 0.6)'}}
              ></div>
            </Button>

            <p className="mt-4 font-mono text-xs text-gray-500 uppercase tracking-wider">
              {displayedArticles.length} von {articles.length} Akten angezeigt
            </p>
          </div>
        )}
      </div>
    </section>
  );
}