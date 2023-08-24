import { create } from "zustand";

interface NewAccountState {
  newAccount: boolean;
  setNewAccount: (newAccount: boolean) => void;
}

export const useNewAccountStore = create<NewAccountState>((set) => ({
  newAccount: false,
  setNewAccount: (newAccount: boolean) => set({ newAccount }),
}));
