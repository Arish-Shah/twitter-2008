import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  large?: boolean;
}

export function Header({ large }: HeaderProps) {
  return (
    <nav>
      <Link href="/">
        <Image
          src={`/images/twitter${!large ? "_logo_s" : ""}.png`}
          alt="Twitter.com"
          height={large ? 49 : 41}
          width={large ? 210 : 175}
          quality={100}
        />
      </Link>
      {!large && (
        <div className="leading-[1.2] absolute right-0 top-[25px] bg-white rounded-[5px] p-[8px_10px]">
          <ul>
            <li>
              <Link href="/login">Login</Link> /{" "}
              <Link href="/signup">Join Twitter!</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
