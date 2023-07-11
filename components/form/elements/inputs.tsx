import type { InputHTMLAttributes } from "react";
import { InputFormGroup } from "./form-group";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
}

export function Input({ children, className, ...props }: InputProps) {
  return (
    <InputFormGroup>
      <input
        className={`w-[165px] border border-tw-input-border p-[2px] text-[1.1em] text-black mr-[5px] ${className}`}
        {...props}
      />
      {children}
    </InputFormGroup>
  );
}

export function Submit({ value }: { value: string }) {
  return (
    <input
      type="submit"
      value={value}
      className="p-[2px_8px] bg-tw-button border border-tw-button-border hover:bg-tw-button-hover cursor-pointer"
    />
  );
}
