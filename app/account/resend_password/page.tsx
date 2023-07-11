import { ResendForm } from "@/components/form/resend-form";
import { Wrapper } from "@/components/layout/content";
import { H2, P } from "@/components/layout/typography";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Twitter",
};

export default function ResendPassword() {
  return (
    <Wrapper heightFix={false}>
      <H2>Forgot?</H2>
      <P>Put in your email address below and we&apos;ll reset it for you.</P>
      <ResendForm />
    </Wrapper>
  );
}
