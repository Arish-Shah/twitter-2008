import { create } from "zustand";

interface MessageFormState {
  to: string;
  setTo: (to: string) => void;
}

// TODO: update as passing same to does not trigger re-render
export const useMessageFormStore = create<MessageFormState>((set) => ({
  to: "",
  setTo: (to) => set({ to }),
}));
