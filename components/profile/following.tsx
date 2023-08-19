import { getFollowing } from "@/lib/actions/profile/get-following";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface FollowingProps {
  username: string;
}

export async function Following({ username }: FollowingProps) {
  const session = await auth();
  const data = await getFollowing(username);

  return (
    <Fragment>
      <div className="flex items-center justify-between">
        <span className="text-[13.2px] font-bold">Following</span>
        {session?.user.username === username && (
          <Link href="/invitations" className="text-[12px]">
            add
          </Link>
        )}
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
              />
            </Link>
          </span>
        ))}
      </div>
      {data.hasMore && (
        <Link href={`/${screen}/friends`} className="text-[10px]">
          View All...
        </Link>
      )}
    </Fragment>
  );
}
