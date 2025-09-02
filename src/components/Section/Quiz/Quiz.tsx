"use client";

import { Button } from "@/components/ui/button";
import { Brain, Wallet, Network, Image as ImageIcon } from "lucide-react";
import QuizCard from "./QuizCard";
// Import the modal component for quiz card previews
import QuizCardPreview from "./QuizCardPreview";
import React, { useState } from "react";

export default function Quiz() {
  // State to track which quiz card is being previewed and its position
  const [preview, setPreview] = useState<{
    title: string;
    subtitle?: string;
    position: { top: number; left: number };
  } | null>(null);

  // Handler to open the preview modal with quiz card details and position
  const handlePreview = (
    position: { top: number; left: number },
    title: string,
    subtitle?: string
  ) => {
    setPreview({ title, subtitle, position });
  };

  // Handler to close the preview modal
  const closeModal = () => setPreview(null);

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section header */}
        <div className="flex w-full justify-center mb-6">
          <span className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold shadow-sm">
            <Brain className="h-4 w-4" aria-hidden />
            Web3 Quizzes
          </span>
        </div>

        <h2 className="text-center text-[40px] leading-tight md:text-5xl font-extrabold mb-4">
          Learn Web3 by Quiz
        </h2>
        <p className="text-center text-sm md:text-base mb-10 max-w-2xl mx-auto">
          Explore bite-sized quizzes across DeFi, NFTs, L2s, and wallet
          security. Practice interactively and grow your onchain confidence.
        </p>

        {/* Top row: categories */}
        {/* Quiz cards with preview functionality. Each card passes its details to the preview modal handler. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <QuizCard
            icon={<Wallet className="h-5 w-5" aria-hidden />}
            title="DeFi Basics"
            subtitle="Lending, AMMs, governance"
            onPreview={handlePreview}
          />
          <QuizCard
            icon={<ImageIcon className="h-5 w-5" aria-hidden />}
            title="NFTs & Culture"
            subtitle="Ownership, royalties, metadata"
            onPreview={handlePreview}
          />
          <QuizCard
            icon={<Network className="h-5 w-5" aria-hidden />}
            title="Layer 2s"
            subtitle="Rollups, bridges, gas"
            onPreview={handlePreview}
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button className="px-8 py-6 font-bold text-base hover:opacity-90 transition-transform duration-200 hover:scale-110">
            Start Web3 Quizzes
          </Button>
          <p className="text-xs text-muted-foreground">
            Earn tokens and badges as you learn.
          </p>
        </div>
      </div>
      {/* Preview Modal: Shows when a quiz card's Preview button is clicked */}
      {preview && (
        <QuizCardPreview
          title={preview.title}
          subtitle={preview.subtitle}
          onClose={closeModal}
          position={preview.position}
        />
      )}
    </section>
  );
}
