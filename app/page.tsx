"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DashboardHero } from "@/components/dashboard-hero"
import { HonorBoard } from "@/components/honor-board"
import { TeamRequests } from "@/components/team-requests"
import { TeamSlider } from "@/components/team-slider"
import { FeatureCards } from "@/components/feature-cards"
import { DataSnapshot } from "@/components/data-snapshot"
import { ChatButtons } from "@/components/chat-buttons"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  return (
    <>
      <ThemeToggle />

      <Header />

      <section id="dashboard" className="section">
        <div className="container">
          <div className="dashboard-header ">
            <DashboardHero />
            <HonorBoard />
          </div>

          <TeamRequests />
        </div>
      </section>

      <TeamSlider />
      <FeatureCards />
      <DataSnapshot />
      <ChatButtons />
      <Footer />

      <div className="scroll-to-top" id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span>↑</span>
      </div>
    </>
  )
}
