import { Badge } from "@/components/ui/badge";
import { Quote } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <Card
              key={i}
              className="flex h-full flex-col rounded-xl border p-6 shadow-sm bg-card/60"
            >
              <CardHeader className="px-0 pt-0 pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="text-sm text-primary">★★★★★</div>
                    <CardTitle className="text-lg font-semibold">
                      PLACEHOLDER CARD HERE
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-0 pb-4 flex-1">
                <CardDescription className="text-sm text-muted-foreground">
                  This is a placeholder testimonial card. We will replace this
                  with the real testimonial content in a later PR.
                </CardDescription>
              </CardContent>

              <CardFooter className="px-0 pt-4">
                <div className="w-full flex items-center justify-between">
                  <div>
                    <p className="font-bold">Name Placeholder</p>
                    <p className="text-sm text-muted-foreground">
                      @handle • Role
                    </p>
                  </div>

                  <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs text-primary">
                    Badge
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
