import Image from "next/image";

export function ReCaptcha() {
  return (
    <div className="relative">
      <Image
        src="/images/miscs/reCAPTCHA.png"
        alt="reCAPTCHA"
        height={129}
        width={318}
        quality={100}
        draggable={false}
      />
      <input
        type="text"
        className="absolute left-[31px] top-[99px] h-[15px] w-[143px] outline-none"
      />
      <div className="absolute left-[188px] top-[72px] h-[49px] w-[22px] cursor-pointer bg-transparent"></div>
    </div>
  );
}
