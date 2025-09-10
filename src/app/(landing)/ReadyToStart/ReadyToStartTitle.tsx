import { Badge } from "@/components/ui/badge";

export default function ReadyToStartTitle() {
  return (
    <div className="text-center mb-16">
      <Badge
        variant="secondary"
        className="mb-4 px-4 py-2 text-sm font-medium glass-effect"
      >
        Ready to start
      </Badge>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join thousands of
        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {" "}
          DeFi learners{" "}
        </span>
        today
      </h2>

      <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
        Start your journey into decentralized finance with interactive quizzes,
        earn rewards, and become part of the most engaged crypto education
        community on Farcaster.
      </p>
      {/* TODO: CTA buttons will be placed here — implement primary "Start Learning Now" and secondary "Explore Platform" buttons */}
    </div>
  );
}
