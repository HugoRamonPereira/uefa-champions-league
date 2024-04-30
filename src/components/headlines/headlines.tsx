import { championsBold, championsRegular } from "@/app/layout";
import Image from "next/image";
import Link from "next/link";
import HeadlineItem from "../headline-item/headline-item";
import uclFormGuide from "../../../public/assets/images/ucl-form-guide.png";
import uclNewFormat from "../../../public/assets/images/ucl-new-format.png";
import uclShow from "../../../public/assets/images/ucl-show.png";
import uclSemifinalists from "../../../public/assets/images/ucl-final-four-2024.png";
import uclWatchAll32Final8 from "../../../public/assets/images/ucl-watch-all-32-lat-eight-goals.png";
import uclSemiFinalsMbappeKaneSanchoBellingam from "../../../public/assets/images/ucl-semifinals-kane-bellingham-mbappe-sancho.png"
import HoverCard from "../hover-card/hover-card";

export default function Headlines() {
  return (
    <section className="bg-[url('/assets/images/ucl-backgroundDark01L.webp')] bg-cover bg-center sm:h-[575px] w-full border-t border-uefa-dark-gray">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row gap-4 sm:gap-8 h-full pt-4 sm:pt-7 pb-4 sm:pb-0">
        <HoverCard
          destination="https://www.uefa.com/uefachampionsleague/news/028c-1ab6365b621d-7f6c40a13fbf-1000--semi-final-first-legs-what-to-look-out-for/"
          img={uclSemiFinalsMbappeKaneSanchoBellingam}
          imgDescription="Kane Bellingham Mbappe Sancho"
          title="Semi-final first legs: What to look out for"
          width={894}
          height={503}
        />
        <div className="bg-uefa-dark-blue-quaternary w-[92%] mx-auto sm:w-[35%] h-[90%] rounded-md">
          <p className={`${championsRegular.className} hidden sm:flex text-white text-2xl px-4 pt-3 pb-1.5 `}>Headlines</p>
          <div className="flex flex-col divide-y divide-gray-400/40 mx-4">
            <HeadlineItem
              destination="https://www.uefa.com/uefachampionsleague/news/0285-18f7ba5f4685-023b38b401cf-1000--champions-league-form-guide/"
              img={uclFormGuide}
              imgDescription="Champions League form guide"
              title="Champions League form guide"
            />
            <HeadlineItem
              destination="https://www.uefa.com/uefachampionsleague/news/0268-12157d69ce2d-9f011c70f6fa-1000--new-champions-league-format/"
              img={uclNewFormat}
              imgDescription="New Champions League format"
              title="New Champions League format"
            />
            <HeadlineItem
              destination="https://links.uefa.tv/ucl-show-26-uefacom"
              img={uclShow}
              imgDescription="UCL Show"
              title="Watch: UCL Show"
            />
            <HeadlineItem
              destination="https://www.uefa.com/uefachampionsleague/news/028c-1aad7af4a471-75bd5cff54cf-1000--meet-the-semi-finalists/"
              img={uclSemifinalists}
              imgDescription="Semi-finalists"
              title="Meet the semi-finalists"
            />
            <HeadlineItem
              destination="https://www.uefa.com/uefachampionsleague/video/highlights/"
              img={uclWatchAll32Final8}
              imgDescription="Watch all 32 last-eight goals"
              title="Watch all 32 last-eight goals"
            />
          </div>
        </div>
      </div>
    </section>
  )
}