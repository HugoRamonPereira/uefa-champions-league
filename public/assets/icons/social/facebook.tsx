import { twMerge } from "tailwind-merge"

interface FacebookProps {
  className?: string;
}

export default function Facebook({ className }: FacebookProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 100 100"
      viewBox="0 0 100 100"
      id="facebook"
      width="22px"
      height="22px"
      className={twMerge(className)}
    >
      <path
        d="M50,2.5c-58.893,1.725-64.898,84.363-7.46,95c-0.001,0-0.001-33.395-0.001-33.395H30.417V50.29H42.54V39.762
        c0.338-19.276,15.828-19.983,28.722-17.66c0,0,0,11.761,0,11.761h-6.021c-5.931,0-7.781,3.684-7.781,7.463v8.965h13.242
        l-2.117,13.814H57.46V97.5C114.911,86.853,108.879,4.218,50,2.5z"
        >
      </path>
    </svg>
  )
}