export type Stat = {
  number: string;
  title: string;
  description?: string;
};

export const stats: Stat[] = [
  {
    number: "15,000+",
    title: "Active Learners",
    description: "Growing community of DeFi enthusiasts",
  },
  {
    number: "200+",
    title: "Interactive Quizzes",
    description: "Covering all major DeFi protocols",
  },
  {
    number: "85+",
    title: "Unique Badges",
    description: "Collectible achievements to unlock",
  },
  {
    number: "1M+",
    title: "Tokens Earned",
    description: "Rewarded to our community",
  },
  {
    number: "95%",
    title: "Completion Rate",
    description: "Students who finish courses",
  },
  {
    number: "50+",
    title: "Countries",
    description: "Global DeFi education reach",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  handle: string;
  role: string;
  badge: string;
  badgeStyle?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "DeQuizifi transformed my understanding of yield farming and liquidity pools. The interactive quizzes made complex concepts crystal clear.",
    name: "Alex Chen",
    handle: "@alexbuilds",
    role: "DeFi Developer",
    badge: "Top Learner",
  },
  {
    quote:
      "Finally, a platform that explains DeFi without the jargon. The gamification keeps me engaged and the rewards system is brilliant.",
    name: "Sarah Martinez",
    handle: "@sarahdefi",
    role: "Crypto Analyst",
    badge: "Quiz Master",
  },
  {
    quote:
      "The Farcaster integration is seamless. I love earning badges and competing with my community while learning about DeFi protocols.",
    name: "Jordan Kim",
    handle: "@jordanweb3",
    role: "Product Manager",
    badge: "Community Leader",
  },
];

export type Partnership = {
  name: string;
  category: string;
};

export const partnerships: Partnership[] = [
  { name: "Ethereum", category: "Blockchain" },
  { name: "Polygon", category: "Layer 2" },
  { name: "Arbitrum", category: "Layer 2" },
  { name: "Optimism", category: "Layer 2" },
  { name: "Uniswap", category: "DeFi" },
  { name: "Aave", category: "DeFi" },
  { name: "Compound", category: "DeFi" },
  { name: "1inch", category: "DeFi" },
  { name: "Chainlink", category: "Infrastructure" },
  { name: "The Graph", category: "Infrastructure" },
  { name: "IPFS", category: "Infrastructure" },
  { name: "Farcaster", category: "Social" },
];
