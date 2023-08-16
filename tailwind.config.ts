import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "var(--background-image)",
        arr: "url(/images/arrows/arr.gif)",
        arr2: "url(/images/arrows/arr2.gif)",
        pale: "url(/images/ui/pale.png)",
        sprite: "url(/images/captcha/sprite.png)",
      },
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        links: "var(--links)",
        sidebar: "var(--sidebar)",
        "sidebar-border": "var(--sidebar-border)",

        gray: "#e6e6e6",
        "gray-border": "#ccc",
        "gray-hover": "#999",
        "gray-disabled": "#a6a6a6",
        "gray-disabled-hover": "#707070",
        "sidebar-heading-border": "#a7cf40",
        joinbutton: "#417596",
        "joinbutton-hover": "#294b60",
        signupbutton: "#97cd39",
        watchbutton: "#ff493c",
        profilejoinbutton: "#74ca00",
        "profilejoinbutton-hover": "#8cf500",
        "profilejoinbutton-border": "#0f0",
        subtext: "#777",
        "input-border": "#aaa",
        "form-green": "#008000",
        "form-red": "#dd0000",
        badgebox: "#ffc",
        "badgebox-border": "#ff0",
        updatebutton: "#4c4c4c",
        "updatebutton-disabled": "#c6c6c6",
        "updatebutton-gradient-from": "#fafafa",
        "updatebutton-gradient-to": "#f1f1f1",
        "updatebutton-gradient-from-hover": "#f1f1f1",
        "updatebutton-gradient-to-hover": "#e0e0e0",
        intro: "#a4a0a1",
        "alert-success": "#e8fecd",
        "alert-success-border": "#a9bf74",
        recent: "#afeff1",
        "join-banner": "#feffdf",
        "join-banner-border": "#ff0",
        meta: "#999",
        "timeline-border": "#d2dada",
        "timeline-hover": "#f7f7f7",
      },
      fontFamily: {
        sans: ["'Lucida Grande'", "sans-serif"],
        georgia: ["georgia"],
      },
      fontSize: {
        base: ["12px", "1.5"],
      },
    },
    borderRadius: {
      DEFAULT: "5px",
    },
    transitionProperty: {
      height: "height",
      opacity: "opacity",
    },
  },
  plugins: [],
};
export default config;
