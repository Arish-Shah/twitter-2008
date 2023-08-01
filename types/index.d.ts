export type User = {
  screen: string;
};

export type Theme = {
  backgroundImage: BackgroundImage;
  designColors: DesignColors;
};

export type BackgroundImage = {
  url: string;
  tile: boolean;
};

export type DesignColors = {
  background: string;
  text: string;
  links: string;
  sidebar: string;
  sidebarBorder: string;
};

export type Link = {
  text: string;
  url: string;
};

export type BioPicUser = {
  screen: string;
  firstName: string;
  url: string;
};

export type Application = "web";

export type TimelineTweetParent = {
  id: string;
  screen: string;
};

export type TimelineTweet = {
  id: string;
  text: string;
  time: string;
  application: Application;
  favourited?: boolean;
  parent?: TimelineTweetParent;
};
