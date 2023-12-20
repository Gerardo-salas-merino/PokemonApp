/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 16px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
