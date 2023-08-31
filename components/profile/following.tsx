import { getLoggedInUsername } from "@/lib/actions/get-loggedin-username";
import { getFollowingSection } from "@/lib/actions/profile/get-following";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { Sidebar } from "../ui/content";
import { Switch } from "../ui/switch";

interface FollowingProps {
  username?: string;
  showAdd?: boolean;
}

export async function Following({ username, showAdd = false }: FollowingProps) {
  const loggedInUsername = await getLoggedInUsername();
  const data = await getFollowingSection(username);

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <Sidebar.H1 className="!m-0">Following</Sidebar.H1>
        <Switch condition={showAdd}>
          <Link href="/invitations" className="text-[10.8px]">
            add
          </Link>
        </Switch>
      </div>
      <div className="mt-[10px] pl-[3px]">
        {data.following.map((user, i) => (
          <span key={i} className="p-[0_3px_2px_1px]">
            <Link href={`/${user.username}`} title={user.name || user.username}>
              <Image
                src={user.picture}
                alt={user.username}
                height={24}
                width={24}
                quality={100}
                className="mb-[5px] inline"
                draggable={false}
              />
            </Link>
          </span>
        ))}
      </div>
      <Switch condition={data.hasMore}>
        <Link href={`/${username}/friends`} className="text-[10px]">
          View All...
        </Link>
      </Switch>
    </Fragment>
  );
}
