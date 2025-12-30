"use client";

import { Users, Heart, Network } from "lucide-react";
import { JSX } from "react/jsx-dev-runtime";

interface AssessmentCard {
  title: string;
  description: string;
  icon: JSX.Element;
}

const assessmentData: AssessmentCard[] = [
  {
    title: "Personality",
    description:
      "Understand individual personalities and how they interact within your relationship.",
    icon: <Users size={28} className="text-[#1A1612]" />,
  },
  {
    title: "ACEs",
    description:
      "Assess past experiences that may impact emotional responses and relationship dynamics.",
    icon: <Heart size={28} className="text-[#1A1612]" />,
  },
  {
    title: "Relationship Exposure",
    description:
      "Measure social and environmental factors affecting your partnership.",
    icon: <Network size={28} className="text-[#1A1612]" />,
  },
];

export default function MarriageAssessment() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#F8F5F2] via-[#FAF7F4] to-[#F8F5F2] py-24 px-4 overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent rounded-full mx-auto"></div>
        </div>
        
        <h2 className="font-serif text-4xl md:text-5xl text-[#1A1612] mb-6 tracking-tight">
          Marriage Survival Assessment
        </h2>
        
        <p className="text-[#1A1612]/60 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light">
          Three pillars that determine the health and longevity of your relationship.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {assessmentData.map((card, index) => (
          <div
            key={card.title}
            className="group relative bg-white rounded-3xl p-8 flex flex-col items-center text-center 
                     shadow-lg hover:shadow-2xl transition-all duration-500
                     border border-[#1A1612]/5 hover:border-[#C28E3A]/20
                     hover:-translate-y-2"
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`
            }}
          >
            {/* Card gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-amber-50/30 to-amber-100/0 
                          rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon container */}
            <div className="relative mb-6 transform group-hover:scale-110 transition-transform duration-500">
              <div className="relative bg-gradient-to-br from-[#C28E3A]/10 via-[#C28E3A]/20 to-[#D4A047]/10 
                            p-5 rounded-2xl flex items-center justify-center
                            shadow-md group-hover:shadow-lg transition-shadow duration-500">
                {card.icon}
                
                {/* Icon glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#C28E3A]/20 to-transparent 
                              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-2 border-2 border-[#C28E3A]/0 group-hover:border-[#C28E3A]/20 
                            rounded-3xl transition-all duration-500"></div>
            </div>
            
            <h3 className="relative text-[#1A1612] font-semibold text-2xl mb-3 tracking-tight">
              {card.title}
            </h3>
            
            <p className="relative text-[#1A1612]/60 leading-relaxed font-light">
              {card.description}
            </p>

            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                          from-transparent via-[#C28E3A]/0 to-transparent
                          group-hover:via-[#C28E3A]/30 rounded-b-3xl transition-all duration-500"></div>
          </div>
        ))}
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