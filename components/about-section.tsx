import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            About
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">
          A Home for Arts & Community
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-4/3 rounded-sm overflow-hidden">
            <Image
              src="/images/gardens.jpg"
              alt="Thompson House gardens and grounds, ideal for weddings and community events"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Situated on Kent Street in Levin, just east of Oxford Street,
              Thompson House is one of the Horowhenua&apos;s finest cultural
              venues. This gracious home, set in award-winning gardens, dates
              from the 1920s and serves as the hub of community
              activities &mdash; cultural, artistic, educational, and social.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Thompson Memorial Cultural Centre Inc. was established in 197450
              through the joint initiatives of the Levin Borough Council and a
              steering committee of citizens from many societies and clubs. The
              Council presented Dr Jim Thompson&apos;s former home and surgery
              to the people of Levin as a cultural, crafts and arts centre.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Today, Thompson House provides the Horowhenua with a unique venue
              for the presentation of visual and performing arts and crafts,
              hobby groups, and meetings. Many different groups meet regularly, and
              the house is open to all members of the community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-4 pt-8 border-t border-border">
              <div>
                <p className="font-serif text-3xl font-bold text-primary">
                  1920s
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Heritage Built
                </p>
              </div>
          
              <div>
                <p className="font-serif text-3xl font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Hireable Spaces
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
