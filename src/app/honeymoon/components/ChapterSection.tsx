'use client';

import React, { useRef, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';

interface ChapterProps {
  number: string;
  day: string;
  location: string;
  title: string;
  titleItalic: string;
  body: string;
  detail1: string;
  detail2: string;
  detail3: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  reversed?: boolean;
  id?: string;
}

export default function ChapterSection({
  number,
  day,
  location,
  title,
  titleItalic,
  body,
  detail1,
  detail2,
  detail3,
  image,
  imageAlt,
  imagePosition = 'center',
  reversed = false,
  id,
}: ChapterProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    if (!section || !bg || !content) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger children
            const children = content.querySelectorAll('.chapter-reveal');
            children.forEach((child, i) => {
              setTimeout(() => {
                (child as HTMLElement).style.opacity = '1';
                (child as HTMLElement).style.transform = 'translateY(0)';
              }, i * 160);
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    const handleScroll = () => {
      if (!bg) return;
      const rect = section.getBoundingClientRect();
      const progress = -rect.top / (window.innerHeight + rect.height);
      bg.style.transform = `translateY(${progress * 80}px) scale(1.12)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--midnight)' }}
    >
      {/* Parallax background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transform: 'scale(1.12)' }}
      >
        <AppImage
          src={image}
          alt={imageAlt}
          fill
          className={`object-cover object-${imagePosition}`}
        />
        <div className={`absolute inset-0 ${reversed ? 'chapter-overlay' : 'chapter-overlay'}`}
          style={{
            background: reversed
              ? 'linear-gradient(to left, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.05) 100%)'
              : 'linear-gradient(to right, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.4) 50%, rgba(15,23,42,0.05) 100%)',
          }}
        />
      </div>

      {/* Chapter number watermark */}
      <div
        className="chapter-num"
        style={{
          right: reversed ? 'auto' : '-2vw',
          left: reversed ? '-2vw' : 'auto',
          bottom: '-4rem',
        }}
      >
        {number}
      </div>

      {/* Content */}
      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 py-24 flex ${reversed ? 'justify-end' : 'justify-start'}`}>
        <div ref={contentRef} className="max-w-xl space-y-7">
          {/* Day / Location */}
          <div className="chapter-reveal flex items-center gap-4" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)' }}>
            <span className="azure-line" />
            <span className="text-[9px] uppercase tracking-widest3 text-azure font-semibold">
              {day} · {location}
            </span>
          </div>

          {/* Title */}
          <h2
            className="chapter-reveal font-display font-light text-4xl md:text-6xl leading-[1.1] text-pearl"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)' }}
          >
            {title}{' '}
            <span className="italic" style={{ color: 'var(--azure)' }}>
              {titleItalic}
            </span>
          </h2>

          {/* Body */}
          <p
            className="chapter-reveal text-pearl/65 text-base md:text-lg font-light leading-relaxed max-w-md"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)' }}
          >
            {body}
          </p>

          {/* Details */}
          <div
            className="chapter-reveal space-y-3 pt-2"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)' }}
          >
            {[detail1, detail2, detail3].map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-azure flex-shrink-0" />
                <span className="text-[11px] uppercase tracking-widest text-pearl/45 font-medium">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #0F172A 0%, transparent 100%)' }} />
    </section>
  );
}