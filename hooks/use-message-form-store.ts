import { create } from "zustand";

type ToType = { username: string };

interface MessageFormState {
  to: ToType;
  setTo: (username: string) => void;
}

// to used as object to force re-render
export const useMessageFormStore = create<MessageFormState>((set) => ({
  to: { username: "" },
  setTo: (username) => set({ to: { username } }),
}));
