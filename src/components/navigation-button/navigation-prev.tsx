'use client'

import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import { ChevronLeft } from "lucide-react";

interface NavigationPrevProps {
  className?: string;
}

export default function NavigationPrev({ className }: NavigationPrevProps) {

  return (
			<Button
				variant={"uefa-cyan-outline"}
				className={cn(
					"flex items-center justify-center rounded-full w-8 h-8 p-1",
					className,
				)}
			>
				<ChevronLeft size={20} strokeWidth={3} />
			</Button>
		);
}