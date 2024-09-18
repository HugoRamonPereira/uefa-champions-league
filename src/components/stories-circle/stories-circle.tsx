import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";

interface StoriesCircleProps {
  url: string
  storiesImg: StaticImageData
  storiesAlt: string
  storiesText: string
}

export function StoriesCircle({ url, storiesImg, storiesAlt, storiesText }: StoriesCircleProps) {
  return (
    <Link href={url}>
      <div className="w-fit flex flex-col items-center text-white text-xs gap-1">
        <div className="border-[2.5px] border-uefa-cyan rounded-full p-0.5">
          <Image src={storiesImg} className="bg-uefa-blue rounded-full h-24 min-w-24" alt={storiesAlt} />
        </div>
        <div className="w-3/4 text-center">
          <p>{storiesText}</p>
        </div>
      </div>
    </Link>
		);
}