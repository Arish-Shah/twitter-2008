import { Footer } from "./footer";
import { Header } from "./header";

interface ContainerProps {
  children: React.ReactNode;
  large?: boolean;
}

export function Container({ children, large }: ContainerProps) {
  return (
    <main className="w-[763px] mx-auto p-[16px_0px] relative">
      <Header large={large} />
      <div className="bg-transparent bg-tw-arr2 bg-no-repeat bg-scroll bg-[25px_0px] pt-[11px] mt-[16px]">
        <div className="bg-white bg-none bg-repeat bg-scroll bg-[0] rounded-[5px]">
          {children}
          {large && <Footer />}
        </div>
      </div>
      {!large && <Footer />}
    </main>
  );
}

interface WrapperProps {
  children: React.ReactNode;
}

export function Wrapper({ children }: WrapperProps) {
  return <div className="p-[5px_10px] h-[591px]">{children}</div>;
}
