import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface InfoardProps {
  destination: string;
  img: StaticImageData;
  imgDescription: string;
  width?: number;
  height?: number;
  children: ReactNode;
  className?: string;
}

export default function InfoCard({ destination, img, imgDescription, width, height, children, className }: InfoardProps) {
  return (
    <Link
      href={destination}
      className="bg-white w-[92%] sm:w-fit mx-auto sm:mx-0 rounded-md overflow-hidden relative"
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
      <div className="bg-white hidden sm:flex w-[324px] min-h-[201px] p-2">
        {children}
      </div>
    </Link>
  )
}