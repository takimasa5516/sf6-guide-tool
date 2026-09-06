/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sf: {
          bg: '#0c0f17',
          card: '#161b26',
          border: '#262f40',
          accent: '#ff5e00',
          orange: '#f97316',
          yellow: '#eab308',
          blue: '#0284c7',
          purple: '#9333ea',
          green: '#10b981',
          danger: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}

