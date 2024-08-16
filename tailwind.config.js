import { BsBack } from 'react-icons/bs';

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
        headingColor: {
          light: "#4F46E5",
          dark: "#A5B4FC"
        },
        backgroundColor: {
          light1: "#FAF3EB",
          light2: "#FAF5EF",

          dark1: "#0F172A",
          dark2: "#1E293B"
        }
      }
    },
  },
  plugins: [],
}