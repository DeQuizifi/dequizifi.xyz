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
    icon: "Network",
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
      className="bg-sidebar-primary-foreground overflow-x-hidden min-h-screen"
    >
      <h2 id="features-heading" className="sr-only">
        Core Features
      </h2>
      <div className="w-full flex justify-center mt-4">
        <span className="flex items-center px-1 py-0.5 gap-0.5 text-xs rounded-full bg-sidebar-primary-foreground text-foreground border border-chart-2 shadow-sm">
          <span className="text-primary">
            <Star className="w-5 h-5" aria-hidden />
          </span>
          <span className="sr-only">Core Features</span>
          <span aria-hidden>Core Features</span>
        </span>
      </div>

      <Header
        title="Studio-Grade Experience"
        subtitle="Every detail crafted for the modern crypto learner who values both substance and style."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 justify-center items-center lg:items-start my-6">
          {FEATURE_CARDS.map((c) => (
            <CustomCard key={c.title} {...c} />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-20 my-8">
        {footers.map((footer, index) => (
          <Footer
            key={index}
            title={footer.title}
            subtitle={footer.subtitle}
            IconComponent={footer.IconComponent}
          />
        ))}
      </div>
    </section>
  );
}
