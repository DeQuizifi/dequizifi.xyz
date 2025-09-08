import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";

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
            <Card
              key={i}
              className="flex h-full flex-col rounded-2xl border-0 p-6 shadow-lg bg-gradient-to-br from-purple-100 to-purple-200/80"
            >
              <CardHeader className="px-0 pt-0 pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-3">
                    <div className="flex text-purple-400">
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
                <blockquote className="text-gray-700 leading-relaxed text-base">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </CardContent>

              <CardFooter className="px-0 pt-0">
                <div className="w-full flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800 text-base">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600">
                      {testimonial.handle}
                    </p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>

                  <span
                    className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${testimonial.badgeStyle}`}
                  >
                    {testimonial.badge}
                  </span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
