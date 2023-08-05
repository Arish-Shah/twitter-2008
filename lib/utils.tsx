import type { ThemeType } from "@/types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { Fragment } from "react";

export function createThemeCSS(theme?: ThemeType) {
  if (!theme) return null;

  return `
    :root {
      --theme: url(${theme.backgroundImage.url});
      --tile: ${theme.backgroundImage.tile ? "repeat" : "no-repeat"};

      --background: ${theme.designColors.background};
      --text: ${theme.designColors.text};
      --links: ${theme.designColors.links};
      --sidebar: ${theme.designColors.sidebar};
      --sidebar-border: ${theme.designColors.sidebarBorder};
    }
  `;
}

export function truncateUserInfoUrl(url: string) {
  if (url.length <= 20) return url;
  return url.slice(0, 17).concat("...");
}

export function truncateTweetUrl(url: string) {
  if (url.length <= 30) return url;
  return url.slice(0, 27).concat("...");
}

export function formatText(text: string): React.ReactNode[] {
  let content = text.split(/((?:@|https?:\/\/[^\s]+)[a-zA-Z0-9\/]+)/);

  return content.map((word, i) => {
    if (word.startsWith("@")) {
      const screen = word.replace("@", "");
      return (
        <Fragment key={i}>
          @<Link href={`/${screen}`}>{screen}</Link>
        </Fragment>
      );
    } else if (word.startsWith("http")) {
      return (
        <Link href={word} target="_blank" key={i}>
          {truncateTweetUrl(word)}
        </Link>
      );
    }
    return word;
  });
}

export function formatDateTime(iso: string) {
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);

  const today = dayjs();
  const date = dayjs(iso);

  if (date.get("year") < today.get("year"))
    return date.format("h:mm A MMM Do, YYYY");
  else if (date.isBefore(today.subtract(1, "day")))
    return date.format("h:mm A MMM Do");
  else return "about " + date.fromNow();
}
