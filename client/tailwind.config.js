/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#0D0E16",
        "gradient-end": "#14162D",
      },
    },
  },
  plugins: [],
};
