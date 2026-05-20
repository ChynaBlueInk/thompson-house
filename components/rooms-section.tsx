//components/rooms-section.tsx
import Image from "next/image"
import { Maximize, Coffee } from "lucide-react"

const rooms = [
  {
    name: "Room 1",
    description:
      "Our largest ground-floor room, ideal for meetings, workshops, seminars, and community events.",
    features: ["Tables & chairs", "Natural lighting", "Flexible layout"],
  },
  {
    name: "Room 2",
    description:
      "A warm, mid-sized space perfect for smaller group meetings, craft sessions, and committee gatherings.",
    features: ["Comfortable seating", "Warm atmosphere", "Wall display space"],
  },
  {
    name: "Room 3",
    description:
      "An intimate space ideal for small meetings, one-on-one sessions, or private consultations.",
    features: ["Quiet setting", "Cosy atmosphere", "Private space"],
  },
  {
    name: "Upstairs Gallery",
    description:
      "A beautiful gallery space with excellent natural light, perfect for art exhibitions, photography displays, and special events.",
    features: [
      "Exhibition-ready walls",
      "Natural light",
      "Heritage character",
    ],
  },
]

export function RoomsSection() {
  return (
    <section id="rooms" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            Spaces
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Hire a Room
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-pretty">
          Thompson House offers four versatile spaces available at modest cost.
          A kitchen is available at no extra charge. The
          beautiful grounds are also popular for wedding photos.
        </p>

        {/* Image + rooms grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Featured image */}
          <div className="lg:col-span-2 relative aspect-3/4 rounded-sm overflow-hidden">
            <Image
              src="/images/meeting-room.jpg"
              alt="A meeting room inside Thompson House"
              fill
              className="object-cover"
            />
          </div>

          {/* Room cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="bg-card border border-border rounded-sm p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {room.name}
                </h3>
                <div className="flex items-center gap-2 text-primary">
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {room.description}
                </p>
                <ul className="flex flex-col gap-1">
                  {room.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Booking info */}
        <div className="mt-16 bg-primary rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
          <div className="flex-1">
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">
              Ready to Book?
            </h3>
            <p className="text-primary-foreground/80 mt-2 leading-relaxed">
              Contact our receptionist to check availability and make a
              booking. Rooms are available at modest rates, with a kitchen included at no extra cost.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Coffee className="h-4 w-4 text-heritage-gold" />
              <span className="text-sm font-sans">
                Kitchen included free of charge
              </span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/90">
              <Maximize className="h-4 w-4 text-heritage-gold" />
              <span className="text-sm font-sans">
                Flexible room configurations
              </span>
            </div>
            <a
              href="tel:0224869538"
              className="mt-2 inline-flex items-center justify-center px-6 py-2.5 bg-heritage-gold text-foreground font-sans text-sm tracking-wide rounded-sm hover:bg-heritage-gold/90 transition-colors"
            >
              Call 022 486 9538
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
