import { createThemeCSS } from "@/lib/utils";
import type { PageType, ThemeType, UserType } from "@/types";
import { Fragment } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { JoinBanner } from "./join-banner";
import { Notification } from "./notification";

interface PageProps {
  user?: UserType;
  theme?: ThemeType;
  join?: string;
  size?: PageType;
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  const { user, theme, join, size = "DEFAULT", children } = props;
  const css = createThemeCSS(theme);

  return (
    <Fragment>
      {css && <style>{css}</style>}
      <main>
        <div className="relative mx-auto w-[763px] p-[16px_0]">
          <Header user={user} join={join} size={size} />
          <Notification />
          {join && <JoinBanner screen={join} />}
          <div
            className={`mt-[8px] bg-x-arr2 bg-[25px_0] bg-no-repeat pt-[11px] ${
              size === "SMALL" && "w-[620px]"
            }`}
          >
            <div className="overflow-hidden rounded-[5px] bg-white">
              {children}
              {size === "LARGE" && <Footer connected={true} />}
            </div>
          </div>
          {size === "DEFAULT" && <Footer />}
        </div>
      </main>
    </Fragment>
  );
}
