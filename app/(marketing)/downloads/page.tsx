import { Main } from "@/components/ui/content";
import { applications } from "@/lib/data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Twitter / Downloads",
};

export default function Downloads() {
  return (
    <Main className="pb-[15px]">
      <Main.H2>Downloads</Main.H2>
      <Main.P>
        Twitter lets you find out what your friends are doing in whatever way
        makes the most sense for you. <br />
        Check out these downloads for other ways to send and receive Twitter
        Updates.
      </Main.P>
      <center className="mt-[23px] bg-[lightyellow] p-[10px]">
        Got a shiny new <strong>iPhone</strong>? Check out{" "}
        <Link href="http://pockettweets.com/">PocketTweets</Link>!
      </center>
      <div className="table w-full">
        {applications.map((list, i) => (
          <Fragment key={i}>
            <div className="table-row">
              {list.map((item) => (
                <center className="table-cell" key={item.id}>
                  <Image
                    src={`/images/applications/${item.id}.png`}
                    alt={item.id}
                    width={item.dimensions.icon.width}
                    height={item.dimensions.icon.height}
                    quality={100}
                    draggable={false}
                  />
                </center>
              ))}
            </div>
            <div className="table-row">
              {list.map((item) => (
                <center
                  className="table-cell p-[7px_3px] text-[14.4px]"
                  key={item.id}
                >
                  <Link href={item.appUrl}>{item.name}</Link> by {item.author}
                </center>
              ))}
            </div>
            <div className="table-row">
              {list.map((item) => (
                <center
                  className="table-cell p-[7px_3px] align-middle"
                  key={item.id}
                >
                  <Link href={item.appUrl}>
                    <Image
                      src={`/images/applications/${item.id}_shot.png`}
                      alt={`${item.id} screenshot`}
                      width={item.dimensions.shot.width}
                      height={item.dimensions.shot.height}
                      quality={100}
                      draggable={false}
                    />
                  </Link>
                  <br />
                  <Link
                    href={item.downloadUrl}
                    className="border border-downloadbutton-border bg-downloadbutton p-[5px] font-bold text-black hover:no-underline"
                  >
                    {item.button === "install" ? "Install" : "Download"}
                  </Link>{" "}
                  or <Link href={item.moreUrl}>see more...</Link>
                </center>
              ))}
            </div>
          </Fragment>
        ))}
      </div>
      <Main.P className="mt-[20px]">
        There are <strong>even more Twitter apps</strong>, visualizers and
        geegaws listed over at the{" "}
        <Link href="http://twitter.pbwiki.com/Apps">Twitter fan wiki.</Link>
        <br />
        <br />
        <strong>Interested in creating your own app?</strong> All these apps
        were built using our easy-to-learn{" "}
        <Link href="http://apiwiki.twitter.com/">API</Link>.
        <br />
        <br />
        <small className="text-[10px]">
          <strong>Disclaimer:</strong> These applications were built by
          third-parties, not Twitter, Inc. Twitter does not provide support for
          these applications.
        </small>
      </Main.P>
    </Main>
  );
}
