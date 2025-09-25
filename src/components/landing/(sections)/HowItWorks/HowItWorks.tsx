
import React from "react";
import HowItWorksCard from "@/components/landing/(sections)/HowItWorks/HowItWorksCard";
import SectionBadge from "@/components/common/SectionBadge";
import { steps } from "@/components/landing/(sections)/HowItWorks/steps";


const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Floating blurred circles for depth */}
      <div
        aria-hidden
        className="absolute top-16 left-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-16 right-8 w-40 h-40 rounded-full bg-accent/10 blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-14">
          <SectionBadge text="Simple Process" className="mb-4" />
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            How It <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master DeFi in four simple steps and become part of the most innovative crypto education community.
          </p>
        </div>

        {/* Steps Grid */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.id} className="flex">
                <HowItWorksCard
                  icon={Icon}
                  title={step.title}
                  description={step.description}
                  color={step.color}
                  delay={step.delay}
                  index={i}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
