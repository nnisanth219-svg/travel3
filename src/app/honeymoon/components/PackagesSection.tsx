'use client';

import React, { useRef, useEffect, useState } from 'react';

const packages = [
  {
    tier: 'Essence',
    nights: '7 Nights',
    tagline: 'Santorini & Amalfi Coast',
    price: 'From €5,800',
    perPerson: 'per couple',
    features: [
      'Clifftop suite, Oia Santorini',
      'Private yacht transfer from Athens',
      'Amalfi coast cooking class',
      'Private boat tour to Capri',
      'All airport & hotel transfers',
    ],
    accent: false,
  },
  {
    tier: 'Horizon',
    nights: '10 Nights',
    tagline: 'Santorini · Amalfi · Mykonos',
    price: 'From €9,400',
    perPerson: 'per couple',
    features: [
      'Everything in Essence',
      'Mykonos beachfront villa (3 nights)',
      'VIP beach club access',
      'Private Greek island hopping',
      'Sunset yacht cruise with dinner',
    ],
    accent: true,
  },
  {
    tier: 'Azure',
    nights: '14 Nights',
    tagline: 'Complete Mediterranean',
    price: 'From €16,200',
    perPerson: 'per couple',
    features: [
      'Everything in Horizon',
      'Crete luxury resort suite',
      'Private archaeologist guide',
      'Exclusive villa experiences',
      'Private chef throughout journey',
    ],
    accent: false,
  },
];

interface BookingModalProps {
  selectedTier: string;
  onClose: () => void;
}

function BookingModal({ selectedTier, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [tier, setTier] = useState(selectedTier);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-6 modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="glass-dark rounded-2xl w-full max-w-lg p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-pearl/40 hover:text-pearl transition-colors text-xl leading-none"
          aria-label="Close booking modal"
        >
          ×
        </button>

        {/* Step indicators */}
        <div className="flex items-center gap-3 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`step-dot ${step >= s ? 'active' : ''}`} />
          ))}
          <span className="text-[10px] uppercase tracking-widest text-pearl/30 font-medium ml-2">
            Step {step} of 3
          </span>
        </div>

        {step === 1 && (
          <div>
            <h3 className="font-display font-light text-2xl text-pearl mb-2">Select your package</h3>
            <p className="text-pearl/40 text-sm mb-6">Choose the experience that feels right for you.</p>
            <div className="space-y-3">
              {packages.map((pkg) => (
                <button
                  key={pkg.tier}
                  onClick={() => setTier(pkg.tier)}
                  className={`w-full flex justify-between items-center px-5 py-4 rounded-xl border transition-all duration-300 text-left ${
                    tier === pkg.tier
                      ? 'border-azure bg-azure/10 text-pearl' :'border-pearl/10 text-pearl/60 hover:border-pearl/20'
                  }`}
                >
                  <div>
                    <span className="font-semibold text-sm">{pkg.tier}</span>
                    <span className="text-xs text-pearl/40 ml-3">{pkg.nights}</span>
                  </div>
                  <span className="text-xs font-medium" style={{ color: tier === pkg.tier ? 'var(--azure)' : 'inherit' }}>
                    {pkg.price}
                  </span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep(2)} className="btn-azure w-full mt-6 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="font-display font-light text-2xl text-pearl mb-2">Confirm your dates</h3>
            <p className="text-pearl/40 text-sm mb-6">We'll hold your preferred dates for 48 hours.</p>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Arrival date</label>
                <input type="date" className="search-field rounded-xl px-4 py-3 text-sm w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Departing from</label>
                <input type="text" placeholder="City of departure" className="search-field rounded-xl px-4 py-3 text-sm w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Number of guests</label>
                <select className="search-field rounded-xl px-4 py-3 text-sm w-full appearance-none">
                  <option>2 guests (couple)</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(1)} className="btn-outline-azure flex-1 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
                Back
              </button>
              <button onClick={() => setStep(3)} className="btn-azure flex-1 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
                Continue
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="font-display font-light text-2xl text-pearl mb-2">Secure your escape</h3>
            <p className="text-pearl/40 text-sm mb-6">A 20% deposit confirms your journey today.</p>
            <div className="space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Full name</label>
                <input type="text" placeholder="As on passport" className="search-field rounded-xl px-4 py-3 text-sm w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Email address</label>
                <input type="email" placeholder="hello@youremail.com" className="search-field rounded-xl px-4 py-3 text-sm w-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] uppercase tracking-widest text-azure/70 font-semibold">Card number</label>
                <input type="text" placeholder="•••• •••• •••• ••••" className="search-field rounded-xl px-4 py-3 text-sm w-full" />
              </div>
            </div>
            {/* Reassurance */}
            <div className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl" style={{ background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.15)' }}>
              <span className="text-azure text-base">✓</span>
              <span className="text-[10px] text-pearl/50 font-medium">Fully refundable until 60 days before departure</span>
            </div>
            <div className="flex gap-3 mt-6">
              <button onClick={() => setStep(2)} className="btn-outline-azure flex-1 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
                Back
              </button>
              <button className="btn-azure flex-1 py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2">
                {/* Backend payment integration point */}
                Confirm & Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PackagesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState('Signature');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = section.querySelectorAll('.pkg-reveal');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="packages"
        className="py-32 px-6 relative"
        style={{ background: 'var(--slate)' }}
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.3) 0%, transparent 60%)' }} />

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 pkg-reveal" style={{ opacity: 0, transform: 'translateY(40px)', transition: 'opacity 1s ease, transform 1s cubic-bezier(0.2,1,0.3,1)' }}>
            <div className="ornament-rule max-w-xs mx-auto mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-azure flex-shrink-0 mx-2" />
            </div>
            <h2 className="font-display font-light text-4xl md:text-6xl text-pearl mb-4">
              Choose your{' '}
              <span className="italic" style={{ color: 'var(--azure)' }}>journey</span>
            </h2>
            <p className="text-pearl/50 text-base max-w-md mx-auto font-light leading-relaxed">
              Three ways to experience the Mediterranean. Each one complete.
              None of them ordinary.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <div
                key={pkg.tier}
                className={`pkg-reveal package-card rounded-2xl p-8 flex flex-col ${
                  pkg.accent
                    ? 'border-2' :'border'
                }`}
                style={{
                  opacity: 0,
                  transform: 'translateY(50px)',
                  transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)',
                  background: pkg.accent ? 'rgba(59,130,246,0.08)' : 'rgba(248,250,252,0.04)',
                  borderColor: pkg.accent ? 'var(--azure)' : 'rgba(248,250,252,0.08)',
                  boxShadow: pkg.accent ? '0 0 60px rgba(59,130,246,0.1)' : 'none',
                }}
              >
                {pkg.accent && (
                  <div className="text-[9px] uppercase tracking-widest3 text-azure font-semibold mb-4">
                    ✦ Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <div className="text-[9px] uppercase tracking-widest text-pearl/30 font-medium mb-1">{pkg.nights}</div>
                  <h3 className="font-display font-light text-2xl text-pearl mb-1">{pkg.tier}</h3>
                  <p className="text-pearl/40 text-sm font-light">{pkg.tagline}</p>
                </div>

                <div className="mb-6">
                  <span className="font-display font-light text-3xl" style={{ color: 'var(--azure)' }}>{pkg.price}</span>
                  <span className="text-pearl/30 text-xs ml-2">{pkg.perPerson}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <span className="text-azure mt-1 text-xs flex-shrink-0">◇</span>
                      <span className="text-pearl/60 text-sm font-light leading-snug">{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { setSelectedTier(pkg.tier); setModalOpen(true); }}
                  className={`w-full py-4 rounded-xl text-sm font-semibold uppercase tracking-widest2 ${
                    pkg.accent ? 'btn-azure' : 'btn-outline-azure'
                  }`}
                >
                  Book {pkg.tier}
                </button>
              </div>
            ))}
          </div>

          {/* Build your own */}
          <div className="text-center mt-16 pkg-reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.9s ease, transform 0.9s cubic-bezier(0.2,1,0.3,1)' }}>
            <div className="ornament-rule max-w-xs mx-auto mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-azure/30 flex-shrink-0 mx-2" />
            </div>
            <p className="text-pearl/40 text-sm mb-4 font-light">Have something specific in mind?</p>
            <button className="btn-outline-azure px-10 py-4 rounded-full text-sm font-semibold uppercase tracking-widest2">
              Design Your Journey
            </button>
            <p className="text-pearl/25 text-[10px] mt-4 uppercase tracking-widest font-medium">
              Our specialists respond within 4 hours
            </p>
          </div>
        </div>
      </section>

      {modalOpen && (
        <BookingModal selectedTier={selectedTier} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}