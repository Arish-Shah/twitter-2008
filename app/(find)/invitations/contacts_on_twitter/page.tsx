import { Steps } from "@/components/steps";
import { Alert } from "@/components/ui/alert";
import { Main } from "@/components/ui/content";
import { Submit } from "@/components/ui/input";

export default function ContactsOnTwitter() {
  return (
    <Main>
      <div className="flex items-start justify-between">
        <Main.H1>0 people from your address book are using Twitter!</Main.H1>
        <Steps selected={2} />
      </div>
      <Main.P className="text-[13.6px] text-meta">
        Select the people you&apos;d like to start following.
      </Main.P>
      <div className="mx-auto mb-[10px] mt-[20px] w-[600px] text-center">
        <Submit type="button" value="continue »" />
        <Alert.Default className="mt-[15px] !p-[2px] text-left">
          <input type="checkbox" defaultChecked={true} /> Select All
        </Alert.Default>
        <div className="mb-[15px] mt-[-1px] h-[5px] border border-alert-default-border"></div>
        <Submit type="button" value="continue »" />
      </div>
    </Main>
  );
}
