import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-secondary opacity-50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 floating-animation blur-xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 floating-animation blur-xl" style={{animationDelay: "3s"}} />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium ">
            Simple Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Master DeFi in four simple steps and become part of the most innovative crypto education community
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;