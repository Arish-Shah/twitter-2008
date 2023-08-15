"use client";

import { Main } from "@/components/content";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Logout() {
  const [, startTransition] = useLoadingTransition();

  useEffect(() => {
    startTransition(() => signOut());
    // eslint-disable-next-line
  }, []);

  return (
    <Main>
      <Main.H2>Signing you out. Please wait.</Main.H2>
    </Main>
  );
}
