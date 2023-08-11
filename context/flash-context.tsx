"use client";

import { createContext, useContext, useState } from "react";

type TitleType = string | null;

type FlashContextType = {
  message: TitleType;
  flash: (message: string) => void;
};

const FlashContext = createContext<FlashContextType | null>(null);

interface FlashContextProviderProps {
  children: React.ReactNode;
}

export function FlashContextProvider({ children }: FlashContextProviderProps) {
  const [message, setMessage] = useState<TitleType>(null);

  const flash = (message: string) => {
    if (message) {
      setMessage(message);

      setTimeout(() => {
        setMessage(null);
      }, 5000);
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
