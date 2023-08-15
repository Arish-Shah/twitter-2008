import { getRecentUpdates } from "@/lib/actions/get-recent-updates";
import { Fragment } from "react";

interface BubbleProps {
  text: string;
  username: string;
  name: string | null;
}

function Bubble({ text, username, name }: BubbleProps) {
  return (
    <li className="mx-[11.5px] w-[169px]">
      <blockquote className="mb-[1px] bg-arr bg-[8%_100%] bg-no-repeat pb-[11px]">
        <div className="bg-white p-[6px_5px] text-[11.04px] leading-[1.2]">
          {text}
        </div>
      </blockquote>
      <cite className="text-[10.2px] not-italic">
        {name && (
          <Fragment>
            <strong>{name}</strong>,{" "}
          </Fragment>
        )}
        <span>{username}</span>
      </cite>
    </li>
  );
}

export async function TopUpdates() {
  const updates = await getRecentUpdates(3);

  return (
    <ul className="flex justify-center bg-recent py-[30px] text-black">
      {updates.map((update, i) => (
        <Bubble key={i} {...update} />
      ))}
    </ul>
  );
}
