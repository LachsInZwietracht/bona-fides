import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Article } from "@/lib/blog";

interface BlogCardProps {
  article: Article;
  isMobile?: boolean;
  shouldAnimateOnMobile?: boolean;
}

export function BlogCard({ article, isMobile = false, shouldAnimateOnMobile = false }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${article.metadata.slug}`}
      className="group relative"
    >
      {/* Case File Folder with Golden Aesthetic */}
      <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm overflow-hidden transition-all duration-700 shadow-2xl relative ${
        isMobile
          ? shouldAnimateOnMobile
            ? 'scale-105 -rotate-1 bg-white/8 border-[#C2B16D]/40 shadow-[0_25px_50px_-12px_rgba(194,177,109,0.25)]'
            : 'scale-95 opacity-70'
          : 'hover:scale-105 hover:-rotate-1 hover:bg-white/8 hover:border-[#C2B16D]/40 hover:shadow-[0_25px_50px_-12px_rgba(194,177,109,0.25)]'
      }`}>

        {/* Vintage Paper Texture Overlay */}
        <div className={`absolute inset-0 transition-opacity duration-800 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-30'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-30'
        }`}>
          <div className="h-full w-full bg-amber-50/5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' numOctaves='5' result='noise' seed='1'/%3E%3CfeColorMatrix in='noise' type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' opacity='0.4'/%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* File Tab */}
        <div className={`bg-white/10 px-3 py-1.5 border-b border-white/20 transition-colors duration-500 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'bg-[#C2B16D]/20 border-[#C2B16D]/30'
              : ''
            : 'group-hover:bg-[#C2B16D]/20 group-hover:border-[#C2B16D]/30'
        }`}>
          <span className={`text-[10px] font-mono font-bold tracking-widest uppercase transition-colors duration-500 ${
            isMobile
              ? shouldAnimateOnMobile
                ? 'text-[#FEF3C6]'
                : 'text-gray-300'
              : 'text-gray-300 group-hover:text-[#FEF3C6]'
          }`}>
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

          <h3 className={`font-serif font-bold text-xl leading-tight transition-all duration-500 line-clamp-2 ${
            isMobile
              ? shouldAnimateOnMobile
                ? 'text-[#FEF3C6] tracking-wider'
                : 'text-white/70'
              : 'text-white group-hover:text-[#FEF3C6] group-hover:tracking-wider'
          }`}>
            {article.metadata.title}
          </h3>

          {article.metadata.excerpt && (
            <p className={`font-mono text-sm leading-relaxed line-clamp-3 transition-colors duration-500 ${
              isMobile
                ? shouldAnimateOnMobile
                  ? 'text-gray-300/90'
                  : 'text-gray-400'
                : 'text-gray-400 group-hover:text-gray-300/90'
            }`}>
              {article.metadata.excerpt}
            </p>
          )}

          <div className={`flex items-center gap-2 text-gray-500 text-xs font-mono pt-4 border-t transition-colors duration-500 ${
            isMobile
              ? shouldAnimateOnMobile
                ? 'border-[#C2B16D]/20'
                : 'border-white/10'
              : 'border-white/10 group-hover:border-[#C2B16D]/20'
          }`}>
            <Calendar className={`h-3 w-3 transition-colors duration-500 ${
              isMobile
                ? shouldAnimateOnMobile
                  ? 'text-[#FEF3C6]'
                  : ''
                : 'group-hover:text-[#FEF3C6]'
            }`} />
            <span className={`transition-colors duration-500 ${
              isMobile
                ? shouldAnimateOnMobile
                  ? 'text-gray-400'
                  : ''
                : 'group-hover:text-gray-400'
            }`}>
              {new Date(article.metadata.date).toLocaleDateString("de-DE", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <div className="flex items-center text-sm font-mono font-bold uppercase tracking-wide transition-colors duration-500"
               style={{ color: '#C2B16D' }}>
            <span className={`transition-colors duration-500 ${
              isMobile
                ? shouldAnimateOnMobile
                  ? 'text-[#FEF3C6]'
                  : ''
                : 'group-hover:text-[#FEF3C6]'
            }`}>Akte öffnen</span>
            <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
              isMobile
                ? shouldAnimateOnMobile
                  ? 'translate-x-1 text-[#FEF3C6]'
                  : ''
                : 'group-hover:translate-x-1 group-hover:text-[#FEF3C6]'
            }`} />
          </div>
        </div>

        {/* Golden Corner Decorations */}
        <div className={`absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 transition-all duration-600 delay-200 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-60'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-60'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className={`absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 transition-all duration-600 delay-300 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-60'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-60'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className={`absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 transition-all duration-600 delay-400 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-60'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-60'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />
        <div className={`absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 transition-all duration-600 delay-500 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-60'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-60'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.6)'}} />

        {/* Vintage Paper Clips with Golden Accent */}
        <div className={`absolute top-3 left-3 w-8 h-4 border-2 rounded-full transition-opacity duration-500 delay-200 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-60'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-60'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.4)'}} />
        <div className={`absolute top-6 left-5 w-6 h-3 border-2 rounded-full transition-opacity duration-500 delay-300 ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-40'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-40'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.3)'}} />

        {/* Vintage Seal */}
        <div className={`absolute -bottom-3 -right-3 w-12 h-12 border-2 border-dashed rounded-full transition-all duration-700 delay-400 transform ${
          isMobile
            ? shouldAnimateOnMobile
              ? 'opacity-50 rotate-12'
              : 'opacity-0'
            : 'opacity-0 group-hover:opacity-50 group-hover:rotate-12'
        }`} style={{borderColor: 'rgba(194, 177, 109, 0.5)'}}>
          <div className="flex items-center justify-center h-full">
            <span className="text-[8px] font-mono font-bold text-center leading-none" style={{color: '#FEF3C6'}}>BONA<br />FIDES</span>
          </div>
        </div>
      </div>
    </Link>
  );
}