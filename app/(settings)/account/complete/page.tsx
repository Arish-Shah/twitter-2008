import { CompleteForm } from "@/components/forms/complete-form";
import { Main } from "@/components/ui/content";

export default async function Complete() {
  return (
    <Main>
      <Main.H2>So you want to use Twitter on the web…</Main.H2>
      <Main.P>
        Give us the phone number you&apos;ve been using to Twitter below.
      </Main.P>
      <CompleteForm />
      <div className="h-[20px]"></div>
    </Main>
  );
}
