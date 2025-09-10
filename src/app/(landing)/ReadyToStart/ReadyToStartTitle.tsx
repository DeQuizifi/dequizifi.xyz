import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function ReadyToStartTitle() {
  return (
    <div className="text-center mb-16">
      <Badge
        variant="secondary"
        className="mb-4 px-4 py-2 text-sm font-medium glass-effect"
      >
        Ready to start
      </Badge>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join thousands of
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {" "}
          DeFi learners{" "}
        </span>
        today
      </h2>

      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Start your journey into decentralized finance with interactive quizzes,
        earn rewards, and become part of the most engaged crypto education
        community on Farcaster.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
          type="button"
          className="group font-semibold w-full sm:w-56 px-6 sm:px-5 py-3 sm:py-2 rounded-xl shadow-lg transition-transform duration-200 bg-gradient-to-r from-[var(--color-hero-gradient-from)] to-[var(--color-hero-gradient-to)] text-background hover:scale-105 hover:shadow-xl hover:opacity-90 text-base sm:text-sm whitespace-nowrap flex items-center justify-center gap-2"
        >
          Start Learning Now
          <ArrowRight className="w-4 h-4 sm:w-3 sm:h-3 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          type="button"
          className="font-semibold w-full sm:w-56 px-6 sm:px-5 py-3 sm:py-2 rounded-xl transition-transform duration-200 border border-border/20 text-foreground hover:scale-105 hover:shadow-sm text-base sm:text-sm whitespace-nowrap flex items-center justify-center"
        >
          Explore Platform
        </button>
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          Free to start
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          No credit card required
        </div>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
          Instant access
        </div>
      </div>
    </div>
  );
}
