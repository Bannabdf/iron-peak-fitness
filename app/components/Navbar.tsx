"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/membership", label: "Membership" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background border-b border-white/10 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-heading text-xl sm:text-2xl font-bold text-accent tracking-wider"
          >
            IRON PEAK FITNESS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-foreground hover:text-accent transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-accent text-background font-heading font-bold text-sm px-6 py-2.5 rounded tracking-wider hover:bg-orange-500 transition-colors uppercase"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-foreground focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-sm text-foreground hover:text-accent transition-colors uppercase tracking-wider"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block text-center bg-accent text-background font-heading font-bold text-sm px-6 py-2.5 rounded tracking-wider hover:bg-orange-500 transition-colors uppercase"
              onClick={() => setIsOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
