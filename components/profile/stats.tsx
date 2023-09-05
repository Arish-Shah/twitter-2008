import { getStats } from "@/lib/actions/profile/get-stats";
import type { LinkType } from "@/types";
import clsx from "clsx";
import Link from "next/link";

interface StatsProps {
  username?: string;
}

interface StatsItem {
  count: number;
  link: LinkType;
  className?: string;
}

function StatsItem({ count, link, className }: StatsItem) {
  return (
    <Link
      href={link.href}
      className={clsx(
        "group border-l border-sidebar-border px-[7px] hover:no-underline",
        className
      )}
    >
      <span className="font-georgia text-[15.6px]">
        {count.toLocaleString()}
      </span>
      <br />
      <span className="text-[10.8px] lowercase group-hover:underline">
        {link.label}
      </span>
    </Link>
  );
}

export async function Stats({ username }: StatsProps) {
  const stats = await getStats(username);

  return (
    <div className="m-[5px_0_10px_0] flex">
      <StatsItem
        count={stats.following}
        link={{
          label: "Following",
          href: username ? `/${username}/friends` : "/friends",
        }}
        className="border-l-0 pl-0"
      />
      <StatsItem
        count={stats.followers}
        link={{
          label: "Followers",
          href: username ? `/${username}/followers` : "/followers",
        }}
      />
      <StatsItem
        count={stats.updates}
        link={{
          label: "Updates",
          href: username ? `/${username}` : "/home",
        }}
      />
    </div>
  );
}
