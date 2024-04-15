import { twMerge } from "tailwind-merge"

interface YoutubeProps {
  className?: string;
}

export default function Youtube({ className }: YoutubeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 124 124"
      viewBox="0 0 124 124"
      width={30}
      height={30}
      id="youtube"
      className={twMerge(className)}
    >
      <path
        d="M107.2,50c0-10.9-8.8-19.7-19.7-19.7h-51c-10.9,0-19.7,8.8-19.7,19.7V74
				c0,10.9,8.8,19.7,19.7,19.7h51c10.9,0,19.7-8.8,19.7-19.7V50z M75,63.2L54.7,74.4c-0.9,0.5-1.7-0.2-1.7-1.2V50.3
				c0-1,0.8-1.7,1.7-1.2l20.5,11.7C76.1,61.4,75.9,62.7,75,63.2z"
      >
      </path>
    </svg>
  )
}