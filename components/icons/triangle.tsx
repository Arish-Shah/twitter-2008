import clsx from "clsx";

interface TriangleIconProps {
  className?: string;
}

export function TriangleIcon({ className }: TriangleIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8px"
      height="8px"
      viewBox="0 0 16 16"
      className={clsx("text-meta", className)}
      fill="currentColor"
    >
      <rect width="16" height="16" fill="none" />
      <polygon points="13,8 5,16 5,0" />
    </svg>
  );
}
