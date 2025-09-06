import React from "react";
import { BookOpen, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import HowItWorksCard from "@/components/landing/HowItWorksCard";

type Step = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay?: string;
};

const steps: Step[] = [
  {
    id: "learn",
    icon: BookOpen,
    title: "Learn & Study",
    description:
      "Access comprehensive DeFi courses and interactive content designed for all skill levels",
    color: "from-blue-500 to-cyan-500",
    delay: "0ms",
  },
  {
    id: "quiz",
    icon: Zap,
    title: "Take Quizzes",
    description:
      "Test your knowledge with engaging quizzes and earn points for correct answers",
    color: "from-purple-500 to-pink-500",
    delay: "200ms",
  },
  {
    id: "rewards",
    icon: Trophy,
    title: "Earn Rewards",
    description:
      "Collect tokens, badges, and NFT certificates as you complete learning milestones",
    color: "from-yellow-500 to-orange-500",
    delay: "400ms",
  },
  {
    id: "community",
    icon: Users,
    title: "Join Community",
    description:
      "Connect with fellow learners in the Farcaster ecosystem and share your achievements",
    color: "from-green-500 to-emerald-500",
    delay: "600ms",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-secondary opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Floating decorative elements (purely decorative) */}
      <div
        aria-hidden
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 floating-animation blur-xl"
      />
      <div
        aria-hidden
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 floating-animation blur-xl"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium glass-effect"
          >
            Simple Process
          </Badge>
          <h2
            id="how-it-works-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master DeFi in four simple steps and become part of the most
            innovative crypto education community
          </p>
        </div>

        {/* Steps Grid */}
        {/* Steps Grid */}
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.id}>
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
