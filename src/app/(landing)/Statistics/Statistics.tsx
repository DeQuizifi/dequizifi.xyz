import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Award, Coins, TrendingUp, Globe } from "lucide-react";

const Statistics: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: "15,000+",
      title: "Active Learners",
      description: "Growing community of DeFi enthusiasts",
    },
    {
      icon: BookOpen,
      number: "200+",
      title: "Interactive Quizzes",
      description: "Covering all major DeFi protocols",
    },
    {
      icon: Award,
      number: "85+",
      title: "Unique Badges",
      description: "Collectible achievements to unlock",
    },
    {
      icon: Coins,
      number: "1M+",
      title: "Tokens Earned",
      description: "Rewarded to our community",
    },
    {
      icon: TrendingUp,
      number: "95%",
      title: "Completion Rate",
      description: "Students who finish courses",
    },
    {
      icon: Globe,
      number: "50+",
      title: "Countries",
      description: "Global DeFi education reach",
    },
  ];

  return (
    <section
      aria-labelledby="statistics-heading"
      className="py-16 lg:py-24  relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-transparent" />

      <div className="container mx-auto px-4 relative max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium bg-muted/60 text-muted-foreground border-0 rounded-full"
          >
            📊 Platform Metrics
          </Badge>

          <h2
            id="statistics-heading"
            className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 tracking-tight"
          >
            Powering DeFi Education{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Globally
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real numbers from our thriving ecosystem of learners, educators, and
            DeFi enthusiasts
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl backdrop-blur-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-background/80"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Number */}
                <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-primary">
                  {stat.number}
                </h3>

                {/* Title */}
                <h4 className="text-lg font-semibold mb-2 text-foreground">
                  {stat.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

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
