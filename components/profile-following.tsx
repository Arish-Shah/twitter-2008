import type { BioPicUser } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { TwoColumn } from "./two-column";

interface ProfileFollowingProps {
  screen: string;
  users: BioPicUser[];
}

export function ProfileFollowing({ users, screen }: ProfileFollowingProps) {
  return (
    <TwoColumn.Sidebar.Section className="border-t border-tw-sidebar-border">
      <TwoColumn.Sidebar.H1>Following</TwoColumn.Sidebar.H1>
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
    </TwoColumn.Sidebar.Section>
  );
}
