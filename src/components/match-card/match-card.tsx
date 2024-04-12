import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Play from "../../../public/assets/icons/play"
import Image, { StaticImageData }  from "next/image"
import Link from "next/link";

interface MatchCardProps {
  teamOne: string;
  teamTwo: string;
  teamOneScore: number;
  teamTwoScore: number;
  teamOneImage: StaticImageData;
  teamTwoImage: StaticImageData;
  teamOneAlt: string;
  teamTwoAlt: string;
}

export default function MatchCard({ teamOne, teamTwo, teamOneImage, teamTwoImage, teamOneScore, teamTwoScore, teamOneAlt, teamTwoAlt }: MatchCardProps) {
  return (
    <Link href="/">
      <Card className="w-[180px] bg-uefa-dark-blue-secondary border border-uefa-dark-blue-tertiary">
        <CardHeader className="mb-1 pt-2">
          <CardTitle className="text-gray-300/80 text-xs font-light flex items-center justify-between tracking-wide">
            Full time
            <Play className="fill-uefa-cyan" />
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-gray-100 font-light text-sm ">
            <div className="flex gap-1">
              <Image src={teamOneImage} alt={teamOneAlt} width={20} height={15} quality={100}/>
              <p>{teamOne}</p>
            </div>
            <div className="mr-1">
              <p>{teamOneScore}</p>
            </div>
          </div>
          <div className="flex items-center justify-between text-gray-100 font-light text-sm ">
            <div className="flex gap-1">
              <Image src={teamTwoImage} alt={teamTwoAlt} width={20} height={15} quality={100} />
              <p>{teamTwo}</p>
            </div>
            <div className="mr-1">
              <p>{teamTwoScore}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}