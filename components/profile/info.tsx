import { getInfo } from "@/lib/actions/profile/get-info";
import { truncateWebUrl } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";

interface InfoItemProps {
  label: string;
  children: React.ReactNode;
}

interface InfoProps {
  username: string;
}

function InfoItem({ label, children }: InfoItemProps) {
  return (
    <li className="pb-[3px]">
      <span className="font-bold">{label}</span>{" "}
      <span className="">{children}</span>
    </li>
  );
}

export async function Info({ username }: InfoProps) {
  const info = await getInfo(username);

  return (
    <Fragment>
      <address className="not-italic">
        <ul>
          <InfoItem label="Name">{info.name}</InfoItem>
          {info.location && (
            <InfoItem label="Location">{info.location}</InfoItem>
          )}
          {info.web && (
            <InfoItem label="Web">
              <Link href={info.web}>{truncateWebUrl(info.web)}</Link>
            </InfoItem>
          )}
          {info.bio && <InfoItem label="Bio">{info.bio}</InfoItem>}
        </ul>
      </address>
    </Fragment>
  );
}
