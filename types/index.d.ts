export type UserType = { screen: string };

export type ThemeType = {
  backgroundImage: BackgroundImageType;
  designColors: DesignColorsType;
};

export type BackgroundImageType = {
  url: string;
  tile: boolean;
};

export type DesignColorsType = {
  background: string;
  text: string;
  links: string;
  sidebar: string;
  sidebarBorder: string;
};

export type LinkType = {
  text: string;
  url: string;
};

export type BioPicType = {
  screen: string;
  name: string;
  url: string;
};

export type ApplicationType = "WEB";

export type TweetParentType = {
  id: string;
  screen: string;
};

export type TimelineTweetType = {
  id: string;
  text: string;
  createdAt: string;
  application: ApplicationType;
  favorited?: boolean;
  parent?: TweetParentType;
};

export type FeedTweetAuthorType = {
  img: string;
  screen: string;
};

export type FeedTweetType = {
  id: string;
  text: string;
  createdAt: string;
  application: ApplicationType;
  author: FeedTweetAuthorType;
  favorited?: boolean;
  parent?: TweetParentType;
};

export type StatsCountType = {
  following: number;
  followers: number;
  updates: number;
};

export type UserInfoType = {
  name: string;
  location?: string;
  web?: string;
  bio?: string;
};

export type PageType = "DEFAULT" | "LARGE" | "SMALL";

export type PaginationType = "PREV_NEXT" | "NEW_OLD";

export const profileTabTypes = ["UPDATES", "FAVORITES"] as const;
export type ProfileTabType = (typeof profileTabTypes)[number];

export const homeTabTypes = [
  "HOME",
  "REPLIES",
  "DIRECT_MESSAGES",
  "FAVORITES",
  "EVERYONE",
] as const;
export type HomeTabType = (typeof homeTabTypes)[number];

export type MenuItemType = {
  label: string;
  url: string;
  selected: boolean;
};
