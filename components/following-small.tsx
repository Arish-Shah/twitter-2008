import type { BioPicUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { TwoColumn } from "./two-column";

interface FollowingSmallProps {
  screen: string;
  users: BioPicUser[];
}

export function FollowingSmall({ users, screen }: FollowingSmallProps) {
  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <TwoColumn.Sidebar.H1 className="text-x-sidebar-tab">
          Following
        </TwoColumn.Sidebar.H1>
        <Link href={"/"} className="text-[12px]">
          add
        </Link>
      </div>
      <div className="pl-[3px]">
        {users.map((user, i) => (
          <span key={i} className="p-[0_3px_2px_1px]">
            <Link href={`/${user.screen}`} title={user.name}>
              <Image
                src={user.url}
                alt={user.name}
                height={24}
                width={24}
                quality={100}
                className="mb-[5px] inline"
              />
            </Link>
          </span>
        ))}
      </div>
      <Link href={`/${screen}/friends`} className="text-[10px]">
        View All...
      </Link>
    </Fragment>
  );
}
