interface TwoColumnProps {
  className?: string;
  children: React.ReactNode;
}

export function TwoColumn({ children }: TwoColumnProps) {
  return <div className="flex">{children}</div>;
}

function Main({ children, className = "" }: TwoColumnProps) {
  return <div className={`flex-1 p-[5px_10px] ${className}`}>{children}</div>;
}

function Sidebar({ children }: TwoColumnProps) {
  return (
    <div className="w-[200px] border-l-[1px] border-l-x-sidebar-border bg-x-sidebar">
      {children}
    </div>
  );
}

function Center({ className = "", children }: TwoColumnProps) {
  return <div className={`text-center ${className}`}>{children}</div>;
}

function SidebarSection({ children, className }: TwoColumnProps) {
  return (
    <div className={`p-[13px_13px_16px] leading-[1.2] ${className}`}>
      {children}
    </div>
  );
}

function MainH1({ className = "", children }: TwoColumnProps) {
  return (
    <h1 className={`m-[3px_0_4px] text-[24px] font-bold ${className}`}>
      {children}
    </h1>
  );
}

function MainH2({ className = "", children }: TwoColumnProps) {
  return (
    <h2 className={`m-[3px_0_4px] text-[18px] font-bold ${className}`}>
      {children}
    </h2>
  );
}

function MainH3({ className = "", children }: TwoColumnProps) {
  return (
    <h3 className={`m-[3px_0_4px] text-[14px] font-bold ${className}`}>
      {children}
    </h3>
  );
}

function MainH4({ className = "", children }: TwoColumnProps) {
  return <h4 className={`m-[3px_0_4px] font-bold ${className}`}>{children}</h4>;
}

function MainP({ className = "", children }: TwoColumnProps) {
  return (
    <div className={`m-[5px_0] leading-[1.2] ${className}`}>{children}</div>
  );
}

function MainOrderedList({ className = "", children }: TwoColumnProps) {
  return <ol className={`list-decimal pl-[30px] ${className}`}>{children}</ol>;
}

function SidebarH1({ className = "", children }: TwoColumnProps) {
  return (
    <h1
      className={`m-[10px_0_5px_0] p-[0_0_2px] text-[13.2px] font-bold ${className}`}
    >
      {children}
    </h1>
  );
}

function SidebarH1Underline({ className = "", children }: TwoColumnProps) {
  return (
    <div className="m-[10px_0_5px_0] border-b border-b-x-sidebar-heading">
      <h1 className={`p-[0_0_2px_5px] text-[13.2px] font-bold ${className}`}>
        {children}
      </h1>
    </div>
  );
}

function SidebarP({ className = "", children }: TwoColumnProps) {
  return (
    <div className={`mt-[15px] text-[10.8px] ${className}`}>{children}</div>
  );
}

function SidebarOrderedList({ className = "", children }: TwoColumnProps) {
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
Sidebar.P = SidebarP;
Sidebar.H1Underline = SidebarH1Underline;
Sidebar.OrderedList = SidebarOrderedList;

TwoColumn.Main = Main;
TwoColumn.Sidebar = Sidebar;
TwoColumn.Center = Center;
