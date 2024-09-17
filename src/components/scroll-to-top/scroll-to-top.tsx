"use client";

import { ChevronUp } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";

export const ScrollToTop = () => {
	const [display, setDisplay] = useState(false);

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleScroll = useCallback(() => {
		if (!display && window.scrollY > 450) setDisplay(true);
		if (display && window.scrollY <= 450) setDisplay(false);
	}, [display]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<div className="fixed bottom-6 right-6 z-50">
			{display ? (
				<Button
					className="flex flex-col rounded-full h-12 w-12 bg-uefa-blue hover:bg-uefa-blue-lighter transition-colors duration-150 p-0 pb-2 pt-1"
					onClick={backToTop}
				>
					<ChevronUp className="size-14" />
					<p className="text-xs">Top</p>
				</Button>
			) : null}
		</div>
	);
};