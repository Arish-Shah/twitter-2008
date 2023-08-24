import { FindPeople } from "@/components/home/find-people";
import { Steps } from "@/components/steps";
import { Main } from "@/components/ui/content";
import { getEmail } from "@/lib/actions/get-email";

export default async function Invitations() {
  const email = await getEmail();

  return (
    <Main>
      <div className="flex items-start justify-between">
        <Main.H1>Are your friends on Twitter?</Main.H1>
        <Steps selected={1} />
      </div>
      <FindPeople email={email} />
    </Main>
  );
}
