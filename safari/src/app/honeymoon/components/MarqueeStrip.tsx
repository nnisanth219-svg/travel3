import React from 'react';

const items = [
  'Santorini',
  'Amalfi Coast',
  'Mykonos',
  'Crete',
  'Private Yachts',
  'Sunset Views',
  'Beach Clubs',
  'Mediterranean Dinners',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div className="py-10 border-y overflow-hidden" style={{ borderColor: 'rgba(59,130,246,0.1)', background: 'var(--slate)' }}>
      <div className="flex whitespace-nowrap animate-marquee-slow">
        {doubled?.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-lg md:text-2xl font-display font-light italic text-pearl/30 px-10">
              {item}
            </span>
            <span className="text-azure/40 text-lg flex items-center px-2">◇</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}