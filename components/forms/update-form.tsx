"use client";

import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { postUpdate } from "@/lib/actions/post-update";
import { updateSchema } from "@/lib/validations/update";
import { UpdateDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { TextArea } from "../ui/input";

interface UpdateFormProps {
  children: React.ReactNode;
}

export function UpdateForm({ children }: UpdateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    reset,
    setFocus,
  } = useForm<UpdateDataType>({
    defaultValues: {
      update: "",
      // TODO: update this if query params changes
      parent: null,
    },
    resolver: zodResolver(updateSchema),
  });
  const [, startTransition] = useLoadingTransition();

  const watchedUpdate = watch("update");
  const charactersLeft = 140 - watchedUpdate.length;

  const update = async (data: UpdateDataType) => {
    await postUpdate(data);
    setFocus("update");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        startTransition(() => update(data));
      })}
    >
      <div className="flex items-center justify-between text-[20px]">
        <label htmlFor="update" className="font-medium text-black">
          What are you doing?
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
      <TextArea id="update" rows={2} autoFocus {...register("update")} />
      <div className="flex">
        <div className="flex-1">{children}</div>
        <input
          type="submit"
          value="update"
          className="min-w-[115px] rounded-[5px] border border-gray-border bg-gradient-to-b from-updatebutton-gradient-from to-updatebutton-gradient-to p-[6px_36px] text-[13.2px] font-medium text-updatebutton shadow-[0.5px_0.5px_0px] shadow-gray active:shadow-none enabled:hover:from-updatebutton-gradient-from-hover enabled:hover:to-updatebutton-gradient-to-hover disabled:text-updatebutton-disabled"
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
