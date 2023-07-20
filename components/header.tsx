import { User } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  user?: User;
  large?: boolean;
}

export function Header({ user, large }: HeaderProps) {
  return (
    <nav>
      <Link href="/">
        <Image
          src={`/images/logos/twitter${!large ? "_logo_s" : ""}.png`}
          alt="Twitter.com"
          height={large ? 49 : 41}
          width={large ? 210 : 175}
          quality={100}
        />
      </Link>
      {!large && (
        <div className="absolute right-0 top-[25px] rounded-[5px] bg-white p-[8px_10px]">
          <ul>
            <li className="inline">
              <Link href="/login">Login</Link>
            </li>
            <li className="inline"> / </li>
            <li className="inline">
              <Link href="/signup">Join Twitter!</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
