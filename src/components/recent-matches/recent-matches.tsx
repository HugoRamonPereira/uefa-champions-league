'use client'

import FootballField from "../../../public/assets/icons/football-field";
import MatchCard from "../cards/match-card/match-card";
import { Button } from "../ui/button";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import realMadrid from "../../../public/assets/icons/clubs/real-madrid.png";
import manCity from "../../../public/assets/icons/clubs/man-city.png";
import arsenal from "../../../public/assets/icons/clubs/arsenal.png";
import bayern from "../../../public/assets/icons/clubs/bayern-munchen.png";
import psg from "../../../public/assets/icons/clubs/psg.png";
import barcelona from "../../../public/assets/icons/clubs/barcelona.png";
import atlMadrid from "../../../public/assets/icons/clubs/atl-madrid.png";
import bvb from "../../../public/assets/icons/clubs/bvb.png";

export default function RecentMatches() {
  return (
    <section className="h-32 bg-uefa-dark-blue-main flex w-full">
      <div className="flex items-center justify-between w-full max-w-[1400px] mx-auto overflow-x-hidden">
        <div className="hidden sm:flex gap-4">
          <MatchCard
            teamOne="Real Madrid"
            teamOneImage={realMadrid}
            teamOneAlt="Real Madrid shield"
            teamOneScore={3}
            teamTwo="Man City"
            teamTwoAlt="Manchester City shield"
            teamTwoImage={manCity}
            teamTwoScore={3}
          />
          <MatchCard
            teamOne="Arsenal"
            teamOneImage={arsenal}
            teamOneAlt="Arsenal shield"
            teamOneScore={2}
            teamTwo="Bayern"
            teamTwoAlt="Bayern Munich shield"
            teamTwoImage={bayern}
            teamTwoScore={2}
          />
          <MatchCard
            teamOne="Paris"
            teamOneImage={psg}
            teamOneAlt="Paris Saint German shield"
            teamOneScore={2}
            teamTwo="Barcelona"
            teamTwoAlt="Barcelona shield"
            teamTwoImage={barcelona}
            teamTwoScore={3}
          />
          <MatchCard
            teamOne="Atl. Madrid"
            teamOneImage={atlMadrid}
            teamOneAlt="Atletico Madrid shield"
            teamOneScore={2}
            teamTwo="Dortmund"
            teamTwoAlt="Borussia Dortmund shield"
            teamTwoImage={bvb}
            teamTwoScore={1}
          />
        </div>
        <div className="hidden sm:flex justify-end">
          <Button variant="uefa-cyan-outline" className="flex items-center gap-2 group">
            <FootballField className="fill-uefa-cyan group-hover:fill-uefa-dark-blue-main rotate-90" />
            View all matches
          </Button>
        </div>
      </div>
    </section>
  )
}