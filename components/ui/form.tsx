import { useEffect, useRef } from "react";

interface HTMLProps extends React.FormHTMLAttributes<HTMLFormElement> {}

interface FormProps {
  children?: React.ReactNode;
  className?: string;
}

interface LabelProps extends FormProps {
  htmlFor: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Form({ children, className, ...props }: HTMLProps) {
  return (
    <form className={`table pt-[5px] ${className}`} {...props}>
      {children}
    </form>
  );
}

function FormRow({ children, className = "" }: FormProps) {
  return <div className={`table-row ${className}`}>{children}</div>;
}

function InputGroup({ children, className = "" }: FormProps) {
  return (
    <div className={`table-cell p-[7px_3px] ${className}`}>{children}</div>
  );
}

function LabelGroup({ children, className = "" }: FormProps) {
  return (
    <div
      className={`table-cell w-[138px] p-[11px_3px] text-right align-top ${className}`}
    >
      {children}
    </div>
  );
}

function Label({ htmlFor, children, className = "" }: LabelProps) {
  return (
    <LabelGroup>
      <label htmlFor={htmlFor} className={className}>
        {children}
      </label>
    </LabelGroup>
  );
}

function SubText({ children, className = "" }: FormProps) {
  return (
    <span className={`text-[11.64px] text-x-subtext ${className}`}>
      {children}
    </span>
  );
}

function Input({ autoFocus, className, children, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <Form.InputGroup>
      <input
        className={`mr-[7px] w-[165px] border border-x-input-border p-[2px] text-[13.2px] text-black ${className}`}
        ref={inputRef}
        {...props}
      />
      {children}
    </Form.InputGroup>
  );
}

function Submit({ value }: { value: string }) {
  return (
    <input
      type="submit"
      className="cursor-pointer border border-x-gray-border bg-x-gray p-[2px_8px] hover:bg-x-gray-hover"
      value={value}
    />
  );
}

Form.Row = FormRow;
Form.InputGroup = InputGroup;
Form.LabelGroup = LabelGroup;
Form.Input = Input;
Form.Label = Label;
Form.Submit = Submit;
Form.SubText = SubText;
