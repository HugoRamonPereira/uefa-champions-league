import Image from "next/image";
import { CirclePlus } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full max-w-[1400px] mx-auto flex items-center justify-between h-20 bg-blue-900">
      <section className="flex">
        <Image src="/assets/images/ucl-logo-dark.svg" alt="UEFA logo" width={100} height={70} />
      </section>
      <section className="flex">
        <ul className="flex items-center gap-16 font-extralight tracking-wide">
          <li>Matches</li>
          <li>Groups</li>
          <li>Video</li>
          <li>Gaming</li>
          <li>Stats</li>
          <li>Teams</li>
          <li>News</li>
          <li>Final</li>
          <li>History</li>
        </ul>
      </section>
      <section className="flex items-center gap-4">
        <ul>
          <li>More</li>
        </ul>
        <button className="flex gap-2">
          Favorite Team
          <CirclePlus />
        </button>
      </section>
    </header>
  )
}