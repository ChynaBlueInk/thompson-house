export function CommitteeSection() {
  return (
    <section id="committee" className="py-16 md:py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />

          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            Administration
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Our Committee
        </h2>

        <p className="text-muted-foreground leading-relaxed text-pretty mb-10">
          Thompson House is run by an elected body of volunteers who
          generously donate their time to the operations and finance of the
          house. The Horowhenua District Council provides ongoing support and
          maintains the award-winning gardens.
        </p>

        {/* AGM info */}
        <div className="bg-primary/5 border border-primary/10 rounded-sm p-6">
          <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
            Annual General Meeting
          </h3>

          <p className="text-muted-foreground text-sm leading-relaxed">
            The committee is elected each year at the Annual General Meeting,
            held on the 2nd Tuesday of April. The AGM will be advertised on
            this website. Everyone is welcome to attend and consider becoming
            a member of the committee.
          </p>

          <p className="text-muted-foreground text-sm leading-relaxed mt-4">
            Members only need to meet for approximately an hour a month for
            11 months to help ensure Thompson House provides the best quality
            of service for the community.
          </p>
        </div>
      </div>
    </section>
  )
}