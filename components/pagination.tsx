import clsx from "clsx";
import Link, { type LinkProps } from "next/link";

interface PaginationLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

interface PaginationProps {
  type: "prevNext" | "newOld";
  userId: number;
  currentPage: number;
  hasMore: boolean;
}

function PaginationLink({ className, href, children }: PaginationLinkProps) {
  return (
    <Link
      href={href!}
      className={clsx(
        "border border-pagination-border p-[4px_15px]",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Pagination({
  type,
  currentPage,
  hasMore,
  userId,
}: PaginationProps) {
  const left = type === "newOld" ? "Newer" : "Previous";
  const right = type === "newOld" ? "Older" : "Next";

  return (
    <div className="mt-[16px] flex justify-between leading-[1.2]">
      {type === "newOld" && (
        <PaginationLink href={`statuses/user_timeline/${userId}.rss`}>
          RSS
        </PaginationLink>
      )}
      <div className="ml-auto flex">
        {currentPage > 1 && (
          <PaginationLink
            href={{ query: { page: currentPage - 1 } }}
            className="mr-[3px]"
          >
            « {left}
          </PaginationLink>
        )}
        <PaginationLink
          href={`?page=${currentPage + 1}`}
          className={clsx({
            "pointer-events-none cursor-default text-meta hover:no-underline":
              !hasMore,
          })}
        >
          {right} »
        </PaginationLink>
      </div>
    </div>
  );
}
