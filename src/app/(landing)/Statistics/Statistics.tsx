import React from "react";
import { Badge } from "@/components/ui/badge";

const Statistics: React.FC = () => {
  return (
    <section aria-labelledby="statistics-heading" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium glass-effect">
            Platform Metrics
          </Badge>

          <h2 id="statistics-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Powering DeFi Education{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Globally
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Real numbers from our thriving ecosystem of learners, educators, and DeFi enthusiasts
          </p>
        </div>

        {/* Placeholder grid for future statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 rounded-lg border bg-card/50 glass-effect text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              {/* Icon placeholder */}
              <div className="w-8 h-8 rounded-full bg-primary/60" />
            </div>
            <h3 className="text-2xl font-bold mb-2">15,000+</h3>
            <p className="text-sm font-medium text-muted-foreground">Active Learners</p>
          </div>

          <div className="p-8 rounded-lg border bg-card/50 glass-effect text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary/60" />
            </div>
            <h3 className="text-2xl font-bold mb-2">200+</h3>
            <p className="text-sm font-medium text-muted-foreground">Interactive Quizzes</p>
          </div>

          <div className="p-8 rounded-lg border bg-card/50 glass-effect text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-primary/60" />
            </div>
            <h3 className="text-2xl font-bold mb-2">85+</h3>
            <p className="text-sm font-medium text-muted-foreground">Unique Badges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
