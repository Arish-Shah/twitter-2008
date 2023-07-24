interface TwoColumnProps {
  children: React.ReactNode;
}

interface TypographyProps extends TwoColumnProps {
  className?: string;
}

export function TwoColumn({ children }: TwoColumnProps) {
  return <div className="flex">{children}</div>;
}

function Main({ children }: TwoColumnProps) {
  return <div className="flex-1 p-[5px_10px]">{children}</div>;
}

function Sidebar({ children }: TwoColumnProps) {
  return (
    <div className="w-[200px] border-l-[1px] border-l-tw-sidebar-border bg-tw-sidebar">
      {children}
    </div>
  );
}

function SidebarSection({ children }: TwoColumnProps) {
  return <div className="p-[13px_13px_16px] leading-[1.2]">{children}</div>;
}

function MainH1({ className = "", children }: TypographyProps) {
  return (
    <h1 className={`m-[3px_0_4px] text-[24px] font-bold ${className}`}>
      {children}
    </h1>
  );
}

function MainH2({ className = "", children }: TypographyProps) {
  return (
    <h2 className={`m-[3px_0_4px] text-[18px] font-bold ${className}`}>
      {children}
    </h2>
  );
}

function MainH3({ className = "", children }: TypographyProps) {
  return (
    <h3 className={`m-[3px_0_4px] text-[14px] font-bold ${className}`}>
      {children}
    </h3>
  );
}

function MainH4({ className = "", children }: TypographyProps) {
  return <h4 className={`m-[3px_0_4px] font-bold ${className}`}>{children}</h4>;
}

function MainP({ className = "", children }: TypographyProps) {
  return (
    <div className={`m-[5px_0] leading-[1.2] ${className}`}>{children}</div>
  );
}

function MainOrderedList({ className = "", children }: TypographyProps) {
  return <ol className={`list-decimal pl-[30px] ${className}`}>{children}</ol>;
}

function SidebarH1({ className = "", children }: TypographyProps) {
  return (
    <h1
      className={`m-[10px_0_5px_0] p-[0_0_2px] text-[13.2px] font-bold ${className}`}
    >
      {children}
    </h1>
  );
}

function SidebarH1Underline({ className = "", children }: TypographyProps) {
  return (
    <div className="m-[10px_0_5px_0] border-b border-b-tw-sidebar-heading">
      <h1 className={`p-[0_0_2px_5px] text-[13.2px] font-bold ${className}`}>
        {children}
      </h1>
    </div>
  );
}

function SidebarOrderedList({ className = "", children }: TypographyProps) {
  return <ol className={`list-decimal pl-[30px] ${className}`}>{children}</ol>;
}

Main.H1 = MainH1;
Main.H2 = MainH2;
Main.H3 = MainH3;
Main.H4 = MainH4;
Main.P = MainP;
Main.OrderedList = MainOrderedList;

Sidebar.Section = SidebarSection;
Sidebar.H1 = SidebarH1;
Sidebar.H1Underline = SidebarH1Underline;
Sidebar.OrderedList = SidebarOrderedList;

TwoColumn.Main = Main;
TwoColumn.Sidebar = Sidebar;
