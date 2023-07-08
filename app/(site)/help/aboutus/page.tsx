import { Section, SideBase, Wrapper } from "@/components/layout/content";
import { H2, P } from "@/components/layout/typography";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Twitter: About Us",
};

export default function AboutUs() {
  return (
    <div className="flex">
      <Wrapper>
        <H2>About Us</H2>
        <P>
          Twitter is a privately funded startup with offices in the SoMA
          neighborhood of San Francisco, CA. Started as a side project in March
          of 2006, Twitter has grown into a real-time short messaging service
          that works over multiple networks and devices.
        </P>
        <br />
        <P>
          In countries all around the world, people follow the sources most
          relevant to them and access information via Twitter as it happens—from
          breaking world news to updates from friends.{" "}
          <Link href="/search">See what people are doing right now.</Link>
        </P>
        <br />
        <P>
          For ongoing information about Twitter, please read our{" "}
          <Link href="/blog">company blog</Link>. Also, feel free to{" "}
          <Link href="/help/contact">contact us</Link> with service questions,
          partnership proposals, or press inquiries. If you&apos;d like your
          profile image on this page, <Link href="/help/jobs">click here</Link>.
        </P>
        <br />
        <P>
          <Image
            src="/images/office.png"
            alt="Office"
            height={306}
            width={400}
            quality={100}
            className="mx-auto"
          />
        </P>
      </Wrapper>
      <SideBase>
        <Section>hello</Section>
      </SideBase>
    </div>
  );
}
