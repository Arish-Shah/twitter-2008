import type { CaptchaType, ThemeType } from "@/types";

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
