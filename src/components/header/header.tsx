'use client'

import Image from "next/image";
import { CirclePlus } from "lucide-react"
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { forwardRef } from "react";

const videoComponents: { title: string; href: string; }[] = [
  {
    title: "Highlights",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "Videos",
    href: "/docs/primitives/hover-card"
  },
  {
    title: "Showtime",
    href: "/docs/primitives/progress"
  },
  {
    title: "Flying Saves",
    href: "/docs/primitives/scroll-area"
  },
  {
    title: "Priceless Moments",
    href: "/docs/primitives/tabs"
  }
]

const gamingComponents: { title: string; href: string; }[] = [
  {
    title: "All Games",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "Fantasy Football",
    href: "/docs/primitives/hover-card"
  },
  {
    title: "Predictor",
    href: "/docs/primitives/progress"
  },
  {
    title: "Quiz Arena",
    href: "/docs/primitives/scroll-area"
  },
  {
    title: "Bracket",
    href: "/docs/primitives/tabs"
  },
  {
    title: "Goal of the Week",
    href: "/docs/primitives/tabs"
  },
  {
    title: "Player of the Week",
    href: "/docs/primitives/tabs"
  },
  {
    title: "eChampions League",
    href: "/docs/primitives/tabs"
  },
  {
    title: "My gaming profile",
    href: "/docs/primitives/tabs"
  }
]

const statsComponents: { title: string; href: string; }[] = [
  {
    title: "Season stats",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "Club stats",
    href: "/docs/primitives/hover-card"
  },
  {
    title: "Player stats",
    href: "/docs/primitives/progress"
  },
  {
    title: "Qualifying Phase",
    href: "/docs/primitives/scroll-area"
  },
  {
    title: "All-time stats",
    href: "/docs/primitives/tabs"
  },
  {
    title: "Player ranking",
    href: "/docs/primitives/tabs"
  }
]

const historyComponents: { title: string; href: string; }[] = [
  {
    title: "Seasons",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "All-time stats",
    href: "/docs/primitives/hover-card"
  },
  {
    title: "Video",
    href: "/docs/primitives/progress"
  },
  {
    title: "Clubs",
    href: "/docs/primitives/scroll-area"
  },
  {
    title: "Most titles",
    href: "/docs/primitives/tabs"
  }
]

const moreComponents: { title: string; href: string; }[] = [
  {
    title: "About",
    href: "/docs/primitives/alert-dialog"
  },
  {
    title: "Store",
    href: "/docs/primitives/hover-card"
  }
]

export default function Header() {
  const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-sm p-4 leading-none no-underline outline-none transition-colors hover:bg-uefa-dark-blue-main text-white",
            className
          )}
          {...props}
        >
          <div className="text-base font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

  return (
    <header className="w-full h-20 bg-uefa-dark-blue-main flex items-center justify-between">
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between">
        <section className="flex">
          <Link href="/">
            <Image src="/assets/images/ucl-logo-dark.svg" alt="UEFA logo" width={100} height={70} />
          </Link>
        </section>
        <section className="flex">
          <ul className="flex items-center gap-8 font-extralight text-white tracking-wide">
            <Button variant="uefa-link">Matches</Button>
            <Button variant="uefa-link" >Groups</Button>
            <NavigationMenu className="flex gap-8">

              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Video
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                      {videoComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuLink>
            </NavigationMenu>
            <NavigationMenu className="flex gap-8">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Gaming
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                      {gamingComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuLink>
            </NavigationMenu>
            <NavigationMenu className="flex gap-8">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Stats
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                      {statsComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuLink>
            </NavigationMenu>
            <Button variant="uefa-link" >Teams</Button>
            <Button variant="uefa-link" >News</Button>
            <Button variant="uefa-link" >Final</Button>

            <NavigationMenu>
            <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    History
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                      {historyComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuLink>
            </NavigationMenu>
          </ul>
        </section>
        <section className="flex items-center gap-4 font-extralight text-white list-none">
          <NavigationMenu>
            <NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px]">
                      {moreComponents.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuLink>
          </NavigationMenu>
          <Button variant="uefa-outline">
            Favorite team
            <CirclePlus />
          </Button>
        </section>
      </div>
    </header>
  )
}