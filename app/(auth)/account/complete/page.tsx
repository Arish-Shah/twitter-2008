import { Main } from "@/components/content";
import { CompleteForm } from "@/components/forms/complete-form";

export default async function Complete() {
  return (
    <Main>
      <Main.H2>So you want to use Twitter on the web…</Main.H2>
      <Main.P>
        Give us the phone numbur you’ve been using to Twitter below.
      </Main.P>
      <CompleteForm />
      <div className="h-[20px]"></div>
    </Main>
  );
}
