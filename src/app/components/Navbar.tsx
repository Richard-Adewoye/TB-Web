// src/app/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-4 z-50 w-full px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-6 py-3.5
                        bg-gradient-to-r from-[#1A1612]/95 via-[#1F1A16]/95 to-[#1A1612]/95
                        backdrop-blur-xl rounded-full shadow-2xl border border-white/5">
          <div className="relative text-white font-serif text-xl md:text-2xl tracking-wide">
            Dr. Tunji Babajide
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center space-x-8 font-light text-sm tracking-wide">
            <Link href="/services" className="text-slate-300 hover:text-white">Services</Link>
            <Link href="/resources" className="text-slate-300 hover:text-white">Resources</Link>
            <Link href="/about" className="text-slate-300 hover:text-white">About</Link>
            <Link href="/contact">
              <button className="bg-white/5 border border-white/10 hover:border-white/20 
                                 text-white px-6 py-2 rounded-full transition-all">
                Contact
              </button>
            </Link>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 rounded-full">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-2 bg-[#1A1612]/90 backdrop-blur-md rounded-2xl p-4 shadow-lg">
            <nav className="flex flex-col space-y-2">
              <Link href="/services" className="text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/resources" className="text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>Resources</Link>
              <Link href="/about" className="text-slate-300 hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-white/5 border border-white/10 hover:border-white/20 text-white px-4 py-2 rounded-xl">
                  Contact
                </button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
