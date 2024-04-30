import { championsBold } from "@/app/layout";
import uclClassicSemiFinals from "../../../public/assets/images/ucl-classic-semi-finals.webp";
import uclBayernXReal from "../../../public/assets/images/ucl-bayern-x-real-madrid.webp";
import uclCoefficientTable from "../../../public/assets/images/ucl-coefficient-table.png";
import Link from "next/link";
import Image from "next/image";
import InfoCard from "../info-card/info-card";
import { Button } from "../ui/button";

export default function LatestNews() {
  return (
    <section className="bg-[url('/assets/images/ucl-news_d.webp')] bg-cover bg-center sm:h-[575px] md:h-fit w-full">
      <div className="w-full max-w-[1400px] h-fit mx-auto">
        <p className={`${championsBold.className} text-4xl py-6`}>Latest news</p>
        <div className="grid grid-cols-2 gap-8">
          <div className="min-w-[680px] flex flex-col sm:flex-row bg-yellow-300">
            <Link
              href=""
              className="bg-white w-[92%] min-h-[218px] sm:min-h-fit mx-auto sm:mx-0 sm:w-full sm:h-full rounded-md border border-uefa-dark-gray overflow-hidden relative"
            >
              <Image
                src={uclClassicSemiFinals}
                alt=""
                width={685}
                height={381}
                quality={100}
                className="hover:scale-110 transition-transform ease-in-out duration-500"
              />
              <p className="absolute bottom-6 left-4 text-white text-2xl">
                Classic semi-final ties
              </p>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 w-full min-h-[218px]">
            <InfoCard
              destination=""
              img={uclBayernXReal}
              imgDescription="Bayern x Real Madrid preview"
              width={324}
              height={182}
            >
              <p className="text-xl font-medium">
                Bayern x Real Madrid preview
              </p>
            </InfoCard>
            <InfoCard
              destination=""
              img={uclCoefficientTable}
              imgDescription="Bayern x Real Madrid preview"
              width={324}
              height={182}
            >
              <p className="text-xl font-medium">
                Champions League winner rebalancing
              </p>
            </InfoCard>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="grid grid-cols-2 gap-8 w-full min-h-[218px]">
            <InfoCard
              destination=""
              img={uclBayernXReal}
              imgDescription="Bayern x Real Madrid preview"
              width={324}
              height={182}
            >
              <p className="text-xl font-medium">
                Bayern x Real Madrid preview
              </p>
            </InfoCard>
            <InfoCard
              destination=""
              img={uclCoefficientTable}
              imgDescription="Bayern x Real Madrid preview"
              width={324}
              height={182}
            >
              <p className="text-xl font-medium">
                Champions League winner rebalancing
              </p>
            </InfoCard>
          </div>
          <div className="min-w-[680px] flex flex-col sm:flex-row bg-yellow-300">
            <Link
              href=""
              className="bg-white w-[92%] min-h-[218px] sm:min-h-fit mx-auto sm:mx-0 sm:w-full sm:h-full rounded-md border border-uefa-dark-gray overflow-hidden relative"
            >
              <Image
                src={uclClassicSemiFinals}
                alt=""
                width={685}
                height={381}
                quality={100}
                className="hover:scale-110 transition-transform ease-in-out duration-500"
              />
              <p className="absolute bottom-6 left-4 text-white text-2xl">
                Classic semi-final ties
              </p>
            </Link>
          </div>
          <Button variant={"uefa-blue-outline"} className="w-[calc(50%-16px)] h-12">View all news</Button>
        </div>
      </div>
    </section>
  )
}