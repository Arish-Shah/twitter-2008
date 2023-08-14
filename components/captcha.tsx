import { getRandomCaptcha } from "@/lib/utils";
import type { CaptchaType } from "@/types";
import Image from "next/image";
import { useState } from "react";

interface CaptchaProps {
  value: CaptchaType;
  onChange: (value: boolean) => void;
}

export function Captcha({ value, onChange }: CaptchaProps) {
  const [data, setData] = useState(value);

  return (
    <table className="w-[318px] align-top text-[8pt] leading-[12px]">
      <tbody>
        <tr>
          <td
            colSpan={6}
            className="h-[9px] bg-sprite bg-[-0px_-63px] bg-no-repeat"
          ></td>
        </tr>
        <tr>
          <td className="h-[57px] w-[9px] bg-sprite bg-[-18px_-0px] bg-no-repeat"></td>
          <td colSpan={4} className="relative h-[57px] bg-white">
            <Image
              src={data.src}
              alt="reCAPTCHA"
              height={57}
              width={300}
              quality={100}
              className="absolute left-0 top-0"
            />
          </td>
          <td className="h-[57px] w-[9px] bg-sprite bg-[-27px_-0px] bg-no-repeat"></td>
        </tr>
        <tr>
          <td
            rowSpan={6}
            className="h-[63px] w-[9px] bg-sprite bg-[-0px_-0px] bg-no-repeat"
          ></td>
          <td
            colSpan={4}
            className="h-[6px] w-[300px] bg-sprite bg-[-18px_-57px] bg-no-repeat"
          ></td>
          <td
            rowSpan={6}
            className="h-[63px] w-[9px] bg-sprite bg-[-9px_-0px] bg-no-repeat"
          ></td>
        </tr>
        <tr>
          <td
            rowSpan={3}
            className="relative h-[49px] w-[171px] bg-sprite bg-[-43px_-0px] bg-no-repeat"
          >
            <div className="absolute left-0 top-0 ml-[20px] mr-[5px] mt-[4px] h-[45px] w-[146px] bg-none">
              <label htmlFor="response" className="static text-black">
                Type the two words:
              </label>
              <input
                type="text"
                autoComplete="off"
                id="response"
                className="absolute bottom-[7px] left-[0px] w-[145px] border border-[#cca940] text-[10pt]"
                onChange={(e) =>
                  onChange(
                    data.answers.every(
                      (answer) => e.target.value.indexOf(answer) >= 0
                    )
                  )
                }
              />
            </div>
          </td>
          <td
            rowSpan={4}
            className="h-[57px] w-[7px] bg-sprite bg-[-36px_-0px] bg-no-repeat"
          ></td>
          <td className="relative">
            <Image
              alt="Refresh"
              src="/images/captcha/refresh.gif"
              title="Get a new challenge"
              height={17}
              width={25}
              quality={100}
              className="absolute left-0 top-0 cursor-pointer"
              onClick={() => setData(getRandomCaptcha())}
            />
          </td>
          <td
            rowSpan={4}
            className="h-[57px] w-[97px] bg-sprite bg-[-214px_-0px] bg-no-repeat"
          ></td>
        </tr>
        <tr>
          <td className="relative">
            <Image
              alt="Audio"
              src="/images/captcha/audio.gif"
              title="Get an audio challenge"
              height={16}
              width={25}
              quality={100}
              className="absolute left-0 top-[1px] cursor-pointer"
            />
          </td>
        </tr>
        <tr>
          <td className="relative">
            <Image
              alt="Help"
              src="/images/captcha/help.gif"
              title="Help"
              height={16}
              width={25}
              quality={100}
              className="absolute bottom-0 left-0 cursor-pointer"
            />
          </td>
        </tr>
        <tr>
          <td className="h-[8px] w-[171px] bg-sprite bg-[-43px_-49px] bg-no-repeat"></td>
          <td className="h-[8px] w-[25px] bg-sprite bg-[-43px_-49px] bg-no-repeat"></td>
        </tr>
      </tbody>
    </table>
  );
}
