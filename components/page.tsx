import type { PageSizeType } from "@/types";
import clsx from "clsx";
import { Flash } from "./flash";
import { Footer } from "./footer";
import { Header } from "./header";
import { Loader } from "./loader";

interface PageProps {
  size?: PageSizeType;
  children: React.ReactNode;
}

export function Page({ size = "default", children }: PageProps) {
  return (
    <main className="relative mx-auto w-[763px] p-[16px_0]">
      <Loader />
      <Header size={size} />
      <Flash />
      <div
        className={clsx("mt-[6px] bg-arr2 bg-[25px_0] bg-no-repeat pt-[11px]", {
          "w-[620px]": size === "small",
        })}
      >
        <div className="flex overflow-hidden rounded bg-white">
          {children}
          {size === "large" && <Footer />}
        </div>
      </div>
      {size === "default" && <Footer />}
    </main>
  );
}
