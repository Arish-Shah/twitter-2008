"use client";

import { useFlash } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { messageSchema } from "@/lib/validations/message";
import type { MessageDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Select, TextArea } from "../ui/input";

interface DirectMessageFormProps {
  receipents: string[];
}

export function DirectMessageForm({ receipents }: DirectMessageFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
    reset,
    getValues,
  } = useForm<MessageDataType>({
    resolver: zodResolver(messageSchema),
    defaultValues: { text: "" },
  });
  const [, startTransition] = useLoadingTransition();
  const flash = useFlash();

  const watchedText = watch("text");
  const charactersLeft = 140 - watchedText.length;

  const sendMessage = async (data: MessageDataType) => {
    console.log(data);
    flash(`Your direct message has been sent to ${getValues("to")}`);
    reset();
  };
  return (
    <form
      onSubmit={handleSubmit((data) => {
        startTransition(() => sendMessage(data));
      })}
    >
      <div className="flex items-center justify-between text-[20px]">
        <label htmlFor="text" className="flex">
          <span className="mr-[5px]">Send</span>
          <Select
            id="to"
            className="w-[150px] text-[13.2px]"
            {...register("to")}
          >
            <option></option>
            {receipents.map((user, i) => (
              <option key={i} value={user}>
                {user}
              </option>
            ))}
          </Select>
          <span>a direct message.</span>
        </label>
        <h1
          className={clsx("font-georgia text-[28px] font-bold", {
            "text-updatebutton-disabled": charactersLeft >= 20,
            "text-red-800": charactersLeft < 20 && charactersLeft >= 10,
            "text-red-600": charactersLeft < 10,
          })}
        >
          {charactersLeft}
        </h1>
      </div>
      <TextArea
        id="text"
        rows={2}
        className="mt-[10px]"
        {...register("text")}
      />
      <div className="text-right">
        <input
          type="submit"
          value="send"
          className="min-w-[115px] rounded-[5px] border border-gray-border bg-gradient-to-b from-updatebutton-gradient-from to-updatebutton-gradient-to p-[6px_36px] text-[13.2px] font-medium text-updatebutton shadow-[0.5px_0.5px_0px] shadow-gray active:shadow-none enabled:hover:from-updatebutton-gradient-from-hover enabled:hover:to-updatebutton-gradient-to-hover disabled:text-updatebutton-disabled"
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
