"use client";

import { Button } from "@/components/ui/button";
import { Brain, Wallet, Network, Image as ImageIcon } from "lucide-react";
import QuizCard from "./QuizCard";

export default function Quiz() {
  return (
    <section className="w-full bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Section header */}
        <div className="flex w-full justify-center mb-6">
          <span className="flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-semibold shadow-sm bg-[var(--card)] text-[var(--primary-foreground)] border-[var(--border)]">
            <Brain className="h-4 w-4 text-[var(--primary)]" aria-hidden />
            Web3 Quizzes
          </span>
        </div>

        <h2 className="aboutHeadingGradient text-center text-[40px] leading-tight md:text-5xl font-extrabold mb-4">
          Learn Web3 by Quiz
        </h2>
        <p className="text-center text-sm md:text-base mb-10 max-w-2xl mx-auto text-[var(--color-about-description)]">
          Explore bite-sized quizzes across DeFi, NFTs, L2s, and wallet
          security. Practice interactively and grow your onchain confidence.
        </p>

        {/* Top row: categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <QuizCard
            icon={
              <Wallet className="h-5 w-5 text-[var(--primary)]" aria-hidden />
            }
            title="DeFi Basics"
            subtitle="Lending, AMMs, governance"
          />
          <QuizCard
            icon={
              <ImageIcon
                className="h-5 w-5 text-[var(--primary)]"
                aria-hidden
              />
            }
            title="NFTs & Culture"
            subtitle="Ownership, royalties, metadata"
          />
          <QuizCard
            icon={
              <Network className="h-5 w-5 text-[var(--primary)]" aria-hidden />
            }
            title="Layer 2s"
            subtitle="Rollups, bridges, gas"
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <Button className="px-8 py-6 text-base bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-[var(--background)] hover:opacity-90">
            Start Web3 Quizzes
          </Button>
          <p className="text-xs text-muted-foreground">
            Earn tokens and badges as you learn.
          </p>
        </div>
      </div>
    </section>
  );
}
