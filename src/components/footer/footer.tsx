import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import TwitterX from "../../../public/assets/icons/social/twitter-x"
import Facebook from "../../../public/assets/icons/social/facebook"
import Youtube from "../../../public/assets/icons/social/youtube"
import Instagram from "../../../public/assets/icons/social/instagram"

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[url('/assets/images/footer.webp')] bg-cover bg-center h-screen">
      <section className="flex items-center w-full">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between md:gap-60 mt-10 text-white text-sm font-extralight tracking-wide">
          <div className="flex justify-between w-4/5 mx-auto md:w-1/2 border-b md:border-none border-gray-200/15 pb-4">
            <div>
              <Image
              src="/assets/images/ucl-logo-dark-complete.svg"
              alt="logo uefa champions league"
              width={90}
              height={110}
              className="w-20"
            />
            </div>
            <div>
              <ul className="flex flex-col gap-0">
                <Button variant="uefa-link-footer">Matches</Button>
                <Button variant="uefa-link-footer">Groups</Button>
                <Button variant="uefa-link-footer">Video</Button>
                <Button variant="uefa-link-footer">Gaming</Button>
                <Button variant="uefa-link-footer">Stats</Button>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-0">
                <Button variant="uefa-link-footer">Teams</Button>
                <Button variant="uefa-link-footer">News</Button>
                <Button variant="uefa-link-footer">Final</Button>
                <Button variant="uefa-link-footer">History</Button>
                <Button variant="uefa-link-footer">About</Button>
                <Button variant="uefa-link-footer">Store</Button>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0 justify-between w-4/5 mx-auto md:mx-0 md:w-1/2">
            <div className="border-b md:border-b-0 md:border-l pb-4 border-gray-200/15 pl-4 md:min-h-56">
              <p className="uppercase text-base font-semibold mb-4">Also Visit</p>
              <ul className="flex flex-col gap-0.5">
                <Button variant="uefa-link-footer">
                  <Link href="https://www.uefa.com/" target="_blank">
                    UEFA.com
                  </Link>
                </Button>
                <Button variant="uefa-link-footer">
                  <Link href="https://www.uefa.com/insideuefa/" target="_blank">
                    Inside UEFA
                  </Link>
                </Button>
                <Button variant="uefa-link-footer">
                  <Link href="https://uefafoundation.org/" target="_blank">
                    UEFA Foundation
                  </Link>
                </Button>
              </ul>
            </div>
            <div className="border-b md:border-b-0 md:border-l mt-4 md:mt-0 pb-4 border-gray-200/15 pl-4 md:min-h-48">
              <p className="uppercase text-base font-semibold mb-4">Change Language</p>
              <ul className="flex flex-col gap-0.5">
                <Button variant="uefa-link-footer">English</Button>
                <Button variant="uefa-link-footer">Français</Button>
                <Button variant="uefa-link-footer">Deutsch</Button>
                <Button variant="uefa-link-footer">Русский</Button>
                <Button variant="uefa-link-footer">Español</Button>
                <Button variant="uefa-link-footer">Italiano</Button>
                <Button variant="uefa-link-footer">Português</Button>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center w-full mt-4">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row items-start justify-between mt-2 sm:mt-10 text-white text-sm font-extralight tracking-wide">
          <div className="flex flex-col sm:flex-row w-full sm:w-1/2 items-center justify-start gap-2 text-white text-sm font-extralight tracking-wide">
            <p>Follow us on</p>
            <div className="flex gap-4">
              <Button variant="uefa-link-round">
                <Link href="https://twitter.com/ChampionsLeague" target="_blank">
                  <TwitterX className="fill-gray-300 hover:fill-white" />
                </Link>
              </Button>
              <Button variant="uefa-link-round">
                <Link href="https://www.facebook.com/ChampionsLeague/" target="_blank">
                  <Facebook className="fill-gray-300 hover:fill-white" />
                </Link>
              </Button>
              <Button variant="uefa-link-round">
                <Link href="https://www.youtube.com/@UEFA" target="_blank">
                  <Youtube className="fill-gray-300 hover:fill-white" />
                </Link>
              </Button>
              <Button variant="uefa-link-round">
                <Link href="https://www.instagram.com/championsleague/" target="_blank">
                  <Instagram className="fill-gray-300 hover:fill-white" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse sm:flex-row items-center justify-between mt-10 sm:mt-0 gap-8 sm:gap-0">
            <div className="flex gap-4 sm:gap-16 text-xs sm:text-sm">
              <Button variant="uefa-link-footer">
                <Link href="https://twitter.com/" target="_blank">
                  Privacy
                </Link>
              </Button>
              <Button variant="uefa-link-footer">
                <Link href="https://twitter.com/" target="_blank">
                  Terms and Conditions
                </Link>
              </Button>
              <Button variant="uefa-link-footer">
                <Link href="https://twitter.com/" target="_blank">
                  Cookie Policy
                </Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <Link href="https://apps.apple.com/us/app/champions-league-official/id1024506667" target="_blank">
                <Image src="/assets/images/app-store.webp" alt="App Store" width={130} height={40} quality={100} />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.uefa.ucl&hl=en&gl=US&pli=1" target="_blank">
                <Image src="/assets/images/google-play.png" alt="App Store" width={130} height={40} quality={100} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex items-center justify-center mt-4 sm:mt-14">
        <div className="w-full max-w-[850px] mx-auto flex flex-col gap-2 items-center justify-between text-center mt-10 text-white text-xs font-extralight tracking-wide">
          <p>© 1998-{currentYear} UEFA. All rights reserved.</p>
          <p className="leading-8 hidden sm:flex">
            The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies your agreement to the Terms and Conditions and Privacy Policy.
          </p>
        </div>
      </section>
    </footer>
  )
}