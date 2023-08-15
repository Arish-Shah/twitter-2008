import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { hasError = false, className, ...props },
  ref
) {
  return (
    <input
      className={clsx(
        "mr-[7px] w-[165px] border border-input-border p-[2px] text-[13.2px] text-black",
        className,
        { "bg-red-100": hasError }
      )}
      ref={ref}
      {...props}
    />
  );
});

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea({ className, ...props }, ref) {
    return (
      <textarea
        className={clsx(
          "w-full resize-none border border-input-border p-[4px] text-[15px] leading-[1.2] text-black",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

export const Submit = forwardRef<HTMLInputElement, InputProps>(function Submit(
  { className, ...props },
  ref
) {
  return (
    <input
      type="submit"
      className={clsx(
        "cursor-pointer border border-gray-border bg-gray p-[2px_8px] text-black hover:bg-gray-hover disabled:text-gray-disabled disabled:hover:text-gray-disabled-hover",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
