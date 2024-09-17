import { championsRegular } from "@/app/layout";
import HeadlineItem from "../headline-item/headline-item";
import uclNewFormat from "../../../public/assets/images/ucl-new-format.jpeg";
import uclWhatToLookOutFor from "../../../public/assets/images/ucl-what-to-lookout-in-every-game.jpeg";
import uclPredictedLineups from "../../../public/assets/images/ucl-salah-predicted-lineups.webp";
import uclFormGuide from "../../../public/assets/images/ucl-form-guide.png";
import uclLeaguePhaseTeams from "../../../public/assets/images/ucl-league-phase-teams.webp";
import uclFantasyMusialaSalahVini from "../../../public/assets/images/ucl-headlines-salah-musiala-vini.jpeg";
import HoverCard from "../hover-card/hover-card";
import { StoriesCircle } from "../stories-circle/stories-circle";
import storiesUclDraw from "/public/assets/images/stories/stories-ucl-draw.webp";
import storiesLeaguePhaseClubs from "/public/assets/images/stories/stories-league-phase-clubs.webp";
import storiesPlayUclFantasy from "/public/assets/images/stories/stories-play-ucl-fantasy.webp";
import storiesNewFormat from "/public/assets/images/stories/stories-new-format.webp";
import storiesPredictSix from "/public/assets/images/stories/stories-predict-six.webp";
import storiesSummerSignings from "/public/assets/images/stories/stories-summer-signings.webp";
import storiesClassicMd1Goals from "/public/assets/images/stories/stories-classic-md1-goals.webp";
import storiesBarcelona from "/public/assets/images/stories/stories-barcelona.webp";
import storiesGreatUclGoals from "/public/assets/images/stories/stories-great-ucl-goals.webp";
import storiesBrest from "/public/assets/images/stories/stories-brest.webp";
import storiesAtalanta from "/public/assets/images/stories/stories-atalanta.webp";
import storiesGnkDinamo from "/public/assets/images/stories/stories-gnk-dinamo.webp";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../ui/carousel";

const stories = [
	{
		id: 1,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/312175c1-9dfa-beeb-2754-3a14b4867f54?openedReason=storyListTap",
		image: storiesUclDraw,
		text: "All clubs' opponents",
	},
	{
		id: 2,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/6d065975-5cd8-bd96-e242-3a14a63b0aaa?openedReason=storyListTap",
		image: storiesLeaguePhaseClubs,
		text: "League phase clubs ⚽",
	},
	{
		id: 3,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/8516ddf0-9b01-cd32-0311-3a149fb5c4a6?openedReason=storyListTap",
		image: storiesPlayUclFantasy,
		text: "Play UCL Fantasy 📱",
	},
	{
		id: 4,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/62c66926-29dd-3dd7-5830-3a144884d6a9?openedReason=storyListTap",
		image: storiesNewFormat,
		text: "New Format 2024/25 🏆",
	},
	{
		id: 5,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/442a7a8b-5d6a-3b16-35f3-3a14f869ee37?openedReason=storyListTap",
		image: storiesPredictSix,
		text: "Predict Six 📱⚽",
	},
	{
		id: 6,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/bea463e5-2bd5-d395-595a-3a150c710cb9?openedReason=storyListTap",
		image: storiesSummerSignings,
		text: "Summer signings 💰",
	},
	{
		id: 7,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/2430518b-e786-dcbb-6684-3a150c4ee5e9?openedReason=storyListTap",
		image: storiesClassicMd1Goals,
		text: "Classic MD1 goals ⚽",
	},
	{
		id: 8,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/c011469b-16be-53e8-2d9a-3a150be89cf6?openedReason=storyListTap",
		image: storiesBarcelona,
		text: "Barcelona 📸",
	},
	{
		id: 9,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/4833cc90-9ace-a041-6e29-3a145d64f5ed?openedReason=storyListTap",
		image: storiesGreatUclGoals,
		text: "Great UCL goals ⚽",
	},
	{
		id: 10,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/e56957e0-f56a-2475-93b3-3a14fc7d6ba4?openedReason=storyListTap",
		image: storiesBrest,
		text: "Brest 📸",
	},
	{
		id: 11,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/d10a97c1-cf1e-c61d-2ec8-3a150bf4f274?openedReason=storyListTap",
		image: storiesAtalanta,
		text: "Atalanta 📸",
	},
	{
		id: 12,
		url: "https://www.uefa.com/uefachampionsleague/#ucl-top-stories/83c9036f-4438-1d0d-6021-3a150c159ad2?openedReason=storyListTap",
		image: storiesGnkDinamo,
		text: "GNK Dinamo 📸",
	},
];

export default function Headlines() {
  return (
			<section className="bg-[url('/assets/images/ucl-backgroundDark01L.webp')] bg-cover bg-center sm:h-[786px] w-full border-t border-uefa-dark-gray">
				<div className="w-full max-w-[1400px] mx-auto flex flex-col gap-4 sm:gap-8 h-full pt-4 sm:pt-7 pb-4 sm:pb-0">
					<div className="max-w-full">
						<Carousel>
							<CarouselContent className="ml-1 gap-1">
								{stories.map((story) => (
									<StoriesCircle
										key={story.id}
										url={story.url}
										storiesAlt={story.text}
										storiesImg={story.image}
										storiesText={story.text}
									/>
								))}
							</CarouselContent>
							<CarouselPrevious className="-left-8 top-14 -translate-y-1/2" />
							<CarouselNext className="-right-4 top-14 -translate-y-1/2" />
						</Carousel>
					</div>
					<div className="flex sm:h-[555px] gap-4 sm:gap-8">
						<HoverCard
							destination="https://www.uefa.com/uefachampionsleague/news/028c-1ab6365b621d-7f6c40a13fbf-1000--semi-final-first-legs-what-to-look-out-for/"
							img={uclFantasyMusialaSalahVini}
							imgDescription="Kane Bellingham Mbappe Sancho"
							title="Semi-final first legs: What to look out for"
							width={894}
							height={503}
						/>
						<div className="bg-uefa-dark-blue-quaternary w-[92%] mx-auto sm:w-[35%] h-[90%] rounded-md">
							<p
								className={`${championsRegular.className} hidden sm:flex text-white text-2xl px-4 pt-3 pb-1.5 `}
							>
								Headlines
							</p>
							<div className="flex flex-col divide-y divide-gray-400/40 mx-4">
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0268-12157d69ce2d-9f011c70f6fa-1000--new-format-for-champions-league-post-2024-everything-you-ne/"
									img={uclNewFormat}
									imgDescription="New Champions League Format"
									title="New Champions League Format"
								/>
								<HeadlineItem
									destination="https://www.uefa.com/uefachampionsleague/news/0291-1bd3e562007d-fe980c1bdfca-1000--what-to-look-out-for-in-every-game-on-uefa-champions-league-/"
									img={uclWhatToLookOutFor}
									imgDescription="What to look out for in every game"
									title="What to look out for in every game"
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