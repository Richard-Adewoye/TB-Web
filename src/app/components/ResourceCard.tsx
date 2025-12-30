"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  title: string;
  description: string;
  cta: string;
  image: string;
}

export default function ResourceCard({
  title,
  description,
  cta,
  image,
}: ResourceCardProps) {
  return (
    <div className="bg-[#141414] rounded-xl p-5 flex flex-col hover:-translate-y-2 transition-transform duration-300">
      {/* Icon / Image Container */}
      <div className="bg-[#A68249] rounded-lg p-3 mb-4 w-fit">
        <Image
          src={image}
          alt={title}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl text-white mb-2">{title}</h3>
      <p className="text-[#A0A0A0] text-sm leading-relaxed flex-grow">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-4 inline-flex items-center gap-2 text-[#A68249] font-semibold text-sm hover:gap-3 transition-all">
        {cta}
        <ArrowRight size={14} />
      </div>
    </div>
  );
}
