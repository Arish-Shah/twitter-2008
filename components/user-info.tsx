import { truncateUserInfoUrl } from "@/lib/utils";
import { UserInfoType } from "@/types";
import Link from "next/link";
import { Fragment } from "react";

interface UserInfoItemProps {
  label: string;
  children: React.ReactNode;
}

interface UserInfoProps {
  screen: string;
  info: UserInfoType;
}

function UserInfoItem({ label, children }: UserInfoItemProps) {
  return (
    <li className="pb-[3px]">
      <span className="font-bold">{label}</span>{" "}
      <span className="">{children}</span>
    </li>
  );
}

export function UserInfo({ info }: UserInfoProps) {
  return (
    <Fragment>
      <address>
        <ul>
          <UserInfoItem label="Name">{info.name}</UserInfoItem>
          {info.location && (
            <UserInfoItem label="Location">{info.location}</UserInfoItem>
          )}
          {info.web && (
            <UserInfoItem label="Web">
              <Link href={info.web}>{truncateUserInfoUrl(info.web)}</Link>
            </UserInfoItem>
          )}
          {info.bio && <UserInfoItem label="Bio">{info.bio}</UserInfoItem>}
        </ul>
      </address>
    </Fragment>
  );
}
