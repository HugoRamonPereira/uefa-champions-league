import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"

interface HoverCardProps {
  destination: string;
  title: string;
  img: StaticImageData;
  imgDescription: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function HoverCard({ destination, title, img, imgDescription, width, height, className }: HoverCardProps) {
  return (
    <Link
      href={destination}
      className="bg-white w-[92%] min-h-[218px] sm:min-h-fit mx-auto sm:mx-0 sm:w-[65%] sm:h-[90%] rounded-md border border-uefa-dark-gray overflow-hidden relative"
    >
      <Image
        src={img}
        alt={imgDescription}
        width={width}
        height={height}
        quality={100}
        className={cn("hover:scale-110 transition-transform ease-in-out duration-500", className)}
      />
      <p className="absolute bottom-6 left-4 text-white text-2xl">
        {title}
      </p>
    </Link>
  )
}