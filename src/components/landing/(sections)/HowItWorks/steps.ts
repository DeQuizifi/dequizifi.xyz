import { BookOpen, Trophy, Users, Zap } from "lucide-react";

export type Step = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  delay?: string;
};

export const steps: Step[] = [
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
