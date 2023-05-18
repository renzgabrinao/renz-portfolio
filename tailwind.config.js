/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "321px",
      // => @media (min-width: 321px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
