import type { CustomCardProps } from "@/components/common/CustomCard";

export const aboutCards: Array<
  Omit<CustomCardProps, "buttonlabel"> & { buttonLabel: string }
> = [
  {
    title: "Crypto Curious",
    subtitle: "Newcomers seeking elegant learning",
    description:
      "Perfect for those who want to understand DeFi without overwhelming complexity. Our beautiful interface makes learning enjoyable.",
    features: [
      "Beginner-friendly content",
      "Visual learning approach",
      "Confidence building",
    ],
    buttonLabel: "Start Your Journey",
    icon: "BookOpen",
  },
  {
    title: "DeFi Practitioners",
    subtitle: "Validation through premium experience",
    description:
      "Advanced users who appreciate quality design while testing and expanding their protocol knowledge.",
    features: [
      "Advanced strategies",
      "Expert validation",
      "Professional network",
    ],
    buttonLabel: "Start Your Journey",
    icon: "TrendingUp",
  },
  {
    title: "Farcaster Power Users",
    subtitle: "Design quality meets social features",
    description:
      "Active community members who value both aesthetic excellence and meaningful social learning experiences.",
    features: ["Social challenges", "Community rewards", "Native integration"],
    buttonLabel: "Start Your Journey",
    icon: "Heart",
  },
];
