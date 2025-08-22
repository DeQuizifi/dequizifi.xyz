import React from "react";

export default function CTA() {
  return (
    <section
      className="container mx-auto mt-12 mb-8 max-w-3xl rounded-xl px-8 py-10 text-center shadow-sm"
      style={{
        background: "var(--color-cta-bg)",
        border: "1px solid var(--color-cta-border)",
      }}
    >
      <h2
        className="mb-3 text-2xl font-bold"
        style={{ color: "var(--color-cta-title)" }}
      >
        Ready to Transform Your DeFi Knowledge?
      </h2>
      <p
        className="mb-7 text-sm"
        style={{ color: "var(--color-cta-description)" }}
      >
        Join thousands of learners earning while mastering DeFi through the most
        beautiful quiz platform in crypto.
      </p>
      <div className="flex justify-center gap-4">
        <button
          type="button"
          className="rounded-md px-6 py-2 font-medium shadow-md transition bg-[var(--color-cta-primary-bg)] text-[var(--color-cta-primary-text)] hover:bg-[var(--color-cta-primary-hover-bg)]"
          aria-label="Get Started Now - Begin learning DeFi"
        >
          Get Started Now
        </button>
        <button
          type="button"
          className="rounded-md px-6 py-2 font-medium shadow-md transition bg-[var(--color-cta-secondary-bg)] text-[var(--color-cta-secondary-text)] border-[1px] border-[var(--color-cta-secondary-border)] hover:bg-[var(--color-cta-secondary-hover-bg)]"
          aria-label="View Demo - Preview the quiz platform"
        >
          View Demo
        </button>
      </div>
    </section>
  );
}
