import React from "react";
import { Button } from "@/components/ui/button";
export default function CTA() {
  return (
    <section
      className="mx-4 sm:mx-auto mt-16 mb-12 max-w-3xl rounded-2xl px-6 sm:px-12 py-12 text-center shadow-lg border border-gray-200 bg-white/80 backdrop-blur-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-72 h-32 bg-gradient-to-r from-primary/70 via-accent/10 to-primary/20 blur-2xl opacity-40" />
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 w-72 h-32 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 blur-2xl opacity-30" />
      </div>

      <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900">
        Ready to Transform Your DeFi Knowledge?
      </h2>

      <p className="mb-8 text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
        Join thousands of learners earning while mastering DeFi through the most beautiful quiz platform in crypto.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="px-8 py-3 text-base font-semibold shadow-md hover:scale-105 transition-transform">
          Get Started Now
        </Button>
        <Button
          variant="secondary"
          size="lg"
          className="px-8 py-3 text-base font-semibold border-gray-300 shadow hover:scale-105 transition-transform"
        >
          View Demo
        </Button>
      </div>
    </section>
  );
}
