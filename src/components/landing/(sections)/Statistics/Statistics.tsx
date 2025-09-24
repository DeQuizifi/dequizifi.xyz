import React from "react";
import SectionBadge from "@/components/common/SectionBadge";
import StatisticsCards from "@/components/landing/(sections)/Statistics/StatisticsCards";
import { Users, BookOpen, Award, Coins, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Statistics: React.FC = () => {
  return (
    <section
      aria-labelledby="statistics-heading"
      className="py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent pointer-events-none" />

      <div className="mx-auto px-4 relative max-w-6xl">
        <div className="text-center mb-16">
          <SectionBadge
            text="Platform Metrics"
            className="mb-6 px-4 py-2 text-sm font-medium bg-muted/60 text-muted-foreground border-0"
          />

          <h2
            id="statistics-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight"
          >
            Powering DeFi Education{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
              Globally
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real numbers from our thriving ecosystem of learners, educators, and
            DeFi enthusiasts
          </p>
        </div>

        <StatisticsCards
          icons={{
            "Active Learners": Users,
            "Interactive Quizzes": BookOpen,
            "Unique Badges": Award,
            "Tokens Earned": Coins,
            "Completion Rate": TrendingUp,
            Countries: Globe,
          }}
        />

        {/* CTA intentionally removed per design — keep this area for future inline CTA if needed */}
        {/* CTA: Join button + caption */}
        <div className="flex flex-col items-center mt-4 mb-12 relative">
          {/* Subtle decorative gradient behind the button that uses theme tokens (no hardcoded colors) */}
          <div className="pointer-events-none absolute -inset-x-20 -bottom-8 h-36 rounded-full blur-3xl bg-gradient-to-r from-primary/20 to-transparent opacity-60 dark:from-primary/30" />

          <Button
            variant="gradient"
            size="lg"
            className="z-10 inline-flex items-center gap-3 text-base lg:text-lg lg:px-8 lg:py-3"
          >
            <Users className="w-5 h-5 lg:w-6 lg:h-6" />
            Join the Revolution
          </Button>

          <p className="text-sm lg:text-base text-muted-foreground mt-3 max-w-2xl text-center">
            Be part of the next generation of DeFi learners and builders
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
