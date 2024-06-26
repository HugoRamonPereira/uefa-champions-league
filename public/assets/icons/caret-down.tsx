import { twMerge } from "tailwind-merge"

interface CaretDownProps {
  className?: string;
}

export default function CaretDown({ className }: CaretDownProps) {
  return (
    <svg
      width="15px"
      height="15px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("rotate-90", className)}
    >
      <path
        d="M18 7.2071C18 6.09347 16.6536 5.53575 15.8661 6.32321L6.32321 15.8661C5.53576 16.6536 6.09346 18 7.2071 18H16.25C17.2165 18 18 17.2165 18 16.25V7.2071Z"
      />
    </svg>

  )
}