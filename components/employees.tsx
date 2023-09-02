import { getEmployees } from "@/lib/actions/get-employees";
import Image from "next/image";
import Link from "next/link";

export async function Employees() {
  const employees = await getEmployees(["arish"]);

  return (
    <div className="p-[10px_0_0_12px] text-center">
      <div className="mx-auto w-[158px] text-left">
        {employees.map((user, i) => (
          <Link key={i} href={`/${user.username}`} title={user.profile.name}>
            <Image
              src={user.profile.picture}
              alt={`${user.profile.name} picture`}
              className="mb-[3px] mr-[5.35px] inline h-auto"
              height={24}
              width={24}
              quality={100}
              draggable={false}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
