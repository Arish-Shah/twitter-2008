import { CaptchaType } from "@/types";

export function getRandomCaptcha(): CaptchaType {
  const captchas = [
    ["freitag", "winnie"],
    ["spotters", "investi"],
    ["trieste", "modern", "day"],
    ["levelers", "critics"],
  ];

  const index = Math.floor(Math.random() * captchas.length);

  return {
    src: `/images/captcha/image_${index + 1}.png`,
    answers: captchas[index],
  };
}
