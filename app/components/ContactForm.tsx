"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membershipInterest: "Just browsing",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-background border border-white/10 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">📩</div>
        <h3 className="font-heading text-2xl font-bold text-accent mb-3 tracking-wider uppercase">
          Message Sent!
        </h3>
        <p className="font-body text-sm text-white/70">
          Thank you, {formData.name}! We will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-background border border-white/10 rounded-lg p-8 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="font-heading text-sm font-bold text-foreground mb-1.5 block tracking-wider uppercase"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-secondary border border-white/10 rounded px-4 py-2.5 font-body text-sm text-foreground placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-heading text-sm font-bold text-foreground mb-1.5 block tracking-wider uppercase"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-secondary border border-white/10 rounded px-4 py-2.5 font-body text-sm text-foreground placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-heading text-sm font-bold text-foreground mb-1.5 block tracking-wider uppercase"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-secondary border border-white/10 rounded px-4 py-2.5 font-body text-sm text-foreground placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label
          htmlFor="membershipInterest"
          className="font-heading text-sm font-bold text-foreground mb-1.5 block tracking-wider uppercase"
        >
          Membership Interest
        </label>
        <select
          id="membershipInterest"
          name="membershipInterest"
          value={formData.membershipInterest}
          onChange={handleChange}
          className="w-full bg-secondary border border-white/10 rounded px-4 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
        >
          <option value="Just browsing">Just browsing</option>
          <option value="Basic">Basic — $29/mo</option>
          <option value="Pro">Pro — $49/mo</option>
          <option value="Elite">Elite — $79/mo</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-heading text-sm font-bold text-foreground mb-1.5 block tracking-wider uppercase"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-secondary border border-white/10 rounded px-4 py-2.5 font-body text-sm text-foreground placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
          placeholder="Tell us about your fitness goals..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-background font-heading font-bold text-sm py-3.5 rounded tracking-wider hover:bg-orange-500 transition-colors uppercase"
      >
        Send Message
      </button>
    </form>
  );
}
