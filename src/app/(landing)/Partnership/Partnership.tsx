"use client";

import React, { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

// Minimal partnership data is kept only to calculate counts per category.
const partnerships = [
  { name: "Ethereum", category: "Blockchain" },
  { name: "Polygon", category: "Layer 2" },
  { name: "Arbitrum", category: "Layer 2" },
  { name: "Optimism", category: "Layer 2" },
  { name: "Uniswap", category: "DeFi" },
  { name: "Aave", category: "DeFi" },
  { name: "Compound", category: "DeFi" },
  { name: "1inch", category: "DeFi" },
  { name: "Chainlink", category: "Infrastructure" },
  { name: "The Graph", category: "Infrastructure" },
  { name: "IPFS", category: "Infrastructure" },
  { name: "Farcaster", category: "Social" },
];

const categories = [
  "All",
  "Blockchain",
  "Layer 2",
  "DeFi",
  "Infrastructure",
  "Social",
];

const Partnership = () => {
  const [selected, setSelected] = useState<string>("All");

  const filtered = useMemo(() => {
    return selected === "All"
      ? partnerships
      : partnerships.filter((p) => p.category === selected);
  }, [selected]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Trusted Ecosystem
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Powering{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              DeFi Education
            </span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn about the most important protocols and platforms in the DeFi
            ecosystem through hands-on experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 my-8">
          {categories.map((cat) => {
            const active = selected === cat;
            return (
              <Badge
                key={cat}
                variant={active ? "default" : "secondary"}
                aria-pressed={active}
                role="button"
                tabIndex={0}
                className={`px-4 py-2 cursor-pointer ${
                  active ? "bg-primary text-background" : ""
                } motion-safe:hover:scale-105 motion-safe:transition-transform motion-safe:duration-150 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                onClick={() => setSelected(cat)}
                onKeyDown={(e) => {
                  // Prevent page scroll when using Space to activate the chip
                  if (e.key === " ") {
                    e.preventDefault();
                    setSelected(cat);
                  }

                  if (e.key === "Enter") {
                    setSelected(cat);
                  }
                }}
              >
                {cat}
              </Badge>
            );
          })}
        </div>

        {/* Partnerships Placeholder Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full text-center text-sm text-muted-foreground">
              No partners in this category yet.
            </div>
          ) : (
            filtered.map((p) => (
              <Card
                key={p.name}
                className="group relative p-6 text-center hover:shadow-card-hover transition-all duration-300 border-0 glass-effect"
              >
                <div className="text-3xl mb-3 text-muted-foreground">🔲</div>
                <h3 className="font-semibold text-sm mb-1">
                  Protocol Placeholder
                </h3>
                <p className="text-xs text-muted-foreground">
                  Category: {p.category}
                </p>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            ))
          )}
        </div>

        {/* Footer CTA showing counts */}
        <div className="text-center mt-10">
          <span className="text-sm text-muted-foreground">
            Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}{" "}
            for {selected}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Partnership;
