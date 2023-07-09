/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "tw-bg": "url(/images/bg.gif)",
        "tw-arr2": "url(/images/arr2.gif)",
      },
      colors: {
        "tw-blue": "#9ae4e8",
        "tw-links": "#0084b4",
        "tw-sidebar": "#ddffcc",
        "tw-sidebar-border": "#bddcad",
        "tw-sidebar-heading": "#A7CF40;",
        "tw-badgebox": "#ffc",
        "tw-badgebox-border": "#ff0",
      },
    },
  },
  plugins: [],
};
