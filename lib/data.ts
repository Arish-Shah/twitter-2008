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
