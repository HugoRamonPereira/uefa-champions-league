import Image from "next/image";
import Link from "next/link";

export default function Sponsors() {
  return (
    <section className="bg-[url('/assets/images/ucl-global-sponsors.jpg')] bg-cover bg-center h-52 md:h-40 w-full">
      <div className="w-4/6 md:w-full max-w-[700px] flex flex-col items-center h-full justify-center gap-4 mx-auto text-sm antialiased font-light tracking-wide">
        <p>Official global sponsors</p>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex gap-2 md:gap-4">
            <Link href="https://www.heineken.com/" target="_blank">
              <Image src="/assets/images/heineken.webp" alt="Heineken" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.playstation.com/" target="_blank">
              <Image src="/assets/images/ps5.avif" alt="Play Station Five" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.lays.com/" target="_blank">
              <Image src="/assets/images/lays.webp" alt="Lays" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.fedex.com/" target="_blank">
              <Image src="/assets/images/fedex.webp" alt="FedEx" width={140} height={77} quality={100} />
            </Link>
          </div>
          <div className="flex gap-2 md:gap-4">
            <Link href="https://www.mastercard.com/" target="_blank">
              <Image src="/assets/images/mastercard.webp" alt="Mastercard" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.takeaway.com/" target="_blank">
              <Image src="/assets/images/jet-house.webp" alt="Jet house" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.oppo.com/" target="_blank">
              <Image src="/assets/images/oppo.webp" alt="Oppo" width={140} height={77} quality={100} />
            </Link>
            <Link href="https://www.turkishairlines.com/" target="_blank">
              <Image src="/assets/images/turkish-airlines.webp" alt="Turkish Airlines" width={140} height={77} quality={100} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}