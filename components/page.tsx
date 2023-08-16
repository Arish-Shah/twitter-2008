import { getThemeCSS } from "@/lib/utils";
import type { PageSizeType, ThemeType } from "@/types";
import clsx from "clsx";
import { Flash } from "./flash";
import { Footer } from "./footer";
import { Header } from "./header";
import { JoinBanner } from "./join-banner";
import { Loader } from "./loader";

interface PageProps {
  size?: PageSizeType;
  children: React.ReactNode;
  theme?: ThemeType;
  join?: string;
}

export function Page({ size = "default", theme, join, children }: PageProps) {
  const css = getThemeCSS(theme);

  return (
    <main className="relative mx-auto w-[763px] p-[16px_0]">
      {css && <style>{css}</style>}
      <Loader />
      <Header size={size} />
      <Flash />
      {join && <JoinBanner username={join} />}
      <div
        className={clsx("mt-[6px] bg-arr2 bg-[25px_0] bg-no-repeat pt-[11px]", {
          "w-[620px]": size === "small",
        })}
      >
        <div className="overflow-hidden rounded bg-white">
          {children}
          {size === "large" && <Footer connected />}
        </div>
      </div>
      {size === "default" && <Footer />}
    </main>
  );
}
