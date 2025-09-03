"use client";
import React from "react";
import { Button } from "@/components/ui/button";

type ReadyToStartCTAProps = {
  onGetStarted?: () => void;
  onViewDemo?: () => void;
  getStartedLabel?: string;
  viewDemoLabel?: string;
};

export default function ReadyToStartCTA({
  onGetStarted,
  onViewDemo,
  getStartedLabel = "Get Started Now",
  viewDemoLabel = "View Demo",
}: ReadyToStartCTAProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-center gap-4">
        <Button type="button" className="px-6" onClick={onGetStarted}>
          {getStartedLabel}
        </Button>

        <Button
          type="button"
          variant="secondary"
          className="px-6"
          onClick={onViewDemo}
        >
          {viewDemoLabel}
        </Button>
      </div>

      <ul
        className="mt-4 flex items-center justify-center gap-6 text-sm"
      >
        <li className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            aria-hidden
          />
          <span>Free to start</span>
        </li>

        <li className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            aria-hidden
          />
          <span>No credit card required</span>
        </li>

        <li className="flex items-center gap-2">
          <span
            className="inline-block w-2 h-2 rounded-full"
            aria-hidden
          />
          <span>Instant access</span>
        </li>
      </ul>
    </div>
  );
}
