"use client";

import { Main } from "@/components/content";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Logout() {
  const router = useRouter();
  const [, startTransition] = useLoadingTransition();

  const logout = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    router.push(data.url);
  };

  useEffect(() => {
    startTransition(() => logout());
    // eslint-disable-next-line
  }, []);

  return (
    <Main>
      <Main.H2>Signing out.</Main.H2>
    </Main>
  );
}
