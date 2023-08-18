import { getMastHead } from "@/lib/actions/profile/get-mast-head";
import Image from "next/image";
import Link from "next/link";

interface MastHeadProps {
  username: string;
}

export async function MastHead({ username }: MastHeadProps) {
  const data = await getMastHead(username);

  return (
    <div className="flex items-center">
      <Link href={`/account/profile_images/${data.username}`} prefetch={false}>
        <Image
          src={data.picture}
          alt={data.username}
          height={74}
          width={74}
          quality={100}
          className="border border-meta"
        />
      </Link>
      <h2 className="ml-[10px] mt-[-5px] text-[33.6px] font-bold">
        {data.username}
      </h2>
    </div>
  );
}
