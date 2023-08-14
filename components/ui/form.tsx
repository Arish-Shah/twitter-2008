import clsx from "clsx";
import { Fragment } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={clsx("mt-[10px] table", className)} {...props}>
      {children}
    </form>
  );
}

Form.Row = function Row({ className, children }: Props) {
  return <div className={clsx("table-row", className)}>{children}</div>;
};

Form.InputGroup = function Group({ className, children }: Props) {
  return (
    <div className={clsx("table-cell p-[7px_3px]", className)}>{children}</div>
  );
};

Form.LabelGroup = function Group({ className, children }: Props) {
  return (
    <div
      className={clsx(
        "table-cell w-[138px] p-[11px_3px] text-right align-top",
        className
      )}
    >
      {children}
    </div>
  );
};

Form.Subtext = function Subtext({ className, children }: Props) {
  return (
    <span className={clsx("text-[11.64px] text-subtext", className)}>
      {children}
    </span>
  );
};

Form.Error = function Error({ className, children }: Props) {
  return (
    <Fragment>
      <br />
      <span className={clsx("text-form-red", className)}>{children}</span>
    </Fragment>
  );
};
