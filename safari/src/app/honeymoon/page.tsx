import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ChapterSection from './components/ChapterSection';
import MarqueeStrip from './components/MarqueeStrip';
import PackagesSection from './components/PackagesSection';
import FloatingCTA from './components/FloatingCTA';
import HeroAnimations from './components/HeroAnimations';

const chapters = [
{
  number: '01',
  day: 'Day One',
  location: 'Santorini',
  title: 'Arrival by',
  titleItalic: 'Private Yacht.',
  body: "The caldera unfolds beneath you — white-washed villages cascading down volcanic cliffs, the Aegean shimmering in shades of sapphire and cobalt. Your suite at Canaves Oia awaits: infinity pool merging with the horizon, champagne chilling, the island's legendary sunset painting your private terrace in gold and rose.",
  detail1: 'Private yacht transfer from Athens International',
  detail2: 'Canaves Oia — clifftop suite with caldera view',
  detail3: 'Sunset cocktails on your private veranda',
  image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
  imageAlt: 'Santorini caldera view with white-washed buildings and blue domes at golden hour',
  imagePosition: 'center',
  reversed: false,
  id: 'itinerary'
},
{
  number: '02',
  day: 'Day Four',
  location: 'Amalfi Coast',
  title: 'A table carved',
  titleItalic: 'into the cliff.',
  body: "The Amalfi Coast reveals itself like a watercolor painting — pastel villages clinging to limestone cliffs, the Mediterranean stretching endlessly below. Lunch at La Sponda, where lemons grow overhead and each course tells the story of the sea. Your captain has charted the course for tomorrow's Capri adventure.",
  detail1: 'Private helicopter transfer over the coastline',
  detail2: 'Seven-course tasting menu, La Sponda at Le Sirenuse',
  detail3: 'Private boat tour to Positano and Emerald Grotto',
  image: "https://images.unsplash.com/photo-1533105079780-92b9be482077",
  imageAlt: 'Amalfi Coast colorful village buildings built into cliffside with Mediterranean Sea',
  imagePosition: 'center',
  reversed: true,
  id: undefined
},
{
  number: '03',
  day: 'Day Seven',
  location: 'Mykonos',
  title: 'Dancing until',
  titleItalic: 'dawn breaks.',
  body: "The Mykonian windmills stand sentinel as you arrive at your beachfront villa. Tonight, the island's legendary energy awaits — but first, a private cooking class with a local chef, learning the secrets of moussaka and tzatziki. As evening falls, the transformation begins: from quiet villa to the heart of Mykonos' world-famous nightlife.",
  detail1: 'Beachfront villa at Psarou Beach with private pool',
  detail2: 'Private Greek cooking class with local chef',
  detail3: 'VIP access to exclusive beach clubs and nightlife',
  image: "https://images.unsplash.com/photo-1579318830835-4ba428c4c5db",
  imageAlt: 'Mykonos windmills against blue sky with traditional Cycladic architecture',
  imagePosition: 'center',
  reversed: false,
  id: undefined
},
{
  number: '04',
  day: 'Day Ten',
  location: 'Crete',
  title: 'Ancient myths,',
  titleItalic: 'modern luxury.',
  body: "Crete's palace of Knossos whispers tales of minotaurs and ancient kings. Your private archaeologist guide brings these stones to life, while your driver awaits with chilled rosé. Tonight, dine under the stars at a family taverna where recipes have been passed down for generations — each bite a taste of 4,000 years of history.",
  detail1: 'Blue Palace Resort — sea-view suite with private pool',
  detail2: 'Private guided tour of Knossos Palace and Archaeological Museum',
  detail3: 'Traditional Cretan feast with local family in their village home',
  image: "https://images.unsplash.com/photo-1559628233-100c898500b5",
  imageAlt: 'Crete coastline with crystal clear turquoise water and rocky beaches',
  imagePosition: 'center',
  reversed: true,
  id: undefined
}];


export default function HoneymoonPage() {
  return (
    <main className="relative" style={{ background: 'var(--midnight)' }}>
      {/* Noise texture */}
      <div className="noise-overlay" aria-hidden="true" />
      <Header />
      <HeroAnimations />
      {/* Hero */}
      <HeroSection />
      {/* Marquee after hero */}
      <MarqueeStrip />
      {/* Storybook chapters */}
      {chapters?.map((chapter) =>
      <ChapterSection key={chapter?.number} {...chapter} />
      )}
      {/* Packages */}
      <PackagesSection />
      <Footer />
      {/* Floating CTA */}
      <FloatingCTA />
    </main>);

}