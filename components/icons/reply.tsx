import clsx from "clsx";

interface ReplyIconProps {
  className?: string;
}

export function ReplyIcon({ className }: ReplyIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="15"
      height="15"
      fill="currentColor"
      className={clsx("text-input-border", className)}
    >
      <path d="M 25 6 L 7.0996094 20 L 25 34 L 25 26 C 39 26 50 33 50 43 C 50 50 45 57 45 57 L 50 60 C 50 60 57 52 57 40 C 57 22 42.673 14 25 14 L 25 6 z" />
    </svg>
  );
}
