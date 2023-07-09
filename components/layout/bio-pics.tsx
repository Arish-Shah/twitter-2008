import Image from "next/image";
import Link from "next/link";

interface BioPicsProps {
  links: {
    handle: string;
    name: string;
    img: string;
  }[];
}

export function BioPics({ links }: BioPicsProps) {
  return (
    <div className="text-center p-[10px_0_0_12px]">
      <div className="text-left mx-auto w-[158px]">
        {links.map((link, i) => (
          <Link key={i} href={`/${link.handle}`} title={link.name}>
            <Image
              src={link.img}
              alt={link.name}
              height={24}
              width={24}
              quality={100}
              className="inline mr-[5.35px] mb-[3px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
