import { UserCircle } from "lucide-react"

const committeeMembers = [
  { role: "Patron", name: "Mayor Bernie Wanden" },
  { role: "Chair", name: "Diane Means" },
  { role: "Vice Chair", name: "Kevin Miles" },
  { role: "Treasurer", name: "Judith Tyler" },
  { role: "Secretary", name: "Barbara McGowan" },
]

const generalMembers = [
  "Diane Brown",
  "Sue Corkill",
  "Tara Mallon",
  "Vicki Webster",
  "Shirley Welch",
  "Gary Tweddle",
  "Anita Nalder",
]

export function CommitteeSection() {
  return (
    <section id="committee" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
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
        <p className="text-muted-foreground max-w-2xl mb-16 leading-relaxed text-pretty">
          Thompson House is run by an elected body of volunteers who
          generously donate their time to the operations and finance of the
          house. The Horowhenua District Council provides ongoing support and
          maintains the award-winning gardens.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Key roles */}
          <div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
              Management Committee 2025
            </h3>
            <div className="flex flex-col gap-4">
              {committeeMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex items-center gap-4 p-4 bg-secondary rounded-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <UserCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">
                      {member.name}
                    </p>
                    <p className="font-sans text-xs text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* General members + info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Committee Members
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {generalMembers.map((name) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 p-3 bg-secondary rounded-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="text-sm text-foreground">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AGM info */}
            <div className="bg-primary/5 border border-primary/10 rounded-sm p-6">
              <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                Annual General Meeting
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The committee is elected each year at the Annual General
                Meeting, held on the 4th Wednesday of April. The AGM is
                advertised in the local paper and on this website. Everyone is
                welcome to attend and consider becoming a member of the
                committee.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                Members only need to meet for less than an hour a month for 11
                months to help ensure Thompson House provides the best quality
                of service for the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
