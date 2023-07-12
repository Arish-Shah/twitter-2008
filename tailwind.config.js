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
        "tw-arr": "url(/images/arr.gif)",
        "tw-arr2": "url(/images/arr2.gif)",
        "tw-captcha": "url(/images/captcha/sprite.png)",
      },
      colors: {
        "tw-blue": "#9ae4e8",
        "tw-links": "#0084b4",
        "tw-sidebar": "#ddffcc",
        "tw-sidebar-border": "#bddcad",
        "tw-sidebar-heading": "#a7cf40",
        "tw-badgebox": "#ffc",
        "tw-badgebox-border": "#ff0",
        "tw-input-border": "#aaa",
        "tw-button": "#e6e6e6",
        "tw-button-hover": "#999",
        "tw-button-border": "#ccc",
        "tw-join-button": "#417596",
        "tw-join-button-hover": "#294b60",
        "tw-subtext": "#777",
        "tw-intro-muted": "#a4a0a1",
        "tw-button-green": "#97cd39",
        "tw-button-red": "#ff493c",
        "tw-success": "#e8fecd",
        "tw-success-border": "#a9bf74",
        "tw-recent": "#afeff1",
      },
    },
  },
  plugins: [],
};
