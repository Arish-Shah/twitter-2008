interface TwoColumnProps {
  children: React.ReactNode;
}

export function TwoColumn({ children }: TwoColumnProps) {
  return <div className="flex">{children}</div>;
}

export function TwoColumnMain({ children }: TwoColumnProps) {
  return <div className="flex-1 p-[5px_10px]">{children}</div>;
}

export function TwoColumnSidebar({ children }: TwoColumnProps) {
  return (
    <div className="w-[200px] border-l-[1px] border-l-tw-sidebar-border bg-tw-sidebar">
      {children}
    </div>
  );
}
