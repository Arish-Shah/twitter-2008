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
        "tw-arr": "var(--arr)",
        "tw-arr2": "var(--arr2)",
        "tw-arr_on_red": "var(--arrow-on-red)",
      },
      colors: {
        // theme
        "tw-background": "var(--background)",
        "tw-text": "var(--text)",
        "tw-links": "var(--links)",
        "tw-sidebar": "var(--sidebar)",
        "tw-sidebar-border": "var(--sidebar-border)",

        // custom
        "tw-sidebar-heading": "var(--sidebar-heading)",
        "tw-badgebox": "var(--badgebox)",
        "tw-badgebox-border": "var(--badgebox-border)",
      },
      fontFamily: {
        sans: ["'Lucida Grande'", "sans-serif"],
      },
      fontSize: {
        base: ["12px", 1.5],
      },
    },
  },
  plugins: [],
};
