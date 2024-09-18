import { championsBold } from "@/app/layout";
import { Button } from "../ui/button";
import HighlightsCard from "../cards/highlights-card/highlights-card";
import uclHighlightsGalatasarayYB from "/public/assets/images/ucl-highlights-yb-galatasaray.png";
import uclHighlightsSalzburgDynamoKyiv from "/public/assets/images/ucl-highlights-salzburg-dynamo-kyiv.png";
import uclHighlightsSpartaPrahaMalmo from "/public/assets/images/ucl-highlights-sparta-praha-malmo.png";
import uclHighlightsYBGalatasaray from "/public/assets/images/ucl-highlights-yb-galatasaray-turkey.png";
import NavigationPrev from "../navigation-button/navigation-prev";
import NavigationNext from "../navigation-button/navigation-next";

export default function Highlights() {
  return (
			<section className="w-full h-[540px] bg-uefa-dark-blue-quaternary">
				<div className="max-w-[1400px] mx-auto">
					<div className="flex items-center justify-between">
						<p
							className={`${championsBold.className} text-2xl text-white sm:text-4xl py-6 ml-4`}
						>
							Highlights
						</p>
						<div className="flex gap-2">
							<NavigationPrev />
							<NavigationNext />
						</div>
					</div>
					<div className="flex gap-8">
						<HighlightsCard
							img={uclHighlightsGalatasarayYB}
							imgDescription="HighlightsGalatasarayxYoungBoys"
							destination="https://www.uefa.com/uefachampionsleague/video/highlights/0290-1bb7d6a58dd3-eafcdb201f4e-1000--highlights-galatasaray-0-1-young-boys/"
							highlightDate="2 days ago"
							highlightDescription="Highlights: Galatasaray 0 x 1 Young Boys"
							width={329}
							height={185}
						>
							<p className="text-uefa-medium-gray font-light text-sm">
								28/08/2024
							</p>
							<p className="text-white font-medium text-xl">
								Highlights: Galatasaray 0-1 Young Boys
							</p>
						</HighlightsCard>
						<HighlightsCard
							img={uclHighlightsSalzburgDynamoKyiv}
							imgDescription="HighlightsSalzburgxDynamoKyiv"
							destination="https://www.uefa.com/uefachampionsleague/video/highlights/0290-1bb6fc18fa0f-efb9e8a37c24-1000--highlights-salzburg-1-1-dynamo-kyiv/"
							highlightDate="2 days ago"
							highlightDescription="Highlights: Salzburg 1 x 1 Dynamo Kyiv"
							width={329}
							height={185}
						>
							<p className="text-uefa-medium-gray font-light text-sm">
								27/08/2024
							</p>
							<p className="text-white font-medium text-xl">
								Highlights: Salzburg 1-1 Dynamo Kyiv
							</p>
						</HighlightsCard>
						<HighlightsCard
							img={uclHighlightsSpartaPrahaMalmo}
							imgDescription="HighlightsSpartaPrahaxMalmo"
							destination="https://www.uefa.com/uefachampionsleague/video/highlights/0290-1bb6f9a5aa31-14550da6c067-1000--highlights-sparta-praha-2-0-malmo/"
							highlightDate="2 days ago"
							highlightDescription="Highlights: Dortmund 1-0 Paris"
							width={329}
							height={185}
						>
							<p className="text-uefa-medium-gray font-light text-sm">
								27/08/2024
							</p>
							<p className="text-white font-medium text-xl">
								Highlights: Sparta Praha 2-0 Malmö
							</p>
						</HighlightsCard>
						<HighlightsCard
							img={uclHighlightsYBGalatasaray}
							imgDescription="HighlightsYBxGalatasaray"
							destination="https://www.uefa.com/uefachampionsleague/video/highlights/0290-1baaf5ee958f-dadf868d2c47-1000--highlights-young-boys-3-2-galatasaray/"
							highlightDate="2 days ago"
							highlightDescription="Highlights: Sparta Praha 2-0 Malmö"
							width={329}
							height={185}
						>
							<p className="text-uefa-medium-gray font-light text-sm">
								21/08/2024
							</p>
							<p className="text-white font-medium text-xl">
								Highlights: Young Boys 3-2 Galatasaray
							</p>
						</HighlightsCard>
					</div>
					<div className="mt-8">
						<Button
							variant={"uefa-cyan-outline"}
							className="w-[92%] sm:w-[calc(25%-24px)] h-12 mx-auto sm:mx-0 border"
						>
							Watch all highlights
						</Button>
					</div>
				</div>
			</section>
		);
}