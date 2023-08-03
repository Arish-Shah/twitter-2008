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
  name: string;
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
  createdAt: string;
  application: Application;
  favorited?: boolean;
  parent?: TimelineTweetParent;
};

export type FavouritedTweetAuthor = {
  img: string;
  screen: string;
};

export type FavouritedTweet = {
  id: string;
  text: string;
  createdAt: string;
  application: Application;
  author: FavouritedTweetAuthor;
  favorited?: boolean;
  parent?: TimelineTweetParent;
};

export type StatsCount = {
  following: number;
  followers: number;
  updates: number;
};

export type UserInfo = {
  name: string;
  location?: string;
  web?: string;
  bio?: string;
  count: StatsCount;
};

export type PageSize = "large" | "small" | "default";
