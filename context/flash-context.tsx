"use client";

import { useMountedEffect } from "@/hooks/use-mounted-effect";
import { usePathname } from "next/navigation";
import { createContext, useContext, useState } from "react";

type TitleType = string | null;

type FlashContextType = {
  message: TitleType;
  flash: (message: string, stick?: boolean) => void;
};

const FlashContext = createContext<FlashContextType | null>(null);

interface FlashContextProviderProps {
  children: React.ReactNode;
}

export function FlashContextProvider({ children }: FlashContextProviderProps) {
  const [message, setMessage] = useState<TitleType>(null);
  const pathname = usePathname();

  useMountedEffect(() => {
    if (message) setMessage(null);
  }, [pathname]);

  const flash = (message: string, stick = false) => {
    if (message) {
      setMessage(message);

      if (!stick) {
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      }
    }
  };

  return (
    <FlashContext.Provider
      value={{
        message,
        flash,
      }}
    >
      {children}
    </FlashContext.Provider>
  );
}

export function useFlash() {
  const flashContext = useContext(FlashContext);

  if (!flashContext) {
    throw new Error("useFlash has to be used within <FlashContextProvider>");
  }
  return flashContext;
}
