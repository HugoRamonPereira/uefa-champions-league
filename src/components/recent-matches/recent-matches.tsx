"use client";

import React, { Component } from "react";
import FootballField from "../../../public/assets/icons/football-field";
import MatchCard from "../cards/match-card/match-card";
import { Button } from "../ui/button";

import arsenal from "/public/assets/images/phase-table/arsenal-table.png";
import astonVilla from "/public/assets/images/phase-table/aston-villa-table.png";
import atalanta from "/public/assets/images/phase-table/atalanta-table.png";
import atlMadrid from "/public/assets/images/phase-table/atl-madrid-table.png";
import bDortmund from "/public/assets/images/phase-table/b-dortmund-table.png";
import barcelona from "/public/assets/images/phase-table/barcelona-table.png";
import bayern from "/public/assets/images/phase-table/bayern-table.png";
import benfica from "/public/assets/images/phase-table/benfica-table.png";
import bologna from "/public/assets/images/phase-table/bologna-table.png";
import brest from "/public/assets/images/phase-table/brest-table.png";
import celtic from "/public/assets/images/phase-table/celtic-table.png";
import clubBrugge from "/public/assets/images/phase-table/club-brugge-table.png";
import crvenaZvezda from "/public/assets/images/phase-table/crvena-zvezda-table.png";
import feyenoord from "/public/assets/images/phase-table/feyenoord-table.png";
import girona from "/public/assets/images/phase-table/girona-table.png";
import gnkDinamo from "/public/assets/images/phase-table/gnk-dinamo-table.png";
import inter from "/public/assets/images/phase-table/inter-table.png";
import juventus from "/public/assets/images/phase-table/juventus-table.png";
import leipzig from "/public/assets/images/phase-table/leipzig-table.png";
import leverkusen from "/public/assets/images/phase-table/leverkusen-table.png";
import lille from "/public/assets/images/phase-table/lille-table.png";
import liverpool from "/public/assets/images/phase-table/liverpool-table.png";
import manCity from "/public/assets/images/phase-table/man-city-table.png";
import milan from "/public/assets/images/phase-table/milan-table.png";
import monaco from "/public/assets/images/phase-table/monaco-table.png";
import paris from "/public/assets/images/phase-table/paris-table.png";
import psv from "/public/assets/images/phase-table/psv-table.png";
import realMadrid from "/public/assets/images/phase-table/real-madrid-table.png";
import sBratislava from "/public/assets/images/phase-table/s-bratislava-table.png";
import salzburg from "/public/assets/images/phase-table/salzburg-table.png";
import shakhtar from "/public/assets/images/phase-table/shakhtar-table.png";
import spartaPraha from "/public/assets/images/phase-table/sparta-praha-table.png";
import sporting from "/public/assets/images/phase-table/sporting-table.png";
import sturmGraz from "/public/assets/images/phase-table/sturm-graz-table.png";
import stuttgart from "/public/assets/images/phase-table/stuttgart-table.png";
import youngBoys from "/public/assets/images/phase-table/young-boys-table.png";

import {
	Carousel,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const matches = [
	{
		id: 1,
		date: "Tomorrow, 13:45",
		homeTeamName: "Young Boys",
		AwayTeamName: "Aston Villa",
		homeTeamShield: youngBoys,
		awayTeamShield: astonVilla,
	},
	{
		id: 2,
		date: "Tomorrow, 13:45",
		homeTeamName: "Juventus",
		AwayTeamName: "PSV",
		homeTeamShield: juventus,
		awayTeamShield: psv,
	},
	{
		id: 3,
		date: "Tomorrow, 16:00",
		homeTeamName: "Sporting CP",
		AwayTeamName: "Lille",
		homeTeamShield: sporting,
		awayTeamShield: lille,
	},
	{
		id: 4,
		date: "Tomorrow, 16:00",
		homeTeamName: "Real Madrid",
		AwayTeamName: "Stuttgart",
		homeTeamShield: realMadrid,
		awayTeamShield: stuttgart,
	},
	{
		id: 5,
		date: "Tomorrow, 16:00",
		homeTeamName: "Milan",
		AwayTeamName: "Liverpool",
		homeTeamShield: milan,
		awayTeamShield: liverpool,
	},
	{
		id: 6,
		date: "Tomorrow, 16:00",
		homeTeamName: "Bayern",
		AwayTeamName: "GNK Dinamo",
		homeTeamShield: bayern,
		awayTeamShield: gnkDinamo,
	},
	{
		id: 7,
		date: "18 Sep, 13:45",
		homeTeamName: "Sparta Praha",
		AwayTeamName: "Salzburg",
		homeTeamShield: spartaPraha,
		awayTeamShield: salzburg,
	},
	{
		id: 8,
		date: "18 Sep, 13:45",
		homeTeamName: "Bologna",
		AwayTeamName: "Shakhtar",
		homeTeamShield: bologna,
		awayTeamShield: shakhtar,
	},
	{
		id: 9,
		date: "18 Sep, 16:00",
		homeTeamName: "Paris",
		AwayTeamName: "Girona",
		homeTeamShield: paris,
		awayTeamShield: girona,
	},
	{
		id: 10,
		date: "18 Sep, 16:00",
		homeTeamName: "Man City",
		AwayTeamName: "Inter",
		homeTeamShield: manCity,
		awayTeamShield: inter,
	},
	{
		id: 11,
		date: "18 Sep, 16:00",
		homeTeamName: "Celtic",
		AwayTeamName: "S. Bratislava",
		homeTeamShield: celtic,
		awayTeamShield: sBratislava,
	},
	{
		id: 12,
		date: "18 Sep, 16:00",
		homeTeamName: "Club Brugge",
		AwayTeamName: "B. Dormund",
		homeTeamShield: clubBrugge,
		awayTeamShield: bDortmund,
	},
	{
		id: 13,
		date: "19 Sep, 13:45",
		homeTeamName: "Feyenoord",
		AwayTeamName: "Leverkusen",
		homeTeamShield: feyenoord,
		awayTeamShield: leverkusen,
	},
	{
		id: 14,
		date: "19 Sep, 13:45",
		homeTeamName: "Crvena Zvezda",
		AwayTeamName: "Benfica",
		homeTeamShield: crvenaZvezda,
		awayTeamShield: benfica,
	},
	{
		id: 15,
		date: "19 Sep, 16:00",
		homeTeamName: "Brest",
		AwayTeamName: "Sturm Graz",
		homeTeamShield: brest,
		awayTeamShield: sturmGraz,
	},
	{
		id: 16,
		date: "19 Sep, 16:00",
		homeTeamName: "Monaco",
		AwayTeamName: "Barcelona",
		homeTeamShield: monaco,
		awayTeamShield: barcelona,
	},
	{
		id: 17,
		date: "19 Sep, 16:00",
		homeTeamName: "Atl. Madrid",
		AwayTeamName: "Leipzig",
		homeTeamShield: atlMadrid,
		awayTeamShield: leipzig,
	},
	{
		id: 18,
		date: "19 Sep, 16:00",
		homeTeamName: "Atalanta",
		AwayTeamName: "Arsenal",
		homeTeamShield: atalanta,
		awayTeamShield: arsenal,
	},
];

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
