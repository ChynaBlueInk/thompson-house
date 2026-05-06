import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  Mail,
  Users,
  Calendar,
  Gift,
  Newspaper,
  Star,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Friends of Thompson House | Join Our Community",
  description:
    "Become a Friend of Thompson House and help support our heritage community arts centre in Levin. Enjoy exclusive benefits, events, and be part of preserving local history.",
}

const benefits = [
  {
    icon: Newspaper,
    title: "Quarterly Newsletter",
    description:
      "Receive our exclusive newsletter with updates on exhibitions, events, and the latest happenings at Thompson House.",
  },
  {
    icon: Calendar,
    title: "Priority Event Booking",
    description:
      "Be the first to know about upcoming events and exhibitions, with early access to bookings and reserved seating.",
  },
  {
    icon: Gift,
    title: "Room Hire Discount",
    description:
      "Enjoy a 10% discount on room hire for your meetings, workshops, or private functions at Thompson House.",
  },
  {
    icon: Users,
    title: "Members-Only Events",
    description:
      "Exclusive invitations to special Friends-only gatherings, exhibition openings, and behind-the-scenes tours.",
  },
  {
    icon: Star,
    title: "Recognition",
    description:
      "Your name displayed on our Friends honour board in the foyer, acknowledging your support of the arts community.",
  },
  {
    icon: Heart,
    title: "Supporting Heritage",
    description:
      "Your membership directly contributes to the preservation and maintenance of this beautiful 1920s heritage building.",
  },
]

const membershipTiers = [
  {
    name: "Individual",
    price: "$25",
    period: "per year",
    features: [
      "All standard Friends benefits",
      "One vote at AGM",
      "Quarterly newsletter",
      "10% room hire discount",
    ],
  },
  {
    name: "Family",
    price: "$40",
    period: "per year",
    features: [
      "All standard Friends benefits",
      "Covers up to 4 family members",
      "Two votes at AGM",
      "15% room hire discount",
    ],
    highlighted: true,
  },
  {
    name: "Life Member",
    price: "$250",
    period: "one-time",
    features: [
      "All Family benefits for life",
      "Special recognition plaque",
      "Permanent honour board listing",
      "20% room hire discount",
    ],
  },
]

export default function FriendsPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl font-bold">
            Friends of Thompson House
          </h1>
          <p className="mt-3 text-primary-foreground/80 text-lg max-w-2xl">
            Join our community of supporters and help preserve this treasured
            heritage building for future generations.
          </p>
        </div>
      </header>

      {/* Hero image section */}
      <section className="relative h-64 md:h-80">
        <Image
          src="/images/gardens.jpg"
          alt="Thompson House gardens"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background" />
      </section>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
            <Heart className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance">
            Why Become a Friend?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            Thompson House has been a cornerstone of arts and culture in Levin
            since 1974. As a Friend of Thompson House, you become part of a
            passionate community dedicated to preserving this beautiful heritage
            building and supporting the vibrant arts scene in the Horowhenua
            region. Your membership helps us maintain the building, host
            exhibitions and events, and ensure that Thompson House remains a
            welcoming space for all.
          </p>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
            Member Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <Card
                key={benefit.title}
                className="bg-card border-border hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-serif text-lg">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Membership tiers */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-4">
          Membership Options
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Choose the membership level that suits you best. All memberships run
          for 12 months from the date of joining.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipTiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative ${
                tier.highlighted
                  ? "border-primary border-2 shadow-lg"
                  : "border-border"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center pb-2">
                <CardTitle className="font-serif text-2xl">
                  {tier.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">
                    {tier.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-2">
                    {tier.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 mt-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How to join */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-center mb-8">
            How to Join
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Option 1: In person */}
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Join In Person
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Visit Thompson House during open hours and speak to one of our
                friendly committee members. We would love to meet you and show
                you around our beautiful heritage building.
              </p>
              <address className="not-italic text-sm text-primary-foreground/90">
                <strong>Thompson House</strong>
                <br />4 Kent Street, Levin 5510
                <br />
                New Zealand
              </address>
            </div>

            {/* Option 2: By email */}
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Join by Email
              </h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
                Send us an email with your name, address, phone number, and
                preferred membership type. We will send you payment details and
                a membership form to complete.
              </p>
              <a
                href="mailto:admin@thompsonhouse.org.nz?subject=Friends%20of%20Thompson%20House%20Membership"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 rounded-md font-medium text-sm hover:bg-primary-foreground/90 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Email Us to Join
              </a>
            </div>
          </div>

          {/* Payment methods */}
          <div className="mt-8 text-center">
            <h3 className="font-serif text-xl font-semibold mb-4">
              Payment Methods
            </h3>
            <p className="text-primary-foreground/80 text-sm max-w-2xl mx-auto">
              We accept cash, cheque, or direct bank transfer. Payment details
              will be provided when you contact us. All memberships are tax
              deductible as Thompson Memorial Cultural Centre Inc. is a
              registered charitable trust.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col gap-6">
          <div className="border-b border-border pb-6">
            <h3 className="font-semibold text-foreground mb-2">
              When does my membership start?
            </h3>
            <p className="text-muted-foreground text-sm">
              Your membership begins on the date we receive your payment and
              runs for 12 months (unless you have chosen Life Membership).
            </p>
          </div>
          <div className="border-b border-border pb-6">
            <h3 className="font-semibold text-foreground mb-2">
              Can I upgrade my membership?
            </h3>
            <p className="text-muted-foreground text-sm">
              Yes! You can upgrade at any time by paying the difference between
              your current membership and the new level. Contact us and we will
              sort it out for you.
            </p>
          </div>
          <div className="border-b border-border pb-6">
            <h3 className="font-semibold text-foreground mb-2">
              How do I receive the newsletter?
            </h3>
            <p className="text-muted-foreground text-sm">
              Our quarterly newsletter is sent by email. Please ensure you
              provide us with a current email address when joining. If you
              prefer a printed copy, just let us know.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">
              Can I give a membership as a gift?
            </h3>
            <p className="text-muted-foreground text-sm">
              Absolutely! Gift memberships make wonderful presents for art
              lovers, history enthusiasts, or anyone who appreciates our
              beautiful heritage building. Contact us to arrange a gift
              membership.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-muted-foreground mb-8">
            Your support makes a real difference. Join the Friends of Thompson
            House today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <a href="mailto:admin@thompsonhouse.org.nz?subject=Friends%20of%20Thompson%20House%20Membership">
                <Mail className="w-4 h-4 mr-2" />
                Join by Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer link back */}
      <footer className="bg-foreground text-background py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="font-serif text-xl font-bold text-heritage-cream"
          >
            Thompson House
          </Link>
          <p className="text-heritage-cream/60 text-sm">
            Thompson Memorial Cultural Centre Inc.
          </p>
        </div>
      </footer>
    </main>
  )
}
