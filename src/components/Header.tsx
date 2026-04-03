'use client';

import React, { useEffect, useState } from 'react';
import AppLogo from '@/components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? 'py-3 bg-midnight/90 backdrop-blur-xl border-b border-azure/10' :'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <AppLogo
          text="Azure"
          size={32}
          className="font-display italic font-light text-pearl tracking-widest text-xl"
        />

        <div className="hidden md:flex items-center gap-10">
          {['Destinations', 'Experiences', 'Journey']?.map((item) => (
            <a
              key={item}
              href={`#${item?.toLowerCase()}`}
              className="text-[10px] uppercase tracking-widest2 font-medium text-pearl/50 hover:text-azure transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#packages"
          className="btn-azure px-6 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest2"
        >
          Book Now
        </a>
      </div>
    </nav>
  );
}