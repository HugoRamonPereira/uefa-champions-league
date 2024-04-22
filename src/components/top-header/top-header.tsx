import Image from "next/image";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CaretDown from "../../../public/assets/icons/caret-down";
import UserCircle from "../../../public/assets/icons/user-circle";
import { X } from "lucide-react";
import Link from "next/link";
import RegularCard from "../cards/regular-card/regular-card";
import uefaGaming from "../../../public/assets/images/uefagaming.svg";
import uefaTv from "../../../public/assets/images/uefatv.svg";
import shoppingBag from "../../../public/assets/icons/shopping-bag.svg";
import footballField from "../../../public/assets/icons/football-field.svg"
import ranking from "../../../public/assets/icons/ranking.svg";
import ticket from "../../../public/assets/icons/ticket.svg";
import CompetitionItem from "../competition-item/competition-item";
import uefaBall from "../../../public/assets/images/ucl-ball-logo-dark.svg";
import uefaEuropaLeague from "../../../public/assets/images/uefa-europa-league.svg";
import uefaSuperCup from "../../../public/assets/images/uefa-super-cup.svg";
import uefaConferenceLeague from "../../../public/assets/images/europa-conference-league.svg";
import uefaYouthLeague from "../../../public/assets/images/uefa-youth-league.svg";
import under20International from "../../../public/assets/images/under-20-international.svg";
import uefaEuropeanQualifiers from "../../../public/assets/images/uefa-european-qualifiers.svg";
import uefaEuro2024 from "../../../public/assets/images/uefa-euro-2024.svg";
import uefaNationsLeague from "../../../public/assets/images/uefa-nations-league.svg";
import finalissima from "../../../public/assets/images/finalissima.svg";
import under21 from "../../../public/assets/images/under-21.svg";
import uefaWomenChampionsLeague from "../../../public/assets/images/uefa-women-champions-league.svg";
import uefaWomenEuro from "../../../public/assets/images/uefa-women-euro.svg";
import uefaWomenEuropeanQualifiers from "../../../public/assets/images/uefa-women-european-qualifiers.svg";
import uefaWomenNationsLeague from "../../../public/assets/images/uefa-women-nation-league.svg";
import womenFinalissima from "../../../public/assets/images/women-finalissima.svg";
import womenWorldcup from "../../../public/assets/images/women-worldcup.svg";
import uefaWomenUnder19 from "../../../public/assets/images/uefa-women-under-19.svg";
import uefaWomenUnder17 from "../../../public/assets/images/uefa-women-under-17.svg";
import youthUnder19 from "../../../public/assets/images/uefa-youth-under-19.svg";
import youthUnder17 from "../../../public/assets/images/uefa-youth-under-17.svg";
import uefaRegionsCup from "../../../public/assets/images/uefa-regions-cup.svg";
import uefaFutsalChampionsLeague from "../../../public/assets/images/uefa-futsal-champions-league.svg";
import uefaFutsalEuro from "../../../public/assets/images/uefa-futsal-euro.svg";
import futsalFinalissima from "../../../public/assets/images/futsal-finalissima.svg";
import uefaWomenFutsalEuro from "../../../public/assets/images/uefa-women-futsal-euro.svg";
import under19FutsalEuro from "../../../public/assets/images/under-19-futsal-euro.svg";
import fifaFutsalWorldcup from "../../../public/assets/images/fifa-futsal-worldcup.svg";

export default function TopHeader() {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-between">
      <div className="w-full max-w-[1450px] px-4 mx-auto flex items-center justify-between relative">
        <section className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                <Image src="/assets/images/uefa-logo.svg" alt="UEFA logo" width={71} height={71} />
                <CaretDown className="fill-white rotate-45 mb-[2px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-uefa-dark-cyan">
              <div>
                <section className="w-full mb-6">
                  <div className="w-full max-w-[1400px] mx-auto py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/images/uefa-logo.svg" alt="UEFA logo" width={71} height={71} />
                      <CaretDown className="fill-white mt-[6px] rotate-[225deg]" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="border-r border-gray-400/55">
                          <Button className="flex gap-2 bg-transparent hover:bg-transparent pr-0 sm:pr-5 h-6 text-sm">
                            Log in
                            <UserCircle className="fill-white w-5 h-5" />
                          </Button>
                        </div>
                        <DropdownMenuItem
                          className="p-0"
                        >
                          <Button
                            variant="uefa-link-round"
                            className="p-0 w-[30px] h-[30px] border-none bg-gray-700/50 hover:bg-gray-700 ml-[18px] data-[state=closed]:zoom-out-95"
                          >
                            <X width={20} height={20} strokeWidth={2.5} />
                          </Button>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="w-full h-[55rem] overflow-y-auto">
                  <div className="w-full max-w-[1400px] mx-auto flex gap-10">
                    <div className="w-1/3 h-96 flex flex-col gap-8">
                      <div className="w-11/12 bg-uefa-cyan-gray rounded-lg p-6 flex flex-col gap-8 pb-8 border-2 border-uefa-cyan-gray hover:border-gray-400 transition-colors duration-150">
                        <div>
                          <p className="text-xl text-gray-300/80">UEFA.com</p>
                        </div>
                        <div className="flex gap-12">
                          <div className="flex flex-col gap-4 text-sm">
                            <Link
                              href="https://www.uefa.com/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              Home
                            </Link>
                            <Link
                              href="https://www.uefa.com/nationalassociations/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              National Associations
                            </Link>
                            <Link
                              href="https://www.uefa.com/development/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              Develpment
                            </Link>
                            <Link
                              href="https://www.uefa.com/news-media/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              News & Media
                            </Link>
                          </div>
                          <div className="flex flex-col gap-4 text-white text-sm">
                            <Link
                              href="https://www.uefa.com/about/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              About
                            </Link>
                            <Link
                              href="https://www.uefa.com/running-competitions/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              unning Competitions
                            </Link>
                            <Link
                              href="https://www.uefa.com/sustainability/"
                              target="_blank"
                              className="text-gray-200 hover:text-white"
                            >
                              Sustainability
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <RegularCard
                          destination="https://gaming.uefa.com/"
                          cardIcon={uefaGaming}
                          cardIconDescription="UEFA Tv"
                        />
                        <RegularCard
                          destination="https://links.uefa.tv/uefacom-header"
                          cardIcon={uefaTv}
                          cardIconDescription="UEFA Tv"
                        />
                        <RegularCard
                          destination="https://www.uefa.com/match-calendar/"
                          cardIcon={footballField}
                          cardIconDescription="UEFA Tv"
                          text="Match calendar"
                        />
                        <RegularCard
                          destination="https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav"
                          cardIcon={shoppingBag}
                          cardIconDescription="UEFA Tv"
                          text="Store (national...)"
                        />
                        <RegularCard
                          destination="https://store.uefa.com/"
                          cardIcon={shoppingBag}
                          cardIconDescription="UEFA Tv"
                          text="Store (clubs)"
                        />
                        <RegularCard
                          destination="https://www.uefa.com/nationalassociations/uefarankings/"
                          cardIcon={ranking}
                          cardIconDescription="UEFA Tv"
                          text="UEFA rankings"
                        />
                        <RegularCard
                          destination="https://www.uefa.com/tickets/"
                          cardIcon={ticket}
                          cardIconDescription="UEFA Tv"
                          text="Tickets and hospitality"
                        />
                      </div>
                    </div>
                    <div className="w-2/3 flex flex-col gap-8 pb-20">
                      <p className="text-4xl text-white">UEFA competitions</p>
                      <div className="flex flex-col gap-6">
                        <p className="text-3xl text-white">Clubs</p>
                        <div className="flex items-start justify-start gap-4">
                          <CompetitionItem
                            destination="https://www.uefa.com/uefachampionsleague/"
                            img={uefaBall}
                            imgDescription="Champions League"
                            title="UEFA Champions League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/uefaeuropaleague/"
                            img={uefaEuropaLeague}
                            imgDescription="Europa League"
                            title="UEFA Europa League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/uefasupercup/"
                            img={uefaSuperCup}
                            imgDescription="Super Cup"
                            title="UEFA Super Cup"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/uefaeuropaconferenceleague/"
                            img={uefaConferenceLeague}
                            imgDescription="Conference League"
                            title="UEFA Europa Conference League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/uefayouthleague/"
                            img={uefaYouthLeague}
                            imgDescription="Youth League"
                            title="UEFA Youth League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/under20intercontinental/"
                            img={under20International}
                            imgDescription="Under-20"
                            title="Under-20 International Cup"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-3xl text-white">National</p>
                        <div className="flex justify-start gap-4">
                          <CompetitionItem
                            destination="https://www.uefa.com/european-qualifiers/"
                            img={uefaEuropeanQualifiers}
                            imgDescription="European Qualifiers"
                            title="European Qualifiers"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/euro2024/"
                            img={uefaEuro2024}
                            imgDescription="Euro 2024"
                            title="UEFA EURO 2024"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/uefanationsleague/"
                            img={uefaNationsLeague}
                            imgDescription="Nations League"
                            title="UEFA Nations League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/finalissima/"
                            img={finalissima}
                            imgDescription="Finalissima"
                            title="Finalissima"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/under21/"
                            img={under21}
                            imgDescription="Under-21"
                            title="Under-21"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-3xl text-white">Women</p>
                        <div className="grid grid-cols-6 gap-6">
                          <CompetitionItem
                            destination="https://www.uefa.com/womenschampionsleague/"
                            img={uefaWomenChampionsLeague}
                            imgDescription="Women's Champions League"
                            title="UEFA Women's Champions League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womenseuro/"
                            img={uefaWomenEuro}
                            imgDescription="Women's Euro"
                            title="UEFA Women's EURO"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womenseuropeanqualifiers/"
                            img={uefaWomenEuropeanQualifiers}
                            imgDescription="Women's Europeans Qualifiers"
                            title="Women's European Qualifiers"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensnationsleague/"
                            img={uefaWomenNationsLeague}
                            imgDescription="Women's Nations League"
                            title="UEFA Women's Nations League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensfinalissima/"
                            img={womenFinalissima}
                            imgDescription="Finalissima Women"
                            title="Women's Finalissima"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensworldcup/"
                            img={womenWorldcup}
                            imgDescription="Fifa U-20 Worldcup"
                            title="FIFA Women's World Cup"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensunder19/"
                            img={uefaWomenUnder19}
                            imgDescription="U-19 Women"
                            title="Women's Under-19"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensunder17/"
                            img={uefaWomenUnder17}
                            imgDescription="U-20 Women"
                            title="Women's Under-17"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-3xl text-white">Youth</p>
                        <div className="flex justify-start gap-4">
                          <CompetitionItem
                            destination="https://www.uefa.com/under19/"
                            img={youthUnder19}
                            imgDescription="Youth U-19"
                            title="Under 19"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/under17/"
                            img={youthUnder17}
                            imgDescription="Youth U-17"
                            title="Under 17"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/regionscup/"
                            img={uefaRegionsCup}
                            imgDescription="Regions' Cup"
                            title="UEFA Regions' Cup"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-6">
                        <p className="text-3xl text-white">Futsal</p>
                        <div className="flex items-start justify-center gap-4">
                          <CompetitionItem
                            destination="https://www.uefa.com/uefafutsalchampionsleague/"
                            img={uefaFutsalChampionsLeague}
                            imgDescription="Futsal Champions League"
                            title="UEFA Futsal Champions League"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/futsaleuro/"
                            img={uefaFutsalEuro}
                            imgDescription="Futsal Euro"
                            title="Futsal Euro"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/futsalfinalissima/"
                            img={futsalFinalissima}
                            imgDescription="Futsal Finalissima"
                            title="Futsal Finalissima"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/womensfutsaleuro/"
                            img={uefaWomenFutsalEuro}
                            imgDescription="Futsal Euro Women's"
                            title="UEFA Women's Futsal EURO"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/futsalunder19/"
                            img={under19FutsalEuro}
                            imgDescription="Futsal U-19 Euro"
                            title="Under 19 Futsal EURO"
                          />
                          <CompetitionItem
                            destination="https://www.uefa.com/futsalworldcup/"
                            img={fifaFutsalWorldcup}
                            imgDescription="Fifa Futsal Worldcup"
                            title="Fifa Futsal Worldcup"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
        <section>
          <Button className="flex gap-2 bg-transparent hover:bg-transparent pr-0 sm:pr-4">
            Log in
            <UserCircle className="fill-white w-5 h-5" />
          </Button>
        </section>
      </div>
    </header>
  )
}