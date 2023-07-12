interface BubbleProps {
  tweet: string;
  fullName: string;
  title: string;
}

function Bubble({ tweet, fullName, title }: BubbleProps) {
  return (
    <li className="w-[169px] mx-[11px]">
      <blockquote className="bg-tw-arr bg-no-repeat bg-[8%_100%] pb-[11px] mb-[1px]">
        <div className="bg-white text-[.92em] leading-[1.2] p-[6px_5px]">
          {tweet}
        </div>
      </blockquote>
      <cite className="text-[0.85em] not-italic">
        <strong>{fullName}</strong>, <span>{title}</span>
      </cite>
    </li>
  );
}

export function RecentTweets() {
  return (
    <div className="bg-tw-recent">
      <ul className="w-full text-black flex justify-center py-[30px]">
        <Bubble
          tweet="When I first started doing it, I thought, 'geez, not another website to worry about updating and checking', but now I'm glad I did it."
          fullName="point_chevalier"
          title="livejournaller"
        />
        <Bubble
          tweet="Twitter is the telegraph system of Web 2.0."
          fullName="Nicholas Carr"
          title="Author and Technologist"
        />

        <Bubble
          tweet="It's one of the fastest-growing phenomena on the Internet."
          fullName="New York Times"
          title="NYT"
        />
      </ul>
    </div>
  );
}
