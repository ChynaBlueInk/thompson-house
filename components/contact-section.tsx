import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-16 bg-accent" />
          <span className="text-accent font-sans text-xs tracking-[0.3em] uppercase">
            Contact
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16 text-balance">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Visit Us
                </h3>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  4 Kent Street, Levin 5510
                  <br />
                  New Zealand
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Reception Hours
                </h3>
                <p className="text-muted-foreground mt-1 leading-relaxed">
                  Monday, Wednesday & Friday
                  <br />
                  10:00 am &ndash; 12:00 pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Phone
                </h3>
                <a
                  href="tel:0224869538"
                  className="text-primary hover:text-heritage-green-light transition-colors mt-1 inline-block"
                >
                  022 486 9538
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Email
                </h3>
                <a
                  href="mailto:admin@thompsonhouse.org.nz"
                  className="text-primary hover:text-heritage-green-light transition-colors mt-1 inline-block"
                >
                  admin@thompsonhouse.org.nz
                </a>
              </div>
            </div>
          </div>

          {/* Map embed */}
          <div className="relative aspect-4/3 lg:aspect-auto lg:min-h-100 rounded-sm overflow-hidden bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3084.5!2d175.2755!3d-40.6252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d40ac3d60c72f5b%3A0xb0bc3cd0e1f32d0!2s4+Kent+Street%2C+Levin+5510!5e0!3m2!1sen!2snz!4v1700000000000!5m2!1sen!2snz"
              width="100%"
              height="100%"
              style={{ border: 0, position: "absolute", inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Thompson House location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
