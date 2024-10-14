import uclKomapny from "/public/assets/images/ucl-bayern-kompany.jpeg";
import uclPredictSix from "/public/assets/images/ucl-predict-your-six.jpeg";
import uclMonacoBarcelona from "/public/assets/images/ucl-monaco-barcelona.jpeg";
import uclNewEra from "/public/assets/images/ucl-a-new-era-begins.webp";
import uclFixtures from "/public/assets/images/ucl-new-fixtures.webp";
import uclClasssicHaaland from "/public/assets/images/ucl-classics-haaland.webp";
import Link from "next/link";
import Image from "next/image";
import InfoCard from "../info-card/info-card";

export default function LatestNews() {
  return (
    <section className="bg-uefa-gray sm:h-[575px] md:h-fit w-full">
      <div className="w-full max-w-[1400px] h-fit mx-auto">
        <h1 className="font-champions-bold text-2xl sm:text-4xl py-6">
          Latest news
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="lg:min-w-[680px] flex flex-col sm:flex-row">
            <Link
              href="https://www.uefa.com/api/v1/linkrules/article/0291-1bdded9acbcd-0d1ebba62018-1000/"
              className="bg-white w-[92%] min-h-[218px] sm:min-h-fit mx-auto sm:mx-0 sm:w-full sm:h-full rounded-md border border-uefa-dark-gray overflow-hidden relative"
            >
              <Image
                src={uclKomapny}
                alt=""
                width={685}
                height={381}
                quality={100}
                className="hover:scale-110 transition-transform ease-in-out duration-500"
              />
              <p className="absolute bottom-6 left-4 text-white text-2xl">
                Kompany on coaching and Bayern
              </p>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <InfoCard
              destination="https://www.uefa.com/api/v1/linkrules/video/0290-1bba80846d32-9f76669ef1af-1000/"
              img={uclNewEra}
              imgDescription="Bayern x Real Madrid preview"
            >
              <p className="text-xl font-normal text-uefa-darker-gray tracking-wide">
                The dawn of a new era 2024/25
              </p>
            </InfoCard>
            <InfoCard
              destination="https://www.uefa.com/api/v1/linkrules/article/0290-1bbe6365b47a-0668db2bbcb1-1000/"
              img={uclFixtures}
              imgDescription="Bayern x Real Madrid preview"
            >
              <p className="text-xl font-normal text-uefa-darker-gray tracking-wide">
                Champions League fixtures
              </p>
            </InfoCard>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
            <InfoCard
              destination="https://www.uefa.com/api/v1/linkrules/article/0291-1bd87dfa806e-7b2e5b14c4a6-1000/"
              img={uclPredictSix}
              imgDescription="Bayern x Real Madrid preview"
            >
              <p className="text-xl font-normal text-uefa-darker-gray tracking-wide">
                Bayern x Real Madrid preview
              </p>
            </InfoCard>
            <InfoCard
              destination="https://www.uefa.com/api/v1/linkrules/video/0291-1be0acee0ffd-83bceb14fcf6-1000/"
              img={uclMonacoBarcelona}
              imgDescription="Bayern x Real Madrid preview"
            >
              <p className="text-xl font-normal text-uefa-darker-gray tracking-wide">
                Monaco vs Barcelona: Watch 1994 winner
              </p>
            </InfoCard>
          </div>
          <div className="sm:min-w-[680px] flex flex-col sm:flex-row">
            <Link
              href="https://www.uefa.com/api/v1/linkrules/article/0225-0e919f9fb3a2-f33f9f8bd0a7-1000/"
              className="bg-white w-[92%] min-h-[218px] sm:min-h-fit mx-auto sm:mx-0 sm:w-full sm:h-full rounded-md border border-uefa-dark-gray overflow-hidden relative"
            >
              <Image
                src={uclClasssicHaaland}
                alt=""
                width={685}
                height={381}
                quality={100}
                className="hover:scale-110 transition-transform ease-in-out duration-500"
              />
              <p className="absolute bottom-6 left-4 text-white text-2xl">
                Classic Matchday 1 goals
              </p>
            </Link>
          </div>
          <Link
            href="https://www.uefa.com/uefachampionsleague/news/"
            className="flex items-center justify-center rounded-md w-[92%] sm:w-[calc(50%-16px)] h-12 mx-auto sm:mx-0 mb-8 text-sm sm:text-base bg-transparent text-uefa-blue hover:text-white hover:bg-uefa-blue hover:transition-colors hover:duration-200 border border-uefa-blue"
          >
            View all news
          </Link>
        </div>
      </div>
    </section>
  );
}