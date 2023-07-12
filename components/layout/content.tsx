import { Footer } from "./footer";
import { Header } from "./header";

interface ContentProps {
  children: React.ReactNode;
}

interface ContainerProps extends ContentProps {
  large?: boolean;
}

interface WrapperProps extends ContentProps {
  heightFix?: boolean;
}

export function Container({ children, large }: ContainerProps) {
  return (
    <main className="w-[763px] mx-auto p-[16px_0px] relative">
      <Header large={large} />
      <div className="bg-transparent bg-tw-arr2 bg-no-repeat bg-scroll bg-[25px_0px] pt-[11px] mt-[16px]">
        <div className="bg-white bg-none bg-repeat bg-scroll bg-[0] rounded-[5px] overflow-hidden">
          {children}
          {large && <Footer large />}
        </div>
      </div>
      {!large && <Footer />}
    </main>
  );
}

export function Wrapper({ children, heightFix }: WrapperProps) {
  return (
    <div className={`flex-1 p-[5px_10px] ${heightFix ? "min-h-[591px]" : ""}`}>
      {children}
    </div>
  );
}

export function SideBar({ children }: ContentProps) {
  return (
    <div className="min-w-[200px] w-[200px] bg-tw-sidebar border-l border-tw-sidebar-border">
      {children}
    </div>
  );
}

export function Section({ children }: ContentProps) {
  return <div className="leading-[1.2] p-[13px_13px_16px]">{children}</div>;
}
