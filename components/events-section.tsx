import Image from "next/image"
import { Palette, BookOpen, Camera, Scissors, Music, Cake } from "lucide-react"

const activities = [
  {
    icon: Palette,
    title: "Arts & Exhibitions",
    description:
      "Paintings, prints, works in glass, silver and bronze displayed in our gallery spaces.",
  },
  {
    icon: Scissors,
    title: "Crafts & Hobbies",
    description:
      "Quilt makers, embroidery, lace makers, and other craft groups meet regularly.",
  },
  {
    icon: BookOpen,
    title: "Literary Events",
    description:
      "Poetry readings, book launches, literary workshops, and writing groups.",
  },
  {
    icon: Camera,
    title: "Photography",
    description:
      "Photography exhibitions and the stunning gardens are popular for wedding photography.",
  },
  {
    icon: Music,
    title: "Performing Arts",
    description:
      "Music performances and arts events that bring the community together.",
  },
  {
    icon: Cake,
    title: "Community Gatherings",
    description:
      "Market days, seminars, meetings, and celebrations for organisations and individuals.",
  },
]

export function EventsSection() {
  return (
    <section id="events" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            Events & Activities
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          What Happens Here
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-pretty">
          Thompson House is alive with creativity and community spirit
          year-round. From exhibitions and workshops to book launches and market
          days, there is always something happening.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Activities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div key={activity.title} className="flex flex-col gap-3">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center">
                  <activity.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {activity.title}
                </h3>
              
              </div>
            ))}
          </div>

          {/* Gallery image */}
          <div className="relative aspect-4/3 rounded-sm overflow-hidden">
            <Image
              src="/images/events.jpg"
              alt="An art exhibition event at Thompson House"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-foreground/20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-foreground/60 to-transparent">
              <p className="text-heritage-cream font-serif text-lg font-semibold">
                Gallery & Exhibition Space
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
