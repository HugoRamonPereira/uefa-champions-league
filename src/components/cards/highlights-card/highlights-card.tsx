import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface HighlightsCardProps {
  destination: string;
  img: StaticImageData;
  imgDescription: string;
  highlightDate: string;
  highlightDescription: string;
  width?: number;
  height?: number;
  children: ReactNode;
  className?: string;
}

export default function HighlightsCard({ destination, img, imgDescription, highlightDate, highlightDescription, width, height, className, children }: HighlightsCardProps) {
  return (
    <Link
      href={destination}
      className="w-[92%] sm:w-fit mx-auto sm:mx-0 overflow-hidden border border-uefa-blueish-gray rounded-lg relative"
    >
      <div className="max-h-[182px] overflow-hidden">
        <Image
          src={img}
          alt={imgDescription}
          width={width}
          height={height}
          quality={100}
          className={cn("hover:scale-110 transition-transform ease-in-out duration-500", className)}
        />
      </div>
      <div className="bg-uefa-dark-blue-secondary hidden sm:flex sm:flex-col w-[329px] min-h-[120px] p-2">
        {children}
      </div>
    </Link>
  )
}