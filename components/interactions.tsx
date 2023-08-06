import { StarIcon, TrashIcon } from "./ui/icon";

interface TweetInteractionsProps {
  liked?: boolean;
}

export function TweetInteractions({ liked }: TweetInteractionsProps) {
  return (
    <div className="flex flex-col items-center">
      <StarIcon
        className={`opacity-0 group-hover:opacity-100 ${
          liked && "opacity-100"
        }`}
        liked={liked}
      />
      <TrashIcon className="mt-[5px] opacity-0 group-hover:opacity-100" />
    </div>
  );
}
