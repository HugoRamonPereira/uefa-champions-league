import Image from "next/image";
import { championsBold } from "@/app/layout";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import rodrygoMbappe from '/public/assets/images/moments/moments-rodrygo-mbappe.webp'
import musialaGuerreiro from '/public/assets/images/moments/moments-musiala-guerrero.webp'
import zenoDebast from '/public/assets/images/moments/moments-zeno-debast.webp'
import kenanYildis from '/public/assets/images/moments/moments-kenan-yildis.webp'
import jurgenKlopp from '/public/assets/images/moments/moments-jurgen-klopp.webp'
import mourinho from '/public/assets/images/moments/moments-mourinho.webp'
import thomasTuchel from '/public/assets/images/moments/moments-thomas-tuchel.webp'
import { Badge } from "../ui/badge";

export default function Moments() {
  return (
			<section className="w-full h-fit bg-uefa-gray">
				<div className="max-w-[1400px] mx-auto w-full">
					<div className="max-w-[1400px] mx-auto flex items-center justify-between w-full">
						<p
							className={`${championsBold.className} text-2xl sm:text-4xl py-6`}
						>
							Moments
						</p>
						<Link
							href="https://www.uefa.com/uefachampionsleague/video/moments/"
							className="flex items-center gap-2 text-lg text-uefa-blue hover:text-uefa-blue-lightest transition-colors duration-150 font-semibold"
						>
							See all moments
							<ChevronRight />
						</Link>
					</div>
					<div className="flex gap-4">
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/82947945-4e7c-95e8-b479-3a151461c7fa?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={rodrygoMbappe}
								alt="RodrygoMbappe"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Rodrygo ➡️ Mbappé</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/5b927b6f-59f8-015c-ee60-3a15145fd627?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={musialaGuerreiro}
								alt="MusialaGuerreiro"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Musiala ➡️ Guerreiro</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/410b5a37-4d96-dcd6-1c67-3a1514646f6b?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={zenoDebast}
								alt="ZenoDebast"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Zeno Debast ⚽️</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/a01cd553-b870-ae98-4c8e-3a1514630c68?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={kenanYildis}
								alt="KenanYildis"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Kenan Yildiz ⚽️</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/a258c698-f932-5b2b-fd24-3a14fcdd742d?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={jurgenKlopp}
								alt="JurgenKlopp"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Jürgen Klopp 🙌</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/6d38b782-8d98-2041-c2a5-3a14fcdc49a7?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={mourinho}
								alt="Mourinho"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">José Mourinho 🤣</p>
						</Link>
						<Link
							href="https://www.uefa.com/uefachampionsleague/#ucl-all-clips/ucl-all-clips/22f5a0a9-0a8f-66fc-dc82-3a14fcdb6df4?openedReason=clipListTap"
							className="relative"
						>
							<Image
								src={thomasTuchel}
								alt="ThomasTuchel"
								width={190}
								height={285}
								className="rounded-xl"
							/>
							<Badge className="bg-uefa-light-blue-badge text-black absolute top-2 left-2 pt-0.5 px-1">
								NEW
							</Badge>
							<p className="absolute bottom-2 left-2 text-white text-semibold">Thomas Tuchel 😁</p>
						</Link>
					</div>
				</div>
			</section>
		);
}