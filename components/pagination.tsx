import NextLink, { LinkProps } from "next/link";
import React from "react";

interface PaginationProps {
  screen: string;
  current: number;
  hasNext: boolean;
}

function Link({
  href,
  className,
  children,
}: LinkProps & { className?: string; children: React.ReactNode }) {
  return (
    <NextLink
      href={href}
      className={`border border-x-pagination-border p-[1.75px_15px] ${className}`}
    >
      {children}
    </NextLink>
  );
}

export function Pagination({ current, hasNext }: PaginationProps) {
  return (
    <div className="mt-[18px] flex justify-between">
      <Link href={`/statuses/user_timeline/15.rss`}>RSS</Link>
      <div className="flex">
        {current > 1 && (
          <Link href={`?page=${current - 1}`} className="mr-[3px]">
            « Newer
          </Link>
        )}
        {hasNext && <Link href={`?page=${current + 1}`}>Older »</Link>}
      </div>
    </div>
  );
}
