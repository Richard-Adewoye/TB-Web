// app/components/RelationshipFramework.tsx
"use client";
import { JSX } from "react/jsx-dev-runtime";

import { AlertCircle, Lightbulb, Shield } from "lucide-react";

interface FrameworkItem {
  title: string;
  description: string;
  icon: JSX.Element;
  iconBg: string;
  accentColor: string;
}

const frameworkData: FrameworkItem[] = [
  {
    title: "Rats",
    description:
      "Unexpected challenges that test the resilience of your relationship.",
    icon: <AlertCircle size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-red-700/40 to-red-800/30",
    accentColor: "from-red-700/20 to-red-800/10",
  },
  {
    title: "Carrots",
    description:
      "Opportunities and rewards that motivate growth and connection.",
    icon: <Lightbulb size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-[#C28E3A]/40 to-[#D4A047]/30",
    accentColor: "from-[#C28E3A]/20 to-[#D4A047]/10",
  },
  {
    title: "Cats",
    description:
      "Protective factors that safeguard your relationship's stability.",
    icon: <Shield size={28} className="text-white" />,
    iconBg: "bg-gradient-to-br from-yellow-700/40 to-yellow-800/30",
    accentColor: "from-yellow-700/20 to-yellow-800/10",
  },
];

export default function RelationshipFramework() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#1C1611] via-[#1A1612] to-[#1C1611] py-24 px-4 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-800/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent rounded-full mx-auto"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#F8F5F2] mb-6 tracking-tight">
          <span className="inline-block bg-gradient-to-r from-[#F8F5F2] via-amber-50 to-[#F8F5F2] bg-clip-text text-transparent">
            The Framework: Rats, Carrots, Cats
          </span>
        </h2>
        
        <p className="text-[#F8F5F2]/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Understand the key elements that influence the strength and health of your partnership.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#2A1F18]/80 via-[#2A1F18]/70 to-[#2A1F18]/80 
                      border border-[#F8F5F2]/10 rounded-3xl p-10 md:p-16 
                      backdrop-blur-xl shadow-2xl">
          
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5 
                        rounded-3xl pointer-events-none"></div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {frameworkData.map((item, index) => (
              <div
                key={item.title}
                className="group relative flex flex-col items-center text-center"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                {/* Background glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} 
                              rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 -z-10`}></div>

                {/* Icon container */}
                <div className="relative mb-6 transform group-hover:scale-110 group-hover:-translate-y-1 
                              transition-all duration-500">
                  <div className={`relative ${item.iconBg} p-5 rounded-2xl 
                                flex items-center justify-center
                                shadow-lg group-hover:shadow-2xl transition-all duration-500
                                border border-white/10 group-hover:border-white/20`}>
                    <div className="relative z-10">
                      {item.icon}
                    </div>
                    
                    {/* Icon inner glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.accentColor} 
                                  rounded-2xl blur-lg opacity-50 group-hover:opacity-100 
                                  transition-opacity duration-500`}></div>
                  </div>

                  {/* Decorative ring */}
                  <div className="absolute -inset-3 border-2 border-white/0 group-hover:border-white/10 
                                rounded-3xl transition-all duration-500"></div>
                </div>

                <h3 className="text-[#F8F5F2] font-serif text-2xl mb-4 tracking-tight 
                             group-hover:text-white transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-[#F8F5F2]/60 text-base leading-relaxed font-light max-w-xs
                            group-hover:text-[#F8F5F2]/80 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px 
                              bg-gradient-to-r from-transparent via-white/30 to-transparent
                              group-hover:w-3/4 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-amber-500/20 rounded-tl-2xl"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-amber-500/20 rounded-br-2xl"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}