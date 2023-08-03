import type { BioPicUser, FavouritedTweet, TimelineTweet } from "@/types";

export const tweets: TimelineTweet[] = [
  {
    id: "849894313",
    text: 'nothin\' like a little weepy waily "hey jupiter" to kick off morning testing',
    time: "2009-11-02T08:32:14Z",
    application: "web",
  },
  {
    id: "932413093",
    text: "working on work instead.",
    time: "2009-10-05T18:32:11Z",
    application: "web",
  },
  {
    id: "675321522",
    text: "bb-sat jace&haley; for the wkend while mommy went away for b-day relaxation; tried to log onto Wow now that they left but CRASH goes computer",
    time: "2009-08-07T03:53:53Z",
    application: "web",
  },
  {
    id: "911048921",
    text: "The new Of Montreal album is not at all subtle about its sexuality.",
    time: "2009-11-29T15:06:20Z",
    application: "web",
  },
  {
    id: "668525693",
    text: "@atariboy happy birthday (one day late!) You were born the same day as my brother! Good omen, both of you are so cool~!",
    time: "2009-07-04T07:15:35Z",
    application: "web",
    parent: {
      id: "871890198",
      screen: "atariboy",
    },
  },
  {
    id: "643817795",
    text: "@krissy happy 30th birthday to my life partner and best friend!",
    time: "2009-02-19T20:52:47Z",
    application: "web",
    parent: {
      id: "871672817",
      screen: "krissy",
    },
  },
  {
    id: "938027640",
    text: "I think I want one of those twitter update t shirts with this one on it: http://twitter.com/al3x/status/933225049",
    time: "2009-04-27T04:47:54Z",
    application: "web",
  },
  {
    id: "200462352",
    text: 'I typed "queeries" instead of "queries" but I caught it. Still I thought it was pretty funny',
    time: "2009-02-27T01:15:30Z",
    application: "web",
  },
  {
    id: "357733075",
    text: "@brandooon happy birthday little brother :)",
    time: "2009-02-08T01:40:33Z",
    application: "web",
    parent: {
      id: "717171891",
      screen: "brandooon",
    },
  },
  {
    id: "679928620",
    text: "I finished rereading Wuthering Heights on Monday night and I still can't stop thinking about it. Or the Kate Bush song, unfortunately.",
    time: "2009-03-31T20:28:50Z",
    application: "web",
  },
  {
    id: "183448418",
    text: "every morning this week, I wake up with a fierce hunger. I cannot even focus in the office right now. breakfast burrito, here I come.",
    time: "2009-03-16T05:29:58Z",
    application: "web",
  },
  {
    id: "683168013",
    text: "Agreed by children & republican cat elect Fu: even if republicans are sad, the future will be good for everyone after tonight :)",
    time: "2009-06-10T18:36:14Z",
    application: "web",
  },
  {
    id: "706104777",
    text: "so we decided to elect one of my cats to represent our republican friends so we could feel sorry for their sadness. Fu got elected.",
    time: "2009-08-31T00:59:10Z",
    application: "web",
  },
  {
    id: "268379872",
    text: "the kids were elated (they voted for obama at school) but they also both felt sorry for McCain and for family&friends; that supported him...",
    time: "2009-08-11T19:23:36Z",
    application: "web",
  },
  {
    id: "932407188",
    text: "Haley called @yarrow and left an older-than-8 years-old message to find out if she was in the Chicago crowd :)",
    time: "2009-01-16T02:51:26Z",
    application: "web",
  },
  {
    id: "503555772",
    text: "watched both speeches with the kids, who were riveted. Jace said Obama as a president is like a rockstar, but more responsible.",
    time: "2009-04-20T17:28:08Z",
    application: "web",
  },
  {
    id: "282999357",
    text: "damn it. I can't delete my last update, which annoys me because I typed \"starbuck's\" which is WRONG",
    time: "2009-08-11T18:17:59Z",
    application: "web",
  },
  {
    id: "540109048",
    text: "I wonder if starbuck's will be too crazy today to make it worth dropping in for one of their yummy pre-packaged sandwiches.",
    time: "2009-10-19T04:16:59Z",
    application: "web",
  },
  {
    id: "742221751",
    text: "looking at the rain makes my feet feel twice as cold, dunno why.",
    time: "2009-07-08T17:46:20Z",
    application: "web",
  },
  {
    id: "826742755",
    text: "I just voted for Obama in #TwitVote -- http://twitvote.twitmarks.com/",
    time: "2008-12-15T07:31:36Z",
    application: "web",
  },
];

export const favourited: FavouritedTweet[] = [
  {
    id: "849894313",
    text: 'nothin\' like a little weepy waily "hey jupiter" to kick off morning testing',
    time: "2009-11-02T08:32:14Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "932413093",
    text: "working on work instead.",
    time: "2009-10-05T18:32:11Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "675321522",
    text: "bb-sat jace&haley; for the wkend while mommy went away for b-day relaxation; tried to log onto Wow now that they left but CRASH goes computer",
    time: "2009-08-07T03:53:53Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "911048921",
    text: "The new Of Montreal album is not at all subtle about its sexuality.",
    time: "2009-11-29T15:06:20Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "668525693",
    text: "@atariboy happy birthday (one day late!) You were born the same day as my brother! Good omen, both of you are so cool~!",
    time: "2009-07-04T07:15:35Z",
    application: "web",
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
    time: "2009-02-19T20:52:47Z",
    application: "web",
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
    time: "2009-04-27T04:47:54Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "200462352",
    text: 'I typed "queeries" instead of "queries" but I caught it. Still I thought it was pretty funny',
    time: "2009-02-27T01:15:30Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "357733075",
    text: "@brandooon happy birthday little brother :)",
    time: "2009-02-08T01:40:33Z",
    application: "web",
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
    time: "2009-03-31T20:28:50Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "183448418",
    text: "every morning this week, I wake up with a fierce hunger. I cannot even focus in the office right now. breakfast burrito, here I come.",
    time: "2009-03-16T05:29:58Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "683168013",
    text: "Agreed by children & republican cat elect Fu: even if republicans are sad, the future will be good for everyone after tonight :)",
    time: "2009-06-10T18:36:14Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "706104777",
    text: "so we decided to elect one of my cats to represent our republican friends so we could feel sorry for their sadness. Fu got elected.",
    time: "2009-08-31T00:59:10Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "268379872",
    text: "the kids were elated (they voted for obama at school) but they also both felt sorry for McCain and for family&friends; that supported him...",
    time: "2009-08-11T19:23:36Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "932407188",
    text: "Haley called @yarrow and left an older-than-8 years-old message to find out if she was in the Chicago crowd :)",
    time: "2009-01-16T02:51:26Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "503555772",
    text: "watched both speeches with the kids, who were riveted. Jace said Obama as a president is like a rockstar, but more responsible.",
    time: "2009-04-20T17:28:08Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "282999357",
    text: "damn it. I can't delete my last update, which annoys me because I typed \"starbuck's\" which is WRONG",
    time: "2009-08-11T18:17:59Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "540109048",
    text: "I wonder if starbuck's will be too crazy today to make it worth dropping in for one of their yummy pre-packaged sandwiches.",
    time: "2009-10-19T04:16:59Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "742221751",
    text: "looking at the rain makes my feet feel twice as cold, dunno why.",
    time: "2009-07-08T17:46:20Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
  {
    id: "826742755",
    text: "I just voted for Obama in #TwitVote -- http://twitvote.twitmarks.com/",
    time: "2008-12-15T07:31:36Z",
    application: "web",
    author: {
      img: "/images/profile/default_profile_bigger.png",
      screen: "default",
    },
  },
];

export const info = {
  name: "Bruce Wayne",
  location: "Earth, Solar System",
  web: "https://github.com/Arish-Shah/x-2008",
  bio: "color my life",
  count: {
    following: 278,
    followers: 5547,
    updates: 6216,
  },
};

export const bioPic: BioPicUser = {
  screen: "user",
  name: "User",
  url: "/images/profile/default_profile_mini.png",
};
