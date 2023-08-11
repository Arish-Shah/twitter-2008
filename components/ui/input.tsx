import clsx from "clsx";
import { useEffect, useRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ autoFocus, className, ...props }: InputProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current && autoFocus) {
      ref.current.focus();
    }
  }, [autoFocus]);

  return (
    <input
      className={clsx(
        "mr-[7px] w-[165px] border border-input-border p-[2px] text-[13.2px] text-black",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}

export function Submit({ className, ...props }: InputProps) {
  return (
    <input
      type="submit"
      className={clsx(
        "cursor-pointer border border-gray-border bg-gray p-[2px_8px] hover:bg-gray-hover",
        className
      )}
      {...props}
    />
  );
}
