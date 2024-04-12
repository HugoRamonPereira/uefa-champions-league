import { twMerge } from "tailwind-merge"

interface PlayProps {
  className?: string;
}

export default function Play({ className }: PlayProps) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      width="16px"
      height="16px"
      fill="#59F7DD"
      x="0px"
      y="0px"
      viewBox="0 0 122.88 122.88"
    >
      <g>
        <path
          className="st0" d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44s-27.51,61.44-61.44,61.44S0,95.37,0,61.44S27.51,0,61.44,0L61.44,0z M84.91,65.52c3.41-2.2,3.41-4.66,0-6.61L49.63,38.63c-2.78-1.75-5.69-0.72-5.61,2.92l0.11,40.98c0.24,3.94,2.49,5.02,5.8,3.19 L84.91,65.52L84.91,65.52z"
        />
      </g>
    </svg>
  )
}