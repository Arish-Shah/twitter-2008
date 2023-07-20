import { User } from "@/types";
import { Header } from "./header";

interface PageProps {
  user?: User;
  large?: boolean;
  children: React.ReactNode;
}

export function Page({ user, large, children }: PageProps) {
  return (
    <main className="h-screen w-screen bg-tw-blue bg-tw-bg bg-fixed bg-left-top bg-no-repeat">
      <div className="relative mx-auto w-[763px] p-[16px_0]">
        <Header user={user} large={large} />
        <div>{children}</div>
      </div>
    </main>
  );
}
