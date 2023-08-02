import Image from "next/image";
import Link from "next/link";
import { SignupButton } from "./ui/button";

interface CarouselProps {
  index: number;
}

const links = [
  { text: "What?", path: "/", title: "What is Twitter?" },
  { text: "Why?", path: "/help/why", title: "Why use Twitter?" },
  { text: "How?", path: "/help/how", title: "How does it work?" },
];

export function HelpCarousel({ index }: CarouselProps) {
  return (
    <div>
      <div className="flex w-[510px]">
        <h2 className="flex-1 text-[24px] font-bold leading-[1.0] text-black">
          {links[index].title}
        </h2>
        <ul className="mt-[5px] text-[14.4px]">
          {links.map((link, i) => {
            const colors =
              index == i
                ? "text-black border-black "
                : "text-x-intro-muted border-dashed border-x-intro-muted hover:border-solid";

            return (
              <li key={i} className="m-[2.4px_0_0_8px] inline p-[3px_2px]">
                <Link
                  href={link.path}
                  className={`border p-[3px_12px] hover:no-underline ${colors}`}
                >
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-[510px]">
        <Image
          src={`/images/tours/tour_${index + 1}.gif`}
          width={510}
          height={155}
          quality={100}
          alt="Tour"
          className="m-[24px_0_9px_0] border border-black"
        />
        {index == 0 && What}
        {index == 1 && Why}
        {index == 2 && How}
      </div>
    </div>
  );
}

export const What = (
  <>
    <p className="m-[15px_0] p-[0_4px] text-[18px] leading-[1.3] text-black">
      Twitter is a service for friends, family, and co–workers <br />
      to communicate and stay connected through the exchange of quick, frequent
      answers to one simple question: <b>What are you doing?</b>
    </p>
    <p className="m-[0_0_12px] mt-[26px] text-center text-[14.4px] leading-[1.3]">
      <SignupButton />
    </p>
  </>
);

export const Why = (
  <div className="text-[14.4px] leading-[1.3] text-black">
    <p className="m-[15px_0]">
      Why? Because even basic updates are meaningful to family members, friends,
      or colleagues—especially when they&apos;re timely.
    </p>
    <ul className="ml-[14.4px] list-disc">
      <li>
        <strong>Eating soup?</strong> Research shows that moms want to know.
      </li>
      <li>
        <strong>Running late to a meeting?</strong> Your co–workers might find
        that useful.
      </li>
      <li>
        <strong>Partying?</strong> Your friends may want to join you.
      </li>
    </ul>
  </div>
);

export const How = (
  <div className="m-[15px_0] text-[14.4px] leading-[1.3] text-black">
    <p>
      With Twitter, you can stay hyper–connected to your friends and always know
      what they&apos;re doing. Or, you can stop following them any time. You can
      even set quiet times on Twitter so you&apos;re not interrupted.
    </p>
    <p className="mt-[15px]">
      <strong>Twitter puts you in control</strong> and becomes a modern antidote
      to information overload.
    </p>
  </div>
);
