import type { UpdateDataType } from "@/types";
import { create } from "zustand";

interface UpdateFormState {
  values: UpdateDataType & {
    label: string;
    button: string;
  };
  setText: (text: string) => void;
}

export const useUpdateFormStore = create<UpdateFormState>((set) => ({
  values: {
    label: "What are you doing?",
    text: "",
    button: "update",
    to: null,
    kind: "update",
  },
  setText: (text: string) => {
    const words = text.split(" ");
    let label = "What are you doing?";
    let button = "update";
    let to: UpdateDataType["to"] = null;
    let kind: UpdateDataType["kind"] = "update";

    if (words.length >= 2) {
      const trigger = words[0].toLowerCase();

      if (trigger === "dm" || trigger === "d") {
        if (words.length > 2) {
          to = words[1].startsWith("@") ? words[1].substring(1) : words[1];
          label = `Direct message ${to}:`;
          button = "send";
        } else {
          label = "Direct message:";
          button = "send";
        }
        kind = "direct_message";
      } else if (trigger.startsWith("@")) {
        to = words[0].substring(1);
        label = `Replying to ${to}:`;
        kind = "reply";
        button = "reply";
      }
    }

    return set(() => ({
      values: { label, text, button, to, kind },
    }));
  },
}));
