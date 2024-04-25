import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface HeadlineItemProps {
  destination: string;
  img: StaticImageData;
  imgDescription: string;
  title: string;
}

export default function HeadlineItem({ destination, img, imgDescription, title }: HeadlineItemProps) {
  return (
    <Link
      href={destination}
      className="flex items-center gap-5 text-white hover:text-gray-400/95 font-medium group py-2 "
    >
      <div className="w-[125px] h-[70px] overflow-hidden rounded-md">
        <Image
          src={img}
          alt={imgDescription} width={125}
          height={70}
          quality={100}
          className="rounded-md group-hover:scale-110 transition-transform ease-in-out duration-300"
        />
      </div>
      <p>{title}</p>
    </Link>
  )
}