import React from "react";
import { Button } from "@/components/ui/button";

export default function ReadyToStartCTA() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center gap-4">
        <Button
          aria-label="Get Started Now - Begin learning DeFi"
          className="px-6"
        >
          Get Started Now
        </Button>

        <Button
          aria-label="View Demo - Preview the quiz platform"
          variant="secondary"
          className="px-6"
        >
          View Demo
        </Button>
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-6 text-sm"
        style={{ color: "var(--color-cta-description)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--color-cta-primary-bg)]"
            aria-hidden
          />
          <span>Free to start</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--color-cta-primary-bg)]"
            aria-hidden
          />
          <span>No credit card required</span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full bg-[var(--color-cta-primary-bg)]"
            aria-hidden
          />
          <span>Instant access</span>
        </div>
      </div>
    </div>
  );
}
