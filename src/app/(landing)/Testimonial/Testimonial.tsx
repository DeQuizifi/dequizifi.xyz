import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-about-badge-bg text-about-badge-text border-about-badge-text/20 px-4 py-2 text-sm font-medium mb-6 inline-flex items-center justify-center">
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

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial cards will be added here in a future PR */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
