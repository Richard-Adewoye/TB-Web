"use client";

import { services } from "../constants/services";
import IconBox from "../components/IconBox";

export default function ServiceGrid() {
  return (
    <section className="w-full relative bg-gradient-to-b from-neutral-50 via-neutral-100/30 to-neutral-50 py-24 px-6 overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-50/50 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full mx-auto"></div>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-neutral-950 tracking-tight mb-4">
            Services & Programs
          </h2>
          
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto font-light">
            Professional guidance tailored to your relationship needs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl p-8 flex flex-col items-center text-center
                         hover:-translate-y-2 transition-all duration-500
                         shadow-lg hover:shadow-2xl
                         border border-neutral-200/50 hover:border-amber-200"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Card gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 via-amber-50/40 to-amber-100/0 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon container */}
              <div className="relative mb-6 transform group-hover:scale-110 group-hover:-rotate-3 
                            transition-all duration-500">
                <IconBox icon={service.icon} />

                {/* Decorative ring */}
                <div className="absolute -inset-2 border-2 border-amber-300/0 group-hover:border-amber-300/30 
                              rounded-3xl transition-all duration-500"></div>
              </div>

              <h3 className="relative font-serif text-xl text-neutral-950 mb-3 tracking-tight
                           group-hover:text-amber-900 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="relative text-neutral-600 text-sm mb-6 leading-relaxed font-light
                          group-hover:text-neutral-700 transition-colors duration-300">
                {service.description}
              </p>

              <button
                aria-label={`Book ${service.title}`}
                className="relative mt-auto px-6 py-2.5 rounded-full 
                         bg-white border-2 border-neutral-200
                         text-neutral-950 font-medium
                         hover:border-amber-400 hover:bg-amber-50
                         transition-all duration-300
                         shadow-sm hover:shadow-md
                         overflow-hidden group/btn"
              >
                <span className="relative z-10">Book Session</span>
                
                {/* Button shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent 
                               translate-x-[-100%] group-hover/btn:translate-x-[100%] 
                               transition-transform duration-700"></span>
              </button>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r 
                            from-transparent via-amber-400/0 to-transparent
                            group-hover:via-amber-400/40 rounded-b-2xl transition-all duration-500"></div>
            </div>
          ))}
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