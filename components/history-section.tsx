//components/history-section.tsx
import Image from "next/image"
import { ChevronDown, Home, MapPin, Camera, Landmark } from "lucide-react"

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

function getTimelineCardClasses(type: "house" | "levin" | "nz") {
  if (type === "house") {
    return {
      card: "bg-emerald-50 border-emerald-200",
      dot: "bg-emerald-700",
      label: "text-emerald-800",
      icon: "text-emerald-800",
      year: "bg-emerald-800 text-white border-emerald-900",
    }
  }

  if (type === "nz") {
    return {
      card: "bg-sky-50 border-sky-200",
      dot: "bg-sky-700",
      label: "text-sky-800",
      icon: "text-sky-800",
      year: "bg-sky-800 text-white border-sky-900",
    }
  }

  return {
    card: "bg-amber-50 border-amber-200",
    dot: "bg-amber-700",
    label: "text-amber-800",
    icon: "text-amber-800",
    year: "bg-amber-800 text-white border-amber-900",
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
          "Following Dr Thompson’s sudden death, the house is purchased by the Levin Borough Council and named Thompson Memorial Cultural Centre. It becomes a community arts, crafts and cultural venue.",
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
    <section
      id="history"
      className="relative overflow-hidden py-16 md:py-20 bg-linear-to-b from-stone-100 via-amber-50/50 to-white"
    >
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-amber-700" />
          <span className="text-amber-800 font-sans text-xs tracking-[0.3em] uppercase">
            History
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-stone-950 mb-6 text-balance">
              The Story of Thompson House
            </h2>

            <p className="text-stone-700 max-w-3xl leading-relaxed text-pretty">
              Thompson House began as a gracious family home and medical practice
              before becoming one of Levin’s most treasured community arts and
              cultural venues. Its story connects the Gow and Thompson families,
              Levin’s growth as a service town, wartime hospitality, local arts,
              and decades of volunteer care.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <p className="text-3xl font-serif font-bold text-emerald-900">
                  1921
                </p>
                <p className="text-sm text-emerald-900/80">
                  House completed
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-3xl font-serif font-bold text-amber-900">
                  1974
                </p>
                <p className="text-sm text-amber-900/80">
                  Cultural centre established
                </p>
              </div>

              <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
                <p className="text-3xl font-serif font-bold text-sky-900">
                  1985
                </p>
                <p className="text-sm text-sky-900/80">
                  Historic place listing
                </p>
              </div>
            </div>
          </div>

          <figure className="rounded-4xl overflow-hidden border border-amber-200 bg-white shadow-xl">
            <div className="relative aspect-4/3">
              <Image
                src="/images/thompson-house-1920s-rendition.png"
                alt="Historical impression of Thompson House as it may have looked during a 1920s garden party"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
            </div>

            <figcaption className="p-5 bg-linear-to-r from-amber-100 to-stone-100">
              <div className="flex items-start gap-3">
                <Camera className="h-5 w-5 text-amber-800 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl font-bold text-stone-950">
                    Historical Impression: Thompson House in the 1920s
                  </h3>
                  <p className="text-sm text-stone-700 mt-1 leading-relaxed">
                    A sepia interpretation of how the house and gardens may have
                    looked during a 1920s gathering. This is not a historical
                    photograph.
                  </p>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="space-y-5 mb-12">
          <details className="group rounded-3xl border border-emerald-200 bg-white shadow-md overflow-hidden">
  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8 bg-linear-to-r from-emerald-50 to-white">
    <div>
      <p className="text-emerald-800 font-sans text-xs tracking-[0.3em] uppercase mb-2">
        Family House
      </p>

      <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-950">
        From the Gow family home to the Thompson Memorial Cultural Centre
      </h3>
    </div>

    <ChevronDown className="h-6 w-6 shrink-0 text-emerald-800 transition-transform duration-300 group-open:rotate-180" />
  </summary>

  <div className="px-6 pb-8 md:px-8 text-stone-700 leading-relaxed space-y-4">
    <p>
      Following World War I, Dr John Gow and his wife Dr Maysie Gow
      settled in Levin and commissioned a new family home and medical
      practice. The construction contract was signed on 9 February
      1920, and the house was designed by architects Frederick de
      Jersey Clere and Llewellyn Edwin Williams.
    </p>

    <p>
      Built in 1921 by Mr J Harvey of Harvey & Co, the house was
      designed in an English Cottage style, with steeply pitched
      roofs, dormers, multiple gables, two chimneys, and a sheltered
      gabled porch. The former stables stood to the south-east of the
      house.
    </p>

    <p>
      At a time when Levin had no public electricity supply, a Delco
      generator housed near the stables provided power for the
      property. The house also featured extensive timber construction,
      large landscaped grounds, and gardens planted with native trees
      collected by Dr Gow.
    </p>

    <p>
      Dr Maysie Gow was a pioneering medical professional and is
      believed to have been the first New Zealand woman to graduate
      MRCS and LRCP in England after women were admitted to the
      conjoint medical boards. Both Dr John and Dr Maysie Gow
      practised medicine from the house in its early years.
    </p>

    <p>
      Dr Samuel James “Jim” Thompson arrived in Levin in 1924 and
      began practising with Dr Gow. In 1926, he purchased the house
      and practice, making it both a family home and a place of
      medical service for the Levin community.
    </p>

    <p>
      During the Second World War, Thompson House became a well-known
      centre of hospitality for RNZAF airmen stationed at Weraroa and
      officers of the 2nd US Marine Division. Dr Thompson also served
      as station medical officer for the RNZAF training wing at
      Weraroa.
    </p>

    <p>
      Ella Thompson was closely connected with music, painting and
      theatre. She encouraged her husband’s involvement in the Levin
      Operatic and Dramatic Society and was remembered for her
      generosity and hospitality, particularly towards people involved
      in the arts.
    </p>

    <p>
      Thompson House sits beside the Levin War Memorial and the former
      public gardens, placing it within one of the town’s most
      historically significant civic areas.
    </p>

    <p>
      After Dr Thompson’s death, the house was purchased by Levin
      Borough Council in 1974 and named Thompson Memorial Cultural
      Centre. Members of the Thompson family helped transform the home
      into a community arts, crafts and cultural venue, with strong
      support from local volunteers and community groups.
    </p>
  </div>
</details>

          <details
            open
            className="group rounded-3xl border border-amber-200 bg-white shadow-md overflow-hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 md:p-8 bg-linear-to-r from-amber-50 to-white">
              <div>
                <p className="text-amber-800 font-sans text-xs tracking-[0.3em] uppercase mb-2">
                  Timeline
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-stone-950">
                  Levin and Thompson House through time
                </h3>
              </div>

              <ChevronDown className="h-6 w-6 shrink-0 text-amber-800 transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="px-6 pb-8 md:px-8">
              <div className="flex flex-wrap gap-3 mb-12 text-sm">
                <div className="flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-700" />
                  <Home className="w-4 h-4 text-emerald-800" />
                  <span className="text-emerald-950 font-medium">
                    Thompson House
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-amber-700" />
                  <MapPin className="w-4 h-4 text-amber-800" />
                  <span className="text-amber-950 font-medium">
                    Levin & Horowhenua
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2">
                  <div className="w-3 h-3 rounded-full bg-sky-700" />
                  <Landmark className="w-4 h-4 text-sky-800" />
                  <span className="text-sky-950 font-medium">
                    New Zealand
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-1 rounded-full bg-linear-to-b from-emerald-600 via-amber-600 to-sky-700" />

                <div className="flex flex-col gap-8 md:gap-6">
                  {timeline.map((item) => {
                    const yearStyle = item.house
                      ? getTimelineCardClasses("house")
                      : item.context?.scope === "NZ"
                        ? getTimelineCardClasses("nz")
                        : getTimelineCardClasses("levin")

                    return (
                      <div key={item.year} className="relative">
                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -top-1 z-20">
                          <span
                            className={`shadow-sm px-3 py-1 text-sm font-serif font-bold border rounded-full ${yearStyle.year}`}
                          >
                            {item.year}
                          </span>
                        </div>

                        <div className="flex flex-col md:flex-row pt-8 md:pt-6">
                          <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                            {item.house ? (
                              <div
                                className={`relative ml-10 md:ml-0 md:text-right rounded-2xl border p-5 shadow-sm ${getTimelineCardClasses("house").card}`}
                              >
                                <div
                                  className={`absolute -left-10.75 md:left-auto md:-right-10.75 top-6 w-4 h-4 rounded-full border-4 border-white z-10 ${getTimelineCardClasses("house").dot}`}
                                />
                                <div className="flex items-center gap-2 md:justify-end mb-1">
                                  <Home
                                    className={`w-4 h-4 md:order-2 ${getTimelineCardClasses("house").icon}`}
                                  />
                                  <span
                                    className={`text-xs uppercase tracking-wider font-semibold ${getTimelineCardClasses("house").label}`}
                                  >
                                    Thompson House
                                  </span>
                                </div>
                                <h4 className="font-serif text-lg font-semibold text-stone-950">
                                  {item.house.title}
                                </h4>
                                <p className="text-stone-700 mt-1 leading-relaxed text-sm">
                                  {item.house.description}
                                </p>
                              </div>
                            ) : (
                              <div className="hidden md:block" />
                            )}
                          </div>

                          <div className="md:w-1/2 md:pl-8">
                            {item.context ? (
                              <div
                                className={`relative ml-10 md:ml-0 rounded-2xl border p-5 shadow-sm ${
                                  item.context.scope === "NZ"
                                    ? getTimelineCardClasses("nz").card
                                    : getTimelineCardClasses("levin").card
                                }`}
                              >
                                {!item.house && (
                                  <div
                                    className={`absolute -left-10.75 md:left-auto md:-right-10.75 top-6 w-4 h-4 rounded-full border-4 border-white z-10 ${
                                      item.context.scope === "NZ"
                                        ? getTimelineCardClasses("nz").dot
                                        : getTimelineCardClasses("levin").dot
                                    }`}
                                  />
                                )}

                                <div className="flex items-center gap-2 mb-1">
                                  {item.context.scope === "NZ" ? (
                                    <Landmark
                                      className={`w-4 h-4 ${getTimelineCardClasses("nz").icon}`}
                                    />
                                  ) : (
                                    <MapPin
                                      className={`w-4 h-4 ${getTimelineCardClasses("levin").icon}`}
                                    />
                                  )}

                                  <span
                                    className={`text-xs uppercase tracking-wider font-semibold ${
                                      item.context.scope === "NZ"
                                        ? getTimelineCardClasses("nz").label
                                        : getTimelineCardClasses("levin").label
                                    }`}
                                  >
                                    {item.context.scope === "Levin"
                                      ? "Levin & Horowhenua"
                                      : "New Zealand"}
                                  </span>
                                </div>

                                <h4 className="font-serif text-lg font-semibold text-stone-950">
                                  {item.context.title}
                                </h4>

                                <p className="text-stone-700 mt-1 leading-relaxed text-sm">
                                  {item.context.description}
                                </p>
                              </div>
                            ) : (
                              <div className="hidden md:block" />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </details>
        </div>
      </div>
    </section>
  )
}