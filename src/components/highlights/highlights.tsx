import { championsBold } from "@/app/layout";
import { Button } from "../ui/button";
import HighlightsCard from "../cards/highlights-card/highlights-card";
import { highlights } from "@/data/data";
import { Carousel, CarouselContent } from "../ui/carousel";
import NavigationPrev from "../navigation-button/navigation-prev";
import NavigationNext from "../navigation-button/navigation-next";
import Link from "next/link";

export default function Highlights() {
  return (
			<section className="w-full h-[540px] bg-uefa-dark-blue-quaternary">
				<div className="w-full max-w-[1400px] mx-auto">
					<div className="flex items-center justify-between">
						<p
							className={`${championsBold.className} text-2xl text-white sm:text-4xl py-6`}
						>
							Highlights
						</p>
						<div className="flex gap-2">
							<NavigationPrev className="text-uefa-cyan/90" />
							<NavigationNext />
						</div>
					</div>
					<div className="flex gap-8">
						<Carousel opts={{ slidesToScroll: 4 }}>
							<CarouselContent className="ml-0 flex justify-between w-[1400px]">
								{highlights.map((highlight) => (
									<HighlightsCard
										key={highlight.id}
										img={highlight.image}
										imgDescription={highlight.info}
										destination={highlight.url}
										highlightDate={highlight.time}
										highlightDescription={highlight.info}
										width={329}
										height={185}
									>
										<div className="px-2">
											<p className="text-uefa-medium-gray font-light text-sm">
												{highlight.time}
											</p>
											<p className="text-white font-medium text-xl">
												{highlight.info}
											</p>
										</div>
									</HighlightsCard>
								))}
							</CarouselContent>
						</Carousel>
					</div>
					<div className="mt-8">
						<Link
							href="https://www.uefa.com/uefachampionsleague/video/highlights/"
							className="w-[92%] sm:w-[calc(25%-24px)] h-12 mx-auto sm:mx-0 flex items-center justify-center gap-2 group text-base font-medium text-uefa-cyan hover:text-uefa-dark-blue-main border-2 border-uefa-cyan hover:bg-uefa-cyan px-4 py-2 rounded-lg"
						>
							Watch all highlights
						</Link>
					</div>
				</div>
			</section>
		);
}