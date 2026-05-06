import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-house.jpg"
          alt="Thompson House, a gracious 1920s heritage home in Levin, New Zealand"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <p className="text-heritage-gold font-sans text-sm tracking-[0.3em] uppercase mb-6">
          Community Arts & Cultural Centre
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-heritage-cream leading-tight text-balance">
          Thompson House
        </h1>
        <p className="mt-6 text-heritage-cream/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans text-pretty">
          A gracious 1920s heritage home in Levin, New Zealand &mdash; the heart
          of community arts, culture, and creativity in the Horowhenua.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#rooms"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-wide rounded-sm hover:bg-heritage-green-light transition-colors"
          >
            Hire a Room
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3 border border-heritage-cream/40 text-heritage-cream font-sans text-sm tracking-wide rounded-sm hover:bg-heritage-cream/10 transition-colors"
          >
            Discover Our Story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-heritage-cream/60 text-xs tracking-widest uppercase font-sans">
          Scroll
        </span>
        <div className="w-px h-8 bg-heritage-cream/30" />
      </div>
    </section>
  )
}
