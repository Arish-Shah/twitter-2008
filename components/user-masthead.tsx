import Image from "next/image";
import Link from "next/link";

interface UserMastheadProps {
  img: string;
  screen: string;
}

export function UserMasthead({ img, screen }: UserMastheadProps) {
  return (
    <div className="flex items-center">
      <Link href={`/account/profile_image/${screen}`}>
        <Image
          src={img}
          alt={screen}
          height={74}
          width={74}
          quality={100}
          className="border border-x-profilehead-border"
        />
      </Link>
      <h2 className="ml-[10px] mt-[-5px] text-[33.6px] font-bold">{screen}</h2>
    </div>
  );
}

export function UserMastheadSmall({ img, screen }: UserMastheadProps) {
  return (
    <div className="mb-[13px] flex items-center">
      <Link href={`/account/profile_image/${screen}`}>
        <Image
          src={img}
          alt={screen}
          height={32}
          width={32}
          quality={100}
          className="border border-x-profilehead-border"
        />
      </Link>
      <h2 className="ml-[8px] text-[14.4px]">default</h2>
    </div>
  );
}
