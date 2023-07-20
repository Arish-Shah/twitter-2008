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
        "tw-bg": "var(--tw-bg)",
      },
      colors: {
        "tw-black": "var(--tw-black)",
        "tw-darkblue": "var(--tw-darkblue)",
        "tw-blue": "var(--tw-blue)",
      },
      fontFamily: {
        sans: ["var(--tw-font)"],
      },
    },
  },
  plugins: [],
};
