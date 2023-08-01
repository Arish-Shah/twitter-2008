interface BubbleProps {
  tweet: string;
  fullName: string;
  title: string;
}

function Bubble({ tweet, fullName, title }: BubbleProps) {
  return (
    <li className="mx-[11px] w-[169px]">
      <blockquote className="mb-[1px] bg-tw-arr bg-[8%_100%] bg-no-repeat pb-[11px]">
        <div className="bg-white p-[6px_5px] text-[11.04px] leading-[1.2]">
          {tweet}
        </div>
      </blockquote>
      <cite className="text-[10.2px] not-italic">
        <strong>{fullName}</strong>, <span>{title}</span>
      </cite>
    </li>
  );
}

export function RecentTweets() {
  return (
    <div className="bg-tw-recent">
      <ul className="flex w-full justify-center py-[30px] text-black">
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
