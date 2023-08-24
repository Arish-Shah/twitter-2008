"use client";

import { Steps } from "@/components/steps";
import { Main } from "@/components/ui/content";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Invitations() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/invitations/contacts_on_twitter");
    }, 2000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <Main>
      <div className="flex items-start justify-between">
        <Main.H1>Finding your contacts</Main.H1>
        <Steps selected={1} />
      </div>
      <div className="mt-[50px] h-[250px] text-center">
        <Image
          src="/images/ui/contacts_loader.gif"
          height={50}
          width={50}
          alt="Fetching contacts"
          className="inline-block"
          quality={100}
          priority={true}
        />
        <Main.H4 className="mt-[10px]">
          We&apos;re loading your contacts.
        </Main.H4>
        <Main.P>(It might take a bit longer if you&apos;re popular.)</Main.P>
      </div>
    </Main>
  );
}
