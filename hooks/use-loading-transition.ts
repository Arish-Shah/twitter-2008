import { useEffect, useTransition } from "react";
import { useLoadingStore } from "./use-loading-store";

export function useLoadingTransition(): ReturnType<typeof useTransition> {
  const [isPending, startTransition] = useTransition();
  const setLoading = useLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(isPending);
  }, [setLoading, isPending]);

  return [isPending, startTransition];
}
