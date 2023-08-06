"use client";

import { formatDateTime, formatText, parseTweetText } from "@/lib/utils";
import { FeedTweetType } from "@/types";
import Link from "next/link";
import { Fragment, useState } from "react";
import { Form } from "../ui/form";

interface TweetFormProps {
  recentTweet?: FeedTweetType;
}

export function TweetForm({ recentTweet }: TweetFormProps) {
  const [text, setText] = useState("");
  const { label, input } = parseTweetText(text);
  const tweetText = recentTweet && formatText(recentTweet.text);
  const tweetTime = recentTweet && formatDateTime(recentTweet.createdAt);

  const difference = 140 - text.length;
  let charCountColor = "text-x-updatebutton-disabled";

  if (difference < 10) charCountColor = "text-red-600";
  else if (difference < 20) charCountColor = "text-red-800";

  return (
    <Fragment>
      <div className="flex items-center justify-between text-[20px]">
        <label className="font-medium text-black" htmlFor="tweet">
          {label}
        </label>
        <h1 className={`font-georgia text-[28px] font-bold ${charCountColor}`}>
          {140 - text.length}
        </h1>
      </div>
      <Form.TextArea
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="tweet"
      />
      <div className="flex items-start justify-between">
        <div className="text-x-latest">
          {recentTweet && (
            <Fragment>
              <strong>Lastest:</strong> <span>{tweetText}</span>{" "}
              <Link
                href={`/${recentTweet.author.screen}/status/${recentTweet.id}`}
                className="font-georgia text-x-meta hover:no-underline"
              >
                {tweetTime}
              </Link>
            </Fragment>
          )}
        </div>
        <input
          type="submit"
          value={input}
          className="min-w-[115px] rounded-[5px] border border-x-gray-border bg-gradient-to-b from-x-updatebutton-gradient-from to-x-updatebutton-gradient-to p-[6px_36px] text-[13.2px] font-medium text-x-updatebutton shadow-[0.5px_0.5px_0px] shadow-x-gray active:shadow-none enabled:hover:from-x-updatebutton-gradient-from-hover enabled:hover:to-x-updatebutton-gradient-to-hover disabled:text-x-updatebutton-disabled"
          disabled={text.length === 0 || text.length > 140}
        />
      </div>
    </Fragment>
  );
}
