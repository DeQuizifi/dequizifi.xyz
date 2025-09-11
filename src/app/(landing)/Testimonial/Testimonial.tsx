import SectionBadge from "@/components/common/SectionBadge";
import TestimonialCards from "@/components/landing/TestimonialCards";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-background to-card/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <SectionBadge
            text="What Our Community Says"
            iconLeft={<Quote className="w-4 h-4" />}
          />

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

        <TestimonialCards />
      </div>
    </section>
  );
};

export default Testimonial;
