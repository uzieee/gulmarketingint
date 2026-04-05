/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#030712',
          900: '#070b14',
          850: '#0c1222',
          800: '#111b2e',
        },
        neon: {
          cyan: '#22d3ee',
          violet: '#a78bfa',
          fuchsia: '#e879f9',
          mint: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Syne', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'mesh':
          'radial-gradient(ellipse 80% 60% at 20% 10%, rgba(34,211,238,0.14), transparent 55%), radial-gradient(ellipse 70% 50% at 85% 20%, rgba(167,139,250,0.16), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 100%, rgba(232,121,249,0.08), transparent 45%)',
        'grid':
          'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '64px 64px',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(34,211,238,0.35)',
        'glow-violet': '0 0 60px -12px rgba(167,139,250,0.35)',
        card: '0 25px 80px -30px rgba(0,0,0,0.75)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        float: 'float 7s ease-in-out infinite',
        pulsebar: 'pulsebar 2.4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulsebar: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
