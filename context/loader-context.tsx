"use client";

import { createContext, useContext, useState } from "react";

type LoaderContextType = {
  loading: boolean;
  loader: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

interface LoaderContextProviderProps {
  children: React.ReactNode;
}

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  const [loading, loader] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, loader }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const loaderContext = useContext(LoaderContext);

  if (!loaderContext) {
    throw new Error("useLoader has to be used within <LoadingContextProvider>");
  }
  return loaderContext;
}
