import type { InputHTMLAttributes } from "react";

interface FormGroupProps {
  children?: React.ReactNode;
}

export function InputFormGroup({ children }: FormGroupProps) {
  return <div className="table-cell w-[172px] p-[7px_3px]">{children}</div>;
}

export function LabelFormGroup({ children }: FormGroupProps) {
  return (
    <div className="table-cell p-[7px_3px] text-right pl-[80px]">
      {children}
    </div>
  );
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  return (
    <InputFormGroup>
      <input
        className={`w-full border border-tw-input-border p-[2px] text-[1.1em] text-black ${className}`}
        {...props}
      />
    </InputFormGroup>
  );
}

interface LabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export function Label({ htmlFor, children }: LabelProps) {
  return (
    <LabelFormGroup>
      <label htmlFor={htmlFor}>{children}</label>
    </LabelFormGroup>
  );
}

interface SubmitProps {
  value: string;
}

export function Submit({ value }: SubmitProps) {
  return (
    <input
      type="submit"
      value={value}
      className="p-[2px_8px] bg-tw-button border border-tw-button-border hover:bg-tw-button-hover cursor-pointer"
    />
  );
}
