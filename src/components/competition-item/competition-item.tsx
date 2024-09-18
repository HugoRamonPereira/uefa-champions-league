import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface CompetitionItemProps {
	title: string;
	img: StaticImageData;
	imgDescription: string;
	destination: string;
}

export default function CompetitionItem({
	title,
	img,
	imgDescription,
	destination,
}: CompetitionItemProps) {
	return (
		<Link
			href={destination}
			target="_blank"
			className="flex flex-col items-center text-center gap-2 min-w-32 max-w-48 h-full"
		>
			<Image src={img} alt={imgDescription} width={40} height={40} />
			<div className="w-[85%] sm:w-11/12">
				<p className="text-sm sm:text-base text-uefa-light-gray hover:text-white transition-colors duration-300">
					{title}
				</p>
			</div>
		</Link>
	);
}