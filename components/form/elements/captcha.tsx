import Image from "next/image";

export function Captcha() {
  return (
    <Image
      src="/images/reCAPTCHA.png"
      alt="reCAPTCHA"
      width={318}
      height={129}
      draggable={false}
    />
  );
}
