/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Incluye todos los archivos donde Tailwind debe buscar clases
    './src/index.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} as import('tailwindcss').Config
