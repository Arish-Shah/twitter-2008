import clsx from "clsx";
import Link from "next/link";

const steps = [1, 2, 3] as const;

interface StepsProps {
  selected: (typeof steps)[number];
}

export function Steps({ selected }: StepsProps) {
  return (
    <div className="mt-[7px] flex w-[200px] items-center justify-center">
      {steps.map((step) => (
        <div
          key={step}
          className={clsx(
            "ml-[10px] flex h-[30px] w-[30px] cursor-default justify-center rounded-full border border-gray font-georgia text-[18px] shadow-[1px_1px_1px] shadow-gray-border",
            {
              "text-text": selected === step,
              "text-gray-border": selected !== step,
              "leading-[23px]": selected <= step,
              "!text-tick": selected > step,
            }
          )}
        >
          {selected > step ? "✔" : step}
        </div>
      ))}
      <Link href="/home" className="ml-[10px]">
        skip »
      </Link>
    </div>
  );
}
