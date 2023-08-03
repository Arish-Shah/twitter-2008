import { truncateUrl } from "@/lib/util";
import { UserInfo } from "@/types";
import Link from "next/link";

interface InfoItemProps {
  label: string;
  children: React.ReactNode;
}

interface InfoStatProps {
  count: number;
  label: string;
  url: string;
  className?: string;
}

interface UserInfoProps {
  screen: string;
  info: UserInfo;
}

function InfoItem({ label, children }: InfoItemProps) {
  return (
    <li className="pb-[3px]">
      <span className="font-bold">{label}</span>{" "}
      <span className="">{children}</span>
    </li>
  );
}

function InfoStat({ count, label, url, className }: InfoStatProps) {
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

export function UserInfo({ info, screen }: UserInfoProps) {
  return (
    <>
      <address>
        <ul>
          <InfoItem label="Name">{info.name}</InfoItem>
          {info.location && (
            <InfoItem label="Location">{info.location}</InfoItem>
          )}
          {info.web && (
            <InfoItem label="Web">
              <Link href={info.web}>{truncateUrl(info.web)}</Link>
            </InfoItem>
          )}
          {info.bio && <InfoItem label="Bio">{info.bio}</InfoItem>}
        </ul>
      </address>
      <div className="m-[5px_0_10px_0] flex">
        <InfoStat
          count={info.count.following}
          label="Following"
          url={`/${screen}/friends`}
          className="border-l-0 pl-0"
        />
        <InfoStat
          count={info.count.followers}
          label="Followers"
          url={`/${screen}/followers`}
        />
        <InfoStat
          count={info.count.updates}
          label="Updates"
          url={`/${screen}`}
        />
      </div>
    </>
  );
}
