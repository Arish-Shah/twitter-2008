import { create } from "zustand";

interface FlashState {
  message: string | null;
  setMessage: (message: string | null) => void;
}

export const useFlashStore = create<FlashState>((set) => ({
  message: null,
  setMessage: (message: string | null) => set({ message }),
}));
