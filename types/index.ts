export type User = {
  handle: string;
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
