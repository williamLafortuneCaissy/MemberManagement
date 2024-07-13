/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'rgb(203 213 225)', // This is the value for border-slate-300
      },
    },
  },
  plugins: [],
}

