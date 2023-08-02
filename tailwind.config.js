/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
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
        "tw-pale": "var(--pale)",
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
        "tw-input-border": "var(--input-border)",
        "tw-subtext": "var(--subtext)",
        "tw-button": "var(--button)",
        "tw-button-border": "var(--button-border)",
        "tw-button-hover": "var(--button-hover)",
        "tw-joinbutton": "var(--joinbutton)",
        "tw-joinbutton-hover": "var(--joinbutton-hover)",
        "tw-signupbutton": "var(--signupbutton)",
        "tw-watchbutton": "var(--watchbutton)",
        "tw-green": "var(--green)",
        "tw-intro-muted": "var(--intro-muted)",
        "tw-complete": "var(--complete)",
        "tw-complete-border": "var(--complete-border)",
        "tw-recent": "var(--recent)",
        "tw-profile-banner": "var(--profile-banner)",
        "tw-profile-banner-border": "var(--profile-banner-border)",
        "tw-profilejoinbutton": "var(--profilejoinbutton)",
        "tw-profilejoinbutton-border": "var(--profilejoinbutton-border)",
        "tw-profilejoinbutton-hover": "var(--profilejoinbutton-hover)",
        "tw-profilehead-border": "var(--profilehead-border)",
        "tw-timeline-border": "var(--timeline-border)",
        "tw-timeline-meta": "var(--timeline-meta)",
        "tw-timeline-hover": "var(--timeline-hover)",
        "tw-pagination-border": "var(--pagination-border)",
        "tw-sidebar-tab": "var(--sidebar-tab)",
      },
      fontFamily: {
        sans: ["'Lucida Grande'", "sans-serif"],
        meta: ["georgia"],
      },
      fontSize: {
        base: ["12px", 1.5],
      },
    },
  },
  plugins: [],
};
