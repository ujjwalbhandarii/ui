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
    extend: {},
  },
  plugins: [],
} satisfies Config;

export default config;
