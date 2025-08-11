import React from "react";

export default function CTA() {
  return (
    <section className="container mx-auto mt-12 mb-8 max-w-3xl rounded-xl border border-[#E9E3FC] bg-white px-8 py-10 text-center shadow-sm">
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        Ready to Transform Your DeFi Knowledge?
      </h2>
      <p className="mb-7 text-gray-600 text-sm">
        Join thousands of learners earning while mastering DeFi through the most
        beautiful quiz platform in crypto.
      </p>
      <div className="flex justify-center gap-4">
        <button className="rounded-md bg-[#A259FF] px-6 py-2 text-white font-medium shadow-md hover:bg-[#7C3AED] transition">
          Get Started Now
        </button>
        <button className="rounded-md bg-white px-6 py-2 text-gray-900 font-medium shadow-md border border-gray-200 hover:bg-gray-50 transition">
          View Demo
        </button>
      </div>
    </section>
  );
}
