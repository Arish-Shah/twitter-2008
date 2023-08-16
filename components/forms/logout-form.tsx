"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LogoutForm() {
  const router = useRouter();
  const [, startTransition] = useLoadingTransition();

  const logout = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/login",
    });
    router.push(data.url);
  };

  return (
    <a
      href="/logout"
      onClick={(e) => {
        e.preventDefault();
        startTransition(() => logout());
      }}
    >
      Sign out
    </a>
  );
}
