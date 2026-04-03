'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef?.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translateY(${y * 0.35}px) scale(1.15)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-slate-deep">
      {/* Parallax background */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transform: 'scale(1.15)' }}>
        <AppImage
          src="https://images.unsplash.com/photo-1533105079780-92b9be482077"
          alt="Santorini caldera with white-washed buildings and blue domes overlooking the Aegean Sea at sunset"
          fill
          className="object-cover object-center"
          priority />
        
        <div className="absolute inset-0 bg-gradient-to-b from-slate-deep/60 via-slate-deep/30 to-slate-deep/90" />
      </div>

      {/* Foreground foliage depth layer */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
      style={{ background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div className="hero-badge inline-flex items-center gap-3 mb-10 opacity-0">
          <span className="azure-line" />
          <span className="text-[9px] uppercase tracking-widest3 font-semibold text-azure">
            Mediterranean · Private Luxury Collection
          </span>
          <span className="azure-line" />
        </div>

        {/* Headline */}
        <h1 className="hero-headline font-display font-light text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-pearl mb-6 opacity-0">
          Where the Mediterranean{' '}
          <span className="italic" style={{ color: 'var(--azure)' }}>
            Becomes Yours
          </span>
        </h1>

        <p className="hero-sub text-pearl/60 text-base md:text-lg font-light max-w-xl mx-auto mb-16 leading-relaxed opacity-0">
          Santorini. Amalfi. Mykonos. Crete.
          Ten nights. Every detail arranged.
        </p>

        {/* Search Box */}
        <div className="hero-search glass-dark rounded-2xl p-6 md:p-8 max-w-2xl mx-auto opacity-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Departing from</label>
              <input
                type="text"
                placeholder="Athens, Rome, Paris…"
                className="search-field rounded-xl px-4 py-3 text-sm font-light" />
              
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Your escape dates</label>
              <input
                type="date"
                className="search-field rounded-xl px-4 py-3 text-sm font-light"
                id="travel-date" />
              
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Duration</label>
              <select className="search-field rounded-xl px-4 py-3 text-sm font-light appearance-none cursor-pointer" defaultValue="10">
                <option value="7">7 nights</option>
                <option value="10">10 nights</option>
                <option value="14">14 nights</option>
              </select>
            </div>
          </div>
          <button className="btn-azure w-full rounded-xl py-4 text-sm font-semibold uppercase tracking-widest2">
            Begin Your Escape
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 hero-scroll opacity-0">
        <span className="text-[8px] uppercase tracking-widest3 text-pearl/30 font-medium">Your Mediterranean story starts here</span>
        <div className="w-px h-14 bg-azure/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full bg-azure scroll-line" style={{ height: '40%', animation: 'scrollLine 1.8s ease-in-out infinite' }} />
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(250%); opacity: 0; }
        }
      `}</style>
    </section>);

}