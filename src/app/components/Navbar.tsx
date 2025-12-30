"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* This spacer controls the float height */}
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="relative flex items-center justify-between px-6 py-3.5
                       bg-gradient-to-r from-[#1A1612]/95 via-[#1F1A16]/95 to-[#1A1612]/95
                       backdrop-blur-xl rounded-full shadow-2xl border border-white/5"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5 pointer-events-none" />

            {/* Logo */}
            <div className="font-serif text-xl md:text-2xl tracking-wide">
              <span className="bg-gradient-to-r from-white via-amber-50 to-white bg-clip-text text-transparent">
                Dr. Tunji Babajide
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
              ].map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="relative text-slate-300 hover:text-white transition group"
                >
                  <span>{label}</span>
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-white/60 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              <Link href="/contact">
                <button className="relative bg-white/5 border border-white/10 hover:border-white/20 text-white px-6 py-2 rounded-full transition">
                  Contact
                </button>
              </Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#1A1612]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/5">
              <nav className="flex flex-col p-6 space-y-1">
                {["Home", "About", "Services"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition"
                  >
                    {item}
                  </Link>
                ))}
                <Link href="/contact" onClick={() => setIsOpen(false)} className="pt-2">
                  <button className="w-full bg-white/5 border border-white/10 text-white px-4 py-3 rounded-xl">
                    Contact
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
