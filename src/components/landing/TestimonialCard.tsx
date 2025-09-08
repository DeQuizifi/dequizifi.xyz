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
  badgeStyle?: string; // Optional, as it may be missing
};

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <Card className="group relative flex h-full flex-col rounded-3xl border border-primary/10 p-6 shadow-lg bg-gradient-to-br from-card via-background to-card/60 hover:from-primary/5 hover:via-background hover:to-secondary/20 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.05] hover:shadow-[0_20px_70px_-10px_hsl(var(--primary)/0.3)] hover:-translate-y-2 cursor-pointer transform-gpu overflow-hidden before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-secondary/5 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 after:absolute after:inset-0 after:rounded-3xl after:bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)/0.1),transparent_50%)] after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-700">
      <div className="relative z-10">
      <CardHeader className="px-0 pt-0 pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <div className="flex text-primary/60 group-hover:text-primary transition-all duration-500 ease-out">
              {[...Array(5)].map((_, index) => (
                <span 
                  key={index} 
                  className="text-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] hover:text-secondary filter group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.6)]" 
                  style={{ 
                    transitionDelay: `${index * 80}ms`,
                    transformOrigin: 'center center'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="px-0 pb-6 flex-1 relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
        <blockquote className="relative text-card-foreground/70 group-hover:text-card-foreground leading-relaxed text-base transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:tracking-wider">
          <span className="absolute -top-2 -left-2 text-4xl text-primary/20 group-hover:text-primary/40 transition-all duration-500 font-serif">&ldquo;</span>
          <span className="relative pl-6">{testimonial.quote}</span>
          <span className="absolute -bottom-2 -right-2 text-4xl text-primary/20 group-hover:text-primary/40 transition-all duration-500 font-serif">&rdquo;</span>
        </blockquote>
      </CardContent>

      <CardFooter className="px-0 pt-0 relative">
        <div className="w-full flex items-center justify-between">
          <div className="space-y-1 group-hover:transform group-hover:translate-x-2 transition-transform duration-500 ease-out">
            <p className="font-semibold text-card-foreground text-base group-hover:text-primary transition-all duration-500 ease-out group-hover:text-lg group-hover:tracking-wide">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-all duration-500 ease-out group-hover:translate-x-1">{testimonial.handle}</p>
            <p className="text-sm text-muted-foreground group-hover:text-card-foreground/70 transition-all duration-500 ease-out group-hover:translate-x-2">{testimonial.role}</p>
          </div>

          <div className="relative group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
            <span
              className={`relative inline-block rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 group-hover:from-primary group-hover:to-secondary group-hover:text-primary-foreground group-hover:border-primary group-hover:shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.5)] group-hover:font-semibold transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] backdrop-blur-sm${testimonial.badgeStyle ? ` ${testimonial.badgeStyle}` : ''}`}
            >
              {testimonial.badge}
            </span>
          </div>
        </div>
      </CardFooter>
      </div>
    </Card>
  );
}