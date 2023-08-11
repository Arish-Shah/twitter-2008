"use client";

import { createContext, useContext, useState } from "react";

type TitleType = string | null;

type FlashContextType = {
  message: TitleType;
  notify: (message: string) => void;
};

const FlashContext = createContext<FlashContextType | null>(null);

interface FlashContextProviderProps {
  children: React.ReactNode;
}

export function FlashContextProvider({ children }: FlashContextProviderProps) {
  const [message, setMessage] = useState<TitleType>(null);

  const notify = (message: string) => {
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
        notify,
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
