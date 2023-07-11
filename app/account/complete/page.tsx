import { CompleteForm } from "@/components/form/complete-form";
import { Wrapper } from "@/components/layout/content";
import { H2, P } from "@/components/layout/typography";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

export default function Complete() {
  return (
    <Wrapper heightFix={false}>
      <H2>So you want to use Twitter on the web…</H2>
      <P>Give us the phone number you&apos;ve been using to Twitter below.</P>
      <CompleteForm />
    </Wrapper>
  );
}
