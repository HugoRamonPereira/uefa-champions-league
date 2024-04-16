import Image from "next/image";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CaretDown from "../../../public/assets/icons/caret-down";
import UserCircle from "../../../public/assets/icons/user-circle";
import { X } from "lucide-react";

export default function TopHeader() {
  return (
    <header className="w-full h-10 bg-black flex items-center justify-between">
      <div className="w-full max-w-[1450px] px-4 mx-auto flex items-center justify-between relative">
        <section className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex items-center gap-2">
                <Image src="/assets/images/uefa-logo.svg" alt="UEFA logo" width={71} height={71} />
                <CaretDown className="fill-white rotate-45 mb-[2px]" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-uefa-dark-cyan">
              <div>
                <section className="w-full">
                  <div className="w-full max-w-[1400px] mx-auto py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image src="/assets/images/uefa-logo.svg" alt="UEFA logo" width={80} height={70} />
                      <CaretDown className="fill-white mt-[6px] rotate-[225deg]" />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <div className="border-r border-gray-400/55">
                          <Button className="flex gap-2 bg-transparent hover:bg-transparent pr-0 sm:pr-5 h-6 text-sm">
                            Log in
                            <UserCircle className="fill-white w-5 h-5" />
                          </Button>
                        </div>
                        <DropdownMenuItem
                          className="p-0"
                        >
                          <Button
                            variant="uefa-link-round"
                            className="p-0 w-[30px] h-[30px] border-none bg-gray-700/50 hover:bg-gray-700 ml-[18px] data-[state=closed]:zoom-out-95"
                          >
                            <X width={20} height={20} strokeWidth={2.5} />
                          </Button>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </section>
                <section>UEFA Competitions</section>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </section>
        <section>
          <Button className="flex gap-2 bg-transparent hover:bg-transparent pr-0 sm:pr-4">
            Log in
            <UserCircle className="fill-white w-5 h-5" />
          </Button>
        </section>
      </div>
    </header>
  )
}