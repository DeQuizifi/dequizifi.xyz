import type { CustomCardProps } from "@/components/common/CustomCard";

const FEATURE_CARDS: ReadonlyArray<CustomCardProps> = [
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
];

export default FEATURE_CARDS;
