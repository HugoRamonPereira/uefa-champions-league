import Image from "next/image";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react"

export default function TopHeader() {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-between">
      <div className="w-full max-w-[1420px] mx-auto flex items-center justify-between">
        <section className="flex">
          <Image src="/assets/images/uefa-logo.svg" alt="UEFA logo" width={80} height={70} />
        </section>
        <section>
          <Button className="flex gap-2 bg-transparent hover:bg-transparent">
            Log in
            <CircleUser />
          </Button>
        </section>
      </div>
    </header>
  )
}