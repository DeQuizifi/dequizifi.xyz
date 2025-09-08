import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import TestimonialCard from "@/components/landing/TestimonialCard";

const testimonials = [
  {
    quote:
      "DeFi Academy transformed my understanding of yield farming and liquidity pools. The interactive quizzes made complex concepts crystal clear.",
    name: "Alex Chen",
    handle: "@alexbuilds",
    role: "DeFi Developer",
    badge: "Top Learner",
    badgeStyle: "bg-purple-600/80 text-white",
  },
  {
    quote:
      "Finally, a platform that explains DeFi without the jargon. The gamification keeps me engaged and the rewards system is brilliant.",
    name: "Sarah Martinez",
    handle: "@sarahdefi",
    role: "Crypto Analyst",
    badge: "Quiz Master",
    badgeStyle: "bg-purple-600/80 text-white",
  },
  {
    quote:
      "The Farcaster integration is seamless. I love earning badges and competing with my community while learning about DeFi protocols.",
    name: "Jordan Kim",
    handle: "@jordanweb3",
    role: "Product Manager",
    badge: "Community Leader",
    badgeStyle: "bg-purple-600/80 text-white",
  },
];

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge>
            <Quote className="w-4 h-4 mr-2" />
            What Our Community Says
          </Badge>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Thousands
            </span>{" "}
            of Learners
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the community of DeFi enthusiasts who are mastering crypto
            through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;