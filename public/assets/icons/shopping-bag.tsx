import { twMerge } from "tailwind-merge"

interface ShoppingBagProps {
  className?: string;
}

export default function ShoppingBag({ className }: ShoppingBagProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="pk-svg__icon pk-svg__icon--product"
    >
        <path
          fill="#3C3C3C"
          fillRule="evenodd"
          d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3zM5 20V8h2v1a1 1 0 002 0V8h6v1a1 1 0 102 0V8h2v12H5z"
          clipRule="evenodd"
        >
        </path>
    </svg>
  )
}