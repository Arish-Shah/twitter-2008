import type { BioPicUser } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface BioPicsProps {
  users: BioPicUser[];
}

export function BioPics({ users }: BioPicsProps) {
  return (
    <div className="p-[10px_0_0_12px] text-center">
      <div className="mx-auto w-[158px] text-left">
        {users.map((user, i) => (
          <Link key={i} href={`/${user.handle}`} title={user.firstName}>
            <Image
              src={user.url}
              alt={user.firstName}
              height={24}
              width={24}
              quality={100}
              className="mb-[3px] mr-[5.35px] inline"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
