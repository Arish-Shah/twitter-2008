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
        "tw-theme": "var(--theme)",
        "tw-arr": "url('/images/arrows/arr.gif')",
        "tw-arr2": "url('/images/arrows/arr2.gif')",
        "tw-arr_on_red": "url('/images/arrows/arrow_on_red.gif')",
      },
      colors: {
        "tw-background": "var(--background)",
        "tw-text": "var(--text)",
        "tw-links": "var(--links)",
        "tw-sidebar": "var(--sidebar)",
        "tw-sidebar-border": "var(--sidebar-border)",
      },
      fontFamily: {
        sans: ["'Lucida Grande'", "sans-serif"],
      },
      fontSize: {
        base: ["12px", 1.2],
      },
    },
  },
  plugins: [],
};
