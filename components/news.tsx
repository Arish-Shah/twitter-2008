import { getRandomNewsIndex } from "@/lib/utils";
import { Switch } from "./ui/switch";

interface BubbleProps {
  text: string;
  name?: string;
  bio?: string;
}

const news: BubbleProps[] = [
  {
    text: "If you aren't familiar with Twitter, it is one of those things, like MySpace, that sounds totally ridiculous and stupid when you first hear about it. But once you start using it, you realize how much fun it is.",
    name: "Eric Nuzum",
    bio: " Author of The Dead Travel Fast",
  },
  {
    text: "Twitter is the telegraph system of Web 2.0.",
    name: "Nicholas Carr",
    bio: "Author and Technologist",
  },
  {
    text: "Suddenly, it seems as though all the world's a-twitter.",
    bio: "Newsweek",
  },
  {
    text: "It's one of the fastest-growing phenomena on the Internet.",
    bio: "New York Times",
  },
  {
    text: "Twitter is on its way to becoming the next killer app.",
    bio: "TIME Magazine",
  },
  {
    text: "It's almost like ESP",
    bio: "Wired",
  },
  {
    text: "When I first started doing it, I thought, 'geez, not another website to worry about updating and checking', but now I'm glad I did it.",
    name: "point_chevalier",
    bio: "livejournaller",
  },
  {
    text: "Twitter is the first thing on the web that I've been excited about in ages.",
    name: "Jason Kottke",
    bio: "Blogger",
  },
  {
    text: "I really like Twitter.",
    name: "Jeff Barr",
    bio: "Amazon.com, Senior Manager",
  },
  {
    text: "Incredibly useful",
    bio: "Wired",
  },
];

function Bubble({ text, bio, name }: BubbleProps) {
  return (
    <li className="mx-[11.5px] w-[169px]">
      <blockquote className="mb-[1px] bg-arr bg-[8%_100%] bg-no-repeat pb-[11px]">
        <div className="bg-white p-[6px_5px] text-[11.04px] leading-[1.2]">
          {text}
        </div>
      </blockquote>
      <cite className="text-[10.2px] not-italic">
        <Switch condition={!!name}>
          <strong>{name}</strong>,{" "}
        </Switch>
        <span>{bio}</span>
      </cite>
    </li>
  );
}

export async function News() {
  const indices = getRandomNewsIndex(news.length);

  return (
    <ul className="flex justify-center bg-recent py-[30px] text-black">
      {indices.map((index) => (
        <Bubble key={index} {...news[index]} />
      ))}
    </ul>
  );
}
