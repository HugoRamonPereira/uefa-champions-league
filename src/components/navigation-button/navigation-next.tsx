'use client'

import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react";

interface NavigationNextProps {
  className?: string;
}

export default function NavigationNext({ className }: NavigationNextProps) {

  return (
			<Button
				variant={"uefa-cyan-outline"}
				className={cn(
					"flex items-center justify-center rounded-full w-8 h-8 p-1",
					className,
				)}
			>
				<ChevronRight size={20} strokeWidth={3} />
			</Button>
		);
}