import { Badge } from "@/components/ui/badge";

const Partnership = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium glass-effect"
          >
            Trusted Ecosystem
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Powering{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              DeFi Education
            </span>
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Learn about the most important protocols and platforms in the DeFi
            ecosystem through hands-on experience
          </p>

          {/* partnership card will be implemented here */}
        </div>
      </div>
    </section>
  );
};

export default Partnership;