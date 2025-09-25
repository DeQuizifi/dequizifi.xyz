import { GraduationCap, Trophy, Zap, Users } from "lucide-react";
import type { IconComponent } from "./Feature";

export interface FeatureHighlight {
  title: string;
  subtitle: string;
  IconComponent: IconComponent;
}

const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
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

export default FEATURE_HIGHLIGHTS;
