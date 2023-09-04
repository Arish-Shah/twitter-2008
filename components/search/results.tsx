import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { formatUpdateCreatedAtSearchResult } from "@/lib/utils";
import type { SearchResultsType } from "@/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FollowDevice } from "./follow-device";

interface ResultItemProps {
  result: SearchResultsType[number];
  showFollow: boolean;
}

interface ResultsProps {
  results: SearchResultsType;
}

function ResultItem({ result, showFollow }: ResultItemProps) {
  return (
    <div
      className={clsx("mt-[10px] flex justify-between border p-[10px]", {
        "border-alert-info-border bg-alert-info": result.following,
        "border-gray-border": !result.following,
      })}
    >
      <div>
        <div className="flex items-center gap-[10px]">
          <Link
            href={`/${result.username}`}
            className="h-[42px] overflow-hidden"
          >
            <Image
              src={result.picture}
              alt={`${result.name} picture`}
              className="h-auto"
              height={42}
              width={42}
            />
          </Link>
          <Link
            href={`/${result.username}`}
            className="text-[20px] hover:no-underline"
            title={result.name}
          >
            {result.username}
          </Link>
        </div>
        <div className="mt-[5px]">
          <span className="block">
            <strong>Name</strong> {result.name}
          </span>
          {result.location && (
            <span>
              <strong>Location</strong> {result.location}&emsp;
            </span>
          )}
          {result.web && (
            <span>
              <strong>Web</strong> <Link href={result.web}>{result.web}</Link>
            </span>
          )}
          {result.bio && (
            <span className="block">
              <strong>Bio</strong> {result.bio}
            </span>
          )}
          {result.recentUpdate && (
            <span className="block">
              <strong>Recently</strong> {result.recentUpdate.text}{" "}
              <span className="text-subtext">
                {formatUpdateCreatedAtSearchResult(
                  result.recentUpdate.createdAt
                )}
              </span>
            </span>
          )}
        </div>
      </div>
      <FollowDevice showFollow={showFollow} result={result} />
    </div>
  );
}

export async function Results({ results }: ResultsProps) {
  const loggedInUsername = await getLoggedInUsername();

  return results.map((result) => (
    <ResultItem
      key={result.userId}
      result={result}
      showFollow={result.username !== loggedInUsername}
    />
  ));
}
