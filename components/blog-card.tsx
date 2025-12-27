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
      {/* Case File Folder with Golden Aesthetic */}
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 hover:scale-105 hover:-rotate-1 shadow-2xl hover:bg-white/8 hover:border-[#C2B16D]/40 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.25)] relative">

        {/* Vintage Paper Texture Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-800">
          <div className="h-full w-full bg-amber-50/5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* File Tab */}
        <div className="bg-white/10 px-3 py-1.5 border-b border-white/20 transition-colors duration-500 group-hover:bg-[#C2B16D]/20 group-hover:border-[#C2B16D]/30">
          <span className="text-[10px] font-mono text-gray-300 font-bold tracking-widest uppercase group-hover:text-[#FEF3C6] transition-colors duration-500">
            Fallakte • {new Date(article.metadata.date).toLocaleDateString("de-DE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6 space-y-4 relative z-10">
          {/* Category Badge with Golden Design */}
          <Badge
            className="text-[#1A1612] font-mono text-xs px-3 py-1 rounded-sm backdrop-blur-sm w-fit font-bold uppercase tracking-wide transition-all duration-500 shadow-lg"
            style={{ backgroundColor: '#C2B16D' }}
          >
            {article.metadata.category}
          </Badge>

          <h3 className="font-serif font-bold text-xl text-white leading-tight group-hover:text-[#FEF3C6] group-hover:tracking-wider transition-all duration-500 line-clamp-2">
            {article.metadata.title}
          </h3>

          {article.metadata.excerpt && (
            <p className="text-gray-400 font-mono text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300/90 transition-colors duration-500">
              {article.metadata.excerpt}
            </p>
          )}

          <div className="flex items-center gap-2 text-gray-500 text-xs font-mono pt-4 border-t border-white/10 group-hover:border-[#C2B16D]/20 transition-colors duration-500">
            <Calendar className="h-3 w-3 group-hover:text-[#FEF3C6] transition-colors duration-500" />
            <span className="group-hover:text-gray-400 transition-colors duration-500">
              {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center text-sm font-mono font-bold uppercase tracking-wide transition-colors duration-500"
               style={{ color: '#C2B16D' }}>
            <span className="group-hover:text-[#FEF3C6] transition-colors duration-500">Akte öffnen</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 group-hover:text-[#FEF3C6]" />
          </div>
        </div>

        {/* Golden Corner Decorations */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 opacity-0 group-hover:opacity-60 transition-all duration-600 delay-200" style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 opacity-0 group-hover:opacity-60 transition-all duration-600 delay-300" style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 opacity-0 group-hover:opacity-60 transition-all duration-600 delay-400" style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 opacity-0 group-hover:opacity-60 transition-all duration-600 delay-500" style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />

        {/* Vintage Paper Clips with Golden Accent */}
        <div className="absolute top-3 left-3 w-8 h-4 border-2 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 delay-200" style={{borderColor: 'rgba(194, 177, 109, 0.4)'}} />
        <div className="absolute top-6 left-5 w-6 h-3 border-2 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 delay-300" style={{borderColor: 'rgba(194, 177, 109, 0.3)'}} />

        {/* Vintage Seal */}
        <div className="absolute -bottom-3 -right-3 w-12 h-12 border-2 border-dashed rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 delay-400 transform group-hover:rotate-12" style={{borderColor: 'rgba(194, 177, 109, 0.5)'}}>
          <div className="flex items-center justify-center h-full">
            <span className="text-[8px] font-mono font-bold text-center leading-none" style={{color: '#FEF3C6'}}>BONA<br />FIDES</span>
          </div>
        </div>
      </div>
    </Link>
  );
}