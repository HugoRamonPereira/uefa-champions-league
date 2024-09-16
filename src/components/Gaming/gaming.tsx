import { championsBold } from "@/app/layout";
import { Button } from "../ui/button";
import GamingCard from "../cards/gaming-card/gaming-card";

export default function Gaming() {
  return (
    <section
    className="bg-[url('/assets/images/ucl-gaming-background.png')] bg-cover bg-center w-full h-[540px] bg-uefa-dark-blue-quaternary">
      <div className="max-w-[1400px] mx-auto">
        <p className={`${championsBold.className} text-2xl text-white sm:text-4xl py-6 ml-4`}>Gaming</p>
      </div>
      <div>
        <GamingCard
          // gamingLabel={SonyPs5}
          destination="https://gaming.uefa.com/en/uclpredictor/"
          gamingButtonText="Play Predictor"
          gamingTitle="Predictor"
          gamingDescription="Predict every Champions League scoreline"
        />
        <GamingCard
          // gamingLabel={SonyPs5}
          destination="https://gaming.uefa.com/en/uclbracket/"
          gamingButtonText="Play Bracket"
          gamingTitle="Bracket"
          gamingDescription="Pick the winner of each knockout tie"
        />
        <GamingCard
          // gamingLabel={SonyPs5}
          destination="https://gaming.uefa.com/en/uclfantasy/create-team"
          gamingButtonText="Play Fantasy"
          gamingTitle="Fantasy Football"
          gamingDescription=""
        />
      </div>
      <div className="mt-8">
        <Button variant={"uefa-cyan-outline"} className="w-[92%] sm:w-[calc(25%-24px)] h-12 mx-auto sm:mx-0 border">See all games</Button>
      </div>
    </section>
  )
}