"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface HeroSectionProps {
  headline: string;
  subtext: string;
  imageSrc: string;
}

export default function HeroSection({ headline, subtext, imageSrc }: HeroSectionProps) {
  return (
    <section className="w-full relative overflow-hidden">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1612] via-[#1F1A16] to-[#1A1612] -z-10"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-amber-600/3 rounded-full blur-3xl -z-10"></div>

      {/* Hero Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-32 gap-12 md:gap-16">
        
        {/* Text Content */}
        <div className="flex flex-col gap-8 z-10 md:pr-8">
          {/* Decorative Element */}
          <div className="w-16 h-1 bg-gradient-to-r from-amber-500/50 to-transparent rounded-full"></div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight">
            <span className="inline-block bg-gradient-to-br from-white via-amber-50 to-white bg-clip-text text-transparent">
              {headline}
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed font-light max-w-xl">
            {subtext}
          </p>
          
          <div className="mt-2">
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 
                             bg-gradient-to-r from-[#C28E3A] to-[#D4A047] 
                             hover:from-[#b87a2f] hover:to-[#C28E3A]
                             text-white rounded-full font-medium 
                             transition-all duration-300 
                             shadow-xl shadow-amber-900/20 hover:shadow-2xl hover:shadow-amber-900/30
                             hover:scale-[1.02] active:scale-[0.98]
                             overflow-hidden">
              <span className="relative z-10">Take the $1 Marriage Survival Test</span>
              <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-[100%] 
                             transition-transform duration-700"></span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full relative z-0 group">
          {/* Image glow effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent 
                        rounded-2xl blur-2xl group-hover:from-amber-500/15 transition-all duration-500"></div>
          
          {/* Image container with border */}
          <div className="relative rounded-2xl overflow-hidden border border-white/5 
                        shadow-2xl shadow-black/40 
                        group-hover:border-white/10 transition-all duration-500">
            <Image
              src={imageSrc}
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-2xl w-full h-auto object-cover 
                       transform group-hover:scale-[1.02] transition-transform duration-700"
              priority
            />
            
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent 
                          pointer-events-none"></div>
          </div>

          {/* Decorative corner accents */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-amber-500/20 rounded-tr-3xl"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-amber-500/20 rounded-bl-3xl"></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1A1612] to-transparent pointer-events-none"></div>
    </section>
  );
}