import { truncateUrl } from "@/lib/util";
import { UserInfo } from "@/types";
import Link from "next/link";

interface IntroItemProps {
  label: string;
  children: React.ReactNode;
}

interface StatProps {
  count: number;
  label: string;
  url: string;
  className?: string;
}

interface ProfileIntroProps {
  screen: string;
  info: UserInfo;
}

function IntroItem({ label, children }: IntroItemProps) {
  return (
    <li className="pb-[3px]">
      <span className="font-bold">{label}</span>{" "}
      <span className="">{children}</span>
    </li>
  );
}

function Stat({ count, label, url, className }: StatProps) {
  return (
    <Link
      href={url}
      className={`group px-[7px] hover:no-underline ${className} border-l border-x-sidebar-border`}
    >
      <span className="font-georgia text-[15.6px]">
        {count.toLocaleString()}
      </span>
      <br />
      <span className="text-[10.8px] lowercase group-hover:underline">
        {label}
      </span>
    </Link>
  );
}

export function ProfileIntro({ info, screen }: ProfileIntroProps) {
  return (
    <>
      <address>
        <ul>
          <IntroItem label="Name">{info.name}</IntroItem>
          {info.location && (
            <IntroItem label="Location">{info.location}</IntroItem>
          )}
          {info.web && (
            <IntroItem label="Web">
              <Link href={info.web}>{truncateUrl(info.web)}</Link>
            </IntroItem>
          )}
          {info.bio && <IntroItem label="Bio">{info.bio}</IntroItem>}
        </ul>
      </address>
      <div className="m-[5px_0_10px_0] flex">
        <Stat
          count={info.count.following}
          label="Following"
          url={`/${screen}/friends`}
          className="border-l-0 pl-0"
        />
        <Stat
          count={info.count.followers}
          label="Followers"
          url={`/${screen}/followers`}
        />
        <Stat count={info.count.updates} label="Updates" url={`/${screen}`} />
      </div>
    </>
  );
}
