'use client'

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { ReactNode } from "react"

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
}