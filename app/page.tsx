// app/page.tsx
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { HistorySection } from "@/components/history-section"
import { RoomsSection } from "@/components/rooms-section"
import { EventsSection } from "@/components/events-section"
import { CommitteeSection } from "@/components/committee-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-3 bg-linear-to-r from-emerald-800 via-amber-600 to-stone-800"
    />
  )
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <SectionDivider />
        <HistorySection />
        <SectionDivider />
        <RoomsSection />
                <SectionDivider />
        <EventsSection />
                <SectionDivider />
        <CommitteeSection />
                <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}