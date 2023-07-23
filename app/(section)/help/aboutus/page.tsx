import {
  TwoColumn,
  TwoColumnMain,
  TwoColumnSidebar,
} from "@/components/two-column";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter: About Us",
};

export default function AboutUs() {
  return (
    <TwoColumn>
      <TwoColumnMain>aight</TwoColumnMain>
      <TwoColumnSidebar>bet</TwoColumnSidebar>
    </TwoColumn>
  );
}
