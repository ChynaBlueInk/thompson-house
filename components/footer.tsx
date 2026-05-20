import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-heritage-cream">
              Thompson House
            </h3>
            <p className="text-heritage-cream/60 text-sm mt-2">
              Thompson Memorial Cultural Centre Inc.
            </p>
            <p className="text-heritage-cream/50 text-sm mt-4 leading-relaxed">
              A heritage 1920s community arts, crafts and cultural centre serving the
              people of Levin and the Horowhenua since 1974.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-heritage-cream tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/#about", label: "About" },
                { href: "/#history", label: "History" },
                { href: "/#rooms", label: "Hire a Room" },
                { href: "/#events", label: "Events" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-heritage-cream/60 hover:text-heritage-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-sans text-sm font-semibold text-heritage-cream tracking-wide uppercase mb-4">
              Contact
            </h4>
            <address className="not-italic flex flex-col gap-2 text-sm text-heritage-cream/60">
              <p>4 Kent Street, Levin 5510</p>
              <p>New Zealand</p>
              <a
                href="tel:0224869538"
                className="hover:text-heritage-gold transition-colors"
              >
                022 486 9538
              </a>
              <a
                href="mailto:admin@thompsonhouse.org.nz"
                className="hover:text-heritage-gold transition-colors"
              >
                admin@thompsonhouse.org.nz
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-heritage-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-heritage-cream/40 text-xs">
            Thompson Memorial Cultural Centre Inc. All rights reserved.
          </p>
          <p className="text-heritage-cream/40 text-xs">
            Supported by the Horowhenua District Council
          </p>
        </div>
      </div>
    </footer>
  )
}
