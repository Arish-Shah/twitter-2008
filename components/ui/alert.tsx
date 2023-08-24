import clsx from "clsx";

interface AlertProps {
  className?: string;
  children: React.ReactNode;
}

export function Alert() {}

Alert.Default = function Default({ className, children }: AlertProps) {
  return (
    <div
      className={clsx(
        "border border-alert-default-border bg-alert-default p-[5px]",
        className
      )}
    >
      {children}
    </div>
  );
};

Alert.Warning = function Warning({ className, children }: AlertProps) {
  return (
    <div
      className={clsx(
        "border border-alert-warning-border bg-alert-warning p-[5px]",
        className
      )}
    >
      {children}
    </div>
  );
};

Alert.Info = function Info({ className, children }: AlertProps) {
  return (
    <div
      className={clsx(
        "border border-alert-info-border bg-alert-info p-[5px]",
        className
      )}
    >
      {children}
    </div>
  );
};
