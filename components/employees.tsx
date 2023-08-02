import type { BioPicUser } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface EmployeesProps {
  users: BioPicUser[];
}

export function Employees({ users }: EmployeesProps) {
  return (
    <div className="p-[10px_0_0_12px] text-center">
      <div className="mx-auto w-[158px] text-left">
        {users.map((user, i) => (
          <Link key={i} href={`/${user.screen}`} title={user.name}>
            <Image
              src={user.url}
              alt={user.name}
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
