import Image from "next/image";
import Link from "next/link";
import { How, What, Why } from "./text";

interface CarouselProps {
  index: number;
}

const links = [
  { text: "What?", path: "/", title: "What is Twitter?" },
  { text: "Why?", path: "/help/why", title: "Why use Twitter?" },
  { text: "How?", path: "/help/how", title: "How does it work?" },
];

export function Carousel({ index }: CarouselProps) {
  return (
    <div>
      <div className="flex w-[510px]">
        <h2 className="flex-1 text-[2em] text-black leading-[1.0] font-bold">
          {links[index].title}
        </h2>
        <ul className="text-[1.2em] mt-[5px]">
          {links.map((link, i) => {
            const colors =
              index == i
                ? "text-black border-black "
                : "text-tw-intro-muted border-dashed border-tw-intro-muted hover:border-solid";

            return (
              <li key={i} className="inline m-[0.2em_0_0_8px] p-[3px_2px]">
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
          src={`/images/tour/tour_${index + 1}.gif`}
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
