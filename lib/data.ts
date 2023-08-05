import type {
  BioPicType,
  FeedTweetType,
  StatsCountType,
  ThemeType,
  TimelineTweetType,
  UserInfoType,
  UserType,
} from "@/types";

export const user: UserType = {
  screen: "default",
};

export const theme: ThemeType = {
  backgroundImage: {
    tile: false,
    url: "/images/themes/theme7.gif",
  },
  designColors: {
    background: "#ebebeb",
    links: "#990000",
    sidebar: "#f3f3f3",
    sidebarBorder: "#dfdfdf",
    text: "#333333",
  },
};

export const tweets: TimelineTweetType[] = [
  {
    id: "849894313",
    text: 'nothin\' like a little weepy waily "hey jupiter" to kick off morning testing',
    createdAt: "2023-08-03T22:12:11Z",
    application: "WEB",
  },
  {
    id: "932413093",
    text: "working on work instead.",
    createdAt: "2023-06-05T18:32:11Z",
    application: "WEB",
  },
  {
    id: "675321522",
    text: "bb-sat jace&haley; for the wkend while mommy went away for b-day relaxation; tried to log onto Wow now that they left but CRASH goes computer",
    createdAt: "2022-11-02T08:32:14Z",
    application: "WEB",
  },
  {
    id: "911048921",
    text: "The new Of Montreal album is not at all subtle about its sexuality.",
    createdAt: "2009-11-29T15:06:20Z",
    application: "WEB",
  },
  {
    id: "668525693",
    text: "@atariboy happy birthday (one day late!) You were born the same day as my brother! Good omen, both of you are so cool~!",
    createdAt: "2009-07-04T07:15:35Z",
    application: "WEB",
    parent: {
      id: "871890198",
      screen: "atariboy",
    },
  },
  {
    id: "643817795",
    text: "@krissy happy 30th birthday to my life partner and best friend!",
    createdAt: "2009-02-19T20:52:47Z",
    application: "WEB",
    parent: {
      id: "871672817",
      screen: "krissy",
    },
  },
  {
    id: "938027640",
    text: "I think I want one of those twitter update t shirts with this one on it: http://twitter.com/al3x/status/933225049",
    createdAt: "2009-04-27T04:47:54Z",
    application: "WEB",
  },
  {
    id: "200462352",
    text: 'I typed "queeries" instead of "queries" but I caught it. Still I thought it was pretty funny',
    createdAt: "2009-02-27T01:15:30Z",
    application: "WEB",
  },
  {
    id: "357733075",
    text: "@brandooon happy birthday little brother :)",
    createdAt: "2009-02-08T01:40:33Z",
    application: "WEB",
    parent: {
      id: "717171891",
      screen: "brandooon",
    },
  },
  {
    id: "679928620",
    text: "I finished rereading Wuthering Heights on Monday night and I still can't stop thinking about it. Or the Kate Bush song, unfortunately.",
    createdAt: "2009-03-31T20:28:50Z",
    application: "WEB",
  },
  {
    id: "183448418",
    text: "every morning this week, I wake up with a fierce hunger. I cannot even focus in the office right now. breakfast burrito, here I come.",
    createdAt: "2009-03-16T05:29:58Z",
    application: "WEB",
  },
  {
    id: "683168013",
    text: "Agreed by children & republican cat elect Fu: even if republicans are sad, the future will be good for everyone after tonight :)",
    createdAt: "2009-06-10T18:36:14Z",
    application: "WEB",
  },
  {
    id: "706104777",
    text: "so we decided to elect one of my cats to represent our republican friends so we could feel sorry for their sadness. Fu got elected.",
    createdAt: "2009-08-31T00:59:10Z",
    application: "WEB",
  },
  {
    id: "268379872",
    text: "the kids were elated (they voted for obama at school) but they also both felt sorry for McCain and for family&friends; that supported him...",
    createdAt: "2009-08-11T19:23:36Z",
    application: "WEB",
  },
  {
    id: "932407188",
    text: "Haley called @yarrow and left an older-than-8 years-old message to find out if she was in the Chicago crowd :)",
    createdAt: "2009-01-16T02:51:26Z",
    application: "WEB",
  },
  {
    id: "503555772",
    text: "watched both speeches with the kids, who were riveted. Jace said Obama as a president is like a rockstar, but more responsible.",
    createdAt: "2009-04-20T17:28:08Z",
    application: "WEB",
  },
  {
    id: "282999357",
    text: "damn it. I can't delete my last update, which annoys me because I typed \"starbuck's\" which is WRONG",
    createdAt: "2009-08-11T18:17:59Z",
    application: "WEB",
  },
  {
    id: "540109048",
    text: "I wonder if starbuck's will be too crazy today to make it worth dropping in for one of their yummy pre-packaged sandwiches.",
    createdAt: "2009-10-19T04:16:59Z",
    application: "WEB",
  },
  {
    id: "742221751",
    text: "looking at the rain makes my feet feel twice as cold, dunno why.",
    createdAt: "2009-07-08T17:46:20Z",
    application: "WEB",
  },
  {
    id: "826742755",
    text: "I just voted for Obama in #TwitVote -- http://twitvote.twitmarks.com/",
    createdAt: "2008-12-15T07:31:36Z",
    application: "WEB",
  },
];

export const favourited: FeedTweetType[] = [
  {
    id: "849894313",
    text: 'nothin\' like a little weepy waily "hey jupiter" to kick off morning testing',
    createdAt: "2009-11-02T08:32:14Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "932413093",
    text: "working on work instead.",
    createdAt: "2009-10-05T18:32:11Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "675321522",
    text: "bb-sat jace&haley; for the wkend while mommy went away for b-day relaxation; tried to log onto Wow now that they left but CRASH goes computer",
    createdAt: "2009-08-07T03:53:53Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "911048921",
    text: "The new Of Montreal album is not at all subtle about its sexuality.",
    createdAt: "2009-11-29T15:06:20Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "668525693",
    text: "@atariboy happy birthday (one day late!) You were born the same day as my brother! Good omen, both of you are so cool~!",
    createdAt: "2009-07-04T07:15:35Z",
    application: "WEB",
    parent: {
      id: "871890198",
      screen: "atariboy",
    },
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "643817795",
    text: "@krissy happy 30th birthday to my life partner and best friend!",
    createdAt: "2009-02-19T20:52:47Z",
    application: "WEB",
    parent: {
      id: "871672817",
      screen: "krissy",
    },
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "938027640",
    text: "I think I want one of those twitter update t shirts with this one on it: http://twitter.com/al3x/status/933225049",
    createdAt: "2009-04-27T04:47:54Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "200462352",
    text: 'I typed "queeries" instead of "queries" but I caught it. Still I thought it was pretty funny',
    createdAt: "2009-02-27T01:15:30Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "357733075",
    text: "@brandooon happy birthday little brother :)",
    createdAt: "2009-02-08T01:40:33Z",
    application: "WEB",
    parent: {
      id: "717171891",
      screen: "brandooon",
    },
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "679928620",
    text: "I finished rereading Wuthering Heights on Monday night and I still can't stop thinking about it. Or the Kate Bush song, unfortunately.",
    createdAt: "2009-03-31T20:28:50Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "183448418",
    text: "every morning this week, I wake up with a fierce hunger. I cannot even focus in the office right now. breakfast burrito, here I come.",
    createdAt: "2009-03-16T05:29:58Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "683168013",
    text: "Agreed by children & republican cat elect Fu: even if republicans are sad, the future will be good for everyone after tonight :)",
    createdAt: "2009-06-10T18:36:14Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "706104777",
    text: "so we decided to elect one of my cats to represent our republican friends so we could feel sorry for their sadness. Fu got elected.",
    createdAt: "2009-08-31T00:59:10Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "268379872",
    text: "the kids were elated (they voted for obama at school) but they also both felt sorry for McCain and for family&friends; that supported him...",
    createdAt: "2009-08-11T19:23:36Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "932407188",
    text: "Haley called @yarrow and left an older-than-8 years-old message to find out if she was in the Chicago crowd :)",
    createdAt: "2009-01-16T02:51:26Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "503555772",
    text: "watched both speeches with the kids, who were riveted. Jace said Obama as a president is like a rockstar, but more responsible.",
    createdAt: "2009-04-20T17:28:08Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "282999357",
    text: "damn it. I can't delete my last update, which annoys me because I typed \"starbuck's\" which is WRONG",
    createdAt: "2009-08-11T18:17:59Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "540109048",
    text: "I wonder if starbuck's will be too crazy today to make it worth dropping in for one of their yummy pre-packaged sandwiches.",
    createdAt: "2009-10-19T04:16:59Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "742221751",
    text: "looking at the rain makes my feet feel twice as cold, dunno why.",
    createdAt: "2009-07-08T17:46:20Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "826742755",
    text: "I just voted for Obama in #TwitVote -- http://twitvote.twitmarks.com/",
    createdAt: "2008-12-15T07:31:36Z",
    application: "WEB",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
];

export const info: UserInfoType = {
  name: "Bruce Wayne",
  location: "Earth, Solar System",
  web: "https://github.com/Arish-Shah/x-2008",
  bio: "color my life",
};

export const count: StatsCountType = {
  following: 278,
  followers: 5547,
  updates: 6216,
};

export const bioPic: BioPicType = {
  screen: "user",
  name: "User",
  url: "/images/profile/default_profile_mini.png",
};
