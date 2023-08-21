import clsx from "clsx";

interface MinusIconProps {
  className?: string;
}

export function MinusIcon({ className }: MinusIconProps) {
  return (
    <svg
      width="8px"
      height="8px"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("text-form-red", className)}
    >
      <rect x="2" y="2" width="6" height="2" fill="currentColor" />
    </svg>
  );
}
