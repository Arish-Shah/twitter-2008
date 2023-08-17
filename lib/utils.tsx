import type { CaptchaType, ThemeType } from "@/types";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import Link from "next/link";
import { Fragment } from "react";

export function getRandomCaptcha(currentIndex?: number): CaptchaType {
  const getRandomIndex = (limit: number) => Math.floor(Math.random() * limit);

  const captchas = [
    ["freitag", "winnie"],
    ["spotters", "investi"],
    ["trieste", "modern", "day"],
    ["levelers", "critics"],
  ];

  let index = getRandomIndex(captchas.length);
  while (currentIndex === index) {
    index = getRandomIndex(captchas.length);
  }

  return {
    src: `/images/captcha/image_${index + 1}.png`,
    answers: captchas[index],
    index,
  };
}

export function getThemeCSS(theme?: ThemeType) {
  if (!theme) return null;

  return `
    :root {
      --background: ${theme.background};
      --text: ${theme.text};
      --links: ${theme.links};
      --sidebar: ${theme.sidebar};
      --sidebar-border: ${theme.sidebarBorder};
      --background-image: url(${theme.backgroundImage});
      --tile: ${theme.tile ? "repeat" : "no-repeat"};
    }
  `;
}

export function truncateWebUrl(url: string) {
  if (url.length <= 20) return url;
  return url.slice(0, 17).concat("...");
}

export function truncateUpdateUrl(url: string) {
  if (url.length <= 30) return url;
  return url.slice(0, 27).concat("...");
}

export function formatUpdateText(text: string): React.ReactNode[] {
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
          {truncateUpdateUrl(word)}
        </Link>
      );
    }
    return word;
  });
}

export function formatUpdateCreatedAt(createdAt: Date) {
  dayjs.extend(relativeTime);
  dayjs.extend(advancedFormat);

  const today = dayjs();
  const date = dayjs(createdAt);

  if (date.get("year") < today.get("year"))
    return date.format("h:mm A MMM Do, YYYY");
  else if (date.isBefore(today.subtract(1, "day")))
    return date.format("h:mm A MMM Do");
  else return "about " + date.fromNow();
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

export function formatUpdateCreatedAtTitle(createdAt: Date) {
  return dayjs(createdAt).format("YYYY-MM-DDTHH:mm:ssZ");
}
