import { championsBold } from "@/app/layout";
import { Button } from "../ui/button";
import NavigationButton from "../navigation-button/navigation-next";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HighlightsCard from "../cards/highlights-card/highlights-card";
import uclHighlightsBVBXPSG from "../../../public/assets/images/ucl-borussia_dortmund_v_paris_saint-germain_semi-final_first_leg_-_uefa_champions_league_2023_24.webp";
import NavigationPrev from "../navigation-button/navigation-prev";
import NavigationNext from "../navigation-button/navigation-next";

export default function Highlights() {
  return (
    <section className="w-full h-[540px] bg-uefa-dark-blue-quaternary">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <p className={`${championsBold.className} text-2xl text-white sm:text-4xl py-6 ml-4`}>Highlights</p>
          <div className="flex gap-2">
            <NavigationPrev />
            <NavigationNext />
          </div>
        </div>
        <div className="flex gap-8">
          <HighlightsCard
            img={uclHighlightsBVBXPSG}
            imgDescription="HighlightsBVBXPSG"
            destination="https://www.uefa.com/uefachampionsleague/video/highlights/028d-1ac98ebf5773-edaac1cb37b6-1000--highlights-dortmund-1-0-paris/"
            highlightDate="2 days ago"
            highlightDescription="Highlights: Dortmund 1-0 Paris"
            width={329}
            height={185}
          >
            <p className="text-uefa-medium-gray font-light text-sm"
            >
              08/05/2024
            </p>
            <p className="text-white font-medium text-lg"
            >
              Highlights: Real Madrid 2-1 Bayern
            </p>
          </HighlightsCard>
          <HighlightsCard
            img={uclHighlightsBVBXPSG}
            imgDescription="HighlightsBVBXPSG"
            destination="https://www.uefa.com/uefachampionsleague/video/highlights/028d-1ac98ebf5773-edaac1cb37b6-1000--highlights-dortmund-1-0-paris/"
            highlightDate="2 days ago"
            highlightDescription="Highlights: Dortmund 1-0 Paris"
            width={329}
            height={185}
          >
            <p className="text-uefa-medium-gray font-light text-sm"
            >
              08/05/2024
            </p>
            <p className="text-white font-medium text-lg"
            >
              Highlights: Real Madrid 2-1 Bayern
            </p>
          </HighlightsCard>
          <HighlightsCard
            img={uclHighlightsBVBXPSG}
            imgDescription="HighlightsBVBXPSG"
            destination="https://www.uefa.com/uefachampionsleague/video/highlights/028d-1ac98ebf5773-edaac1cb37b6-1000--highlights-dortmund-1-0-paris/"
            highlightDate="2 days ago"
            highlightDescription="Highlights: Dortmund 1-0 Paris"
            width={329}
            height={185}
          >
            <p className="text-uefa-medium-gray font-light text-sm"
            >
              08/05/2024
            </p>
            <p className="text-white font-medium text-lg"
            >
              Highlights: Real Madrid 2-1 Bayern
            </p>
          </HighlightsCard>
          <HighlightsCard
            img={uclHighlightsBVBXPSG}
            imgDescription="HighlightsBVBXPSG"
            destination="https://www.uefa.com/uefachampionsleague/video/highlights/028d-1ac98ebf5773-edaac1cb37b6-1000--highlights-dortmund-1-0-paris/"
            highlightDate="2 days ago"
            highlightDescription="Highlights: Dortmund 1-0 Paris"
            width={329}
            height={185}
          >
            <p className="text-uefa-medium-gray font-light text-sm"
            >
              08/05/2024
            </p>
            <p className="text-white font-medium text-lg"
            >
              Highlights: Real Madrid 2-1 Bayern
            </p>
          </HighlightsCard>
        </div>
        <div className="mt-8">
          <Button variant={"uefa-cyan-outline"} className="w-[92%] sm:w-[calc(25%-24px)] h-12 mx-auto sm:mx-0 border">Watch all highlights</Button>
        </div>
      </div>
    </section>
  )
}