import { useLoader } from "@/context/loader-context";
import { useEffect, useTransition } from "react";

export function useLoadingTransition(): ReturnType<typeof useTransition> {
  const [isPending, startTransition] = useTransition();
  const { loader } = useLoader();

  useEffect(() => {
    loader(isPending);
    // eslint-disable-next-line
  }, [isPending]);

  return [isPending, startTransition];
}
