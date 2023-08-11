import { Main, Sidebar } from "@/components/content";
import { Employees } from "@/components/employees";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Twitter / About Us",
};

export default function AboutUs() {
  return (
    <Fragment>
      <Main>
        <Main.H2>About Us</Main.H2>
        <Main.P>
          Twitter is a privately funded startup with offices in the SoMA
          neighborhood of San Francisco, CA. Started as a side project in March
          of 2006, Twitter has grown into a real-time short messaging service
          that works over multiple networks and devices.
        </Main.P>
        <br />
        <Main.P>
          In countries all around the world, people follow the sources most
          relevant to them and access information via Twitter as it happens—from
          breaking world news to updates from friends.{" "}
          <Link href="/search">See what people are doing right now.</Link>
        </Main.P>
        <br />
        <Main.P>
          For ongoing information about Twitter, please read our{" "}
          <Link href="/blog">company blog</Link>. Also, feel free to{" "}
          <Link href="/help/contact">contact us</Link> with service questions,
          partnership proposals, or press inquiries. If you&apos;d like your
          profile image on this page, <Link href="/help/jobs">click here</Link>.
        </Main.P>
        <br />
        <Main.P>
          <Image
            src="/images/sections/office.png"
            alt="Office"
            height={306}
            width={400}
            quality={100}
            className="mx-auto"
          />
        </Main.P>
        <div className="h-[21px]" />
      </Main>
      <Sidebar>
        <Sidebar.Section>
          <Sidebar.H1Underline>Twitter Employees</Sidebar.H1Underline>
          <Employees />
        </Sidebar.Section>
      </Sidebar>
    </Fragment>
  );
}
