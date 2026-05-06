import { ChevronDown, Home, MapPin } from "lucide-react"

interface TimelineEvent {
  year: string
  house?: {
    title: string
    description: string
  }
  context?: {
    title: string
    description: string
    scope: "Levin" | "NZ"
  }
}

export function HistorySection() {
  const timeline: TimelineEvent[] = [
    {
      year: "1886",
      context: {
        title: "Railway Reaches Levin",
        description:
          "The Wellington–Manawatū railway opens through the district, helping shape Levin into a service town for surrounding farms. The railway corridor and station area remains one of the clearest links between modern Levin and the town’s early growth.",
        scope: "Levin",
      },
    },
    {
      year: "1889",
      context: {
        title: "Levin Township Is Laid Out",
        description:
          "The Levin township is surveyed as settlement expands across the district. The new town develops on Muaūpoko land, with the railway helping to shape its layout and future growth.",
        scope: "Levin",
      },
    },
    {
      year: "1906",
      context: {
        title: "Levin Becomes a Borough",
        description:
          "Levin is officially incorporated as a borough, marking a new stage of civic development for the growing Horowhenua service town.",
        scope: "Levin",
      },
    },
    {
      year: "1919",
      house: {
        title: "Land Purchased for a New Home",
        description:
          "Dr John Graham Gow OBE and his wife Dr Alice Marianne “Maysie” Gow purchase land for a new house in Levin.",
      },
    },
    {
      year: "1920",
      house: {
        title: "Construction Contract Signed",
        description:
          "The construction contract is signed on 9 February 1920. The house is designed by notable architects Frederick de Jersey Clere and Llewellyn Edwin Williams.",
      },
    },
    {
      year: "1921",
      house: {
        title: "The House Is Built",
        description:
          "The house is built by Mr J Harvey of the local company Harvey & Co. It is a two-storeyed, multi-gabled English Cottage style building with dormers, steeply pitched roofs, two chimneys, a gabled porch, and former stables to the south-east.",
      },
      context: {
        title: "Levin Fire Station Opens",
        description:
          "A new fire station is built on Oxford Street, replacing the original 1902 station and serving the needs of the growing community.",
        scope: "Levin",
      },
    },
    {
      year: "1923",
      context: {
        title: "Levin War Memorial Unveiled",
        description:
          "The Levin Stone of Remembrance is unveiled in the public gardens beside Thompson House to honour local men who died in the First World War.",
        scope: "Levin",
      },
    },
    {
      year: "1924",
      house: {
        title: "Dr Thompson Arrives in Levin",
        description:
          "Dr Samuel James “Jim” Thompson arrives in Levin and begins practising with Dr Gow.",
      },
    },
    {
      year: "1926",
      house: {
        title: "Dr Thompson Purchases the House",
        description:
          "Dr Thompson purchases the house and medical practice. The property becomes both his family home and the base for his medical work in Levin.",
      },
      context: {
        title: "Railway Houses Built on Keepa Street",
        description:
          "Former railway staff houses are built near the station area, reflecting the importance of the rail corridor to Levin’s early twentieth-century development.",
        scope: "Levin",
      },
    },
    {
      year: "1920s",
      context: {
        title: "Horowhenua Market Gardens Flourish",
        description:
          "The sandy flats south of Levin become an important vegetable-growing area, supplying Wellington by rail and helping define the district’s economy.",
        scope: "Levin",
      },
    },
    {
      year: "1937",
      context: {
        title: "RNZAF Becomes Independent",
        description:
          "The Royal New Zealand Air Force becomes an independent service, separating from army control after years of development.",
        scope: "NZ",
      },
    },
    {
      year: "1939",
      context: {
        title: "New Zealand Enters WWII",
        description:
          "New Zealand declares war on Germany on 3 September. Communities like Levin prepare for the war effort.",
        scope: "NZ",
      },
    },
    {
      year: "1942",
      house: {
        title: "Wartime Hospitality",
        description:
          "The home becomes an entertainment centre for RNZAF airmen at Weraroa and officers of the 2nd US Marine Division. Dr Thompson also serves as station medical officer for the RNZAF training wing at Weraroa.",
      },
      context: {
        title: "US Marines in New Zealand",
        description:
          "American forces arrive in New Zealand as the Pacific War intensifies, with the wider Wellington region becoming part of that wartime presence.",
        scope: "NZ",
      },
    },
    {
      year: "1956",
      context: {
        title: "Levin’s Golden Jubilee",
        description:
          "Levin celebrates 50 years as a borough, marking half a century of growth and community development.",
        scope: "Levin",
      },
    },
    {
      year: "1974",
      house: {
        title: "Thompson Memorial Cultural Centre Established",
        description:
          "Following Dr Thompson’s sudden death, the house is purchased by the Levin Borough Council and named Thompson Memorial Cultural Centre. It becomes a community arts and cultural venue.",
      },
      context: {
        title: "A Community Asset Takes Shape",
        description:
          "Local people support the transformation of the former home into a cultural centre, with strong involvement from the Thompson family and community groups.",
        scope: "Levin",
      },
    },
    {
      year: "1985",
      house: {
        title: "Category 2 Historic Place",
        description:
          "Thompson House is listed as a Category 2 Historic Place, recognising its heritage value and importance to the community.",
      },
    },
    {
      year: "1989",
      context: {
        title: "Horowhenua District Formed",
        description:
          "Horowhenua District Council is formed through the amalgamation of several councils, including Levin Borough Council.",
        scope: "Levin",
      },
    },
    {
      year: "2010",
      context: {
        title: "War Memorial Upgraded",
        description:
          "The cenotaph surrounds are significantly upgraded with adjoining walls, additional names and conflicts recorded, and the illuminated poppy boxes that are now part of the memorial setting.",
        scope: "Levin",
      },
    },
    {
      year: "2016",
      house: {
        title: "Major Building Upgrade",
        description:
          "The building undergoes a major upgrade, including earthquake strengthening, reinforcing work, regulatory compliance improvements, and interior refurbishments.",
      },
    },
    {
      year: "Today",
      house: {
        title: "A Living Heritage",
        description:
          "Thompson House continues as a community-owned cultural venue, hosting exhibitions, workshops, meetings, arts events, craft groups, book launches, market days, and community gatherings.",
      },
      context: {
        title: "What Still Connects Modern Levin to the Past",
        description:
          "Thompson House, the war memorial, the railway corridor, the station area, and the wider town layout remain among the strongest visible links to Levin’s early twentieth-century story.",
        scope: "Levin",
      },
    },
  ]

  return (
    <section id="history" className="py-24 md:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            History
          </span>
        </div>

        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          The Story of Thompson House
        </h2>

        <p className="text-muted-foreground max-w-3xl mb-10 leading-relaxed text-pretty">
          Thompson House began as a gracious family home and medical practice
          before becoming one of Levin’s most treasured community arts and
          cultural venues. Its story connects the Gow and Thompson families,
          Levin’s growth as a service town, wartime hospitality, local arts, and
          decades of volunteer care.
        </p>

        <div className="space-y-5 mb-12">
          <details className="group rounded-3xl border border-border bg-background/80 shadow-sm overflow-hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8">
              <div>
                <p className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-2">
                  Family House
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  From the Gow family home to the Thompson Memorial Cultural Centre
                </h3>
              </div>

              <ChevronDown className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="px-6 pb-8 md:px-8 text-muted-foreground leading-relaxed space-y-4">
              <p>
                In 1919, Dr John Graham Gow OBE and his wife Dr Alice Marianne
                “Maysie” Gow purchased land for a new house in Levin. The
                construction contract was signed on 9 February 1920, and the
                house was designed by architects Frederick de Jersey Clere and
                Llewellyn Edwin Williams.
              </p>

              <p>
                Built in 1921 by Mr J Harvey of Harvey & Co, the house was
                designed in an English Cottage style, with steeply pitched roofs,
                dormers, multiple gables, two chimneys, and a sheltered gabled
                porch. The former stables stood to the south-east of the house,
                and before electricity was connected, a dynamo in the stables
                provided power.
              </p>

              <p>
                Dr Samuel James “Jim” Thompson arrived in Levin in 1924 and
                began practising with Dr Gow. In 1926, he purchased the house and
                practice, making it both a family home and a place of medical
                service.
              </p>

              <p>
                Dr Thompson became deeply involved in local life, contributing
                his time and energy to at least twenty-four organisations. He
                served as President of the Manawatu Hunt Club and Levin Racing
                Club, supported the Rotary Club and RSA, advised the Home Guard,
                and served as station medical officer for the RNZAF training wing
                at Weraroa during the Second World War.
              </p>

              <p>
                Ella Thompson was closely connected with music, painting and
                theatre. She encouraged her husband’s involvement in the Levin
                Operatic and Dramatic Society and was remembered for her generous
                hospitality, especially towards people with an interest in the
                arts.
              </p>

              <p>
                After Dr Thompson’s death, the house was purchased by Levin
                Borough Council in 1974 and named Thompson Memorial Cultural
                Centre. Members of the Thompson family helped transform the home
                into a community cultural centre, and local people supported that
                work with enthusiasm.
              </p>
            </div>
          </details>

          <details
            open
            className="group rounded-3xl border border-border bg-background/80 shadow-sm overflow-hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8">
              <div>
                <p className="text-accent font-sans text-xs tracking-[0.3em] uppercase mb-2">
                  Timeline
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Levin and Thompson House through time
                </h3>
              </div>

              <ChevronDown className="h-6 w-6 shrink-0 text-accent transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="px-6 pb-8 md:px-8">
              <div className="flex flex-wrap gap-6 mb-12 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <Home className="w-4 h-4 text-primary" />
                  <span className="text-foreground font-medium">
                    Thompson House
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-foreground font-medium">
                    Levin & New Zealand
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

                <div className="flex flex-col gap-8 md:gap-6">
                  {timeline.map((item) => (
                    <div key={item.year} className="relative">
                      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-1 z-20">
                        <span className="bg-background/90 backdrop-blur-sm shadow-sm px-3 py-1 text-sm font-serif font-bold text-foreground border border-border rounded-full">
                          {item.year}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row pt-8 md:pt-6">
                        <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                          {item.house ? (
                            <div className="ml-10 md:ml-0 md:text-right bg-background/70 rounded-2xl border border-border p-5 shadow-sm">
                              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background z-10 top-14 md:top-12" />
                              <div className="flex items-center gap-2 md:justify-end mb-1">
                                <Home className="w-4 h-4 text-primary md:order-2" />
                                <span className="text-xs uppercase tracking-wider text-primary font-medium">
                                  Thompson House
                                </span>
                              </div>
                              <h4 className="font-serif text-lg font-semibold text-foreground">
                                {item.house.title}
                              </h4>
                              <p className="text-muted-foreground mt-1 leading-relaxed text-sm">
                                {item.house.description}
                              </p>
                            </div>
                          ) : (
                            <div className="hidden md:block" />
                          )}
                        </div>

                        <div className="md:w-1/2 md:pl-8">
                          {item.context ? (
                            <div className="ml-10 md:ml-0 bg-background/70 rounded-2xl border border-border p-5 shadow-sm">
                              {!item.house && (
                                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background z-10 top-14 md:top-12" />
                              )}
                              <div className="flex items-center gap-2 mb-1">
                                <MapPin className="w-4 h-4 text-accent" />
                                <span className="text-xs uppercase tracking-wider text-accent font-medium">
                                  {item.context.scope === "Levin"
                                    ? "Levin & Horowhenua"
                                    : "New Zealand"}
                                </span>
                              </div>
                              <h4 className="font-serif text-lg font-semibold text-foreground">
                                {item.context.title}
                              </h4>
                              <p className="text-muted-foreground mt-1 leading-relaxed text-sm">
                                {item.context.description}
                              </p>
                            </div>
                          ) : (
                            <div className="hidden md:block" />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}