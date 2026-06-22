import Link from "next/link";

const tiers = [
  {
    name: "Basic",
    price: 29,
    description: "Everything you need to get started on your fitness journey.",
    features: [
      "Full gym access during staff hours",
      "Locker room access with shower facilities",
      "2 guest passes per month",
      "Free initial fitness assessment",
      "Access to mobile app",
    ],
  },
  {
    name: "Pro",
    price: 49,
    description:
      "For dedicated athletes looking to take their training further.",
    features: [
      "Everything in Basic",
      "24/7 gym access",
      "Unlimited group classes",
      "1 personal training session per month",
      "Custom nutrition guide",
      "Priority class registration",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 79,
    description:
      "The ultimate experience with full premium access and perks.",
    features: [
      "Everything in Pro",
      "Unlimited personal training sessions",
      "Priority booking for all classes & equipment",
      "Exclusive merchandise discount (20% off)",
      "Quarterly body composition analysis",
      "VIP access to special events & workshops",
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 px-6 bg-background border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Membership Plans
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your goals. Every membership includes
            access to our state-of-the-art facility and supportive community.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-background rounded-lg p-8 flex flex-col justify-between ${
                  tier.highlighted
                    ? "border-2 border-accent ring-1 ring-accent/50 scale-[1.02] md:scale-105"
                    : "border border-white/10"
                }`}
              >
                {tier.highlighted && (
                  <span className="font-heading text-xs font-bold text-background bg-accent px-3 py-1 rounded-full inline-block w-fit mb-4 uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-2 tracking-wider">
                    {tier.name}
                  </h2>
                  <div className="mb-4">
                    <span className="font-heading text-5xl font-extrabold text-accent">
                      ${tier.price}
                    </span>
                    <span className="font-body text-sm text-white/60">/mo</span>
                  </div>
                  <p className="font-body text-sm text-white/70 mb-8 leading-relaxed">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="font-body text-sm text-white/80 flex items-start gap-2"
                      >
                        <span className="text-accent mt-0.5 shrink-0">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className={`block text-center font-heading font-bold text-sm px-6 py-3.5 rounded tracking-wider uppercase transition-colors ${
                    tier.highlighted
                      ? "bg-accent text-background hover:bg-orange-500"
                      : "border border-accent text-accent hover:bg-accent hover:text-background"
                  }`}
                >
                  Sign Up
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
