import type { ThemeType } from "@/types";

type DimensionType = { width: number; height: number };

type DownloadItemType = {
  id: string;
  name: string;
  author: string;
  appUrl: string;
  downloadUrl: string;
  moreUrl: string;
  button: "download" | "install";
  dimensions: { icon: DimensionType; shot: DimensionType };
};

export const applications: DownloadItemType[][] = [
  [
    {
      id: "windows",
      name: "Twitteroo",
      author: "RareEdge",
      appUrl: "http://rareedge.com/twitteroo/",
      downloadUrl:
        "http://rareedge.com/twitteroo/blog/wp-content/plugins/DownloadCounter/download.php?id=8",
      moreUrl: "http://twitter.pbwiki.com/Apps#Windows",
      button: "download",
      dimensions: {
        icon: { width: 149, height: 131 },
        shot: { width: 240, height: 168 },
      },
    },
    {
      id: "mac",
      name: "Twitterrific",
      author: "IconFactory",
      appUrl: "http://iconfactory.com/software/twitterrific/",
      downloadUrl:
        "http://iconfactory.com/assets/software/twitterrific/Twitterrific_21.zip",
      moreUrl: "http://twitter.pbwiki.com/Apps#Mac",
      button: "download",
      dimensions: {
        icon: { width: 116, height: 140 },
        shot: { width: 194, height: 250 },
      },
    },
    {
      id: "firefox",
      name: "Twitbin",
      author: "Infinimedia",
      appUrl: "http://www.twitbin.com/",
      downloadUrl: "http://www.twitbin.com/twitbin.xpi",
      moreUrl: "http://twitter.pbwiki.com/Apps#See",
      button: "download",
      dimensions: {
        icon: { width: 128, height: 123 },
        shot: { width: 216, height: 246 },
      },
    },
  ],
  [
    {
      id: "widsets",
      name: "Twitter Widget",
      author: "WidSets",
      appUrl: "http://www.widsets.com/twitter",
      downloadUrl: "http://www.widsets.com/twitter",
      moreUrl: "http://twitter.pbwiki.com/Apps#Mobileapps",
      button: "install",
      dimensions: {
        icon: { width: 126, height: 128 },
        shot: { width: 150, height: 277 },
      },
    },
    {
      id: "opera",
      name: "Opera Widget",
      author: "Opera",
      appUrl: "http://widgets.opera.com/widget/7206",
      downloadUrl: "http://widgets.opera.com/widget/7206",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 150, height: 247 },
      },
    },
    {
      id: "spaz",
      name: "Spaz",
      author: "Ed Finkler",
      appUrl: "http://funkatron.com/spaz",
      downloadUrl: "http://funkatron.com/spaz",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 132, height: 132 },
        shot: { width: 169, height: 260 },
      },
    },
  ],
  [
    {
      id: "mobio",
      name: "Mobio Service",
      author: "Mobio",
      appUrl: "http://www.getmobio.com/learn/twitter/",
      downloadUrl: "http://www.getmobio.com/learn/twitter/",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 176, height: 265 },
      },
    },
    {
      id: "google",
      name: "Twitter Gadget",
      author: "Google",
      appUrl: "http://desktop.google.com/plugins/i/twitter.html?hl=en",
      downloadUrl: "http://desktop.google.com/plugins/i/twitter.html?hl=en",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 156, height: 208 },
      },
    },
    {
      id: "digsby",
      name: "Digsby",
      author: "dotSyntax",
      appUrl: "http://www.digsby.com/",
      downloadUrl: "http://www.digsby.com/",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 240, height: 259 },
      },
    },
  ],
  [
    {
      id: "blogo",
      name: "Blogo",
      author: "Brainjuice",
      appUrl: "http://drinkbrainjuice.com/blogo",
      downloadUrl: "http://drinkbrainjuice.com/blogo",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 240, height: 259 },
      },
    },
  ],
];

export const hours = [
  { label: "midnight", value: 0 },
  { label: "1 AM", value: 1 },
  { label: "2 AM", value: 2 },
  { label: "3 AM", value: 3 },
  { label: "4 AM", value: 4 },
  { label: "5 AM", value: 5 },
  { label: "6 AM", value: 6 },
  { label: "7 AM", value: 7 },
  { label: "8 AM", value: 8 },
  { label: "9 AM", value: 9 },
  { label: "10 AM", value: 10 },
  { label: "11 AM", value: 11 },
  { label: "noon", value: 12 },
  { label: "1 PM", value: 13 },
  { label: "2 PM", value: 14 },
  { label: "3 PM", value: 15 },
  { label: "4 PM", value: 16 },
  { label: "5 PM", value: 17 },
  { label: "6 PM", value: 18 },
  { label: "7 PM", value: 19 },
  { label: "8 PM", value: 20 },
  { label: "9 PM", value: 21 },
  { label: "10 PM", value: 22 },
  { label: "11 PM", value: 23 },
];

export const defaultThemes: ThemeType[] = [
  {
    text: "#333333",
    background: "#9ae4e8",
    links: "#0084b4",
    sidebar: "#ddffcc",
    sidebarBorder: "#bddcad",
    backgroundImage: "/images/themes/theme1.gif",
    tile: false,
  },
  {
    text: "#663b12",
    background: "#c6e2ee",
    links: "#1f98c7",
    sidebar: "#daecf4",
    sidebarBorder: "#c6e2ee",
    backgroundImage: "/images/themes/theme2.gif",
    tile: false,
  },
  {
    text: "#634047",
    background: "#edece9",
    links: "#088253",
    sidebar: "#e3e2de",
    sidebarBorder: "#d3d2cf",
    backgroundImage: "/images/themes/theme3.gif",
    tile: false,
  },
  {
    text: "#3c3940",
    background: "#0099b9",
    links: "#0099b9",
    sidebar: "#95e8ec",
    sidebarBorder: "#5ed4dc",
    backgroundImage: "/images/themes/theme4.gif",
    tile: false,
  },
  {
    text: "#3e4415",
    background: "#352726",
    links: "#d02b55",
    sidebar: "#99cc33",
    sidebarBorder: "#829d5e",
    backgroundImage: "/images/themes/theme5.gif",
    tile: false,
  },
  {
    text: "#333333",
    background: "#709397",
    links: "#ff3300",
    sidebar: "#a0c5c7",
    sidebarBorder: "#86a4a6",
    backgroundImage: "/images/themes/theme6.gif",
    tile: false,
  },
  {
    background: "#ebebeb",
    text: "#333333",
    links: "#990000",
    sidebar: "#f3f3f3",
    sidebarBorder: "#dfdfdf",
    backgroundImage: "/images/themes/theme7.gif",
    tile: false,
  },
  {
    text: "#333333",
    background: "#8b542b",
    links: "#9d582e",
    sidebar: "#eadeaa",
    sidebarBorder: "#d9b17e",
    backgroundImage: "/images/themes/theme8.gif",
    tile: false,
  },
  {
    text: "#666666",
    background: "#1a1b1f",
    links: "#2fc2ef",
    sidebar: "#252429",
    sidebarBorder: "#181a1e",
    backgroundImage: "/images/themes/theme9.gif",
    tile: false,
  },
  {
    text: "#332651",
    background: "#642d8d",
    links: "#e70000",
    sidebar: "#84d7fb",
    sidebarBorder: "#6ec7ed",
    backgroundImage: "/images/themes/theme10.gif",
    tile: true,
  },
  {
    text: "#362720",
    background: "#ff6699",
    links: "#b40b43",
    sidebar: "#e5507e",
    sidebarBorder: "#cc3366",
    backgroundImage: "/images/themes/theme11.gif",
    tile: true,
  },
  {
    text: "#0c3e53",
    background: "#badfcd",
    links: "#ff0000",
    sidebar: "#fff7cc",
    sidebarBorder: "#f2e195",
    backgroundImage: "/images/themes/theme12.gif",
    tile: false,
  },
];

export const designColors: { [key: string]: keyof ThemeType } = {
  background: "background",
  text: "text",
  links: "links",
  sidebar: "sidebar",
  "sidebar border": "sidebarBorder",
};
