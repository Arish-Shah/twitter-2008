import { Page } from "@/components/page";
import { theme, user } from "@/lib/data";
import { formatDateTime, formatText } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface StatusProps {
  params: { screen: string };
}

export async function generateMetadata({
  params,
}: StatusProps): Promise<Metadata> {
  return {
    // TODO: retrieve from db
    title: `Twitter / ${params.screen}: working on work instead.`,
  };
}

export default function Status({ params: { screen } }: StatusProps) {
  const text = formatText(
    "@krissy Razor ads for men: YEAH! You're a man! Scraping metal across your jugular! Laugh in death's face! Razor ads for women: Tee-hee! It's PINK!"
  );
  const time = formatDateTime("2023-08-03T18:50:19Z");

  return (
    <Page size="small" user={user} theme={theme}>
      <div className="p-[20px]">
        <div className="flex">
          <div className="w-[550px] font-georgia text-[25.2px] font-normal leading-[1.1]">
            {text}
          </div>
          <div className="mt-[20px]"></div>
        </div>
        <div className="m-[13px_0_0_3px] mt-[10px] font-georgia text-[15.6px] italic leading-[1] text-x-meta">
          {time} from web
        </div>
        <div className="mt-[15px] flex h-[89px] items-start border-t border-t-x-gray pt-[15px] leading-[1]">
          <Link
            href={`/profile_images/${screen}/profile_bigger.jpg`}
            className="mr-[20px]"
          >
            <Image
              src="/images/profile/default_profile_bigger.png"
              alt={`${screen}_bigger`}
              height={48}
              width={48}
              quality={100}
            />
          </Link>
          <div>
            <Link href={`/${screen}`} className="text-[27.6px]">
              <span>{screen}</span>
            </Link>
            <span className="mt-[3px] block text-[14.4px]">Cris Pearson</span>
          </div>
        </div>
      </div>
    </Page>
  );
}
