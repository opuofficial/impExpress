/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#d63941",
      },
      textColor: {
        light: "#fcfcfc",
      },
    },
  },
  plugins: [],
};
