import { Fragment } from "react";
import { StarIcon } from "./ui/icon";

interface TweetInteractionsProps {
  liked?: boolean;
}

export function TweetInteractions({ liked }: TweetInteractionsProps) {
  return (
    <Fragment>
      <StarIcon
        className={`opacity-0 group-hover:opacity-100 ${
          liked && "opacity-100"
        }`}
        liked={liked}
      />
    </Fragment>
  );
}
