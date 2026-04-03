'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~200vh
      setVisible(window.scrollY > window.innerHeight * 1.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] transition-all duration-700 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        <div className="glass-dark rounded-full flex items-center gap-4 px-3 py-3 shadow-2xl">
          <div className="hidden sm:flex flex-col pl-3 pr-1">
            <span className="text-[9px] uppercase tracking-widest text-pearl/40 font-medium">Horizon Package</span>
            <span className="text-sm font-display font-light text-pearl">10 nights from <span style={{ color: 'var(--azure)' }}>€9,400</span></span>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="btn-azure px-7 py-3.5 rounded-full text-[11px] font-semibold uppercase tracking-widest2 whitespace-nowrap"
          >
            Book This Escape
          </button>
        </div>
      </div>
      {/* Inline minimal modal trigger — reuse packages modal via event */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-6 modal-overlay"
          onClick={(e) => e?.target === e?.currentTarget && setModalOpen(false)}
        >
          <div className="glass-dark rounded-2xl w-full max-w-sm p-8 text-center">
            <h3 className="font-display font-light text-2xl text-pearl mb-3">Ready to begin?</h3>
            <p className="text-pearl/40 text-sm mb-6 font-light">Scroll to our journeys to select your tier, or speak to a specialist.</p>
            <a href="#packages" onClick={() => setModalOpen(false)} className="btn-azure block py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2 mb-3">
              View Journeys
            </a>
            <button onClick={() => setModalOpen(false)} className="btn-outline-azure w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
              Talk to a Specialist
            </button>
            <button onClick={() => setModalOpen(false)} className="mt-4 text-pearl/25 text-xs uppercase tracking-widest hover:text-pearl/50 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}