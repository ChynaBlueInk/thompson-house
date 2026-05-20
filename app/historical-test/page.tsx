"use client"

import { useState } from "react"
import {
  ChevronLeft,
  ChevronRight,
  Stethoscope,
  Heart,
  Plane,
  Trees,
  Lightbulb,
  Home,
} from "lucide-react"

const peopleStories = [
  {
    name: "Dr John Gow",
    role: "Doctor, veteran and founder",
    icon: Stethoscope,
    content:
      "Following service as a Captain in the Medical Corps during World War I, Dr John Gow settled in Levin and planned a new family home and medical practice that would later become Thompson House.",
  },
  {
    name: "Dr Maysie Gow",
    role: "Medical pioneer",
    icon: Heart,
    content:
      "Dr Maysie Gow was believed to be the first New Zealand woman to graduate MRCS and LRCP in England after women were admitted to the conjoint medical boards. She practised medicine from the house alongside her husband.",
  },
  {
    name: "Dr Jim Thompson",
    role: "Community doctor",
    icon: Stethoscope,
    content:
      "Dr Samuel James “Jim” Thompson purchased the house and practice in 1926 and became deeply involved in Levin community life, wartime service, and local organisations.",
  },
  {
    name: "Ella Thompson",
    role: "Arts supporter",
    icon: Heart,
    content:
      "Ella Thompson was closely connected with music, painting and theatre and helped shape the welcoming and artistic spirit that later influenced the cultural centre.",
  },
]

const hiddenStories = [
  {
    title: "Before Levin had electricity",
    icon: Lightbulb,
    text:
      "At a time when Levin had no public electricity supply, Thompson House generated its own power using a Delco generator near the stables.",
  },
  {
    title: "Wartime hospitality",
    icon: Plane,
    text:
      "During World War II, the house became a centre of hospitality for RNZAF airmen stationed at Weraroa and officers of the 2nd US Marine Division.",
  },
  {
    title: "Gardens and native trees",
    icon: Trees,
    text:
      "Many of the native trees around the property were collected from local bush areas by Dr Gow as part of the original landscape design.",
  },
  {
    title: "A family connected to Levin",
    icon: Home,
    text:
      "Members of the Gow family continued to live in Levin after the property was sold, and descendants may still have connections to the district today.",
  },
]

export function StorybookHistorySection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === peopleStories.length - 1 ? 0 : prev + 1
    )
  }

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? peopleStories.length - 1 : prev - 1
    )
  }

  const current = peopleStories[currentSlide]
  const Icon = current.icon

  return (
    <section className="space-y-12">
      {/* Storybook Carousel */}
      <div className="rounded-4xl overflow-hidden border border-stone-300 bg-linear-to-br from-amber-50 via-stone-50 to-white shadow-xl">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Panel */}
          <div className="relative overflow-hidden bg-linear-to-br from-stone-800 via-stone-700 to-stone-900 px-8 py-10 md:px-10 md:py-12 text-white">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/paper-texture.png')]" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-amber-200 mb-4">
                  The People of Thompson House
                </p>

                <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Icon className="w-10 h-10 text-amber-100" />
                </div>

                <div className="min-h-32">
                  <h3 className="font-serif text-3xl md:text-4xl font-bold leading-tight mb-3">
                    {current.name}
                  </h3>

                  <p className="uppercase tracking-wide text-xs text-amber-200">
                    {current.role}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextSlide}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="relative bg-[radial-gradient(circle_at_top_right,rgba(180,140,60,0.08),transparent_40%)] px-8 py-10 md:px-10 md:py-12">
            <div className="absolute top-6 right-6 text-[6rem] md:text-[7rem] font-serif text-stone-200/30 pointer-events-none select-none leading-none">
              0{currentSlide + 1}
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 text-amber-900 px-4 py-2 text-xs uppercase tracking-wide mb-6">
                  Historical Story
                </div>

                <div className="min-h-40 flex items-start">
                  <p className="font-serif text-xl md:text-2xl leading-relaxed text-stone-800 max-w-2xl">
                    {current.content}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-stone-300">
                <p className="text-xs uppercase tracking-[0.25em] text-stone-500 mb-4">
                  Thompson House Heritage Collection
                </p>

                <div className="flex gap-2">
                  {peopleStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`View story ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? "w-10 bg-amber-700"
                          : "w-5 bg-stone-300 hover:bg-stone-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hidden Stories */}
      <div>
        <div className="mb-8">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-800 mb-3">
            Hidden Stories
          </p>

          <h3 className="font-serif text-3xl md:text-4xl font-bold text-stone-950 mb-3">
            Small Details That Bring History to Life
          </h3>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {hiddenStories.map((story) => {
            const StoryIcon = story.icon

            return (
              <div
                key={story.title}
                className="relative rounded-4xl bg-linear-to-b from-amber-50 to-white border border-amber-200 p-5 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Vintage pin */}
                <div className="absolute -top-3 right-8 w-5 h-5 rounded-full bg-amber-700 shadow-md" />

                <div className="w-12 h-12 rounded-full bg-white border border-amber-200 flex items-center justify-center mb-4">
                  <StoryIcon className="w-6 h-6 text-amber-800" />
                </div>

                <h4 className="font-serif text-xl font-bold text-stone-900 mb-3">
                  {story.title}
                </h4>

                <p className="text-stone-700 leading-relaxed text-sm">
                  {story.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Heritage Quote */}
      <div className="rounded-4xl overflow-hidden bg-linear-to-r from-emerald-900 via-stone-900 to-emerald-950 px-8 py-10 md:px-12 md:py-14 text-center text-white shadow-xl">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed max-w-4xl mx-auto">
          “Thompson House reflects the growth of Levin, the service of
          local doctors, the changing role of women in medicine, and
          decades of community commitment to arts, crafts and culture.”
        </p>
      </div>
    </section>
  )
}

export default function HistoricalTestPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <StorybookHistorySection />
      </div>
    </main>
  )
}