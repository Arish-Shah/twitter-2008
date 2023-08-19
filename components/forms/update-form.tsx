"use client";

import { useFlashStore } from "@/hooks/use-flash-store";
import { useLoadingTransition } from "@/hooks/use-loading-transition";
import { useUpdateFormStore } from "@/hooks/use-update-form-store";
import { postUpdate } from "@/lib/actions/update/post-update";
import { getErrorMessage } from "@/lib/utils";
import { updateSchema } from "@/lib/validations/update";
import { UpdateDataType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextArea } from "../ui/input";

interface UpdateFormProps {
  children: React.ReactNode;
}

export function UpdateForm({ children }: UpdateFormProps) {
  const values = useUpdateFormStore((state) => state.values);
  const setText = useUpdateFormStore((state) => state.setText);
  const flash = useFlashStore((state) => state.setMessage);
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    setFocus,
    setValue,
  } = useForm<UpdateDataType>({
    resolver: zodResolver(updateSchema),
  });
  const [, startTransition] = useLoadingTransition();
  const { onChange, ...rest } = register("text");
  const charactersLeft = 140 - values.text.length;

  useEffect(() => {
    setValue("text", values.text);
    setValue("to", values.to);
    setValue("kind", values.kind);
    // eslint-disable-next-line
  }, [values]);

  const update = async (data: UpdateDataType) => {
    try {
      await postUpdate(data);
    } catch (error) {
      flash(getErrorMessage(error));
    }
    setText("");
    setFocus("text");
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
          {values.label}
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
        id="update"
        rows={2}
        onChange={(e) => {
          setText(e.target.value);
          onChange(e);
        }}
        autoFocus
        {...rest}
      />
      <div className="flex items-start">
        <div className="flex-1">{children}</div>
        <input
          type="submit"
          value={values.button}
          className="min-w-[115px] rounded-[5px] border border-gray-border bg-gradient-to-b from-updatebutton-gradient-from to-updatebutton-gradient-to p-[6px_36px] text-[13.2px] font-medium text-updatebutton shadow-[0.5px_0.5px_0px] shadow-gray active:shadow-none enabled:hover:from-updatebutton-gradient-from-hover enabled:hover:to-updatebutton-gradient-to-hover disabled:text-updatebutton-disabled"
          disabled={!isValid}
        />
      </div>
    </form>
  );
}
