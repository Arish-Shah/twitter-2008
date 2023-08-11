export function getRandomCaptcha(idLength: number) {
  const captchas = [
    ["freitag", "winnie"],
    ["spotters", "investi"],
    ["trieste", "modern", "day"],
    ["levelers", "critics"],
  ];

  const index = idLength % captchas.length;

  return {
    src: `/images/captcha/image_${index + 1}.png`,
    answer: captchas[index],
  };
}
