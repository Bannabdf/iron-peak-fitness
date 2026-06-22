import Link from "next/link";

const features = [
  {
    emoji: "🏋️",
    title: "200+ Equipment Pieces",
    description:
      "From free weights to cutting-edge machines, we have everything you need.",
  },
  {
    emoji: "👨‍🏫",
    title: "Expert Coaches",
    description:
      "Certified trainers dedicated to helping you reach your goals safely.",
  },
  {
    emoji: "🕐",
    title: "Open 24/7",
    description:
      "Train on your schedule — we never close, no matter the day or hour.",
  },
];

const plans = [
  {
    name: "Basic",
    price: 29,
    features: ["Full gym access", "Locker room access", "2 guest passes/mo"],
  },
  {
    name: "Pro",
    price: 49,
    features: [
      "Everything in Basic",
      "Unlimited classes",
      "1 personal training session/mo",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 79,
    features: [
      "Everything in Pro",
      "Unlimited personal training",
      "Priority class booking",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
            Unleash Your Potential
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            State-of-the-art equipment, expert coaches, and a community that
            pushes you further.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/membership"
              className="bg-accent text-background font-heading font-bold text-base px-8 py-3.5 rounded tracking-wider hover:bg-orange-500 transition-colors uppercase"
            >
              Join Now
            </Link>
            <Link
              href="/classes"
              className="border-2 border-foreground text-foreground font-heading font-bold text-base px-8 py-3.5 rounded tracking-wider hover:bg-white/10 transition-colors uppercase"
            >
              View Classes
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-foreground mb-14 tracking-tight">
            Why Choose Iron Peak
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-secondary border-t-4 border-accent rounded-lg p-8 text-center"
              >
                <div className="text-5xl mb-4">{feature.emoji}</div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 tracking-wider">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-white/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Preview */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center text-foreground mb-14 tracking-tight">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-background rounded-lg p-8 flex flex-col justify-between ${
                  plan.highlighted
                    ? "border-2 border-accent ring-1 ring-accent/50"
                    : "border border-white/10"
                }`}
              >
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-2 tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span className="font-heading text-4xl font-extrabold text-accent">
                      ${plan.price}
                    </span>
                    <span className="font-body text-sm text-white/60">/mo</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-body text-sm text-white/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/membership"
                  className={`block text-center font-heading font-bold text-sm px-6 py-3 rounded tracking-wider uppercase transition-colors ${
                    plan.highlighted
                      ? "bg-accent text-background hover:bg-orange-500"
                      : "border border-accent text-accent hover:bg-accent hover:text-background"
                  }`}
                >
                  {plan.highlighted ? "Get Started" : "Learn More"}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-accent py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-background mb-6 tracking-tight">
            Ready to Start?
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-background text-foreground font-heading font-bold text-base px-10 py-4 rounded tracking-wider hover:bg-neutral-900 transition-colors uppercase"
          >
            Get Your First Week Free
          </Link>
        </div>
      </section>
    </>
  );
}
