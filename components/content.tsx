import clsx from "clsx";

interface ContentProps {
  className?: string;
  children: React.ReactNode;
}

export function Content({ className, children }: ContentProps) {
  return <div className={clsx("flex", className)}>{children}</div>;
}

export function Main({ className, children }: ContentProps) {
  return (
    <div className={clsx("flex-1 p-[5px_10px]", className)}>{children}</div>
  );
}

Main.H1 = function H1({ className, children }: ContentProps) {
  return (
    <h1 className={clsx("m-[3px_0_4px] text-[24px] font-bold", className)}>
      {children}
    </h1>
  );
};

Main.H2 = function H2({ className, children }: ContentProps) {
  return (
    <h2 className={clsx("m-[3px_0_4px] text-[18px] font-bold", className)}>
      {children}
    </h2>
  );
};

Main.H3 = function H3({ className, children }: ContentProps) {
  return (
    <h3 className={clsx("m-[3px_0_4px] text-[14px] font-bold", className)}>
      {children}
    </h3>
  );
};

Main.H4 = function H4({ className, children }: ContentProps) {
  return (
    <h4 className={clsx("m-[3px_0_4px] font-bold", className)}>{children}</h4>
  );
};

Main.P = function P({ className, children }: ContentProps) {
  return (
    <p className={clsx("m-[5px_0] leading-[1.2]", className)}>{children}</p>
  );
};

Main.OrderedList = function OrderedList({ className, children }: ContentProps) {
  return (
    <ol className={clsx("list-decimal pl-[30px]", className)}>{children}</ol>
  );
};

export function Sidebar({ children }: ContentProps) {
  return (
    <div className="w-[200px] border-l-[1px] border-l-sidebar-border bg-sidebar">
      {children}
    </div>
  );
}

Sidebar.Section = function Section({
  children,
  className,
  bordered,
}: ContentProps & { bordered?: boolean }) {
  return (
    <div
      className={clsx(
        "leading-[1.2]",
        {
          "border-t border-sidebar-border p-[11px_13px_11px_13px]": bordered,
          "p-[13px_13px_16px]": !bordered,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

Sidebar.H1 = function H1({ className, children }: ContentProps) {
  return (
    <h1
      className={clsx(
        "m-[10px_0_5px_0] p-[0_0_2px] text-[13.2px] font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
};

Sidebar.H1Underline = function H1Underline({
  className,
  children,
}: ContentProps) {
  return (
    <div className="m-[10px_0_5px_0] border-b border-b-sidebar-heading-border">
      <h1
        className={clsx("p-[0_0_2px_5px] text-[13.2px] font-bold", className)}
      >
        {children}
      </h1>
    </div>
  );
};

Sidebar.P = function P({ className, children }: ContentProps) {
  return (
    <p className={clsx("mt-[15px] text-[10.8px]", className)}>{children}</p>
  );
};

Sidebar.OrderedList = function OrderedList({
  className,
  children,
}: ContentProps) {
  return (
    <ol className={clsx("list-decimal pl-[30px]", className)}>{children}</ol>
  );
};
