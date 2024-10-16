import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { ScrollToTop } from "@/components/scroll-to-top/scroll-to-top";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--manrope"
});

const championsRegular = localFont({
  src: [
    {
      path: "../../public/fonts/Champions-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--champions-regular",
});

const championsBold = localFont({
  src: [
    {
      path: "../../public/fonts/Champions-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--champions-bold",
});

export const metadata: Metadata = {
  title: "UEFA Champions League",
  description: "The biggest sport competition of the entire planet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${championsRegular.variable} ${championsBold.variable}`}
      >
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
