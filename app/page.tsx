import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { HistorySection } from "@/components/history-section"
import { RoomsSection } from "@/components/rooms-section"
import { EventsSection } from "@/components/events-section"
import { CommitteeSection } from "@/components/committee-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <HistorySection />
        <RoomsSection />
        <EventsSection />
        <CommitteeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
