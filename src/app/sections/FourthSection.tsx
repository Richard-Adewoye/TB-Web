"use client";

import ResourceCard from "../components/ResourceCard";

const resources = [
  {
    title: "Guided Ebooks",
    description:
      "Learn from our Ebooks on the intricacies of relationship dynamics.",
    cta: "View Schedule",
    image: "/ebooks.jpg",
  },
  {
    title: "Social Media",
    description:
      "Check out our social media for relationship tips and updates.",
    cta: "Read Now",
    image: "/social_media.jpg",
  },
  {
    title: "Webinars",
    description:
      "Webinars for relationship insights and expert guidance.",
    cta: "Download",
    image: "/webinar.avif",
  },
  {
    title: "Blended Family",
    description:
      "Our Blended Family resources provide guidance for navigating complex family dynamics.",
    cta: "Explore",
    image: "/blended family.jpg",
  },
];

export default function ResourceLibrary() {
  return (
    <section className="w-full relative bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] py-24 px-4 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
             backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
             backgroundSize: '50px 50px'
           }}></div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block mb-4">
          <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#C28E3A] to-transparent rounded-full mx-auto"></div>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 tracking-tight">
          <span className="inline-block bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
            Free Resources Library
          </span>
        </h2>
        
        <p className="text-[#A0A0A0] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
          Practical tools, insights, and guided materials to support your relationship.
        </p>
      </div>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div
            key={resource.title}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
            }}
          >
            <ResourceCard {...resource} />
          </div>
        ))}
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none"></div>

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