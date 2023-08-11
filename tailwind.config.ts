import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        theme: "var(--theme)",
        arr: "url(/images/arrows/arr.gif)",
        arr2: "url(/images/arrows/arr2.gif)",
        pale: "url(/images/ui/pale.png)",
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
        green: "#008000",
        badgebox: "#ffc",
        "badgebox-border": "#ff0",
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
    },
  },
  plugins: [],
};
export default config;
