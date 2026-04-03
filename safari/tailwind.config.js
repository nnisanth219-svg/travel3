/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
          deep: '#020617',
        },
        midnight: '#0F172A',
        azure: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          faint: 'rgba(59, 130, 246, 0.15)',
        },
        pearl: {
          DEFAULT: '#F8FAFC',
          dim: 'rgba(248, 250, 252, 0.7)',
          faint: 'rgba(248, 250, 252, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      fontSize: {
        '10xl': ['10rem', { lineHeight: '0.85' }],
        '12xl': ['12rem', { lineHeight: '0.85' }],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      animation: {
        'marquee-slow': 'marquee-slow 40s linear infinite',
      },
      keyframes: {
        'marquee-slow': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};