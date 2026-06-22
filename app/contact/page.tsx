import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-24 pb-12 px-6 bg-background border-b border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground mb-4 tracking-tight">
            Get In Touch
          </h1>
          <p className="font-body text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Ready to start your fitness journey? Reach out and we will help you
            take the first step.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <ContactForm />

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-bold text-accent mb-3 tracking-wider uppercase">
                Visit Us
              </h3>
              <p className="font-body text-base text-white/80 leading-relaxed">
                123 Fitness Avenue
                <br />
                Gym City, GC 10001
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-accent mb-3 tracking-wider uppercase">
                Call Us
              </h3>
              <p className="font-body text-base text-white/80 leading-relaxed">
                (555) 123-4567
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-accent mb-3 tracking-wider uppercase">
                Email Us
              </h3>
              <p className="font-body text-base text-white/80 leading-relaxed">
                info@ironpeakfitness.com
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold text-accent mb-3 tracking-wider uppercase">
                Hours
              </h3>
              <p className="font-body text-base text-white/80 leading-relaxed">
                <span className="text-accent">Gym:</span> Open 24/7
              </p>
              <p className="font-body text-base text-white/80 leading-relaxed">
                <span className="text-accent">Staff:</span> Mon – Fri, 6am –
                10pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
