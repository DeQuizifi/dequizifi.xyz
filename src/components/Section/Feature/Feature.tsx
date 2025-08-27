import CustomCard from "@/components/common/CustomCard";
import type { CustomCardProps } from "@/components/common/CustomCard";
import Header from "@/components/Header/header";
import Footer from "@/components/FeatureFooter/featureFooter";
import { Star, GraduationCap, Trophy, Zap, Users } from "lucide-react";

const footers = [
  {
    title: "Expert Content",
    subtitle: "Curated by DeFi professionals",
    IconComponent: GraduationCap,
  },
  {
    title: "Achievement System",
    subtitle: "Unlock badges and milestones",
    IconComponent: Trophy,
  },
  {
    title: "Real-time Rewards",
    subtitle: "Instant token distribution",
    IconComponent: Zap,
  },
  {
    title: "Farcaster Native",
    subtitle: "Built for crypto-social",
    IconComponent: Users,
  },
];

const FEATURE_CARDS = [
  {
    icon: "Brain",
    buttonlabel: "Learn",
    title: "Deep DeFi Learning",
    description:
      "Master protocols, strategies, and concepts through interactive quizzes with real-time knowledge updates.",
    features: [
      "Interactive quizzes",
      "Real-time knowledge updates",
      "Comprehensive protocol coverage",
    ],
  },
  {
    icon: "Lightbulb",
    buttonlabel: "Earn",
    title: "Multiple Earning Loops",
    description:
      "Earn tokens for correct answers, trade achievement badges, and participate in revenue-sharing quizzes.",
    features: ["Token Rewards", "Badge Trading", "Revenue Share"],
  },
  {
  icon: "Share2",
    buttonlabel: "Connect",
    title: "Social Learning",
    description:
      "Join leaderboards, collect badges, challenge friends, and learn together in the Farcaster community.",
    features: ["Leaderboards", "Multiplayer", "Community"],
  },
] as const satisfies ReadonlyArray<CustomCardProps>;

export default function Feature() {
  return (
    <section
      aria-labelledby="features-heading"
      className="bg-sidebar-primary-foreground overflow-x-hidden min-h-screen py-8 md:py-12 lg:py-16"
    >
      <h2 id="features-heading" className="sr-only">
        Core Features
      </h2>

      {/* Badge Section */}
      <div className="w-full flex justify-center mb-6 md:mb-8">
        <span className="flex items-center px-3 py-1.5 gap-1.5 text-sm font-medium rounded-full bg-sidebar-primary-foreground text-foreground border border-chart-2 shadow-sm hover:shadow-md transition-shadow duration-200">
          <span className="text-primary">
            <Star className="w-4 h-4 md:w-5 md:h-5" aria-hidden />
          </span>
          <span className="sr-only">Core Features</span>
          <span aria-hidden>Core Features</span>
        </span>
      </div>

      {/* Header Section */}
      <div className="mb-8 md:mb-12 lg:mb-16">
        <Header
          title="Studio-Grade Experience"
          subtitle="Every detail crafted for the modern crypto learner who values both substance and style."
        />
      </div>

      {/* Feature Cards Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16 lg:mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center">
          {FEATURE_CARDS.map((c) => (
            <div key={c.title} className="w-full max-w-sm lg:max-w-none">
              <CustomCard {...c} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Items Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 justify-items-center">
          {footers.map((footer, index) => (
            <div key={index} className="w-full max-w-xs lg:max-w-none flex justify-center">
              <Footer
                title={footer.title}
                subtitle={footer.subtitle}
                IconComponent={footer.IconComponent}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
