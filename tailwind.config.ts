import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      padding: '2rem',
      screens: {
        '2xl': '1500px',
      },
      center: true,
    },
    extend: {
      fontFamily: {
        airbnb: ['airbnbcereal', 'sans-serif'],
      },
      colors: {
        shades: {
          1: '#FFFFFF', // Shade 01
          2: '#222222', // Shade 02
          '2-5': '#222222', // Shade 02 - 5%
          '2-30': '#222222', // Shade 02 - 30%
        },
        neutrals: {
          1: '#F7F7F7', // Neutral 01
          2: '#EBEBEB', // Neutral 02
          3: '#DCDCDC', // Neutral 03
          4: '#D3D3D3', // Neutral 04
          5: '#C2C2C2', // Neutral 05
          6: '#B0B0B0', // Neutral 06
          7: '#717171', // Neutral 07
          8: '#545454', // Neutral 08
        },
        primary: {
          1: '#F6476F', // Primary 01
          2: '#FF388C', // Primary 02
        },
        gradients: {
          1: '#F6476F', // Gradient 01
          2: '#FF388C', // Gradient 02
          3: '#FF388C', // Gradient 03
        },
        error: {
          1: '#FFF6F6', // Error 01
          2: '#F43319', // Error 02
        },
        accents: {
          1: '#F6D7DF', // Accent 01
          2: '#F6476F', // Accent 02
          discount: '#D93060', // Discount
          link: '#0B4CA4', // Link
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
