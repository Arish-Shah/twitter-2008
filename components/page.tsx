import { createThemeCSS } from "@/lib/util";
import type { PageSize, Theme, User } from "@/types";
import { Footer } from "./footer";
import { Header } from "./header";

interface PageProps {
  user?: User;
  theme?: Theme;
  join?: string;
  size?: PageSize;
  children: React.ReactNode;
}

export function Page(props: PageProps) {
  const { user, theme, join, size = "default", children } = props;
  const css = createThemeCSS(theme);

  return (
    <>
      {css && <style>{css}</style>}
      <main>
        <div className="relative mx-auto w-[763px] p-[16px_0]">
          <Header user={user} join={join} size={size} />
          <div
            className={`mt-[16px] bg-x-arr2 bg-[25px_0] bg-no-repeat pt-[11px] ${
              size === "small" && "w-[620px]"
            }`}
          >
            <div className="overflow-hidden rounded-[5px] bg-white">
              {children}
              {size === "large" && <Footer connected={true} />}
            </div>
          </div>
          {size === "default" && <Footer />}
        </div>
      </main>
    </>
  );
}
