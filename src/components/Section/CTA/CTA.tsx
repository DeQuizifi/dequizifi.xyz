import React from "react";

const containerStyle: React.CSSProperties = {
  background: "var(--color-cta-bg)",
  border: "1px solid var(--color-cta-border)",
};


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  "aria-label"?: string;
};

function Button({
  children,
  variant = "primary",
  "aria-label": ariaLabel,
  onClick,
}: ButtonProps) {
  const base =
    "rounded-md px-6 py-2 font-medium shadow-md transition-transform transition duration-200 ease-in-out";
};

function Button({ children, variant = "primary", aria, onClick }: ButtonProps) {
  const variants: Record<string, string> = {
    primary:
      "bg-[var(--color-cta-primary-bg)] text-[var(--color-cta-primary-text)] hover:bg-[var(--color-cta-primary-hover-bg)]",
    secondary:
      "bg-[var(--color-cta-secondary-bg)] text-[var(--color-cta-secondary-text)] border-[1px] border-[var(--color-cta-secondary-border)] hover:bg-[var(--color-cta-secondary-hover-bg)]",
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} hover:scale-105`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default function CTA() {
  return (
    <section
      className="mx-4 sm:mx-auto mt-12 mb-8 max-w-3xl rounded-xl px-4 sm:px-8 py-10 text-center shadow-sm"
      style={containerStyle}
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
        <Button aria-label="Get Started Now - Begin learning DeFi">
          Get Started Now
        </Button>
        <Button
          variant="secondary"
          aria-label="View Demo - Preview the quiz platform"
        >
          View Demo
        </Button>
      </div>
    </section>
  );
}
