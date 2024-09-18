"use client";

import React, { Component } from "react";
import FootballField from "../../../public/assets/icons/football-field";
import MatchCard from "../cards/match-card/match-card";
import { Button } from "../ui/button";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { matches } from "@/data/data";

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
								/>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>

				<div className="hidden sm:flex justify-end">
					<Button
						variant="uefa-cyan-outline"
						className="flex items-center gap-2 group"
					>
						<FootballField className="fill-uefa-cyan group-hover:fill-uefa-dark-blue-main rotate-90" />
						View all matches
					</Button>
				</div>
			</div>
		</section>
	);
}
