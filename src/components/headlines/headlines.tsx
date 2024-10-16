import HoverCard from "../hover-card/hover-card";
import { StoriesCircle } from "../stories-circle/stories-circle";
import HeadlineItem from "../headline-item/headline-item";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { stories } from "@/data/data";

import uclNewFormat from "/public/assets/images/ucl-new-format.jpeg";
import uclPickFantasySquad from "/public/assets/images/headlines-pick-fantasy-squad.webp";
import uclPredictedLineups from "/public/assets/images/ucl-salah-predicted-lineups.webp";
import uclFormGuide from "/public/assets/images/ucl-form-guide.png";
import uclLeaguePhaseTeams from "/public/assets/images/ucl-league-phase-teams.webp";
import uclHeadlinesWhatToLookForWedThu from "/public/assets/images/headlines-what-to-look-for-wed-thu.webp";

export default function Headlines() {
  return (
			<section className="bg-[url('/assets/images/ucl-backgroundDark01L.webp')] bg-cover bg-center sm:h-[786px] w-full border-t border-uefa-dark-gray">
				<div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 sm:gap-8 h-full pt-4 sm:pt-7 pb-4 sm:pb-0">
					<div className="max-w-[1350px] mx-auto">
						<Carousel opts={{ slidesToScroll: 12 }}>
							<CarouselContent className="ml-2 gap-2.5">
								{stories.map((story) => (
									<div key={story.id} className="max-w-[102px]">
										<StoriesCircle
											url={story.url}
											storiesAlt={story.text}
											storiesImg={story.image}
											storiesText={story.text}
										/>
									</div>
								))}
							</CarouselContent>
							<CarouselPrevious className="-left-8 top-14 -translate-y-1/2" />
							<CarouselNext className="-right-8 top-14 -translate-y-1/2" />
						</Carousel>
					</div>
					<div className="flex sm:h-[555px] gap-4 sm:gap-8">
						<HoverCard
							destination="https://www.uefa.com/uefachampionsleague/news/0291-1bd3e562007d-fe980c1bdfca-1000--what-to-look-out-for-on-wednesday-and-thursday-of-uefa-ch/"
							img={uclHeadlinesWhatToLookForWedThu}
							imgDescription="Kane Bellingham Mbappe Sancho"
							title="Semi-final first legs: What to look out for"
							width={894}
							height={503}
						/>
						<div className="bg-uefa-dark-blue-quaternary w-[92%] mx-auto sm:w-[35%] h-[90%] rounded-md">
							<h1
								className="font-champions-bold hidden sm:flex text-white text-2xl px-4 pt-3 pb-1.5"
							>
								Headlines
							</h1>
							<div className="flex flex-col divide-y divide-gray-400/40 mx-4">
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0268-12157d69ce2d-9f011c70f6fa-1000--new-format-for-champions-league-post-2024-everything-you-ne/"
									img={uclNewFormat}
									imgDescription="New Champions League Format"
									title="New Champions League Format"
								/>
								<HeadlineItem
									destination="https://gaming.uefa.com/en/uclfantasy/fantasy-landing"
									img={uclPickFantasySquad}
									imgDescription="Pick Fantasy Squad"
									title="Pick your Fantasy Squad!"
								/>
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0291-1bde769a6cbd-d11bdd6e3ce1-1000--champions-league-matchday-1-possible-line-ups-and-team-news/"
									img={uclPredictedLineups}
									imgDescription="Predicted Lineups"
									title="Watch: Predicted Lineups"
								/>
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0291-1bdd14ac892f-e7faba8919d6-1000--champions-league-form-guide-scores-results-league-positi/"
									img={uclFormGuide}
									imgDescription="Form Guide"
									title="Champions League form guide"
								/>
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0291-1bc1ed5a7dfc-022b586a26e4-1000--meet-the-champions-league-inaugural-league-phase-teams/"
									img={uclLeaguePhaseTeams}
									imgDescription="League phase"
									title="Meet the league phase teams"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}