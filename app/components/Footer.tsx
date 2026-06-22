import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-accent tracking-wider"
            >
              IRON PEAK FITNESS
            </Link>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="font-body text-sm text-foreground hover:text-accent transition-colors uppercase tracking-wider"
            >
              Home
            </Link>
            <Link
              href="/membership"
              className="font-body text-sm text-foreground hover:text-accent transition-colors uppercase tracking-wider"
            >
              Membership
            </Link>
            <Link
              href="/classes"
              className="font-body text-sm text-foreground hover:text-accent transition-colors uppercase tracking-wider"
            >
              Classes
            </Link>
            <Link
              href="/contact"
              className="font-body text-sm text-foreground hover:text-accent transition-colors uppercase tracking-wider"
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <span className="font-body text-sm text-foreground">
              (555) 123-4567
            </span>
            <span className="font-body text-sm text-foreground">
              123 Fitness Ave, Gym City, GC 10001
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="font-body text-xs text-white/60">
            &copy; 2026 Iron Peak Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
