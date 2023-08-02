import { Page } from "@/components/page";
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
  return (
    <Page size="small">
      <div className="p-[20px]">
        <div className="mr-[30px] font-georgia text-[25.2px] font-normal leading-[1.1]">
          working on work instead.
        </div>
        <div className="m-[13px_0_0_3px] mt-[10px] font-georgia text-[15.6px] italic leading-[1] text-x-meta">
          07:07 PM November 09, 2008 from web
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
          <Link href={`/${screen}`} className="text-[27.6px]">
            <span>{screen}</span>
          </Link>
        </div>
      </div>
    </Page>
  );
}
