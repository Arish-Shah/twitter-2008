import { Page } from "@/components/page";
import type { Metadata } from "next";

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
          bb-sat jace&haley; for the wkend while mommy went away for b-day
          relaxation; tried to log onto Wow now that they left but CRASH goes
          computer
        </div>
        <div className="m-[13px_0_0_3px] mt-[10px] font-georgia text-[15.6px] italic leading-[1] text-x-meta">
          07:07 PM November 09, 2008 from web
        </div>
        <div className="mt-[15px]"></div>
      </div>
    </Page>
  );
}
