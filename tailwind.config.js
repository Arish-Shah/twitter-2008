/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "x-theme": "var(--theme)",

        "x-arr": "url(/images/arrows/arr.gif)",
        "x-arr2": "url(/images/arrows/arr2.gif)",
        "x-pale": "url(/images/ui/pale.png)",
      },
      colors: {
        "x-background": "var(--background)",
        "x-text": "var(--text)",
        "x-links": "var(--links)",
        "x-sidebar": "var(--sidebar)",
        "x-sidebar-border": "var(--sidebar-border)",

        "x-meta": "#999",
        "x-sidebar-heading": "#a7cf40",
        "x-badgebox": "#ffc",
        "x-badgebox-border": "#ff0",
        "x-input-border": "#aaa",
        "x-subtext": "#777",
        "x-gray": "#e6e6e6",
        "x-gray-border": "#ccc",
        "x-gray-hover": "#999",
        "x-joinbutton": "#417596",
        "x-joinbutton-hover": "#294b60",
        "x-signupbutton": "#97cd39",
        "x-watchbutton": "#ff493c",
        "x-green": "#008000",
        "x-intro-muted": "#a4a0a1",
        "x-complete": "#e8fecd",
        "x-complete-border": "#a9bf74",
        "x-recent": "#afeff1",
        "x-profile-banner": "#feffdf",
        "x-profile-banner-border": "#ff0",
        "x-profilejoinbutton": "#74ca00",
        "x-profilejoinbutton-border": "#0f0",
        "x-profilejoinbutton-hover": "#8cf500",
        "x-profilehead-border": "#999",
        "x-timeline-border": "#d2dada",
        "x-timeline-hover": "#f7f7f7",
        "x-pagination-border": "#cecece",
        "x-sidebar-tab": "#4c4c4c",
        "x-star": "#ffda64",
        "x-star-border": "#ffac31",
      },
      fontFamily: {
        sans: ["'Lucida Grande'", "sans-serif"],
        georgia: ["georgia"],
      },
      fontSize: {
        base: ["12px", 1.5],
      },
    },
    transitionProperty: {
      height: "height",
    },
  },
  plugins: [],
};
