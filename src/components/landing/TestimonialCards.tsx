import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

type TestimonialType = {
  quote: string;
  name: string;
  handle: string;
  role: string;
  badge: string;
  badgeStyle?: string;
};

const testimonials: TestimonialType[] = [
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

function TestimonialCard({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <Card className="flex h-full flex-col rounded-2xl border-0 p-6 shadow-lg bg-card">
      <CardHeader className="px-0 pt-0 pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex text-primary/60">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-2xl">
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0 pb-6 flex-1">
        <blockquote className="text-muted-foreground leading-relaxed text-base">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
      </CardContent>

      <CardFooter className="px-0 pt-0">
        <div className="w-full flex items-center justify-between">
          <div className="space-y-1">
            <p className="font-semibold text-foreground text-base">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {testimonial.handle}
            </p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>

          <span className="inline-block rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {testimonial.badge}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function TestimonialCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <TestimonialCard key={i} testimonial={t} />
      ))}
    </div>
  );
}
