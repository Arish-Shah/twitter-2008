import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { SignupButton } from "./ui/button";

interface Props {
  type: "what" | "why" | "how";
}

type CarouselDataType = {
  [key in Props["type"]]: {
    label: string;
    href: string;
    title: string;
    src: string;
    teaser: React.ReactNode;
  };
};

const data: CarouselDataType = {
  what: {
    label: "What?",
    href: "/",
    title: "What is Twitter?",
    src: "/images/tours/tour_1.gif",
    teaser: (
      <Fragment>
        <p className="m-[15px_0] p-[0_4px] text-[18px] leading-[1.3] text-black">
          Twitter is a service for friends, family, and co–workers <br />
          to communicate and stay connected through the exchange of quick,
          frequent answers to one simple question: <b>What are you doing?</b>
        </p>
        <p className="m-[0_0_12px] mt-[26px] text-center text-[14.4px] leading-[1.3]">
          <SignupButton />
        </p>
      </Fragment>
    ),
  },
  why: {
    label: "Why?",
    href: "/help/why",
    title: "Why use Twitter?",
    src: "/images/tours/tour_2.gif",
    teaser: (
      <div className="text-[14.4px] leading-[1.3] text-black">
        <p className="m-[15px_0]">
          Why? Because even basic updates are meaningful to family members,
          friends, or colleagues—especially when they&apos;re timely.
        </p>
        <ul className="ml-[14.4px] list-disc">
          <li>
            <strong>Eating soup?</strong> Research shows that moms want to know.
          </li>
          <li>
            <strong>Running late to a meeting?</strong> Your co–workers might
            find that useful.
          </li>
          <li>
            <strong>Partying?</strong> Your friends may want to join you.
          </li>
        </ul>
      </div>
    ),
  },
  how: {
    label: "How?",
    href: "/help/how",
    title: "How does it work?",
    src: "/images/tours/tour_3.gif",
    teaser: (
      <div className="m-[15px_0] text-[14.4px] leading-[1.3] text-black">
        <p>
          With Twitter, you can stay hyper–connected to your friends and always
          know what they&apos;re doing. Or, you can stop following them any
          time. You can even set quiet times on Twitter so you&apos;re not
          interrupted.
        </p>
        <p className="mt-[15px]">
          <strong>Twitter puts you in control</strong> and becomes a modern
          antidote to information overload.
        </p>
      </div>
    ),
  },
};

function Menu({ type }: Props) {
  return (
    <ul className="mt-[5px] text-[14.4px]">
      {Object.keys(data).map((link) => {
        const item = data[link as Props["type"]];
        return (
          <li key={link} className="m-[2.4px_0_0_8px] inline p-[3px_2px]">
            <Link
              href={item.href}
              className={clsx("border p-[3px_12px] hover:no-underline", {
                "border-black text-black": link === type,
                "border-dashed text-intro hover:border-solid": link !== type,
              })}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function Carousel({ type }: Props) {
  return (
    <Fragment>
      <div className="flex">
        <h2 className="flex-1 text-[24px] font-bold leading-[1] text-black">
          {data[type].title}
        </h2>
        <Menu type={type} />
      </div>
      <Image
        src={data[type].src}
        alt={data[type].title}
        height={155}
        width={510}
        className="m-[24px_0_9px_0] border border-black"
        priority
      />
      {data[type].teaser}
    </Fragment>
  );
}
