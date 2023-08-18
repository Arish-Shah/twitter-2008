import { Main } from "@/components/ui/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

type DimensionType = { width: number; height: number };

type DownloadItemType = {
  id: string;
  name: string;
  author: string;
  appUrl: string;
  downloadUrl: string;
  moreUrl: string;
  button: "download" | "install";
  dimensions: { icon: DimensionType; shot: DimensionType };
};

export const metadata: Metadata = {
  title: "Twitter / Downloads",
};

const applications: DownloadItemType[][] = [
  [
    {
      id: "windows",
      name: "Twitteroo",
      author: "RareEdge",
      appUrl: "http://rareedge.com/twitteroo/",
      downloadUrl:
        "http://rareedge.com/twitteroo/blog/wp-content/plugins/DownloadCounter/download.php?id=8",
      moreUrl: "http://twitter.pbwiki.com/Apps#Windows",
      button: "download",
      dimensions: {
        icon: { width: 149, height: 131 },
        shot: { width: 240, height: 168 },
      },
    },
    {
      id: "mac",
      name: "Twitterrific",
      author: "IconFactory",
      appUrl: "http://iconfactory.com/software/twitterrific/",
      downloadUrl:
        "http://iconfactory.com/assets/software/twitterrific/Twitterrific_21.zip",
      moreUrl: "http://twitter.pbwiki.com/Apps#Mac",
      button: "download",
      dimensions: {
        icon: { width: 116, height: 140 },
        shot: { width: 194, height: 250 },
      },
    },
    {
      id: "firefox",
      name: "Twitbin",
      author: "Infinimedia",
      appUrl: "http://www.twitbin.com/",
      downloadUrl: "http://www.twitbin.com/twitbin.xpi",
      moreUrl: "http://twitter.pbwiki.com/Apps#See",
      button: "download",
      dimensions: {
        icon: { width: 128, height: 123 },
        shot: { width: 216, height: 246 },
      },
    },
  ],
  [
    {
      id: "widsets",
      name: "Twitter Widget",
      author: "WidSets",
      appUrl: "http://www.widsets.com/twitter",
      downloadUrl: "http://www.widsets.com/twitter",
      moreUrl: "http://twitter.pbwiki.com/Apps#Mobileapps",
      button: "install",
      dimensions: {
        icon: { width: 126, height: 128 },
        shot: { width: 150, height: 277 },
      },
    },
    {
      id: "opera",
      name: "Opera Widget",
      author: "Opera",
      appUrl: "http://widgets.opera.com/widget/7206",
      downloadUrl: "http://widgets.opera.com/widget/7206",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 150, height: 247 },
      },
    },
    {
      id: "spaz",
      name: "Spaz",
      author: "Ed Finkler",
      appUrl: "http://funkatron.com/spaz",
      downloadUrl: "http://funkatron.com/spaz",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 132, height: 132 },
        shot: { width: 169, height: 260 },
      },
    },
  ],
  [
    {
      id: "mobio",
      name: "Mobio Service",
      author: "Mobio",
      appUrl: "http://www.getmobio.com/learn/twitter/",
      downloadUrl: "http://www.getmobio.com/learn/twitter/",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 176, height: 265 },
      },
    },
    {
      id: "google",
      name: "Twitter Gadget",
      author: "Google",
      appUrl: "http://desktop.google.com/plugins/i/twitter.html?hl=en",
      downloadUrl: "http://desktop.google.com/plugins/i/twitter.html?hl=en",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 156, height: 208 },
      },
    },
    {
      id: "digsby",
      name: "Digsby",
      author: "dotSyntax",
      appUrl: "http://www.digsby.com/",
      downloadUrl: "http://www.digsby.com/",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 240, height: 259 },
      },
    },
  ],
  [
    {
      id: "blogo",
      name: "Blogo",
      author: "Brainjuice",
      appUrl: "http://drinkbrainjuice.com/blogo",
      downloadUrl: "http://drinkbrainjuice.com/blogo",
      moreUrl: "http://twitter.pbwiki.com/Apps",
      button: "install",
      dimensions: {
        icon: { width: 128, height: 128 },
        shot: { width: 240, height: 259 },
      },
    },
  ],
];

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
                    priority
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
                      priority
                    />
                  </Link>
                  <br />
                  <Link
                    href={item.downloadUrl}
                    className="border border-downloadbutton-border bg-downloadbutton p-[5px] font-bold text-black"
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
