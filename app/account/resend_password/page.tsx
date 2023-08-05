import { ResendPasswordForm } from "@/components/forms/resend-password-form";
import { TwoColumn } from "@/components/two-column";

export default function ResendPassword() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>Forgot?</TwoColumn.Main.H2>
        <TwoColumn.Main.P>
          Put in your email address below and we&apos;ll reset it for you.
        </TwoColumn.Main.P>
        <ResendPasswordForm />
        <div className="h-[20px]"></div>
      </TwoColumn.Main>
    </TwoColumn>
  );
}
