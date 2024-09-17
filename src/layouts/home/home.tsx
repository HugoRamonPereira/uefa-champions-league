'use client'

import type { ReactNode } from "react"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import TopHeader from "@/components/top-header/top-header"

interface HomeLayoutProps {
  children: ReactNode
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
  <>
    <TopHeader />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)
}