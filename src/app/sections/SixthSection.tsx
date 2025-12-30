"use client";

import { ArrowRight } from "lucide-react";

export default function CommunityCTA() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] py-20 px-6 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl"></div>

      <div className="relative flex justify-center">
        <div className="relative bg-gradient-to-br from-[#F4F1ED] via-[#F8F5F2] to-[#F4F1ED] 
                      rounded-3xl p-8 md:p-12 text-center max-w-2xl 
                      shadow-2xl border border-amber-200/30
                      hover:shadow-[0_25px_80px_-15px_rgba(194,142,58,0.3)]
                      transition-all duration-700">
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 via-transparent to-amber-50/20 
                        rounded-3xl pointer-events-none"></div>

          {/* Decorative corner accents */}
          <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-amber-400/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-amber-400/30 rounded-br-2xl"></div>

          {/* Decorative accent line */}
          <div className="relative inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full mx-auto"></div>
          </div>

          <h2 className="relative font-serif text-3xl md:text-4xl text-[#0D0D0D] mb-4 tracking-tight leading-tight">
            Join Our Community
          </h2>
          
          <p className="relative text-neutral-600 mb-8 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
            Connect with like-minded individuals and access exclusive content for growth.
          </p>
          
          <div className="relative">
            <button className="group relative px-8 py-3 rounded-full 
                             bg-gradient-to-r from-[#A68249] to-[#B8904F] 
                             hover:from-[#95723F] hover:to-[#A68249]
                             text-white font-semibold 
                             inline-flex items-center gap-3
                             shadow-xl shadow-amber-900/20 
                             hover:shadow-2xl hover:shadow-amber-900/30
                             hover:scale-[1.02] active:scale-[0.98]
                             transition-all duration-300
                             overflow-hidden">
              <span className="relative z-10">Join the Community</span>
              <ArrowRight 
                size={20} 
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
              />
              
              {/* Button shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                             translate-x-[-100%] group-hover:translate-x-[100%] 
                             transition-transform duration-700"></span>
            </button>
          </div>

          {/* Bottom decorative element */}
          <div className="relative mt-8">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none"></div>
    </section>
  );
}