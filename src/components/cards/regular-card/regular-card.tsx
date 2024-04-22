import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent
} from "@/components/ui/card"
import Image, { StaticImageData }  from "next/image"
import Link from "next/link";

interface RegularCardProps {
  destination: string;
  text?: string;
  cardIcon: StaticImageData;
  cardIconDescription: string;
}

export default function RegularCard({ destination, text, cardIcon, cardIconDescription }: RegularCardProps) {
  return (
    <Link href={destination}>
      <Card
        className="w-[180px] h-[120px] flex items-center justify-center bg-transparent group text-gray-300 border-[0.5px] border-gray-400 hover:border-gray-100 rounded-2xl p-3 "
      >
        <CardContent className="flex items-center justify-center">
          {!text ? (
            <div className="flex items-center">
              <Image src={cardIcon} alt={cardIconDescription} />
            </div>
          ) : (
            <div className="text-gray-100 text-xl w-[140px] h-[90px] flex">
              <div className="flex flex-col justify-between">
                <Image src={cardIcon} alt={cardIconDescription} />
                <p>{text}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}