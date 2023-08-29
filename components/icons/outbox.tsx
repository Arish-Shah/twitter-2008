import clsx from "clsx";

interface OutboxIconProps {
  className?: string;
}

export function OutboxIcon({ className }: OutboxIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 137.443 132.919"
      height={13}
      width={13}
      className={clsx("text-input-border", className)}
    >
      <g transform="matrix(1, 0, 0, 1, -238.5565643310547, -197.2669677734375)">
        <rect
          x="264.387"
          y="201.075"
          width="107.538"
          height="78.196"
          fill="none"
          stroke="currentColor"
          strokeWidth={12}
        />
        <path
          stroke="currentColor"
          strokeWidth={12}
          fill="#ffffff"
          d="M 282.098 279.215 L 282.098 254.152 L 243.868 287.576 L 282.098 321 L 282.098 295.937 L 335.637 295.937 L 335.637 279.215 L 282.098 279.215 Z"
        />
        <polyline
          points="264.387 201.075 318.156 254.844 371.925 201.075"
          stroke="currentColor"
          strokeWidth={12}
          fill="none"
        />
      </g>
    </svg>
  );
}
