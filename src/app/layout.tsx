import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const championsRegular = localFont({
  src: "../../public/assets/fonts/Champions-Regular.ttf",
  display: "swap",
});

export const championsBold = localFont({
  src: "../../public/assets/fonts/Champions-Bold.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UEFA Champions League",
  description: "The biggest sport competition",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
