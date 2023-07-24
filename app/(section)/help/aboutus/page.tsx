import { BioPics } from "@/components/bio-pics";
import { TwoColumn } from "@/components/two-column";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter / About Us",
};

export default function AboutUs() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>About Us</TwoColumn.Main.H2>
        <TwoColumn.Main.P>
          Twitter is a privately funded startup with offices in the SoMA
          neighborhood of San Francisco, CA. Started as a side project in March
          of 2006, Twitter has grown into a real-time short messaging service
          that works over multiple networks and devices.
        </TwoColumn.Main.P>
        <br />
        <TwoColumn.Main.P>
          In countries all around the world, people follow the sources most
          relevant to them and access information via Twitter as it happens—from
          breaking world news to updates from friends.{" "}
          <Link href="/search">See what people are doing right now.</Link>
        </TwoColumn.Main.P>
        <br />
        <TwoColumn.Main.P>
          For ongoing information about Twitter, please read our{" "}
          <Link href="/blog">company blog</Link>. Also, feel free to{" "}
          <Link href="/help/contact">contact us</Link> with service questions,
          partnership proposals, or press inquiries. If you&apos;d like your
          profile image on this page, <Link href="/help/jobs">click here</Link>.
        </TwoColumn.Main.P>
        <br />
        <TwoColumn.Main.P>
          <Image
            src="/images/sections/office.png"
            alt="Office"
            height={306}
            width={400}
            quality={100}
            className="mx-auto"
          />
        </TwoColumn.Main.P>
        <div className="h-[21px]" />
      </TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <TwoColumn.Sidebar.H1Underline>
            Twitter Employees
          </TwoColumn.Sidebar.H1Underline>
          <BioPics
            users={Array(30).fill({
              handle: "user",
              firstName: "User",
              url: "/images/profile/default_profile_mini.png",
            })}
          />
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
