import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface NavigationButtonProps {
  children: ReactNode;
  className?: string;
}

export default function NavigationButton({ children, className }: NavigationButtonProps) {
  return (
    <Button
      variant={"uefa-cyan-outline"}
      className={cn("flex items-center justify-center rounded-full w-8 h-8 p-1", className)}
    >
      {children}
    </Button>
  )
}