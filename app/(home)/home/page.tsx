import { TwoColumn } from "@/components/two-column";
import { UserInfo } from "@/components/user-info";
import { info } from "@/lib/data";

export default function Home() {
  return (
    <TwoColumn>
      <TwoColumn.Main>aight</TwoColumn.Main>
      <TwoColumn.Sidebar>
        <TwoColumn.Sidebar.Section>
          <UserInfo screen="default" info={info} />
        </TwoColumn.Sidebar.Section>
      </TwoColumn.Sidebar>
    </TwoColumn>
  );
}
