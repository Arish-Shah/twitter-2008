import { createThemeCSS } from "@/lib/util";
import type { Theme, User } from "@/types";
import { Footer } from "./footer";
import { Header } from "./header";

interface PageProps {
  user?: User;
  theme?: Theme;
  isIndex?: boolean;
  join?: string;
  children: React.ReactNode;
}

export function Page({ user, theme, isIndex, join, children }: PageProps) {
  const css = createThemeCSS(theme);

  return (
    <>
      {css && <style>{css}</style>}
      <main>
        <div className="relative mx-auto w-[763px] p-[16px_0]">
          <Header user={user} large={isIndex} join={join} />
          <div className="mt-[16px] bg-tw-arr2 bg-[25px_0] bg-no-repeat pt-[11px]">
            <div className="overflow-hidden rounded-[5px] bg-white">
              {children}
              {isIndex && <Footer connected={isIndex} />}
            </div>
          </div>
          {!isIndex && <Footer connected={isIndex} />}
        </div>
      </main>
    </>
  );
}
