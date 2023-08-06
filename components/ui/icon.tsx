interface IconProps {
  className?: string;
}

export function StarIcon({
  liked,
  className = "",
}: IconProps & { liked?: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${
        liked ? "fill-x-star text-x-star-border" : "fill-white text-x-meta"
      } ${className}`}
    >
      <title>Favorite this update</title>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function TrashIcon({ className = "" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      width="12"
      height="12"
      viewBox="0 0 228 260"
      className={`text-x-meta ${className}`}
    >
      <path d="M226,34h-72V2H74v32H2v48h16v176h192V82h16V34z M90,18h48v16H90V18z M58,226V82h16v144H58z M106,226V82h16v144H106z   M170,226h-16V82h16V226z" />
    </svg>
  );
}
