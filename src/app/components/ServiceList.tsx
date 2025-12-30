"use client";

import { services } from "../constants/services";
import IconBox from "../components/IconBox";

export default function ServiceList() {
  return (
    <section className="w-full bg-[#0a0f1e] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl text-white text-center mb-12">
          Deeper Transformation
        </h2>

        <div className="space-y-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#111827] rounded-xl p-6 flex gap-5"
            >
              <IconBox icon={service.icon} />

              <div>
                <h3 className="font-serif text-xl text-white mb-2">
                  {service.title}
                </h3>

                <p className="text-[#A0A0A0]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
