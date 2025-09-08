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

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: TestimonialType;
}) {
  return (
    <Card className="flex h-full flex-col rounded-2xl border-0 p-6 shadow-lg bg-gradient-to-br from-purple-100 to-purple-200/80">
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
            <p className="text-sm text-gray-600">{testimonial.handle}</p>
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
  );
}