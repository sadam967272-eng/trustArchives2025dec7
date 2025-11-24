"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
 
import { TeamRequests } from "@/components/team-requests"
 
 
import { DataSnapshot } from "@/components/data-snapshot"
 
import { ThemeToggle } from "@/components/theme-toggle"

export default function Dashboard() {
  return (
    <>
      <ThemeToggle />

      <Header />

      <section id="dashboard" className="section">
        <div className="container">
          <div className="dashboard-header ">
            
          <TeamRequests />
        </div>
      </section>

       
      <DataSnapshot />
     
      <Footer />

      <div className="scroll-to-top" id="scrollToTop" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span>↑</span>
      </div>
    </>
  )
}
