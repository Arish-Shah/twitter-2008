import NextLink, { LinkProps as NextLinkProps } from "next/link";
import React from "react";

interface LinkProps extends NextLinkProps {
  className?: string;
  children: React.ReactNode;
}

interface PaginationProps {
  screen: string;
  current: number;
  hasNext: boolean;
  type: "prevNext" | "newOld";
}

function Link({ href, className, children }: LinkProps) {
  return (
    <NextLink
      href={href}
      className={`border border-x-pagination-border p-[4px_15px] ${className}`}
    >
      {children}
    </NextLink>
  );
}

export function Pagination({ current, hasNext, type }: PaginationProps) {
  const left = type === "newOld" ? "Newer" : "Previous";
  const right = type === "newOld" ? "Older" : "Next";

  return (
    <div className="mt-[18px] flex justify-between leading-[1.2]">
      {type === "newOld" && (
        <Link href={`/statuses/user_timeline/15.rss`}>RSS</Link>
      )}
      <div className="ml-auto flex">
        {current > 1 && (
          <Link href={`?page=${current - 1}`} className="mr-[3px]">
            « {left}
          </Link>
        )}
        {hasNext && <Link href={`?page=${current + 1}`}>{right} »</Link>}
      </div>
    </div>
  );
}
