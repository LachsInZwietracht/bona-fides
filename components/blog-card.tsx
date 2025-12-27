import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Article } from "@/lib/blog";

interface BlogCardProps {
  article: Article;
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.metadata.slug}`}
      className="group relative"
    >
      {/* Case File Folder */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl hover:bg-white/8 hover:border-amber-500/30 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.2)]">

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6 space-y-4">
          {/* Category Badge */}
          <Badge className="bg-red-600/90 text-white font-mono text-xs px-2 py-1 rounded-sm backdrop-blur-sm w-fit">
            {article.metadata.category}
          </Badge>

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
}