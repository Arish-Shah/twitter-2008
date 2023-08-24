import clsx from "clsx";

interface PadlockProps {
  className?: string;
}

export function Padlock({ className }: PadlockProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      height="10px"
      width="10px"
      viewBox="0 0 472.615 472.615"
      className={clsx("inline-block", className)}
    >
      <g>
        <g>
          <path d="M372.143,202.291V135.84C372.143,60.941,311.204,0,236.304,0c-74.9,0-135.839,60.941-135.839,135.84v66.451h-61.14    v270.324h393.966V202.291H372.143z M307.454,202.291h-142.3V135.84c0-39.232,31.919-71.15,71.149-71.15    c39.231,0,71.15,31.918,71.15,71.15V202.291z" />
        </g>
      </g>
    </svg>
  );
}
