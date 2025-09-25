import React from "react";

import CustomCard from "@/components/common/CustomCard";
import Header from "@/components/common/header";
import { Star } from "lucide-react";
import FEATURE_CARDS from "./featureCards";
import FEATURE_HIGHLIGHTS from "./featureHighlights";
export type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;


export default function Feature(): React.ReactElement {
  return (
    <section
      aria-labelledby="features-heading"
      className="overflow-x-hidden min-h-screen py-12 md:py-16 lg:py-20 bg-background"
    >
      <h2 id="features-heading" className="sr-only">
        Core Features
      </h2>
      <div className="w-full flex justify-center mb-10">
        <span className="flex items-center px-4 py-2 gap-2 text-base font-semibold rounded-full bg-muted text-foreground border border-border shadow-sm">
          <Star className="w-5 h-5 text-primary" aria-hidden />
          <span aria-hidden>Core Features</span>
        </span>
      </div>

      <div className="mb-12 md:mb-16 lg:mb-20 text-center">
        <Header
          title="Studio-Grade Experience"
          subtitle="Every detail crafted for the modern crypto learner who values both substance and style."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {FEATURE_CARDS.map((card) => (
            <div key={card.title} className="w-full max-w-md">
              <CustomCard {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {FEATURE_HIGHLIGHTS.map((highlight) => (
            <div key={highlight.title} className="w-full flex flex-col items-center text-center p-6 rounded-xl border bg-white shadow-sm">
              <span className="mb-3">
                <highlight.IconComponent className="w-8 h-8 text-primary" aria-hidden />
              </span>
              <h3 className="font-semibold text-lg mb-1">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm">{highlight.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
