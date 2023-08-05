import { CompleteForm } from "@/components/forms/complete-form";
import { TwoColumn } from "@/components/two-column";

export default function Complete() {
  return (
    <TwoColumn>
      <TwoColumn.Main>
        <TwoColumn.Main.H2>
          So you want to use Twitter on the web…
        </TwoColumn.Main.H2>
        <TwoColumn.Main.P>
          Give us the phone number you’ve been using to Twitter below.
        </TwoColumn.Main.P>
        <CompleteForm />
        <div className="h-[20px]"></div>
      </TwoColumn.Main>
    </TwoColumn>
  );
}
