import { StatsCountType } from "@/types";
import Link from "next/link";

interface UserStatsItemProps {
  count: number;
  label: string;
  url: string;
  className?: string;
}

interface UserStatsProps {
  count: StatsCountType;
  screen: string;
}

function UserStatsItem({
  count,
  label,
  url,
  className = "",
}: UserStatsItemProps) {
  return (
    <Link
      href={url}
      className={`group px-[7px] hover:no-underline ${className} border-l border-x-sidebar-border`}
    >
      <span className="font-georgia text-[15.6px]">
        {count.toLocaleString()}
      </span>
      <br />
      <span className="text-[10.8px] lowercase group-hover:underline">
        {label}
      </span>
    </Link>
  );
}

export function UserStats({ count, screen }: UserStatsProps) {
  return (
    <div className="m-[5px_0_10px_0] flex">
      <UserStatsItem
        count={count.following}
        label="Following"
        url={`/${screen}/friends`}
        className="border-l-0 pl-0"
      />
      <UserStatsItem
        count={count.followers}
        label="Followers"
        url={`/${screen}/followers`}
      />
      <UserStatsItem count={count.updates} label="Updates" url={`/${screen}`} />
    </div>
  );
}
