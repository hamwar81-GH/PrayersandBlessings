/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF7F2',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#DFC08A',
          dark: '#A8854E',
        },
        sage: '#DDE6D5',
        lavender: '#E9E2F4',
        charcoal: {
          DEFAULT: '#1F1F1F',
          light: '#3A3A3A',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        body: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 20px rgba(31,31,31,0.06)',
        'card': '0 4px 30px rgba(31,31,31,0.08)',
        'hover': '0 8px 40px rgba(31,31,31,0.12)',
        'gold': '0 4px 20px rgba(201,169,110,0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-up': 'fadeUp 0.7s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F1F1F',
            fontFamily: 'Manrope, Inter, system-ui, sans-serif',
            'h1,h2,h3,h4': {
              fontFamily: 'Cormorant Garamond, Playfair Display, Georgia, serif',
            },
          },
        },
      },
    },
  },
  plugins: [],
};
