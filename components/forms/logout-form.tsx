"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function SignoutForm() {
  const router = useRouter();
  const [, startTransition] = useLoadingTransition();

  const logout = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/",
    });
    router.push(data.url);
  };

  return (
    <a
      href="/sessions/destroy"
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => logout());
      }}
    >
      Sign out
    </a>
  );
}
