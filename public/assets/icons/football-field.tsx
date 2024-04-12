import { twMerge } from "tailwind-merge"

interface FootballFieldProps {
  className?: string;
}

export default function FootballField({ className }: FootballFieldProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="26"
      viewBox="0 0 8.467 8.467"
      className={twMerge("rotate-90", className)}
    >
      <path
        d="M2 4.998A1 1 0 0 0 .996 6.002V25.998A1 1 0 0 0 2 27.002h28a1 1 0 0 0 .996-1.004V6.002A1 1 0 0 0 30 4.998H2zm.996 2H15V11.1c-2.276.466-4.002 2.495-4.002 4.904S12.724 20.436 15 20.9v4.102H2.996v-4h3.006a1 1 0 0 0 .996-1.004v-7.996a1 1 0 0 0-.996-1.004H2.996v-4zm14.004 0h12.004v4h-3.006a1 1 0 0 0-.996 1.004v7.996a1 1 0 0 0 .996 1.004h3.006v4H17v-4.104c2.275-.467 4.002-2.488 4.002-4.894S19.274 11.57 17 11.102V6.998zM2.996 13h2.002v6H2.996v-6zm13 0a2.993 2.993 0 0 1 3.006 3.004A2.987 2.987 0 0 1 15.996 19 2.978 2.978 0 0 1 13 16.004 2.985 2.985 0 0 1 15.996 13zm11.008 0h2v6h-2v-6z"
        fontFamily="sans-serif"
        fontWeight="500"
        overflow="visible"
        paintOrder="fill markers stroke"
        transform="scale(.26458)"
      >
      </path>
    </svg>
  )
}