import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";

interface GamingCardProps {
  destination: string;
  gamingLabel: StaticImageData;
  gamingLabelDescription: string;
  gamingLabelWidth: number;
  gamingLabelHeight: number;
  gamingButtonText: string;
  img: StaticImageData;
  imgDescription: string;
  gamingTitle: string;
  gamingDescription: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function GamingCard({
  destination,
  gamingLabel,
  gamingLabelDescription,
  gamingLabelWidth,
  gamingLabelHeight,
  gamingButtonText,
  img,
  imgDescription,
  gamingTitle,
  gamingDescription,
  width,
  height,
  className,
 }: GamingCardProps) {
  return (
    <Link
      href={destination}
      className="w-[92%] sm:w-fit mx-auto sm:mx-0 rounded-lg bg-uefa-dark-gaming-card"
    >
      <div className="max-h-[112px] overflow-hidden">
        <div>
          <Image
            src={gamingLabel}
            alt={gamingLabelDescription}
            width={gamingLabelWidth}
            height={gamingLabelHeight}
            quality={100}
          />
        </div>
        <div className="flex">
          <div>
            <p>{gamingTitle}</p>
            <p>{gamingDescription}</p>
          </div>
          <div>
            <Image
              src={img}
              alt={imgDescription}
              width={width}
              height={height}
              quality={100}
              className={cn("hover:scale-110 transition-transform ease-in-out duration-500", className)}
            />
          </div>
        </div>
        <div>
          <Button variant={"uefa-cyan-outline"} className="w-[92%] sm:w-[calc(25%-24px)] h-12 mx-auto sm:mx-0 border">{gamingButtonText}</Button>
        </div>
      </div>
    </Link>
  )
}