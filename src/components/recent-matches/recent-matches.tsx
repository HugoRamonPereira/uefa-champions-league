"use client";

import React from "react";
import FootballField from "../../../public/assets/icons/football-field";
import MatchCard from "../cards/match-card/match-card";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { matches } from "@/data/data";
import Link from "next/link";

export default function RecentMatches() {

	return (
		<section className="h-32 bg-uefa-dark-blue-main flex w-full">
			<div className="w-[1400px] flex items-center justify-between mx-auto">
				<div className="w-full max-w-[1100px] ml-10">
					<Carousel>
						<CarouselContent className="ml-1 gap-4">
							{matches.map((match) => (
								<MatchCard
									key={match.id}
									matchInfo={match.date}
									teamOne={match.homeTeamName}
									teamOneImage={match.homeTeamShield}
									teamOneAlt={match.homeTeamName}
									teamTwo={match.AwayTeamName}
									teamTwoAlt={match.AwayTeamName}
									teamTwoImage={match.awayTeamShield}
									teamOneScore={match.homeTeamScore}
									teamTwoScore={match.awayTeamScore}
                  matchUrl={match.matchUrl}
								/>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

				<div className="hidden sm:flex justify-end">
					<Link
						href="https://www.uefa.com/uefachampionsleague/fixtures-results/"
						className="flex items-center gap-2 group text-base font-medium text-uefa-cyan hover:text-uefa-dark-blue-main border-2 border-uefa-cyan hover:bg-uefa-cyan px-4 py-2 rounded-lg"
					>
						<FootballField className="fill-uefa-cyan group-hover:fill-uefa-dark-blue-main rotate-90" />
						View all matches
					</Link>
				</div>
			</div>
		</section>
	);
}
