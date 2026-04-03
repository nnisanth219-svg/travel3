'use client';

import { useEffect } from 'react';

export default function HeroAnimations() {
  useEffect(() => {
    const animate = async () => {
      const items = [
        { sel: '.hero-badge', delay: 300 },
        { sel: '.hero-headline', delay: 600 },
        { sel: '.hero-sub', delay: 900 },
        { sel: '.hero-search', delay: 1100 },
        { sel: '.hero-scroll', delay: 1500 },
      ];

      items.forEach(({ sel, delay }) => {
        const el = document.querySelector(sel) as HTMLElement | null;
        if (!el) return;
        el.style.transition = 'opacity 1.2s cubic-bezier(0.16,1,0.3,1), transform 1.2s cubic-bezier(0.16,1,0.3,1)';
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
        setTimeout(() => {
          el.style.transform = 'translateY(0)';
          el.style.opacity = '1';
        }, delay);
      });
    };

    animate();
  }, []);

  return null;
}