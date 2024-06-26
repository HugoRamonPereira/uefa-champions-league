'use client'

import Image from "next/image";
import { CirclePlus, Menu } from "lucide-react"
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
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
            "block select-none p-4 leading-none no-underline outline-none transition-colors hover:bg-uefa-dark-blue-main text-white rounded-none",
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
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-0">
        <section className="flex">
          <Link href="/">
            <Image
              src="/assets/images/ucl-logo-dark.svg"
              alt="UEFA logo"
              width={100}
              height={70}
              className="w-16 md:w-20 lg:w-[84px]"
            />
          </Link>
        </section>
        <section className="flex">
          <ul className="flex items-center gap-0 md:gap-7 font-extralight text-white tracking-wide">
            <Button variant="uefa-link" className="text-sm sm:text-base">Matches</Button>
            <Button variant="uefa-link" className="text-sm sm:text-base">Groups</Button>
            <Button variant="uefa-link" className="text-sm sm:hidden flex items-center gap-1 pr-0">
              More
              <Menu />
            </Button>

            <NavigationMenu className="hidden md:flex gap-8">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Video
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-0 h-0 absolute left-8 -top-4 border-l-[12px] border-l-transparent border-b-[16px]
                       border-b-uefa-dark-blue-secondary border-r-[12px] border-r-transparent data-[state=open]:animate-in
                       data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                      />
                    <ul className="grid w-[400px] p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px] divide-y-[0.5px] divide-uefa-dark-blue-tertiary">
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
            <NavigationMenu className="hidden md:flex gap-8">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Gaming
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-0 h-0 absolute left-8 -top-4 border-l-[12px] border-l-transparent border-b-[16px]
                       border-b-uefa-dark-blue-secondary border-r-[12px] border-r-transparent data-[state=open]:animate-in
                       data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                      />
                    <ul className="grid w-[400px] p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px] divide-y-[0.5px] divide-uefa-dark-blue-tertiary">
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
            <NavigationMenu className="hidden md:flex gap-8">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    Stats
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-0 h-0 absolute left-8 -top-4 border-l-[12px] border-l-transparent border-b-[16px]
                       border-b-uefa-dark-blue-secondary border-r-[12px] border-r-transparent data-[state=open]:animate-in
                       data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                      />
                    <ul className="grid w-[400px] p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px] divide-y-[0.5px] divide-uefa-dark-blue-tertiary">
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
            <Button className="hidden md:flex" variant="uefa-link" >Teams</Button>
            <Button className="hidden md:flex" variant="uefa-link" >News</Button>
            <Button className="hidden md:flex" variant="uefa-link" >Final</Button>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuLink>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    History
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-0 h-0 absolute left-8 -top-4 border-l-[12px] border-l-transparent border-b-[16px]
                       border-b-uefa-dark-blue-secondary border-r-[12px] border-r-transparent data-[state=open]:animate-in
                        data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                      />
                    <ul className="grid w-[400px] p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px] divide-y-[0.5px] divide-uefa-dark-blue-tertiary">
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
        <section className="hidden sm:flex items-center gap-4 text-sm sm:text-base font-extralight text-white list-none">
          <NavigationMenu>
            <NavigationMenuLink>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  More
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div
                  className="w-0 h-0 absolute left-8 -top-4 border-l-[12px] border-l-transparent border-b-[16px]
                    border-b-uefa-dark-blue-secondary border-r-[12px] border-r-transparent data-[state=open]:animate-in
                    data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90"
                  />
                  <ul className="grid w-[400px] p-0 md:w-[500px] md:grid-cols-1 lg:w-[300px] divide-y-[0.5px] divide-uefa-dark-blue-tertiary">
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
          <Button className="hidden md:flex" variant="uefa-outline">
            Favorite team
            <CirclePlus size={18} />
          </Button>
        </section>
      </div>
    </header>
  )
}