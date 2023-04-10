/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}", "./src/app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-1": "#7dd3fc",
        "primary-2": "#38bdf8 ",
        "primary-3": "#0ea5e9",
        "primary-4": "#0284c7",
        "primary-5": "#0369a1",
        "primary-7": "#075985",
        "primary-8": "#0c4a6e",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".animation-forwards": { "animation-fill-mode": "forwards" },
      });
    },
  ],
};
