import clsx from "clsx";

interface TrashIconProps {
  className?: string;
}

export function TrashIcon({ className }: TrashIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="10"
      height="10"
      viewBox="0 0 228 260"
      className={clsx("text-meta", className)}
    >
      <path d="M226,34h-72V2H74v32H2v48h16v176h192V82h16V34z M90,18h48v16H90V18z M58,226V82h16v144H58z M106,226V82h16v144H106z   M170,226h-16V82h16V226z" />
    </svg>
  );
}
